import * as React from 'react';
import { Separator } from './separator';
interface DividerProps extends React.ComponentProps<typeof Separator> {
    label?: React.ReactNode;
    labelPosition?: 'left' | 'center' | 'right';
}
declare function Divider({ className, label, labelPosition, orientation, ...props }: DividerProps): import("react/jsx-runtime").JSX.Element;
export { Divider };
//# sourceMappingURL=divider.d.ts.map