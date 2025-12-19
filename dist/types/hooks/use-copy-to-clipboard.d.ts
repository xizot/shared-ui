export interface UseCopyToClipboardReturn {
    copy: (text: string) => Promise<boolean>;
    copied: boolean;
    error: Error | null;
}
export declare function useCopyToClipboard(): UseCopyToClipboardReturn;
//# sourceMappingURL=use-copy-to-clipboard.d.ts.map