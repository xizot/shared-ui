import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

/**
 * Get the registry from the bundled package.
 * Priority:
 * 1. Local development registry (when running from source)
 * 2. Bundled registry in the npm package
 */
export async function getRegistry(): Promise<RegistryEntry[]> {
  if (registryCache) {
    return registryCache;
  }

  try {
    // Try local registry first (for development)
    const localRegistryPath = path.resolve(__dirname, '../../../registry/index.json');
    if (await fs.pathExists(localRegistryPath)) {
      registryCache = await fs.readJSON(localRegistryPath);
      return registryCache!;
    }

    // Try bundled registry in npm package
    // When installed globally or via npx, the structure is:
    // node_modules/@xizot/shared-ui/cli/dist/index.js
    // node_modules/@xizot/shared-ui/registry/index.json
    const packageRegistryPath = path.resolve(__dirname, '../../registry/index.json');
    if (await fs.pathExists(packageRegistryPath)) {
      registryCache = await fs.readJSON(packageRegistryPath);
      return registryCache!;
    }

    // Fallback: look for registry relative to current working directory
    const cwdRegistryPath = path.resolve(process.cwd(), 'registry/index.json');
    if (await fs.pathExists(cwdRegistryPath)) {
      registryCache = await fs.readJSON(cwdRegistryPath);
      return registryCache!;
    }

    throw new Error(
      'Could not find component registry. Make sure the package is installed correctly.',
    );
  } catch (error) {
    throw new Error(`Failed to load registry: ${error}`);
  }
}

export function resolveTree(registry: RegistryEntry[], components: string[]): RegistryEntry[] {
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
