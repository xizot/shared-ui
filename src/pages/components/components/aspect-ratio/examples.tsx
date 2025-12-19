import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AspectRatioExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>16:9 Aspect Ratio</CardTitle>
          <CardDescription>Common video aspect ratio</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">16:9</span>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4:3 Aspect Ratio</CardTitle>
          <CardDescription>Traditional display aspect ratio</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">4:3</span>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>1:1 Aspect Ratio</CardTitle>
          <CardDescription>Square aspect ratio</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">1:1</span>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>21:9 Aspect Ratio</CardTitle>
          <CardDescription>Ultrawide aspect ratio</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={21 / 9} className="bg-muted rounded-md overflow-hidden">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">21:9</span>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Image</CardTitle>
          <CardDescription>Aspect ratio with image content</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
              alt="Example"
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Video Container</CardTitle>
          <CardDescription>Aspect ratio for video embeds</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-4xl">▶</div>
                <p className="text-sm text-muted-foreground">Video Player</p>
              </div>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>Card layout with aspect ratio image</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full max-w-sm rounded-lg border overflow-hidden">
            <AspectRatio ratio={4 / 3} className="bg-muted">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
                alt="Card image"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Card Title</h3>
              <p className="text-sm text-muted-foreground">Card description goes here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Responsive Aspect Ratio</CardTitle>
          <CardDescription>Different ratios at different sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">Mobile (1:1)</div>
              <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-sm text-muted-foreground">1:1</span>
                </div>
              </AspectRatio>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">Desktop (16:9)</div>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-sm text-muted-foreground">16:9</span>
                </div>
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

