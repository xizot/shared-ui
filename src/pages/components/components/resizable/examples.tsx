import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResizableExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Horizontal Panels</CardTitle>
          <CardDescription>Resizable panels in horizontal layout</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 1</h3>
                  <p className="text-sm text-muted-foreground">Drag the handle to resize</p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 2</h3>
                  <p className="text-sm text-muted-foreground">Drag the handle to resize</p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Panels</CardTitle>
          <CardDescription>Resizable panels in vertical layout</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup direction="vertical" className="min-h-[200px] rounded-lg border">
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Top Panel</h3>
                  <p className="text-sm text-muted-foreground">Drag the handle to resize</p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Bottom Panel</h3>
                  <p className="text-sm text-muted-foreground">Drag the handle to resize</p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Three Panels</CardTitle>
          <CardDescription>Three resizable panels</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
            <ResizablePanel defaultSize={33} minSize={15}>
              <div className="flex h-full items-center justify-center p-6 bg-muted/50">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 1</h3>
                  <p className="text-sm text-muted-foreground">33% width</p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={34} minSize={15}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 2</h3>
                  <p className="text-sm text-muted-foreground">34% width</p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={33} minSize={15}>
              <div className="flex h-full items-center justify-center p-6 bg-muted/50">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 3</h3>
                  <p className="text-sm text-muted-foreground">33% width</p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Without Handle</CardTitle>
          <CardDescription>Resizable panels without visible handle</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 1</h3>
                  <p className="text-sm text-muted-foreground">Hover edge to resize</p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Panel 2</h3>
                  <p className="text-sm text-muted-foreground">Hover edge to resize</p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code Editor Layout</CardTitle>
          <CardDescription>Example: Code editor with file tree</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup direction="horizontal" className="min-h-[300px] rounded-lg border">
            <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
              <div className="h-full bg-muted/30 p-4">
                <h4 className="font-semibold mb-3 text-sm">File Explorer</h4>
                <div className="space-y-1 text-sm">
                  <div className="px-2 py-1 rounded hover:bg-muted cursor-pointer">src/</div>
                  <div className="px-2 py-1 rounded hover:bg-muted cursor-pointer ml-4">components/</div>
                  <div className="px-2 py-1 rounded hover:bg-muted cursor-pointer ml-4">App.tsx</div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75} minSize={30}>
              <div className="h-full bg-background p-4">
                <h4 className="font-semibold mb-3 text-sm">Editor</h4>
                <div className="font-mono text-xs text-muted-foreground">
                  <div>function App() {'{'}</div>
                  <div className="ml-4">return &lt;div&gt;Hello&lt;/div&gt;</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </div>
  );
}

