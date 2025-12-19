import { type DateRangePickerProps } from '@/components/ui/date-range-picker';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFDateRangePickerProps<T extends FieldValues = FieldValues> = Omit<DateRangePickerProps, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string | React.ReactNode;
    required?: boolean;
    error?: string;
    className?: ComponentProps<'div'>['className'];
    callback?: (value: {
        from?: Date;
        to?: Date;
    } | undefined) => void;
};
export declare function RHFDateRangePicker<T extends FieldValues = FieldValues>({ control, name, label, required, error, className, callback, ...dateRangePickerProps }: RHFDateRangePickerProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-date-range-picker.d.ts.map