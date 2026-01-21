#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';
import { aiCommand } from './commands/ai.js';
import { initCommand } from './commands/init.js';
import { skillsCommand } from './commands/skills.js';

const program = new Command();

program
  .name('@xizot/shared-ui')
  .description('CLI tool for adding shared-ui components to your project')
  .version('1.0.0');

program.addCommand(addCommand);
program.addCommand(initCommand);
program.addCommand(skillsCommand);
program.addCommand(aiCommand);

program.parse();
