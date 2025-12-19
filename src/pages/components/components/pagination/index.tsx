import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function PaginationOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Pagination component provides a flexible navigation system for paginated content. It
          consists of multiple sub-components that can be composed together to create various
          pagination patterns, from simple next/previous navigation to full page number displays
          with ellipsis.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Navigating through paginated data tables or lists</li>
          <li>Browsing search results or filtered content</li>
          <li>Displaying large datasets in manageable chunks</li>
          <li>Any scenario requiring page-by-page navigation</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple pagination with previous/next buttons</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <div className="text-muted-foreground">
              import {'{'} Pagination, PaginationContent, PaginationItem, PaginationPrevious,
              PaginationNext {'}'} from 'shared-ui'
            </div>
            <div className="mt-2">
              <div className="text-muted-foreground">{'<'}</div>
              <div className="ml-4">{'<'}Pagination{'>'}</div>
              <div className="ml-8">{'<'}PaginationContent{'>'}</div>
              <div className="ml-12">{'<'}PaginationItem{'>'}</div>
              <div className="ml-16">{'<'}PaginationPrevious href="#" /{'>'}</div>
              <div className="ml-12">{'</'}PaginationItem{'>'}</div>
              <div className="ml-12">{'<'}PaginationItem{'>'}</div>
              <div className="ml-16">{'<'}PaginationNext href="#" /{'>'}</div>
              <div className="ml-12">{'</'}PaginationItem{'>'}</div>
              <div className="ml-8">{'</'}PaginationContent{'>'}</div>
              <div className="ml-4">{'</'}Pagination{'>'}</div>
              <div className="text-muted-foreground">{'</'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Composable sub-components for flexible pagination patterns</li>
          <li>Accessible navigation with proper ARIA labels</li>
          <li>Responsive design with mobile-friendly controls</li>
          <li>Active page state indication</li>
          <li>Ellipsis support for large page ranges</li>
          <li>Customizable styling with className props</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Component Structure</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">Pagination</code> - Root
            container with navigation role
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">PaginationContent</code> - List
            container for pagination items
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">PaginationItem</code> - Individual
            pagination item wrapper
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">PaginationLink</code> - Clickable
            page number link
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">PaginationPrevious</code> -
            Previous page button
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">PaginationNext</code> - Next
            page button
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 text-sm">PaginationEllipsis</code> -
            Ellipsis indicator for skipped pages
          </li>
        </ul>
      </div>
    </div>
  );
}

