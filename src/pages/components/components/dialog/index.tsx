import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Code } from 'lucide-react';

export default function DialogOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Dialog component is a modal overlay that appears on top of the main content. It's
          built on Radix UI and provides accessible dialog functionality with proper focus
          management and keyboard navigation.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Confirming user actions</li>
          <li>Displaying forms or additional content</li>
          <li>Showing detailed information</li>
          <li>Alerting users about important information</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple dialog example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>Dialog description goes here.</DialogDescription>
              </DialogHeader>
              <div>Dialog content</div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
          DialogDescription {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Dialog{'>'}</div>
          <div className="ml-8">{'<'}DialogTrigger asChild{'>'}</div>
          <div className="ml-12">{'<'}Button{'>'}Open{'{'}</div>
          <div className="ml-8">{'</'}DialogTrigger{'>'}</div>
          <div className="ml-8">{'<'}DialogContent{'>'}</div>
          <div className="ml-12">{'<'}DialogHeader{'>'}</div>
          <div className="ml-16">{'<'}DialogTitle{'>'}Title{'{'}</div>
          <div className="ml-16">{'</'}DialogDescription{'>'}Description{'{'}</div>
          <div className="ml-12">{'</'}DialogHeader{'>'}</div>
          <div className="ml-8">{'</'}DialogContent{'>'}</div>
          <div className="ml-4">{'</'}Dialog{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Accessible focus management</li>
          <li>Keyboard navigation (ESC to close)</li>
          <li>Backdrop overlay</li>
          <li>Controlled and uncontrolled modes</li>
          <li>Optional close button</li>
        </ul>
      </div>
    </div>
  );
}

