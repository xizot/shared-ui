import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CheckboxProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Checkbox component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>
            Checkbox component extends Radix UI Checkbox props
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
                <TableCell className="font-mono font-medium">checked</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled checked state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">defaultChecked</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Uncontrolled default checked state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable the checkbox</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onCheckedChange</TableCell>
                <TableCell className="font-mono text-sm">(checked: boolean) ={'>'} void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when checked state changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">id</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Checkbox ID for label association</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

