import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
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

// CSS content for default style
const DEFAULT_STYLE_CSS = `@import "tailwindcss";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

/* =========================
   Design tokens (OKLCH only)
   ========================= */
@layer base {
  :root {
    --radius: 0.625rem;

    --background: oklch(1 0 0);
    --foreground: oklch(0.129 0.042 264.695);

    --card: oklch(1 0 0);
    --card-foreground: oklch(0.129 0.042 264.695);

    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.129 0.042 264.695);

    --primary: oklch(0.4 0.13 197);
    --primary-foreground: oklch(1 0 0);

    --secondary: oklch(0.968 0.007 247.896);
    --secondary-foreground: oklch(0.208 0.042 265.755);

    --muted: oklch(0.968 0.007 247.896);
    --muted-foreground: oklch(0.554 0.046 257.417);

    --accent: oklch(0.968 0.007 247.896);
    --accent-foreground: oklch(0.208 0.042 265.755);

    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.984 0.003 247.858);

    --border: oklch(0.929 0.013 255.508);
    --input: oklch(0.929 0.013 255.508);
    --ring: oklch(0.704 0.04 256.788);

    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);

    /* Sidebar tokens */
    --sidebar: oklch(0.984 0.003 247.858);
    --sidebar-foreground: oklch(0.129 0.042 264.695);
    --sidebar-primary: oklch(0.208 0.042 265.755);
    --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
    --sidebar-accent: oklch(0.968 0.007 247.896);
    --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
    --sidebar-border: oklch(0.929 0.013 255.508);
    --sidebar-ring: oklch(0.704 0.04 256.788);
  }

  .dark {
    --background: oklch(0.129 0.042 264.695);
    --foreground: oklch(0.984 0.003 247.858);

    --card: oklch(0.208 0.042 265.755);
    --card-foreground: oklch(0.984 0.003 247.858);

    --popover: oklch(0.208 0.042 265.755);
    --popover-foreground: oklch(0.984 0.003 247.858);

    --primary: oklch(0.55 0.13 197);
    --primary-foreground: oklch(1 0 0);

    --secondary: oklch(0.279 0.041 260.031);
    --secondary-foreground: oklch(0.984 0.003 247.858);

    --muted: oklch(0.279 0.041 260.031);
    --muted-foreground: oklch(0.704 0.04 256.788);

    --accent: oklch(0.279 0.041 260.031);
    --accent-foreground: oklch(0.984 0.003 247.858);

    --destructive: oklch(0.704 0.191 22.216);
    --destructive-foreground: oklch(0.984 0.003 247.858);

    --border: oklch(1 0 0 / 10%);
    --input: oklch(1 0 0 / 15%);
    --ring: oklch(0.551 0.027 264.364);

    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);

    --sidebar: oklch(0.208 0.042 265.755);
    --sidebar-foreground: oklch(0.984 0.003 247.858);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
    --sidebar-accent: oklch(0.279 0.041 260.031);
    --sidebar-accent-foreground: oklch(0.984 0.003 247.858);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.551 0.027 264.364);
  }

  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/* =========================
   Tailwind theme mapping
   ========================= */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}
`;

// CSS content for new-york style
const NEW_YORK_STYLE_CSS = `@import "tailwindcss";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

/* =========================
   Design tokens (OKLCH only) - New York Style
   ========================= */
@layer base {
  :root {
    --radius: 0.5rem;

    --background: oklch(1 0 0);
    --foreground: oklch(0.141 0.005 285.823);

    --card: oklch(1 0 0);
    --card-foreground: oklch(0.141 0.005 285.823);

    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.141 0.005 285.823);

    --primary: oklch(0.21 0.006 285.885);
    --primary-foreground: oklch(0.985 0.002 247.839);

    --secondary: oklch(0.967 0.001 286.375);
    --secondary-foreground: oklch(0.21 0.006 285.885);

    --muted: oklch(0.967 0.001 286.375);
    --muted-foreground: oklch(0.552 0.016 285.938);

    --accent: oklch(0.967 0.001 286.375);
    --accent-foreground: oklch(0.21 0.006 285.885);

    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.984 0.003 247.858);

    --border: oklch(0.92 0.004 286.32);
    --input: oklch(0.92 0.004 286.32);
    --ring: oklch(0.705 0.015 286.067);

    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);

    /* Sidebar tokens */
    --sidebar: oklch(0.984 0.003 247.858);
    --sidebar-foreground: oklch(0.141 0.005 285.823);
    --sidebar-primary: oklch(0.21 0.006 285.885);
    --sidebar-primary-foreground: oklch(0.985 0.002 247.839);
    --sidebar-accent: oklch(0.967 0.001 286.375);
    --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
    --sidebar-border: oklch(0.92 0.004 286.32);
    --sidebar-ring: oklch(0.705 0.015 286.067);
  }

  .dark {
    --background: oklch(0.141 0.005 285.823);
    --foreground: oklch(0.985 0.002 247.839);

    --card: oklch(0.141 0.005 285.823);
    --card-foreground: oklch(0.985 0.002 247.839);

    --popover: oklch(0.141 0.005 285.823);
    --popover-foreground: oklch(0.985 0.002 247.839);

    --primary: oklch(0.985 0.002 247.839);
    --primary-foreground: oklch(0.21 0.006 285.885);

    --secondary: oklch(0.274 0.006 286.033);
    --secondary-foreground: oklch(0.985 0.002 247.839);

    --muted: oklch(0.274 0.006 286.033);
    --muted-foreground: oklch(0.705 0.015 286.067);

    --accent: oklch(0.274 0.006 286.033);
    --accent-foreground: oklch(0.985 0.002 247.839);

    --destructive: oklch(0.704 0.191 22.216);
    --destructive-foreground: oklch(0.984 0.003 247.858);

    --border: oklch(0.274 0.006 286.033);
    --input: oklch(0.274 0.006 286.033);
    --ring: oklch(0.442 0.017 285.786);

    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);

    --sidebar: oklch(0.21 0.006 285.885);
    --sidebar-foreground: oklch(0.985 0.002 247.839);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0.002 247.839);
    --sidebar-accent: oklch(0.274 0.006 286.033);
    --sidebar-accent-foreground: oklch(0.985 0.002 247.839);
    --sidebar-border: oklch(0.274 0.006 286.033);
    --sidebar-ring: oklch(0.442 0.017 285.786);
  }

  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/* =========================
   Tailwind theme mapping
   ========================= */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}
`;

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
            choices: [
              { title: 'Default', value: 'default' },
              { title: 'New York', value: 'new-york' },
            ],
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
      const cssContent = config.style === 'new-york' ? NEW_YORK_STYLE_CSS : DEFAULT_STYLE_CSS;
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
