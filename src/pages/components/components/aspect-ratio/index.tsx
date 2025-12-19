import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function AspectRatioOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The AspectRatio component maintains a consistent aspect ratio for its content. Built on Radix
          UI, it's perfect for images, videos, and other media that need to maintain specific
          proportions regardless of container size.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Image galleries</li>
          <li>Video embeds</li>
          <li>Card layouts with images</li>
          <li>Responsive media containers</li>
          <li>Any content requiring fixed aspect ratios</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple aspect ratio example</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">16:9</span>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} AspectRatio {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}AspectRatio ratio={16 / 9}{'>'}...{'</'}AspectRatio{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Maintains aspect ratio automatically</li>
          <li>Flexible ratio configuration</li>
          <li>Perfect for images and videos</li>
          <li>Responsive by default</li>
          <li>Built on Radix UI primitives</li>
        </ul>
      </div>
    </div>
  );
}

