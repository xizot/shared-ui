import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { JSX } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React_2 from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { VariantProps } from 'class-variance-authority';

export declare const Alert: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare function Avatar({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Root>): JSX.Element;

export declare function AvatarFallback({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Fallback>): JSX.Element;

export declare function AvatarImage({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Image>): JSX.Element;

export declare function Badge({ className, variant, asChild, ...props }: React_2.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "secondary" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

export declare type Breakpoint = keyof typeof BREAKPOINTS;

export declare const BREAKPOINTS: {
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly '2xl': 1536;
};

export declare function Button({ className, variant, size, asChild, ...props }: React_2.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): JSX.Element;

export declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "2xl" | "icon" | "icon-xxs" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "icon-xxl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Card({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CardAction({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CardContent({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CardDescription({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CardFooter({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CardHeader({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function CardTitle({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function cn(...inputs: ClassValue[]): string;

export declare function Container({ className, maxWidth, ...props }: ContainerProps): JSX.Element;

declare interface ContainerProps extends React_2.ComponentProps<'div'> {
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export declare const DATE_FORMATS: {
    readonly short: "dd/MM/yyyy";
    readonly long: "dd MMMM yyyy";
    readonly datetime: "dd/MM/yyyy HH:mm";
    readonly datetimeLong: "dd MMMM yyyy HH:mm";
    readonly time: "HH:mm";
    readonly iso: "yyyy-MM-dd";
    readonly isoDateTime: "yyyy-MM-dd'T'HH:mm:ss";
};

export declare type DateFormat = keyof typeof DATE_FORMATS;

export declare function Divider({ className, label, labelPosition, orientation, ...props }: DividerProps): JSX.Element;

declare interface DividerProps extends React_2.ComponentProps<typeof Separator> {
    label?: React_2.ReactNode;
    labelPosition?: 'left' | 'center' | 'right';
}

export declare function Empty({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyContent({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>): JSX.Element;

export declare function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>): JSX.Element;

declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

/**
 * Size mapping for form components
 * - xxs: 24px height (h-6)
 * - xs: 32px height (h-8)
 * - sm: 36px height (h-9)
 * - md: 40px height (h-10) - default
 * - lg: 44px height (h-11)
 * - xl: 48px height (h-12)
 * - xxl: 56px height (h-14)
 */
export declare const FORM_SIZES: {
    readonly xxs: {
        readonly height: "h-6";
        readonly text: "text-xs";
        readonly padding: "px-2 py-1";
        readonly icon: "size-3.5";
        readonly iconButton: "size-6";
    };
    readonly xs: {
        readonly height: "h-8";
        readonly text: "text-xs";
        readonly padding: "px-2.5 py-1.5";
        readonly icon: "size-4";
        readonly iconButton: "size-8";
    };
    readonly sm: {
        readonly height: "h-9";
        readonly text: "text-sm";
        readonly padding: "px-3 py-2";
        readonly icon: "size-5";
        readonly iconButton: "size-9";
    };
    readonly md: {
        readonly height: "h-10";
        readonly text: "text-base";
        readonly padding: "px-4 py-2";
        readonly icon: "size-5";
        readonly iconButton: "size-10";
    };
    readonly lg: {
        readonly height: "h-11";
        readonly text: "text-base";
        readonly padding: "px-4 py-2.5";
        readonly icon: "size-6";
        readonly iconButton: "size-11";
    };
    readonly xl: {
        readonly height: "h-12";
        readonly text: "text-base";
        readonly padding: "px-5 py-3";
        readonly icon: "size-6";
        readonly iconButton: "size-12";
    };
    readonly xxl: {
        readonly height: "h-14";
        readonly text: "text-lg";
        readonly padding: "px-6 py-3.5";
        readonly icon: "size-7";
        readonly iconButton: "size-14";
    };
};

/**
 * Format currency amount
 * @example formatCurrency(1000000, 'vi-VN', 'VND') // '1.000.000 ₫'
 */
export declare function formatCurrency(amount: number, locale?: string, currency?: string): string;

/**
 * Format date using date-fns format or custom format
 * @example formatDate(new Date(), 'short') // '01/01/2024'
 */
export declare function formatDate(date: Date | string | number, format?: DateFormat | string): string;

/**
 * Format file size in bytes to human readable format
 * @example formatFileSize(1024) // '1 KB'
 */
export declare function formatFileSize(bytes: number): string;

/**
 * Format phone number
 * @example formatPhoneNumber('0123456789') // '0123 456 789'
 */
export declare function formatPhoneNumber(phone: string): string;

export declare type FormSize = VariantProps<typeof formSizeVariants>['size'];

/**
 * Form component size variants
 * All form components should use these sizes for consistency
 */
export declare const formSizeVariants: (props?: ({
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * Get nested object property by path string
 * @example get({ user: { name: 'John' } }, 'user.name') // 'John'
 */
export declare function get<T = unknown>(obj: unknown, path: string): T | undefined;

export declare function Grid({ className, cols, gap, responsive, ...props }: GridProps): JSX.Element;

declare interface GridProps extends React_2.ComponentProps<'div'> {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
    responsive?: {
        sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    };
}

/**
 * Check if value exists (not null, undefined, or empty string)
 */
export declare function hasValue(value: unknown): boolean;

export declare function Input({ className, type, label, error, required, id, size, ...props }: InputProps): JSX.Element;

declare interface InputProps extends Omit<React_2.ComponentProps<'input'>, 'type' | 'size'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    type?: React_2.ComponentProps<'input'>['type'];
    size?: FormSize;
}

export declare function Kbd({ className, ...props }: React.ComponentProps<'kbd'>): JSX.Element;

export declare function KbdGroup({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function Label({ className, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element;

export declare const REGEX: {
    readonly email: RegExp;
    readonly phone: RegExp;
    readonly vietnamesePhone: RegExp;
    readonly url: RegExp;
    readonly slug: RegExp;
    readonly hexColor: RegExp;
    readonly uuid: RegExp;
};

export declare function Separator({ className, orientation, decorative, ...props }: React_2.ComponentProps<typeof SeparatorPrimitive.Root>): JSX.Element;

export declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): JSX.Element;

export declare function Spinner({ className, ...props }: React.ComponentProps<'svg'>): JSX.Element;

export declare function Stack({ className, direction, spacing, align, justify, wrap, ...props }: StackProps): JSX.Element;

declare interface StackProps extends React_2.ComponentProps<'div'> {
    direction?: 'row' | 'column';
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    wrap?: boolean;
}

export declare function Table({ className, ...props }: React_2.ComponentProps<'table'>): JSX.Element;

export declare function TableBody({ className, ...props }: React_2.ComponentProps<'tbody'>): JSX.Element;

export declare function TableCaption({ className, ...props }: React_2.ComponentProps<'caption'>): JSX.Element;

export declare function TableCell({ className, ...props }: React_2.ComponentProps<'td'>): JSX.Element;

export declare function TableFooter({ className, ...props }: React_2.ComponentProps<'tfoot'>): JSX.Element;

export declare function TableHead({ className, ...props }: React_2.ComponentProps<'th'>): JSX.Element;

export declare function TableHeader({ className, ...props }: React_2.ComponentProps<'thead'>): JSX.Element;

export declare function TableRow({ className, ...props }: React_2.ComponentProps<'tr'>): JSX.Element;

export declare function Textarea({ className, label, error, required, id, size, ...props }: TextareaProps): JSX.Element;

declare interface TextareaProps extends React_2.ComponentProps<'textarea'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    size?: FormSize;
}

/**
 * Toast utility functions for displaying notifications
 */
export declare const toast: {
    /**
     * Show a success toast
     */
    success: (message: string, options?: ToastOptions) => string | number;
    /**
     * Show an error toast
     */
    error: (message: string, options?: ToastOptions) => string | number;
    /**
     * Show a warning toast
     */
    warning: (message: string, options?: ToastOptions) => string | number;
    /**
     * Show an info toast
     */
    info: (message: string, options?: ToastOptions) => string | number;
    /**
     * Show a default toast
     */
    default: (message: string, options?: ToastOptions) => string | number;
    /**
     * Show a loading toast
     */
    loading: (message: string, options?: Omit<ToastOptions, "action">) => string | number;
    /**
     * Show a promise toast (loading -> success/error)
     */
    promise: <T>(promise: Promise<T>, messages: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((error: unknown) => string);
    }, options?: Omit<ToastOptions, "title" | "description">) => (string & {
        unwrap: () => Promise<T>;
    }) | (number & {
        unwrap: () => Promise<T>;
    }) | {
        unwrap: () => Promise<T>;
    };
    /**
     * Dismiss a toast by ID
     */
    dismiss: (toastId?: string | number) => void;
    /**
     * Dismiss all toasts
     */
    dismissAll: () => void;
};

declare type ToastOptions = {
    description?: string;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
};

/**
 * Truncate text with ellipsis
 * @example truncate('Hello World', 5) // 'Hello...'
 */
export declare function truncate(text: string, maxLength: number, suffix?: string): string;

/**
 * Validate email address
 * @example validateEmail('test@example.com') // true
 */
export declare function validateEmail(email: string): boolean;

/**
 * Validate phone number (10-11 digits)
 * @example validatePhone('0123456789') // true
 */
export declare function validatePhone(phone: string): boolean;

/**
 * Validate URL
 * @example validateURL('https://example.com') // true
 */
export declare function validateURL(url: string): boolean;

/**
 * Validate Vietnamese phone number
 * @example validateVietnamesePhone('0912345678') // true
 */
export declare function validateVietnamesePhone(phone: string): boolean;

export { }
