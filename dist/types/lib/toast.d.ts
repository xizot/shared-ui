type ToastOptions = {
    description?: string;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
};
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
export {};
//# sourceMappingURL=toast.d.ts.map