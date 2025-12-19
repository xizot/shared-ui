import { Editor } from '@/components/ui/editor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function EditorOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Editor component is a rich text editor built on top of React Quill. It provides a
          comprehensive WYSIWYG editing experience with support for formatting, images, links, and
          more. The component includes built-in support for labels, error messages, and required
          field indicators.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Rich text content editing</li>
          <li>Blog posts and articles</li>
          <li>Email composition</li>
          <li>Document editing</li>
          <li>Comment systems with formatting</li>
          <li>Any scenario requiring rich text input</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple editor example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Editor placeholder="Start typing..." />
          <Editor label="Description" placeholder="Enter description..." />
          <Editor
            label="Content"
            required
            placeholder="Enter content..."
          />
          <Editor
            label="Content"
            error="Content is required"
            placeholder="Enter content..."
          />
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">import {'{'} Editor {'}'} from 'shared-ui'</div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}Editor label="Description" placeholder="Enter description..." /{'>'}
          </div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Rich text formatting (bold, italic, underline, etc.)</li>
          <li>Headers and text alignment</li>
          <li>Lists (ordered and unordered)</li>
          <li>Links and images</li>
          <li>Code blocks and blockquotes</li>
          <li>Text colors and background colors</li>
          <li>Subscript and superscript</li>
          <li>Built-in label support with optional required indicator</li>
          <li>Error message display with visual feedback</li>
          <li>Read-only mode (toolbar remains visible but disabled)</li>
          <li>Customizable toolbar and formats</li>
          <li>Full keyboard accessibility</li>
          <li>React Hook Form integration</li>
        </ul>
      </div>
    </div>
  );
}

