import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function StackProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">Complete reference for Stack component props and types.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Stack component extends standard div HTML attributes</CardDescription>
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
                <TableCell className="font-mono font-medium">direction</TableCell>
                <TableCell className="font-mono text-sm">'row' | 'column'</TableCell>
                <TableCell className="font-mono text-sm">'column'</TableCell>
                <TableCell>Stack direction (flex direction)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">spacing</TableCell>
                <TableCell className="font-mono text-sm">0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12</TableCell>
                <TableCell className="font-mono text-sm">2</TableCell>
                <TableCell>Gap spacing between items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">align</TableCell>
                <TableCell className="font-mono text-sm">'start' | 'center' | 'end' | 'stretch'</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Cross-axis alignment (align-items)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">justify</TableCell>
                <TableCell className="font-mono text-sm">
                  'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Main-axis justification (justify-content)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">wrap</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Enable flex wrap</TableCell>
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

