import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function InputProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Input component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>
            Input component extends standard input HTML attributes
          </CardDescription>
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
                <TableCell className="font-mono font-medium">label</TableCell>
                <TableCell className="font-mono text-sm">string | React.ReactNode</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Label text displayed above the input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">error</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Error message displayed below the input. When provided, input shows error styling.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">required</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>
                  When true, displays a red asterisk (*) next to the label
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">type</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}'input'{'>'}['type']
                </TableCell>
                <TableCell className="font-mono text-sm">"text"</TableCell>
                <TableCell>HTML input type (text, email, password, number, etc.)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">id</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Input ID. Required when using label prop for proper accessibility.
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
                <TableCell className="font-mono text-sm">
                  Omit{'<'}{' '}
                  React.ComponentProps{'<'}'input'{'>'}, 'type'{' '}
                  {'>'}
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All standard input HTML attributes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Styling</CardTitle>
          <CardDescription>Visual states and styling</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">Default</TableCell>
                <TableCell>Standard border and background styling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Focus</TableCell>
                <TableCell>Ring border with primary color on focus-visible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Error</TableCell>
                <TableCell>
                  Red border (border-destructive) and focus ring when error prop is provided
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Disabled</TableCell>
                <TableCell>Reduced opacity and disabled cursor</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

