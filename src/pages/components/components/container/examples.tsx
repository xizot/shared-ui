import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContainerExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Default Container</CardTitle>
          <CardDescription>Container with default max-width (xl)</CardDescription>
        </CardHeader>
        <CardContent>
          <Container className="bg-muted p-4 rounded-md">
            <div className="text-sm">This is a container with default max-width</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Small Container</CardTitle>
          <CardDescription>Container with small max-width</CardDescription>
        </CardHeader>
        <CardContent>
          <Container maxWidth="sm" className="bg-muted p-4 rounded-md">
            <div className="text-sm">Small container (max-w-screen-sm)</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Medium Container</CardTitle>
          <CardDescription>Container with medium max-width</CardDescription>
        </CardHeader>
        <CardContent>
          <Container maxWidth="md" className="bg-muted p-4 rounded-md">
            <div className="text-sm">Medium container (max-w-screen-md)</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Large Container</CardTitle>
          <CardDescription>Container with large max-width</CardDescription>
        </CardHeader>
        <CardContent>
          <Container maxWidth="lg" className="bg-muted p-4 rounded-md">
            <div className="text-sm">Large container (max-w-screen-lg)</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Extra Large Container</CardTitle>
          <CardDescription>Container with extra large max-width</CardDescription>
        </CardHeader>
        <CardContent>
          <Container maxWidth="xl" className="bg-muted p-4 rounded-md">
            <div className="text-sm">Extra large container (max-w-screen-xl)</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2XL Container</CardTitle>
          <CardDescription>Container with 2XL max-width</CardDescription>
        </CardHeader>
        <CardContent>
          <Container maxWidth="2xl" className="bg-muted p-4 rounded-md">
            <div className="text-sm">2XL container (max-w-screen-2xl)</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Full Width Container</CardTitle>
          <CardDescription>Container with full width (no max-width)</CardDescription>
        </CardHeader>
        <CardContent>
          <Container maxWidth="full" className="bg-muted p-4 rounded-md">
            <div className="text-sm">Full width container (no max-width constraint)</div>
          </Container>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Content</CardTitle>
          <CardDescription>Container with actual content example</CardDescription>
        </CardHeader>
        <CardContent>
          <Container className="bg-muted p-6 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Container Example</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This container centers content and applies responsive padding. It's perfect for
              main content areas.
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
                Button 1
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm">
                Button 2
              </button>
            </div>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
}

