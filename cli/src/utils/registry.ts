import fs from 'fs-extra';
import path from 'path';

const REGISTRY_URL =
  'https://raw.githubusercontent.com/xizot/share-ui/main/registry/index.json';

export interface RegistryEntry {
  name: string;
  type: 'registry:ui' | 'registry:lib' | 'registry:hook' | 'registry:constant';
  description?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    content?: string;
    type: 'registry:ui' | 'registry:lib' | 'registry:hook' | 'registry:constant';
  }[];
}

let registryCache: RegistryEntry[] | null = null;

export async function getRegistry(): Promise<RegistryEntry[]> {
  if (registryCache) {
    return registryCache;
  }

  try {
    // Try to load from local file first (for development)
    const localPath = path.resolve(process.cwd(), 'registry/index.json');
    if (await fs.pathExists(localPath)) {
      registryCache = await fs.readJSON(localPath);
      return registryCache;
    }

    // Otherwise fetch from remote
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.statusText}`);
    }

    registryCache = await response.json();
    return registryCache;
  } catch (error) {
    throw new Error(`Failed to load registry: ${error}`);
  }
}

export function resolveTree(
  registry: RegistryEntry[],
  components: string[]
): RegistryEntry[] {
  const resolved = new Map<string, RegistryEntry>();
  const queue = [...components];

  while (queue.length > 0) {
    const name = queue.shift()!;
    if (resolved.has(name)) {
      continue;
    }

    const entry = registry.find((e) => e.name === name);
    if (!entry) {
      throw new Error(`Component not found: ${name}`);
    }

    resolved.set(name, entry);

    // Add registry dependencies to queue
    if (entry.registryDependencies) {
      queue.push(...entry.registryDependencies);
    }
  }

  return Array.from(resolved.values());
}
