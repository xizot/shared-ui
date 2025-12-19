import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFMultiSelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
export type RHFMultiSelectProps<T extends FieldValues = FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    options: RHFMultiSelectOption[];
    label?: string;
    error?: string;
    required?: boolean;
    placeholder?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
};
export declare function RHFMultiSelect<T extends FieldValues = FieldValues>({ control, name, options, label, error, required, placeholder, wrapperClassName, }: RHFMultiSelectProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-multi-select.d.ts.map