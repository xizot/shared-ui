import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MultipleCombobox } from '@/components/ui/multiple-combobox';
import { useState } from 'react';

const countries = [
  { id: 'us', name: 'United States', code: 'US' },
  { id: 'uk', name: 'United Kingdom', code: 'UK' },
  { id: 'ca', name: 'Canada', code: 'CA' },
  { id: 'au', name: 'Australia', code: 'AU' },
  { id: 'de', name: 'Germany', code: 'DE' },
  { id: 'fr', name: 'France', code: 'FR' },
  { id: 'it', name: 'Italy', code: 'IT' },
  { id: 'es', name: 'Spain', code: 'ES' },
  { id: 'br', name: 'Brazil', code: 'BR' },
  { id: 'mx', name: 'Mexico', code: 'MX' },
  { id: 'ar', name: 'Argentina', code: 'AR' },
  { id: 'co', name: 'Colombia', code: 'CO' },
  { id: 'pe', name: 'Peru', code: 'PE' },
  { id: 'cl', name: 'Chile', code: 'CL' },
  { id: 'es1', name: 'Spain 1', code: 'ES' },
  { id: 'es2', name: 'Spain 2', code: 'ES' },
  { id: 'es3', name: 'Spain 3', code: 'ES' },
] as const;

const optionsWithDisabled = [
  { id: '1', name: 'Available Option 1' },
  { id: '2', name: 'Available Option 2' },
  { id: '3', name: 'Disabled Option', disabled: true },
  { id: '4', name: 'Available Option 3' },
  { id: '5', name: 'Available Option 4' },
  { id: '6', name: 'Available Option 5' },
  { id: '7', name: 'Available Option 6' },
  { id: '8', name: 'Available Option 7' },
  { id: '9', name: 'Available Option 8' },
  { id: '10', name: 'Available Option 9' },
  { id: '11', name: 'Available Option 10' },
  { id: '12', name: 'Available Option 11' },
  { id: '13', name: 'Available Option 12' },
] as const;

export default function MultipleComboboxExamples() {
  const [value1, setValue1] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>(['us', 'uk']);
  const [value3, setValue3] = useState<string[]>(['us', 'uk', 'ca', 'au', 'de']);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Multiple Combobox</CardTitle>
          <CardDescription>Simple multiple selection combobox</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value1}
            onChange={(values, options) => {
              setValue1(values);
              console.log('Selected:', values, options);
            }}
            label="Select Countries"
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Code Display</CardTitle>
          <CardDescription>Show code in badges and options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value2}
            onChange={(values) => setValue2(values)}
            label="Countries"
            showCode
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AutoResize (Default)</CardTitle>
          <CardDescription>Badges wrap to new lines when needed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value3}
            onChange={(values) => setValue3(values)}
            label="Countries"
            autoResize
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>No AutoResize</CardTitle>
          <CardDescription>Badges truncate instead of wrapping</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value3}
            onChange={(values) => setValue3(values)}
            label="Countries"
            autoResize={false}
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limit Tags</CardTitle>
          <CardDescription>Limit number of displayed badges</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value3}
            onChange={(values) => setValue3(values)}
            label="Countries"
            limitTags={3}
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Required Indicator</CardTitle>
          <CardDescription>Multiple combobox with required field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            label="Countries"
            required
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Error State</CardTitle>
          <CardDescription>Multiple combobox with error message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value1}
            onChange={(values) => setValue1(values)}
            label="Countries"
            error="Please select at least one country"
            placeholder="Select countries..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Disabled Options</CardTitle>
          <CardDescription>Multiple combobox with some disabled options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={optionsWithDisabled}
            label="Select Options"
            placeholder="Choose options..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled multiple combobox</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value2}
            label="Countries"
            disabled
            placeholder="Cannot select"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Readonly State</CardTitle>
          <CardDescription>Readonly multiple combobox (cannot remove badges)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries}
            value={value2}
            label="Countries"
            readonly
            placeholder="Cannot modify"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different multiple combobox sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MultipleCombobox
            options={countries.slice(0, 3)}
            size="sm"
            label="Small"
            placeholder="Select..."
          />
          <MultipleCombobox
            options={countries.slice(0, 3)}
            size="md"
            label="Medium (default)"
            placeholder="Select..."
          />
          <MultipleCombobox
            options={countries.slice(0, 3)}
            size="lg"
            label="Large"
            placeholder="Select..."
          />
        </CardContent>
      </Card>
    </div>
  );
}

