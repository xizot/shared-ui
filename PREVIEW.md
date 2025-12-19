# Design System Preview

This document explains how to build and deploy the Design System preview page.

## Building the Preview Site

The Design System preview is built separately from the library to avoid increasing the library bundle size.

### Build Commands

```bash
# Build only the library (default)
npm run build

# Build only the preview site
npm run build:preview

# Build both library and preview site
npm run build:all
```

### Preview Locally

```bash
# Start dev server
npm run dev

# Preview built site
npm run preview:design
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Quick Deploy

```bash
# One command to build and deploy
npm run deploy:gh-pages
```

#### Manual Deploy

1. Build the preview site:
   ```bash
   npm run build:preview
   ```

2. The built files will be in `dist-preview/` directory

3. Deploy to GitHub Pages:
   ```bash
   # Using gh-pages package (install first: npm install -D gh-pages)
   npx gh-pages -d dist-preview
   ```

4. Configure GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

5. Your Design System will be available at:
   - `https://[username].github.io/[repo-name]/` (if repo is public)
   - Or your custom domain if configured

### Option 2: Netlify/Vercel

1. Build the preview site:
   ```bash
   npm run build:preview
   ```

2. Deploy `dist-preview/` folder to Netlify or Vercel

3. For continuous deployment, configure:
   - **Build command**: `npm run build:preview`
   - **Publish directory**: `dist-preview`

### Option 3: Static Hosting

Simply upload the contents of `dist-preview/` to any static hosting service.

## File Structure

- `dist/` - Library build (for npm package)
- `dist-preview/` - Preview site build (for documentation)

The preview site is completely separate from the library build, so it won't affect the library bundle size.

## Accessing Design System in Your Project

If you want to use the Design System component in your own project:

```tsx
import { DesignSystem } from 'shared-ui/pages/DesignSystem';

function App() {
  return <DesignSystem />;
}
```

Note: This will increase your bundle size. For production, it's recommended to use the preview site instead.

