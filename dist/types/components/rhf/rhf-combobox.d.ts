import { Combobox, type ComboboxOption } from '@/components/ui/combobox';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type { ComboboxBaseOption } from '@/components/ui/combobox';
export type RHFComboboxProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Combobox>, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    required?: boolean;
    callback?: (newValue: string, newOption: ComboboxOption | undefined) => void;
};
export declare function RHFCombobox<T extends FieldValues = FieldValues>({ control, name, label, required, callback, className, ...comboboxProps }: RHFComboboxProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-combobox.d.ts.map