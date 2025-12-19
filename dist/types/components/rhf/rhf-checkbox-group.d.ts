import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFCheckboxGroupOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
export type RHFCheckboxGroupProps<T extends FieldValues = FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    options: RHFCheckboxGroupOption[];
    label?: string;
    error?: string;
    required?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
    orientation?: 'horizontal' | 'vertical';
};
export declare function RHFCheckboxGroup<T extends FieldValues = FieldValues>({ control, name, options, label, error, required, wrapperClassName, orientation, }: RHFCheckboxGroupProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-checkbox-group.d.ts.map