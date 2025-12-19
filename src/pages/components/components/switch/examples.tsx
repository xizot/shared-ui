import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SwitchExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Switch</CardTitle>
          <CardDescription>Simple toggle switch</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="switch1" />
            <Label htmlFor="switch1">Enable notifications</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Checked State</CardTitle>
          <CardDescription>Pre-checked switch</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="switch2" defaultChecked />
            <Label htmlFor="switch2">Enabled by default</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled switches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="switch3" disabled />
            <Label htmlFor="switch3">Disabled unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="switch4" disabled defaultChecked />
            <Label htmlFor="switch4">Disabled checked</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Switches</CardTitle>
          <CardDescription>Group of switches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="sms" />
              <Label htmlFor="sms">SMS notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="push" defaultChecked />
              <Label htmlFor="push">Push notifications</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different switch sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <Switch id="switch-xxs" size="xxs" />
              <Label htmlFor="switch-xxs">XXS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-xs" size="xs" />
              <Label htmlFor="switch-xs">XS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-sm" size="sm" />
              <Label htmlFor="switch-sm">SM</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-md" size="md" />
              <Label htmlFor="switch-md">MD (default)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-lg" size="lg" />
              <Label htmlFor="switch-lg">LG</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-xl" size="xl" />
              <Label htmlFor="switch-xl">XL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-xxl" size="xxl" />
              <Label htmlFor="switch-xxl">XXL</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

