'use client';

import * as React from 'react';
import { Editor } from '@/components/ui/editor';
import { RHFEditor } from '@/components/rhf/rhf-editor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';

export default function EditorExamples() {
  const [basicValue, setBasicValue] = React.useState('');
  const [controlledValue, setControlledValue] = React.useState('<p>Initial content</p>');

  const form = useForm({
    defaultValues: {
      content: '',
      article: '<p>Start writing your article...</p>',
    },
  });

  const onSubmit = (data: { content: string; article: string }) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Editor</CardTitle>
          <CardDescription>Simple rich text editor</CardDescription>
        </CardHeader>
        <CardContent>
          <Editor placeholder="Start typing..." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>Editor with label and placeholder</CardDescription>
        </CardHeader>
        <CardContent>
          <Editor label="Description" placeholder="Enter description..." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Required Field</CardTitle>
          <CardDescription>Editor with required indicator</CardDescription>
        </CardHeader>
        <CardContent>
          <Editor label="Content" required placeholder="Enter content..." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error State</CardTitle>
          <CardDescription>Editor with error message</CardDescription>
        </CardHeader>
        <CardContent>
          <Editor
            label="Content"
            error="Content is required"
            placeholder="Enter content..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Editor</CardTitle>
          <CardDescription>Editor with controlled value</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Editor
            label="Content"
            value={controlledValue}
            onChange={setControlledValue}
            placeholder="Enter content..."
          />
          <div className="text-sm text-muted-foreground">
            Current value: {controlledValue ? 'Has content' : 'Empty'}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Read Only</CardTitle>
          <CardDescription>Editor in read-only mode</CardDescription>
        </CardHeader>
        <CardContent>
          <Editor
            label="Read-only Content"
            value="<p>This is <strong>read-only</strong> content. You cannot edit it.</p>"
            readOnly
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Sizes</CardTitle>
          <CardDescription>Editor with different size variants</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Editor size="sm" label="Small" placeholder="Small size editor..." />
          <Editor size="md" label="Medium (default)" placeholder="Medium size editor..." />
          <Editor size="lg" label="Large" placeholder="Large size editor..." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Toolbar</CardTitle>
          <CardDescription>Editor with custom toolbar configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <Editor
            label="Simple Editor"
            placeholder="Limited formatting options..."
            modules={{
              toolbar: [['bold', 'italic', 'underline'], ['link'], ['clean']],
            }}
            formats={['bold', 'italic', 'underline', 'link']}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With React Hook Form</CardTitle>
          <CardDescription>Editor integrated with react-hook-form</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <RHFEditor
              control={form.control}
              name="content"
              label="Content"
              placeholder="Enter content..."
              required
            />
            <RHFEditor
              control={form.control}
              name="article"
              label="Article"
              placeholder="Write your article..."
            />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Uncontrolled Editor</CardTitle>
          <CardDescription>Editor without controlled value</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Editor
            label="Notes"
            placeholder="Take some notes..."
            onChange={(value) => {
              setBasicValue(value);
            }}
          />
          {basicValue && (
            <div className="text-sm text-muted-foreground">
              Content length: {basicValue.replace(/<[^>]*>/g, '').length} characters
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

