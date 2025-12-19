import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TabsProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Tabs component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tabs Components</CardTitle>
          <CardDescription>Tabs is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Tabs</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TabsPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root tabs container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TabsList</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TabsPrimitive.List{' '}
                  {'>'}
                </TableCell>
                <TableCell>Container for tab triggers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TabsTrigger</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TabsPrimitive.Trigger{' '}
                  {'>'}
                </TableCell>
                <TableCell>Individual tab trigger button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">TabsContent</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof TabsPrimitive.Content{' '}
                  {'>'}
                </TableCell>
                <TableCell>Tab panel content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tabs Props</CardTitle>
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
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled active tab value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">defaultValue</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Uncontrolled default active tab</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onValueChange</TableCell>
                <TableCell className="font-mono text-sm">(value: string) ={'>'} void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when active tab changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">orientation</TableCell>
                <TableCell className="font-mono text-sm">"horizontal" | "vertical"</TableCell>
                <TableCell className="font-mono text-sm">"horizontal"</TableCell>
                <TableCell>Tab orientation</TableCell>
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

      <Card>
        <CardHeader>
          <CardTitle>TabsTrigger Props</CardTitle>
          <CardDescription>Trigger component props</CardDescription>
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
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Value of this tab (required)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable this tab</TableCell>
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

      <Card>
        <CardHeader>
          <CardTitle>TabsContent Props</CardTitle>
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
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Value of this tab panel (required)</TableCell>
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

