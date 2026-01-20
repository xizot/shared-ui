import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import { getProjectConfig, type Config } from '../utils/config.js';
import { detectPackageManager, installDependencies } from '../utils/package-manager.js';
import { getRegistry, resolveTree } from '../utils/registry.js';

export const addCommand = new Command()
  .name('add')
  .description('Add components to your project')
  .argument('[components...]', 'components to add')
  .option('-y, --yes', 'skip confirmation prompt')
  .option('-o, --overwrite', 'overwrite existing files')
  .option('-a, --all', 'add all available components')
  .option('-c, --cwd <path>', 'the working directory (default: current directory)')
  .action(async (components: string[], options) => {
    try {
      const cwd = options.cwd ? path.resolve(options.cwd) : process.cwd();
      const spinner = ora('Loading configuration...').start();

      // Get project config
      const config = await getProjectConfig(cwd);
      if (!config) {
        spinner.fail('Could not find shared-ui.json configuration');
        console.log(
          chalk.yellow('\nRun `npx @xizot/shared-ui init` to initialize the project first.'),
        );
        process.exit(1);
      }

      // Get registry
      const registry = await getRegistry();
      spinner.succeed('Configuration loaded');

      // List available components if no args
      if (!options.all && components.length === 0) {
        console.log(chalk.cyan('\n📦 Available components:\n'));

        const uiComponents = registry.filter(
          (e) => e.type === 'registry:ui' && !e.name.startsWith('rhf-'),
        );
        const rhfComponents = registry.filter((e) => e.name.startsWith('rhf-'));
        const libUtils = registry.filter((e) => e.type === 'registry:lib');
        const hooks = registry.filter((e) => e.type === 'registry:hook');
        const constants = registry.filter((e) => e.type === 'registry:constant');

        if (uiComponents.length > 0) {
          console.log(chalk.white('  UI Components:'));
          uiComponents.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
        }

        if (rhfComponents.length > 0) {
          console.log(chalk.white('\n  React Hook Form Components:'));
          rhfComponents.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
        }

        if (libUtils.length > 0) {
          console.log(chalk.white('\n  Lib Utilities:'));
          libUtils.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
        }

        if (hooks.length > 0) {
          console.log(chalk.white('\n  Hooks:'));
          hooks.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
        }

        if (constants.length > 0) {
          console.log(chalk.white('\n  Constants:'));
          constants.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
        }

        console.log(chalk.cyan('\nUsage:'));
        console.log(chalk.gray('  npx @xizot/shared-ui add <component-name>'));
        console.log(chalk.gray('  npx @xizot/shared-ui add button input card'));
        console.log(chalk.gray('  npx @xizot/shared-ui add --all'));
        process.exit(0);
      }

      // Determine which components to install
      let componentsToInstall: string[];

      if (options.all) {
        componentsToInstall = registry.map((entry) => entry.name);
      } else {
        componentsToInstall = components;
      }

      // Validate components exist
      const invalidComponents = componentsToInstall.filter(
        (name) => !registry.find((entry) => entry.name === name),
      );

      if (invalidComponents.length > 0) {
        console.log(chalk.red('\n❌ The following components could not be found:'));
        invalidComponents.forEach((name) => console.log(chalk.red(`  - ${name}`)));
        console.log(chalk.yellow('\nUse `npx @xizot/shared-ui add` to see available components.'));
        process.exit(1);
      }

      // Resolve dependency tree
      spinner.start('Resolving dependencies...');
      const tree = resolveTree(registry, componentsToInstall);
      spinner.succeed(`Resolved ${tree.length} item${tree.length > 1 ? 's' : ''}`);

      // Show what will be installed
      console.log(chalk.cyan('\n📦 Components to install:\n'));
      tree.forEach((entry) => {
        const icon =
          entry.type === 'registry:ui'
            ? '🎨'
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
        console.log(chalk.cyan('\n📦 Package dependencies:\n'));
        Array.from(allDependencies).forEach((dep) => console.log(chalk.gray(`  - ${dep}`)));
      }

      // Confirm installation
      if (!options.yes) {
        console.log();
        const { confirm } = await prompts({
          type: 'confirm',
          name: 'confirm',
          message: 'Proceed with installation?',
          initial: true,
        });

        if (!confirm) {
          console.log(chalk.gray('Installation cancelled'));
          process.exit(0);
        }
      }

      // Install components
      spinner.start('Installing components...');

      // Helper to convert alias to path
      const aliasToPath = (alias: string): string => {
        return alias.replace(/^@\//, '');
      };

      let installedCount = 0;
      let skippedCount = 0;

      for (const entry of tree) {
        for (const file of entry.files) {
          // Determine target path based on file type
          let targetDir: string;

          if (file.path.startsWith('ui/')) {
            targetDir = aliasToPath(config.aliases.ui);
          } else if (file.path.startsWith('rhf/')) {
            targetDir = path.join(aliasToPath(config.aliases.components), 'rhf');
          } else if (file.path.startsWith('lib/')) {
            targetDir = aliasToPath(config.aliases.lib);
          } else if (file.path.startsWith('hooks/')) {
            targetDir = aliasToPath(config.aliases.hooks);
          } else if (file.path.startsWith('constants/')) {
            targetDir = aliasToPath(config.aliases.constants);
          } else {
            targetDir = aliasToPath(config.aliases.ui);
          }

          // Get relative path within the type directory
          const relativePath = file.path.replace(/^(ui|rhf|lib|hooks|constants)\//, '');
          const filePath = path.join(cwd, targetDir, relativePath);
          const fileExists = await fs.pathExists(filePath);

          if (fileExists && !options.overwrite) {
            skippedCount++;
            continue;
          }

          // Ensure directory exists
          await fs.ensureDir(path.dirname(filePath));

          // Transform imports in content to use configured aliases
          let content = file.content || '';
          content = transformImports(content, config);

          // Write file
          await fs.writeFile(filePath, content);
          installedCount++;
        }
      }

      spinner.succeed(`Installed ${installedCount} file${installedCount > 1 ? 's' : ''}`);

      if (skippedCount > 0) {
        console.log(
          chalk.yellow(
            `\n⚠️  Skipped ${skippedCount} existing file${skippedCount > 1 ? 's' : ''}. Use --overwrite to replace them.`,
          ),
        );
      }

      // Install package dependencies
      if (allDependencies.size > 0) {
        spinner.start('Installing package dependencies...');
        const packageManager = await detectPackageManager(cwd);

        try {
          await installDependencies(Array.from(allDependencies), packageManager, cwd);
          spinner.succeed(`Package dependencies installed with ${packageManager}`);
        } catch (error) {
          spinner.warn('Failed to install some package dependencies');
          console.log(chalk.yellow('\nYou may need to install the following packages manually:'));
          Array.from(allDependencies).forEach((dep) =>
            console.log(chalk.gray(`  ${packageManager} add ${dep}`)),
          );
        }
      }

      console.log(chalk.green('\n✅ Successfully added components!'));

      // Show import examples
      const uiEntries = tree.filter((e) => e.type === 'registry:ui' && !e.name.startsWith('rhf-'));
      if (uiEntries.length > 0) {
        console.log(chalk.cyan('\n📝 Import examples:\n'));
        uiEntries.slice(0, 3).forEach((entry) => {
          const componentName = entry.name
            .split('-')
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join('');
          console.log(
            chalk.gray(`  import { ${componentName} } from '${config.aliases.ui}/${entry.name}'`),
          );
        });
      }
      console.log();
    } catch (error) {
      console.error(chalk.red('\n❌ Error:'), error);
      process.exit(1);
    }
  });

/**
 * Transform imports in content to use configured aliases
 */
function transformImports(content: string, config: Config): string {
  // Replace @/components/ui/ with ui alias
  content = content.replace(/@\/components\/ui\//g, `${config.aliases.ui}/`.replace(/\/\//g, '/'));

  // Replace @/components/rhf/ with components/rhf
  content = content.replace(
    /@\/components\/rhf\//g,
    `${config.aliases.components}/rhf/`.replace(/\/\//g, '/'),
  );

  // Replace @/lib/ with lib alias
  content = content.replace(/@\/lib\//g, `${config.aliases.lib}/`.replace(/\/\//g, '/'));

  // Replace @/hooks/ with hooks alias
  content = content.replace(/@\/hooks\//g, `${config.aliases.hooks}/`.replace(/\/\//g, '/'));

  // Replace @/constants/ with constants alias
  content = content.replace(
    /@\/constants\//g,
    `${config.aliases.constants}/`.replace(/\/\//g, '/'),
  );

  return content;
}
