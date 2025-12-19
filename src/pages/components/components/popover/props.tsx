import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PopoverProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Popover component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Popover Components</CardTitle>
          <CardDescription>Popover is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Popover</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof PopoverPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root popover container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">PopoverTrigger</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof PopoverPrimitive.Trigger{' '}
                  {'>'}
                </TableCell>
                <TableCell>Element that triggers the popover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">PopoverContent</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof PopoverPrimitive.Content{' '}
                  {'>'}
                </TableCell>
                <TableCell>Popover content container</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popover Props</CardTitle>
          <CardDescription>Root component props</CardDescription>
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
                <TableCell className="font-mono font-medium">open</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled open state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">defaultOpen</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Uncontrolled default open state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onOpenChange</TableCell>
                <TableCell className="font-mono text-sm">(open: boolean) ={'>'} void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when open state changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">modal</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Whether popover is modal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>PopoverContent Props</CardTitle>
          <CardDescription>Content component props</CardDescription>
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
                <TableCell className="font-mono font-medium">side</TableCell>
                <TableCell className="font-mono text-sm">"top" | "right" | "bottom" | "left"</TableCell>
                <TableCell className="font-mono text-sm">"bottom"</TableCell>
                <TableCell>Preferred side to position popover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">align</TableCell>
                <TableCell className="font-mono text-sm">"start" | "center" | "end"</TableCell>
                <TableCell className="font-mono text-sm">"center"</TableCell>
                <TableCell>Alignment relative to trigger</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">sideOffset</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">4</TableCell>
                <TableCell>Distance from trigger in pixels</TableCell>
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

