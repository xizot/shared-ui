import { Textarea } from '@/components/ui/textarea';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path, UseFormRegister } from 'react-hook-form';
export type RHFTextAreaProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Textarea>, 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
    showMaxLength?: boolean;
};
export declare function RHFTextArea<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, showMaxLength, maxLength, rows, ...rest }: RHFTextAreaProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-textarea.d.ts.map