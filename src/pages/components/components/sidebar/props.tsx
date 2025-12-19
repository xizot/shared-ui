import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SidebarProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Sidebar component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SidebarProvider Props</CardTitle>
          <CardDescription>Props for the SidebarProvider component</CardDescription>
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
                <TableCell className="font-mono font-medium">defaultOpen</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Default open state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">open</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled open state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onOpenChange</TableCell>
                <TableCell className="font-mono text-sm">(open: boolean) =&gt; void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when open state changes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sidebar Props</CardTitle>
          <CardDescription>Props for the Sidebar component</CardDescription>
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
                <TableCell className="font-mono text-sm">'left' | 'right'</TableCell>
                <TableCell className="font-mono text-sm">'left'</TableCell>
                <TableCell>Sidebar position</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">variant</TableCell>
                <TableCell className="font-mono text-sm">
                  'sidebar' | 'floating' | 'inset'
                </TableCell>
                <TableCell className="font-mono text-sm">'sidebar'</TableCell>
                <TableCell>Visual variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">collapsible</TableCell>
                <TableCell className="font-mono text-sm">'offcanvas' | 'icon' | 'none'</TableCell>
                <TableCell className="font-mono text-sm">'offcanvas'</TableCell>
                <TableCell>Collapse behavior</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SidebarMenuButton Props</CardTitle>
          <CardDescription>Props for menu buttons</CardDescription>
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
                <TableCell className="font-mono font-medium">isActive</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Active state styling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">tooltip</TableCell>
                <TableCell className="font-mono text-sm">string | TooltipProps</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Tooltip content (shown when collapsed)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">variant</TableCell>
                <TableCell className="font-mono text-sm">'default' | 'outline'</TableCell>
                <TableCell className="font-mono text-sm">'default'</TableCell>
                <TableCell>Button variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">size</TableCell>
                <TableCell className="font-mono text-sm">'default' | 'sm' | 'lg'</TableCell>
                <TableCell className="font-mono text-sm">'default'</TableCell>
                <TableCell>Button size</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keyboard Shortcuts</CardTitle>
          <CardDescription>Keyboard shortcuts for sidebar</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shortcut</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">Cmd/Ctrl + B</TableCell>
                <TableCell>Toggle sidebar</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Component Structure</CardTitle>
          <CardDescription>Sidebar component hierarchy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="font-mono">SidebarProvider</div>
            <div className="ml-4 font-mono">Sidebar</div>
            <div className="ml-8 font-mono">SidebarHeader</div>
            <div className="ml-8 font-mono">SidebarContent</div>
            <div className="ml-12 font-mono">SidebarGroup</div>
            <div className="ml-16 font-mono">SidebarGroupLabel</div>
            <div className="ml-16 font-mono">SidebarGroupContent</div>
            <div className="ml-20 font-mono">SidebarMenu</div>
            <div className="ml-24 font-mono">SidebarMenuItem</div>
            <div className="ml-28 font-mono">SidebarMenuButton</div>
            <div className="ml-8 font-mono">SidebarFooter</div>
            <div className="ml-4 font-mono">SidebarInset</div>
            <div className="ml-4 font-mono">SidebarTrigger</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

