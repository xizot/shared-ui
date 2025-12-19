'use client';

import { CheckIcon, ChevronDown, X, XCircle } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { type FormSize } from '@/constants/form-sizes';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type MultipleComboboxBaseOption = {
  id: string;
  code?: string | number;
  name: string;
  disabled?: boolean;
};

type MultipleComboboxValue = string[];

type MultipleComboboxOnChange<T extends MultipleComboboxBaseOption> = (
  values: MultipleComboboxValue,
  options: T[] | undefined,
) => void;

type MultipleComboboxProps<TOptions extends readonly MultipleComboboxBaseOption[]> = {
  options: TOptions;
  value?: MultipleComboboxValue;
  onChange?: MultipleComboboxOnChange<TOptions[number]>;
  autoResize?: boolean;
  limitTags?: number;
  showCode?: boolean;
  label?: string | React.ReactNode;
  error?: string;
  required?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: FormSize;
  className?: ComponentProps<'div'>['className'];
  triggerClassName?: ComponentProps<typeof Button>['className'];
  popoverClassName?: ComponentProps<typeof PopoverContent>['className'];
};

function MultipleCombobox<TOptions extends readonly MultipleComboboxBaseOption[]>({
  options,
  value = [],
  onChange,
  autoResize = false,
  limitTags,
  showCode = false,
  label,
  error,
  required,
  placeholder = 'Select options...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No results found.',
  disabled = false,
  readonly = false,
  size = 'md',
  className,
  triggerClassName,
  popoverClassName,
}: MultipleComboboxProps<TOptions>) {
  const [open, setOpen] = React.useState(false);
  const selectedValues = React.useMemo(() => value || [], [value]);

  const selectedOptions = React.useMemo(
    () => options.filter((opt) => selectedValues.includes(opt.id)) as TOptions[number][],
    [options, selectedValues],
  );

  const handleToggle = (optionId: string) => {
    if (disabled || readonly) return;

    const isSelected = selectedValues.includes(optionId);
    const newValues = isSelected
      ? selectedValues.filter((id) => id !== optionId)
      : [...selectedValues, optionId];

    const newOptions = options.filter((opt) => newValues.includes(opt.id)) as TOptions[number][];
    onChange?.(newValues, newOptions.length > 0 ? newOptions : undefined);
  };

  const handleRemove = (optionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled || readonly) return;

    const newValues = selectedValues.filter((id) => id !== optionId);
    const newOptions = options.filter((opt) => newValues.includes(opt.id)) as TOptions[number][];
    onChange?.(newValues, newOptions.length > 0 ? newOptions : undefined);
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled || readonly) return;
    onChange?.([], undefined);
  };

  const getBadgeContent = (option: TOptions[number]) => {
    if (showCode && option.code !== undefined) {
      return `${option.code} - ${option.name}`;
    }
    return option.name;
  };

  const displayedBadges = limitTags ? selectedOptions.slice(0, limitTags) : selectedOptions;
  const remainingCount = limitTags ? Math.max(0, selectedOptions.length - limitTags) : 0;

  const triggerElement = (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          size={size}
          className={cn(
            'w-full justify-between group/combobox',
            !selectedValues.length && 'text-muted-foreground',
            error && 'border-destructive',
            autoResize && 'h-auto min-h-0',
            triggerClassName,
          )}
        >
          <div
            className={cn(
              'flex-1 flex items-center gap-1.5 min-w-0',
              autoResize ? 'flex-wrap' : 'overflow-hidden',
            )}
          >
            {selectedValues.length === 0 ? (
              <span className="text-left truncate">{placeholder}</span>
            ) : (
              <>
                {displayedBadges.map((option) => (
                  <Badge
                    key={option.id}
                    variant="secondary"
                    className={cn(
                      'gap-1 shrink-0',
                      !autoResize && 'truncate max-w-[120px]',
                      (disabled || readonly) && 'pr-2',
                    )}
                  >
                    <span className="truncate">{getBadgeContent(option)}</span>
                    {!disabled && !readonly && (
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={(e) => handleRemove(option.id, e)}
                        className="ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0"
                      >
                        <X className="h-2.5 w-2.5" />
                      </button>
                    )}
                  </Badge>
                ))}
                {remainingCount > 0 && (
                  <Badge variant="secondary" className="shrink-0">
                    +{remainingCount}
                  </Badge>
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            {selectedValues.length > 0 && !disabled && !readonly ? (
              <span
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={handleClearAll}
                className="cursor-pointer"
              >
                <XCircle className="text-muted-foreground hidden group-hover/combobox:block h-4 w-4" />
                <ChevronDown className="text-muted-foreground block group-hover/combobox:hidden h-4 w-4" />
              </span>
            ) : (
              <ChevronDown className="text-muted-foreground h-4 w-4" />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn('w-(--radix-popover-trigger-width) p-0', popoverClassName)}
        align="start"
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.id);
                return (
                  <CommandItem
                    key={option.id}
                    value={option.name}
                    disabled={option.disabled}
                    onSelect={() => {
                      handleToggle(option.id);
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggle(option.id);
                      }}
                      className="shrink-0"
                    >
                      <Checkbox
                        checked={isSelected}
                        disabled={option.disabled || disabled || readonly}
                        size={size}
                      />
                    </div>
                    <div className="flex-1 flex items-center gap-2 min-w-0">
                      {showCode && option.code !== undefined && (
                        <span className="text-muted-foreground shrink-0">{option.code}</span>
                      )}
                      <span className="flex-1 truncate">{option.name}</span>
                    </div>
                    <CheckIcon
                      className={cn(
                        'h-4 w-4 shrink-0 text-primary',
                        isSelected ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );

  if (!label && !error) {
    return <div className={cn('w-full', className)}>{triggerElement}</div>;
  }

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <Label className="text-foreground leading-5 block">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <div className={label ? 'mt-1' : ''}>{triggerElement}</div>
      {error && (
        <div className="text-destructive text-sm mt-1.5" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export {
  MultipleCombobox,
  type MultipleComboboxBaseOption,
  type MultipleComboboxOnChange,
  type MultipleComboboxProps,
  type MultipleComboboxValue
};

