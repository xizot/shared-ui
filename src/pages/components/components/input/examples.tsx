import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function InputExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Inputs</CardTitle>
          <CardDescription>Simple input fields</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Enter text..." />
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="email@example.com" />
          <Input label="Password" type="password" placeholder="Enter password" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Required Fields</CardTitle>
          <CardDescription>Inputs with required indicator</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Username" required placeholder="Enter username" />
          <Input label="Email" type="email" required placeholder="email@example.com" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error States</CardTitle>
          <CardDescription>Inputs with error messages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Email"
            type="email"
            error="Please enter a valid email address"
            placeholder="email@example.com"
          />
          <Input
            label="Password"
            type="password"
            error="Password must be at least 8 characters"
            placeholder="Enter password"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled input fields</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Disabled Input" disabled placeholder="Cannot edit" />
          <Input label="Disabled with Value" disabled value="Read-only value" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Input Types</CardTitle>
          <CardDescription>Different HTML input types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Text" type="text" placeholder="Text input" />
          <Input label="Number" type="number" placeholder="123" />
          <Input label="Email" type="email" placeholder="email@example.com" />
          <Input label="Password" type="password" placeholder="Password" />
          <Input label="Date" type="date" />
          <Input label="Time" type="time" />
          <Input label="Search" type="search" placeholder="Search..." />
          <Input label="URL" type="url" placeholder="https://example.com" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different input sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input size="xxs" placeholder="XXS size" />
          <Input size="xs" placeholder="XS size" />
          <Input size="sm" placeholder="SM size" />
          <Input size="md" placeholder="MD size (default)" />
          <Input size="lg" placeholder="LG size" />
          <Input size="xl" placeholder="XL size" />
          <Input size="xxl" placeholder="XXL size" />
        </CardContent>
      </Card>
    </div>
  );
}

