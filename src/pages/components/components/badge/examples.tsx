import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BadgeExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>Different badge styles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Numbers</CardTitle>
          <CardDescription>Badges with counts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>5</Badge>
            <Badge variant="secondary">12</Badge>
            <Badge variant="destructive">99+</Badge>
            <Badge variant="outline">New</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status Indicators</CardTitle>
          <CardDescription>Using badges for status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Active</Badge>
            <Badge variant="secondary">Pending</Badge>
            <Badge variant="destructive">Inactive</Badge>
            <Badge variant="outline">Draft</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

