import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ButtonProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Button component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Button component accepts all standard button HTML attributes</CardDescription>
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
                  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
                </TableCell>
                <TableCell className="font-mono text-sm">"default"</TableCell>
                <TableCell>Visual style variant of the button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">size</TableCell>
                <TableCell className="font-mono text-sm">
                  "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
                </TableCell>
                <TableCell className="font-mono text-sm">"default"</TableCell>
                <TableCell>Size of the button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">asChild</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>
                  When true, renders as a child component (useful for links)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'button'{'>'}</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All standard button HTML attributes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>Available button variants</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Variant</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">default</TableCell>
                <TableCell>Primary button with primary background color</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">destructive</TableCell>
                <TableCell>Used for destructive actions (delete, remove, etc.)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">outline</TableCell>
                <TableCell>Outlined button with transparent background</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">secondary</TableCell>
                <TableCell>Secondary button with muted background</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">ghost</TableCell>
                <TableCell>Ghost button with no background, shows on hover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">link</TableCell>
                <TableCell>Link-style button with underline</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Available button sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>Height</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">sm</TableCell>
                <TableCell>32px (h-8)</TableCell>
                <TableCell>Small button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">default</TableCell>
                <TableCell>36px (h-9)</TableCell>
                <TableCell>Default button size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">lg</TableCell>
                <TableCell>40px (h-10)</TableCell>
                <TableCell>Large button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">icon-sm</TableCell>
                <TableCell>32px (size-8)</TableCell>
                <TableCell>Small icon-only button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">icon</TableCell>
                <TableCell>36px (size-9)</TableCell>
                <TableCell>Default icon-only button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">icon-lg</TableCell>
                <TableCell>40px (size-10)</TableCell>
                <TableCell>Large icon-only button</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

