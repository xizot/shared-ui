import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SelectProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Select component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Components</CardTitle>
          <CardDescription>Select is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Select</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof SelectPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root select component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SelectTrigger</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof SelectPrimitive.Trigger{' '}
                  {'>'} {'&'} {'{'}{' '}
                  size?: 'sm' | 'default'; label?: string | React.ReactNode; error?: string;
                  required?: boolean{' '}
                  {'}'}
                </TableCell>
                <TableCell>Trigger button with label, error, required support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SelectValue</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof SelectPrimitive.Value{' '}
                  {'>'}
                </TableCell>
                <TableCell>Displays selected value or placeholder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SelectContent</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof SelectPrimitive.Content{' '}
                  {'>'}
                </TableCell>
                <TableCell>Dropdown content container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">SelectItem</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof SelectPrimitive.Item{' '}
                  {'>'}
                </TableCell>
                <TableCell>Individual select option</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

