interface DeleteConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    itemName?: string;
    onConfirm: () => void | Promise<void>;
    loading?: boolean;
}
declare function DeleteConfirmDialog({ open, onOpenChange, title, description, itemName, onConfirm, loading, }: DeleteConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export { DeleteConfirmDialog };
//# sourceMappingURL=delete-confirm-dialog.d.ts.map