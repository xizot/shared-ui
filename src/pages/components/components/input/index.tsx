import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function InputOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Input component is a text input field with built-in support for labels, error
          messages, and required field indicators. It provides a consistent styling and
          accessibility features across your application.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single-line text input</li>
          <li>Form fields that require labels and validation</li>
          <li>Search inputs</li>
          <li>Email, password, and other input types</li>
          <li>Any scenario requiring user text input</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple input example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Input placeholder="Enter text..." />
            <Input label="Email" type="email" placeholder="email@example.com" />
            <Input
              label="Password"
              type="password"
              required
              placeholder="Enter password"
            />
            <Input
              label="Username"
              error="Username is required"
              placeholder="Enter username"
            />
          </div>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">import {'{'} Input {'}'} from 'shared-ui'</div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">
                {'<'}Input label="Email" type="email" placeholder="email@example.com" /{'>'}
              </div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built-in label support with optional required indicator</li>
          <li>Error message display with visual feedback</li>
          <li>Support for all HTML input types</li>
          <li>Full keyboard accessibility</li>
          <li>Focus-visible states for accessibility</li>
          <li>Disabled state support</li>
          <li>Consistent styling with design system</li>
        </ul>
      </div>
    </div>
  );
}

