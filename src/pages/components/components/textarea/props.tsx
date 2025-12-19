import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TextareaProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Textarea component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>
            Textarea component extends standard textarea HTML attributes
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
                <TableCell>Label text displayed above the textarea</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">error</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Error message displayed below the textarea. When provided, textarea shows error
                  styling.
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
                <TableCell className="font-mono font-medium">id</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Textarea ID. Required when using label prop for proper accessibility.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">rows</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Number of visible text lines</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'textarea'{'>'}</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All standard textarea HTML attributes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

