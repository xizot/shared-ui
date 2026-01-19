import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { getRegistry, resolveTree } from '../utils/registry.js';
import { detectPackageManager, installDependencies } from '../utils/package-manager.js';
import { getProjectConfig, type Config } from '../utils/config.js';

export const addCommand = new Command()
  .name('add')
  .description('Add components to your project')
  .argument('[components...]', 'components to add')
  .option('-y, --yes', 'skip confirmation prompt')
  .option('-o, --overwrite', 'overwrite existing files')
  .option('-a, --all', 'add all available components')
  .option('-p, --path <path>', 'custom path for components')
  .action(async (components: string[], options) => {
    try {
      const spinner = ora('Loading configuration...').start();

      // Get project config
      const config = await getProjectConfig(process.cwd());
      if (!config) {
        spinner.fail('Could not find project configuration');
        console.log(
          chalk.yellow(
            '\nRun `npx shared-ui init` to initialize the project first.'
          )
        );
        process.exit(1);
      }

      // Get registry
      const registry = await getRegistry();
      spinner.succeed('Configuration loaded');

      // Determine which components to install
      let componentsToInstall: string[];

      if (options.all) {
        componentsToInstall = registry.map((entry) => entry.name);
      } else if (components.length === 0) {
        spinner.fail('No components specified');
        console.log(
          chalk.yellow(
            '\nUsage: npx shared-ui add <component-name> [<component-name>...]'
          )
        );
        console.log(
          chalk.yellow('Or use --all flag to install all components')
        );
        process.exit(1);
      } else {
        componentsToInstall = components;
      }

      // Validate components exist
      const invalidComponents = componentsToInstall.filter(
        (name) => !registry.find((entry) => entry.name === name)
      );

      if (invalidComponents.length > 0) {
        spinner.fail('Invalid components');
        console.log(
          chalk.red('\nThe following components could not be found:')
        );
        invalidComponents.forEach((name) => console.log(chalk.red(`  - ${name}`)));
        console.log(chalk.yellow('\nAvailable components:'));
        registry
          .filter((entry) => entry.type === 'registry:ui')
          .forEach((entry) => console.log(chalk.gray(`  - ${entry.name}`)));
        process.exit(1);
      }

      // Resolve dependency tree
      spinner.start('Resolving dependencies...');
      const tree = resolveTree(registry, componentsToInstall);
      spinner.succeed(
        `Resolved ${tree.length} component${tree.length > 1 ? 's' : ''}`
      );

      // Show what will be installed
      console.log(chalk.cyan('\nComponents to install:'));
      tree.forEach((entry) => {
        const icon =
          entry.type === 'registry:ui'
            ? '📦'
            : entry.type === 'registry:lib'
              ? '🔧'
              : entry.type === 'registry:hook'
                ? '🪝'
                : '📝';
        console.log(`  ${icon} ${entry.name}`);
      });

      // Collect all dependencies
      const allDependencies = new Set<string>();
      tree.forEach((entry) => {
        entry.dependencies?.forEach((dep) => allDependencies.add(dep));
      });

      if (allDependencies.size > 0) {
        console.log(chalk.cyan('\nPackage dependencies:'));
        Array.from(allDependencies).forEach((dep) =>
          console.log(chalk.gray(`  - ${dep}`))
        );
      }

      // Confirm installation
      if (!options.yes) {
        const prompts = await import('prompts');
        const { confirm } = await prompts.default({
          type: 'confirm',
          name: 'confirm',
          message: 'Proceed with installation?',
          initial: true,
        });

        if (!confirm) {
          console.log(chalk.yellow('Installation cancelled'));
          process.exit(0);
        }
      }

      // Install components
      spinner.start('Installing components...');
      const targetDir = options.path || config.componentsPath;
      const targetPath = path.resolve(process.cwd(), targetDir);

      // Ensure target directory exists
      await fs.ensureDir(targetPath);

      let installedCount = 0;
      let skippedCount = 0;

      for (const entry of tree) {
        for (const file of entry.files) {
          const filePath = path.join(targetPath, file.path);
          const fileExists = await fs.pathExists(filePath);

          if (fileExists && !options.overwrite) {
            skippedCount++;
            continue;
          }

          // Ensure directory exists
          await fs.ensureDir(path.dirname(filePath));

          // Write file
          await fs.writeFile(filePath, file.content || '');
          installedCount++;
        }
      }

      spinner.succeed(
        `Installed ${installedCount} file${installedCount > 1 ? 's' : ''}`
      );

      if (skippedCount > 0) {
        console.log(
          chalk.yellow(
            `\nSkipped ${skippedCount} existing file${skippedCount > 1 ? 's' : ''}. Use --overwrite to replace them.`
          )
        );
      }

      // Install package dependencies
      if (allDependencies.size > 0) {
        spinner.start('Installing package dependencies...');
        const packageManager = await detectPackageManager(process.cwd());

        try {
          await installDependencies(
            Array.from(allDependencies),
            packageManager,
            process.cwd()
          );
          spinner.succeed('Package dependencies installed');
        } catch (error) {
          spinner.warn('Failed to install some package dependencies');
          console.log(
            chalk.yellow(
              '\nYou may need to install the following packages manually:'
            )
          );
          Array.from(allDependencies).forEach((dep) =>
            console.log(chalk.gray(`  ${packageManager} add ${dep}`))
          );
        }
      }

      console.log(chalk.green('\n✓ Successfully added components!'));
    } catch (error) {
      console.error(chalk.red('\nError:'), error);
      process.exit(1);
    }
  });
