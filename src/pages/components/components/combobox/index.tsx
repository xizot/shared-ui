import { Combobox } from '@/components/ui/combobox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

const exampleOptions = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
];

export default function ComboboxOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Combobox component is a searchable select/autocomplete component that combines a
          text input with a dropdown list. It allows users to search and select from a list of
          options, with built-in support for labels, error messages, and required field indicators.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Selecting from a large list of options</li>
          <li>When search/filter functionality is needed</li>
          <li>Autocomplete scenarios</li>
          <li>Form fields requiring selection with search</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple combobox example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={exampleOptions}
            label="Select Option"
            placeholder="Choose an option..."
          />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Combobox {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}Combobox options={'{'}options{'}'} label="Select" placeholder="Choose..." /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built-in search functionality</li>
          <li>Label, error, and required support</li>
          <li>Keyboard navigation</li>
          <li>Disabled options support</li>
          <li>Customizable placeholder and empty messages</li>
        </ul>
      </div>
    </div>
  );
}

