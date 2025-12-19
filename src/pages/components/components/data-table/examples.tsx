import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/lib/toast';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type ExampleUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const exampleUsers: ExampleUser[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
];

export default function DataTableExamples() {
  const basicColumns: ColumnDef<ExampleUser, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
  ];

  const sortableColumns: ColumnDef<ExampleUser, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      enableSorting: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableSorting: true,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      enableSorting: true,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableSorting: true,
    },
  ];

  const customCellColumns: ColumnDef<ExampleUser, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      enableSorting: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableSorting: true,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => (
        <Badge variant={row.original.role === 'Admin' ? 'default' : 'secondary'}>
          {row.original.role}
        </Badge>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge variant={row.original.status === 'Active' ? 'default' : 'outline'}>
          {row.original.status}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Table</CardTitle>
          <CardDescription>Simple table without search or pagination</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={exampleUsers} columns={basicColumns} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Search</CardTitle>
          <CardDescription>Table with global search functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={exampleUsers}
            columns={sortableColumns}
            searchable
            searchPlaceholder="Search users..."
            searchKey="name"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Sorting</CardTitle>
          <CardDescription>Table with sortable columns</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={exampleUsers} columns={sortableColumns} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Cell Rendering</CardTitle>
          <CardDescription>Table with custom cell components (badges)</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={exampleUsers}
            columns={customCellColumns}
            searchable
            searchPlaceholder="Search users..."
            searchKey="name"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Pagination</CardTitle>
          <CardDescription>Table with pagination controls</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={exampleUsers}
            columns={sortableColumns}
            pagination={{ pageSize: 2, showPagination: true }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Row Click Handler</CardTitle>
          <CardDescription>Table with clickable rows</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={exampleUsers}
            columns={sortableColumns}
            onRowClick={(row) => {
              toast.success(`Clicked on ${row.name}`);
            }}
            rowClassName={() => 'cursor-pointer hover:bg-muted/50'}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Column Filters</CardTitle>
          <CardDescription>Table with individual column filters</CardDescription>
        </CardHeader>
        <CardContent>
          <ColumnFilterExample />
        </CardContent>
      </Card>
    </div>
  );
}

function ColumnFilterExample() {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const filterableColumns: ColumnDef<ExampleUser, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      enableSorting: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableSorting: true,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      enableSorting: true,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableSorting: true,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
  ];

  const table = useReactTable({
    data: exampleUsers,
    columns: filterableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const roleFilter = table.getColumn('role')?.getFilterValue() as string[] | undefined;
  const statusFilter = table.getColumn('status')?.getFilterValue() as string[] | undefined;

  const uniqueRoles = Array.from(new Set(exampleUsers.map((user) => user.role)));
  const uniqueStatuses = Array.from(new Set(exampleUsers.map((user) => user.status)));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium mb-2 block">Filter by Role</label>
          <Select
            value={roleFilter?.[0] || 'all'}
            onValueChange={(value) => {
              if (value === 'all') {
                table.getColumn('role')?.setFilterValue(undefined);
              } else {
                table.getColumn('role')?.setFilterValue([value]);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="All roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All roles</SelectItem>
              {uniqueRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium mb-2 block">Filter by Status</label>
          <Select
            value={statusFilter?.[0] || 'all'}
            onValueChange={(value) => {
              if (value === 'all') {
                table.getColumn('status')?.setFilterValue(undefined);
              } else {
                table.getColumn('status')?.setFilterValue([value]);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {uniqueStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={() => {
              table.resetColumnFilters();
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={filterableColumns.length} className="text-center py-8">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {table.getPageCount() > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}{' '}
            to{' '}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length,
            )}{' '}
            of {table.getFilteredRowModel().rows.length} results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <div className="text-sm">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

