import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function TooltipOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Tooltip component displays a brief message when hovering over an element. Built on
          Radix UI, it provides accessible tooltip functionality with proper positioning and delay
          handling.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Providing additional context or information</li>
          <li>Explaining icon buttons</li>
          <li>Showing truncated text</li>
          <li>Any hover-triggered help text</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple tooltip example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Tooltip, TooltipTrigger, TooltipContent {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Tooltip{'>'}</div>
          <div className="ml-8">{'<'}TooltipTrigger asChild{'>'}</div>
          <div className="ml-12">{'<'}Button{'>'}Hover{'{'}</div>
          <div className="ml-8">{'</'}TooltipTrigger{'>'}</div>
          <div className="ml-8">{'<'}TooltipContent{'>'}Tooltip text{'{'}</div>
          <div className="ml-4">{'</'}Tooltip{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Automatic positioning</li>
          <li>Configurable delay</li>
          <li>Keyboard accessible</li>
          <li>Collision detection</li>
        </ul>
      </div>
    </div>
  );
}

