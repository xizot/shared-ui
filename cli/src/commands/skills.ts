import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/xizot/shared-ui/main/.github/skills';
const SKILLS_REGISTRY_URL = `${GITHUB_RAW_BASE}/registry.json`;

interface SkillInfo {
  name: string;
  description: string;
  author: string;
  version: string;
  files: string[];
}

// IDE configurations - where skills should be installed
type IdeType = 'cursor' | 'github-copilot' | 'gemini' | 'windsurf' | 'cline';

interface IdeConfig {
  name: string;
  description: string;
  skillsPath: string; // Path where skills should be installed
}

const IDE_CONFIGS: Record<IdeType, IdeConfig> = {
  cursor: {
    name: 'Cursor',
    description: 'Cursor AI IDE',
    skillsPath: '.cursor/skills',
  },
  'github-copilot': {
    name: 'GitHub Copilot',
    description: 'GitHub Copilot in VS Code',
    skillsPath: '.github/skills',
  },
  gemini: {
    name: 'Gemini',
    description: 'Google Gemini Code Assist',
    skillsPath: '.gemini/skills',
  },
  windsurf: {
    name: 'Windsurf',
    description: 'Codeium Windsurf IDE',
    skillsPath: '.windsurf/skills',
  },
  cline: {
    name: 'Cline',
    description: 'Cline AI Assistant',
    skillsPath: '.cline/skills',
  },
};

// Fetch skills registry from GitHub
async function fetchSkillsRegistry(): Promise<SkillInfo[]> {
  try {
    const response = await fetch(SKILLS_REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.status}`);
    }
    return await response.json();
  } catch {
    // Fallback to hardcoded registry if fetch fails
    return [
      {
        name: 'vercel-react-best-practices',
        description:
          'React and Next.js performance optimization guidelines from Vercel Engineering',
        author: 'vercel',
        version: '1.0.0',
        files: [
          'SKILL.md',
          'AGENTS.md',
          'rules/advanced-event-handler-refs.md',
          'rules/advanced-use-latest.md',
          'rules/async-api-routes.md',
          'rules/async-defer-await.md',
          'rules/async-dependencies.md',
          'rules/async-parallel.md',
          'rules/async-suspense-boundaries.md',
          'rules/bundle-barrel-imports.md',
          'rules/bundle-conditional.md',
          'rules/bundle-defer-third-party.md',
          'rules/bundle-dynamic-imports.md',
          'rules/bundle-preload.md',
          'rules/client-event-listeners.md',
          'rules/client-localstorage-schema.md',
          'rules/client-passive-event-listeners.md',
          'rules/client-swr-dedup.md',
          'rules/js-batch-dom-css.md',
          'rules/js-cache-function-results.md',
          'rules/js-cache-property-access.md',
          'rules/js-cache-storage.md',
          'rules/js-combine-iterations.md',
          'rules/js-early-exit.md',
          'rules/js-hoist-regexp.md',
          'rules/js-index-maps.md',
          'rules/js-length-check-first.md',
          'rules/js-min-max-loop.md',
          'rules/js-set-map-lookups.md',
          'rules/js-tosorted-immutable.md',
          'rules/rendering-activity.md',
          'rules/rendering-animate-svg-wrapper.md',
          'rules/rendering-conditional-render.md',
          'rules/rendering-content-visibility.md',
          'rules/rendering-hoist-jsx.md',
          'rules/rendering-hydration-no-flicker.md',
          'rules/rendering-svg-precision.md',
          'rules/rerender-defer-reads.md',
          'rules/rerender-dependencies.md',
          'rules/rerender-derived-state.md',
          'rules/rerender-functional-setstate.md',
          'rules/rerender-lazy-state-init.md',
          'rules/rerender-memo.md',
          'rules/rerender-transitions.md',
          'rules/server-after-nonblocking.md',
          'rules/server-cache-lru.md',
          'rules/server-cache-react.md',
          'rules/server-parallel-fetching.md',
          'rules/server-serialization.md',
        ],
      },
    ];
  }
}

// Download a single file from GitHub
async function downloadFile(skillName: string, fileName: string): Promise<string> {
  const url = `${GITHUB_RAW_BASE}/${skillName}/${fileName}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${fileName}: ${response.status}`);
  }
  return await response.text();
}

export const skillsCommand = new Command()
  .name('skills')
  .description('Install AI agent skills for your project')
  .argument('[skills...]', 'skills to install')
  .option('-l, --list', 'list available skills')
  .option('-a, --all', 'install all available skills')
  .option('-o, --overwrite', 'overwrite existing files')
  .option('-y, --yes', 'skip confirmation prompts')
  .option('-c, --cwd <path>', 'the working directory (default: current directory)')
  .action(async (skills: string[], options) => {
    try {
      const cwd = options.cwd ? path.resolve(options.cwd) : process.cwd();
      const spinner = ora('Fetching skills registry...').start();

      // Fetch registry
      const registry = await fetchSkillsRegistry();
      spinner.succeed('Skills registry loaded');

      // If --list flag, just show available skills
      if (options.list) {
        console.log(chalk.cyan('\n🤖 Available AI Agent Skills:\n'));

        for (const skill of registry) {
          console.log(chalk.white(`  ${skill.name}`));
          console.log(chalk.gray(`    ${skill.description}`));
          console.log(chalk.gray(`    Author: ${skill.author} | Version: ${skill.version}\n`));
        }

        console.log(chalk.cyan('Usage:'));
        console.log(chalk.gray('  npx github:xizot/shared-ui skills'));
        console.log(chalk.gray('  npx github:xizot/shared-ui skills --all'));
        console.log();
        return;
      }

      // Determine which skills to install
      let skillsToInstall: SkillInfo[] = [];

      if (options.all) {
        skillsToInstall = registry;
      } else if (skills.length > 0) {
        // Validate skill names from arguments
        for (const skill of skills) {
          const found = registry.find((s) => s.name === skill);
          if (!found) {
            console.log(chalk.red(`\n❌ Unknown skill: ${skill}`));
            console.log(
              chalk.yellow(
                'Run `npx github:xizot/shared-ui skills --list` to see available skills.',
              ),
            );
            process.exit(1);
          }
          skillsToInstall.push(found);
        }
      } else {
        // Interactive mode - show checkboxes for skills
        console.log(chalk.cyan('\n🤖 Select AI Agent Skills to install:\n'));

        const { selectedSkills } = await prompts({
          type: 'multiselect',
          name: 'selectedSkills',
          message: 'Choose skills to install',
          choices: registry.map((skill) => ({
            title: skill.name,
            description: skill.description,
            value: skill.name,
            selected: true, // Default all selected
          })),
          hint: '- Space to select. Return to submit',
        });

        if (!selectedSkills || selectedSkills.length === 0) {
          console.log(chalk.gray('\nNo skills selected. Installation cancelled.'));
          return;
        }

        skillsToInstall = registry.filter((s) => selectedSkills.includes(s.name));
      }

      // Ask which IDEs to install for
      console.log(chalk.cyan('\n🖥️  Select AI assistants/IDEs to configure:\n'));

      const ideChoices = Object.entries(IDE_CONFIGS).map(([key, config]) => ({
        title: config.name,
        description: config.description,
        value: key,
        selected: true, // Default all selected
      }));

      const { selectedIdes } = await prompts({
        type: 'multiselect',
        name: 'selectedIdes',
        message: 'Choose IDEs/AI assistants',
        choices: ideChoices,
        hint: '- Space to select. Return to submit',
      });

      if (!selectedIdes || selectedIdes.length === 0) {
        console.log(chalk.gray('\nNo IDEs selected. Installation cancelled.'));
        return;
      }

      // Confirm installation
      if (!options.yes) {
        console.log(chalk.cyan('\n📋 Installation Summary:'));
        console.log(chalk.gray(`   Skills: ${skillsToInstall.map((s) => s.name).join(', ')}`));
        console.log(
          chalk.gray(
            `   IDEs: ${selectedIdes.map((id: IdeType) => IDE_CONFIGS[id].name).join(', ')}`,
          ),
        );

        const { confirm } = await prompts({
          type: 'confirm',
          name: 'confirm',
          message: 'Proceed with installation?',
          initial: true,
        });

        if (!confirm) {
          console.log(chalk.gray('Installation cancelled.'));
          return;
        }
      }

      // Install skills for each selected IDE
      for (const ideKey of selectedIdes as IdeType[]) {
        const ideConfig = IDE_CONFIGS[ideKey];
        const skillsDir = path.join(cwd, ideConfig.skillsPath);

        console.log(chalk.cyan(`\n📁 Installing for ${ideConfig.name}...`));

        await fs.ensureDir(skillsDir);

        // Install each skill
        for (const skill of skillsToInstall) {
          spinner.start(`Downloading ${skill.name}...`);

          const skillDir = path.join(skillsDir, skill.name);

          // Check if skill already exists
          if (await fs.pathExists(skillDir)) {
            if (!options.overwrite) {
              spinner.stop();
              const { overwrite } = await prompts({
                type: 'confirm',
                name: 'overwrite',
                message: chalk.yellow(
                  `Skill ${skill.name} already exists in ${ideConfig.name}. Overwrite?`,
                ),
                initial: false,
              });

              if (!overwrite) {
                spinner.info(`Skipped ${skill.name} for ${ideConfig.name}`);
                continue;
              }
            }
            await fs.remove(skillDir);
          }

          // Create skill directory
          await fs.ensureDir(skillDir);

          // Download all files
          let downloadedCount = 0;
          for (const fileName of skill.files) {
            try {
              spinner.text = `Downloading ${skill.name}: ${fileName}...`;
              const content = await downloadFile(skill.name, fileName);

              const filePath = path.join(skillDir, fileName);
              await fs.ensureDir(path.dirname(filePath));
              await fs.writeFile(filePath, content);
              downloadedCount++;
            } catch {
              // Skip files that fail to download
            }
          }

          spinner.succeed(
            `Installed ${skill.name} for ${ideConfig.name} (${downloadedCount} files)`,
          );
        }
      }

      // Print success message
      console.log(chalk.green('\n✅ Skills installed successfully!\n'));

      console.log(chalk.cyan('Skills locations:'));
      for (const ideKey of selectedIdes as IdeType[]) {
        const ideConfig = IDE_CONFIGS[ideKey];
        console.log(chalk.gray(`  ${ideConfig.name}: ${ideConfig.skillsPath}/`));
      }

      console.log(chalk.cyan('\nHow it works:'));
      console.log(chalk.gray('  AI coding assistants will automatically use these skills'));
      console.log(chalk.gray('  when working on your project.'));
      console.log();
    } catch (error) {
      console.error(chalk.red('\n❌ Error:'), error);
      process.exit(1);
    }
  });
