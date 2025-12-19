import { MultipleCombobox } from '@/components/ui/multiple-combobox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

const exampleOptions = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
] as const;

export default function MultipleComboboxOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The MultipleCombobox component is a searchable multi-select component that allows users to
          select multiple options from a list. Selected items are displayed as badges with remove
          icons, and the component supports features like auto-resize, tag limiting, and code
          display.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Selecting multiple items from a large list</li>
          <li>When search/filter functionality is needed</li>
          <li>Tag selection scenarios</li>
          <li>Form fields requiring multiple selections with search</li>
          <li>When you need to display selected items as badges</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple multiple combobox example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={exampleOptions}
            label="Select Options"
            placeholder="Choose options..."
          />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} MultipleCombobox {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}MultipleCombobox options={'{'}options{'}'} label="Select" placeholder="Choose..." /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built-in search functionality</li>
          <li>Multiple selection with checkboxes</li>
          <li>Badge display with remove icons</li>
          <li>Auto-resize or truncate badges</li>
          <li>Limit tags display</li>
          <li>Code display support</li>
          <li>Label, error, and required support</li>
          <li>Keyboard navigation</li>
          <li>Disabled options support</li>
          <li>Type-safe with generic types</li>
        </ul>
      </div>
    </div>
  );
}

