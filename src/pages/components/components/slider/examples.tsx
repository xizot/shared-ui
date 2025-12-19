import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function SliderExamples() {
  const [value, setValue] = useState([50]);
  const [range, setRange] = useState([20, 80]);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Slider</CardTitle>
          <CardDescription>Simple single-value slider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider defaultValue={[50]} max={100} step={1} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Slider</CardTitle>
          <CardDescription>Slider with controlled value</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Label>Value: {value[0]}</Label>
            </div>
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Range Slider</CardTitle>
          <CardDescription>Slider with range selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Label>Range: {range[0]} - {range[1]}</Label>
            </div>
            <Slider value={range} onValueChange={setRange} max={100} step={1} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Step</CardTitle>
          <CardDescription>Slider with custom step value</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider defaultValue={[25]} max={100} step={5} />
          <p className="text-sm text-muted-foreground">Step: 5</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled Slider</CardTitle>
          <CardDescription>Disabled slider state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider defaultValue={[50]} max={100} step={1} disabled />
        </CardContent>
      </Card>
    </div>
  );
}

