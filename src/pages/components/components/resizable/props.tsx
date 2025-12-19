import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ResizableProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Resizable component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ResizablePanelGroup Props</CardTitle>
          <CardDescription>Panel group container props</CardDescription>
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
                <TableCell className="font-mono text-sm">'horizontal' | 'vertical'</TableCell>
                <TableCell className="font-mono text-sm">'horizontal'</TableCell>
                <TableCell>Layout direction of panels</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">GroupProps</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All react-resizable-panels Group props</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ResizablePanel Props</CardTitle>
          <CardDescription>Individual panel props</CardDescription>
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
                <TableCell className="font-mono font-medium">defaultSize</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Default size percentage (0-100)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">minSize</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Minimum size percentage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">maxSize</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Maximum size percentage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">PanelProps</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All react-resizable-panels Panel props</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ResizableHandle Props</CardTitle>
          <CardDescription>Resize handle props</CardDescription>
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
                <TableCell className="font-mono font-medium">withHandle</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Show visible drag handle icon</TableCell>
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
                <TableCell>All react-resizable-panels Separator props</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

