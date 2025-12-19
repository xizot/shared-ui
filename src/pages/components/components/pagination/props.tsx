import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PaginationProps() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for Pagination component props and types.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pagination Props</CardTitle>
          <CardDescription>Props for the Pagination component</CardDescription>
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
                <TableCell className="font-mono font-medium">currentPage</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Current page number (controlled mode). If not provided, component uses internal
                  state.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">totalPages</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>
                  Total number of pages. If not provided, calculated from totalItems and pageSize.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onPageChange</TableCell>
                <TableCell className="font-mono text-sm">(page: number) =&gt; void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when page changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">pageSize</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">10</TableCell>
                <TableCell>Number of items per page</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">totalItems</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">0</TableCell>
                <TableCell>
                  Total number of items. Used to calculate totalPages if totalPages is not provided.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">onPageSizeChange</TableCell>
                <TableCell className="font-mono text-sm">(pageSize: number) =&gt; void</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Callback when page size changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showFirstLast</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show first and last page buttons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showPrevNext</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show previous and next buttons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">maxVisiblePages</TableCell>
                <TableCell className="font-mono text-sm">number</TableCell>
                <TableCell className="font-mono text-sm">5</TableCell>
                <TableCell>Maximum number of page buttons to display</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showPageSize</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Show page size selector</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showJumpToPage</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">false</TableCell>
                <TableCell>Show jump to page input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showInfo</TableCell>
                <TableCell className="font-mono text-sm">boolean</TableCell>
                <TableCell className="font-mono text-sm">true</TableCell>
                <TableCell>Show info text (e.g., "Showing 1-10 of 100")</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">size</TableCell>
                <TableCell className="font-mono text-sm">'sm' | 'md' | 'lg'</TableCell>
                <TableCell className="font-mono text-sm">'md'</TableCell>
                <TableCell>Size of buttons and text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">variant</TableCell>
                <TableCell className="font-mono text-sm">'default' | 'outline' | 'ghost'</TableCell>
                <TableCell className="font-mono text-sm">'default'</TableCell>
                <TableCell>Button variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">className</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">-</TableCell>
                <TableCell>Additional CSS classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Label Props</CardTitle>
          <CardDescription>Customizable text labels</CardDescription>
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
                <TableCell className="font-mono font-medium">previousLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Previous"</TableCell>
                <TableCell>Label for previous button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">nextLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Next"</TableCell>
                <TableCell>Label for next button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">firstLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"First"</TableCell>
                <TableCell>Label for first button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">lastLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Last"</TableCell>
                <TableCell>Label for last button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">pageSizeLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Items per page"</TableCell>
                <TableCell>Label for page size selector</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">jumpToPageLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Go to page"</TableCell>
                <TableCell>Label for jump to page input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">showingLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Showing"</TableCell>
                <TableCell>Label prefix for info text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">ofLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"of"</TableCell>
                <TableCell>Label separator in info text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">resultsLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"results"</TableCell>
                <TableCell>Label suffix for info text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono font-medium">pageLabel</TableCell>
                <TableCell className="font-mono text-sm">string</TableCell>
                <TableCell className="font-mono text-sm">"Page"</TableCell>
                <TableCell>Label prefix for page buttons</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
