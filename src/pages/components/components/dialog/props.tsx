import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DialogProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Dialog component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dialog Components</CardTitle>
          <CardDescription>Dialog is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Dialog</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof DialogPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root dialog container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DialogTrigger</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof DialogPrimitive.Trigger{' '}
                  {'>'}
                </TableCell>
                <TableCell>Button/element that opens the dialog</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DialogContent</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof DialogPrimitive.Content{' '}
                  {'>'} & {'{'}{' '}
                  showCloseButton?: boolean{' '}
                  {'}'}
                </TableCell>
                <TableCell>Main dialog content container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DialogHeader</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'div'{' '}
                  {'>'}
                </TableCell>
                <TableCell>Header section container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DialogTitle</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof DialogPrimitive.Title{' '}
                  {'>'}
                </TableCell>
                <TableCell>Dialog title</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DialogDescription</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof DialogPrimitive.Description{' '}
                  {'>'}
                </TableCell>
                <TableCell>Dialog description</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">DialogFooter</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'div'{' '}
                  {'>'}
                </TableCell>
                <TableCell>Footer section container</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dialog Props</CardTitle>
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
                <TableCell>Whether dialog is modal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>DialogContent Props</CardTitle>
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
                <TableCell className="font-mono font-medium">showCloseButton</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show close button in top-right corner</TableCell>
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

