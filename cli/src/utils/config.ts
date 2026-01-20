import fs from 'fs-extra';
import path from 'path';

const CONFIG_FILE = 'shared-ui.json';

export interface Config {
  $schema?: string;
  style: string;
  tailwind: {
    config: string;
    css: string;
  };
  aliases: {
    components: string;
    ui: string;
    lib: string;
    hooks: string;
    constants: string;
  };
}

export async function getProjectConfig(cwd: string): Promise<Config | null> {
  const configPath = path.join(cwd, CONFIG_FILE);

  if (!(await fs.pathExists(configPath))) {
    return null;
  }

  const config = await fs.readJSON(configPath);

  // Handle legacy config format
  if (!config.aliases?.ui && config.componentsPath) {
    // Convert old format to new format
    return {
      style: 'default',
      tailwind: {
        config: 'tailwind.config.js',
        css: 'src/index.css',
      },
      aliases: {
        components: config.aliases?.components || '@/components',
        ui: '@/components/ui',
        lib: config.aliases?.lib || '@/lib',
        hooks: config.aliases?.hooks || '@/hooks',
        constants: config.aliases?.constants || '@/constants',
      },
    };
  }

  return config;
}
