import * as React from 'react';
type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;
export declare function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>, () => void];
export {};
//# sourceMappingURL=use-session-storage.d.ts.map