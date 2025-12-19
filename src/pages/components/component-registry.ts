import {
  AlertCircle,
  Box,
  Calendar,
  CheckSquare,
  ChevronDown,
  Circle,
  FileText,
  Grid3x3,
  Image,
  Layout,
  List,
  Menu,
  MessageSquare,
  MousePointerClick,
  Navigation,
  PanelLeft,
  Search,
  Settings,
  Square,
  Table,
  ToggleLeft,
  Type,
  Upload,
} from 'lucide-react';

export type ComponentCategory =
  | 'Form'
  | 'Layout'
  | 'Feedback'
  | 'Data Display'
  | 'Navigation'
  | 'Overlay'
  | 'Media'
  | 'Other';

export interface ComponentMetadata {
  id: string;
  name: string;
  category: ComponentCategory;
  description: string;
  icon: typeof AlertCircle;
}

export const componentRegistry: ComponentMetadata[] = [
  // Form Components
  {
    id: 'button',
    name: 'Button',
    category: 'Form',
    description: 'Interactive button component with multiple variants',
    icon: MousePointerClick,
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Form',
    description: 'Text input field with label, error, and required support',
    icon: Square,
  },
  {
    id: 'textarea',
    name: 'Textarea',
    category: 'Form',
    description: 'Multi-line text input component',
    icon: FileText,
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Form',
    description: 'Checkbox input component',
    icon: CheckSquare,
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Form',
    description: 'Toggle switch component',
    icon: ToggleLeft,
  },
  {
    id: 'radio-group',
    name: 'Radio Group',
    category: 'Form',
    description: 'Radio button group component',
    icon: Circle,
  },
  {
    id: 'combobox',
    name: 'Combobox',
    category: 'Form',
    description: 'Searchable select/combobox component',
    icon: Search,
  },
  {
    id: 'multiple-combobox',
    name: 'Multiple Combobox',
    category: 'Form',
    description: 'Multi-select combobox with badges and checkboxes',
    icon: CheckSquare,
  },
  {
    id: 'slider',
    name: 'Slider',
    category: 'Form',
    description: 'Range slider input component',
    icon: Settings,
  },
  {
    id: 'calendar',
    name: 'Calendar',
    category: 'Form',
    description: 'Date picker calendar component',
    icon: Calendar,
  },
  {
    id: 'date-picker',
    name: 'Date Picker',
    category: 'Form',
    description: 'Date picker component with single date selection',
    icon: Calendar,
  },
  {
    id: 'date-range-picker',
    name: 'Date Range Picker',
    category: 'Form',
    description: 'Date range picker component with presets',
    icon: Calendar,
  },
  {
    id: 'input-otp',
    name: 'Input OTP',
    category: 'Form',
    description: 'One-time password input component',
    icon: Square,
  },
  {
    id: 'file-upload',
    name: 'File Upload',
    category: 'Form',
    description: 'File upload component with drag & drop, preview, and validation',
    icon: Upload,
  },
  {
    id: 'editor',
    name: 'Editor',
    category: 'Form',
    description: 'Rich text editor component with WYSIWYG editing',
    icon: FileText,
  },
  {
    id: 'form',
    name: 'Form',
    category: 'Form',
    description: 'Form wrapper with validation support',
    icon: FileText,
  },
  // Layout Components
  {
    id: 'card',
    name: 'Card',
    category: 'Layout',
    description: 'Card container component',
    icon: Box,
  },
  {
    id: 'container',
    name: 'Container',
    category: 'Layout',
    description: 'Responsive container component',
    icon: Layout,
  },
  {
    id: 'stack',
    name: 'Stack',
    category: 'Layout',
    description: 'Vertical stack layout component',
    icon: List,
  },
  {
    id: 'grid',
    name: 'Grid',
    category: 'Layout',
    description: 'Grid layout component',
    icon: Grid3x3,
  },
  {
    id: 'separator',
    name: 'Separator',
    category: 'Layout',
    description: 'Visual separator component',
    icon: PanelLeft,
  },
  {
    id: 'divider',
    name: 'Divider',
    category: 'Layout',
    description: 'Divider component',
    icon: PanelLeft,
  },
  {
    id: 'resizable',
    name: 'Resizable',
    category: 'Layout',
    description: 'Resizable panel component',
    icon: Layout,
  },
  {
    id: 'aspect-ratio',
    name: 'Aspect Ratio',
    category: 'Layout',
    description: 'Maintain aspect ratio component',
    icon: Image,
  },
  // Feedback Components
  {
    id: 'alert',
    name: 'Alert',
    category: 'Feedback',
    description: 'Alert message component',
    icon: AlertCircle,
  },
  {
    id: 'toast',
    name: 'Toast',
    category: 'Feedback',
    description: 'Toast notification component',
    icon: MessageSquare,
  },
  {
    id: 'dialog',
    name: 'Dialog',
    category: 'Feedback',
    description: 'Modal dialog component',
    icon: MessageSquare,
  },
  {
    id: 'alert-dialog',
    name: 'Alert Dialog',
    category: 'Feedback',
    description: 'Alert dialog component',
    icon: AlertCircle,
  },
  {
    id: 'confirm-dialog',
    name: 'Confirm Dialog',
    category: 'Feedback',
    description: 'Confirmation dialog component',
    icon: AlertCircle,
  },
  {
    id: 'delete-confirm-dialog',
    name: 'Delete Confirm Dialog',
    category: 'Feedback',
    description: 'Delete confirmation dialog component',
    icon: AlertCircle,
  },
  {
    id: 'progress',
    name: 'Progress',
    category: 'Feedback',
    description: 'Progress bar component',
    icon: Settings,
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    category: 'Feedback',
    description: 'Loading skeleton component',
    icon: Box,
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'Feedback',
    description: 'Loading spinner component',
    icon: Settings,
  },
  {
    id: 'loading-button',
    name: 'Loading Button',
    category: 'Feedback',
    description: 'Button with loading state',
    icon: MousePointerClick,
  },
  {
    id: 'loading-state',
    name: 'Loading State',
    category: 'Feedback',
    description: 'Loading state component',
    icon: Settings,
  },
  {
    id: 'empty-state',
    name: 'Empty State',
    category: 'Feedback',
    description: 'Empty state component',
    icon: Box,
  },
  {
    id: 'error-boundary',
    name: 'Error Boundary',
    category: 'Feedback',
    description: 'Error boundary component',
    icon: AlertCircle,
  },
  // Data Display Components
  {
    id: 'table',
    name: 'Table',
    category: 'Data Display',
    description: 'Table component',
    icon: Table,
  },
  {
    id: 'data-table',
    name: 'Data Table',
    category: 'Data Display',
    description: 'Advanced data table with sorting, filtering, and pagination',
    icon: Table,
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Data Display',
    description: 'Badge component',
    icon: Circle,
  },
  {
    id: 'status-badge',
    name: 'Status Badge',
    category: 'Data Display',
    description: 'Status badge component',
    icon: Circle,
  },
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Data Display',
    description: 'Avatar component',
    icon: Circle,
  },
  {
    id: 'chart',
    name: 'Chart',
    category: 'Data Display',
    description: 'Chart component',
    icon: Image,
  },
  // Navigation Components
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Tab navigation component',
    icon: PanelLeft,
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    category: 'Navigation',
    description: 'Sidebar navigation component',
    icon: PanelLeft,
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'Breadcrumb navigation component',
    icon: Navigation,
  },
  {
    id: 'pagination',
    name: 'Pagination',
    category: 'Navigation',
    description: 'Pagination component',
    icon: List,
  },
  {
    id: 'menubar',
    name: 'Menubar',
    category: 'Navigation',
    description: 'Menu bar component',
    icon: Menu,
  },
  {
    id: 'navigation-menu',
    name: 'Navigation Menu',
    category: 'Navigation',
    description: 'Navigation menu component',
    icon: Navigation,
  },
  // Overlay Components
  {
    id: 'popover',
    name: 'Popover',
    category: 'Overlay',
    description: 'Popover component',
    icon: MessageSquare,
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Overlay',
    description: 'Tooltip component',
    icon: MessageSquare,
  },
  {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    category: 'Overlay',
    description: 'Dropdown menu component',
    icon: ChevronDown,
  },
  {
    id: 'context-menu',
    name: 'Context Menu',
    category: 'Overlay',
    description: 'Context menu component',
    icon: Menu,
  },
  {
    id: 'hover-card',
    name: 'Hover Card',
    category: 'Overlay',
    description: 'Hover card component',
    icon: Box,
  },
  {
    id: 'sheet',
    name: 'Sheet',
    category: 'Overlay',
    description: 'Sheet/drawer component',
    icon: PanelLeft,
  },
  {
    id: 'drawer',
    name: 'Drawer',
    category: 'Overlay',
    description: 'Drawer component',
    icon: PanelLeft,
  },
  // Media Components
  {
    id: 'carousel',
    name: 'Carousel',
    category: 'Media',
    description: 'Carousel component',
    icon: Image,
  },
  {
    id: 'image-preview',
    name: 'Image Preview',
    category: 'Media',
    description: 'Image grid preview component with lightbox support',
    icon: Image,
  },
  // Other Components
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'Other',
    description: 'Accordion component',
    icon: ChevronDown,
  },
  {
    id: 'collapsible',
    name: 'Collapsible',
    category: 'Other',
    description: 'Collapsible component',
    icon: ChevronDown,
  },
  {
    id: 'toggle',
    name: 'Toggle',
    category: 'Other',
    description: 'Toggle button component',
    icon: ToggleLeft,
  },
  {
    id: 'toggle-group',
    name: 'Toggle Group',
    category: 'Other',
    description: 'Toggle group component',
    icon: ToggleLeft,
  },
  {
    id: 'scroll-area',
    name: 'Scroll Area',
    category: 'Other',
    description: 'Custom scroll area component',
    icon: PanelLeft,
  },
  {
    id: 'label',
    name: 'Label',
    category: 'Other',
    description: 'Label component',
    icon: Type,
  },
  {
    id: 'kbd',
    name: 'KBD',
    category: 'Other',
    description: 'Keyboard key component',
    icon: Type,
  },
  {
    id: 'command',
    name: 'Command',
    category: 'Other',
    description: 'Command palette component',
    icon: Search,
  },
  {
    id: 'empty',
    name: 'Empty',
    category: 'Other',
    description: 'Empty state component',
    icon: Box,
  },
  {
    id: 'field',
    name: 'Field',
    category: 'Other',
    description: 'Form field component',
    icon: Square,
  },
  {
    id: 'item',
    name: 'Item',
    category: 'Other',
    description: 'Item component',
    icon: Box,
  },
  {
    id: 'input-group',
    name: 'Input Group',
    category: 'Other',
    description: 'Input group component',
    icon: Square,
  },
  {
    id: 'button-group',
    name: 'Button Group',
    category: 'Other',
    description: 'Button group component',
    icon: MousePointerClick,
  },
];

export const componentCategories: ComponentCategory[] = [
  'Form',
  'Layout',
  'Feedback',
  'Data Display',
  'Navigation',
  'Overlay',
  'Media',
  'Other',
];

export function getComponentsByCategory(
  category: ComponentCategory
): ComponentMetadata[] {
  return componentRegistry.filter((comp) => comp.category === category);
}

export function getComponentById(id: string): ComponentMetadata | undefined {
  return componentRegistry.find((comp) => comp.id === id);
}

export function searchComponents(query: string): ComponentMetadata[] {
  const lowerQuery = query.toLowerCase();
  return componentRegistry.filter(
    (comp) =>
      comp.name.toLowerCase().includes(lowerQuery) ||
      comp.description.toLowerCase().includes(lowerQuery) ||
      comp.category.toLowerCase().includes(lowerQuery)
  );
}

