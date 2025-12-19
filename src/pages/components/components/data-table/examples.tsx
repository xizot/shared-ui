import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import { toast } from '@/lib/toast';

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
    </div>
  );
}

