import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import { STYLE_CHOICES, getStyleCSS, type StyleName } from '../styles/index.js';
import { detectPackageManager, installDependencies } from '../utils/package-manager.js';

const CONFIG_FILE = 'shared-ui.json';

interface InitConfig {
  $schema: string;
  style: string;
  tailwind: {
    config: string;
    css: string;
  };
  aliases: {
    components: string;
    ui: string;
    lib: string;
    hooks: string;
    constants: string;
  };
}

// Base dependencies that should be installed during init
const BASE_DEPENDENCIES = [
  'tailwindcss',
  'tailwind-merge',
  'clsx',
  'class-variance-authority',
  'lucide-react',
  '@radix-ui/react-slot',
  'tailwindcss-animate',
];

type BuildTool = 'vite' | 'next' | 'other';

interface BuildToolInfo {
  tailwindPlugin: string;
  configInstructions: string[];
}

const BUILD_TOOL_CONFIG: Record<BuildTool, BuildToolInfo> = {
  vite: {
    tailwindPlugin: '@tailwindcss/vite',
    configInstructions: [
      'Add to vite.config.ts:',
      "  import tailwindcss from '@tailwindcss/vite'",
      '  plugins: [react(), tailwindcss()]',
    ],
  },
  next: {
    tailwindPlugin: '@tailwindcss/postcss',
    configInstructions: [
      'Add to postcss.config.mjs:',
      '  export default { plugins: { "@tailwindcss/postcss": {} } }',
    ],
  },
  other: {
    tailwindPlugin: '@tailwindcss/postcss',
    configInstructions: [
      'Add PostCSS config:',
      '  module.exports = { plugins: { "@tailwindcss/postcss": {} } }',
    ],
  },
};

// Auto-configure Vite
async function configureVite(cwd: string): Promise<boolean> {
  const viteConfigPaths = [
    'vite.config.ts',
    'vite.config.js',
    'vite.config.mts',
    'vite.config.mjs',
  ];

  for (const configFile of viteConfigPaths) {
    const configPath = path.join(cwd, configFile);
    if (await fs.pathExists(configPath)) {
      let content = await fs.readFile(configPath, 'utf-8');

      // Check if already configured
      if (content.includes('@tailwindcss/vite')) {
        return true; // Already configured
      }

      // Add import at the top
      const importStatement = `import tailwindcss from "@tailwindcss/vite";\n`;

      // Find where to insert import (after other imports or at the top)
      if (content.includes('import ')) {
        // Find the last import statement and add after it
        const lines = content.split('\n');
        let lastImportIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) {
            lastImportIndex = i;
          }
        }
        if (lastImportIndex >= 0) {
          lines.splice(lastImportIndex + 1, 0, importStatement.trim());
          content = lines.join('\n');
        }
      } else {
        content = importStatement + content;
      }

      // Add tailwindcss() to plugins array
      // Match plugins: [...] or plugins: [...]
      const pluginsRegex = /plugins:\s*\[([^\]]*)\]/;
      const match = content.match(pluginsRegex);

      if (match) {
        const existingPlugins = match[1].trim();
        if (existingPlugins) {
          // Add tailwindcss() at the end of existing plugins
          content = content.replace(pluginsRegex, `plugins: [${existingPlugins}, tailwindcss()]`);
        } else {
          content = content.replace(pluginsRegex, `plugins: [tailwindcss()]`);
        }
      }

      await fs.writeFile(configPath, content);
      return true;
    }
  }
  return false;
}

// Auto-configure PostCSS for Next.js and other frameworks
async function configurePostCSS(cwd: string): Promise<boolean> {
  const postcssConfigPath = path.join(cwd, 'postcss.config.mjs');
  const postcssConfigCjsPath = path.join(cwd, 'postcss.config.cjs');
  const postcssConfigJsPath = path.join(cwd, 'postcss.config.js');

  // Check if any postcss config exists
  const existingConfigs = [postcssConfigPath, postcssConfigCjsPath, postcssConfigJsPath];
  for (const configPath of existingConfigs) {
    if (await fs.pathExists(configPath)) {
      const content = await fs.readFile(configPath, 'utf-8');
      if (content.includes('@tailwindcss/postcss')) {
        return true; // Already configured
      }
    }
  }

  // Create new postcss.config.mjs
  const postcssContent = `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`;

  await fs.writeFile(postcssConfigPath, postcssContent);
  return true;
}

export const initCommand = new Command()
  .name('init')
  .description('Initialize shared-ui in your project')
  .option('-y, --yes', 'use default configuration')
  .option('-d, --defaults', 'use default values and skip prompts')
  .option('--skip-deps', 'skip installing dependencies')
  .action(async (options) => {
    try {
      console.log(chalk.cyan('\n🚀 Welcome to shared-ui!\n'));

      const cwd = process.cwd();

      // Check if already initialized
      const configPath = path.join(cwd, CONFIG_FILE);
      if (await fs.pathExists(configPath)) {
        const { overwrite } = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: chalk.yellow('shared-ui is already initialized. Overwrite?'),
          initial: false,
        });

        if (!overwrite) {
          console.log(chalk.gray('Initialization cancelled'));
          process.exit(0);
        }
      }

      // Prompt for configuration
      let config: InitConfig;
      let cssPath: string;

      if (options.yes || options.defaults) {
        config = {
          $schema: 'https://shared-ui.xizot.dev/schema.json',
          style: 'default',
          tailwind: {
            config: 'tailwind.config.js',
            css: 'src/index.css',
          },
          aliases: {
            components: '@/shared/components',
            ui: '@/shared/components/ui',
            lib: '@/shared/lib',
            hooks: '@/shared/hooks',
            constants: '@/shared/constants',
          },
        };
        cssPath = config.tailwind.css;
      } else {
        const responses = await prompts([
          {
            type: 'select',
            name: 'style',
            message: 'Which style would you like to use?',
            choices: STYLE_CHOICES.map((choice) => ({
              title: choice.title,
              value: choice.value,
              description: choice.description,
            })),
            initial: 0,
          },
          {
            type: 'text',
            name: 'cssPath',
            message: 'Where is your global CSS file?',
            initial: 'src/index.css',
          },
        ]);

        if (!responses.style) {
          console.log(chalk.gray('\nInitialization cancelled'));
          process.exit(0);
        }

        cssPath = responses.cssPath || 'src/index.css';
        config = {
          $schema: 'https://shared-ui.xizot.dev/schema.json',
          style: responses.style,
          tailwind: {
            config: 'tailwind.config.js',
            css: cssPath,
          },
          aliases: {
            components: '@/shared/components',
            ui: '@/shared/components/ui',
            lib: '@/shared/lib',
            hooks: '@/shared/hooks',
            constants: '@/shared/constants',
          },
        };
      }

      const spinner = ora('Initializing shared-ui...').start();

      // Save configuration
      spinner.text = 'Saving configuration...';
      await fs.writeJSON(configPath, config, { spaces: 2 });
      spinner.succeed('Configuration saved');

      // Create directory structure based on aliases
      spinner.start('Creating directory structure...');

      const aliasToPath = (alias: string): string => {
        // Convert @/shared/components -> src/shared/components
        return alias.replace(/^@\//, 'src/');
      };

      const directories = [
        aliasToPath(config.aliases.ui),
        aliasToPath(config.aliases.lib),
        aliasToPath(config.aliases.hooks),
        aliasToPath(config.aliases.constants),
      ];

      for (const dir of directories) {
        await fs.ensureDir(path.join(cwd, dir));
      }

      spinner.succeed('Directory structure created');

      // Write CSS file based on selected style
      spinner.start('Writing CSS styles...');
      const fullCssPath = path.join(cwd, cssPath);
      await fs.ensureDir(path.dirname(fullCssPath));
      const cssContent = getStyleCSS(config.style as StyleName);
      await fs.writeFile(fullCssPath, cssContent);
      spinner.succeed('CSS styles written');

      // Create base utility file (lib/utils.ts)
      const libPath = aliasToPath(config.aliases.lib);
      const utilsPath = path.join(cwd, libPath, 'utils.ts');

      if (!(await fs.pathExists(utilsPath))) {
        spinner.start('Creating utility files...');
        const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
        await fs.writeFile(utilsPath, utilsContent);
        spinner.succeed('Utility files created');
      }

      // Install dependencies
      if (!options.skipDeps) {
        // Ask user to select build tool
        const { buildTool } = await prompts({
          type: 'select',
          name: 'buildTool',
          message: 'Which build tool are you using?',
          choices: [
            { title: 'Vite', value: 'vite' },
            { title: 'Next.js', value: 'next' },
            { title: 'Other (PostCSS)', value: 'other' },
          ],
        });

        if (!buildTool) {
          console.log(chalk.yellow('\nSkipping dependency installation.'));
          return;
        }

        const buildToolInfo = BUILD_TOOL_CONFIG[buildTool as BuildTool];

        spinner.start('Installing dependencies...');
        const packageManager = await detectPackageManager(cwd);

        // Add tailwind plugin based on selected build tool
        const depsToInstall = [...BASE_DEPENDENCIES, buildToolInfo.tailwindPlugin];

        try {
          await installDependencies(depsToInstall, packageManager, cwd);
          spinner.succeed(`Dependencies installed with ${packageManager}`);
        } catch (error) {
          spinner.warn('Failed to install some dependencies');
          console.log(chalk.yellow('\nYou may need to install these packages manually:'));
          depsToInstall.forEach((dep) => console.log(chalk.gray(`  ${packageManager} add ${dep}`)));
        }

        // Auto-configure Tailwind CSS based on build tool
        spinner.start('Configuring Tailwind CSS...');
        let configSuccess = false;

        if (buildTool === 'vite') {
          configSuccess = await configureVite(cwd);
          if (configSuccess) {
            spinner.succeed('Tailwind CSS configured in vite.config');
          } else {
            spinner.warn('Could not find vite.config file');
          }
        } else {
          configSuccess = await configurePostCSS(cwd);
          if (configSuccess) {
            spinner.succeed('Tailwind CSS configured in postcss.config.mjs');
          }
        }

        // Print success message
        console.log(chalk.green('\n✅ Successfully initialized shared-ui!\n'));

        console.log(chalk.cyan('Project structure:'));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.ui)}/     → UI components`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.lib)}/    → Utility functions`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.hooks)}/  → Custom hooks`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.constants)}/ → Constants`));

        // Only show manual config instructions if auto-config failed
        if (!configSuccess) {
          console.log(chalk.cyan('\nNext steps:'));
          console.log(chalk.gray('  1. Configure Tailwind CSS:'));
          buildToolInfo.configInstructions.forEach((line) => {
            console.log(chalk.white(`     ${line}`));
          });
          console.log(chalk.gray('\n  2. Add components:'));
        } else {
          console.log(chalk.cyan('\nNext steps:'));
          console.log(chalk.gray('  1. Add components:'));
        }
        console.log(chalk.white('     npx github:xizot/shared-ui add button'));
        console.log(chalk.gray('  2. Add multiple components:'));
        console.log(chalk.white('     npx github:xizot/shared-ui add button input card'));
        console.log(chalk.gray('  3. Add all components:'));
        console.log(chalk.white('     npx github:xizot/shared-ui add --all'));
        console.log(chalk.gray('\n  4. Import in your code:'));
        console.log(chalk.white(`     import { Button } from '${config.aliases.ui}/button'`));
      } else {
        // Print success message without deps
        console.log(chalk.green('\n✅ Successfully initialized shared-ui!\n'));

        console.log(chalk.cyan('Project structure:'));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.ui)}/     → UI components`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.lib)}/    → Utility functions`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.hooks)}/  → Custom hooks`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.constants)}/ → Constants`));

        console.log(chalk.cyan('\nNext steps:'));
        console.log(chalk.gray('  1. Install dependencies and configure Tailwind CSS'));
        console.log(chalk.gray('  2. Add components:'));
        console.log(chalk.white('     npx github:xizot/shared-ui add button'));
      }
      console.log();
    } catch (error) {
      console.error(chalk.red('\n❌ Error:'), error);
      process.exit(1);
    }
  });
