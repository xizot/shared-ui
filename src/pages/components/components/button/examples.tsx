import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2, Mail, Plus } from 'lucide-react';

export default function ButtonExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>Different button styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different button sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xxs">XXS</Button>
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
            <Button size="xl">XL</Button>
            <Button size="xxl">XXL</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="icon-xxs">
              <Plus className="h-3 w-3" />
            </Button>
            <Button size="icon-xs">
              <Plus className="h-3.5 w-3.5" />
            </Button>
            <Button size="icon-sm">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon-md">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon-lg">
              <Plus className="h-5 w-5" />
            </Button>
            <Button size="icon-xl">
              <Plus className="h-5 w-5" />
            </Button>
            <Button size="icon-xxl">
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>Buttons with icons</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="secondary">
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>States</CardTitle>
          <CardDescription>Different button states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>As Link</CardTitle>
          <CardDescription>Using button as a link with asChild prop</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="link">
              <a href="#example">Link Button</a>
            </Button>
            <Button asChild>
              <a href="#example">Default as Link</a>
            </Button>
          </div>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div>{'<'}Button asChild variant="link"{'>'}</div>
            <div className="ml-4">{'<'}a href="#example"{'>'}Link Button{'</'}a{'>'}</div>
            <div>{'</'}Button{'>'}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

