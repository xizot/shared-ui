import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Library build mode
  if (command === 'build' && mode === 'lib') {
    return {
      plugins: [
        react(),
        tailwindcss(),
        dts({
          include: ['src/**/*'],
          exclude: ['src/**/*.test.*', 'src/**/*.spec.*', 'src/App.tsx', 'src/main.tsx', 'src/pages/**/*'],
          outDir: 'dist/types',
          rollupTypes: true,
          insertTypesEntry: true,
          tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
        }),
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'SharedUI',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'src/index.ts'),
          },
          external: (id) => {
            // Exclude pages directory from library build
            if (id.includes('/pages/') || id.includes('\\pages\\')) {
              return true;
            }
            // External dependencies
            const externals = [
              'react',
              'react-dom',
              'react/jsx-runtime',
              '@radix-ui/react-accordion',
              '@radix-ui/react-alert-dialog',
              '@radix-ui/react-aspect-ratio',
              '@radix-ui/react-avatar',
              '@radix-ui/react-checkbox',
              '@radix-ui/react-collapsible',
              '@radix-ui/react-context-menu',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-hover-card',
              '@radix-ui/react-label',
              '@radix-ui/react-menubar',
              '@radix-ui/react-navigation-menu',
              '@radix-ui/react-popover',
              '@radix-ui/react-progress',
              '@radix-ui/react-radio-group',
              '@radix-ui/react-scroll-area',
              '@radix-ui/react-select',
              '@radix-ui/react-separator',
              '@radix-ui/react-slider',
              '@radix-ui/react-slot',
              '@radix-ui/react-switch',
              '@radix-ui/react-tabs',
              '@radix-ui/react-toggle',
              '@radix-ui/react-toggle-group',
              '@radix-ui/react-tooltip',
              'class-variance-authority',
              'clsx',
              'tailwind-merge',
              'lucide-react',
              'cmdk',
              'embla-carousel-react',
              'input-otp',
              'next-themes',
              'react-day-picker',
              'react-hook-form',
              'date-fns',
              '@tanstack/react-table',
              'react-resizable-panels',
              'recharts',
              'sonner',
              'vaul',
            ];
            return externals.includes(id);
          },
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
            assetFileNames: 'style.css',
          },
        },
        cssCodeSplit: false,
        sourcemap: true,
      },
      css: {
        // Extract CSS to separate file
        extract: {
          fileName: 'style.css',
        },
      },
    }
  }

  // Development mode
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
