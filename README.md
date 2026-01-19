# Shared UI Component Library

A comprehensive React component library built with [shadcn/ui](https://ui.shadcn.com/), TypeScript, and Tailwind CSS. Components are designed to be **copied and pasted into your project** for full customization control.

## Features

- 🎨 **70+ UI Components** - Complete shadcn/ui-based component collection
- 📋 **React Hook Form Integration** - 17 pre-built form components
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- 🔧 **Full Control** - Copy components to your codebase and customize freely
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - Built on Radix UI primitives
- 🌳 **Tree-shakeable** - Only bundle what you use

## Installation Methods

### Method 1: CLI Tool (Recommended - shadcn-style)

Install components directly into your project for full customization:

```bash
# Initialize shared-ui in your project
npx @xizot/shared-ui-cli init

# Add specific components
npx @xizot/shared-ui-cli add button input card

# Add all components
npx @xizot/shared-ui-cli add --all
```

Components will be copied to `src/components/ui/shared-ui/` (configurable during init).

**Advantages:**
- ✅ Full control over component code
- ✅ Easy customization and modifications
- ✅ No version lock-in
- ✅ Automatic dependency resolution
- ✅ Works offline after initial copy

### Method 2: NPM Package (Legacy)

Install as a dependency for quick setup:

```bash
# npm
npm install git+https://github.com/xizot/shared-ui.git

# yarn
yarn add git+https://github.com/xizot/shared-ui.git

# pnpm
pnpm add git+https://github.com/xizot/shared-ui.git
```

**Note:** This method is kept for backward compatibility. For new projects, we recommend using the CLI tool for better flexibility.

### Peer Dependencies

Install required peer dependencies based on what you use:

```bash
# Always required
npm install react react-dom

# For React Hook Form components
npm install react-hook-form

# For date pickers
npm install date-fns react-day-picker

# For data tables
npm install @tanstack/react-table

# For rich text editor
npm install react-quill-new quill
```

### Setup

#### For CLI Installation (Method 1)

No additional setup needed! Components are copied with all necessary imports and dependencies.

**Usage:**
```tsx
// Import from your local components directory
import { Button } from '@/components/ui/shared-ui/button';
import { Input } from '@/components/ui/shared-ui/input';

function MyForm() {
  return (
    <div>
      <Input label="Email" type="email" />
      <Button>Submit</Button>
    </div>
  );
}
```

**Customization:**
Simply edit the copied component files in your project. They're yours to modify!

#### For NPM Package Installation (Method 2)

1. **Import CSS** (required):

   ```tsx
   // In your root layout or _app.tsx (Next.js) / main.tsx (Vite)
   import 'shared-ui/styles.css';
   ```

2. **Tailwind CSS Compatibility**:
   - This library uses **Tailwind CSS v4**
   - If your project uses Tailwind CSS v3, you may need to upgrade to v4
   - Or copy the CSS variables from `shared-ui/src/index.css` to your project's CSS file

3. **CSS Variables**: The library uses CSS variables for theming. Make sure your project has the same CSS variables defined, or copy them from `shared-ui/src/index.css`.

## Quick Start

### 1. Import CSS

```tsx
// In your root layout or _app.tsx (Next.js) / main.tsx (Vite)
import 'shared-ui/styles.css';
```

### 2. Import Components

The library is split into 3 entry points for optimal bundle size and server component compatibility:

#### **Core Components** (Main Entry - Safe for Server Components)

```tsx
// ✅ Use in Server Components (Next.js App Router)
import { Button, Input, Card, Label } from 'shared-ui';

function ServerComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

#### **Client Components** (Components with createContext)

```tsx
// ✅ Use in Client Components only
'use client';
import { Carousel, Chart, Sidebar, ToggleGroup } from 'shared-ui/client';

function ClientComponent() {
  return <Carousel>{/* ... */}</Carousel>;
}
```

#### **RHF Components** (React Hook Form)

```tsx
// ✅ Use in Client Components with react-hook-form
'use client';
import { useForm } from 'react-hook-form';
import { RHFInput, RHFTextarea, Form } from 'shared-ui/rhf';

function MyForm() {
  const { control, register } = useForm();

  return (
    <Form control={control}>
      <RHFInput control={control} register={register} name="email" label="Email" />
    </Form>
  );
}
```

## Entry Points

The library provides 3 entry points to optimize bundle size and ensure server component compatibility:

| Entry Point | Path               | Use Case                       | Components                                      |
| ----------- | ------------------ | ------------------------------ | ----------------------------------------------- |
| **Core**    | `shared-ui` (main) | Server Components              | Button, Input, Card, Label, Badge, Avatar, etc. |
| **Client**  | `shared-ui/client` | Client Components with Context | Carousel, Chart, Sidebar, ToggleGroup           |
| **RHF**     | `shared-ui/rhf`    | React Hook Form                | RHFInput, RHFTextarea, Form, RHFEditor, etc.    |

### Why Separate Entry Points?

- **Server Component Compatibility**: Core components don't use `createContext`, making them safe for Next.js Server Components
- **Bundle Size Optimization**: Only import what you need
- **Tree-shaking**: Better tree-shaking when components are separated

## Usage

### Basic Example

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'shared-ui';

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
  );
}
```

### Import Specific Components

```tsx
import { Button } from 'shared-ui';
import { Card, CardHeader, CardTitle } from 'shared-ui';
import { Input, Label } from 'shared-ui';
```

### Using Utilities

```tsx
import { cn, get, hasValue } from 'shared-ui';

// Merge Tailwind classes
const className = cn('base-class', condition && 'conditional-class');

// Get nested object property
const userName = get(user, 'profile.name'); // Safe property access

// Check if value exists
if (hasValue(data)) {
  // Handle non-empty value
}
```

### Using Hooks

```tsx
import { useIsMobile } from 'shared-ui';

function MyComponent() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

### Using RHF Components

```tsx
'use client'; // Required for RHF components

import { useForm } from 'react-hook-form';
import { RHFInput, RHFTextarea, RHFCombobox, Form } from 'shared-ui/rhf';

function MyForm() {
  const { control, register } = useForm({
    defaultValues: {
      email: '',
      message: '',
      country: '',
    },
  });

  const options = [
    { id: 1, name: 'Vietnam' },
    { id: 2, name: 'USA' },
  ];

  return (
    <Form control={control}>
      <RHFInput
        control={control}
        register={register}
        name="email"
        label="Email"
        type="email"
        required
      />

      <RHFTextarea control={control} register={register} name="message" label="Message" required />

      <RHFCombobox control={control} name="country" options={options} label="Country" required />
    </Form>
  );
}
```

**Note**: If using `RHFEditor`, make sure to install `react-quill-new`:

```bash
npm install react-quill-new
```

### Using Toast Notifications

```tsx
'use client'; // Required for Toaster

import { Toaster, toast } from 'shared-ui';

function App() {
  return (
    <>
      <Toaster />
      <button onClick={() => toast.success('Success!')}>Show Toast</button>
    </>
  );
}
```

### Using Client Components

#### Option 1: Direct Import (Recommended for Client Components)

```tsx
'use client'; // Required

import { DatePicker, Carousel, Chart, Sidebar } from 'shared-ui/client';

function MyPage() {
  return (
    <div>
      <DatePicker value={new Date()} onChange={() => {}} />
      <Carousel>{/* Carousel content */}</Carousel>

      <Chart config={chartConfig} data={data}>
        {/* Chart content */}
      </Chart>
    </div>
  );
}
```

#### Option 2: Dynamic Import (No wrapper needed - Use in Server Components)

```tsx
// app/page.tsx (Server Component - no 'use client' needed!)
import dynamic from 'next/dynamic';

// Dynamic import với ssr: false - không cần wrapper!
const DatePicker = dynamic(
  () => import('shared-ui/client').then((mod) => ({ default: mod.DatePicker })),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  },
);

export default function Page() {
  return <DatePicker value={new Date()} onChange={() => {}} />;
}
```

**Lưu ý**: Dynamic import chỉ hoạt động với Next.js. Với Vite hoặc Create React App, bạn vẫn cần thêm `'use client'` vào file của bạn.

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
- **RHFEditor** - Rich text editor with react-hook-form integration (requires `react-quill-new`)
- **RHFNumberInput** - Number input with react-hook-form integration
- **RHFTimePicker** - Time picker with react-hook-form integration
- **RHFCheckboxGroup** - Checkbox group with react-hook-form integration
- **RHFMultiSelect** - Multi-select with react-hook-form integration
- **RHFUpload** - File upload with react-hook-form integration
- **RHFFileUpload** - File upload component with react-hook-form integration

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
│   │   ├── ui/          # All shadcn/ui components
│   │   └── rhf/         # React Hook Form components
│   ├── lib/
│   │   └── utils.ts     # Utility functions (cn)
│   ├── hooks/           # Custom hooks
│   ├── index-core.ts    # Core components (server-safe)
│   ├── index-client.ts  # Client components (with createContext)
│   └── index-rhf.ts     # RHF components
├── dist/                # Build output
│   ├── index-core.mjs   # Core bundle
│   ├── index-client.mjs # Client bundle
│   ├── index-rhf.mjs    # RHF bundle
│   └── style.css        # Styles
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

1. **Import Styles First** (Before your global.css to allow override)

   ```tsx
   // In your root layout or _app.tsx (Next.js) / main.tsx (Vite)
   // Import shared-ui styles BEFORE your global.css to allow override
   import 'shared-ui/styles.css';
   import './globals.css'; // Your custom styles - can override shared-ui
   ```

   **Override CSS Variables:**

   ```css
   /* In your globals.css or global.css */
   :root {
     /* Override shared-ui CSS variables */
     --primary: 222.2 47.4% 11.2%;
     --background: 0 0% 100%;
     /* Your custom overrides will take precedence */
   }
   ```

2. **Use Correct Entry Points**

   ```tsx
   // ✅ Server Components (Next.js)
   import { Button, Input, Card } from 'shared-ui';

   // ✅ Client Components with Context
   ('use client');
   import { Carousel, Chart } from 'shared-ui/client';

   // ✅ React Hook Form Components
   ('use client');
   import { RHFInput, Form } from 'shared-ui/rhf';
   ```

3. **Tree-shaking**
   - Import only what you need to keep bundle size small

   ```tsx
   // ✅ Good - Tree-shakeable
   import { Button, Input } from 'shared-ui';

   // ❌ Avoid - Imports everything
   import * as SharedUI from 'shared-ui';
   ```

4. **Using RHF Components**

   ```tsx
   'use client'; // Required
   import { useForm } from 'react-hook-form';
   import { RHFInput, RHFTextarea, Form } from 'shared-ui/rhf';

   function MyForm() {
     const { control, register } = useForm();

     return (
       <Form control={control}>
         <RHFInput control={control} register={register} name="email" label="Email" required />
       </Form>
     );
   }
   ```

   **Note**: If using `RHFEditor`, install `react-quill-new`:

   ```bash
   npm install react-quill-new
   ```

5. **Using Date Pickers**

   ```tsx
   import { RHFDatePicker } from 'shared-ui';
   import { format } from 'date-fns'; // date-fns is peer dependency

   // Make sure react-day-picker is installed
   ```

6. **Component Props**
   - All `className` props use `ComponentProps['className']` for type safety
   - Always pass `id` prop when using `label` to ensure proper accessibility

7. **Error Handling**
   - RHF components automatically display errors from react-hook-form
   - Base components (Input, Textarea, etc.) accept `error` prop directly

8. **Accessibility**
   - All components follow ARIA guidelines
   - Labels are properly linked to inputs via `htmlFor` and `id`
   - Error messages are announced to screen readers

9. **Available Utilities**
   - **Core**: `cn()`, `get()`, `hasValue()`, `toast`
   - **Formatting**: `formatCurrency()`, `formatDate()`, `formatPhoneNumber()`, `formatFileSize()`, `truncate()`
   - **Validation**: `validateEmail()`, `validatePhone()`, `validateURL()`, `validateVietnamesePhone()`
   - **Data**: `deepMerge()`, `pick()`, `omit()`, `groupBy()`, `sortBy()`
   - **String**: `slugify()`, `camelCase()`, `kebabCase()`, `capitalize()`
   - **Performance**: `lazyLoad()`, `calculateVirtualScroll()`

10. **Available Hooks**
    - **Media**: `useIsMobile()`, `useIsTablet()`, `useMediaQuery()`, `useBreakpoint()`, `useWindowSize()`
    - **Form**: `useDebounce()`, `useDebouncedCallback()`, `useThrottle()`
    - **Storage**: `useLocalStorage()`, `useSessionStorage()`
    - **UI**: `useClickOutside()`, `useCopyToClipboard()`, `useToggle()`, `usePrevious()`
    - **Performance**: `useMemoizedCallback()`
    - **Accessibility**: `useFocusTrap()`, `useKeyboardNavigation()`, `useAriaLabel()`
    - **Theme**: `useTheme()` (requires ThemeProvider)
    - **i18n**: `useTranslation()` (requires I18nProvider)

11. **Available Components**
    - **Layout**: `Container`, `Stack`, `Grid`, `Divider`
    - **Feedback**: `LoadingButton`, `ConfirmDialog`, `DeleteConfirmDialog`
    - **Data Display**: `DataTable`, `EmptyState`, `LoadingState`, `ErrorBoundary`, `StatusBadge`
    - **RHF Components**: `RHFInput`, `RHFTextarea`, `RHFNumberInput`, `RHFCheckboxGroup`, `RHFMultiSelect`, `RHFUpload`, `RHFTimePicker`, `RHFDatePicker`, `RHFDateRangePicker`, `RHFCombobox`, `RHFSwitch`, `RHFRadioGroup`, `RHFFormattedInput`

12. **Available Constants**
    - `BREAKPOINTS` - Responsive breakpoints (sm, md, lg, xl, 2xl)
    - `REGEX` - Common regex patterns (email, phone, URL, etc.)
    - `DATE_FORMATS` - Predefined date format strings

13. **Available Types**
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
import { DataTable, type ColumnDef } from 'shared-ui';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

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
];

const data: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

function UsersTable() {
  return <DataTable data={data} columns={columns} />;
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
import { Badge } from 'shared-ui';

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.original.role;
      return <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>{role}</Badge>;
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
];
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
    console.log('Clicked row:', row);
    // Navigate to detail page, open modal, etc.
  }}
  rowClassName={(row) => {
    // Dynamic row styling
    return row.role === 'Admin' ? 'bg-muted' : '';
  }}
/>
```

### 7. With Custom Filter Function

Implement custom global filter logic:

```tsx
import type { FilterFn } from '@tanstack/react-table';

const customFilter: FilterFn<User> = (row, columnId, filterValue) => {
  // Custom filtering logic
  const searchValue = String(filterValue).toLowerCase();
  return (
    row.original.name.toLowerCase().includes(searchValue) ||
    row.original.email.toLowerCase().includes(searchValue)
  );
};

<DataTable data={data} columns={columns} searchable globalFilterFn={customFilter} />;
```

### 8. Complete Example with All Features

```tsx
import { DataTable, type ColumnDef, Badge, Button } from 'shared-ui';
import { useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
};

function UsersTable() {
  const [users] = useState<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  ]);

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
  ];

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
  );
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
import { ColumnDef } from '@tanstack/react-table';

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
];
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
