import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AlertProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Alert component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alert Components</CardTitle>
          <CardDescription>Alert is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Alert</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Main alert container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AlertTitle</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Alert title text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AlertDescription</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Alert description text</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

