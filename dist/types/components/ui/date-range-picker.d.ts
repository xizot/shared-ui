import { type Locale } from 'date-fns';
import * as React from 'react';
import type { DateRange, DayPickerRangeProps } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { PopoverContent } from '@/components/ui/popover';
import { type FormSize } from '@/constants/form-sizes';
import type { ComponentProps } from 'react';
export type DateRangePreset = {
    label: string;
    range: DateRange;
};
export type DateRangePickerProps = Omit<DayPickerRangeProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: {
        from?: string;
        to?: string;
    };
    dateFormat?: string;
    presets?: DateRangePreset[];
    showPresets?: boolean;
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    onDisabled?: (date: Date) => boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
    locale?: string | Locale;
    cancelText?: string;
    applyText?: string;
};
declare function DateRangePicker({ value, onChange, placeholder, dateFormat, presets, showPresets, label, error, required, disabled, disabledPast, disabledFuture, onDisabled, size, className, triggerClassName, popoverClassName, locale, cancelText, applyText, ...calendarProps }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export { DateRangePicker };
//# sourceMappingURL=date-range-picker.d.ts.map