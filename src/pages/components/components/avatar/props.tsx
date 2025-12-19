import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AvatarProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Avatar component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Avatar Components</CardTitle>
          <CardDescription>Avatar is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Avatar</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AvatarPrimitive.Root{' '}
                  {'>'}
                </TableCell>
                <TableCell>Root avatar container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AvatarImage</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AvatarPrimitive.Image{' '}
                  {'>'}
                </TableCell>
                <TableCell>Avatar image element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">AvatarFallback</TableCell>
                <TableCell className="font-mono text-sm">
                  React.ComponentProps{'<'}{' '}
                  typeof AvatarPrimitive.Fallback{' '}
                  {'>'}
                </TableCell>
                <TableCell>Fallback content (shown when image fails)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AvatarImage Props</CardTitle>
          <CardDescription>Image component props</CardDescription>
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
                <TableCell className="font-mono font-medium">src</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Image source URL</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">alt</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Alternative text for the image</TableCell>
              </TableRow>
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
          <CardTitle>AvatarFallback Props</CardTitle>
          <CardDescription>Fallback component props</CardDescription>
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
                <TableCell className="font-mono font-medium">children</TableCell>
                <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                <TableCell>Fallback content (typically initials)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

