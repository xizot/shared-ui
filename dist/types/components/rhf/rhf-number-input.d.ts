import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path, UseFormRegister } from 'react-hook-form';
export type RHFNumberInputProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'label' | 'error' | 'required' | 'type'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
};
export declare function RHFNumberInput<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, min, max, step, ...rest }: RHFNumberInputProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-number-input.d.ts.map