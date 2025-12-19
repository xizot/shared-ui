import * as React from 'react';
import { Empty } from './empty';
interface EmptyStateProps extends React.ComponentProps<typeof Empty> {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}
declare function EmptyState({ className, icon, title, description, action, children, ...props }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
export { EmptyState };
//# sourceMappingURL=empty-state.d.ts.map