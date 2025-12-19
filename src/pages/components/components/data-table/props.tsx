import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DataTableProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for DataTable component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>
            DataTable component props (built on TanStack Table)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">data</TableCell>
                <TableCell className="font-mono text-sm">T[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Array of data objects to display in the table</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">columns</TableCell>
                <TableCell className="font-mono text-sm">ColumnDef{'<'}{' '}T, unknown{' '}
                  {'>'}[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Column definitions from TanStack Table. Each column can have sorting, filtering,
                  and custom cell rendering.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">searchable</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Enable global search input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">searchPlaceholder</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Search..."</TableCell>
                <TableCell>Placeholder text for search input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">searchKey</TableCell>
                <TableCell className="font-mono text-sm">keyof T | string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Key to search in data objects. Used when searchable is true.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">pagination</TableCell>
                <TableCell className="font-mono text-sm">
                  {'{'}{' '}
                  pageSize?: number; showPagination?: boolean{' '}
                  {'}'}
                </TableCell>
                <TableCell className="font-mono text-sm">{'{'} pageSize: 10, showPagination: true {'}'}</TableCell>
                <TableCell>Pagination configuration</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">emptyMessage</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"No data available"</TableCell>
                <TableCell>Message to display when table is empty</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">enableGlobalFilter</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Enable TanStack Table global filter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">globalFilterFn</TableCell>
                <TableCell className="font-mono text-sm">FilterFn{'<'}{' '}T{' '}
                  {'>'} | undefined</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Custom filter function for global search</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onRowClick</TableCell>
                <TableCell className="font-mono text-sm">(row: T) ={'>'} void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback function called when a row is clicked</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">rowClassName</TableCell>
                <TableCell className="font-mono text-sm">(row: T) ={'>'} string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Function to generate custom className for each row</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">labels</TableCell>
                <TableCell className="font-mono text-sm">
                  {'{'}{' '}
                  previous?: string; next?: string; showing?: string; to?: string; of?: string;
                  results?: string; page?: string{' '}
                  {'}'}
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Custom labels for pagination (useful for internationalization)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for the table container</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ColumnDef</CardTitle>
          <CardDescription>
            Column definition structure (from TanStack Table)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">accessorKey</TableCell>
                <TableCell className="font-mono text-sm">keyof T</TableCell>
                <TableCell>Key to access data from row object</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">header</TableCell>
                <TableCell className="font-mono text-sm">string | React.ReactNode</TableCell>
                <TableCell>Column header text or component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">enableSorting</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell>Enable sorting for this column</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">cell</TableCell>
                <TableCell className="font-mono text-sm">
                  (info: {'{'}{' '}
                  row: Row{'<'}{' '}
                  T{' '}
                  {'>'} {'}'}) ={'>'} React.ReactNode
                </TableCell>
                <TableCell>Custom cell renderer function</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

