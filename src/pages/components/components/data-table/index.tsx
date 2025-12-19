import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import { Code } from 'lucide-react';

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
];

export default function DataTableOverview() {
  const columns: ColumnDef<ExampleUser, unknown>[] = [
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
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The DataTable component is a powerful table component built on top of TanStack Table. It
          provides advanced features like sorting, filtering, pagination, and global search out of
          the box.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Displaying large datasets</li>
          <li>Tables that require sorting and filtering</li>
          <li>Data grids with pagination</li>
          <li>Admin panels and dashboards</li>
          <li>Any scenario requiring advanced table functionality</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple data table example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DataTable
            data={exampleUsers}
            columns={columns}
            searchable
            searchPlaceholder="Search users..."
            searchKey="name"
            pagination={{ pageSize: 5 }}
          />
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} DataTable, type ColumnDef {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">{'<'}DataTable</div>
              <div className="ml-8">data={'{'}data{'}'}</div>
              <div className="ml-8">columns={'{'}columns{'}'}</div>
              <div className="ml-8">searchable</div>
              <div className="ml-4">{'/>'}</div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on TanStack Table (formerly React Table)</li>
          <li>Column sorting (ascending/descending)</li>
          <li>Global search/filtering</li>
          <li>Pagination with customizable page size</li>
          <li>Custom cell rendering</li>
          <li>Row click handlers</li>
          <li>Customizable labels for internationalization</li>
          <li>Fully typed with TypeScript</li>
        </ul>
      </div>
    </div>
  );
}

