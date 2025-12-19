import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeparatorExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Horizontal Separator</CardTitle>
          <CardDescription>Default horizontal separator</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Separator />
          <div>Content below</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Separator</CardTitle>
          <CardDescription>Vertical separator</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-5 items-center space-x-4">
            <div>Left</div>
            <Separator orientation="vertical" />
            <div>Right</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>In Menu</CardTitle>
          <CardDescription>Separator in menu context</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border p-4">
            <div className="space-y-1">
              <div className="px-2 py-1.5 text-sm">Profile</div>
              <div className="px-2 py-1.5 text-sm">Settings</div>
              <Separator />
              <div className="px-2 py-1.5 text-sm">Logout</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

