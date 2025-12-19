import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function SwitchOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Switch component is a toggle switch control that allows users to turn an option on or
          off. Built on Radix UI, it provides accessible toggle functionality with smooth animations.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Toggle settings and preferences</li>
          <li>Enable/disable features</li>
          <li>Binary on/off states</li>
          <li>Settings panels</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple switch example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Switch {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Switch id="toggle" /{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>
    </div>
  );
}

