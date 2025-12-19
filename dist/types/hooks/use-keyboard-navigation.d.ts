import * as React from 'react';
type NavigationDirection = 'horizontal' | 'vertical' | 'both';
interface UseKeyboardNavigationOptions {
    direction?: NavigationDirection;
    loop?: boolean;
    onNavigate?: (index: number) => void;
}
export declare function useKeyboardNavigation(itemCount: number, options?: UseKeyboardNavigationOptions): {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    handleKeyDown: (e: React.KeyboardEvent) => void;
};
export {};
//# sourceMappingURL=use-keyboard-navigation.d.ts.map