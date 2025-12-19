import * as React from 'react';
interface StackProps extends React.ComponentProps<'div'> {
    direction?: 'row' | 'column';
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    wrap?: boolean;
}
declare function Stack({ className, direction, spacing, align, justify, wrap, ...props }: StackProps): import("react/jsx-runtime").JSX.Element;
export { Stack };
//# sourceMappingURL=stack.d.ts.map