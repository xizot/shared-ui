import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function AvatarOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Avatar component displays a user's profile picture or initials. Built on Radix UI,
          it provides accessible avatar functionality with fallback support for missing images.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>User profile pictures</li>
          <li>User avatars in lists</li>
          <li>Comment sections</li>
          <li>Any user representation</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple avatar example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-md font-mono text-sm">
        <div className="text-muted-foreground">
          import {'{'} Avatar, AvatarImage, AvatarFallback {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">{'<'}Avatar{'>'}</div>
          <div className="ml-8">{'<'}AvatarImage src="..." alt="..." /{'>'}</div>
          <div className="ml-8">{'<'}AvatarFallback{'>'}CN{'{'}</div>
          <div className="ml-4">{'</'}Avatar{'>'}</div>
          <div className="text-muted-foreground">{'</'}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Image with fallback support</li>
          <li>Initials fallback</li>
          <li>Customizable size</li>
          <li>Accessible image handling</li>
        </ul>
      </div>
    </div>
  );
}

