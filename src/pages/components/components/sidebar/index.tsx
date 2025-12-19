import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function SidebarOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Sidebar component provides a collapsible navigation sidebar with support for
          multiple variants, mobile responsiveness, and keyboard shortcuts. It includes components
          for headers, menus, groups, and more.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Application navigation</li>
          <li>Dashboard layouts</li>
          <li>Admin panels</li>
          <li>Settings pages</li>
          <li>Any scenario requiring a sidebar navigation</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple sidebar example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} Sidebar, SidebarProvider, SidebarContent, SidebarMenu, SidebarMenuItem,
              SidebarMenuButton {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">{'<'}SidebarProvider{'>'}</div>
              <div className="ml-8">{'<'}Sidebar{'>'}</div>
              <div className="ml-12">{'<'}SidebarContent{'>'}</div>
              <div className="ml-16">{'<'}SidebarMenu{'>'}...{'</'}SidebarMenu{'>'}</div>
              <div className="ml-12">{'</'}SidebarContent{'>'}</div>
              <div className="ml-8">{'</'}Sidebar{'>'}</div>
              <div className="ml-4">{'</'}SidebarProvider{'>'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Collapsible sidebar (icon mode or offcanvas)</li>
          <li>Mobile responsive (converts to sheet/drawer)</li>
          <li>Keyboard shortcut (Cmd/Ctrl + B)</li>
          <li>Multiple variants (sidebar, floating, inset)</li>
          <li>Persistent state (cookie-based)</li>
          <li>Menu groups and submenus</li>
          <li>Tooltips for collapsed state</li>
          <li>Accessible navigation</li>
        </ul>
      </div>
    </div>
  );
}

