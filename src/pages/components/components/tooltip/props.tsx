import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TooltipProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Tooltip component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tooltip Components</CardTitle>
          <CardDescription>Tooltip is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Tooltip</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TooltipPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root tooltip container (includes Provider)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TooltipTrigger</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TooltipPrimitive.Trigger{' '}
                  {'>'}
                </TableCell>
                <TableCell>Element that triggers the tooltip</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TooltipContent</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TooltipPrimitive.Content{' '}
                  {'>'}
                </TableCell>
                <TableCell>Tooltip content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tooltip Props</CardTitle>
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
                <TableCell className="font-mono font-medium">delayDuration</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">0</TableCell>
                <TableCell>Delay before showing tooltip (ms)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>TooltipContent Props</CardTitle>
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
                <TableCell className="font-mono text-sm">"top"</TableCell>
                <TableCell>Preferred side to position tooltip</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">sideOffset</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">0</TableCell>
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

