import { type DateFormat } from '../constants/date-formats';
/**
 * Format currency amount
 * @example formatCurrency(1000000, 'vi-VN', 'VND') // '1.000.000 ₫'
 */
export declare function formatCurrency(amount: number, locale?: string, currency?: string): string;
/**
 * Format date using date-fns format or custom format
 * @example formatDate(new Date(), 'short') // '01/01/2024'
 */
export declare function formatDate(date: Date | string | number, format?: DateFormat | string): string;
/**
 * Format phone number
 * @example formatPhoneNumber('0123456789') // '0123 456 789'
 */
export declare function formatPhoneNumber(phone: string): string;
/**
 * Format file size in bytes to human readable format
 * @example formatFileSize(1024) // '1 KB'
 */
export declare function formatFileSize(bytes: number): string;
/**
 * Truncate text with ellipsis
 * @example truncate('Hello World', 5) // 'Hello...'
 */
export declare function truncate(text: string, maxLength: number, suffix?: string): string;
//# sourceMappingURL=format.d.ts.map