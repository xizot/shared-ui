import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ImagePreviewProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for ImagePreview and ImageLightbox component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ImagePreview Props</CardTitle>
          <CardDescription>Props for the ImagePreview component</CardDescription>
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
                <TableCell className="font-mono font-medium">images</TableCell>
                <TableCell className="font-mono text-sm">ImagePreviewItem[]</TableCell>
                <TableCell className="font-mono text-sm">[]</TableCell>
                <TableCell>Array of image URLs, Files, or objects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">columns</TableCell>
                <TableCell className="font-mono text-sm">1 | 2 | 3 | 4 | 5 | 6</TableCell>
                <TableCell className="font-mono text-sm">3</TableCell>
                <TableCell>Number of columns in the grid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onRemove</TableCell>
                <TableCell className="font-mono text-sm">
                  (index: number) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when an image is removed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onClick</TableCell>
                <TableCell className="font-mono text-sm">
                  (index: number, image: ImagePreviewItem) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when an image is clicked</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showRemove</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show remove button on hover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">itemClassName</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes for each item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">emptyMessage</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"No images"</TableCell>
                <TableCell>Message displayed when no images</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">loading</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Show loading state</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ImageLightbox Props</CardTitle>
          <CardDescription>Props for the ImageLightbox component</CardDescription>
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
                <TableCell className="font-mono font-medium">images</TableCell>
                <TableCell className="font-mono text-sm">ImagePreviewItem[]</TableCell>
                <TableCell className="font-mono text-sm">[]</TableCell>
                <TableCell>Array of images to display</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">open</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Control lightbox open state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onOpenChange</TableCell>
                <TableCell className="font-mono text-sm">(open: boolean) =&gt; void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when open state changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">initialIndex</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">0</TableCell>
                <TableCell>Initial image index to display</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showNavigation</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show prev/next navigation buttons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showCounter</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show image counter (e.g., "3 / 10")</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showZoom</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show zoom controls and enable zoom</TableCell>
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
          <CardTitle>ImagePreviewItem Type</CardTitle>
          <CardDescription>Type definition for image items</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Image URL string</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">File</TableCell>
                <TableCell>File object (will create object URL)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-sm">{'{'} url: string; alt?: string; id?: string {'}'}</TableCell>
                <TableCell>Object with url, optional alt text, and optional id</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keyboard Shortcuts</CardTitle>
          <CardDescription>Keyboard navigation for ImageLightbox</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">Arrow Left</TableCell>
                <TableCell>Previous image</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Arrow Right</TableCell>
                <TableCell>Next image</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Escape</TableCell>
                <TableCell>Close lightbox</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">+ / =</TableCell>
                <TableCell>Zoom in</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">-</TableCell>
                <TableCell>Zoom out</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">0</TableCell>
                <TableCell>Reset zoom</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

