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
    </div>
  );
}

