import * as React from 'react';
import { Button } from '@/components/ui/button';
import { PopoverContent } from '@/components/ui/popover';
import { type FormSize } from '@/constants/form-sizes';
import type { ComponentProps } from 'react';
type ComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};
type ComboboxValue = string | number;
type ComboboxOnChange<T extends ComboboxBaseOption> = (value: string, option: T | undefined) => void;
type ComboboxProps<TOptions extends readonly ComboboxBaseOption[]> = {
    options: TOptions;
    value?: ComboboxValue;
    onChange?: ComboboxOnChange<TOptions[number]>;
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: FormSize;
    showClearIcon?: boolean;
    showArrowIcon?: boolean;
    suffix?: React.ReactNode;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};
type ComboboxOption = ComboboxBaseOption;
declare function Combobox<TOptions extends readonly ComboboxBaseOption[]>({ options, value, onChange, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, showClearIcon, showArrowIcon, suffix, className, triggerClassName, popoverClassName, }: ComboboxProps<TOptions>): import("react/jsx-runtime").JSX.Element;
export { Combobox, type ComboboxBaseOption, type ComboboxOnChange, type ComboboxOption, type ComboboxProps, type ComboboxValue };
//# sourceMappingURL=combobox.d.ts.map