import { Separator } from '@/components/ui/separator';

const VERSION = '1.0.0';

export function DesignSystemFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex h-16 items-center justify-between px-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Shared UI</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Version {VERSION}</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/xizot/shared-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href="https://github.com/xizot/shared-ui/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
}
