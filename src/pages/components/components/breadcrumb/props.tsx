import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function BreadcrumbProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Breadcrumb component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Breadcrumb Components</CardTitle>
          <CardDescription>Breadcrumb is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Breadcrumb</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'nav'{' '}
                  {'>'}</TableCell>
                <TableCell>Root breadcrumb container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">BreadcrumbList</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'ol'{' '}
                  {'>'}</TableCell>
                <TableCell>Ordered list container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">BreadcrumbItem</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'li'{' '}
                  {'>'}</TableCell>
                <TableCell>Individual breadcrumb item</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">BreadcrumbLink</TableCell>
                <TableCell className="font-mono text-sm">
                  {'{'}{' '}
                  asChild?: boolean{' '}
                  {'}'} & React.ComponentProps{'<'}{' '}
                  'a'{' '}
                  {'>'}
                </TableCell>
                <TableCell>Clickable breadcrumb link</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">BreadcrumbPage</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'span'{' '}
                  {'>'}</TableCell>
                <TableCell>Current page indicator (non-clickable)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">BreadcrumbSeparator</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'li'{' '}
                  {'>'}</TableCell>
                <TableCell>Separator between items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">BreadcrumbEllipsis</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}{' '}
                  'span'{' '}
                  {'>'}</TableCell>
                <TableCell>Ellipsis for collapsed items</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BreadcrumbLink Props</CardTitle>
          <CardDescription>Link component props</CardDescription>
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
                <TableCell className="font-mono font-medium">asChild</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>
                  Render as child component (useful with Next.js Link)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">href</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Link URL</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

