import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import { getProjectConfig } from '../utils/config.js';
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
          chalk.yellow('\nRun `npx github:xizot/shared-ui init` to initialize the project first.'),
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
        console.log(chalk.gray('  npx github:xizot/shared-ui add <component-name>'));
        console.log(chalk.gray('  npx github:xizot/shared-ui add button input card'));
        console.log(chalk.gray('  npx github:xizot/shared-ui add --all'));
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
        console.log(
          chalk.yellow('\nUse `npx github:xizot/shared-ui add` to see available components.'),
        );
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
        return alias.replace(/^@\//, 'src/');
      };

      let installedCount = 0;
      let skippedCount = 0;

      // Collect existing files first
      const existingFiles: { entry: string; filePath: string; file: any }[] = [];

      for (const entry of tree) {
        for (const file of entry.files) {
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

          const relativePath = file.path.replace(/^(ui|rhf|lib|hooks|constants)\//, '');
          const filePath = path.join(cwd, targetDir, relativePath);
          const fileExists = await fs.pathExists(filePath);

          if (fileExists && !options.overwrite) {
            existingFiles.push({ entry: entry.name, filePath, file });
          }
        }
      }

      // Ask user about existing files
      const filesToOverwrite: Set<string> = new Set();

      if (existingFiles.length > 0 && !options.overwrite) {
        spinner.stop();
        console.log(chalk.yellow('\n⚠️  The following files already exist:\n'));
        existingFiles.forEach(({ filePath }) => {
          const relativePath = path.relative(cwd, filePath);
          console.log(chalk.gray(`  - ${relativePath}`));
        });
        console.log();

        const { overwriteChoice } = await prompts({
          type: 'select',
          name: 'overwriteChoice',
          message: 'How would you like to handle existing files?',
          choices: [
            { title: 'Skip existing files', value: 'skip' },
            { title: 'Overwrite all existing files', value: 'overwrite-all' },
            { title: 'Cancel installation', value: 'cancel' },
          ],
          initial: 0,
        });

        if (overwriteChoice === 'cancel') {
          console.log(chalk.gray('Installation cancelled'));
          process.exit(0);
        }

        if (overwriteChoice === 'overwrite-all') {
          existingFiles.forEach(({ filePath }) => filesToOverwrite.add(filePath));
        }

        spinner.start('Installing components...');
      }

      // Now install files
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

          if (fileExists && !options.overwrite && !filesToOverwrite.has(filePath)) {
            skippedCount++;
            continue;
          }

          // Ensure directory exists
          await fs.ensureDir(path.dirname(filePath));

          // Transform imports in content to use relative paths
          let content = file.content || '';
          content = transformImportsToRelative(content, file.path);

          // Write file
          await fs.writeFile(filePath, content);
          installedCount++;
        }
      }

      spinner.succeed(`Installed ${installedCount} file${installedCount > 1 ? 's' : ''}`);

      if (skippedCount > 0) {
        console.log(
          chalk.yellow(
            `\n⚠️  Skipped ${skippedCount} existing file${skippedCount > 1 ? 's' : ''}.`,
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
          // Show relative import from src folder
          console.log(
            chalk.gray(`  import { ${componentName} } from '@/shared/components/ui/${entry.name}'`),
          );
        });
        console.log(chalk.gray('\n  Note: Configure @/ alias or use relative imports'));
      }
      console.log();
    } catch (error) {
      console.error(chalk.red('\n❌ Error:'), error);
      process.exit(1);
    }
  });

/**
 * Get the relative path from a source file to a target directory
 *
 * Actual installed structure:
 * src/shared/
 * ├── components/
 * │   ├── ui/       <- ui/* files go here
 * │   └── rhf/      <- rhf/* files go here
 * ├── lib/          <- lib/* files go here
 * ├── hooks/        <- hooks/* files go here
 * └── constants/    <- constants/* files go here
 *
 * @param sourceFilePath - The registry path of the source file (e.g., 'ui/button.tsx')
 * @param targetType - The target type (e.g., 'lib', 'hooks', 'constants', 'ui', 'rhf')
 */
function getRelativePath(sourceFilePath: string, targetType: string): string {
  const sourceType = sourceFilePath.split('/')[0]; // ui, rhf, lib, hooks, constants
  const sourceDir = path.dirname(sourceFilePath); // ui, ui/sidebar, lib, etc.
  const sourceParts = sourceDir.split('/').filter(Boolean);

  // Calculate depth within the source type directory
  // ui/button.tsx -> depth 0 (directly in ui/)
  // ui/sidebar/index.tsx -> depth 1 (in ui/sidebar/)
  const depthInSourceType = sourceParts.length - 1;

  // Determine if source is under components/ (ui, rhf) or directly under shared/ (lib, hooks, constants)
  const sourceUnderComponents = sourceType === 'ui' || sourceType === 'rhf';
  const targetUnderComponents = targetType === 'ui' || targetType === 'rhf';

  let upLevels = depthInSourceType; // First, go up to the type root (e.g., ui/)

  if (sourceUnderComponents && targetUnderComponents) {
    // Both under components/ (e.g., ui -> rhf)
    // From components/ui/ to components/rhf/ -> ../rhf/
    upLevels += 1;
    return '../'.repeat(upLevels) + targetType + '/';
  } else if (sourceUnderComponents && !targetUnderComponents) {
    // Source under components/, target under shared/ (e.g., ui -> lib)
    // From components/ui/ to lib/ -> ../../lib/
    upLevels += 2;
    return '../'.repeat(upLevels) + targetType + '/';
  } else if (!sourceUnderComponents && targetUnderComponents) {
    // Source under shared/, target under components/ (e.g., lib -> ui)
    // From lib/ to components/ui/ -> ../components/ui/
    upLevels += 1;
    return '../'.repeat(upLevels) + 'components/' + targetType + '/';
  } else {
    // Both under shared/ (e.g., lib -> hooks)
    // From lib/ to hooks/ -> ../hooks/
    upLevels += 1;
    return '../'.repeat(upLevels) + targetType + '/';
  }
}

/**
 * Transform imports in content to use relative paths
 */
function transformImportsToRelative(content: string, filePath: string): string {
  const sourceType = filePath.split('/')[0];
  const sourceDir = path.dirname(filePath);
  const sourceParts = sourceDir.split('/').filter(Boolean);
  const depthInSourceType = sourceParts.length - 1;

  // Replace @/components/ui/ imports
  content = content.replace(/@\/components\/ui\//g, () => {
    if (sourceType === 'ui') {
      // Same type directory
      if (depthInSourceType === 0) {
        return './';
      }
      // In subdirectory, go up
      return '../'.repeat(depthInSourceType);
    }
    return getRelativePath(filePath, 'ui');
  });

  // Replace @/components/rhf/ imports
  content = content.replace(/@\/components\/rhf\//g, () => {
    if (sourceType === 'rhf') {
      if (depthInSourceType === 0) {
        return './';
      }
      return '../'.repeat(depthInSourceType);
    }
    return getRelativePath(filePath, 'rhf');
  });

  // Replace @/lib/ imports
  content = content.replace(/@\/lib\//g, () => {
    if (sourceType === 'lib') {
      if (depthInSourceType === 0) {
        return './';
      }
      return '../'.repeat(depthInSourceType);
    }
    return getRelativePath(filePath, 'lib');
  });

  // Replace @/hooks/ imports
  content = content.replace(/@\/hooks\//g, () => {
    if (sourceType === 'hooks') {
      if (depthInSourceType === 0) {
        return './';
      }
      return '../'.repeat(depthInSourceType);
    }
    return getRelativePath(filePath, 'hooks');
  });

  // Replace @/constants/ imports
  content = content.replace(/@\/constants\//g, () => {
    if (sourceType === 'constants') {
      if (depthInSourceType === 0) {
        return './';
      }
      return '../'.repeat(depthInSourceType);
    }
    return getRelativePath(filePath, 'constants');
  });

  return content;
}
