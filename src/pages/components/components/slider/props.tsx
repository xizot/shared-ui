import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SliderProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Slider component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Slider Props</CardTitle>
          <CardDescription>Slider component props</CardDescription>
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
                <TableCell className="font-mono text-sm">number[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Controlled value array (single or range)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">defaultValue</TableCell>
                <TableCell className="font-mono text-sm">number[]</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Uncontrolled default value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onValueChange</TableCell>
                <TableCell className="font-mono text-sm">(value: number[]) ={'>'} void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when value changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">min</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">0</TableCell>
                <TableCell>Minimum value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">max</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">100</TableCell>
                <TableCell>Maximum value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">step</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">1</TableCell>
                <TableCell>Step increment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">disabled</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Disable the slider</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">orientation</TableCell>
                <TableCell className="font-mono text-sm">"horizontal" | "vertical"</TableCell>
                <TableCell className="font-mono text-sm">"horizontal"</TableCell>
                <TableCell>Slider orientation</TableCell>
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
    </div>
  );
}

