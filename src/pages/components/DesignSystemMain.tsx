import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Suspense, lazy } from 'react';
import { getComponentById } from './component-registry';
import { DesignSystemWelcome } from './DesignSystemWelcome';

interface DesignSystemMainProps {
  selectedComponentId?: string;
}

// Lazy load component guideline modules
function loadComponentModule(componentId: string, module: 'index' | 'examples' | 'props') {
  return lazy(() =>
    import(`./components/${componentId}/${module}.tsx`).catch(() => {
      // Fallback if module doesn't exist
      return {
        default: () => (
          <div className="p-8 text-center text-muted-foreground">
            <p>Module not found: {componentId}/{module}.tsx</p>
            <p className="mt-2 text-sm">Create this file to add content.</p>
          </div>
        ),
      };
    })
  );
}

function ComponentGuidelines({ componentId }: { componentId: string }) {
  const ComponentIndex = loadComponentModule(componentId, 'index');
  const ComponentExamples = loadComponentModule(componentId, 'examples');
  const ComponentProps = loadComponentModule(componentId, 'props');

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="examples">Examples</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              <div className="text-muted-foreground">Loading overview...</div>
            </div>
          }
        >
          <ComponentIndex />
        </Suspense>
      </TabsContent>
      <TabsContent value="examples" className="mt-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              <div className="text-muted-foreground">Loading examples...</div>
            </div>
          }
        >
          <ComponentExamples />
        </Suspense>
      </TabsContent>
      <TabsContent value="api" className="mt-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              <div className="text-muted-foreground">Loading API docs...</div>
            </div>
          }
        >
          <ComponentProps />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
}

export function DesignSystemMain({ selectedComponentId }: DesignSystemMainProps) {
  const component = selectedComponentId ? getComponentById(selectedComponentId) : null;

  return (
    <main className="flex-1 overflow-hidden">
      <ScrollArea className="h-full">
        <div className="container max-w-5xl p-8">
          {component ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <component.icon className="h-6 w-6 text-primary" />
                  <h1 className="text-3xl font-bold">{component.name}</h1>
                </div>
                <p className="text-muted-foreground">{component.description}</p>
              </div>
              {selectedComponentId && <ComponentGuidelines componentId={selectedComponentId} />}
            </div>
          ) : (
            <DesignSystemWelcome />
          )}
        </div>
      </ScrollArea>
    </main>
  );
}

