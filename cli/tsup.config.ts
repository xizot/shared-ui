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
});
