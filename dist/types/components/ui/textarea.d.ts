import * as React from "react";
interface TextareaProps extends React.ComponentProps<"textarea"> {
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
}
declare function Textarea({ className, label, error, required, id, ...props }: TextareaProps): import("react/jsx-runtime").JSX.Element;
export { Textarea };
//# sourceMappingURL=textarea.d.ts.map