import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DividerProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">Complete reference for Divider component props and types.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Divider component extends Separator props</CardDescription>
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
                <TableCell className="font-mono font-medium">label</TableCell>
                <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Label text or content to display in the divider</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">labelPosition</TableCell>
                <TableCell className="font-mono text-sm">'left' | 'center' | 'right'</TableCell>
                <TableCell className="font-mono text-sm">'center'</TableCell>
                <TableCell>Position of the label</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">orientation</TableCell>
                <TableCell className="font-mono text-sm">'horizontal' | 'vertical'</TableCell>
                <TableCell className="font-mono text-sm">'horizontal'</TableCell>
                <TableCell>Divider orientation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">SeparatorProps</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All Separator component props</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

