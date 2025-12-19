import * as React from 'react';
type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;
export declare function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>, () => void];
export {};
//# sourceMappingURL=use-local-storage.d.ts.map