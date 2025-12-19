import * as React from 'react';
import { Button } from '@/components/ui/button';
import { PopoverContent } from '@/components/ui/popover';
import { type FormSize } from '@/constants/form-sizes';
import type { ComponentProps } from 'react';
type MultipleComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};
type MultipleComboboxValue = string[];
type MultipleComboboxOnChange<T extends MultipleComboboxBaseOption> = (values: MultipleComboboxValue, options: T[] | undefined) => void;
type MultipleComboboxProps<TOptions extends readonly MultipleComboboxBaseOption[]> = {
    options: TOptions;
    value?: MultipleComboboxValue;
    onChange?: MultipleComboboxOnChange<TOptions[number]>;
    autoResize?: boolean;
    limitTags?: number;
    showCode?: boolean;
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: FormSize;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};
declare function MultipleCombobox<TOptions extends readonly MultipleComboboxBaseOption[]>({ options, value, onChange, autoResize, limitTags, showCode, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, className, triggerClassName, popoverClassName, }: MultipleComboboxProps<TOptions>): import("react/jsx-runtime").JSX.Element;
export { MultipleCombobox, type MultipleComboboxBaseOption, type MultipleComboboxOnChange, type MultipleComboboxProps, type MultipleComboboxValue };
//# sourceMappingURL=multiple-combobox.d.ts.map