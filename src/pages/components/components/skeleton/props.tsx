import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SkeletonProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Skeleton component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Skeleton Props</CardTitle>
          <CardDescription>Skeleton component props</CardDescription>
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
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Additional CSS classes. Use Tailwind classes to control size and shape (e.g.,
                  h-4, w-[250px], rounded-full)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
          <CardDescription>Common skeleton usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="font-medium">Text line:</p>
            <code className="block rounded bg-muted p-2">
              {'<'}Skeleton className="h-4 w-[250px]" /{'>'}
            </code>
            <p className="font-medium mt-4">Circle avatar:</p>
            <code className="block rounded bg-muted p-2">
              {'<'}Skeleton className="h-12 w-12 rounded-full" /{'>'}
            </code>
            <p className="font-medium mt-4">Rectangle image:</p>
            <code className="block rounded bg-muted p-2">
              {'<'}Skeleton className="h-[125px] w-full rounded-xl" /{'>'}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

