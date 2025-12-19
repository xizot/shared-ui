import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFUploadProps<T extends FieldValues = FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    error?: string;
    required?: boolean;
    accept?: string;
    multiple?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
    className?: ComponentProps<'input'>['className'];
};
export declare function RHFUpload<T extends FieldValues = FieldValues>({ control, name, label, error, required, accept, multiple, wrapperClassName, className, }: RHFUploadProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-upload.d.ts.map