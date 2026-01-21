````skill
---
name: shared-ui-components
description: Guidelines for AI agents to use @xizot/shared-ui components when building React applications. This skill provides component selection, import patterns, and best practices for UI implementation. Triggers on tasks involving UI components, forms, layouts, data display, or any React component development.
license: MIT
metadata:
  author: xizot
  version: "1.0.0"
---

# Shared UI Components Guidelines

This skill helps AI agents effectively use @xizot/shared-ui components when building React applications. The library provides 70+ pre-built, accessible, and customizable components based on Radix UI and Tailwind CSS v4.

## When to Apply

Reference these guidelines when:
- Building new React components or pages
- Implementing forms, data tables, dialogs, or navigation
- Creating layouts with sidebars, cards, or grids
- Adding user feedback (toasts, alerts, confirmations)
- Implementing data input (selects, comboboxes, date pickers)

## Quick Start

### Installation
```bash
npx @xizot/shared-ui init
```

### Import Pattern
Always import from `@/components/ui/[component-name]`:
```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
```

## Component Categories

### 1. Form Components (CRITICAL)

| Component | Use Case | Key Props |
|-----------|----------|-----------|
| `Input` | Text input | `label`, `error`, `required`, `size` |
| `Textarea` | Multi-line text | `label`, `error`, `required`, `size` |
| `Select` | Single selection | `label`, `error`, `required`, `size` |
| `Combobox` | Searchable select | `options`, `value`, `onChange`, `showSearch` |
| `MultipleCombobox` | Multi-select | `options`, `value`, `onChange`, `limitTags` |
| `Checkbox` | Boolean input | `size`, `checked`, `onCheckedChange` |
| `RadioGroup` | Exclusive options | `value`, `onValueChange`, `size` |
| `Switch` | Toggle | `size`, `checked`, `onCheckedChange` |
| `DatePicker` | Date selection | `value`, `onChange`, `showTime`, `mode` |
| `DateRangePicker` | Date range | `value`, `onChange`, `presets` |
| `TimePicker` | Time selection | `value`, `onChange`, `showSeconds` |
| `FileUpload` | File input | `multiple`, `accept`, `maxSize`, `maxFiles` |
| `Editor` | Rich text | `value`, `onChange`, `modules`, `formats` |

**Form Example:**
```tsx
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function MyForm() {
  return (
    <form className="space-y-4">
      <Input 
        label="Full Name" 
        required 
        error={errors?.name?.message}
      />
      <Select>
        <SelectTrigger label="Country" required>
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### 2. Layout Components (HIGH)

| Component | Use Case | Key Props |
|-----------|----------|-----------|
| `Card` | Content container | Children: `CardHeader`, `CardContent`, `CardFooter` |
| `Container` | Page wrapper | `maxWidth`: 'sm', 'md', 'lg', 'xl', '2xl', 'full' |
| `Grid` | Grid layout | `cols`, `gap`, `responsive` |
| `Stack` | Flex layout | `direction`, `spacing`, `align`, `justify` |
| `Sidebar` | App navigation | `side`, `variant`, `collapsible` |
| `Tabs` | Tabbed content | Children: `TabsList`, `TabsTrigger`, `TabsContent` |
| `Accordion` | Collapsible sections | Children: `AccordionItem`, `AccordionTrigger`, `AccordionContent` |
| `Resizable` | Resizable panels | Children: `ResizablePanel`, `ResizableHandle` |

**Layout Example:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Grid } from '@/components/ui/grid';

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Grid cols={3} gap={4} responsive={{ sm: 1, md: 2, lg: 3 }}>
        <Card>
          <CardHeader>
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>$12,345</CardContent>
        </Card>
        {/* More cards */}
      </Grid>
    </Container>
  );
}
```

### 3. Data Display Components (HIGH)

| Component | Use Case | Key Props |
|-----------|----------|-----------|
| `DataTable` | Data grid | `data`, `columns`, `pagination`, `paginationOptions` |
| `Table` | Simple table | Children: `TableHeader`, `TableBody`, `TableRow`, `TableCell` |
| `Badge` | Labels | `variant`: 'default', 'secondary', 'destructive', 'outline' |
| `StatusBadge` | Status labels | `status`: 'success', 'error', 'warning', 'info', 'pending' |
| `Avatar` | User images | Children: `AvatarImage`, `AvatarFallback` |
| `Chart` | Data visualization | `config`, `children` (Recharts components) |
| `Carousel` | Image slider | Children: `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` |
| `ImagePreview` | Image gallery | `images`, `columns`, `onRemove`, `onClick` |
| `ImageLightbox` | Full-screen view | `images`, `open`, `onOpenChange`, `initialIndex` |

**DataTable Example:**
```tsx
import { DataTable, type ColumnDef } from '@/components/ui/data-table';

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'status', header: 'Status' },
];

function UserList() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  
  return (
    <DataTable
      data={users}
      columns={columns}
      pagination={pagination}
      paginationOptions={{
        onPaginationChange: setPagination,
        rowCount: totalCount,
      }}
      totalPages={totalPages}
    />
  );
}
```

### 4. Feedback Components (MEDIUM-HIGH)

| Component | Use Case | Key Props |
|-----------|----------|-----------|
| `Dialog` | Modal dialog | `open`, `onOpenChange`, Children: `DialogContent`, `DialogHeader`, etc. |
| `AlertDialog` | Confirmation | Children: `AlertDialogTrigger`, `AlertDialogContent`, etc. |
| `ConfirmDialog` | Simple confirm | `title`, `description`, `onConfirm`, `variant` |
| `DeleteConfirmDialog` | Delete confirm | `itemName`, `onConfirm`, `loading` |
| `Sheet` | Side panel | `side`: 'top', 'right', 'bottom', 'left' |
| `Drawer` | Mobile drawer | `direction`: 'top', 'bottom', 'left', 'right' |
| `Toaster` | Toast container | Use with `sonner` toast() |
| `Alert` | Inline message | `variant`: 'default', 'destructive' |
| `Tooltip` | Hover info | Children: `TooltipTrigger`, `TooltipContent` |
| `Popover` | Click info | Children: `PopoverTrigger`, `PopoverContent` |

**Dialog Example:**
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function EditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        {/* Form content */}
      </DialogContent>
    </Dialog>
  );
}
```

### 5. Navigation Components (MEDIUM)

| Component | Use Case | Key Props |
|-----------|----------|-----------|
| `Breadcrumb` | Page path | Children: `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink` |
| `NavigationMenu` | Header nav | Children: `NavigationMenuList`, `NavigationMenuItem`, etc. |
| `DropdownMenu` | Menu dropdown | Children: `DropdownMenuTrigger`, `DropdownMenuContent`, etc. |
| `ContextMenu` | Right-click | Children: `ContextMenuTrigger`, `ContextMenuContent`, etc. |
| `Menubar` | App menubar | Children: `MenubarMenu`, `MenubarTrigger`, etc. |
| `Pagination` | Page nav | Use `PaginationRange` with `currentPage`, `totalPages`, `onPageChange` |

### 6. Utility Components (MEDIUM)

| Component | Use Case | Key Props |
|-----------|----------|-----------|
| `Button` | Actions | `variant`, `size`, `asChild` |
| `LoadingButton` | Async actions | `loading`, `loadingText` |
| `Spinner` | Loading indicator | `className` |
| `Skeleton` | Loading placeholder | `className` |
| `LoadingState` | Loading patterns | `count`, `variant`: 'default', 'card', 'list', 'table' |
| `EmptyState` | No data | `icon`, `title`, `description`, `action` |
| `ErrorBoundary` | Error handling | `fallback`, `onError` |
| `Separator` | Divider | `orientation`: 'horizontal', 'vertical' |
| `Divider` | Divider with label | `label`, `labelPosition` |
| `ScrollArea` | Custom scrollbar | `className` |
| `AspectRatio` | Fixed ratio | `ratio` |
| `Collapsible` | Expandable | `open`, `onOpenChange` |

## Size System

All form components support consistent sizing:

| Size | Height | Text | Icon |
|------|--------|------|------|
| `xxs` | 24px | 10px | 12px |
| `xs` | 28px | 11px | 14px |
| `sm` | 32px | 12px | 16px |
| `md` | 36px (default) | 14px | 18px |
| `lg` | 40px | 14px | 20px |
| `xl` | 44px | 14px | 22px |
| `xxl` | 52px | 16px | 24px |

```tsx
<Input size="sm" />
<Button size="lg" />
<Select size="md" />
```

## Button Variants

```tsx
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

## Icon Buttons

```tsx
<Button size="icon-sm"><PlusIcon /></Button>
<Button size="icon"><EditIcon /></Button>
<Button size="icon-lg"><TrashIcon /></Button>
```

## Form with React Hook Form

The library provides pre-built RHF (React Hook Form) components that handle form state, validation, and error display automatically.

### Available RHF Components

| Component | Base Component | Use Case |
|-----------|----------------|----------|
| `RHFInput` | Input | Text input with validation |
| `RHFTextArea` | Textarea | Multi-line text |
| `RHFNumberInput` | Input | Number input |
| `RHFFormattedInput` | Input | Formatted input (phone, currency, etc.) |
| `RHFCombobox` | Combobox | Searchable select |
| `RHFMultiSelect` | MultipleCombobox | Multi-select |
| `RHFCheckboxGroup` | Checkbox | Multiple checkboxes |
| `RHFRadioGroup` | RadioGroup | Radio options |
| `RHFSwitch` | Switch | Toggle switch |
| `RHFDatePicker` | DatePicker | Date selection |
| `RHFDateRangePicker` | DateRangePicker | Date range |
| `RHFTimePicker` | TimePicker | Time selection |
| `RHFFileUpload` | FileUpload | File upload |
| `RHFUpload` | Upload | General upload |
| `RHFEditor` | Editor | Rich text editor |
| `RHFErrorMessage` | - | Display field error |

### Basic Form Example

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RHFInput, RHFTextArea, RHFCombobox } from '@/components/rhf';
import { Button } from '@/components/ui/button';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  country: z.string().min(1, 'Country is required'),
  bio: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function MyForm() {
  const { control, register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <RHFInput
        control={control}
        register={register}
        name="email"
        label="Email"
        required
        placeholder="Enter your email"
      />
      <RHFInput
        control={control}
        register={register}
        name="name"
        label="Full Name"
        required
      />
      <RHFCombobox
        control={control}
        name="country"
        label="Country"
        required
        options={[
          { label: 'United States', value: 'us' },
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Vietnam', value: 'vn' },
        ]}
      />
      <RHFTextArea
        control={control}
        register={register}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Toast Notifications

```tsx
import { toast } from 'sonner';

// Success
toast.success('Profile updated successfully');

// Error
toast.error('Failed to save changes');

// Warning
toast.warning('Your session will expire soon');

// Info
toast.info('New features available');

// Promise
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed to save',
});
```

## Theme Tokens

The library uses CSS custom properties with OKLCH color space:

```css
--background, --foreground
--card, --card-foreground
--popover, --popover-foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--destructive, --destructive-foreground
--border, --input, --ring
--chart-1 through --chart-5
--sidebar, --sidebar-foreground, --sidebar-primary, --sidebar-accent, --sidebar-border, --sidebar-ring
```

## Best Practices

1. **Always use provided components** - Don't create custom components for existing functionality
2. **Use semantic size props** - Use 'sm', 'md', 'lg' instead of custom styling
3. **Leverage compound components** - Use children components (e.g., CardHeader, CardContent) for structure
4. **Include error handling** - Always pass `error` prop to form components
5. **Use loading states** - Show LoadingButton, Skeleton, or LoadingState during async operations
6. **Prefer controlled components** - Use `value` and `onChange` for form state
7. **Add accessibility labels** - Use `label` prop or aria attributes
8. **Use asChild for custom triggers** - Pass `asChild` to use custom elements as triggers

## Anti-Patterns to Avoid

```tsx
// ❌ Don't: Create custom button styles
<button className="bg-blue-500 px-4 py-2 rounded">Click</button>

// ✅ Do: Use Button component
<Button variant="default">Click</Button>

// ❌ Don't: Create custom input styling
<input className="border rounded px-3 py-2" />

// ✅ Do: Use Input component with props
<Input label="Name" error={errors.name} required />

// ❌ Don't: Create custom modal
<div className="fixed inset-0 bg-black/50">...</div>

// ✅ Do: Use Dialog component
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>...</DialogContent>
</Dialog>
```

## Component Import Reference

```tsx
// Buttons
import { Button, buttonVariants } from '@/components/ui/button';
import { LoadingButton } from '@/components/ui/loading-button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group';

// Form Inputs
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Combobox, type ComboboxOption } from '@/components/ui/combobox';
import { MultipleCombobox, type MultipleComboboxBaseOption } from '@/components/ui/multiple-combobox';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Date/Time
import { DatePicker, type DatePickerProps } from '@/components/ui/date-picker';
import { DateRangePicker, type DateRangePickerProps } from '@/components/ui/date-range-picker';
import { TimePicker, type TimeValue } from '@/components/ui/time-picker';
import { MonthPicker, type MonthPickerProps } from '@/components/ui/month-picker';
import { Calendar } from '@/components/ui/calendar';

// Layout
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Grid } from '@/components/ui/grid';
import { Stack } from '@/components/ui/stack';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// Sidebar
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

// Data Display
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter, TableCaption } from '@/components/ui/table';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { StatusBadge, type StatusType } from '@/components/ui/status-badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from '@/components/ui/chart';

// Images
import { ImagePreview, type ImagePreviewItem } from '@/components/ui/image-preview';
import { ImageLightbox, type ImageLightboxProps } from '@/components/ui/image-lightbox';
import { FileUpload, type FileUploadProps, type FileUploadFile } from '@/components/ui/file-upload';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Dialogs & Overlays
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { DeleteConfirmDialog } from '@/components/ui/delete-confirm-dialog';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from '@/components/ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Feedback
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Progress } from '@/components/ui/progress';
import { Spinner } from '@/components/ui/spinner';
import { Skeleton } from '@/components/ui/skeleton';
import { LoadingState } from '@/components/ui/loading-state';
import { EmptyState } from '@/components/ui/empty-state';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { ErrorBoundary, type ErrorBoundaryProps } from '@/components/ui/error-boundary';

// Navigation
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '@/components/ui/breadcrumb';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu';
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationRange } from '@/components/ui/pagination';

// Form Structure
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from '@/components/ui/form';
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';

// React Hook Form Components (RHF)
import { 
  RHFInput, 
  RHFTextArea, 
  RHFNumberInput,
  RHFFormattedInput,
  RHFCombobox, 
  RHFMultiSelect,
  RHFCheckboxGroup,
  RHFRadioGroup,
  RHFSwitch,
  RHFDatePicker, 
  RHFDateRangePicker,
  RHFTimePicker,
  RHFFileUpload,
  RHFUpload,
  RHFEditor,
  RHFErrorMessage,
} from '@/components/rhf';

// Utility
import { Separator } from '@/components/ui/separator';
import { Divider } from '@/components/ui/divider';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Toggle, toggleVariants } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Slider } from '@/components/ui/slider';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';

// Items/Lists
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from '@/components/ui/item';

// Rich Text Editor
import { Editor, type EditorProps } from '@/components/ui/editor';
```

## File Structure

```
src/
├── components/
│   ├── ui/           # All shared-ui components
│   └── rhf/          # React Hook Form wrapper components
├── constants/
│   └── form-sizes.ts # Size constants
├── hooks/
│   └── use-mobile.ts # Mobile detection hook
└── lib/
    ├── utils.ts      # cn() utility function
    └── format.ts     # Formatting utilities
```
````
