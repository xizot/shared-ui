import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function TabsOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Tabs component organizes content into multiple panels, accessible via tab navigation.
          Built on Radix UI, it provides accessible tab functionality with keyboard navigation.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Organizing related content into sections</li>
          <li>Settings pages with multiple categories</li>
          <li>Product details with multiple views</li>
          <li>Any scenario requiring tabbed navigation</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple tabs example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Content for tab 1</TabsContent>
            <TabsContent value="tab2">Content for tab 2</TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Tabs, TabsList, TabsTrigger, TabsContent {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Tabs defaultValue="tab1"{'>'}</div>
          <div className="ml-8">{'<'}TabsList{'>'}</div>
          <div className="ml-12">{'<'}TabsTrigger value="tab1"{'>'}Tab 1{'{'}</div>
          <div className="ml-8">{'</'}TabsList{'>'}</div>
          <div className="ml-8">{'<'}TabsContent value="tab1"{'>'}Content{'{'}</div>
          <div className="ml-4">{'</'}Tabs{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Keyboard navigation (Arrow keys)</li>
          <li>Controlled and uncontrolled modes</li>
          <li>Accessible ARIA attributes</li>
          <li>Flexible content organization</li>
        </ul>
      </div>
    </div>
  );
}

