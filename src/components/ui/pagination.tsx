'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type PaginationProps = {
  // Controlled mode
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  // Or automatic calculation mode
  pageSize?: number;
  totalItems?: number;
  onPageSizeChange?: (pageSize: number) => void;
  // UI options
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  showPageSize?: boolean;
  showJumpToPage?: boolean;
  showInfo?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
  // Labels
  previousLabel?: string;
  nextLabel?: string;
  firstLabel?: string;
  lastLabel?: string;
  pageSizeLabel?: string;
  jumpToPageLabel?: string;
  showingLabel?: string;
  ofLabel?: string;
  resultsLabel?: string;
  pageLabel?: string;
};

function Pagination({
  // Controlled mode
  currentPage: currentPageProp,
  totalPages: totalPagesProp,
  onPageChange,
  // Automatic calculation mode
  pageSize: pageSizeProp = 10,
  totalItems = 0,
  onPageSizeChange,
  // UI options
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  showPageSize = false,
  showJumpToPage = false,
  showInfo = true,
  size = 'md',
  variant = 'default',
  className,
  // Labels
  previousLabel = 'Previous',
  nextLabel = 'Next',
  firstLabel = 'First',
  lastLabel = 'Last',
  pageSizeLabel = 'Items per page',
  jumpToPageLabel = 'Go to page',
  showingLabel = 'Showing',
  ofLabel = 'of',
  resultsLabel = 'results',
  pageLabel = 'Page',
}: PaginationProps) {
  // Internal state for uncontrolled mode
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1);
  const [internalPageSize, setInternalPageSize] = React.useState(pageSizeProp);
  const [jumpToPageValue, setJumpToPageValue] = React.useState('');

  // Determine if controlled or uncontrolled
  const isControlled = currentPageProp !== undefined;
  const currentPage = isControlled ? currentPageProp : internalCurrentPage;
  const pageSize = onPageSizeChange ? pageSizeProp : internalPageSize;

  // Calculate total pages
  const totalPages =
    totalPagesProp !== undefined
      ? totalPagesProp
      : totalItems > 0
        ? Math.ceil(totalItems / pageSize)
        : 1;

  const handlePageChange = (page: number) => {
    const newPage = Math.max(1, Math.min(page, totalPages));
    if (isControlled) {
      onPageChange?.(newPage);
    } else {
      setInternalCurrentPage(newPage);
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    } else {
      setInternalPageSize(newPageSize);
    }
    // Reset to first page when page size changes
    handlePageChange(1);
  };

  const handleJumpToPage = () => {
    const page = parseInt(jumpToPageValue, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageChange(page);
      setJumpToPageValue('');
    }
  };

  // Generate page numbers to display
  const getPageNumbers = (): number[] => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: number[] = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const startItem = totalItems > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endItem = totalItems > 0 ? Math.min(currentPage * pageSize, totalItems) : 0;

  const buttonSize: 'icon-sm' | 'icon-md' | 'icon-lg' = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
  }[size] as 'icon-sm' | 'icon-md' | 'icon-lg';

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }[size];

  return (
    <nav
      className={cn('flex flex-col sm:flex-row items-center justify-between gap-4', className)}
      aria-label="pagination"
      data-slot="pagination"
    >
      {/* Info Text */}
      {showInfo && totalItems > 0 && (
        <div className={cn('text-muted-foreground', textSize)} data-slot="pagination-info">
          {showingLabel} {startItem}-{endItem} {ofLabel} {totalItems} {resultsLabel}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center gap-2" data-slot="pagination-controls">
        {/* Page Size Selector */}
        {showPageSize && (
          <div className="flex items-center gap-2 mr-2" data-slot="pagination-page-size">
            <label className={cn('text-muted-foreground whitespace-nowrap', textSize)}>
              {pageSizeLabel}:
            </label>
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => handlePageSizeChange(parseInt(value, 10))}
            >
              <SelectTrigger className="w-20 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* First Button */}
        {showFirstLast && (
          <Button
            variant={variant}
            size={buttonSize}
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            aria-label={firstLabel}
            data-slot="pagination-first"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">{firstLabel}</span>
          </Button>
        )}

        {/* Previous Button */}
        {showPrevNext && (
          <Button
            variant={variant}
            size={buttonSize}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label={previousLabel}
            data-slot="pagination-previous"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only sm:ml-1">{previousLabel}</span>
          </Button>
        )}

        {/* Page Numbers */}
        <div className="flex items-center gap-1" data-slot="pagination-pages">
          {pageNumbers.map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'outline' : variant}
              size={buttonSize}
              onClick={() => handlePageChange(page)}
              aria-label={`${pageLabel} ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
              data-slot="pagination-page"
              data-active={currentPage === page}
            >
              {page}
            </Button>
          ))}
        </div>

        {/* Next Button */}
        {showPrevNext && (
          <Button
            variant={variant}
            size={buttonSize}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label={nextLabel}
            data-slot="pagination-next"
          >
            <span className="sr-only sm:not-sr-only sm:mr-1">{nextLabel}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Last Button */}
        {showFirstLast && (
          <Button
            variant={variant}
            size={buttonSize}
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label={lastLabel}
            data-slot="pagination-last"
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">{lastLabel}</span>
          </Button>
        )}
      </div>

      {/* Jump to Page */}
      {showJumpToPage && (
        <div className="flex items-center gap-2" data-slot="pagination-jump">
          <label className={cn('text-muted-foreground whitespace-nowrap', textSize)}>
            {jumpToPageLabel}:
          </label>
          <Input
            type="number"
            min={1}
            max={totalPages}
            value={jumpToPageValue}
            onChange={(e) => setJumpToPageValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleJumpToPage();
              }
            }}
            className="w-20 h-8"
            size="sm"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleJumpToPage}
            disabled={!jumpToPageValue || parseInt(jumpToPageValue, 10) < 1 || parseInt(jumpToPageValue, 10) > totalPages}
          >
            Go
          </Button>
        </div>
      )}
    </nav>
  );
}

export { Pagination };
