'use client';

import * as React from 'react';
import { ImagePreview, type ImagePreviewItem } from '@/components/ui/image-preview';
import { ImageLightbox } from '@/components/ui/image-lightbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ImagePreviewExamples() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const sampleImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop',
  ];

  const [images] = React.useState<ImagePreviewItem[]>(sampleImages);
  const [removableImages, setRemovableImages] = React.useState<ImagePreviewItem[]>(sampleImages);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleRemove = (index: number) => {
    setRemovableImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Grid</CardTitle>
          <CardDescription>Simple image grid with 3 columns</CardDescription>
        </CardHeader>
        <CardContent>
          <ImagePreview images={sampleImages.slice(0, 6)} columns={3} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Column Counts</CardTitle>
          <CardDescription>Grid layouts with different column counts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">2 Columns</h4>
            <ImagePreview images={sampleImages.slice(0, 4)} columns={2} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">4 Columns</h4>
            <ImagePreview images={sampleImages.slice(0, 4)} columns={4} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">6 Columns</h4>
            <ImagePreview images={sampleImages.slice(0, 6)} columns={6} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Lightbox</CardTitle>
          <CardDescription>Click images to open in lightbox viewer</CardDescription>
        </CardHeader>
        <CardContent>
          <ImagePreview
            images={images}
            columns={3}
            onClick={handleImageClick}
            showRemove={false}
          />
          <ImageLightbox
            images={images}
            open={lightboxOpen}
            onOpenChange={setLightboxOpen}
            initialIndex={lightboxIndex}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Remove Functionality</CardTitle>
          <CardDescription>Remove images from the grid</CardDescription>
        </CardHeader>
        <CardContent>
          <ImagePreview
            images={removableImages}
            columns={3}
            onRemove={handleRemove}
            onClick={handleImageClick}
          />
          <ImageLightbox
            images={removableImages}
            open={lightboxOpen}
            onOpenChange={setLightboxOpen}
            initialIndex={lightboxIndex}
          />
          {removableImages.length === 0 && (
            <div className="mt-4 text-sm text-muted-foreground text-center">
              All images removed
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Empty State</CardTitle>
          <CardDescription>Display when no images are available</CardDescription>
        </CardHeader>
        <CardContent>
          <ImagePreview images={[]} columns={3} emptyMessage="No images to display" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loading State</CardTitle>
          <CardDescription>Display loading indicator</CardDescription>
        </CardHeader>
        <CardContent>
          <ImagePreview images={[]} columns={3} loading />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Single Column</CardTitle>
          <CardDescription>Vertical list layout</CardDescription>
        </CardHeader>
        <CardContent>
          <ImagePreview images={sampleImages.slice(0, 3)} columns={1} />
        </CardContent>
      </Card>
    </div>
  );
}

