# @xizot/shared-ui

A comprehensive React component library built with [shadcn/ui](https://ui.shadcn.com/), TypeScript, and Tailwind CSS. Components are designed to be **copied and pasted into your project** for full customization control.

## Features

- ��� **70+ UI Components** - Complete shadcn/ui-based component collection
- ��� **React Hook Form Integration** - 17 pre-built form components
- ��� **TypeScript** - Full type safety
- ��� **Tailwind CSS v4** - Modern utility-first styling
- ��� **Full Control** - Copy components to your codebase and customize freely
- ��� **Responsive** - Mobile-first design
- ♿ **Accessible** - Built on Radix UI primitives
- ��� **CLI Tool** - Easy installation like shadcn/ui

## Quick Start

### 1. Install CLI

```bash
# Install globally from GitHub
npm install -g github:xizot/shared-ui

# Or run directly with npx
npx github:xizot/shared-ui init
```

### 2. Initialize in your project

```bash
shared-ui init
```

This will:

- Create a `shared-ui.json` configuration file
- Set up the directory structure (`src/components/ui`, `src/lib`, etc.)
- Install base dependencies (tailwindcss, clsx, tailwind-merge, lucide-react, etc.)
- Create the `cn()` utility function

### 3. Add components

```bash
# Add a single component
shared-ui add button

# Add multiple components
shared-ui add button input card dialog

# Add all components
shared-ui add --all

# See all available components
shared-ui add
```

### 4. Use in your code

```tsx
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardHeader, CardContent } from '@/shared/components/ui/card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <h2>Hello World</h2>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

## Project Structure

After initialization:

```
your-project/
├── shared-ui.json          # Configuration
├── src/
│   ├── shared/
│   │   ├── components/
│   │   │   └── ui/             # UI components (added via CLI)
│   │   │       ├── button.tsx
│   │   │       ├── input.tsx
│   │   │       └── ...
│   │   ├── lib/
│   │   │   └── utils.ts        # Utility functions
│   │   ├── hooks/              # Custom hooks (optional)
│   │   └── constants/          # Constants (optional)
│   └── ...
└── ...
```

````

## Why CLI-based Installation?

Unlike traditional npm packages, this approach gives you:

- ✅ **Full control** - Components are in your codebase, not node_modules
- ✅ **Easy customization** - Modify any component directly
- ✅ **No version lock-in** - Update components when you want
- ✅ **Smaller bundle** - Only install what you need
- ✅ **No breaking changes** - Your code, your rules

## Available Components

### UI Components (70+)

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, ConfirmDialog, Container, ContextMenu, DataTable, DatePicker, DateRangePicker, Dialog, Divider, Drawer, DropdownMenu, Editor, Empty, EmptyState, ErrorBoundary, Field, FileUpload, Form, Grid, HoverCard, ImageLightbox, ImagePreview, Input, InputGroup, InputOTP, Item, Kbd, Label, LoadingButton, LoadingState, Menubar, MonthPicker, MultipleCombobox, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Stack, StatusBadge, Switch, Table, Tabs, Textarea, TimePicker, Toggle, ToggleGroup, Tooltip

### React Hook Form Components (17)

RHFCheckboxGroup, RHFCombobox, RHFDatePicker, RHFDateRangePicker, RHFEditor, RHFErrorMessage, RHFFileUpload, RHFFormattedInput, RHFInput, RHFMultiSelect, RHFNumberInput, RHFRadioGroup, RHFSwitch, RHFTextarea, RHFTimePicker, RHFUpload

### Utilities

- `lib/utils` - cn(), get(), hasValue()
- `lib/format` - formatCurrency(), formatDate(), formatFileSize(), etc.
- `lib/validate` - validateEmail(), validatePhone(), validateURL(), etc.
- `lib/toast` - Toast notifications
- `lib/string` - slugify(), camelCase(), kebabCase(), etc.

### Hooks (18)

useAriaLabel, useBreakpoint, useClickOutside, useCopyToClipboard, useDebounce, useDebouncedCallback, useFocusTrap, useIsTablet, useKeyboardNavigation, useLocalStorage, useMediaQuery, useMemoizedCallback, useMobile, usePrevious, useSessionStorage, useThrottle, useToggle, useWindowSize

### Constants

breakpoints, common, date-formats, form-sizes, regex

## CLI Reference

See [CLI.md](./CLI.md) for detailed CLI documentation.

### Commands

```bash
# Initialize project
shared-ui init
shared-ui init -y  # Use defaults

# Add components
shared-ui add button
shared-ui add button input card
shared-ui add --all
shared-ui add -o  # Overwrite existing
````

## Configuration

The `shared-ui.json` file controls where components are installed:

```json
{
  "$schema": "https://shared-ui.xizot.dev/schema.json",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css"
  },
  "aliases": {
    "components": "@/shared/components",
    "ui": "@/shared/components/ui",
    "lib": "@/shared/lib",
    "hooks": "@/shared/hooks",
    "constants": "@/shared/constants"
  }
}
```

## Customization

Since components are copied to your project, customize freely:

```tsx
// src/shared/components/ui/button.tsx
// Modify this file directly!

const buttonVariants = cva('inline-flex items-center justify-center...', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground...',
      // Add your custom variant:
      brand: 'bg-brand-500 text-white hover:bg-brand-600',
    },
  },
});
```

## Requirements

- React 18+ or 19+
- TypeScript (recommended)
- Tailwind CSS v4
- Path aliases configured (`@/` → `./src/`)

### Tailwind CSS v4 Setup

**For Vite projects:**

```bash
npm install @tailwindcss/vite
```

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

**For Next.js / Other projects:**

```bash
npm install @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### Path Aliases Setup

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**vite.config.ts:**

```ts
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

## Development

```bash
# Install dependencies
npm install

# Generate registry (required before commit)
npm run generate:registry

# Build CLI
npm run build

# Run preview site
npm run dev
```

## Design System Preview

See [PREVIEW.md](./PREVIEW.md) for the interactive design system documentation.

```bash
npm run build:preview
npm run preview:design
```

## License

MIT

## Resources

- [CLI Documentation](./CLI.md)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
