import * as React from 'react';
interface GridProps extends React.ComponentProps<'div'> {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
    responsive?: {
        sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    };
}
declare function Grid({ className, cols, gap, responsive, ...props }: GridProps): import("react/jsx-runtime").JSX.Element;
export { Grid };
//# sourceMappingURL=grid.d.ts.map