import * as React from 'react';
import { type FormSize } from '@/constants/form-sizes';
interface TextareaProps extends React.ComponentProps<'textarea'> {
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    size?: FormSize;
}
declare function Textarea({ className, label, error, required, id, size, ...props }: TextareaProps): import("react/jsx-runtime").JSX.Element;
export { Textarea };
//# sourceMappingURL=textarea.d.ts.map