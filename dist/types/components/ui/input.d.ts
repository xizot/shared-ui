import * as React from 'react';
import { type FormSize } from '@/constants/form-sizes';
interface InputProps extends Omit<React.ComponentProps<'input'>, 'type' | 'size'> {
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    type?: React.ComponentProps<'input'>['type'];
    size?: FormSize;
}
declare function Input({ className, type, label, error, required, id, size, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export { Input };
//# sourceMappingURL=input.d.ts.map