import { DateRangePicker } from '@/components/ui/date-range-picker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function DateRangePickerOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The DateRangePicker component allows users to select a range of dates. It includes preset
          options for common date ranges (Today, Last 7 days, This Month, etc.) and provides a
          calendar interface for custom range selection. The component supports labels, error messages,
          and required field indicators.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Filtering data by date range</li>
          <li>Reports and analytics dashboards</li>
          <li>Booking and reservation systems</li>
          <li>Any scenario requiring date range selection</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple date range picker example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            label="Select Date Range"
            placeholder={{ from: 'From date', to: 'To date' }}
          />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} DateRangePicker {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}DateRangePicker label="Range" placeholder={'{{'} from: 'From', to: 'To' {'}}'} /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Date range selection with calendar</li>
          <li>Built-in preset options (Today, Last 7 days, etc.)</li>
          <li>Custom preset support</li>
          <li>Label, error, and required support</li>
          <li>Customizable date formats</li>
          <li>Multiple size variants</li>
          <li>Cancel/Apply button workflow</li>
        </ul>
      </div>
    </div>
  );
}

