import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function ButtonOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Button component is a versatile interactive element used to trigger actions. It
          supports multiple variants, sizes, and can be used as a button or as a link using the{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">asChild</code> prop.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Primary actions that require user interaction</li>
          <li>Form submissions</li>
          <li>Navigation links (using asChild prop)</li>
          <li>Triggering dialogs or modals</li>
          <li>Secondary actions with different visual weight</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple button example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">import {'{'} Button {'}'} from 'shared-ui'</div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">{'<'}Button{'>'}Click me{'</'}Button{'>'}</div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Multiple variants: default, destructive, outline, secondary, ghost, link</li>
          <li>Multiple sizes: xxs, xs, sm, md (default), lg, xl, xxl, and icon variants</li>
          <li>Full keyboard accessibility</li>
          <li>Disabled state support</li>
          <li>Can be used as a link with asChild prop</li>
          <li>Focus-visible states for accessibility</li>
        </ul>
      </div>
    </div>
  );
}

