import chalk from 'chalk';
import fs from 'fs-extra';
import ora from 'ora';
import path from 'path';
import { getAIToolConfig, type AIToolConfig } from './config';

// Path to shared skills source (relative to CLI package)
const SHARED_SKILLS_PATH = path.join(__dirname, '../../.shared/skills');

/**
 * Get the source path for shared skills
 * During development: from .shared folder relative to CLI
 * After build: from bundled assets
 */
function getSkillsSourcePath(): string {
  // Check multiple possible locations
  const possiblePaths = [
    // Development: relative to src
    path.resolve(__dirname, '../../../.shared/skills'),
    // Built: relative to dist
    path.resolve(__dirname, '../../.shared/skills'),
    // Fallback: from package root
    path.resolve(process.cwd(), '.shared/skills'),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  throw new Error('Could not find shared skills source directory');
}

/**
 * Setup AI tool configuration for a project
 */
export async function setupAITool(
  projectPath: string,
  toolName: string,
  options: { silent?: boolean } = {},
): Promise<boolean> {
  const config = getAIToolConfig(toolName);
  if (!config) {
    if (!options.silent) {
      console.error(chalk.red(`Unknown AI tool: ${toolName}`));
    }
    return false;
  }

  const spinner = options.silent ? null : ora(`Setting up ${config.displayName}...`).start();

  try {
    const skillsSource = getSkillsSourcePath();
    const targetFolder = path.join(projectPath, config.folder);
    const targetSkillsFolder = path.join(targetFolder, config.skillsFolder);

    // Ensure target directory exists
    await fs.ensureDir(targetSkillsFolder);

    // Copy all skills from shared source
    await fs.copy(skillsSource, targetSkillsFolder, {
      overwrite: true,
      filter: (src) => {
        // Skip node_modules or other unwanted files
        const basename = path.basename(src);
        return !basename.startsWith('.') || basename === '.shared';
      },
    });

    // Create registry file if needed (for GitHub Copilot)
    if (config.registryFile) {
      await createRegistryFile(targetSkillsFolder, config);
    }

    spinner?.succeed(`${config.displayName} configured`);
    return true;
  } catch (error) {
    spinner?.fail(`Failed to setup ${config.displayName}`);
    if (!options.silent) {
      console.error(chalk.red(error instanceof Error ? error.message : String(error)));
    }
    return false;
  }
}

/**
 * Setup multiple AI tools at once
 */
export async function setupMultipleAITools(
  projectPath: string,
  toolNames: string[],
  options: { silent?: boolean } = {},
): Promise<{ success: string[]; failed: string[] }> {
  const results = { success: [] as string[], failed: [] as string[] };

  for (const toolName of toolNames) {
    const success = await setupAITool(projectPath, toolName, options);
    if (success) {
      results.success.push(toolName);
    } else {
      results.failed.push(toolName);
    }
  }

  return results;
}

/**
 * Create a registry.json file for tools that need it (GitHub Copilot)
 */
async function createRegistryFile(skillsFolder: string, config: AIToolConfig): Promise<void> {
  const registryPath = path.join(skillsFolder, config.registryFile!);

  // Read all skill directories
  const skillDirs = await fs.readdir(skillsFolder, { withFileTypes: true });
  const skills = [];

  for (const dir of skillDirs) {
    if (!dir.isDirectory()) continue;

    const skillPath = path.join(skillsFolder, dir.name);
    const skillMdPath = path.join(skillPath, 'SKILL.md');

    if (await fs.pathExists(skillMdPath)) {
      const content = await fs.readFile(skillMdPath, 'utf-8');
      const frontmatter = parseFrontmatter(content);

      // List all files in the skill directory
      const files = await listFilesRecursive(skillPath, skillPath);

      skills.push({
        name: frontmatter.name || dir.name,
        description: frontmatter.description || '',
        author: frontmatter.metadata?.author || 'unknown',
        version: frontmatter.metadata?.version || '1.0.0',
        files,
      });
    }
  }

  await fs.writeJson(registryPath, skills, { spaces: 2 });
}

/**
 * Parse frontmatter from a skill file
 */
function parseFrontmatter(content: string): Record<string, unknown> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter: Record<string, unknown> = {};
  const lines = match[1].split('\n');
  let currentKey = '';
  let inMetadata = false;
  const metadata: Record<string, unknown> = {};

  for (const line of lines) {
    if (line.startsWith('metadata:')) {
      inMetadata = true;
      continue;
    }

    if (inMetadata && line.startsWith('  ')) {
      const [key, ...valueParts] = line.trim().split(':');
      if (key && valueParts.length) {
        metadata[key.trim()] = valueParts
          .join(':')
          .trim()
          .replace(/^["']|["']$/g, '');
      }
    } else if (line.includes(':')) {
      inMetadata = false;
      const [key, ...valueParts] = line.split(':');
      currentKey = key.trim();
      const value = valueParts
        .join(':')
        .trim()
        .replace(/^["']|["']$/g, '');
      if (currentKey && value) {
        frontmatter[currentKey] = value;
      }
    }
  }

  if (Object.keys(metadata).length > 0) {
    frontmatter.metadata = metadata;
  }

  return frontmatter;
}

/**
 * Recursively list all files in a directory
 */
async function listFilesRecursive(dir: string, baseDir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      const subFiles = await listFilesRecursive(fullPath, baseDir);
      files.push(...subFiles);
    } else {
      files.push(relativePath.replace(/\\/g, '/'));
    }
  }

  return files;
}

/**
 * Check if AI tools are already configured in a project
 */
export async function getConfiguredAITools(projectPath: string): Promise<string[]> {
  const configured: string[] = [];
  const { AI_TOOLS } = await import('./config');

  for (const [name, config] of Object.entries(AI_TOOLS)) {
    const skillsPath = path.join(projectPath, config.folder, config.skillsFolder);
    if (await fs.pathExists(skillsPath)) {
      configured.push(name);
    }
  }

  return configured;
}
