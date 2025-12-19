import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function ContainerOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Container component provides a responsive container that centers content and applies
          consistent padding. It supports various max-width options to control content width across
          different screen sizes.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Main content areas</li>
          <li>Page layouts</li>
          <li>Centering content with max-width constraints</li>
          <li>Responsive design patterns</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple container example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Container className="bg-muted p-4 rounded-md">
            <div className="text-sm">Container content</div>
          </Container>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Container {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Container maxWidth="xl"{'>'}...{'</'}Container{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Responsive padding (px-4 sm:px-6 lg:px-8)</li>
          <li>Multiple max-width options (sm, md, lg, xl, 2xl, full)</li>
          <li>Centered content automatically</li>
          <li>Full width support</li>
        </ul>
      </div>
    </div>
  );
}

