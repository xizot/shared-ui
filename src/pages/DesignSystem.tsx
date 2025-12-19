import { Toaster } from '@/components/ui/sonner';
import { useState } from 'react';
import { DesignSystemFooter } from './components/DesignSystemFooter';
import { DesignSystemHeader } from './components/DesignSystemHeader';
import { DesignSystemMain } from './components/DesignSystemMain';
import { DesignSystemSidebar } from './components/DesignSystemSidebar';

export function DesignSystem() {
  const [selectedComponentId, setSelectedComponentId] = useState<string | undefined>();
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  const handleComponentSelect = (componentId: string | undefined) => {
    setSelectedComponentId(componentId);
  };

  const handleGlobalSearch = (query: string) => {
    setGlobalSearchQuery(query);
    // If search matches a component, select it
    // This is a simple implementation - you can enhance it
    if (query.trim()) {
      // Could implement search and auto-select logic here
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex h-screen flex-col overflow-hidden">
        <DesignSystemHeader
          globalSearchQuery={globalSearchQuery}
          onSearchChange={handleGlobalSearch}
        />
        <div className="flex flex-1 overflow-hidden">
          <DesignSystemSidebar
            selectedComponentId={selectedComponentId}
            onComponentSelect={handleComponentSelect}
          />
          <DesignSystemMain selectedComponentId={selectedComponentId} />
        </div>
        <DesignSystemFooter />
      </div>
    </>
  );
}
