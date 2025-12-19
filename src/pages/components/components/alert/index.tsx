import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Info } from 'lucide-react';

export default function AlertOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Alert component displays important messages to users. It consists of AlertTitle and
          AlertDescription sub-components and supports different variants for different message
          types.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Displaying important information</li>
          <li>Showing success, error, or warning messages</li>
          <li>Notifying users of system status</li>
          <li>Providing contextual help or tips</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple alert example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              This is an alert message to inform you about something important.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Alert, AlertTitle, AlertDescription {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Alert{'>'}</div>
          <div className="ml-8">{'<'}AlertTitle{'>'}Title{'</'}AlertTitle{'>'}</div>
          <div className="ml-8">{'<'}AlertDescription{'>'}Description{'</'}AlertDescription{'>'}</div>
          <div className="ml-4">{'</'}Alert{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>
    </div>
  );
}

