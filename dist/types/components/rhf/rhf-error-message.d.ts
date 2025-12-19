import type { Control, FieldValues, Path } from 'react-hook-form';
export type RHFErrorMessageProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    showErrorWithTooltip?: boolean;
};
export declare function RHFErrorMessage<T extends FieldValues = FieldValues>({ name, control, }: RHFErrorMessageProps<T>): any;
//# sourceMappingURL=rhf-error-message.d.ts.map