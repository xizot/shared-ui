import fs from 'fs-extra';
import path from 'path';

const CONFIG_FILE = 'shared-ui.json';

export interface Config {
  componentsPath: string;
  aliases: {
    components: string;
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

  return fs.readJSON(configPath);
}
