import fs from 'fs-extra';
import path from 'path';
import { execa } from 'execa';

export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

export async function detectPackageManager(
  cwd: string
): Promise<PackageManager> {
  // Check for lock files
  if (await fs.pathExists(path.join(cwd, 'bun.lockb'))) {
    return 'bun';
  }
  if (await fs.pathExists(path.join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (await fs.pathExists(path.join(cwd, 'yarn.lock'))) {
    return 'yarn';
  }
  if (await fs.pathExists(path.join(cwd, 'package-lock.json'))) {
    return 'npm';
  }

  // Default to npm
  return 'npm';
}

export async function installDependencies(
  dependencies: string[],
  packageManager: PackageManager,
  cwd: string
): Promise<void> {
  const commands: Record<PackageManager, [string, string[]]> = {
    npm: ['npm', ['install', ...dependencies]],
    yarn: ['yarn', ['add', ...dependencies]],
    pnpm: ['pnpm', ['add', ...dependencies]],
    bun: ['bun', ['add', ...dependencies]],
  };

  const [command, args] = commands[packageManager];
  await execa(command, args, { cwd });
}
