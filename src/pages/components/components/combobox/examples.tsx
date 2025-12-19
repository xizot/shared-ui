import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Combobox } from '@/components/ui/combobox';
import { useState } from 'react';

const countries = [
  { id: 'us', name: 'United States', code: 'US'},
  { id: 'uk', name: 'United Kingdom', code: 'UK' },
  { id: 'ca', name: 'Canada', code: 'CA' },
  { id: 'au', name: 'Australia', code: 'AU' },
  { id: 'de', name: 'Germany', code: 'DE' },
];

const optionsWithDisabled = [
  { id: '1', name: 'Available Option 1' },
  { id: '2', name: 'Available Option 2' },
  { id: '3', name: 'Disabled Option', disabled: true },
  { id: '4', name: 'Available Option 3' },
];

export default function ComboboxExamples() {
  const [value1, setValue1] = useState<string>();
  const [value2, setValue2] = useState<string>();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Combobox</CardTitle>
          <CardDescription>Simple combobox with options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={countries}
            value={value1}
            onChange={(val) => setValue1(val)}
            label="Country"
            placeholder="Select a country..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Required Indicator</CardTitle>
          <CardDescription>Combobox with required field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={countries}
            label="Country"
            required
            placeholder="Select a country..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Error State</CardTitle>
          <CardDescription>Combobox with error message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={countries}
            value={value2}
            onChange={(val) => setValue2(val)}
            label="Country"
            error="Please select a country"
            placeholder="Select a country..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Disabled Options</CardTitle>
          <CardDescription>Combobox with some disabled options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={optionsWithDisabled}
            label="Select Option"
            placeholder="Choose an option..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled combobox</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={countries}
            label="Country"
            disabled
            placeholder="Cannot select"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Placeholders</CardTitle>
          <CardDescription>Combobox with custom search placeholder</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Combobox
            options={countries}
            label="Country"
            placeholder="Choose a country..."
            searchPlaceholder="Search countries..."
            emptyMessage="No countries found"
          />
        </CardContent>
      </Card>
    </div>
  );
}

