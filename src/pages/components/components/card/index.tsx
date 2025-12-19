import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function CardOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Card component is a flexible container used to group related content. It consists of
          multiple sub-components: CardHeader, CardTitle, CardDescription, CardContent, and
          CardFooter.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Grouping related content together</li>
          <li>Displaying information in a contained format</li>
          <li>Creating dashboard widgets</li>
          <li>Presenting data or statistics</li>
          <li>Building product cards or feature showcases</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple card example</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a basic card with header, content, and footer sections.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Card, CardHeader, CardTitle, CardContent, CardFooter {'}'} from
          'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Card{'>'}</div>
          <div className="ml-8">{'<'}CardHeader{'>'}</div>
          <div className="ml-12">{'<'}CardTitle{'>'}Title{'</'}CardTitle{'>'}</div>
          <div className="ml-8">{'</'}CardHeader{'>'}</div>
          <div className="ml-8">{'<'}CardContent{'>'}Content{'</'}CardContent{'>'}</div>
          <div className="ml-8">{'<'}CardFooter{'>'}Footer{'</'}CardFooter{'>'}</div>
          <div className="ml-4">{'</'}Card{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Composable sub-components for flexible layouts</li>
          <li>Consistent spacing and styling</li>
          <li>Responsive design</li>
          <li>Supports all standard HTML div attributes</li>
        </ul>
      </div>
    </div>
  );
}

