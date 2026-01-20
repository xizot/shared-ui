import chalk from 'chalk';
import { Command } from 'commander';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';

// Skills registry - skills available for installation
const SKILLS_REGISTRY = [
  {
    name: 'vercel-react-best-practices',
    description: 'React and Next.js performance optimization guidelines from Vercel Engineering',
    author: 'vercel',
    version: '1.0.0',
  },
];

// Skill files content
const SKILL_FILES: Record<string, Record<string, string>> = {
  'vercel-react-best-practices': {
    'SKILL.md': `---
name: vercel-react-best-practices
description: React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.
license: MIT
metadata:
  author: vercel
  version: "1.0.0"
---

# Vercel React Best Practices

Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 45 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation.

## When to Apply

Reference these guidelines when:
- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | \`async-\` |
| 2 | Bundle Size Optimization | CRITICAL | \`bundle-\` |
| 3 | Server-Side Performance | HIGH | \`server-\` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | \`client-\` |
| 5 | Re-render Optimization | MEDIUM | \`rerender-\` |
| 6 | Rendering Performance | MEDIUM | \`rendering-\` |
| 7 | JavaScript Performance | LOW-MEDIUM | \`js-\` |
| 8 | Advanced Patterns | LOW | \`advanced-\` |

## Quick Reference

### 1. Eliminating Waterfalls (CRITICAL)
- \`async-defer-await\` - Move await into branches where actually used
- \`async-parallel\` - Use Promise.all() for independent operations
- \`async-dependencies\` - Use better-all for partial dependencies
- \`async-api-routes\` - Start promises early, await late in API routes
- \`async-suspense-boundaries\` - Use Suspense to stream content

### 2. Bundle Size Optimization (CRITICAL)
- \`bundle-barrel-imports\` - Import directly, avoid barrel files
- \`bundle-dynamic-imports\` - Use next/dynamic for heavy components
- \`bundle-defer-third-party\` - Load analytics/logging after hydration
- \`bundle-conditional\` - Load modules only when feature is activated
- \`bundle-preload\` - Preload on hover/focus for perceived speed

### 3. Server-Side Performance (HIGH)
- \`server-cache-react\` - Use React.cache() for per-request deduplication
- \`server-cache-lru\` - Use LRU cache for cross-request caching
- \`server-serialization\` - Minimize data passed to client components
- \`server-parallel-fetching\` - Restructure components to parallelize fetches
- \`server-after-nonblocking\` - Use after() for non-blocking operations

### 4. Client-Side Data Fetching (MEDIUM-HIGH)
- \`client-swr-dedup\` - Use SWR for automatic request deduplication
- \`client-event-listeners\` - Deduplicate global event listeners

### 5. Re-render Optimization (MEDIUM)
- \`rerender-defer-reads\` - Don't subscribe to state only used in callbacks
- \`rerender-memo\` - Extract expensive work into memoized components
- \`rerender-dependencies\` - Use primitive dependencies in effects
- \`rerender-derived-state\` - Subscribe to derived booleans, not raw values
- \`rerender-functional-setstate\` - Use functional setState for stable callbacks
- \`rerender-lazy-state-init\` - Pass function to useState for expensive values
- \`rerender-transitions\` - Use startTransition for non-urgent updates

### 6. Rendering Performance (MEDIUM)
- \`rendering-animate-svg-wrapper\` - Animate div wrapper, not SVG element
- \`rendering-content-visibility\` - Use content-visibility for long lists
- \`rendering-hoist-jsx\` - Extract static JSX outside components
- \`rendering-svg-precision\` - Reduce SVG coordinate precision
- \`rendering-hydration-no-flicker\` - Use inline script for client-only data
- \`rendering-activity\` - Use Activity component for show/hide
- \`rendering-conditional-render\` - Use ternary, not && for conditionals

### 7. JavaScript Performance (LOW-MEDIUM)
- \`js-batch-dom-css\` - Group CSS changes via classes or cssText
- \`js-index-maps\` - Build Map for repeated lookups
- \`js-cache-property-access\` - Cache object properties in loops
- \`js-cache-function-results\` - Cache function results in module-level Map
- \`js-cache-storage\` - Cache localStorage/sessionStorage reads
- \`js-combine-iterations\` - Combine multiple filter/map into one loop
- \`js-length-check-first\` - Check array length before expensive comparison
- \`js-early-exit\` - Return early from functions
- \`js-hoist-regexp\` - Hoist RegExp creation outside loops
- \`js-min-max-loop\` - Use loop for min/max instead of sort
- \`js-set-map-lookups\` - Use Set/Map for O(1) lookups
- \`js-tosorted-immutable\` - Use toSorted() for immutability

### 8. Advanced Patterns (LOW)
- \`advanced-event-handler-refs\` - Store event handlers in refs
- \`advanced-use-latest\` - useLatest for stable callback refs
`,
  },
};

export const skillsCommand = new Command()
  .name('skills')
  .description('Install AI agent skills for your project')
  .argument('[skills...]', 'skills to install')
  .option('-l, --list', 'list available skills')
  .option('-a, --all', 'install all available skills')
  .option('-o, --overwrite', 'overwrite existing files')
  .option('-c, --cwd <path>', 'the working directory (default: current directory)')
  .action(async (skills: string[], options) => {
    try {
      const cwd = options.cwd ? path.resolve(options.cwd) : process.cwd();

      // List available skills
      if (options.list || skills.length === 0) {
        console.log(chalk.cyan('\n🤖 Available AI Agent Skills:\n'));

        for (const skill of SKILLS_REGISTRY) {
          console.log(chalk.white(`  ${skill.name}`));
          console.log(chalk.gray(`    ${skill.description}`));
          console.log(chalk.gray(`    Author: ${skill.author} | Version: ${skill.version}\n`));
        }

        console.log(chalk.cyan('Usage:'));
        console.log(chalk.gray('  npx github:xizot/shared-ui skills <skill-name>'));
        console.log(chalk.gray('  npx github:xizot/shared-ui skills --all'));
        console.log();
        return;
      }

      // Determine which skills to install
      let skillsToInstall: string[] = [];

      if (options.all) {
        skillsToInstall = SKILLS_REGISTRY.map((s) => s.name);
      } else {
        // Validate skill names
        for (const skill of skills) {
          const found = SKILLS_REGISTRY.find((s) => s.name === skill);
          if (!found) {
            console.log(chalk.red(`\n❌ Unknown skill: ${skill}`));
            console.log(
              chalk.yellow('Run `npx github:xizot/shared-ui skills` to see available skills.'),
            );
            process.exit(1);
          }
          skillsToInstall.push(skill);
        }
      }

      // Confirm installation
      if (!options.yes) {
        const { confirm } = await prompts({
          type: 'confirm',
          name: 'confirm',
          message: `Install ${skillsToInstall.length} skill(s)?`,
          initial: true,
        });

        if (!confirm) {
          console.log(chalk.gray('Installation cancelled.'));
          return;
        }
      }

      const spinner = ora('Installing skills...').start();

      // Create .github/skills directory
      const skillsDir = path.join(cwd, '.github', 'skills');
      await fs.ensureDir(skillsDir);

      // Install each skill
      for (const skillName of skillsToInstall) {
        spinner.text = `Installing ${skillName}...`;

        const skillDir = path.join(skillsDir, skillName);
        const skillFiles = SKILL_FILES[skillName];

        if (!skillFiles) {
          spinner.warn(`Skill ${skillName} has no files defined`);
          continue;
        }

        // Check if skill already exists
        if (await fs.pathExists(skillDir)) {
          if (!options.overwrite) {
            const { overwrite } = await prompts({
              type: 'confirm',
              name: 'overwrite',
              message: chalk.yellow(`Skill ${skillName} already exists. Overwrite?`),
              initial: false,
            });

            if (!overwrite) {
              spinner.info(`Skipped ${skillName}`);
              continue;
            }
          }
        }

        // Create skill directory and files
        await fs.ensureDir(skillDir);

        for (const [fileName, content] of Object.entries(skillFiles)) {
          const filePath = path.join(skillDir, fileName);
          await fs.writeFile(filePath, content);
        }

        spinner.succeed(`Installed ${skillName}`);
      }

      // Print success message
      console.log(chalk.green('\n✅ Skills installed successfully!\n'));

      console.log(chalk.cyan('Skills location:'));
      console.log(chalk.gray(`  ${skillsDir}/\n`));

      console.log(chalk.cyan('How it works:'));
      console.log(chalk.gray('  AI coding assistants (GitHub Copilot, Cursor, etc.) will'));
      console.log(chalk.gray('  automatically use these skills when working on your project.'));
      console.log();
    } catch (error) {
      console.error(chalk.red('\n❌ Error:'), error);
      process.exit(1);
    }
  });
