import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/lib/toast';
import { Code } from 'lucide-react';

export default function ToastOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          Toast notifications provide non-intrusive feedback to users. The Toast component uses
          Sonner library and includes a utility API for easy usage. Toasts appear at the top-right
          of the screen with customizable colors and AAA contrast compliance.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Success messages after actions</li>
          <li>Error notifications</li>
          <li>Warning messages</li>
          <li>Informational updates</li>
          <li>Loading states for async operations</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple toast example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast.success('Operation successful!')}>Success</Button>
            <Button onClick={() => toast.error('Something went wrong')}>Error</Button>
            <Button onClick={() => toast.info('New update available')}>Info</Button>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} toast, Toaster {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Toaster /{'>'}</div>
          <div className="ml-4">{'<'}Button onClick={'{'}() ={'>'} toast.success('Success!'){'}'}{'>'}</div>
          <div className="ml-8">Show Toast</div>
          <div className="ml-4">{'</'}Button{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Setup Required</h3>
        <p className="text-muted-foreground">
          You must add the <code className="rounded bg-muted px-1 py-0.5 text-sm">Toaster</code>{' '}
          component to your app root to enable toast notifications:
        </p>
        <div className="bg-muted p-4 rounded-md font-mono text-sm">
          <div>{'<'}Toaster /{'>'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Multiple toast types: success, error, warning, info, default, loading</li>
          <li>Promise-based toasts for async operations</li>
          <li>AAA contrast compliant colors</li>
          <li>Customizable duration and actions</li>
          <li>Positioned at top-right by default</li>
        </ul>
      </div>
    </div>
  );
}

