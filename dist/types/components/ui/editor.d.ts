import * as React from 'react';
import ReactQuillComponent from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
type ReactQuillProps = React.ComponentProps<typeof ReactQuillComponent>;
import { type FormSize } from '@/constants/form-sizes';
export interface EditorProps extends Omit<ReactQuillProps, 'modules' | 'formats'> {
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    size?: FormSize;
    modules?: ReactQuillProps['modules'];
    formats?: string[];
}
declare function Editor({ className, label, error, required, id, size, modules, formats, placeholder, value, onChange, readOnly, ...props }: EditorProps): import("react/jsx-runtime").JSX.Element;
export { Editor };
//# sourceMappingURL=editor.d.ts.map