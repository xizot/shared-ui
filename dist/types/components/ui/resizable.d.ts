import * as React from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
declare function ResizablePanelGroup({ className, ...props }: React.ComponentProps<typeof Group>): import("react/jsx-runtime").JSX.Element;
declare function ResizablePanel({ ...props }: React.ComponentProps<typeof Panel>): import("react/jsx-runtime").JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: React.ComponentProps<typeof Separator> & {
    withHandle?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
//# sourceMappingURL=resizable.d.ts.map