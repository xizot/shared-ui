import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function TableOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Table component provides a semantic HTML table structure with consistent styling. It's
          composed of multiple sub-components for building accessible data tables.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Displaying structured data</li>
          <li>Data grids and lists</li>
          <li>Comparison tables</li>
          <li>Any tabular data presentation</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple table example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Table, TableHeader, TableBody, TableRow, TableHead, TableCell {'}'} from
          'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Table{'>'}</div>
          <div className="ml-8">{'<'}TableHeader{'>'}</div>
          <div className="ml-12">{'<'}TableRow{'>'}</div>
          <div className="ml-16">{'<'}TableHead{'>'}Name{'{'}</div>
          <div className="ml-12">{'</'}TableRow{'>'}</div>
          <div className="ml-8">{'</'}TableHeader{'>'}</div>
          <div className="ml-8">{'<'}TableBody{'>'}</div>
          <div className="ml-12">{'<'}TableRow{'>'}</div>
          <div className="ml-16">{'<'}TableCell{'>'}John Doe{'{'}</div>
          <div className="ml-12">{'</'}TableRow{'>'}</div>
          <div className="ml-8">{'</'}TableBody{'>'}</div>
          <div className="ml-4">{'</'}Table{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Semantic HTML structure</li>
          <li>Accessible table markup</li>
          <li>Consistent styling</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  );
}

