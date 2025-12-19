import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RadioGroupExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Radio Group</CardTitle>
          <CardDescription>Simple radio group</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="basic1" />
              <Label htmlFor="basic1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="basic2" />
              <Label htmlFor="basic2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3" id="basic3" />
              <Label htmlFor="basic3">Option 3</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Layout</CardTitle>
          <CardDescription>Radio group with vertical spacing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="small">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="size1" />
              <Label htmlFor="size1">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="size2" />
              <Label htmlFor="size2">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="size3" />
              <Label htmlFor="size3">Large</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horizontal Layout</CardTitle>
          <CardDescription>Radio group in a row</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="left" className="flex flex-row gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="left" id="align1" />
              <Label htmlFor="align1">Left</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="center" id="align2" />
              <Label htmlFor="align2">Center</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="right" id="align3" />
              <Label htmlFor="align3">Right</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Radio group with disabled items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="disabled1" />
              <Label htmlFor="disabled1">Enabled Option</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="disabled2" disabled />
              <Label htmlFor="disabled2" className="text-muted-foreground">
                Disabled Option
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3" id="disabled3" />
              <Label htmlFor="disabled3">Another Enabled Option</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>Radio group with group label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Select Size</Label>
            <RadioGroup defaultValue="medium">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="label1" />
                <Label htmlFor="label1">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="label2" />
                <Label htmlFor="label2">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="label3" />
                <Label htmlFor="label3">Large</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different radio button sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <RadioGroup defaultValue="xxs">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="xxs" id="radio-xxs" size="xxs" />
                <Label htmlFor="radio-xxs">XXS</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="xs">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="xs" id="radio-xs" size="xs" />
                <Label htmlFor="radio-xs">XS</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="sm">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sm" id="radio-sm" size="sm" />
                <Label htmlFor="radio-sm">SM</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="md">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="md" id="radio-md" size="md" />
                <Label htmlFor="radio-md">MD (default)</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="lg">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lg" id="radio-lg" size="lg" />
                <Label htmlFor="radio-lg">LG</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="xl">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="xl" id="radio-xl" size="xl" />
                <Label htmlFor="radio-xl">XL</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="xxl">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="xxl" id="radio-xxl" size="xxl" />
                <Label htmlFor="radio-xxl">XXL</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

