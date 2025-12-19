import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function GridProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">Complete reference for Grid component props and types.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Grid component extends standard div HTML attributes</CardDescription>
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
                <TableCell className="font-mono font-medium">cols</TableCell>
                <TableCell className="font-mono text-sm">1 | 2 | 3 | 4 | 5 | 6 | 12</TableCell>
                <TableCell className="font-mono text-sm">1</TableCell>
                <TableCell>Number of columns</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">gap</TableCell>
                <TableCell className="font-mono text-sm">0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12</TableCell>
                <TableCell className="font-mono text-sm">4</TableCell>
                <TableCell>Gap between grid items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">responsive</TableCell>
                <TableCell className="font-mono text-sm">
                  {'{'} sm?: 1|2|3|4|5|6|12, md?: 1|2|3|4|5|6|12, lg?: 1|2|3|4|5|6|12, xl?:
                  1|2|3|4|5|6|12 {'}'}
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Responsive column configurations for different breakpoints</TableCell>
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

