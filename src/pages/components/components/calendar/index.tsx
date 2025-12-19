import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function CalendarOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Calendar component provides a date picker interface built on react-day-picker. It
          supports single date selection, date ranges, and multiple dates with customizable
          styling and behavior.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Date selection in forms</li>
          <li>Date range pickers</li>
          <li>Calendar views</li>
          <li>Booking and scheduling interfaces</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple calendar example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar mode="single" />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Calendar {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Calendar mode="single" /{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single date, range, or multiple selection modes</li>
          <li>Keyboard navigation</li>
          <li>Internationalization support</li>
          <li>Customizable styling</li>
          <li>Disabled dates support</li>
        </ul>
      </div>
    </div>
  );
}

