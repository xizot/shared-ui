import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function SeparatorOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Separator component displays a visual divider line to separate content sections. Built
          on Radix UI, it provides accessible separator functionality with proper ARIA attributes.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Separating content sections</li>
          <li>Dividing menu items</li>
          <li>Visual content organization</li>
          <li>Any visual divider needs</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple separator example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Separator />
          <div>Content below</div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Separator {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Separator /{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Horizontal and vertical orientations</li>
          <li>Accessible ARIA attributes</li>
          <li>Decorative option</li>
          <li>Simple and lightweight</li>
        </ul>
      </div>
    </div>
  );
}

