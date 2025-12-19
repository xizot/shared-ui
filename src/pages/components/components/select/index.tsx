import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function SelectOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Select component is a dropdown select input built on Radix UI. It supports labels,
          error messages, and required field indicators, providing a consistent interface for
          single-choice selections.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single-choice selections from a list</li>
          <li>Dropdown menus with multiple options</li>
          <li>Form fields requiring selection</li>
          <li>Settings and configuration options</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple select example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger label="Country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Select, SelectTrigger, SelectValue, SelectContent, SelectItem {'}'} from
          'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Select{'>'}</div>
          <div className="ml-8">
            {'<'}SelectTrigger label="Country"{'>'}
          </div>
          <div className="ml-12">{'<'}SelectValue placeholder="Select..." /{'>'}</div>
          <div className="ml-8">{'</'}SelectTrigger{'>'}</div>
          <div className="ml-8">{'<'}SelectContent{'>'}</div>
          <div className="ml-12">{'<'}SelectItem value="option1"{'>'}Option 1{'</'}SelectItem{'>'}</div>
          <div className="ml-8">{'</'}SelectContent{'>'}</div>
          <div className="ml-4">{'</'}Select{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built-in label, error, and required support</li>
          <li>Keyboard navigation and accessibility</li>
          <li>Accessible ARIA attributes</li>
          <li>Multiple sizes: xxs, xs, sm, md (default), lg, xl, xxl</li>
          <li>Disabled state support</li>
          <li>Consistent styling with design system</li>
        </ul>
      </div>
    </div>
  );
}

