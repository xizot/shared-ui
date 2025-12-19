import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path, UseFormRegister } from 'react-hook-form';
export type RHFInputProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
};
export declare function RHFInput<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, ...rest }: RHFInputProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-input.d.ts.map