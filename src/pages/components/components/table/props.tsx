import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TableProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Table component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Table Components</CardTitle>
          <CardDescription>Table is composed of multiple sub-components</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Props</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">Table</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'table'{' '}
                  {'>'}</TableCell>
                <TableCell>Root table container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TableHeader</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'thead'{' '}
                  {'>'}</TableCell>
                <TableCell>Table header section</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TableBody</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'tbody'{' '}
                  {'>'}</TableCell>
                <TableCell>Table body section</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TableFooter</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'tfoot'{' '}
                  {'>'}</TableCell>
                <TableCell>Table footer section</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TableRow</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'tr'{' '}
                  {'>'}</TableCell>
                <TableCell>Table row</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TableHead</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'th'{' '}
                  {'>'}</TableCell>
                <TableCell>Table header cell</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TableCell</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'td'{' '}
                  {'>'}</TableCell>
                <TableCell>Table data cell</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Props</CardTitle>
          <CardDescription>All components accept standard HTML props</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            All Table sub-components accept standard HTML element props (className, style, etc.)
            and can be customized with Tailwind CSS classes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

