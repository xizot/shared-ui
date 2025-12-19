import * as React from 'react';
interface ContainerProps extends React.ComponentProps<'div'> {
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}
declare function Container({ className, maxWidth, ...props }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export { Container };
//# sourceMappingURL=container.d.ts.map