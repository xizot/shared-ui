import { Pagination } from '@/components/ui/pagination';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';
import * as React from 'react';

export default function PaginationOverview() {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Pagination component provides navigation controls for paginated content. It includes
          page numbers, previous/next buttons, first/last buttons, and optional features like
          page size selector and jump to page input.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Data tables with multiple pages</li>
          <li>Search results</li>
          <li>Any paginated content</li>
          <li>Navigation through large datasets</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple pagination example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} Pagination {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">
                {'<'}Pagination currentPage={'{'}page{'}'} totalPages={10} onPageChange={'{'}setPage{'}'} /{'>'}
              </div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Controlled and uncontrolled modes</li>
          <li>Automatic page calculation from total items</li>
          <li>Page size selector</li>
          <li>Jump to page input</li>
          <li>Info text showing current range</li>
          <li>Customizable visible page count</li>
          <li>Mobile responsive</li>
          <li>Accessible navigation</li>
        </ul>
      </div>
    </div>
  );
}
