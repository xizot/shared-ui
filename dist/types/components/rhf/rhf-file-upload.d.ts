import { type FileUploadProps } from '@/components/ui/file-upload';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFFileUploadProps<T extends FieldValues = FieldValues> = Omit<FileUploadProps, 'value' | 'onChange' | 'onError'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    error?: string;
    required?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
};
export declare function RHFFileUpload<T extends FieldValues = FieldValues>({ control, name, label, error, required, wrapperClassName, ...fileUploadProps }: RHFFileUploadProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-file-upload.d.ts.map