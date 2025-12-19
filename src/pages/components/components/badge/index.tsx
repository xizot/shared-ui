import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function BadgeOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Badge component is a small status indicator used to display labels, counts, or status
          information. It comes in multiple variants for different use cases.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Displaying status indicators</li>
          <li>Showing counts or numbers</li>
          <li>Labeling items</li>
          <li>Highlighting important information</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple badge examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Badge {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Badge{'>'}Label{'</'}Badge{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>
    </div>
  );
}

