import { cn } from '@/lib/utils';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type HeaderGroup,
  type Row,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { Input } from './input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

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

function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  searchable = false,
  searchPlaceholder,
  searchKey,
  pagination = { pageSize: 10, showPagination: true },
  emptyMessage,
  className,
  enableGlobalFilter = true,
  globalFilterFn,
  onRowClick,
  rowClassName,
  labels,
}: DataTableProps<T>) {
  const {
    previous = 'Previous',
    next = 'Next',
    showing = 'Showing',
    to = 'to',
    of = 'of',
    results = 'results',
    page = 'Page',
  } = labels || {};
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = React.useState('');

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getRowId: (row, index) => {
      // Try to use 'id' field from row, fallback to index if not available
      if ('id' in row && row.id != null) {
        return String(row.id);
      }
      // Fallback to index as string
      return String(index);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn:
      globalFilterFn ||
      ((row, _columnId, filterValue) => {
        if (!searchKey) {
          // Search all columns
          return Object.values(row.original).some((value) =>
            String(value).toLowerCase().includes(String(filterValue).toLowerCase()),
          );
        }
        // Search specific column
        const value = row.original[searchKey as keyof T];
        return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
      }),
    enableGlobalFilter: searchable && enableGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter: searchable ? globalFilter : undefined,
    },
    initialState: {
      pagination: {
        pageSize: pagination.pageSize || 10,
      },
    },
  });

  return (
    <div className={cn('space-y-4', className)}>
      {searchable && (
        <Input
          placeholder={searchPlaceholder || 'Search...'}
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const isSorted = header.column.getIsSorted();

                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center gap-2">
                          <div
                            className={cn(
                              canSort && 'cursor-pointer select-none hover:text-foreground',
                            )}
                            onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </div>
                          {canSort && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-4 w-4"
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {isSorted === 'asc' ? (
                                <ArrowUp className="size-3.5 text-primary" />
                              ) : isSorted === 'desc' ? (
                                <ArrowDown className="size-3.5 text-primary" />
                              ) : (
                                <ArrowUpDown className="size-3.5" />
                              )}
                            </Button>
                          )}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: Row<T>) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={cn(
                    onRowClick && 'cursor-pointer',
                    rowClassName && rowClassName(row.original),
                  )}
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell: Cell<T, unknown>) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={table.getAllColumns().length} className="text-center py-8">
                  {emptyMessage || 'No data available'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {pagination.showPagination && table.getPageCount() > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {showing}{' '}
            {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} {to}{' '}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length,
            )}{' '}
            {of} {table.getFilteredRowModel().rows.length} {results}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="h-4 w-4" />
              {previous}
            </Button>
            <div className="text-sm">
              {page} {table.getState().pagination.pageIndex + 1} {of} {table.getPageCount()}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {next}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export type { ColumnDef } from '@tanstack/react-table';
export { DataTable };

