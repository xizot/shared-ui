import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CardExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>Simple card with header and content</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Card content goes here.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card with Footer</CardTitle>
          <CardDescription>Card with action buttons in footer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Card content with footer actions.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
            <CardDescription>First card in grid</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Grid layout example.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
            <CardDescription>Second card in grid</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Grid layout example.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Card with Badge</CardTitle>
              <CardDescription>Card with additional elements</CardDescription>
            </div>
            <Badge>New</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Card with badge in header.</p>
        </CardContent>
      </Card>
    </div>
  );
}

