import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Checkbox</CardTitle>
          <CardDescription>Simple checkbox</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox1" />
            <Label htmlFor="checkbox1">Checkbox label</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Checked State</CardTitle>
          <CardDescription>Pre-checked checkbox</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox2" defaultChecked />
            <Label htmlFor="checkbox2">Pre-checked</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled checkboxes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox3" disabled />
            <Label htmlFor="checkbox3">Disabled unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox4" disabled defaultChecked />
            <Label htmlFor="checkbox4">Disabled checked</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Checkboxes</CardTitle>
          <CardDescription>Group of checkboxes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different checkbox sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="size-xxs" size="xxs" />
              <Label htmlFor="size-xxs">XXS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-xs" size="xs" />
              <Label htmlFor="size-xs">XS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-sm" size="sm" />
              <Label htmlFor="size-sm">SM</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-md" size="md" />
              <Label htmlFor="size-md">MD (default)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-lg" size="lg" />
              <Label htmlFor="size-lg">LG</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-xl" size="xl" />
              <Label htmlFor="size-xl">XL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="size-xxl" size="xxl" />
              <Label htmlFor="size-xxl">XXL</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

