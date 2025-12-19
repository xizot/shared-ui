import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function FileUploadProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for FileUpload component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>FileUpload Props</CardTitle>
          <CardDescription>Props for the FileUpload component</CardDescription>
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
                <TableCell className="font-mono text-sm">
                  File[] | FileUploadFile[]
                </TableCell>
                <TableCell className="font-mono text-sm">[]</TableCell>
                <TableCell>Array of files or file upload objects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onChange</TableCell>
                <TableCell className="font-mono text-sm">
                  (files: File[] | FileUploadFile[]) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when files change</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">accept</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Accepted file types (e.g., "image/*", ".pdf,.doc", "video/*")
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">multiple</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Allow multiple file selection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">maxSize</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Maximum file size in bytes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">maxFiles</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Maximum number of files allowed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable file upload</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onError</TableCell>
                <TableCell className="font-mono text-sm">
                  (error: string) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Error callback when validation fails</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showPreview</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show file preview list</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showProgress</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Show upload progress bar</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">placeholder</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Custom placeholder text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">uploadText</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Click to upload"</TableCell>
                <TableCell>Custom upload button text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">dropzoneClassName</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for dropzone</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FileUploadFile Type</CardTitle>
          <CardDescription>Type definition for file upload objects</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">file</TableCell>
                <TableCell className="font-mono text-sm">File</TableCell>
                <TableCell>The File object</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">preview</TableCell>
                <TableCell className="font-mono text-sm">string | undefined</TableCell>
                <TableCell>Preview URL for images</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">progress</TableCell>
                <TableCell className="font-mono text-sm">number | undefined</TableCell>
                <TableCell>Upload progress (0-100)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">status</TableCell>
                <TableCell className="font-mono text-sm">
                  'pending' | 'uploading' | 'success' | 'error'
                </TableCell>
                <TableCell>Upload status</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">error</TableCell>
                <TableCell className="font-mono text-sm">string | undefined</TableCell>
                <TableCell>Error message if upload failed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

