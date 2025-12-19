import * as React from 'react';
import { Badge } from './badge';
type StatusType = 'success' | 'error' | 'warning' | 'info' | 'pending' | 'default';
interface StatusBadgeProps extends React.ComponentProps<typeof Badge> {
    status: StatusType;
    label?: string;
}
declare function StatusBadge({ className, status, label, ...props }: StatusBadgeProps): import("react/jsx-runtime").JSX.Element;
export { StatusBadge, type StatusType };
//# sourceMappingURL=status-badge.d.ts.map