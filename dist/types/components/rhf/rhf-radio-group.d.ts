import { RadioGroup } from '@/components/ui/radio-group';
import type { ComponentProps } from 'react';
import type { Control, FieldPathValue, FieldValues, Path } from 'react-hook-form';
export type RHFRadioGroupProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof RadioGroup>, 'onValueChange' | 'value'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    required?: boolean;
    children: React.ReactNode;
    onBeforeChange?: (newValue: string, currentValue: FieldPathValue<T, Path<T>>, onNextAction: () => void) => void;
    callback?: (newValue: string) => void;
};
export declare function RHFRadioGroup<T extends FieldValues = FieldValues>({ control, name, label, required, children, className, callback, onBeforeChange, ...radioGroupProps }: RHFRadioGroupProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-radio-group.d.ts.map