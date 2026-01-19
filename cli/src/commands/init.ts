import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';

const CONFIG_FILE = 'shared-ui.json';

interface InitConfig {
  componentsPath: string;
  aliases: {
    components: string;
    lib: string;
    hooks: string;
    constants: string;
  };
}

export const initCommand = new Command()
  .name('init')
  .description('Initialize shared-ui in your project')
  .option('-y, --yes', 'use default configuration')
  .action(async (options) => {
    try {
      const spinner = ora('Initializing shared-ui...').start();
      const cwd = process.cwd();

      // Check if already initialized
      const configPath = path.join(cwd, CONFIG_FILE);
      if (await fs.pathExists(configPath)) {
        spinner.warn('shared-ui is already initialized');
        const { overwrite } = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: 'Overwrite existing configuration?',
          initial: false,
        });

        if (!overwrite) {
          console.log(chalk.yellow('Initialization cancelled'));
          process.exit(0);
        }
      }

      spinner.stop();

      // Prompt for configuration
      let config: InitConfig;

      if (options.yes) {
        config = {
          componentsPath: 'src/components/ui/shared-ui',
          aliases: {
            components: '@/components',
            lib: '@/lib',
            hooks: '@/hooks',
            constants: '@/constants',
          },
        };
      } else {
        const responses = await prompts([
          {
            type: 'text',
            name: 'componentsPath',
            message: 'Where would you like to install components?',
            initial: 'src/components/ui/shared-ui',
          },
          {
            type: 'text',
            name: 'componentAlias',
            message: 'Path alias for components:',
            initial: '@/components',
          },
          {
            type: 'text',
            name: 'libAlias',
            message: 'Path alias for lib utilities:',
            initial: '@/lib',
          },
          {
            type: 'text',
            name: 'hooksAlias',
            message: 'Path alias for hooks:',
            initial: '@/hooks',
          },
          {
            type: 'text',
            name: 'constantsAlias',
            message: 'Path alias for constants:',
            initial: '@/constants',
          },
        ]);

        config = {
          componentsPath: responses.componentsPath,
          aliases: {
            components: responses.componentAlias,
            lib: responses.libAlias,
            hooks: responses.hooksAlias,
            constants: responses.constantsAlias,
          },
        };
      }

      // Save configuration
      spinner.start('Saving configuration...');
      await fs.writeJSON(configPath, config, { spaces: 2 });
      spinner.succeed('Configuration saved');

      // Create directory structure
      spinner.start('Creating directory structure...');
      const basePath = path.resolve(cwd, config.componentsPath);
      await fs.ensureDir(path.join(basePath, 'ui'));
      await fs.ensureDir(path.join(basePath, '../../../lib'));
      await fs.ensureDir(path.join(basePath, '../../../hooks'));
      await fs.ensureDir(path.join(basePath, '../../../constants'));
      spinner.succeed('Directory structure created');

      console.log(chalk.green('\n✓ Successfully initialized shared-ui!'));
      console.log(chalk.cyan('\nNext steps:'));
      console.log(chalk.gray('  1. Add components:'));
      console.log(chalk.gray('     npx shared-ui add button input'));
      console.log(chalk.gray('  2. Import in your code:'));
      console.log(
        chalk.gray(
          `     import { Button } from '${config.aliases.components}/ui/shared-ui/button'`
        )
      );
    } catch (error) {
      console.error(chalk.red('\nError:'), error);
      process.exit(1);
    }
  });
