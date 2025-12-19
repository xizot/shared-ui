import { Button } from './button';
import type { ComponentProps } from 'react';
interface LoadingButtonProps extends ComponentProps<typeof Button> {
    loading?: boolean;
    loadingText?: string;
}
declare function LoadingButton({ className, loading, loadingText, children, disabled, ...props }: LoadingButtonProps): import("react/jsx-runtime").JSX.Element;
export { LoadingButton };
//# sourceMappingURL=loading-button.d.ts.map