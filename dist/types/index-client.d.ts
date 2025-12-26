import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ClassProp } from 'class-variance-authority/types';
import { ColumnDef } from '@tanstack/react-table';
import { ComponentProps } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { DateRange } from 'react-day-picker';
import { DayButton } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import { DayPickerRangeProps } from 'react-day-picker';
import { DayPickerSingleProps } from 'react-day-picker';
import { default as default_2 } from 'embla-carousel-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Drawer as Drawer_2 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FilterFn } from '@tanstack/react-table';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { JSX } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Locale } from 'date-fns';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { PaginationOptions } from '@tanstack/react-table';
import { PaginationState } from '@tanstack/react-table';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React_2 from 'react';
import * as RechartsPrimitive from 'recharts';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import { VariantProps } from 'class-variance-authority';

export declare function Accordion({ ...props }: React_2.ComponentProps<typeof AccordionPrimitive.Root>): JSX.Element;

export declare function AccordionContent({ className, children, ...props }: React_2.ComponentProps<typeof AccordionPrimitive.Content>): JSX.Element;

export declare function AccordionItem({ className, ...props }: React_2.ComponentProps<typeof AccordionPrimitive.Item>): JSX.Element;

export declare function AccordionTrigger({ className, children, ...props }: React_2.ComponentProps<typeof AccordionPrimitive.Trigger>): JSX.Element;

export declare function AlertDialog({ ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Root>): JSX.Element;

export declare function AlertDialogAction({ className, ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Action>): JSX.Element;

export declare function AlertDialogCancel({ className, ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Cancel>): JSX.Element;

export declare function AlertDialogContent({ className, ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Content>): JSX.Element;

export declare function AlertDialogDescription({ className, ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Description>): JSX.Element;

export declare function AlertDialogFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function AlertDialogHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function AlertDialogOverlay({ className, ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Overlay>): JSX.Element;

export declare function AlertDialogPortal({ ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Portal>): JSX.Element;

export declare function AlertDialogTitle({ className, ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Title>): JSX.Element;

export declare function AlertDialogTrigger({ ...props }: React_2.ComponentProps<typeof AlertDialogPrimitive.Trigger>): JSX.Element;

declare function Badge({ className, variant, asChild, ...props }: React_2.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "secondary" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

declare function Button({ className, variant, size, asChild, ...props }: React_2.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>): JSX.Element;

export declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): JSX.Element;

export declare function ButtonGroupText({ className, asChild, ...props }: React.ComponentProps<'div'> & {
    asChild?: boolean;
}): JSX.Element;

export declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & ClassProp) | undefined) => string;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "2xl" | "icon" | "icon-xxs" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "icon-xxl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React_2.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React_2.ComponentProps<typeof Button>['variant'];
}): JSX.Element;

export declare function CalendarDayButton({ className, day, modifiers, ...props }: React_2.ComponentProps<typeof DayButton>): JSX.Element;

export declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React_2.ComponentProps<'div'> & CarouselProps): JSX.Element;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare function CarouselContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CarouselItem({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CarouselNext({ className, variant, size, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare type CarouselOptions = UseCarouselParameters[0];

declare type CarouselPlugin = UseCarouselParameters[1];

export declare function CarouselPrevious({ className, variant, size, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

export declare type ChartConfig = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

export declare function ChartContainer({ id, className, children, config, ...props }: React_2.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
}): JSX.Element;

export declare const ChartLegend: typeof RechartsPrimitive.Legend;

export declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React_2.ComponentProps<'div'> & Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
}): JSX.Element | null;

export declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => JSX.Element | null;

export declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;

export declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React_2.ComponentProps<typeof RechartsPrimitive.Tooltip> & React_2.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
}): JSX.Element | null;

export { ColumnDef }

export declare function Combobox<TOptions extends readonly ComboboxBaseOption[]>({ options, value, onChange, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, showClearIcon, showArrowIcon, showSearch, showCreate, onCreate, createLabel, suffix, className, triggerClassName, popoverClassName, }: ComboboxProps<TOptions>): JSX.Element;

export declare type ComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};

export declare type ComboboxOnChange<T extends ComboboxBaseOption> = (value: string, option: T | undefined) => void;

export declare type ComboboxOnCreate = (searchValue: string) => void;

export declare type ComboboxOption = ComboboxBaseOption;

export declare type ComboboxProps<TOptions extends readonly ComboboxBaseOption[]> = {
    options: TOptions;
    value?: ComboboxValue;
    onChange?: ComboboxOnChange<TOptions[number]>;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: FormSize;
    showClearIcon?: boolean;
    showArrowIcon?: boolean;
    showSearch?: boolean;
    showCreate?: boolean;
    onCreate?: ComboboxOnCreate;
    createLabel?: string | ((searchValue: string) => string);
    suffix?: React_2.ReactNode;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};

export declare type ComboboxValue = string | number;

export declare function ConfirmDialog({ open, onOpenChange, title, description, confirmText, cancelText, onConfirm, variant, loading, }: ConfirmDialogProps): JSX.Element;

declare interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void | Promise<void>;
    variant?: 'default' | 'destructive';
    loading?: boolean;
}

export declare function ContextMenu({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Root>): JSX.Element;

export declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): JSX.Element;

export declare function ContextMenuContent({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Content>): JSX.Element;

export declare function ContextMenuGroup({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Group>): JSX.Element;

export declare function ContextMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): JSX.Element;

export declare function ContextMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function ContextMenuPortal({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Portal>): JSX.Element;

export declare function ContextMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): JSX.Element;

export declare function ContextMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): JSX.Element;

export declare function ContextMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Separator>): JSX.Element;

export declare function ContextMenuShortcut({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function ContextMenuSub({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Sub>): JSX.Element;

export declare function ContextMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.SubContent>): JSX.Element;

export declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function ContextMenuTrigger({ ...props }: React_2.ComponentProps<typeof ContextMenuPrimitive.Trigger>): JSX.Element;

export declare function DataTable<T extends Record<string, unknown>>({ data, paginationOptions, columns, totalPages, searchable, searchPlaceholder, searchKey, emptyMessage, className, enableGlobalFilter, globalFilterFn, pagination, onRowClick, rowClassName, }: DataTableProps<T>): JSX.Element;

declare interface DataTableProps<T extends Record<string, unknown>> {
    data: T[];
    columns: ColumnDef<T, unknown>[];
    pagination: PaginationState;
    paginationOptions: Pick<PaginationOptions, 'onPaginationChange' | 'rowCount'>;
    totalPages?: number;
    searchable?: boolean;
    searchPlaceholder?: string;
    searchKey?: keyof T | string;
    emptyMessage?: string;
    className?: string;
    enableGlobalFilter?: boolean;
    globalFilterFn?: FilterFn<T>;
    onRowClick?: (row: T) => void;
    rowClassName?: (row: T) => string;
}

export declare function DatePicker({ value, onChange, placeholder, dateFormat, showTime, timeOnly, mode, label, error, required, disabled, disabledPast, disabledFuture, onDisabled, size, className, triggerClassName, popoverClassName, locale, cancelText, applyText, monthNames, ...calendarProps }: DatePickerProps): JSX.Element;

export declare type DatePickerProps = Omit<DayPickerSingleProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    dateFormat?: string;
    showTime?: boolean;
    timeOnly?: boolean;
    mode?: 'single' | 'month';
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    onDisabled?: (date: Date) => boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
    locale?: string | Locale;
    cancelText?: string;
    applyText?: string;
    monthNames?: string[];
};

export declare function DateRangePicker({ value, onChange, placeholder, dateFormat, presets, showPresets, label, error, required, disabled, disabledPast, disabledFuture, onDisabled, size, className, triggerClassName, popoverClassName, locale, cancelText, applyText, ...calendarProps }: DateRangePickerProps): JSX.Element;

export declare type DateRangePickerProps = Omit<DayPickerRangeProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: {
        from?: string;
        to?: string;
    };
    dateFormat?: string;
    presets?: DateRangePreset[];
    showPresets?: boolean;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    onDisabled?: (date: Date) => boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
    locale?: string | Locale;
    cancelText?: string;
    applyText?: string;
};

export declare type DateRangePreset = {
    label: string;
    range: DateRange;
};

export declare function DeleteConfirmDialog({ open, onOpenChange, title, description, itemName, onConfirm, loading, }: DeleteConfirmDialogProps): JSX.Element;

declare interface DeleteConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    itemName?: string;
    onConfirm: () => void | Promise<void>;
    loading?: boolean;
}

export declare function Dialog({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Root>): JSX.Element;

export declare function DialogClose({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Close>): JSX.Element;

export declare function DialogContent({ className, children, showCloseButton, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): JSX.Element;

export declare function DialogDescription({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Description>): JSX.Element;

export declare function DialogFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function DialogHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function DialogOverlay({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Overlay>): JSX.Element;

export declare function DialogPortal({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Portal>): JSX.Element;

export declare function DialogTitle({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Title>): JSX.Element;

export declare function DialogTrigger({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Trigger>): JSX.Element;

export declare function Drawer({ ...props }: React_2.ComponentProps<typeof Drawer_2.Root>): JSX.Element;

export declare function DrawerClose({ ...props }: React_2.ComponentProps<typeof Drawer_2.Close>): JSX.Element;

export declare function DrawerContent({ className, children, ...props }: React_2.ComponentProps<typeof Drawer_2.Content>): JSX.Element;

export declare function DrawerDescription({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Description>): JSX.Element;

export declare function DrawerFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function DrawerHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function DrawerOverlay({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Overlay>): JSX.Element;

export declare function DrawerPortal({ ...props }: React_2.ComponentProps<typeof Drawer_2.Portal>): JSX.Element;

export declare function DrawerTitle({ className, ...props }: React_2.ComponentProps<typeof Drawer_2.Title>): JSX.Element;

export declare function DrawerTrigger({ ...props }: React_2.ComponentProps<typeof Drawer_2.Trigger>): JSX.Element;

export declare function DropdownMenu({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Root>): JSX.Element;

export declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): JSX.Element;

export declare function DropdownMenuContent({ className, sideOffset, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Content>): JSX.Element;

export declare function DropdownMenuGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Group>): JSX.Element;

export declare function DropdownMenuItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): JSX.Element;

export declare function DropdownMenuLabel({ className, inset, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuPortal({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Portal>): JSX.Element;

export declare function DropdownMenuRadioGroup({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): JSX.Element;

export declare function DropdownMenuRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): JSX.Element;

export declare function DropdownMenuSeparator({ className, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Separator>): JSX.Element;

export declare function DropdownMenuShortcut({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function DropdownMenuSub({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Sub>): JSX.Element;

export declare function DropdownMenuSubContent({ className, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): JSX.Element;

export declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function DropdownMenuTrigger({ ...props }: React_2.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): JSX.Element;

export declare function Empty({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyContent({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>): JSX.Element;

export declare function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>): JSX.Element;

declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function EmptyState({ className, icon, title, description, action, children, ...props }: EmptyStateProps): JSX.Element;

declare interface EmptyStateProps extends React_2.ComponentProps<typeof Empty> {
    icon?: React_2.ReactNode;
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export declare function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare class ErrorBoundary extends React_2.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React_2.ErrorInfo): void;
    render(): string | number | bigint | boolean | JSX.Element | Iterable<React_2.ReactNode> | Promise<string | number | bigint | boolean | React_2.ReactPortal | React_2.ReactElement<unknown, string | React_2.JSXElementConstructor<any>> | Iterable<React_2.ReactNode> | null | undefined> | null | undefined;
}

export declare interface ErrorBoundaryProps {
    children: React_2.ReactNode;
    fallback?: React_2.ComponentType<ErrorBoundaryState>;
    onError?: (error: Error, errorInfo: React_2.ErrorInfo) => void;
}

export declare interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export declare function Field({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>): JSX.Element;

export declare function FieldContent({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function FieldDescription({ className, ...props }: React.ComponentProps<'p'>): JSX.Element;

export declare function FieldError({ className, children, errors, ...props }: React.ComponentProps<'div'> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): JSX.Element | null;

export declare function FieldGroup({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>): JSX.Element;

export declare function FieldLegend({ className, variant, ...props }: React.ComponentProps<'legend'> & {
    variant?: 'legend' | 'label';
}): JSX.Element;

export declare function FieldSeparator({ children, className, ...props }: React.ComponentProps<'div'> & {
    children?: React.ReactNode;
}): JSX.Element;

export declare function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>): JSX.Element;

export declare function FieldTitle({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

declare const fieldVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | "responsive" | null | undefined;
} & ClassProp) | undefined) => string;

declare type FormSize = VariantProps<typeof formSizeVariants>['size'];

/**
 * Form component size variants
 * All form components should use these sizes for consistency
 */
declare const formSizeVariants: (props?: ({
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function HoverCard({ ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Root>): JSX.Element;

export declare function HoverCardContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Content>): JSX.Element;

export declare function HoverCardTrigger({ ...props }: React_2.ComponentProps<typeof HoverCardPrimitive.Trigger>): JSX.Element;

declare function Input({ className, type, label, error, required, id, size, ...props }: InputProps): JSX.Element;

export declare function InputGroup({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function InputGroupAddon({ className, align, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>): JSX.Element;

declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React_2.ComponentProps<typeof Button>, 'size'> & VariantProps<typeof inputGroupButtonVariants>): JSX.Element;

declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function InputGroupInput({ className, ...props }: Omit<React_2.ComponentProps<'input'>, 'size'>): JSX.Element;

export declare function InputGroupText({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function InputGroupTextarea({ className, ...props }: React_2.ComponentProps<'textarea'>): JSX.Element;

declare interface InputProps extends Omit<React_2.ComponentProps<'input'>, 'type' | 'size'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    type?: React_2.ComponentProps<'input'>['type'];
    size?: FormSize;
}

export declare function Item({ className, variant, size, asChild, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare function ItemActions({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemDescription({ className, ...props }: React_2.ComponentProps<'p'>): JSX.Element;

export declare function ItemFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemGroup({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function ItemMedia({ className, variant, ...props }: React_2.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>): JSX.Element;

declare const itemMediaVariants: (props?: ({
    variant?: "default" | "image" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function ItemSeparator({ className, ...props }: React_2.ComponentProps<typeof Separator>): JSX.Element;

export declare function ItemTitle({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

declare const itemVariants: (props?: ({
    variant?: "default" | "outline" | "muted" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare function Label({ className, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element;

export declare function LoadingButton({ className, loading, loadingText, children, disabled, ...props }: LoadingButtonProps): JSX.Element;

declare interface LoadingButtonProps extends ComponentProps<typeof Button> {
    loading?: boolean;
    loadingText?: string;
}

export declare function LoadingState({ className, count, variant, ...props }: LoadingStateProps): JSX.Element;

declare interface LoadingStateProps extends React_2.ComponentProps<'div'> {
    count?: number;
    variant?: 'default' | 'card' | 'list' | 'table';
}

export declare function Menubar({ className, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Root>): JSX.Element;

export declare function MenubarCheckboxItem({ className, children, checked, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.CheckboxItem>): JSX.Element;

export declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Content>): JSX.Element;

export declare function MenubarGroup({ ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Group>): JSX.Element;

export declare function MenubarItem({ className, inset, variant, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): JSX.Element;

export declare function MenubarLabel({ className, inset, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
}): JSX.Element;

export declare function MenubarMenu({ ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Menu>): JSX.Element;

export declare function MenubarPortal({ ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Portal>): JSX.Element;

export declare function MenubarRadioGroup({ ...props }: React_2.ComponentProps<typeof MenubarPrimitive.RadioGroup>): JSX.Element;

export declare function MenubarRadioItem({ className, children, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.RadioItem>): JSX.Element;

export declare function MenubarSeparator({ className, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Separator>): JSX.Element;

export declare function MenubarShortcut({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function MenubarSub({ ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Sub>): JSX.Element;

export declare function MenubarSubContent({ className, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.SubContent>): JSX.Element;

export declare function MenubarSubTrigger({ className, inset, children, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
}): JSX.Element;

export declare function MenubarTrigger({ className, ...props }: React_2.ComponentProps<typeof MenubarPrimitive.Trigger>): JSX.Element;

export declare function MonthPicker({ value, onChange, locale, monthNames, disabled, className, }: MonthPickerProps): JSX.Element;

export declare type MonthPickerProps = {
    value?: Date;
    onChange: (date: Date | undefined) => void;
    locale?: string | Locale;
    monthNames?: string[];
    disabled?: (date: Date) => boolean;
    className?: string;
};

export declare function MultipleCombobox<TOptions extends readonly MultipleComboboxBaseOption[]>({ options, value, onChange, autoResize, limitTags, showCode, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, className, triggerClassName, popoverClassName, }: MultipleComboboxProps<TOptions>): JSX.Element;

export declare type MultipleComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};

export declare type MultipleComboboxOnChange<T extends MultipleComboboxBaseOption> = (values: MultipleComboboxValue, options: T[] | undefined) => void;

export declare type MultipleComboboxProps<TOptions extends readonly MultipleComboboxBaseOption[]> = {
    options: TOptions;
    value?: MultipleComboboxValue;
    onChange?: MultipleComboboxOnChange<TOptions[number]>;
    autoResize?: boolean;
    limitTags?: number;
    showCode?: boolean;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};

export declare type MultipleComboboxValue = string[];

export declare function NavigationMenu({ className, children, viewport, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}): JSX.Element;

export declare function NavigationMenuContent({ className, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Content>): JSX.Element;

export declare function NavigationMenuIndicator({ className, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Indicator>): JSX.Element;

export declare function NavigationMenuItem({ className, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Item>): JSX.Element;

export declare function NavigationMenuLink({ className, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Link>): JSX.Element;

export declare function NavigationMenuList({ className, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.List>): JSX.Element;

export declare function NavigationMenuTrigger({ className, children, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Trigger>): JSX.Element;

export declare const navigationMenuTriggerStyle: (props?: ClassProp | undefined) => string;

export declare function NavigationMenuViewport({ className, ...props }: React_2.ComponentProps<typeof NavigationMenuPrimitive.Viewport>): JSX.Element;

export declare function Pagination({ className, ...props }: React_2.ComponentProps<'nav'>): JSX.Element;

export declare function PaginationContent({ className, ...props }: React_2.ComponentProps<'ul'>): JSX.Element;

export declare function PaginationEllipsis({ className, ...props }: React_2.ComponentProps<'span'>): JSX.Element;

export declare function PaginationItem({ ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function PaginationLink({ className, isActive, disabled, size, ...props }: PaginationLinkProps): JSX.Element;

declare type PaginationLinkProps = {
    isActive?: boolean;
    disabled?: boolean;
} & Pick<React_2.ComponentProps<typeof Button>, 'size'> & React_2.ComponentProps<'a'>;

export declare function PaginationNext({ className, ...props }: React_2.ComponentProps<typeof PaginationLink>): JSX.Element;

export declare function PaginationPrevious({ className, ...props }: React_2.ComponentProps<typeof PaginationLink>): JSX.Element;

export declare const PaginationRange: ({ currentPage, totalPages, pageSize, siblingCount, onPageChange, }: PaginationRangeProps) => JSX.Element;

declare type PaginationRangeProps = {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    siblingCount?: number;
    isGroupButton?: boolean;
    onPageChange: (pageIndex: number, pageSize: number) => void;
};

export declare function Popover({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Root>): JSX.Element;

export declare function PopoverAnchor({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Anchor>): JSX.Element;

export declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Content>): JSX.Element;

export declare function PopoverTrigger({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Trigger>): JSX.Element;

export declare function Progress({ className, value, ...props }: React_2.ComponentProps<typeof ProgressPrimitive.Root>): JSX.Element;

export declare function ScrollArea({ className, children, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.Root>): JSX.Element;

export declare function ScrollBar({ className, orientation, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): JSX.Element;

export declare function Select({ ...props }: React_2.ComponentProps<typeof SelectPrimitive.Root>): JSX.Element;

export declare function SelectContent({ className, children, position, align, ...props }: React_2.ComponentProps<typeof SelectPrimitive.Content>): JSX.Element;

export declare function SelectGroup({ ...props }: React_2.ComponentProps<typeof SelectPrimitive.Group>): JSX.Element;

export declare function SelectItem({ className, children, ...props }: React_2.ComponentProps<typeof SelectPrimitive.Item>): JSX.Element;

export declare function SelectLabel({ className, ...props }: React_2.ComponentProps<typeof SelectPrimitive.Label>): JSX.Element;

export declare function SelectScrollDownButton({ className, ...props }: React_2.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): JSX.Element;

export declare function SelectScrollUpButton({ className, ...props }: React_2.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): JSX.Element;

export declare function SelectSeparator({ className, ...props }: React_2.ComponentProps<typeof SelectPrimitive.Separator>): JSX.Element;

export declare function SelectTrigger({ className, size, children, label, error, required, id, ...props }: React_2.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: FormSize;
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
}): JSX.Element;

export declare function SelectValue({ ...props }: React_2.ComponentProps<typeof SelectPrimitive.Value>): JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React_2.ComponentProps<typeof SeparatorPrimitive.Root>): JSX.Element;

export declare function Sheet({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Root>): JSX.Element;

export declare function SheetClose({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Close>): JSX.Element;

export declare function SheetContent({ className, children, side, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): JSX.Element;

export declare function SheetDescription({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Description>): JSX.Element;

export declare function SheetFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SheetTitle({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Title>): JSX.Element;

export declare function SheetTrigger({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Trigger>): JSX.Element;

export declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React_2.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}): JSX.Element;

export declare function SidebarContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

declare type SidebarContextProps = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};

export declare function SidebarFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarGroup({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarGroupAction({ className, asChild, ...props }: React_2.ComponentProps<'button'> & {
    asChild?: boolean;
}): JSX.Element;

export declare function SidebarGroupContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarGroupLabel({ className, asChild, ...props }: React_2.ComponentProps<'div'> & {
    asChild?: boolean;
}): JSX.Element;

export declare function SidebarHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarInput({ className, ...props }: React_2.ComponentProps<typeof Input>): JSX.Element;

export declare function SidebarInset({ className, ...props }: React_2.ComponentProps<'main'>): JSX.Element;

export declare function SidebarMenu({ className, ...props }: React_2.ComponentProps<'ul'>): JSX.Element;

export declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React_2.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): JSX.Element;

export declare function SidebarMenuBadge({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React_2.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React_2.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): JSX.Element;

declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function SidebarMenuItem({ className, ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React_2.ComponentProps<'div'> & {
    showIcon?: boolean;
}): JSX.Element;

export declare function SidebarMenuSub({ className, ...props }: React_2.ComponentProps<'ul'>): JSX.Element;

export declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React_2.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): JSX.Element;

export declare function SidebarMenuSubItem({ className, ...props }: React_2.ComponentProps<'li'>): JSX.Element;

export declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React_2.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): JSX.Element;

export declare function SidebarRail({ className, ...props }: React_2.ComponentProps<'button'>): JSX.Element;

export declare function SidebarSeparator({ className, ...props }: React_2.ComponentProps<typeof Separator>): JSX.Element;

export declare function SidebarTrigger({ className, onClick, ...props }: React_2.ComponentProps<typeof Button>): JSX.Element;

export declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function Spinner({ className, ...props }: React.ComponentProps<'svg'>): JSX.Element;

export declare function StatusBadge({ className, status, label, ...props }: StatusBadgeProps): JSX.Element;

declare interface StatusBadgeProps extends React_2.ComponentProps<typeof Badge> {
    status: StatusType;
    label?: string;
}

export declare type StatusType = 'success' | 'error' | 'warning' | 'info' | 'pending' | 'default';

export declare function Table({ className, ...props }: React_2.ComponentProps<'table'>): JSX.Element;

export declare function TableBody({ className, ...props }: React_2.ComponentProps<'tbody'>): JSX.Element;

export declare function TableCaption({ className, ...props }: React_2.ComponentProps<'caption'>): JSX.Element;

export declare function TableCell({ className, ...props }: React_2.ComponentProps<'td'>): JSX.Element;

export declare function TableFooter({ className, ...props }: React_2.ComponentProps<'tfoot'>): JSX.Element;

export declare function TableHead({ className, ...props }: React_2.ComponentProps<'th'>): JSX.Element;

export declare function TableHeader({ className, ...props }: React_2.ComponentProps<'thead'>): JSX.Element;

export declare function TableRow({ className, ...props }: React_2.ComponentProps<'tr'>): JSX.Element;

export declare function Tabs({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Root>): JSX.Element;

export declare function TabsContent({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Content>): JSX.Element;

export declare function TabsList({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.List>): JSX.Element;

export declare function TabsTrigger({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Trigger>): JSX.Element;

export declare function Textarea({ className, label, error, required, id, size, ...props }: TextareaProps): JSX.Element;

declare interface TextareaProps extends React_2.ComponentProps<'textarea'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    size?: FormSize;
}

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare function TimePicker({ value, onChange, showSeconds, className }: TimePickerProps): JSX.Element;

export declare type TimePickerProps = {
    value: TimeValue;
    onChange: (value: TimeValue) => void;
    showSeconds?: boolean;
    className?: string;
};

export declare type TimeValue = {
    hour: string;
    minute: string;
    second: string;
};

export declare function Toggle({ className, variant, size, ...props }: React_2.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): JSX.Element;

export declare function ToggleGroup({ className, variant, size, spacing, children, ...props }: React_2.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
}): JSX.Element;

export declare function ToggleGroupItem({ className, children, variant, size, ...props }: React_2.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>): JSX.Element;

export declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Tooltip({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Root>): JSX.Element;

export declare function TooltipContent({ className, sideOffset, children, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Content>): JSX.Element;

export declare function TooltipProvider({ delayDuration, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Provider>): JSX.Element;

export declare function TooltipTrigger({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Trigger>): JSX.Element;

declare type UseCarouselParameters = Parameters<typeof default_2>;

export declare function useSidebar(): SidebarContextProps;

export { }
