import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    </div>
  );
}

