import { DatePicker } from '@/components/ui/date-picker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function DatePickerOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The DatePicker component provides a user-friendly interface for selecting dates. It supports
          single date selection, date-time selection, month selection, and can be integrated with input
          fields. The component includes built-in support for labels, error messages, and required field
          indicators.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Forms requiring date input</li>
          <li>Date selection with time precision</li>
          <li>Month/year selection scenarios</li>
          <li>Integration with input fields</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple date picker example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            label="Select Date"
            placeholder="Pick a date"
          />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} DatePicker {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}DatePicker label="Date" placeholder="Pick a date" /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single date selection</li>
          <li>Date-time selection with TimePicker</li>
          <li>Month selection mode</li>
          <li>Input field integration</li>
          <li>Label, error, and required support</li>
          <li>Customizable date formats</li>
          <li>Multiple size variants</li>
          <li>Cancel/Apply button workflow</li>
        </ul>
      </div>
    </div>
  );
}

