import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CardProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Card component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Card Components</CardTitle>
          <CardDescription>Card is composed of multiple sub-components</CardDescription>
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
                <TableCell className="font-mono">Card</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Main card container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">CardHeader</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Header section of the card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">CardTitle</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Title text component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">CardDescription</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Description text component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">CardContent</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Main content area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">CardFooter</TableCell>
                <TableCell className="font-mono text-sm">React.ComponentProps{'<'}'div'{'>'}</TableCell>
                <TableCell>Footer section for actions</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>All components accept standard HTML div attributes</li>
            <li>Use className prop for custom styling</li>
            <li>Components can be used in any order, but typical structure is: CardHeader {'>'} CardContent {'>'} CardFooter</li>
            <li>CardHeader typically contains CardTitle and CardDescription</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

