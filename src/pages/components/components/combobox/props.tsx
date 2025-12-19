import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ComboboxProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Combobox component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>Combobox component props</CardDescription>
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
                <TableCell className="font-mono font-medium">options</TableCell>
                <TableCell className="font-mono text-sm">ComboboxOption[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Array of options to display</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string | number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Selected value (controlled)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onChange</TableCell>
                <TableCell className="font-mono text-sm">
                  (value: string, option: ComboboxOption | undefined) ={'>'} void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when selection changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">label</TableCell>
                <TableCell className="font-mono text-sm">string | React.ReactNode</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Label text displayed above the combobox</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">error</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Error message displayed below the combobox. When provided, combobox shows error
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
                <TableCell className="font-mono font-medium">placeholder</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Select option..."</TableCell>
                <TableCell>Placeholder text for the trigger button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">searchPlaceholder</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Search..."</TableCell>
                <TableCell>Placeholder text for the search input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">emptyMessage</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"No results found."</TableCell>
                <TableCell>Message displayed when no options match search</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable the combobox</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for container</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ComboboxOption Type</CardTitle>
          <CardDescription>Option object structure</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Required</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">id</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Unique identifier for the option</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">name</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Display name for the option</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">code</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Optional code (e.g., country code)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Whether the option is disabled</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

