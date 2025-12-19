import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Get nested object property by path string
 * @example get({ user: { name: 'John' } }, 'user.name') // 'John'
 */
export declare function get<T = unknown>(obj: unknown, path: string): T | undefined;
/**
 * Check if value exists (not null, undefined, or empty string)
 */
export declare function hasValue(value: unknown): boolean;
//# sourceMappingURL=utils.d.ts.map