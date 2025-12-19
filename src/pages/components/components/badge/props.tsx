import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function BadgeProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Badge component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Badge component props</CardDescription>
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
                <TableCell className="font-mono font-medium">variant</TableCell>
                <TableCell className="font-mono text-sm">
                  "default" | "secondary" | "destructive" | "outline"
                </TableCell>
                <TableCell className="font-mono text-sm">"default"</TableCell>
                <TableCell>Visual style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All standard div HTML attributes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

