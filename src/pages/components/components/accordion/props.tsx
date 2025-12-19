import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AccordionProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Accordion component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Accordion Components</CardTitle>
          <CardDescription>Accordion is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Accordion</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AccordionPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root accordion container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AccordionItem</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AccordionPrimitive.Item{' '}
                  {'>'}
                </TableCell>
                <TableCell>Individual accordion item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AccordionTrigger</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AccordionPrimitive.Trigger{' '}
                  {'>'}
                </TableCell>
                <TableCell>Clickable trigger for accordion item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AccordionContent</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AccordionPrimitive.Content{' '}
                  {'>'}
                </TableCell>
                <TableCell>Collapsible content section</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accordion Props</CardTitle>
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
                <TableCell className="font-mono font-medium">type</TableCell>
                <TableCell className="font-mono text-sm">"single" | "multiple"</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Single allows one item open, multiple allows multiple items open
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string | string[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled open value(s)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">defaultValue</TableCell>
                <TableCell className="font-mono text-sm">string | string[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Uncontrolled default open value(s)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onValueChange</TableCell>
                <TableCell className="font-mono text-sm">
                  (value: string | string[]) ={'>'} void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when open value changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">collapsible</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>
                  When true, allows closing the last open item (single type only)
                </TableCell>
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
          <CardTitle>AccordionItem Props</CardTitle>
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
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Unique value for this item (required)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable this accordion item</TableCell>
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

