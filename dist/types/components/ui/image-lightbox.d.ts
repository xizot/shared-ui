import type { ImagePreviewItem } from './image-preview';
export type ImageLightboxProps = {
    images: ImagePreviewItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialIndex?: number;
    showNavigation?: boolean;
    showCounter?: boolean;
    showZoom?: boolean;
    className?: string;
};
declare function ImageLightbox({ images, open, onOpenChange, initialIndex, showNavigation, showCounter, showZoom, className, }: ImageLightboxProps): import("react/jsx-runtime").JSX.Element | null;
export { ImageLightbox };
//# sourceMappingURL=image-lightbox.d.ts.map