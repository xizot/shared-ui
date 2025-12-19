import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function TextareaOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Textarea component is a multi-line text input field with built-in support for labels,
          error messages, and required field indicators. Similar to Input, it provides consistent
          styling and accessibility features.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Multi-line text input</li>
          <li>Long form responses</li>
          <li>Comments and descriptions</li>
          <li>Any scenario requiring paragraph-length user input</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple textarea example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="Enter your message..." />
          <Textarea label="Description" placeholder="Enter description..." />
          <Textarea
            label="Comments"
            required
            placeholder="Enter your comments..."
            rows={4}
          />
          <Textarea
            label="Feedback"
            error="Please provide feedback"
            placeholder="Enter feedback..."
          />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Textarea {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}Textarea label="Description" placeholder="Enter description..." /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built-in label support with optional required indicator</li>
          <li>Error message display with visual feedback</li>
          <li>Auto-resizing height (field-sizing-content)</li>
          <li>Full keyboard accessibility</li>
          <li>Focus-visible states for accessibility</li>
          <li>Disabled state support</li>
        </ul>
      </div>
    </div>
  );
}

