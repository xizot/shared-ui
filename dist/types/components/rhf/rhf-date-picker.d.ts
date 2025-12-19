import { type DatePickerProps } from '@/components/ui/date-picker';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFDatePickerProps<T extends FieldValues = FieldValues> = Omit<DatePickerProps, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string | React.ReactNode;
    required?: boolean;
    error?: string;
    className?: ComponentProps<'div'>['className'];
    callback?: (value: Date | undefined) => void;
};
export declare function RHFDatePicker<T extends FieldValues = FieldValues>({ control, name, label, required, error, className, callback, ...datePickerProps }: RHFDatePickerProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-date-picker.d.ts.map