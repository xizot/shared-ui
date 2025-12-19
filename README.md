# Shared UI Component Library

A comprehensive React component library built with [shadcn/ui](https://ui.shadcn.com/), TypeScript, and Tailwind CSS. This library contains all shadcn/ui components pre-installed and ready to customize.

## Features

- 🎨 **54+ UI Components** - All shadcn/ui components pre-installed
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **Customizable** - All components are in your codebase, modify as needed
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - Built on Radix UI primitives

## Installation

### From GitHub

```bash
# npm
npm install git+https://github.com/xizot/share-ui.git

# yarn
yarn add git+https://github.com/xizot/share-ui.git

# pnpm
pnpm add git+https://github.com/xizot/share-ui.git
```

### Peer Dependencies

This library requires the following peer dependencies. You need to install them separately:

```bash
# Required peer dependencies
npm install react react-dom

# Optional peer dependencies (only if you use specific features)
npm install react-hook-form date-fns react-day-picker @tanstack/react-table
```

**Peer Dependencies:**
- `react` ^18.0.0 || ^19.0.0 (required)
- `react-dom` ^18.0.0 || ^19.0.0 (required)
- `react-hook-form` ^7.0.0 (optional - only for RHF components)
- `date-fns` ^2.0.0 || ^3.0.0 (optional - only for date pickers)
- `react-day-picker` ^9.0.0 (optional - only for date pickers)
- `@tanstack/react-table` ^8.0.0 || ^9.0.0 (optional - only for DataTable component)

### Setup in Your Project

This library uses **Tailwind CSS v4**. The CSS is already bundled, but you need to ensure your project is compatible:

1. **If your project uses Tailwind CSS v4**:
   - No additional setup needed! The styles are bundled with the library.
   - Import the styles if needed: `import 'shared-ui/styles'`

2. **If your project uses Tailwind CSS v3**:
   - You may need to upgrade to v4, or
   - Copy the CSS variables from `shared-ui/src/index.css` to your project's CSS file
   - Update your `tailwind.config.js` to include the library:
   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/shared-ui/dist/**/*.{js,mjs}", // Add this
     ],
     // ... rest of your config
   }
   ```

3. **CSS Variables**: The library uses CSS variables for theming. Make sure your project has the same CSS variables defined, or copy them from `shared-ui/src/index.css`.

## Usage

### Basic Example

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'shared-ui'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Import Specific Components

```tsx
import { Button } from 'shared-ui'
import { Card, CardHeader, CardTitle } from 'shared-ui'
import { Input, Label } from 'shared-ui'
```

### Using Utilities

```tsx
import { cn, get, hasValue } from 'shared-ui'

// Merge Tailwind classes
const className = cn("base-class", condition && "conditional-class")

// Get nested object property
const userName = get(user, 'profile.name') // Safe property access

// Check if value exists
if (hasValue(data)) {
  // Handle non-empty value
}
```

### Using Hooks

```tsx
import { useIsMobile } from 'shared-ui'

function MyComponent() {
  const isMobile = useIsMobile()
  
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

### Using RHF Components

```tsx
import { useForm } from 'react-hook-form'
import { RHFInput, RHFTextarea, RHFCombobox } from 'shared-ui'

function MyForm() {
  const { control, register } = useForm({
    defaultValues: {
      email: '',
      message: '',
      country: ''
    }
  })

  const options = [
    { id: 1, name: 'Vietnam' },
    { id: 2, name: 'USA' }
  ]

  return (
    <form>
      <RHFInput
        control={control}
        register={register}
        name="email"
        label="Email"
        type="email"
        required
      />
      
      <RHFTextarea
        control={control}
        register={register}
        name="message"
        label="Message"
        required
      />
      
      <RHFCombobox
        control={control}
        name="country"
        options={options}
        label="Country"
        required
      />
    </form>
  )
}
```

### Using Toast Notifications

```tsx
import { Toaster, toast } from 'shared-ui'

function App() {
  return (
    <>
      <Toaster />
      <button onClick={() => toast.success('Success!')}>
        Show Toast
      </button>
    </>
  )
}
```

## Available Components

### Layout & Structure
- **accordion** - Collapsible content sections
- **aspect-ratio** - Maintain aspect ratios
- **card** - Container for content
- **separator** - Visual divider
- **resizable** - Resizable panels
- **scroll-area** - Custom scrollable area
- **sidebar** - Sidebar navigation

### Navigation
- **breadcrumb** - Breadcrumb navigation
- **menubar** - Menu bar component
- **navigation-menu** - Navigation menu
- **pagination** - Pagination controls
- **tabs** - Tabbed interface

### Forms & Inputs
- **button** - Button component with variants
- **button-group** - Group of buttons
- **checkbox** - Checkbox input
- **combobox** - Searchable select dropdown
- **input** - Text input field with label/error support
- **input-group** - Input with addons
- **input-otp** - OTP input field
- **label** - Form label
- **radio-group** - Radio button group
- **select** - Select dropdown with label/error support
- **slider** - Range slider
- **switch** - Toggle switch
- **textarea** - Multi-line text input with label/error support
- **form** - Form wrapper with validation
- **field** - Form field wrapper

### React Hook Form Components (RHF)
- **RHFInput** - Input with react-hook-form integration
- **RHFTextarea** - Textarea with react-hook-form integration
- **RHFCombobox** - Combobox with react-hook-form integration
- **RHFSwitch** - Switch with react-hook-form integration
- **RHFRadioGroup** - RadioGroup with react-hook-form integration
- **RHFDatePicker** - Date picker with react-hook-form integration
- **RHFDateRangePicker** - Date range picker with react-hook-form integration
- **RHFFormattedInput** - Formatted input (integer, decimal, currency) with react-hook-form integration

### Feedback
- **alert** - Alert messages
- **alert-dialog** - Modal alert dialog
- **progress** - Progress indicator
- **skeleton** - Loading skeleton
- **spinner** - Loading spinner
- **sonner** - Toast notifications
- **toast** - Toast notifications

### Overlays
- **dialog** - Modal dialog
- **drawer** - Slide-out drawer
- **dropdown-menu** - Dropdown menu
- **hover-card** - Hover card
- **popover** - Popover component
- **sheet** - Side sheet
- **tooltip** - Tooltip component
- **context-menu** - Right-click menu

### Data Display
- **avatar** - User avatar
- **badge** - Badge component
- **calendar** - Date picker calendar
- **carousel** - Image/content carousel
- **chart** - Chart components
- **data-table** - Advanced data table with sorting, filtering, and pagination (TanStack Table)
- **empty** - Empty state
- **kbd** - Keyboard key display
- **table** - Basic table component
- **toggle** - Toggle button
- **toggle-group** - Toggle button group

### Advanced
- **collapsible** - Collapsible content
- **command** - Command palette
- **item** - List item component

## Customization

All components are located in `node_modules/shared-ui/src/components/ui/`. You can:

1. **Copy components to your project** and modify them
2. **Override styles** using Tailwind classes
3. **Modify the theme** by updating CSS variables
4. **Extend components** by wrapping them

### Theme Customization

Update CSS variables in your project's CSS file:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build library
npm run build

# Type check
npm run type-check
```

### Project Structure

```
shared-ui/
├── src/
│   ├── components/
│   │   └── ui/          # All shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions (cn)
│   ├── hooks/           # Custom hooks
│   └── index.ts         # Main export file
├── dist/                # Build output
├── components.json       # shadcn/ui config
└── package.json
```

## Guidelines

### When to Install Peer Dependencies

**Always Required:**
- `react` and `react-dom` - Core React dependencies

**Only if using RHF Components:**
- `react-hook-form` - Required for all `RHF*` components (RHFInput, RHFTextarea, RHFCombobox, etc.)

**Only if using Date Pickers:**
- `date-fns` - Required for date formatting in RHFDatePicker and RHFDateRangePicker
- `react-day-picker` - Required for Calendar component and date pickers

### Best Practices

1. **Import Styles First**
   ```tsx
   import 'shared-ui/styles.css' // Import at the top of your entry file
   import { Button } from 'shared-ui'
   ```

2. **Tree-shaking**
   - Import only what you need to keep bundle size small
   ```tsx
   // ✅ Good - Tree-shakeable
   import { Button, Input } from 'shared-ui'
   
   // ❌ Avoid - Imports everything
   import * as SharedUI from 'shared-ui'
   ```

3. **Using RHF Components**
   ```tsx
   import { useForm } from 'react-hook-form'
   import { RHFInput, RHFTextarea } from 'shared-ui'
   
   function MyForm() {
     const { control, register } = useForm()
     
     return (
       <form>
         <RHFInput
           control={control}
           register={register}
           name="email"
           label="Email"
           required
         />
       </form>
     )
   }
   ```

4. **Using Date Pickers**
   ```tsx
   import { RHFDatePicker } from 'shared-ui'
   import { format } from 'date-fns' // date-fns is peer dependency
   
   // Make sure react-day-picker is installed
   ```

5. **Component Props**
   - All `className` props use `ComponentProps['className']` for type safety
   - Always pass `id` prop when using `label` to ensure proper accessibility

6. **Error Handling**
   - RHF components automatically display errors from react-hook-form
   - Base components (Input, Textarea, etc.) accept `error` prop directly

7. **Accessibility**
   - All components follow ARIA guidelines
   - Labels are properly linked to inputs via `htmlFor` and `id`
   - Error messages are announced to screen readers

8. **Available Utilities**
   - **Core**: `cn()`, `get()`, `hasValue()`, `toast`
   - **Formatting**: `formatCurrency()`, `formatDate()`, `formatPhoneNumber()`, `formatFileSize()`, `truncate()`
   - **Validation**: `validateEmail()`, `validatePhone()`, `validateURL()`, `validateVietnamesePhone()`
   - **Data**: `deepMerge()`, `pick()`, `omit()`, `groupBy()`, `sortBy()`
   - **String**: `slugify()`, `camelCase()`, `kebabCase()`, `capitalize()`
   - **Performance**: `lazyLoad()`, `calculateVirtualScroll()`

9. **Available Hooks**
   - **Media**: `useIsMobile()`, `useIsTablet()`, `useMediaQuery()`, `useBreakpoint()`, `useWindowSize()`
   - **Form**: `useDebounce()`, `useDebouncedCallback()`, `useThrottle()`
   - **Storage**: `useLocalStorage()`, `useSessionStorage()`
   - **UI**: `useClickOutside()`, `useCopyToClipboard()`, `useToggle()`, `usePrevious()`
   - **Performance**: `useMemoizedCallback()`
   - **Accessibility**: `useFocusTrap()`, `useKeyboardNavigation()`, `useAriaLabel()`
   - **Theme**: `useTheme()` (requires ThemeProvider)
   - **i18n**: `useTranslation()` (requires I18nProvider)

10. **Available Components**
    - **Layout**: `Container`, `Stack`, `Grid`, `Divider`
    - **Feedback**: `LoadingButton`, `ConfirmDialog`, `DeleteConfirmDialog`
    - **Data Display**: `DataTable`, `EmptyState`, `LoadingState`, `ErrorBoundary`, `StatusBadge`
    - **RHF Components**: `RHFInput`, `RHFTextarea`, `RHFNumberInput`, `RHFCheckboxGroup`, `RHFMultiSelect`, `RHFUpload`, `RHFTimePicker`, `RHFDatePicker`, `RHFDateRangePicker`, `RHFCombobox`, `RHFSwitch`, `RHFRadioGroup`, `RHFFormattedInput`

11. **Available Constants**
    - `BREAKPOINTS` - Responsive breakpoints (sm, md, lg, xl, 2xl)
    - `REGEX` - Common regex patterns (email, phone, URL, etc.)
    - `DATE_FORMATS` - Predefined date format strings

12. **Available Types**
    - `ComboboxOption`, `ComboboxBaseOption`
    - `ChartConfig`
    - `DeepPartial`, `RequiredFields`, `OptionalFields`, `Prettify`
    - `StatusType`, `Breakpoint`, `DateFormat`
    - `ColumnDef` (from @tanstack/react-table)

## DataTable Usage Guide

The `DataTable` component is built on top of [TanStack Table](https://tanstack.com/table) and provides powerful features for displaying and manipulating tabular data.

### Installation

DataTable requires `@tanstack/react-table` as a peer dependency:

```bash
npm install @tanstack/react-table
```

### 1. Basic Usage

Simple table without any features:

```tsx
import { DataTable, type ColumnDef } from 'shared-ui'

type User = {
  id: string
  name: string
  email: string
  role: string
}

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
]

const data: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

function UsersTable() {
  return <DataTable data={data} columns={columns} />
}
```

### 2. With Global Search

Enable search functionality to filter across all columns or a specific column:

```tsx
<DataTable
  data={data}
  columns={columns}
  searchable
  searchPlaceholder="Search users..."
  searchKey="name" // Optional: search only in 'name' column. Omit to search all columns
/>
```

### 3. With Column Sorting

Enable sorting on specific columns:

```tsx
const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true, // Enable sorting for this column
  },
  {
    accessorKey: 'email',
    header: 'Email',
    enableSorting: true,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    enableSorting: false, // Disable sorting for this column
  },
]

<DataTable data={data} columns={columns} />
```

### 4. With Custom Cell Rendering

Customize how cells are rendered:

```tsx
import { Badge } from 'shared-ui'

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.original.role
      return (
        <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>
          {role}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => (
      <a href={`mailto:${row.original.email}`} className="text-primary hover:underline">
        {row.original.email}
      </a>
    ),
  },
]
```

### 5. With Pagination

Configure pagination settings:

```tsx
<DataTable
  data={data}
  columns={columns}
  pagination={{
    pageSize: 20, // Items per page
    showPagination: true, // Show/hide pagination controls
  }}
/>
```

### 6. With Row Click Handler

Handle row clicks and dynamic row styling:

```tsx
<DataTable
  data={data}
  columns={columns}
  onRowClick={(row) => {
    console.log('Clicked row:', row)
    // Navigate to detail page, open modal, etc.
  }}
  rowClassName={(row) => {
    // Dynamic row styling
    return row.role === 'Admin' ? 'bg-muted' : ''
  }}
/>
```

### 7. With Custom Filter Function

Implement custom global filter logic:

```tsx
import type { FilterFn } from '@tanstack/react-table'

const customFilter: FilterFn<User> = (row, columnId, filterValue) => {
  // Custom filtering logic
  const searchValue = String(filterValue).toLowerCase()
  return (
    row.original.name.toLowerCase().includes(searchValue) ||
    row.original.email.toLowerCase().includes(searchValue)
  )
}

<DataTable
  data={data}
  columns={columns}
  searchable
  globalFilterFn={customFilter}
/>
```

### 8. Complete Example with All Features

```tsx
import { DataTable, type ColumnDef, Badge, Button } from 'shared-ui'
import { useState } from 'react'

type User = {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

function UsersTable() {
  const [users] = useState<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  ])

  const columns: ColumnDef<User, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      enableSorting: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableSorting: true,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => (
        <Badge variant={row.original.role === 'Admin' ? 'default' : 'secondary'}>
          {row.original.role}
        </Badge>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge variant={row.original.status === 'active' ? 'default' : 'outline'}>
          {row.original.status}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button size="sm" onClick={() => handleEdit(row.original)}>
          Edit
        </Button>
      ),
    },
  ]

  return (
    <DataTable
      data={users}
      columns={columns}
      searchable
      searchPlaceholder="Search users..."
      searchKey="name"
      pagination={{ pageSize: 10 }}
      onRowClick={(user) => console.log('Selected:', user)}
      emptyMessage="No users found"
    />
  )
}
```

### 9. With Internationalization

Customize labels for different languages:

```tsx
<DataTable
  data={data}
  columns={columns}
  searchable
  searchPlaceholder="Tìm kiếm..."
  emptyMessage="Không có dữ liệu"
  labels={{
    previous: 'Trước',
    next: 'Sau',
    showing: 'Hiển thị',
    to: 'đến',
    of: 'trong',
    results: 'kết quả',
    page: 'Trang',
  }}
/>
```

### Advanced: Using TanStack Table Features

Since `DataTable` uses TanStack Table's `ColumnDef`, you can leverage all TanStack Table features:

```tsx
import { ColumnDef } from '@tanstack/react-table'

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: 'includesString', // Built-in filter function
    sortingFn: 'alphanumeric', // Built-in sorting function
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button size="sm" onClick={() => handleEdit(row.original)}>
          Edit
        </Button>
        <Button size="sm" variant="destructive" onClick={() => handleDelete(row.original.id)}>
          Delete
        </Button>
      </div>
    ),
  },
]
```

For more advanced features, refer to the [TanStack Table documentation](https://tanstack.com/table/latest).

## Dependencies

### Peer Dependencies
- `react` ^18.0.0 || ^19.0.0 (required)
- `react-dom` ^18.0.0 || ^19.0.0 (required)
- `react-hook-form` ^7.0.0 (optional - for RHF components)
- `date-fns` ^2.0.0 || ^3.0.0 (optional - for date pickers)
- `react-day-picker` ^9.0.0 (optional - for date pickers)

### Included Dependencies
- All Radix UI primitives
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react` (icons)
- `sonner` (toast notifications)
- And more (see package.json)

## License

MIT

## Contributing

This is a shared UI library. Feel free to customize components as needed for your projects.

## Design System Preview

The library includes an interactive Design System documentation page. See [PREVIEW.md](./PREVIEW.md) for details on building and deploying the preview site.

### Quick Start

```bash
# Build preview site
npm run build:preview

# Preview locally
npm run preview:design
```

The preview site is built separately from the library to avoid increasing the library bundle size.

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
