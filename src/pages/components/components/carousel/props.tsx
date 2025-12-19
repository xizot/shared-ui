import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CarouselProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Carousel component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carousel Props</CardTitle>
          <CardDescription>Props for the Carousel component</CardDescription>
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
                <TableCell className="font-mono font-medium">opts</TableCell>
                <TableCell className="font-mono text-sm">CarouselOptions</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Embla Carousel options</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">plugins</TableCell>
                <TableCell className="font-mono text-sm">CarouselPlugin</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Embla Carousel plugins (e.g., Autoplay)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">orientation</TableCell>
                <TableCell className="font-mono text-sm">'horizontal' | 'vertical'</TableCell>
                <TableCell className="font-mono text-sm">'horizontal'</TableCell>
                <TableCell>Carousel orientation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">setApi</TableCell>
                <TableCell className="font-mono text-sm">(api: CarouselApi) =&gt; void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback to receive carousel API instance</TableCell>
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
          <CardTitle>CarouselContent Props</CardTitle>
          <CardDescription>Props for the CarouselContent component</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CarouselItem Props</CardTitle>
          <CardDescription>Props for the CarouselItem component</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CarouselPrevious & CarouselNext Props</CardTitle>
          <CardDescription>Props for navigation buttons</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">variant</TableCell>
                <TableCell className="font-mono text-sm">ButtonVariant</TableCell>
                <TableCell>Button variant (default: 'outline')</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">size</TableCell>
                <TableCell className="font-mono text-sm">ButtonSize</TableCell>
                <TableCell>Button size (default: 'icon')</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keyboard Navigation</CardTitle>
          <CardDescription>Keyboard shortcuts for carousel</CardDescription>
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
                <TableCell>Previous slide (horizontal)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Arrow Right</TableCell>
                <TableCell>Next slide (horizontal)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Arrow Up</TableCell>
                <TableCell>Previous slide (vertical)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">Arrow Down</TableCell>
                <TableCell>Next slide (vertical)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

