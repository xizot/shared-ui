import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TextareaExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Textarea</CardTitle>
          <CardDescription>Simple textarea fields</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="Enter text..." />
          <Textarea label="Message" placeholder="Enter your message..." />
          <Textarea label="Description" placeholder="Enter description..." rows={4} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Required Fields</CardTitle>
          <CardDescription>Textareas with required indicator</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea label="Comments" required placeholder="Enter comments..." />
          <Textarea label="Feedback" required placeholder="Enter feedback..." rows={5} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error States</CardTitle>
          <CardDescription>Textareas with error messages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            label="Description"
            error="Description is required"
            placeholder="Enter description..."
          />
          <Textarea
            label="Comments"
            error="Comments must be at least 10 characters"
            placeholder="Enter comments..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Disabled textarea fields</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea label="Disabled" disabled placeholder="Cannot edit" />
          <Textarea label="Disabled with Value" disabled value="Read-only content" />
        </CardContent>
      </Card>
    </div>
  );
}

