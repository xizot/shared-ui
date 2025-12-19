import { Divider } from '@/components/ui/divider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DividerExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Divider</CardTitle>
          <CardDescription>Simple divider without label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Divider />
          <div>Content below</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Divider with Label (Center)</CardTitle>
          <CardDescription>Divider with centered label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Divider label="OR" />
          <div>Content below</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Divider with Label (Left)</CardTitle>
          <CardDescription>Divider with left-aligned label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Divider label="Section" labelPosition="left" />
          <div>Content below</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Divider with Label (Right)</CardTitle>
          <CardDescription>Divider with right-aligned label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Divider label="End" labelPosition="right" />
          <div>Content below</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Divider</CardTitle>
          <CardDescription>Vertical divider</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-20 items-center space-x-4">
            <div>Left</div>
            <Divider orientation="vertical" />
            <div>Right</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Divider with Label</CardTitle>
          <CardDescription>Vertical divider with label</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-32 items-center space-x-4">
            <div>Left Content</div>
            <Divider orientation="vertical" label="OR" />
            <div>Right Content</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>In Form</CardTitle>
          <CardDescription>Divider in form context</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 rounded-md border p-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Enter email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Enter password"
              />
            </div>
            <Divider label="OR" />
            <button className="w-full rounded-md border px-4 py-2 text-sm">Continue with Google</button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Label</CardTitle>
          <CardDescription>Divider with custom label content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Content above</div>
          <Divider
            label={
              <span className="flex items-center gap-2">
                <span className="text-xs font-medium">SECTION</span>
              </span>
            }
          />
          <div>Content below</div>
        </CardContent>
      </Card>
    </div>
  );
}

