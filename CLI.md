# @xizot/shared-ui CLI

A CLI tool for adding shared-ui components to your project - like [shadcn/ui](https://ui.shadcn.com/).

## Installation

Install the CLI globally from GitHub:

```bash
# Install globally
npm install -g github:xizot/shared-ui

# Then use
shared-ui [command]
```

Or run directly with npx:

```bash
npx github:xizot/shared-ui [command]
```

## Commands

### `init`

Initialize shared-ui in your project. This will:

1. Create a `shared-ui.json` configuration file
2. Set up the directory structure for components
3. Install base dependencies (tailwindcss, clsx, tailwind-merge, etc.)
4. Create the utility function file (`lib/utils.ts`)

```bash
npx @xizot/shared-ui init
```

#### Options

| Option           | Description                               |
| ---------------- | ----------------------------------------- |
| `-y, --yes`      | Use default configuration without prompts |
| `-d, --defaults` | Same as `--yes`                           |
| `--skip-deps`    | Skip installing dependencies              |

#### Example

```bash
# Interactive mode
shared-ui init
# or: npx github:xizot/shared-ui init

# Use defaults
shared-ui init -y

# Skip dependency installation
shared-ui init --skip-deps
```

#### Configuration

After running `init`, a `shared-ui.json` file will be created:

```json
{
  "$schema": "https://shared-ui.xizot.dev/schema.json",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css"
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "constants": "@/constants"
  }
}
```

### `add`

Add components to your project.

```bash
npx @xizot/shared-ui add [components...]
```

#### Options

| Option             | Description                                    |
| ------------------ | ---------------------------------------------- |
| `-y, --yes`        | Skip confirmation prompt                       |
| `-o, --overwrite`  | Overwrite existing files                       |
| `-a, --all`        | Add all available components                   |
| `-c, --cwd <path>` | Working directory (default: current directory) |

#### Examples

```bash
# Add a single component
shared-ui add button

# Add multiple components
shared-ui add button input card dialog

# Add all components
shared-ui add --all

# Add with overwrite
shared-ui add button --overwrite

# Skip confirmation
shared-ui add button input -y

# List available components
shared-ui add
```

## Project Structure

After initialization, your project will have this structure:

```
your-project/
├── shared-ui.json          # Configuration file
├── src/
│   ├── components/
│   │   └── ui/             # UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn)
│   ├── hooks/              # Custom hooks
│   └── constants/          # Constants
└── ...
```

## Available Components

### UI Components

- `accordion` - Collapsible content sections
- `alert` - Alert messages
- `alert-dialog` - Modal alert dialog
- `aspect-ratio` - Maintain aspect ratios
- `avatar` - User avatar
- `badge` - Badge component
- `breadcrumb` - Breadcrumb navigation
- `button` - Button component with variants
- `button-group` - Group of buttons
- `calendar` - Date picker calendar
- `card` - Container for content
- `carousel` - Image/content carousel
- `chart` - Chart components
- `checkbox` - Checkbox input
- `collapsible` - Collapsible content
- `combobox` - Searchable select dropdown
- `command` - Command palette
- `confirm-dialog` - Confirmation dialog
- `container` - Container component
- `context-menu` - Right-click menu
- `data-table` - Advanced data table
- `date-picker` - Date picker
- `date-range-picker` - Date range picker
- `delete-confirm-dialog` - Delete confirmation
- `dialog` - Modal dialog
- `divider` - Visual divider
- `drawer` - Slide-out drawer
- `dropdown-menu` - Dropdown menu
- `editor` - Rich text editor
- `empty` - Empty state
- `empty-state` - Empty state component
- `error-boundary` - Error boundary
- `field` - Form field wrapper
- `file-upload` - File upload component
- `form` - Form wrapper
- `grid` - Grid layout
- `hover-card` - Hover card
- `image-lightbox` - Image lightbox
- `image-preview` - Image preview
- `input` - Text input field
- `input-group` - Input with addons
- `input-otp` - OTP input field
- `item` - List item component
- `kbd` - Keyboard key display
- `label` - Form label
- `loading-button` - Button with loading state
- `loading-state` - Loading state component
- `menubar` - Menu bar component
- `month-picker` - Month picker
- `multiple-combobox` - Multiple select combobox
- `navigation-menu` - Navigation menu
- `pagination` - Pagination controls
- `popover` - Popover component
- `progress` - Progress indicator
- `radio-group` - Radio button group
- `resizable` - Resizable panels
- `scroll-area` - Custom scrollable area
- `select` - Select dropdown
- `separator` - Visual divider
- `sheet` - Side sheet
- `sidebar` - Sidebar navigation
- `skeleton` - Loading skeleton
- `slider` - Range slider
- `sonner` - Toast notifications
- `spinner` - Loading spinner
- `stack` - Stack layout
- `status-badge` - Status badge
- `switch` - Toggle switch
- `table` - Basic table component
- `tabs` - Tabbed interface
- `textarea` - Multi-line text input
- `time-picker` - Time picker
- `toggle` - Toggle button
- `toggle-group` - Toggle button group
- `tooltip` - Tooltip component

### React Hook Form Components

- `rhf-checkbox-group` - Checkbox group with RHF
- `rhf-combobox` - Combobox with RHF
- `rhf-date-picker` - Date picker with RHF
- `rhf-date-range-picker` - Date range picker with RHF
- `rhf-editor` - Rich text editor with RHF
- `rhf-error-message` - Error message component
- `rhf-file-upload` - File upload with RHF
- `rhf-formatted-input` - Formatted input with RHF
- `rhf-input` - Input with RHF
- `rhf-multi-select` - Multi-select with RHF
- `rhf-number-input` - Number input with RHF
- `rhf-radio-group` - Radio group with RHF
- `rhf-switch` - Switch with RHF
- `rhf-textarea` - Textarea with RHF
- `rhf-time-picker` - Time picker with RHF
- `rhf-upload` - Upload with RHF

### Utilities

- `lib/utils` - Utility functions (cn, etc.)
- `lib/format` - Formatting functions
- `lib/validate` - Validation functions
- `lib/toast` - Toast functions
- `lib/string` - String utilities
- `lib/types` - Type utilities

### Hooks

- `hooks/use-mobile` - Mobile detection hook
- `hooks/use-breakpoint` - Breakpoint hook
- `hooks/use-debounce` - Debounce hook
- `hooks/use-throttle` - Throttle hook
- `hooks/use-local-storage` - Local storage hook
- `hooks/use-session-storage` - Session storage hook
- `hooks/use-click-outside` - Click outside hook
- `hooks/use-copy-to-clipboard` - Copy to clipboard hook
- `hooks/use-toggle` - Toggle hook
- `hooks/use-previous` - Previous value hook
- `hooks/use-media-query` - Media query hook
- `hooks/use-window-size` - Window size hook
- `hooks/use-focus-trap` - Focus trap hook
- `hooks/use-keyboard-navigation` - Keyboard navigation hook
- `hooks/use-aria-label` - ARIA label hook
- `hooks/use-is-tablet` - Tablet detection hook
- `hooks/use-debounced-callback` - Debounced callback hook
- `hooks/use-memoized-callback` - Memoized callback hook

### Constants

- `constants/breakpoints` - Responsive breakpoints
- `constants/common` - Common constants
- `constants/date-formats` - Date format constants
- `constants/form-sizes` - Form size constants
- `constants/regex` - Regex patterns

## Usage

After adding components, import them in your code:

```tsx
// Import UI components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

// Import utilities
import { cn } from '@/lib/utils';

// Import hooks
import { useIsMobile } from '@/hooks/use-mobile';

function MyComponent() {
  const isMobile = useIsMobile();

  return (
    <Card className={cn('p-4', isMobile && 'p-2')}>
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

## Customization

Since components are copied to your project, you have full control to customize them:

1. **Modify styles** - Edit Tailwind classes directly
2. **Change behavior** - Modify component logic
3. **Add features** - Extend components as needed
4. **Update dependencies** - Change underlying libraries

## Dependency Resolution

When you add a component, the CLI automatically:

1. **Resolves dependencies** - Identifies required internal dependencies (other components, utilities)
2. **Installs npm packages** - Installs required npm packages
3. **Copies files** - Copies all necessary files to your project

For example, adding `date-picker` will also add:

- `button` component
- `calendar` component
- `popover` component
- `lib/utils` utility
- And install `react-day-picker`, `date-fns` packages

## Troubleshooting

### "Could not find shared-ui.json configuration"

Run `shared-ui init` first to initialize the project.

### "Component not found"

Check the component name. Run `npx @xizot/shared-ui add` to see all available components.

### Import errors after adding components

Make sure your project has path aliases configured. In `tsconfig.json`:

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

For Vite, add to `vite.config.ts`:

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

## License

MIT
