import * as React from 'react';
interface LoadingStateProps extends React.ComponentProps<'div'> {
    count?: number;
    variant?: 'default' | 'card' | 'list' | 'table';
}
declare function LoadingState({ className, count, variant, ...props }: LoadingStateProps): import("react/jsx-runtime").JSX.Element;
export { LoadingState };
//# sourceMappingURL=loading-state.d.ts.map