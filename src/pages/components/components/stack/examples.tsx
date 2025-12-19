import { Stack } from '@/components/ui/stack';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function StackExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Vertical Stack (Default)</CardTitle>
          <CardDescription>Default column direction with spacing</CardDescription>
        </CardHeader>
        <CardContent>
          <Stack spacing={4} className="border p-4 rounded-md">
            <div className="bg-muted p-2 rounded">Item 1</div>
            <div className="bg-muted p-2 rounded">Item 2</div>
            <div className="bg-muted p-2 rounded">Item 3</div>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horizontal Stack</CardTitle>
          <CardDescription>Row direction stack</CardDescription>
        </CardHeader>
        <CardContent>
          <Stack direction="row" spacing={4} className="border p-4 rounded-md">
            <div className="bg-muted p-2 rounded">Item 1</div>
            <div className="bg-muted p-2 rounded">Item 2</div>
            <div className="bg-muted p-2 rounded">Item 3</div>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Spacing</CardTitle>
          <CardDescription>Various spacing options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Spacing 0</div>
            <Stack spacing={0} className="border p-4 rounded-md">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Spacing 2</div>
            <Stack spacing={2} className="border p-4 rounded-md">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Spacing 6</div>
            <Stack spacing={6} className="border p-4 rounded-md">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alignment</CardTitle>
          <CardDescription>Different alignment options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Start</div>
            <Stack direction="row" align="start" spacing={2} className="border p-4 rounded-md h-20">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Center</div>
            <Stack direction="row" align="center" spacing={2} className="border p-4 rounded-md h-20">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">End</div>
            <Stack direction="row" align="end" spacing={2} className="border p-4 rounded-md h-20">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Justify Content</CardTitle>
          <CardDescription>Different justify options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Between</div>
            <Stack direction="row" justify="between" spacing={2} className="border p-4 rounded-md">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Center</div>
            <Stack direction="row" justify="center" spacing={2} className="border p-4 rounded-md">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
            </Stack>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Evenly</div>
            <Stack direction="row" justify="evenly" spacing={2} className="border p-4 rounded-md">
              <div className="bg-muted p-2 rounded">Item 1</div>
              <div className="bg-muted p-2 rounded">Item 2</div>
              <div className="bg-muted p-2 rounded">Item 3</div>
            </Stack>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Wrap</CardTitle>
          <CardDescription>Stack with wrap enabled</CardDescription>
        </CardHeader>
        <CardContent>
          <Stack direction="row" wrap spacing={2} className="border p-4 rounded-md">
            <div className="bg-muted p-2 rounded">Item 1</div>
            <div className="bg-muted p-2 rounded">Item 2</div>
            <div className="bg-muted p-2 rounded">Item 3</div>
            <div className="bg-muted p-2 rounded">Item 4</div>
            <div className="bg-muted p-2 rounded">Item 5</div>
            <div className="bg-muted p-2 rounded">Item 6</div>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Real World Example</CardTitle>
          <CardDescription>Stack with buttons and content</CardDescription>
        </CardHeader>
        <CardContent>
          <Stack spacing={4} className="border p-6 rounded-md">
            <h3 className="text-lg font-semibold">Form Actions</h3>
            <p className="text-sm text-muted-foreground">
              Use Stack to organize form elements and actions
            </p>
            <Stack direction="row" spacing={2} justify="end">
              <Button variant="outline">Cancel</Button>
              <Button>Submit</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

