import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { Control } from 'react-hook-form';
import { ControllerProps } from 'react-hook-form';
import { DateRange } from 'react-day-picker';
import { DayPickerRangeProps } from 'react-day-picker';
import { DayPickerSingleProps } from 'react-day-picker';
import { default as default_2 } from 'react-quill-new';
import { FieldError } from 'react-hook-form';
import { FieldPath } from 'react-hook-form';
import { FieldPathValue } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';
import { JSX } from 'react/jsx-runtime';
import type * as LabelPrimitive from '@radix-ui/react-label';
import { Locale } from 'date-fns';
import { Path } from 'react-hook-form';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React_2 from 'react';
import { Slot } from '@radix-ui/react-slot';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { UseFormRegister } from 'react-hook-form';
import { VariantProps } from 'class-variance-authority';

declare function Button({ className, variant, size, asChild, ...props }: React_2.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "2xl" | "icon" | "icon-xxs" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "icon-xxl" | null | undefined;
} & ClassProp) | undefined) => string;

declare function Combobox<TOptions extends readonly ComboboxBaseOption[]>({ options, value, onChange, label, error, required, placeholder, searchPlaceholder, emptyMessage, disabled, readonly, size, showClearIcon, showArrowIcon, suffix, className, triggerClassName, popoverClassName, }: ComboboxProps<TOptions>): JSX.Element;

export declare type ComboboxBaseOption = {
    id: string;
    code?: string | number;
    name: string;
    disabled?: boolean;
};

declare type ComboboxOnChange<T extends ComboboxBaseOption> = (value: string, option: T | undefined) => void;

export declare type ComboboxOption = ComboboxBaseOption;

declare type ComboboxProps<TOptions extends readonly ComboboxBaseOption[]> = {
    options: TOptions;
    value?: ComboboxValue;
    onChange?: ComboboxOnChange<TOptions[number]>;
    label?: string | React_2.ReactNode;
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
    suffix?: React_2.ReactNode;
    className?: ComponentProps<'div'>['className'];
    triggerClassName?: ComponentProps<typeof Button>['className'];
    popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};

declare type ComboboxValue = string | number;

declare type DatePickerProps = Omit<DayPickerSingleProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    dateFormat?: string;
    showTime?: boolean;
    timeOnly?: boolean;
    mode?: 'single' | 'month';
    label?: string | React_2.ReactNode;
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
    monthNames?: string[];
};

declare type DateRangePickerProps = Omit<DayPickerRangeProps, 'selected' | 'onSelect' | 'mode' | 'required'> & {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: {
        from?: string;
        to?: string;
    };
    dateFormat?: string;
    presets?: DateRangePreset[];
    showPresets?: boolean;
    label?: string | React_2.ReactNode;
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

declare type DateRangePreset = {
    label: string;
    range: DateRange;
};

declare interface EditorProps extends Omit<ReactQuillProps, 'modules' | 'formats'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    size?: FormSize;
    modules?: ReactQuillProps['modules'];
    formats?: string[];
}

declare type FileUploadFile = {
    file: File;
    preview?: string;
    progress?: number;
    status?: 'pending' | 'uploading' | 'success' | 'error';
    error?: string;
};

declare type FileUploadProps = {
    value?: File[] | FileUploadFile[];
    onChange?: (files: File[] | FileUploadFile[]) => void;
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    maxFiles?: number;
    disabled?: boolean;
    onError?: (error: string) => void;
    showPreview?: boolean;
    showProgress?: boolean;
    className?: string;
    dropzoneClassName?: string;
    placeholder?: string;
    uploadText?: string;
};

export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React_2.JSX.Element;

export declare type FormatType = 'text' | 'integer' | 'decimal' | 'currency';

export declare function FormControl({ ...props }: React_2.ComponentProps<typeof Slot>): JSX.Element;

export declare function FormDescription({ className, ...props }: React_2.ComponentProps<'p'>): JSX.Element;

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => JSX.Element;

export declare function FormItem({ className, ...props }: React_2.ComponentProps<'div'>): JSX.Element;

export declare function FormLabel({ className, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element;

export declare function FormMessage({ className, ...props }: React_2.ComponentProps<'p'>): JSX.Element | null;

declare type FormSize = VariantProps<typeof formSizeVariants>['size'];

/**
 * Form component size variants
 * All form components should use these sizes for consistency
 */
declare const formSizeVariants: (props?: ({
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null | undefined;
} & ClassProp) | undefined) => string;

declare function Input({ className, type, label, error, required, id, size, ...props }: InputProps): JSX.Element;

declare interface InputProps extends Omit<React_2.ComponentProps<'input'>, 'type' | 'size'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    type?: React_2.ComponentProps<'input'>['type'];
    size?: FormSize;
}

declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Content>): JSX.Element;

declare function RadioGroup({ className, ...props }: React_2.ComponentProps<typeof RadioGroupPrimitive.Root>): JSX.Element;

declare type ReactQuillProps = React_2.ComponentProps<typeof default_2>;

export declare function RHFCheckboxGroup<T extends FieldValues = FieldValues>({ control, name, options, label, error, required, wrapperClassName, orientation, }: RHFCheckboxGroupProps<T>): JSX.Element;

export declare type RHFCheckboxGroupOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export declare type RHFCheckboxGroupProps<T extends FieldValues = FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    options: RHFCheckboxGroupOption[];
    label?: string;
    error?: string;
    required?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
    orientation?: 'horizontal' | 'vertical';
};

export declare function RHFCombobox<T extends FieldValues = FieldValues>({ control, name, label, required, callback, className, ...comboboxProps }: RHFComboboxProps<T>): JSX.Element;

export declare type RHFComboboxProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Combobox>, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    required?: boolean;
    callback?: (newValue: string, newOption: ComboboxOption | undefined) => void;
};

export declare function RHFDatePicker<T extends FieldValues = FieldValues>({ control, name, label, required, error, className, callback, ...datePickerProps }: RHFDatePickerProps<T>): JSX.Element;

export declare type RHFDatePickerProps<T extends FieldValues = FieldValues> = Omit<DatePickerProps, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string | React.ReactNode;
    required?: boolean;
    error?: string;
    className?: ComponentProps<'div'>['className'];
    callback?: (value: Date | undefined) => void;
};

export declare function RHFDateRangePicker<T extends FieldValues = FieldValues>({ control, name, label, required, error, className, callback, ...dateRangePickerProps }: RHFDateRangePickerProps<T>): JSX.Element;

export declare type RHFDateRangePickerProps<T extends FieldValues = FieldValues> = Omit<DateRangePickerProps, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
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

export declare function RHFEditor<T extends FieldValues = FieldValues>({ control, name, label, className, wrapperClassName, required, callback, ...editorProps }: RHFEditorProps<T>): JSX.Element;

export declare type RHFEditorProps<T extends FieldValues = FieldValues> = Omit<EditorProps, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
    callback?: (value: string) => void;
};

export declare function RHFErrorMessage<T extends FieldValues = FieldValues>({ name, control, }: RHFErrorMessageProps<T>): JSX.Element;

export declare type RHFErrorMessageProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    showErrorWithTooltip?: boolean;
};

export declare function RHFFileUpload<T extends FieldValues = FieldValues>({ control, name, label, error, required, wrapperClassName, ...fileUploadProps }: RHFFileUploadProps<T>): JSX.Element;

export declare type RHFFileUploadProps<T extends FieldValues = FieldValues> = Omit<FileUploadProps, 'value' | 'onChange' | 'onError'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    error?: string;
    required?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
};

export declare function RHFFormattedInput<T extends FieldValues = FieldValues>({ control, name, label, format, required, wrapperClassName, callback, ...inputProps }: RHFFormattedInputProps<T>): JSX.Element;

export declare type RHFFormattedInputProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'value' | 'onChange' | 'type' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    format?: FormatType;
    required?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
    callback?: (value: string) => void;
};

export declare function RHFInput<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, ...rest }: RHFInputProps<T>): JSX.Element;

export declare type RHFInputProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
};

export declare function RHFMultiSelect<T extends FieldValues = FieldValues>({ control, name, options, label, error, required, placeholder, wrapperClassName, }: RHFMultiSelectProps<T>): JSX.Element;

export declare type RHFMultiSelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export declare type RHFMultiSelectProps<T extends FieldValues = FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    options: RHFMultiSelectOption[];
    label?: string;
    error?: string;
    required?: boolean;
    placeholder?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
};

export declare function RHFNumberInput<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, min, max, step, ...rest }: RHFNumberInputProps<T>): JSX.Element;

export declare type RHFNumberInputProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'label' | 'error' | 'required' | 'type'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
};

export declare function RHFRadioGroup<T extends FieldValues = FieldValues>({ control, name, label, required, children, className, callback, onBeforeChange, ...radioGroupProps }: RHFRadioGroupProps<T>): JSX.Element;

export declare type RHFRadioGroupProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof RadioGroup>, 'onValueChange' | 'value'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    required?: boolean;
    children: React.ReactNode;
    onBeforeChange?: (newValue: string, currentValue: FieldPathValue<T, Path<T>>, onNextAction: () => void) => void;
    callback?: (newValue: string) => void;
};

export declare function RHFSwitch<T extends FieldValues = FieldValues>({ control, name, label, required, callback, onBeforeChange, className, ...switchProps }: RHFSwitchProps<T>): JSX.Element;

export declare type RHFSwitchProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Switch>, 'checked' | 'onCheckedChange'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    required?: boolean;
    onBeforeChange?: (newValue: boolean, currentValue: FieldPathValue<T, Path<T>>, onNextAction: () => void) => void;
    callback?: (newValue: boolean) => void;
};

export declare function RHFTextArea<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, showMaxLength, maxLength, rows, ...rest }: RHFTextAreaProps<T>): JSX.Element;

export declare type RHFTextAreaProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Textarea>, 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
    showMaxLength?: boolean;
};

export declare function RHFTimePicker<T extends FieldValues = FieldValues>({ control, register, name, label, placeholder, className, wrapperClassName, required, ...rest }: RHFTimePickerProps<T>): JSX.Element;

export declare type RHFTimePickerProps<T extends FieldValues = FieldValues> = Omit<ComponentProps<typeof Input>, 'label' | 'error' | 'required' | 'type'> & {
    control: Control<T>;
    name: Path<T>;
    register: UseFormRegister<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
};

export declare function RHFUpload<T extends FieldValues = FieldValues>({ control, name, label, error, required, accept, multiple, wrapperClassName, className, }: RHFUploadProps<T>): JSX.Element;

export declare type RHFUploadProps<T extends FieldValues = FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    error?: string;
    required?: boolean;
    accept?: string;
    multiple?: boolean;
    wrapperClassName?: ComponentProps<'div'>['className'];
    className?: ComponentProps<'input'>['className'];
};

declare function Switch({ className, size, ...props }: React_2.ComponentProps<typeof SwitchPrimitive.Root> & {
    size?: FormSize;
}): JSX.Element;

declare function Textarea({ className, label, error, required, id, size, ...props }: TextareaProps): JSX.Element;

declare interface TextareaProps extends React_2.ComponentProps<'textarea'> {
    label?: string | React_2.ReactNode;
    error?: string;
    required?: boolean;
    size?: FormSize;
}

export declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};

export { }
