import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function CarouselOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Carousel component provides a sliding carousel interface for displaying content. It
          supports horizontal and vertical orientations, custom navigation, and integrates with
          Embla Carousel for smooth animations.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Image galleries</li>
          <li>Product showcases</li>
          <li>Testimonial sliders</li>
          <li>Content carousels</li>
          <li>Any sliding content display</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple carousel example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext{' '}
              {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">{'<'}Carousel{'>'}</div>
              <div className="ml-8">{'<'}CarouselContent{'>'}</div>
              <div className="ml-12">{'<'}CarouselItem{'>'}...{'</'}CarouselItem{'>'}</div>
              <div className="ml-8">{'</'}CarouselContent{'>'}</div>
              <div className="ml-8">{'<'}CarouselPrevious /{'>'}</div>
              <div className="ml-8">{'<'}CarouselNext /{'>'}</div>
              <div className="ml-4">{'</'}Carousel{'>'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Horizontal and vertical orientations</li>
          <li>Custom navigation buttons</li>
          <li>Smooth animations</li>
          <li>Keyboard navigation</li>
          <li>Touch/swipe support</li>
          <li>Customizable options</li>
          <li>Accessible</li>
        </ul>
      </div>
    </div>
  );
}

