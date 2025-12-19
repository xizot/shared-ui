import { AlertCircle } from 'lucide-react';
export type ComponentCategory = 'Form' | 'Layout' | 'Feedback' | 'Data Display' | 'Navigation' | 'Overlay' | 'Media' | 'Other';
export interface ComponentMetadata {
    id: string;
    name: string;
    category: ComponentCategory;
    description: string;
    icon: typeof AlertCircle;
}
export declare const componentRegistry: ComponentMetadata[];
export declare const componentCategories: ComponentCategory[];
export declare function getComponentsByCategory(category: ComponentCategory): ComponentMetadata[];
export declare function getComponentById(id: string): ComponentMetadata | undefined;
export declare function searchComponents(query: string): ComponentMetadata[];
//# sourceMappingURL=component-registry.d.ts.map