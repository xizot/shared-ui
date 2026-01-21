/**
 * AI Tools Configuration
 * Maps AI tool names to their respective folder structures and file naming conventions
 */

export interface AIToolConfig {
  name: string;
  displayName: string;
  folder: string;
  skillsFolder: string;
  registryFile?: string;
  // Some tools have specific file naming conventions
  customFiles?: {
    [key: string]: string; // source file -> target file mapping
  };
}

export const AI_TOOLS: Record<string, AIToolConfig> = {
  cursor: {
    name: 'cursor',
    displayName: 'Cursor',
    folder: '.cursor',
    skillsFolder: 'skills',
  },
  claude: {
    name: 'claude',
    displayName: 'Claude',
    folder: '.claude',
    skillsFolder: 'skills',
  },
  'github-copilot': {
    name: 'github-copilot',
    displayName: 'GitHub Copilot',
    folder: '.github',
    skillsFolder: 'skills',
    registryFile: 'registry.json',
  },
  windsurf: {
    name: 'windsurf',
    displayName: 'Windsurf',
    folder: '.windsurf',
    skillsFolder: 'skills',
  },
  gemini: {
    name: 'gemini',
    displayName: 'Gemini',
    folder: '.gemini',
    skillsFolder: 'skills',
  },
  codex: {
    name: 'codex',
    displayName: 'Codex',
    folder: '.codex',
    skillsFolder: 'skills',
  },
  agent: {
    name: 'agent',
    displayName: 'Agent (Generic)',
    folder: '.agent',
    skillsFolder: 'skills',
  },
};

export const AI_TOOL_CHOICES = Object.entries(AI_TOOLS).map(([key, config]) => ({
  title: config.displayName,
  value: key,
}));

export function getAIToolConfig(toolName: string): AIToolConfig | undefined {
  return AI_TOOLS[toolName];
}

export function getAllAITools(): AIToolConfig[] {
  return Object.values(AI_TOOLS);
}
