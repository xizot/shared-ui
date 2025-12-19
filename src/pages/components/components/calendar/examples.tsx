import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';

export default function CalendarExamples() {
  const [date, setDate] = useState<Date>();
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Single Date Selection</CardTitle>
          <CardDescription>Select a single date</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar mode="single" selected={date} onSelect={setDate} />
          {date && (
            <p className="text-sm text-muted-foreground">
              Selected: {format(date, 'PPP')}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Date Range Selection</CardTitle>
          <CardDescription>Select a date range</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar mode="range" selected={range} onSelect={setRange} />
          {range?.from && (
            <p className="text-sm text-muted-foreground">
              From: {format(range.from, 'PPP')}
              {range?.to && ` To: ${format(range.to, 'PPP')}`}
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Date Selection</CardTitle>
          <CardDescription>Select multiple dates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar mode="multiple" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Disabled Dates</CardTitle>
          <CardDescription>Calendar with disabled dates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar
            mode="single"
            disabled={(date) => date < new Date()}
          />
          <p className="text-sm text-muted-foreground">Past dates are disabled</p>
        </CardContent>
      </Card>
    </div>
  );
}

