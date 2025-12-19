import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CalendarProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Calendar component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calendar Props</CardTitle>
          <CardDescription>Calendar component props (extends DayPicker props)</CardDescription>
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
                <TableCell className="font-mono font-medium">mode</TableCell>
                <TableCell className="font-mono text-sm">"single" | "range" | "multiple"</TableCell>
                <TableCell className="font-mono text-sm">"single"</TableCell>
                <TableCell>Selection mode</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">selected</TableCell>
                <TableCell className="font-mono text-sm">Date | Date[] | {'{'}{' '}
                  from?: Date; to?: Date{' '}
                  {'}'}</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Selected date(s) (controlled)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onSelect</TableCell>
                <TableCell className="font-mono text-sm">
                  (date: Date | Date[] | {'{'}{' '}
                  from?: Date; to?: Date{' '}
                  {'}'}) ={'>'} void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when date selection changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">(date: Date) ={'>'} boolean</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Function to determine disabled dates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showOutsideDays</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show days from previous/next month</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">buttonVariant</TableCell>
                <TableCell className="font-mono text-sm">ButtonProps['variant']</TableCell>
                <TableCell className="font-mono text-sm">"ghost"</TableCell>
                <TableCell>Variant for navigation buttons</TableCell>
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
          <CardTitle>Note</CardTitle>
          <CardDescription>Additional props from react-day-picker</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Calendar component extends all props from{' '}
            <code className="rounded bg-muted px-1 py-0.5 text-sm">react-day-picker</code> DayPicker
            component. Refer to{' '}
            <a
              href="https://react-day-picker.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              react-day-picker documentation
            </a>{' '}
            for complete API reference.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

