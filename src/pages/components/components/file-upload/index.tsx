import { FileUpload } from '@/components/ui/file-upload';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function FileUploadOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The FileUpload component provides a drag-and-drop file upload interface with preview,
          validation, and progress tracking. It supports single and multiple file uploads with
          customizable file type and size restrictions.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>File upload forms</li>
          <li>Image uploads with preview</li>
          <li>Document uploads</li>
          <li>Multiple file selection</li>
          <li>File uploads with validation</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple file upload example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FileUpload />
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} FileUpload {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">{'<'}FileUpload /{'>'}</div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Drag and drop file upload</li>
          <li>File preview with thumbnails for images</li>
          <li>File validation (type, size, count)</li>
          <li>Progress tracking support</li>
          <li>Multiple file support</li>
          <li>Remove file functionality</li>
          <li>Accessible and keyboard navigable</li>
          <li>Mobile responsive design</li>
        </ul>
      </div>
    </div>
  );
}

