import { useState } from 'react';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { DateRange } from 'react-day-picker';

export default function DateRangePickerExamples() {
  const [range1, setRange1] = useState<DateRange | undefined>();
  const [range2, setRange2] = useState<DateRange | undefined>();
  const [range3, setRange3] = useState<DateRange | undefined>();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Date Range Picker</CardTitle>
          <CardDescription>Simple date range picker with presets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            value={range1}
            onChange={setRange1}
            label="Select Date Range"
            placeholder={{ from: 'From date', to: 'To date' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Without Presets</CardTitle>
          <CardDescription>Date range picker without preset options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            value={range2}
            onChange={setRange2}
            label="Select Range"
            showPresets={false}
            placeholder={{ from: 'Start date', to: 'End date' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Presets</CardTitle>
          <CardDescription>Date range picker with custom preset options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            value={range3}
            onChange={setRange3}
            label="Select Range"
            presets={[
              {
                label: 'Last Week',
                range: {
                  from: new Date(2024, 0, 1),
                  to: new Date(2024, 0, 7),
                },
              },
              {
                label: 'Last Month',
                range: {
                  from: new Date(2024, 0, 1),
                  to: new Date(2024, 0, 31),
                },
              },
            ]}
            placeholder={{ from: 'From', to: 'To' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Required Indicator</CardTitle>
          <CardDescription>Date range picker with required field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            label="Date Range"
            required={true}
            placeholder={{ from: 'From date', to: 'To date' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Error State</CardTitle>
          <CardDescription>Date range picker with error message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            value={range1}
            onChange={setRange1}
            label="Date Range"
            error="Please select a valid date range"
            placeholder={{ from: 'From date', to: 'To date' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled date range picker</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            label="Date Range"
            disabled
            placeholder={{ from: 'Cannot select', to: 'Cannot select' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Date Format</CardTitle>
          <CardDescription>Date range picker with custom format</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            value={range1}
            onChange={setRange1}
            label="Date Range"
            dateFormat="PPP"
            placeholder={{ from: 'From date', to: 'To date' }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Sizes</CardTitle>
          <CardDescription>Date range picker with different sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DateRangePicker
            value={range1}
            onChange={setRange1}
            label="Small"
            size="sm"
            placeholder={{ from: 'From', to: 'To' }}
          />
          <DateRangePicker
            value={range1}
            onChange={setRange1}
            label="Default"
            size="md"
            placeholder={{ from: 'From', to: 'To' }}
          />
          <DateRangePicker
            value={range1}
            onChange={setRange1}
            label="Large"
            size="lg"
            placeholder={{ from: 'From', to: 'To' }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

