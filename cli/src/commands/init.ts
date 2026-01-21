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

// Auto-configure TypeScript path aliases in tsconfig.json
async function configureTsConfig(cwd: string): Promise<boolean> {
  const tsconfigPaths = ['tsconfig.json', 'tsconfig.app.json'];

  for (const configFile of tsconfigPaths) {
    const configPath = path.join(cwd, configFile);
    if (await fs.pathExists(configPath)) {
      try {
        const content = await fs.readFile(configPath, 'utf-8');

        // Check if already has @/* alias
        if (content.includes('"@/*"') || content.includes("'@/*'")) {
          return true; // Already configured
        }

        // Parse JSON (handle comments by removing them)
        const jsonContent = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
        const tsconfig = JSON.parse(jsonContent);

        // Ensure compilerOptions exists
        if (!tsconfig.compilerOptions) {
          tsconfig.compilerOptions = {};
        }

        // Add baseUrl if not present
        if (!tsconfig.compilerOptions.baseUrl) {
          tsconfig.compilerOptions.baseUrl = '.';
        }

        // Add paths if not present
        if (!tsconfig.compilerOptions.paths) {
          tsconfig.compilerOptions.paths = {};
        }

        // Add @/* alias
        if (!tsconfig.compilerOptions.paths['@/*']) {
          tsconfig.compilerOptions.paths['@/*'] = ['./src/*'];
        }

        await fs.writeJSON(configPath, tsconfig, { spaces: 2 });
        return true;
      } catch {
        // If JSON parsing fails, try string manipulation
        let content = await fs.readFile(configPath, 'utf-8');

        if (content.includes('"@/*"') || content.includes("'@/*'")) {
          return true;
        }

        // Try to add paths to compilerOptions
        if (content.includes('"compilerOptions"')) {
          // Check if paths already exists
          if (!content.includes('"paths"')) {
            // Add baseUrl and paths after compilerOptions opening brace
            const compilerOptionsMatch = content.match(/"compilerOptions"\s*:\s*\{/);
            if (compilerOptionsMatch) {
              const insertIndex = compilerOptionsMatch.index! + compilerOptionsMatch[0].length;
              const pathsConfig = `\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    },`;
              content = content.slice(0, insertIndex) + pathsConfig + content.slice(insertIndex);
              await fs.writeFile(configPath, content);
              return true;
            }
          }
        }
        return false;
      }
    }
  }
  return false;
}

// Auto-configure Vite path aliases
async function configureViteAlias(cwd: string): Promise<boolean> {
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

      // Check if already has alias configured
      if (content.includes("'@'") || content.includes('"@"')) {
        return true; // Already configured
      }

      // Check if path import exists, if not add it
      if (!content.includes('import path from') && !content.includes('import * as path from')) {
        // Add path import at the top
        const pathImport = `import path from "path";\n`;
        if (content.includes('import ')) {
          const lines = content.split('\n');
          let lastImportIndex = -1;
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().startsWith('import ')) {
              lastImportIndex = i;
            }
          }
          if (lastImportIndex >= 0) {
            lines.splice(lastImportIndex + 1, 0, pathImport.trim());
            content = lines.join('\n');
          }
        } else {
          content = pathImport + content;
        }
      }

      // Check if resolve.alias exists
      if (content.includes('resolve:') && content.includes('alias:')) {
        // Alias section exists, try to add @
        const aliasMatch = content.match(/alias:\s*\{([^}]*)\}/);
        if (aliasMatch) {
          const existingAliases = aliasMatch[1].trim();
          if (existingAliases) {
            content = content.replace(
              /alias:\s*\{([^}]*)\}/,
              `alias: {\n      "@": path.resolve(__dirname, "./src"),${existingAliases}\n    }`,
            );
          } else {
            content = content.replace(
              /alias:\s*\{([^}]*)\}/,
              `alias: {\n      "@": path.resolve(__dirname, "./src")\n    }`,
            );
          }
        }
      } else if (content.includes('resolve:')) {
        // resolve exists but no alias
        const resolveMatch = content.match(/resolve:\s*\{([^}]*)\}/);
        if (resolveMatch) {
          const existingResolve = resolveMatch[1].trim();
          content = content.replace(
            /resolve:\s*\{([^}]*)\}/,
            `resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src")\n    },${existingResolve}\n  }`,
          );
        }
      } else {
        // No resolve section, add it to defineConfig
        const defineConfigMatch = content.match(/defineConfig\s*\(\s*\{/);
        if (defineConfigMatch) {
          const insertIndex = defineConfigMatch.index! + defineConfigMatch[0].length;
          const resolveConfig = `\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src"),\n    },\n  },`;
          content = content.slice(0, insertIndex) + resolveConfig + content.slice(insertIndex);
        }
      }

      await fs.writeFile(configPath, content);
      return true;
    }
  }
  return false;
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

        // Auto-configure path aliases
        spinner.start('Configuring path aliases...');
        const tsConfigSuccess = await configureTsConfig(cwd);
        let aliasConfigSuccess = false;

        if (buildTool === 'vite') {
          aliasConfigSuccess = await configureViteAlias(cwd);
          if (tsConfigSuccess && aliasConfigSuccess) {
            spinner.succeed('Path aliases configured in tsconfig.json and vite.config');
          } else if (tsConfigSuccess) {
            spinner.succeed('Path aliases configured in tsconfig.json');
            console.log(
              chalk.yellow(
                '  ⚠️  Could not auto-configure vite.config. Add manually:\n' +
                  '     resolve: { alias: { "@": path.resolve(__dirname, "./src") } }',
              ),
            );
          } else {
            spinner.warn('Could not auto-configure path aliases');
          }
        } else if (buildTool === 'next') {
          // Next.js uses tsconfig paths directly, no additional config needed
          if (tsConfigSuccess) {
            spinner.succeed('Path aliases configured in tsconfig.json');
          } else {
            spinner.warn('Could not auto-configure path aliases in tsconfig.json');
          }
          aliasConfigSuccess = tsConfigSuccess;
        } else {
          if (tsConfigSuccess) {
            spinner.succeed('Path aliases configured in tsconfig.json');
          } else {
            spinner.warn('Could not auto-configure path aliases');
          }
          aliasConfigSuccess = tsConfigSuccess;
        }

        // Print success message
        console.log(chalk.green('\n✅ Successfully initialized shared-ui!\n'));

        console.log(chalk.cyan('Project structure:'));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.ui)}/     → UI components`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.lib)}/    → Utility functions`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.hooks)}/  → Custom hooks`));
        console.log(chalk.gray(`  ${aliasToPath(config.aliases.constants)}/ → Constants`));

        // Only show manual config instructions if auto-config failed
        const needsManualConfig = !configSuccess || !aliasConfigSuccess;
        if (needsManualConfig) {
          console.log(chalk.cyan('\nManual configuration needed:'));
          let stepNum = 1;

          if (!configSuccess) {
            console.log(chalk.gray(`  ${stepNum}. Configure Tailwind CSS:`));
            buildToolInfo.configInstructions.forEach((line) => {
              console.log(chalk.white(`     ${line}`));
            });
            stepNum++;
          }

          if (!aliasConfigSuccess) {
            console.log(chalk.gray(`\n  ${stepNum}. Configure path aliases in tsconfig.json:`));
            console.log(chalk.white('     "compilerOptions": {'));
            console.log(chalk.white('       "baseUrl": ".",'));
            console.log(chalk.white('       "paths": { "@/*": ["./src/*"] }'));
            console.log(chalk.white('     }'));

            if (buildTool === 'vite') {
              console.log(chalk.gray('\n     And in vite.config.ts:'));
              console.log(chalk.white('     resolve: {'));
              console.log(chalk.white('       alias: { "@": path.resolve(__dirname, "./src") }'));
              console.log(chalk.white('     }'));
            }
          }
        }

        console.log(chalk.cyan('\nNext steps:'));
        console.log(chalk.gray('  1. Add components:'));
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
