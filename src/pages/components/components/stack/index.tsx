import { Stack } from '@/components/ui/stack';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function StackOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Stack component provides a flexible layout system for arranging elements in a row or
          column with consistent spacing. It's built on flexbox and supports alignment, justification,
          and wrapping options.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Vertical or horizontal element arrangement</li>
          <li>Form layouts</li>
          <li>Button groups</li>
          <li>Content organization</li>
          <li>Any flexbox-based layout needs</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple stack example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Stack spacing={4}>
            <div className="bg-muted p-2 rounded">Item 1</div>
            <div className="bg-muted p-2 rounded">Item 2</div>
            <div className="bg-muted p-2 rounded">Item 3</div>
          </Stack>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Stack {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}Stack direction="column" spacing={4}{'>'}...{'</'}Stack{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Row and column directions</li>
          <li>Flexible spacing options (0-12)</li>
          <li>Alignment and justification controls</li>
          <li>Wrap support</li>
          <li>Full flexbox capabilities</li>
        </ul>
      </div>
    </div>
  );
}

