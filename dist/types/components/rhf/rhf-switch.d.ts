import { Switch } from '@/components/ui/switch';
import type { ComponentProps } from 'react';
import type { Control, FieldPathValue, FieldValues, Path } from 'react-hook-form';
export type RHFSwitchProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Switch>, 'checked' | 'onCheckedChange'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    required?: boolean;
    onBeforeChange?: (newValue: boolean, currentValue: FieldPathValue<T, Path<T>>, onNextAction: () => void) => void;
    callback?: (newValue: boolean) => void;
};
export declare function RHFSwitch<T extends FieldValues = FieldValues>({ control, name, label, required, callback, onBeforeChange, className, ...switchProps }: RHFSwitchProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-switch.d.ts.map