import { type Locale } from 'date-fns';
export type MonthPickerProps = {
    value?: Date;
    onChange: (date: Date | undefined) => void;
    locale?: string | Locale;
    monthNames?: string[];
    disabled?: (date: Date) => boolean;
    className?: string;
};
declare function MonthPicker({ value, onChange, locale, monthNames, disabled, className, }: MonthPickerProps): import("react/jsx-runtime").JSX.Element;
export { MonthPicker };
//# sourceMappingURL=month-picker.d.ts.map