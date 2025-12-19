export type TimeValue = {
    hour: string;
    minute: string;
    second: string;
};
export type TimePickerProps = {
    value: TimeValue;
    onChange: (value: TimeValue) => void;
    showSeconds?: boolean;
    className?: string;
};
declare function TimePicker({ value, onChange, showSeconds, className }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
export { TimePicker };
//# sourceMappingURL=time-picker.d.ts.map