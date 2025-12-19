export type ImagePreviewItem = string | File | {
    url: string;
    alt?: string;
    id?: string;
};
export type ImagePreviewProps = {
    images: ImagePreviewItem[];
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    onRemove?: (index: number) => void;
    onClick?: (index: number, image: ImagePreviewItem) => void;
    showRemove?: boolean;
    className?: string;
    itemClassName?: string;
    emptyMessage?: string;
    loading?: boolean;
};
declare function ImagePreview({ images, columns, onRemove, onClick, showRemove, className, itemClassName, emptyMessage, loading, }: ImagePreviewProps): import("react/jsx-runtime").JSX.Element;
export { ImagePreview };
//# sourceMappingURL=image-preview.d.ts.map