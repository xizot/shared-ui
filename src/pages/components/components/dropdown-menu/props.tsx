import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DropdownMenuProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for DropdownMenu component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>DropdownMenu Components</CardTitle>
          <CardDescription>DropdownMenu is composed of multiple sub-components</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">DropdownMenu</TableCell>
                <TableCell>Root dropdown menu container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuTrigger</TableCell>
                <TableCell>Element that triggers the dropdown</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuContent</TableCell>
                <TableCell>Dropdown menu content container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuItem</TableCell>
                <TableCell>Individual menu item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuLabel</TableCell>
                <TableCell>Menu section label</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuSeparator</TableCell>
                <TableCell>Visual separator between items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuCheckboxItem</TableCell>
                <TableCell>Checkbox menu item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuRadioGroup</TableCell>
                <TableCell>Radio group container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuRadioItem</TableCell>
                <TableCell>Radio menu item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DropdownMenuSub</TableCell>
                <TableCell>Submenu container</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>DropdownMenuItem Props</CardTitle>
          <CardDescription>Item component props</CardDescription>
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
                <TableCell className="font-mono text-sm">"default" | "destructive"</TableCell>
                <TableCell className="font-mono text-sm">"default"</TableCell>
                <TableCell>Item variant style</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">inset</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Add left padding for nested items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable the menu item</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

