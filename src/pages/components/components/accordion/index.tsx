import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function AccordionOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Accordion component displays collapsible content sections. Built on Radix UI, it
          provides accessible accordion functionality with keyboard navigation and proper ARIA
          attributes.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>FAQ sections</li>
          <li>Collapsible content sections</li>
          <li>Settings panels</li>
          <li>Any expandable/collapsible content</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple accordion example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Accordion, AccordionItem, AccordionTrigger, AccordionContent {'}'} from
          'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Accordion type="single"{'>'}</div>
          <div className="ml-8">{'<'}AccordionItem value="item-1"{'>'}</div>
          <div className="ml-12">{'<'}AccordionTrigger{'>'}Title{'{'}</div>
          <div className="ml-12">{'<'}AccordionContent{'>'}Content{'{'}</div>
          <div className="ml-8">{'</'}AccordionItem{'>'}</div>
          <div className="ml-4">{'</'}Accordion{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single or multiple item expansion</li>
          <li>Keyboard navigation</li>
          <li>Accessible ARIA attributes</li>
          <li>Controlled and uncontrolled modes</li>
        </ul>
      </div>
    </div>
  );
}

