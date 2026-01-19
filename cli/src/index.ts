#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';
import { initCommand } from './commands/init.js';

const program = new Command();

program
  .name('shared-ui')
  .description('CLI tool for adding shared-ui components to your project')
  .version('1.0.0');

program.addCommand(addCommand);
program.addCommand(initCommand);

program.parse();
