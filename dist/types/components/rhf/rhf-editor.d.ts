import { type EditorProps } from '@/components/ui/editor';
import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFEditorProps<T extends FieldValues = FieldValues> = Omit<EditorProps, 'value' | 'onChange' | 'label' | 'error' | 'required'> & {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    wrapperClassName?: ComponentProps<'div'>['className'];
    required?: boolean;
    callback?: (value: string) => void;
};
export declare function RHFEditor<T extends FieldValues = FieldValues>({ control, name, label, className, wrapperClassName, required, callback, ...editorProps }: RHFEditorProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-editor.d.ts.map