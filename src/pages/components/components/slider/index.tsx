import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function SliderOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Slider component allows users to select a value or range from a continuous scale.
          Built on Radix UI, it provides accessible slider functionality with keyboard support.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Selecting numeric values from a range</li>
          <li>Volume controls</li>
          <li>Price range filters</li>
          <li>Any continuous value selection</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple slider example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider defaultValue={[50]} max={100} step={1} />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Slider {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}Slider defaultValue={'{'} [50] {'}'} max={100} step={1} /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single or range value selection</li>
          <li>Keyboard navigation (Arrow keys)</li>
          <li>Customizable min, max, and step values</li>
          <li>Controlled and uncontrolled modes</li>
        </ul>
      </div>
    </div>
  );
}

