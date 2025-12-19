import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ToastProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Toast component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Toaster Component</CardTitle>
          <CardDescription>Toaster must be added to app root</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">position</TableCell>
                <TableCell className="font-mono text-sm">ToasterProps['position']</TableCell>
                <TableCell className="font-mono text-sm">"top-right"</TableCell>
                <TableCell>Position of toast notifications</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">...props</TableCell>
                <TableCell className="font-mono text-sm">ToasterProps</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>All Sonner Toaster props</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Toast Utility Functions</CardTitle>
          <CardDescription>Toast utility API</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Function</TableHead>
                <TableHead>Parameters</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">toast.success</TableCell>
                <TableCell className="font-mono text-sm">
                  (message: string, options?: ToastOptions)
                </TableCell>
                <TableCell>Show success toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.error</TableCell>
                <TableCell className="font-mono text-sm">
                  (message: string, options?: ToastOptions)
                </TableCell>
                <TableCell>Show error toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.warning</TableCell>
                <TableCell className="font-mono text-sm">
                  (message: string, options?: ToastOptions)
                </TableCell>
                <TableCell>Show warning toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.info</TableCell>
                <TableCell className="font-mono text-sm">
                  (message: string, options?: ToastOptions)
                </TableCell>
                <TableCell>Show info toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.default</TableCell>
                <TableCell className="font-mono text-sm">
                  (message: string, options?: ToastOptions)
                </TableCell>
                <TableCell>Show default toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.loading</TableCell>
                <TableCell className="font-mono text-sm">
                  (message: string, options?: Omit{'<'}{' '}
                  ToastOptions, 'action'{' '}
                  {'>'})
                </TableCell>
                <TableCell>Show loading toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.promise</TableCell>
                <TableCell className="font-mono text-sm">
                  {'<'}{' '}
                  T{' '}
                  {'>'}(
                  promise: Promise{'<'}{' '}
                  T{' '}
                  {'>'}, messages: {'{'}
                  loading: string; success: string | ((data: T) ={'>'} string); error: string |
                  ((error: unknown) ={'>'} string){' '}
                  {'}'}, options?: Omit{'<'}{' '}
                  ToastOptions, 'title' | 'description'{' '}
                  {'>'})
                </TableCell>
                <TableCell>Show promise toast (loading {'>'} success/error)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.dismiss</TableCell>
                <TableCell className="font-mono text-sm">(toastId?: string | number)</TableCell>
                <TableCell>Dismiss a specific toast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">toast.dismissAll</TableCell>
                <TableCell className="font-mono text-sm">()</TableCell>
                <TableCell>Dismiss all toasts</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ToastOptions Type</CardTitle>
          <CardDescription>Options for toast functions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">description</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell>Additional description text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">duration</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell>Display duration in milliseconds</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">action</TableCell>
                <TableCell className="font-mono text-sm">
                  {'{'}{' '}
                  label: string; onClick: () ={'>'} void{' '}
                  {'}'}
                </TableCell>
                <TableCell>Action button configuration</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

