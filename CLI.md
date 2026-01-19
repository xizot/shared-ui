# CLI Usage Guide

## Installation

```bash
npx @xizot/shared-ui-cli init
```

This will:
- Create `shared-ui.json` configuration file
- Set up directory structure
- Configure path aliases

## Adding Components

### Add specific components

```bash
npx @xizot/shared-ui-cli add button input card
```

### Add all components

```bash
npx @xizot/shared-ui-cli add --all
```

### Options

- `-y, --yes` - Skip confirmation prompts
- `-o, --overwrite` - Overwrite existing files
- `-p, --path <path>` - Custom installation path

## Configuration

The `shared-ui.json` file stores your project configuration:

```json
{
  "componentsPath": "src/components/ui/shared-ui",
  "aliases": {
    "components": "@/components",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "constants": "@/constants"
  }
}
```

## Component Structure

Components are installed with this structure:

```
src/
├── components/
│   └── ui/
│       └── shared-ui/
│           ├── button.tsx
│           ├── input.tsx
│           └── ...
├── lib/
│   ├── utils.ts
│   ├── format.ts
│   └── ...
├── hooks/
│   ├── use-mobile.ts
│   └── ...
└── constants/
    ├── form-sizes.ts
    └── ...
```

## Dependency Resolution

The CLI automatically resolves and installs:
- Component dependencies (other components)
- Utility dependencies (lib, hooks, constants)
- NPM package dependencies

## Examples

### Basic setup

```bash
# 1. Initialize
npx @xizot/shared-ui-cli init

# 2. Add commonly used components
npx @xizot/shared-ui-cli add button input card alert

# 3. Start using
import { Button } from '@/components/ui/shared-ui/button';
```

### Form components

```bash
# Add form-related components
npx @xizot/shared-ui-cli add form label input textarea select checkbox radio-group

# Or use RHF versions
npx @xizot/shared-ui-cli add rhf-input rhf-select rhf-checkbox
```

### Complex components

```bash
# DataTable includes Table, Pagination, Select, Input automatically
npx @xizot/shared-ui-cli add data-table

# Calendar includes Date utilities
npx @xizot/shared-ui-cli add calendar date-picker
```

## Migration from NPM Package

If you're currently using the NPM package version:

1. **Initialize CLI in your project:**
   ```bash
   npx @xizot/shared-ui-cli init
   ```

2. **Add components you're using:**
   ```bash
   npx @xizot/shared-ui-cli add button input card
   ```

3. **Update imports:**
   ```diff
   - import { Button } from 'shared-ui';
   + import { Button } from '@/components/ui/shared-ui/button';
   ```

4. **Remove package:**
   ```bash
   npm uninstall shared-ui
   # or yarn remove shared-ui
   ```

5. **Remove CSS import:**
   ```diff
   - import 'shared-ui/styles.css';
   ```
   (CSS is now included in component files)

## Benefits

- ✅ **Full Control:** Components are in your codebase
- ✅ **Easy Customization:** Edit files directly
- ✅ **No Version Lock:** No dependency on package versions
- ✅ **Offline Work:** All code is local
- ✅ **Better Performance:** Only bundle what you use
- ✅ **Team Collaboration:** Components are versioned with your code
