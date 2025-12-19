import { Divider } from '@/components/ui/divider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function DividerOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Divider component extends the Separator with label support. It displays a visual
          divider line with optional label text that can be positioned left, center, or right.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Separating content sections with labels</li>
          <li>Form dividers (e.g., "OR" between login options)</li>
          <li>Section headers with visual dividers</li>
          <li>Any labeled separator needs</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple divider example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Divider label="OR" />
          <div>Content below</div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Divider {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Divider label="OR" /{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Label support with positioning</li>
          <li>Horizontal and vertical orientations</li>
          <li>Custom label content</li>
          <li>Extends Separator functionality</li>
        </ul>
      </div>
    </div>
  );
}

