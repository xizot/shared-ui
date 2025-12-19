import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type FormatType = 'text' | 'integer' | 'decimal' | 'currency';
export type RHFFormattedInputProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'value' | 'onChange' | 'type' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    format?: FormatType;
    required?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
    callback?: (value: string) => void;
};
export declare function RHFFormattedInput<T extends FieldValues = FieldValues>({ control, name, label, format, required, wrapperClassName, callback, ...inputProps }: RHFFormattedInputProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-formatted-input.d.ts.map