import fs from 'fs-extra';
import path from 'path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  bundle: true,
  minify: true,
  platform: 'node',
  target: 'node18',
  shims: true,
  // Only bundle specific dependencies, keep transitive deps external
  external: [
    // Node.js builtins that cause dynamic require issues in bundled CJS deps
  ],
  esbuildOptions(options) {
    // This tells esbuild to handle CommonJS deps properly in ESM
    options.banner = {
      js: `import { createRequire } from 'module';const require = createRequire(import.meta.url);`,
    };
  },
  noExternal: ['commander', 'chalk', 'ora', 'prompts', 'execa', 'fs-extra'],
  async onSuccess() {
    // Copy .shared/skills to dist/.shared/skills
    const srcSkills = path.resolve(__dirname, '../.shared/skills');
    const destSkills = path.resolve(__dirname, 'dist/.shared/skills');

    if (await fs.pathExists(srcSkills)) {
      await fs.copy(srcSkills, destSkills);
      console.log('✓ Copied skills to dist/.shared/skills');
    }
  },
});
