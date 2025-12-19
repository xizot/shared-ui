import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { format } from 'date-fns';
import { useState } from 'react';
import { vi } from 'date-fns/locale';

export default function DatePickerExamples() {
  const [date1, setDate1] = useState<Date>();
  const [date2, setDate2] = useState<Date>();
  const [date4, setDate4] = useState<Date>();
  const [timeOnly, setTimeOnly] = useState<Date>();
  const [monthPicker, setMonthPicker] = useState<Date>();
  const [localeDate, setLocaleDate] = useState<Date>();
  const [localeMonth, setLocaleMonth] = useState<Date>();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Date Picker</CardTitle>
          <CardDescription>Simple date picker with single date selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Select Date"
            placeholder="Pick a date"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>DateTime Picker</CardTitle>
          <CardDescription>Date picker with time selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date2}
            onChange={setDate2}
            label="Select Date & Time"
            placeholder="Pick a date and time"
            showTime
            dateFormat="dd/MM/yyyy HH:mm:ss"
          />
          <div className="mt-4 p-4 bg-muted rounded-md space-y-2">
            <p className="text-sm font-medium">State Value:</p>
            {date2 ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Formatted: {format(date2, 'dd/MM/yyyy HH:mm:ss')}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  ISO: {date2.toISOString()}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Hours: {date2.getHours()}, Minutes: {date2.getMinutes()}, Seconds:{' '}
                  {date2.getSeconds()}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">No date selected</p>
            )}
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>With Required Indicator</CardTitle>
          <CardDescription>Date picker with required field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            label="Required Date"
            required={true}
            placeholder="Pick a date"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Error State</CardTitle>
          <CardDescription>Date picker with error message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date4}
            onChange={setDate4}
            label="Date"
            error="Please select a valid date"
            placeholder="Pick a date"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled date picker</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            label="Date"
            disabled
            placeholder="Cannot select"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Date Format</CardTitle>
          <CardDescription>Date picker with custom format</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Date"
            dateFormat="PPP"
            placeholder="Pick a date"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Sizes</CardTitle>
          <CardDescription>Date picker with different sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Small"
            size="sm"
            placeholder="Pick a date"
          />
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Default"
            size="md"
            placeholder="Pick a date"
          />
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Large"
            size="lg"
            placeholder="Pick a date"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled Past Dates</CardTitle>
          <CardDescription>Date picker with past dates disabled</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Select Date"
            placeholder="Pick a date"
            disabledPast
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled Future Dates</CardTitle>
          <CardDescription>Date picker with future dates disabled</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={date1}
            onChange={setDate1}
            label="Select Date"
            placeholder="Pick a date"
            disabledFuture
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Time Picker Only</CardTitle>
          <CardDescription>Time picker without date selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={timeOnly}
            onChange={setTimeOnly}
            label="Select Time"
            placeholder="Pick a time"
            timeOnly
          />
          <div className="mt-4 p-4 bg-muted rounded-md space-y-2">
            <p className="text-sm font-medium">State Value:</p>
            {timeOnly ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Formatted: {format(timeOnly, 'HH:mm:ss')}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  ISO: {timeOnly.toISOString()}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Hours: {timeOnly.getHours()}, Minutes: {timeOnly.getMinutes()}, Seconds:{' '}
                  {timeOnly.getSeconds()}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">No time selected</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Month Picker</CardTitle>
          <CardDescription>Date picker for selecting month and year only</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={monthPicker}
            onChange={setMonthPicker}
            label="Select Month"
            placeholder="Pick a month"
            mode="month"
          />
          <div className="mt-4 p-4 bg-muted rounded-md space-y-2">
            <p className="text-sm font-medium">State Value:</p>
            {monthPicker ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Formatted: {format(monthPicker, 'MM/yyyy')}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  ISO: {monthPicker.toISOString()}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Month: {monthPicker.getMonth() + 1}, Year: {monthPicker.getFullYear()}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">No month selected</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Locale (Vietnamese)</CardTitle>
          <CardDescription>Date picker with Vietnamese locale for date and month names</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={localeDate}
            onChange={setLocaleDate}
            label="Chọn ngày"
            placeholder="Chọn một ngày"
            locale={vi}
            cancelText="Hủy"
            applyText="Áp dụng"
          />
          <div className="mt-4 p-4 bg-muted rounded-md space-y-2">
            <p className="text-sm font-medium">State Value:</p>
            {localeDate ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Formatted: {format(localeDate, 'dd/MM/yyyy', { locale: vi })}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  ISO: {localeDate.toISOString()}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Chưa chọn ngày</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Month Picker with Locale</CardTitle>
          <CardDescription>Month picker with Vietnamese locale showing Vietnamese month names</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DatePicker
            value={localeMonth}
            onChange={setLocaleMonth}
            label="Chọn tháng"
            placeholder="Chọn một tháng"
            mode="month"
            locale={vi}
            cancelText="Hủy"
            applyText="Áp dụng"
          />
          <div className="mt-4 p-4 bg-muted rounded-md space-y-2">
            <p className="text-sm font-medium">State Value:</p>
            {localeMonth ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Formatted: {format(localeMonth, 'MM/yyyy', { locale: vi })}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  ISO: {localeMonth.toISOString()}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Month: {localeMonth.getMonth() + 1}, Year: {localeMonth.getFullYear()}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Chưa chọn tháng</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

