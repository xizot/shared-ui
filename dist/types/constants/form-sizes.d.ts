import { type VariantProps } from 'class-variance-authority';
/**
 * Default text size class for form components and labels
 * Uses CSS variable --default-text-size which can be configured in CSS
 */
/**
 * Form component size variants
 * All form components should use these sizes for consistency
 */
export declare const formSizeVariants: (props?: ({
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type FormSize = VariantProps<typeof formSizeVariants>['size'];
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
//# sourceMappingURL=form-sizes.d.ts.map