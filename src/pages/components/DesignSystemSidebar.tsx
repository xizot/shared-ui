import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Rocket, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  componentCategories,
  componentRegistry,
  type ComponentCategory,
  type ComponentMetadata,
} from './component-registry';

interface DesignSystemSidebarProps {
  selectedComponentId?: string;
  onComponentSelect: (componentId: string | undefined) => void;
}

export function DesignSystemSidebar({
  selectedComponentId,
  onComponentSelect,
}: DesignSystemSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<ComponentCategory>>(
    new Set(componentCategories)
  );

  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) {
      return componentRegistry;
    }
    const lowerQuery = searchQuery.toLowerCase();
    return componentRegistry.filter(
      (comp) =>
        comp.name.toLowerCase().includes(lowerQuery) ||
        comp.description.toLowerCase().includes(lowerQuery) ||
        comp.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const componentsByCategory = useMemo(() => {
    const grouped: Record<ComponentCategory, ComponentMetadata[]> = {} as Record<
      ComponentCategory,
      ComponentMetadata[]
    >;
    componentCategories.forEach((cat) => {
      grouped[cat] = [];
    });
    filteredComponents.forEach((comp) => {
      if (grouped[comp.category]) {
        grouped[comp.category].push(comp);
      }
    });
    // Sort components alphabetically by name within each category
    componentCategories.forEach((cat) => {
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
    });
    return grouped;
  }, [filteredComponents]);

  const toggleCategory = (category: ComponentCategory) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <aside className="w-64 border-r bg-muted/30 flex flex-col h-full">
      <div className="border-b p-4 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Filter components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <ScrollArea className="flex-1 overflow-hidden">
        <div className="p-2">
          <div className="mb-4">
            <Button
              variant={selectedComponentId === undefined ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-2 px-2 font-medium',
                selectedComponentId === undefined && 'bg-secondary font-medium'
              )}
              onClick={() => onComponentSelect(undefined)}
            >
              <Rocket className="h-4 w-4" />
              <span>Quick Start</span>
            </Button>
          </div>
          {componentCategories.map((category) => {
            const components = componentsByCategory[category];
            if (components.length === 0) return null;

            const isExpanded = expandedCategories.has(category);

            return (
              <div key={category} className="mb-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between px-2 font-medium"
                  onClick={() => toggleCategory(category)}
                >
                  <span>{category}</span>
                  <span className="text-xs text-muted-foreground">
                    ({components.length})
                  </span>
                </Button>
                {isExpanded && (
                  <div className="ml-2 mt-1 space-y-1">
                    {components.map((comp) => {
                      const Icon = comp.icon;
                      const isSelected = selectedComponentId === comp.id;
                      return (
                        <Button
                          key={comp.id}
                          variant={isSelected ? 'secondary' : 'ghost'}
                          className={cn(
                            'w-full justify-start gap-2 px-2 text-sm',
                            isSelected && 'bg-secondary font-medium'
                          )}
                          onClick={() => onComponentSelect(comp.id)}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="truncate">{comp.name}</span>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </aside>
  );
}

