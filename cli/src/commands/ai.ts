import chalk from 'chalk';
import { Command } from 'commander';
import path from 'path';
import prompts from 'prompts';
import { AI_TOOL_CHOICES, getConfiguredAITools, setupMultipleAITools } from '../ai-tools';

export const aiCommand = new Command()
  .name('ai')
  .description('Setup AI coding assistant configurations')
  .option('-p, --path <path>', 'Path to project', process.cwd())
  .option('-t, --tools <tools>', 'Comma-separated list of AI tools to setup')
  .option('-a, --all', 'Setup all available AI tools')
  .action(async (options) => {
    const projectPath = path.resolve(options.path);

    console.log(chalk.cyan('\n🤖 AI Tools Setup\n'));

    // Check what's already configured
    const configured = await getConfiguredAITools(projectPath);
    if (configured.length > 0) {
      console.log(chalk.dim(`Already configured: ${configured.join(', ')}\n`));
    }

    let selectedTools: string[] = [];

    if (options.all) {
      // Setup all tools
      selectedTools = AI_TOOL_CHOICES.map((c) => c.value);
    } else if (options.tools) {
      // Parse comma-separated tools
      selectedTools = options.tools.split(',').map((t: string) => t.trim().toLowerCase());
    } else {
      // Interactive selection
      const response = await prompts({
        type: 'multiselect',
        name: 'tools',
        message: 'Select AI tools to configure',
        choices: AI_TOOL_CHOICES.map((choice) => ({
          ...choice,
          selected: configured.includes(choice.value),
        })),
        hint: '- Space to select. Enter to confirm',
        instructions: false,
      });

      if (!response.tools || response.tools.length === 0) {
        console.log(chalk.yellow('\nNo AI tools selected. Exiting.'));
        return;
      }

      selectedTools = response.tools;
    }

    console.log('');

    // Setup selected tools
    const results = await setupMultipleAITools(projectPath, selectedTools);

    // Summary
    console.log('');
    if (results.success.length > 0) {
      console.log(chalk.green(`✓ Successfully configured: ${results.success.join(', ')}`));
    }
    if (results.failed.length > 0) {
      console.log(chalk.red(`✗ Failed to configure: ${results.failed.join(', ')}`));
    }

    console.log(chalk.dim('\nAI tools will now have access to shared-ui component guidelines.'));
  });
