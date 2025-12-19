import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SeparatorProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Separator component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Separator Props</CardTitle>
          <CardDescription>Separator component props</CardDescription>
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
                <TableCell className="font-mono font-medium">orientation</TableCell>
                <TableCell className="font-mono text-sm">"horizontal" | "vertical"</TableCell>
                <TableCell className="font-mono text-sm">"horizontal"</TableCell>
                <TableCell>Separator orientation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">decorative</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>
                  Whether separator is decorative (not announced by screen readers)
                </TableCell>
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

