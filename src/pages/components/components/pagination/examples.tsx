'use client';

import * as React from 'react';
import { Pagination } from '@/components/ui/pagination';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaginationExamples() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const totalItems = 100;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Pagination</CardTitle>
          <CardDescription>Simple pagination with page numbers</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Automatic Calculation</CardTitle>
          <CardDescription>Calculate pages from total items and page size</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Page Size Selector</CardTitle>
          <CardDescription>Allow users to change items per page</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
            showPageSize
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Jump to Page</CardTitle>
          <CardDescription>Input field to jump directly to a page</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalPages={20}
            onPageChange={setCurrentPage}
            showJumpToPage
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compact Mode</CardTitle>
          <CardDescription>Smaller size with fewer visible pages</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalPages={20}
            onPageChange={setCurrentPage}
            maxVisiblePages={3}
            size="sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Without First/Last Buttons</CardTitle>
          <CardDescription>Hide first and last page buttons</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
            showFirstLast={false}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Full Featured</CardTitle>
          <CardDescription>All features enabled</CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
            showPageSize
            showJumpToPage
            showInfo
            maxVisiblePages={5}
          />
        </CardContent>
      </Card>
    </div>
  );
}
