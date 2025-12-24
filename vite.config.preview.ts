import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

// Preview/Design System build config for GitHub Pages
// For GitHub Pages subdirectory: use '/repo-name/'
// For root domain: use '/'
// For local preview: use '/' (set GITHUB_REPO_NAME to empty)
// Default for GitHub Pages: '/share-ui/' (matches repository name)
const repoName = process.env.GITHUB_REPO_NAME;
const base = repoName ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist-preview',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  base,
});

