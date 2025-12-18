import * as React from "react";
interface InputProps extends Omit<React.ComponentProps<"input">, "type"> {
    label?: string | React.ReactNode;
    error?: string;
    required?: boolean;
    type?: React.ComponentProps<"input">["type"];
}
declare function Input({ className, type, label, error, required, id, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export { Input };
//# sourceMappingURL=input.d.ts.map