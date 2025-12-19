import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Toaster } from '@/components/ui/sonner';
import { toast } from '@/lib/toast';

export default function ToastExamples() {
  const handlePromise = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve({ name: 'John' }), 2000);
    });

    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => `Hello, ${(data as { name: string }).name}!`,
      error: 'Failed to load',
    });
  };

  return (
    <>
      <Toaster />
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Toast Types</CardTitle>
            <CardDescription>Different toast notification types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => toast.success('Operation completed successfully!')}>
                Success
              </Button>
              <Button onClick={() => toast.error('An error occurred')} variant="destructive">
                Error
              </Button>
              <Button onClick={() => toast.warning('Please review your input')}>
                Warning
              </Button>
              <Button onClick={() => toast.info('New feature available')} variant="outline">
                Info
              </Button>
              <Button onClick={() => toast.default('Default notification')} variant="secondary">
                Default
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Description</CardTitle>
            <CardDescription>Toasts with additional description text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  toast.success('Profile updated', {
                    description: 'Your changes have been saved successfully.',
                  })
                }
              >
                Success with Description
              </Button>
              <Button
                onClick={() =>
                  toast.error('Failed to save', {
                    description: 'Please check your connection and try again.',
                  })
                }
                variant="destructive"
              >
                Error with Description
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loading Toast</CardTitle>
            <CardDescription>Toast for loading states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  const id = toast.loading('Processing your request...');
                  setTimeout(() => {
                    toast.dismiss(id);
                    toast.success('Request completed!');
                  }, 2000);
                }}
              >
                Show Loading
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Promise Toast</CardTitle>
            <CardDescription>Toast that shows loading, then success/error</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button onClick={handlePromise}>Show Promise Toast</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Action</CardTitle>
            <CardDescription>Toast with action button</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  toast.success('File uploaded', {
                    description: 'Your file has been uploaded successfully.',
                    action: {
                      label: 'View',
                      onClick: () => console.log('View clicked'),
                    },
                  })
                }
              >
                Toast with Action
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Duration</CardTitle>
            <CardDescription>Toast with custom display duration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  toast.info('This toast stays for 10 seconds', {
                    duration: 10000,
                  })
                }
              >
                Long Duration Toast
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

