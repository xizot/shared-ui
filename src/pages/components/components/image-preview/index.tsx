import { ImagePreview } from '@/components/ui/image-preview';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function ImagePreviewOverview() {
  const sampleImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop',
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The ImagePreview component displays images in a responsive grid layout with thumbnail
          previews. It can be integrated with ImageLightbox for full-size viewing and supports
          remove functionality.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Image galleries</li>
          <li>Photo albums</li>
          <li>Product image displays</li>
          <li>User uploaded images</li>
          <li>Any scenario requiring image grid display</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple image grid example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ImagePreview images={sampleImages} columns={3} />
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} ImagePreview {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">
                {'<'}ImagePreview images={'{'}images{'}'} columns={3} /{'>'}
              </div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Responsive grid layout (1-6 columns)</li>
          <li>Thumbnail previews with aspect ratio</li>
          <li>Click to open lightbox</li>
          <li>Remove/delete functionality</li>
          <li>Loading and empty states</li>
          <li>Support for URLs, Files, and objects</li>
          <li>Mobile responsive</li>
        </ul>
      </div>
    </div>
  );
}

