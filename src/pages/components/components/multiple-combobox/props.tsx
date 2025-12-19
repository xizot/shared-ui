import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function MultipleComboboxProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for MultipleCombobox component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>MultipleCombobox component props</CardDescription>
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
                <TableCell className="font-mono text-sm">
                  TOptions extends readonly MultipleComboboxBaseOption[]
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Array of options to display (readonly array)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">MultipleComboboxValue (string[])</TableCell>
                <TableCell className="font-mono text-sm">[]</TableCell>
                <TableCell>Selected values array (controlled)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onChange</TableCell>
                <TableCell className="font-mono text-sm">
                  MultipleComboboxOnChange{'<'}{' '}TOptions[number]{' '}
                  {'>'} = (values: string[], options: T[] | undefined) ={'>'} void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when selection changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">autoResize</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>
                  When true, badges wrap to new lines. When false, badges truncate.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">limitTags</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Limit number of badges displayed. Shows "+X" badge for remaining items.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showCode</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Display code in badges and options (format: "code - name")</TableCell>
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
                <TableCell className="font-mono text-sm">"Select options..."</TableCell>
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
                <TableCell className="font-mono font-medium">readonly</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>
                  When true, prevents removing badges but allows selecting new options
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">size</TableCell>
                <TableCell className="font-mono text-sm">FormSize</TableCell>
                <TableCell className="font-mono text-sm">"md"</TableCell>
                <TableCell>Size of the combobox trigger</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">triggerClassName</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for trigger button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">popoverClassName</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for popover content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>MultipleComboboxBaseOption Type</CardTitle>
          <CardDescription>Base option object structure (can be extended)</CardDescription>
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
                <TableCell className="font-mono text-sm">string | number</TableCell>
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

      <Card>
        <CardHeader>
          <CardTitle>Type Definitions</CardTitle>
          <CardDescription>TypeScript type definitions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">MultipleComboboxValue</h4>
              <code className="text-sm bg-muted p-2 rounded block">type MultipleComboboxValue = string[]</code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">MultipleComboboxOnChange</h4>
              <code className="text-sm bg-muted p-2 rounded block">
                type MultipleComboboxOnChange{'<'}{' '}T extends MultipleComboboxBaseOption{' '}
                {'>'} = (values: MultipleComboboxValue, options: T[] | undefined) ={'>'} void
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage with Extended Types</h4>
              <code className="text-sm bg-muted p-2 rounded block">
                const options = [{' {'} id: '1', name: 'Option', code: 'OPT', customProp: 'value' {'}'} ] as const;
                <br />
                {'<'}MultipleCombobox options={'{'}options{'}'} /{'>'}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

