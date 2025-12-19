import { Grid } from '@/components/ui/grid';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GridExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>2 Columns</CardTitle>
          <CardDescription>Grid with 2 columns</CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={2} gap={4}>
            <div className="bg-muted p-4 rounded-md text-center">Item 1</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 2</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 3</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 4</div>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3 Columns</CardTitle>
          <CardDescription>Grid with 3 columns</CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={3} gap={4}>
            <div className="bg-muted p-4 rounded-md text-center">Item 1</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 2</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 3</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 4</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 5</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 6</div>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4 Columns</CardTitle>
          <CardDescription>Grid with 4 columns</CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={4} gap={4}>
            <div className="bg-muted p-4 rounded-md text-center">Item 1</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 2</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 3</div>
            <div className="bg-muted p-4 rounded-md text-center">Item 4</div>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>12 Column Grid</CardTitle>
          <CardDescription>12-column grid system</CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={12} gap={2}>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-12">Full (12)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-6">Half (6)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-6">Half (6)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-4">Third (4)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-4">Third (4)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-4">Third (4)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-3">Quarter (3)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-3">Quarter (3)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-3">Quarter (3)</div>
            <div className="bg-muted p-2 rounded-md text-center text-xs col-span-3">Quarter (3)</div>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Gaps</CardTitle>
          <CardDescription>Various gap sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Gap 0</div>
            <Grid cols={3} gap={0}>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 1</div>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 2</div>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 3</div>
            </Grid>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Gap 2</div>
            <Grid cols={3} gap={2}>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 1</div>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 2</div>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 3</div>
            </Grid>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Gap 6</div>
            <Grid cols={3} gap={6}>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 1</div>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 2</div>
              <div className="bg-muted p-2 rounded-md text-center text-xs">Item 3</div>
            </Grid>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Responsive Grid</CardTitle>
          <CardDescription>Grid with responsive breakpoints</CardDescription>
        </CardHeader>
        <CardContent>
          <Grid
            cols={1}
            gap={4}
            responsive={{
              sm: 2,
              md: 3,
              lg: 4,
            }}
          >
            <div className="bg-muted p-4 rounded-md text-center text-sm">
              1 col (mobile), 2 cols (sm), 3 cols (md), 4 cols (lg)
            </div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 2</div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 3</div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 4</div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 5</div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 6</div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 7</div>
            <div className="bg-muted p-4 rounded-md text-center text-sm">Item 8</div>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card Grid</CardTitle>
          <CardDescription>Grid with card-like items</CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={3} gap={4}>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Card 1</h4>
              <p className="text-sm text-muted-foreground">Card content goes here</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Card 2</h4>
              <p className="text-sm text-muted-foreground">Card content goes here</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Card 3</h4>
              <p className="text-sm text-muted-foreground">Card content goes here</p>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

