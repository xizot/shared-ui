interface ConfirmDialogProps {
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
declare function ConfirmDialog({ open, onOpenChange, title, description, confirmText, cancelText, onConfirm, variant, loading, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export { ConfirmDialog };
//# sourceMappingURL=confirm-dialog.d.ts.map