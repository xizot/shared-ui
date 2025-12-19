import { Grid } from '@/components/ui/grid';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function GridOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Grid component provides a CSS Grid-based layout system with responsive breakpoints. It
          supports various column configurations and gap sizes for flexible grid layouts.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Card grids</li>
          <li>Image galleries</li>
          <li>Dashboard layouts</li>
          <li>Responsive multi-column layouts</li>
          <li>Any grid-based design patterns</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple grid example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Grid cols={3} gap={4}>
            <div className="bg-muted p-4 rounded-md text-center">Item 1</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 2</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 3</div>
          </Grid>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Grid {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}Grid cols={3} gap={4}{'>'}...{'</'}Grid{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Flexible column configurations (1-12 columns)</li>
          <li>Responsive breakpoints (sm, md, lg, xl)</li>
          <li>Configurable gap sizes</li>
          <li>12-column grid system support</li>
          <li>CSS Grid-based implementation</li>
        </ul>
      </div>
    </div>
  );
}

