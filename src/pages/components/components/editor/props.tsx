import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function EditorProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Editor component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
          <CardDescription>
            Editor component extends ReactQuillProps with additional props
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
                <TableCell>Label text displayed above the editor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">error</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Error message displayed below the editor. When provided, editor shows error
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
                <TableCell className="font-mono font-medium">size</TableCell>
                <TableCell className="font-mono text-sm">FormSize</TableCell>
                <TableCell className="font-mono text-sm">'md'</TableCell>
                <TableCell>Size variant of the editor (xxs, xs, sm, md, lg, xl, xxl)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">id</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Editor ID. Auto-generated if not provided. Required when using label prop for
                  proper accessibility.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">value</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled value of the editor (HTML string)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onChange</TableCell>
                <TableCell className="font-mono text-sm">(value: string) ={'>'} void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback fired when editor content changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">placeholder</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Placeholder text shown when editor is empty</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">readOnly</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>
                  When true, editor is read-only and toolbar is disabled (but still visible)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">modules</TableCell>
                <TableCell className="font-mono text-sm">ReactQuillProps['modules']</TableCell>
                <TableCell className="font-mono text-sm">defaultModules</TableCell>
                <TableCell>
                  Custom Quill modules configuration. Default includes toolbar, clipboard, and
                  history.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">formats</TableCell>
                <TableCell className="font-mono text-sm">string[]</TableCell>
                <TableCell className="font-mono text-sm">defaultFormats</TableCell>
                <TableCell>
                  Allowed formats in the editor. Default includes header, bold, italic, underline,
                  strike, list, bullet, align, color, background, link, image, code-block,
                  blockquote, script.
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
                <TableCell className="font-mono text-sm">Omit{'<'}ReactQuillProps, 'modules' | 'formats'{'>'}</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All other ReactQuill props (except modules and formats)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

