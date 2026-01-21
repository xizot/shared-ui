import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Code, Component, Palette, Zap } from 'lucide-react';

export function DesignSystemWelcome() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg bg-primary p-3 text-primary-foreground">
            <Component className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Shared UI Design System</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive component library built with shadcn/ui, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
        <Badge variant="outline" className="text-sm">
          Version 0.0.0
        </Badge>
      </div>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Quick Start
            </CardTitle>
            <CardDescription>Get started with Shared UI in your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Installation</h4>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <div className="text-muted-foreground mb-2"># npm</div>
                <div>npm install git+https://github.com/xizot/shared-ui.git</div>
                <div className="text-muted-foreground mt-4 mb-2"># yarn</div>
                <div>yarn add git+https://github.com/xizot/shared-ui.git</div>
                <div className="text-muted-foreground mt-4 mb-2"># pnpm</div>
                <div>pnpm add git+https://github.com/xizot/shared-ui.git</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Peer Dependencies</h4>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <div className="text-muted-foreground mb-2"># npm</div>
                <div>
                  npm install react react-dom react-hook-form date-fns react-day-picker
                  @tanstack/react-table
                </div>
                <div className="text-muted-foreground mt-4 mb-2"># yarn</div>
                <div>
                  yarn add react react-dom react-hook-form date-fns react-day-picker
                  @tanstack/react-table
                </div>
                <div className="text-muted-foreground mt-4 mb-2"># pnpm</div>
                <div>
                  pnpm add react react-dom react-hook-form date-fns react-day-picker
                  @tanstack/react-table
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Setup</h4>
              <div className="bg-muted p-4 rounded-md font-mono text-sm space-y-2">
                <div className="text-muted-foreground"># 1. Import styles in your entry file</div>
                <div>import 'shared-ui/styles.css'</div>
                <div className="text-muted-foreground mt-3"># 2. Import components</div>
                <div>
                  import {'{'} Button, Card, Toaster {'}'} from 'shared-ui'
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Basic Example</h4>
              <div className="bg-muted p-4 rounded-md font-mono text-sm space-y-1">
                <div className="text-muted-foreground">function App() {'{'}</div>
                <div className="ml-4">return (</div>
                <div className="ml-8">{'<>'}</div>
                <div className="ml-12">
                  {'<'}Toaster /{'>'}
                </div>
                <div className="ml-12">
                  {'<'}Button{'>'}Click me{'</'}Button{'>'}
                </div>
                <div className="ml-8">{'</>'}</div>
                <div className="ml-4">)</div>
                <div>{'}'}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Features
            </CardTitle>
            <CardDescription>What makes Shared UI special</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Built with Modern Stack
              </h4>
              <p className="text-sm text-muted-foreground">
                TypeScript, React, Tailwind CSS, and shadcn/ui components
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Component className="h-4 w-4" />
                Comprehensive Components
              </h4>
              <p className="text-sm text-muted-foreground">
                Form controls, layouts, feedback components, data displays, and more
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Code className="h-4 w-4" />
                React Hook Form Support
              </h4>
              <p className="text-sm text-muted-foreground">
                Pre-built RHF wrappers for seamless form integration
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Fully Customizable
              </h4>
              <p className="text-sm text-muted-foreground">
                Customize colors, spacing, and components to match your brand
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Select a component from the sidebar to view its documentation, examples, and API
            reference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Browse through the component library using the sidebar navigation. Each component
            includes:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>
              <strong className="text-foreground">Overview:</strong> Description, when to use, and
              basic usage
            </li>
            <li>
              <strong className="text-foreground">Examples:</strong> Multiple usage examples with
              different variants and states
            </li>
            <li>
              <strong className="text-foreground">API:</strong> Complete props documentation and
              type definitions
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
