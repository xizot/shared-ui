import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function PopoverOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Popover component displays floating content positioned relative to a trigger element.
          Built on Radix UI, it provides accessible popover functionality with proper positioning
          and focus management.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Displaying additional information</li>
          <li>Contextual actions or menus</li>
          <li>Form inputs with helper text</li>
          <li>Any floating content that needs positioning</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple popover example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>Popover content goes here</PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Popover, PopoverTrigger, PopoverContent {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Popover{'>'}</div>
          <div className="ml-8">{'<'}PopoverTrigger asChild{'>'}</div>
          <div className="ml-12">{'<'}Button{'>'}Open{'{'}</div>
          <div className="ml-8">{'</'}PopoverTrigger{'>'}</div>
          <div className="ml-8">{'<'}PopoverContent{'>'}Content{'{'}</div>
          <div className="ml-4">{'</'}Popover{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Automatic positioning</li>
          <li>Collision detection</li>
          <li>Keyboard navigation</li>
          <li>Controlled and uncontrolled modes</li>
        </ul>
      </div>
    </div>
  );
}

