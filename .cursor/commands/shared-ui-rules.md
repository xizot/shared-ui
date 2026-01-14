# Shared UI Library - Usage Rules & Guidelines

## Overview

This document provides comprehensive rules and guidelines for using the **shared-ui** component library. The library is built with shadcn/ui, TypeScript, and Tailwind CSS, providing 75+ components, hooks, utilities, and React Hook Form integrations.

## Core Principles

1. **Always use correct entry points** - Core, Client, or RHF based on component type
2. **Import styles first** - Always import `shared-ui/styles.css` before your global styles
3. **Tree-shake imports** - Import only what you need, avoid `import *`
4. **Type safety** - Leverage TypeScript types for all components
5. **Server component compatibility** - Use core entry point for Next.js server components
6. **Accessibility first** - All components follow ARIA guidelines

## Entry Points

### 1. Core Components (`shared-ui`)

**Use for:** Server Components (Next.js App Router), basic UI components without context

```tsx
// ✅ CORRECT - Server Components
import { Button, Input, Card, Label, Badge, Avatar, Skeleton } from 'shared-ui'

// ✅ CORRECT - Tree-shakeable imports
import { Button } from 'shared-ui'
import { Card, CardHeader, CardTitle, CardContent } from 'shared-ui'

// ❌ WRONG - Don't use client components here
import { Carousel, Chart } from 'shared-ui' // These need 'shared-ui/client'
```

**Available Core Components:**
- Layout: `Container`, `Stack`, `Grid`, `Divider`, `Separator`
- Basic UI: `Button`, `Input`, `Textarea`, `Label`, `Card`, `Badge`, `Avatar`
- Feedback: `Alert`, `Skeleton`, `Spinner`
- Data: `Table`, `Empty`, `Kbd`

### 2. Client Components (`shared-ui/client`)

**Use for:** Components requiring `createContext`, client-side interactivity

```tsx
// ✅ CORRECT - Client Components
'use client'
import { Carousel, Chart, Sidebar, ToggleGroup, DatePicker } from 'shared-ui/client'

// ✅ CORRECT - Dynamic import for Server Components (Next.js)
import dynamic from 'next/dynamic'
const DatePicker = dynamic(() => import('shared-ui/client').then(mod => ({ default: mod.DatePicker })), {
  ssr: false
})

// ❌ WRONG - Don't use in Server Components without dynamic import
import { DatePicker } from 'shared-ui/client' // Needs 'use client' or dynamic import
```

**Available Client Components:**
- Forms: `Combobox`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`
- Overlays: `Dialog`, `Drawer`, `Popover`, `Tooltip`, `DropdownMenu`, `Sheet`
- Data: `DataTable`, `Carousel`, `Chart`, `Calendar`
- Navigation: `Tabs`, `Accordion`, `Breadcrumb`, `Pagination`, `Sidebar`
- Advanced: `Command`, `Resizable`, `ScrollArea`, `Collapsible`

### 3. RHF Components (`shared-ui/rhf`)

**Use for:** React Hook Form integration

```tsx
// ✅ CORRECT - RHF Components
'use client'
import { useForm } from 'react-hook-form'
import { RHFInput, RHFTextarea, RHFCombobox, Form } from 'shared-ui/rhf'

function MyForm() {
  const { control, register } = useForm()
  
  return (
    <Form control={control}>
      <RHFInput
        control={control}
        register={register}
        name="email"
        label="Email"
        required
      />
    </Form>
  )
}

// ❌ WRONG - Don't use RHF components without 'use client'
// ❌ WRONG - Don't use RHF components without react-hook-form
```

**Available RHF Components:**
- `RHFInput`, `RHFTextarea`, `RHFNumberInput`
- `RHFCombobox`, `RHFMultiSelect`, `RHFSelect`
- `RHFCheckboxGroup`, `RHFRadioGroup`, `RHFSwitch`
- `RHFDatePicker`, `RHFDateRangePicker`, `RHFTimePicker`
- `RHFFormattedInput` (integer, decimal, currency)
- `RHFEditor` (requires `react-quill-new`)
- `RHFUpload`, `RHFFileUpload`

## Installation & Setup Rules

### 1. Install Library

```bash
npm install git+https://github.com/xizot/share-ui.git
# or
yarn add git+https://github.com/xizot/share-ui.git
# or
pnpm add git+https://github.com/xizot/share-ui.git
```

### 2. Install Peer Dependencies

**Always Required:**
```bash
npm install react react-dom
```

**Only if using RHF Components:**
```bash
npm install react-hook-form
```

**Only if using Date Pickers:**
```bash
npm install date-fns react-day-picker
```

**Only if using DataTable:**
```bash
npm install @tanstack/react-table
```

**Only if using RHFEditor:**
```bash
npm install react-quill-new
```

### 3. Import Styles (CRITICAL - Do this first!)

```tsx
// ✅ CORRECT - Import BEFORE your global styles
// In Next.js: app/layout.tsx or pages/_app.tsx
// In Vite: main.tsx
import 'shared-ui/styles.css'
import './globals.css' // Your custom styles can override shared-ui

// ❌ WRONG - Don't forget to import styles
// ❌ WRONG - Don't import after your global styles (overrides won't work)
```

## Component Usage Rules

### Button Component

```tsx
// ✅ CORRECT
import { Button } from 'shared-ui'

<Button variant="default" size="default">Click me</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="outline" size="lg" disabled>Disabled</Button>

// Variants: default, destructive, outline, secondary, ghost, link
// Sizes: default, sm, lg, icon
```

### Form Components

```tsx
// ✅ CORRECT - Basic Input with label and error
import { Input, Label } from 'shared-ui'

<Input
  id="email"
  type="email"
  placeholder="Enter email"
  error="Email is required"
/>
<Label htmlFor="email">Email</Label>

// ✅ CORRECT - Always pair Label with Input using htmlFor and id
```

### Card Component

```tsx
// ✅ CORRECT
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'shared-ui'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    Footer actions
  </CardFooter>
</Card>
```

### DataTable Component

```tsx
// ✅ CORRECT - With TanStack Table
import { DataTable, type ColumnDef } from 'shared-ui'

type User = { id: string; name: string; email: string }

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name', enableSorting: true },
  { accessorKey: 'email', header: 'Email' }
]

<DataTable
  data={users}
  columns={columns}
  searchable
  searchPlaceholder="Search users..."
  pagination={{ pageSize: 10 }}
/>
```

### Dialog Component

```tsx
// ✅ CORRECT - Client Component
'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from 'shared-ui/client'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    Content here
  </DialogContent>
</Dialog>
```

## React Hook Form Integration Rules

### Basic RHF Form

```tsx
// ✅ CORRECT
'use client'
import { useForm } from 'react-hook-form'
import { RHFInput, RHFTextarea, Form } from 'shared-ui/rhf'

function MyForm() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: { email: '', message: '' }
  })
  
  return (
    <Form control={control} onSubmit={handleSubmit(onSubmit)}>
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
    </Form>
  )
}
```

### RHF with Combobox

```tsx
// ✅ CORRECT
import { RHFCombobox } from 'shared-ui/rhf'

const options = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' }
]

<RHFCombobox
  control={control}
  name="country"
  options={options}
  label="Country"
  required
/>
```

### RHF Date Picker

```tsx
// ✅ CORRECT - Requires date-fns and react-day-picker
import { RHFDatePicker } from 'shared-ui/rhf'

<RHFDatePicker
  control={control}
  name="birthday"
  label="Birthday"
  required
/>
```

## Hooks Usage Rules

### Media Query Hooks

```tsx
// ✅ CORRECT
import { useIsMobile, useIsTablet, useBreakpoint, useWindowSize } from 'shared-ui'

function MyComponent() {
  const isMobile = useIsMobile()
  const breakpoint = useBreakpoint()
  const { width, height } = useWindowSize()
  
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

### Storage Hooks

```tsx
// ✅ CORRECT
import { useLocalStorage, useSessionStorage } from 'shared-ui'

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'default')
  const [session, setSession] = useSessionStorage('session', null)
  
  return <button onClick={() => setValue('new')}>Update</button>
}
```

### Utility Hooks

```tsx
// ✅ CORRECT
import { useDebounce, useToggle, useClickOutside, useCopyToClipboard } from 'shared-ui'

function MyComponent() {
  const [isOpen, toggle] = useToggle(false)
  const debouncedValue = useDebounce(inputValue, 500)
  const { copy, copied } = useCopyToClipboard()
  
  const ref = useRef(null)
  useClickOutside(ref, () => setIsOpen(false))
}
```

## Utilities Usage Rules

### Class Name Utility

```tsx
// ✅ CORRECT - Always use cn() for conditional classes
import { cn } from 'shared-ui'

<div className={cn(
  "base-class",
  condition && "conditional-class",
  anotherCondition ? "class-a" : "class-b"
)} />

// ❌ WRONG - Don't manually concatenate classes
<div className={`base-class ${condition ? 'conditional' : ''}`} />
```

### Format Utilities

```tsx
// ✅ CORRECT
import { formatCurrency, formatDate, formatPhoneNumber, formatFileSize, truncate } from 'shared-ui'

formatCurrency(1000000, 'vi-VN', 'VND') // '1.000.000 ₫'
formatDate(new Date(), 'short') // '01/01/2024'
formatPhoneNumber('0123456789') // '0123 456 789'
formatFileSize(1024) // '1 KB'
truncate('Long text', 10) // 'Long text...'
```

### Validation Utilities

```tsx
// ✅ CORRECT
import { validateEmail, validatePhone, validateURL, validateVietnamesePhone } from 'shared-ui'

validateEmail('test@example.com') // true
validatePhone('0123456789') // true
validateURL('https://example.com') // true
validateVietnamesePhone('0123456789') // true
```

### Object Utilities

```tsx
// ✅ CORRECT
import { get, hasValue } from 'shared-ui'

const userName = get(user, 'profile.name') // Safe property access
if (hasValue(data)) {
  // Handle non-empty value
}
```

## Toast Notifications Rules

```tsx
// ✅ CORRECT
'use client'
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

// Toast methods: toast.success(), toast.error(), toast.info(), toast.warning()
```

## Styling & Theming Rules

### CSS Variables Override

```css
/* ✅ CORRECT - Override in your globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

### Tailwind Class Override

```tsx
// ✅ CORRECT - Override with className prop
<Button className="bg-custom-color hover:bg-custom-hover">
  Custom Button
</Button>

// ✅ CORRECT - Use cn() utility for conditional classes
<Button className={cn("base-class", variant === 'custom' && "custom-class")}>
  Button
</Button>
```

## TypeScript Rules

### Type Imports

```tsx
// ✅ CORRECT - Import types explicitly
import type { ColumnDef } from 'shared-ui'
import type { DatePickerProps, ChartConfig } from 'shared-ui/client'

// ✅ CORRECT - Use component prop types
import { Button } from 'shared-ui'
import type { ComponentProps } from 'react'
type ButtonProps = ComponentProps<typeof Button>
```

### Type Safety

```tsx
// ✅ CORRECT - Type your form data
import { useForm } from 'react-hook-form'
import { RHFInput } from 'shared-ui/rhf'

type FormData = {
  email: string
  age: number
}

const { control, register } = useForm<FormData>()
```

## Common Patterns

### Loading States

```tsx
// ✅ CORRECT
import { Skeleton, Spinner, LoadingState } from 'shared-ui'

{isLoading ? (
  <Skeleton className="h-10 w-full" />
) : (
  <Content />
)}

{isLoading && <Spinner />}

<LoadingState message="Loading data..." />
```

### Empty States

```tsx
// ✅ CORRECT
import { Empty, EmptyState } from 'shared-ui'

{data.length === 0 ? (
  <EmptyState
    title="No data"
    description="There is no data to display"
    action={<Button>Add Item</Button>}
  />
) : (
  <DataList data={data} />
)}
```

### Error Handling

```tsx
// ✅ CORRECT
import { ErrorBoundary, Alert } from 'shared-ui'

<ErrorBoundary fallback={<ErrorFallback />}>
  <YourComponent />
</ErrorBoundary>

{error && (
  <Alert variant="destructive">
    <AlertDescription>{error.message}</AlertDescription>
  </Alert>
)}
```

## Anti-Patterns (What NOT to Do)

### ❌ Don't Mix Entry Points

```tsx
// ❌ WRONG
import { Button } from 'shared-ui'
import { Carousel } from 'shared-ui' // Should be 'shared-ui/client'

// ✅ CORRECT
import { Button } from 'shared-ui'
import { Carousel } from 'shared-ui/client'
```

### ❌ Don't Forget 'use client'

```tsx
// ❌ WRONG - Using client component without directive
import { DatePicker } from 'shared-ui/client'

// ✅ CORRECT
'use client'
import { DatePicker } from 'shared-ui/client'
```

### ❌ Don't Import Everything

```tsx
// ❌ WRONG - Imports everything, no tree-shaking
import * as SharedUI from 'shared-ui'

// ✅ CORRECT - Tree-shakeable
import { Button, Input, Card } from 'shared-ui'
```

### ❌ Don't Forget Styles Import

```tsx
// ❌ WRONG - Missing styles import
import { Button } from 'shared-ui'

// ✅ CORRECT
import 'shared-ui/styles.css'
import { Button } from 'shared-ui'
```

### ❌ Don't Use RHF Without react-hook-form

```tsx
// ❌ WRONG - Missing react-hook-form
import { RHFInput } from 'shared-ui/rhf'

// ✅ CORRECT
import { useForm } from 'react-hook-form'
import { RHFInput } from 'shared-ui/rhf'
```

## Best Practices Summary

1. ✅ **Always import styles first**: `import 'shared-ui/styles.css'`
2. ✅ **Use correct entry points**: `shared-ui`, `shared-ui/client`, `shared-ui/rhf`
3. ✅ **Add 'use client' for client components**
4. ✅ **Use tree-shakeable imports**: Import specific components
5. ✅ **Leverage TypeScript types**: Use type imports and component prop types
6. ✅ **Use cn() utility**: For conditional class names
7. ✅ **Pair Label with Input**: Always use `htmlFor` and `id`
8. ✅ **Handle loading/error states**: Use Skeleton, Spinner, EmptyState, ErrorBoundary
9. ✅ **Follow accessibility guidelines**: All components are ARIA compliant
10. ✅ **Install peer dependencies**: Only install what you need

## Component Categories Quick Reference

### Layout & Structure
- `Container`, `Stack`, `Grid`, `Divider`, `Separator`, `Resizable`, `ScrollArea`, `Sidebar`

### Forms & Inputs
- Core: `Input`, `Textarea`, `Label`, `Button`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`
- Client: `Combobox`, `Select`, `InputGroup`, `InputOTP`
- RHF: All `RHF*` components

### Navigation
- `Breadcrumb`, `Tabs`, `Accordion`, `Pagination`, `NavigationMenu`, `Menubar`

### Overlays
- `Dialog`, `Drawer`, `Popover`, `Tooltip`, `DropdownMenu`, `Sheet`, `HoverCard`, `ContextMenu`, `AlertDialog`

### Data Display
- `Table`, `DataTable`, `Card`, `Badge`, `Avatar`, `Calendar`, `Chart`, `Carousel`, `Empty`, `EmptyState`

### Feedback
- `Alert`, `Toast`, `Progress`, `Skeleton`, `Spinner`, `LoadingState`, `ErrorBoundary`

### Advanced
- `Command`, `Collapsible`, `Toggle`, `ToggleGroup`, `Editor`, `FileUpload`, `ImagePreview`, `ImageLightbox`

## Constants & Types

### Breakpoints
```tsx
import { BREAKPOINTS } from 'shared-ui'
// { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' }
```

### Date Formats
```tsx
import { DATE_FORMATS } from 'shared-ui'
// { short: 'dd/MM/yyyy', long: 'MMMM dd, yyyy', ... }
```

### Regex Patterns
```tsx
import { REGEX } from 'shared-ui'
// { EMAIL, PHONE, URL, VIETNAMESE_PHONE, ... }
```

### Types
```tsx
import type { ComboboxOption, ChartConfig, DatePickerProps } from 'shared-ui/client'
import type { ColumnDef } from '@tanstack/react-table'
```

---

**Remember**: When in doubt, check the component's TypeScript types and the README.md for detailed examples and API documentation.
