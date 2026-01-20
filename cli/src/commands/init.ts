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
];

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

      if (options.yes || options.defaults) {
        config = {
          $schema: 'https://shared-ui.xizot.dev/schema.json',
          style: 'default',
          tailwind: {
            config: 'tailwind.config.js',
            css: 'src/index.css',
          },
          aliases: {
            components: '@/components',
            ui: '@/components/ui',
            lib: '@/lib',
            hooks: '@/hooks',
            constants: '@/constants',
          },
        };
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
            name: 'tailwindConfig',
            message: 'Where is your tailwind.config file?',
            initial: 'tailwind.config.js',
          },
          {
            type: 'text',
            name: 'globalCss',
            message: 'Where is your global CSS file?',
            initial: 'src/index.css',
          },
          {
            type: 'text',
            name: 'componentsAlias',
            message: 'Configure the import alias for components:',
            initial: '@/components',
          },
          {
            type: 'text',
            name: 'uiAlias',
            message: 'Configure the import alias for ui:',
            initial: '@/components/ui',
          },
          {
            type: 'text',
            name: 'libAlias',
            message: 'Configure the import alias for lib:',
            initial: '@/lib',
          },
          {
            type: 'text',
            name: 'hooksAlias',
            message: 'Configure the import alias for hooks:',
            initial: '@/hooks',
          },
          {
            type: 'text',
            name: 'constantsAlias',
            message: 'Configure the import alias for constants:',
            initial: '@/constants',
          },
        ]);

        if (!responses.style) {
          console.log(chalk.gray('\nInitialization cancelled'));
          process.exit(0);
        }

        config = {
          $schema: 'https://shared-ui.xizot.dev/schema.json',
          style: responses.style,
          tailwind: {
            config: responses.tailwindConfig,
            css: responses.globalCss,
          },
          aliases: {
            components: responses.componentsAlias,
            ui: responses.uiAlias,
            lib: responses.libAlias,
            hooks: responses.hooksAlias,
            constants: responses.constantsAlias,
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
        // Convert @/components -> src/components
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
        spinner.start('Installing dependencies...');
        const packageManager = await detectPackageManager(cwd);

        try {
          await installDependencies(BASE_DEPENDENCIES, packageManager, cwd);
          spinner.succeed(`Dependencies installed with ${packageManager}`);
        } catch (error) {
          spinner.warn('Failed to install some dependencies');
          console.log(chalk.yellow('\nYou may need to install these packages manually:'));
          BASE_DEPENDENCIES.forEach((dep) =>
            console.log(chalk.gray(`  ${packageManager} add ${dep}`)),
          );
        }
      }

      // Print success message
      console.log(chalk.green('\n✅ Successfully initialized shared-ui!\n'));

      console.log(chalk.cyan('Project structure:'));
      console.log(chalk.gray(`  ${aliasToPath(config.aliases.ui)}/     → UI components`));
      console.log(chalk.gray(`  ${aliasToPath(config.aliases.lib)}/    → Utility functions`));
      console.log(chalk.gray(`  ${aliasToPath(config.aliases.hooks)}/  → Custom hooks`));
      console.log(chalk.gray(`  ${aliasToPath(config.aliases.constants)}/ → Constants`));

      console.log(chalk.cyan('\nNext steps:'));
      console.log(chalk.gray('  1. Add components:'));
      console.log(chalk.white('     npx @xizot/shared-ui add button'));
      console.log(chalk.gray('  2. Add multiple components:'));
      console.log(chalk.white('     npx @xizot/shared-ui add button input card'));
      console.log(chalk.gray('  3. Add all components:'));
      console.log(chalk.white('     npx @xizot/shared-ui add --all'));
      console.log(chalk.gray('\n  4. Import in your code:'));
      console.log(chalk.white(`     import { Button } from '${config.aliases.ui}/button'`));
      console.log();
    } catch (error) {
      console.error(chalk.red('\n❌ Error:'), error);
      process.exit(1);
    }
  });
