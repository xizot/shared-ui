import { type ColumnDef, type FilterFn } from '@tanstack/react-table';
interface DataTableProps<T extends Record<string, unknown>> {
    data: T[];
    columns: ColumnDef<T, unknown>[];
    searchable?: boolean;
    searchPlaceholder?: string;
    searchKey?: keyof T | string;
    pagination?: {
        pageSize?: number;
        showPagination?: boolean;
    };
    emptyMessage?: string;
    className?: string;
    enableGlobalFilter?: boolean;
    globalFilterFn?: FilterFn<T>;
    onRowClick?: (row: T) => void;
    rowClassName?: (row: T) => string;
    labels?: {
        previous?: string;
        next?: string;
        showing?: string;
        to?: string;
        of?: string;
        results?: string;
        page?: string;
    };
}
declare function DataTable<T extends Record<string, unknown>>({ data, columns, searchable, searchPlaceholder, searchKey, pagination, emptyMessage, className, enableGlobalFilter, globalFilterFn, onRowClick, rowClassName, labels, }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
export type { ColumnDef } from '@tanstack/react-table';
export { DataTable };
//# sourceMappingURL=data-table.d.ts.map