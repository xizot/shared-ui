export type FileUploadFile = {
    file: File;
    preview?: string;
    progress?: number;
    status?: 'pending' | 'uploading' | 'success' | 'error';
    error?: string;
};
export type FileUploadProps = {
    value?: File[] | FileUploadFile[];
    onChange?: (files: File[] | FileUploadFile[]) => void;
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    maxFiles?: number;
    disabled?: boolean;
    onError?: (error: string) => void;
    showPreview?: boolean;
    showProgress?: boolean;
    className?: string;
    dropzoneClassName?: string;
    placeholder?: string;
    uploadText?: string;
};
declare function FileUpload({ value, onChange, accept, multiple, maxSize, maxFiles, disabled, onError, showPreview, showProgress, className, dropzoneClassName, placeholder, uploadText, }: FileUploadProps): import("react/jsx-runtime").JSX.Element;
export { FileUpload };
//# sourceMappingURL=file-upload.d.ts.map