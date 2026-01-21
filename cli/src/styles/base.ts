/**
 * Shared Tailwind theme inline CSS
 * This is common for all themes and maps CSS variables to Tailwind utilities
 */
export const THEME_INLINE_CSS = `/* =========================
   Tailwind theme mapping
   ========================= */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}
`;

/**
 * CSS header with imports and custom variant
 */
export const CSS_HEADER = `@import "tailwindcss";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));
`;

/**
 * CSS base layer with common styles
 */
export const CSS_BASE_STYLES = `
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
`;

export interface ThemeTokens {
  radius: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

/**
 * Generate design tokens CSS block
 */
function generateTokensBlock(tokens: ThemeTokens, selector: string): string {
  const indent = selector === ':root' ? '    ' : '    ';
  const radiusLine = selector === ':root' ? `${indent}--radius: ${tokens.radius};\n\n` : '';

  return `  ${selector} {
${radiusLine}${indent}--background: ${tokens.background};
${indent}--foreground: ${tokens.foreground};

${indent}--card: ${tokens.card};
${indent}--card-foreground: ${tokens.cardForeground};

${indent}--popover: ${tokens.popover};
${indent}--popover-foreground: ${tokens.popoverForeground};

${indent}--primary: ${tokens.primary};
${indent}--primary-foreground: ${tokens.primaryForeground};

${indent}--secondary: ${tokens.secondary};
${indent}--secondary-foreground: ${tokens.secondaryForeground};

${indent}--muted: ${tokens.muted};
${indent}--muted-foreground: ${tokens.mutedForeground};

${indent}--accent: ${tokens.accent};
${indent}--accent-foreground: ${tokens.accentForeground};

${indent}--destructive: ${tokens.destructive};
${indent}--destructive-foreground: ${tokens.destructiveForeground};

${indent}--border: ${tokens.border};
${indent}--input: ${tokens.input};
${indent}--ring: ${tokens.ring};

${indent}--chart-1: ${tokens.chart1};
${indent}--chart-2: ${tokens.chart2};
${indent}--chart-3: ${tokens.chart3};
${indent}--chart-4: ${tokens.chart4};
${indent}--chart-5: ${tokens.chart5};

${indent}/* Sidebar tokens */
${indent}--sidebar: ${tokens.sidebar};
${indent}--sidebar-foreground: ${tokens.sidebarForeground};
${indent}--sidebar-primary: ${tokens.sidebarPrimary};
${indent}--sidebar-primary-foreground: ${tokens.sidebarPrimaryForeground};
${indent}--sidebar-accent: ${tokens.sidebarAccent};
${indent}--sidebar-accent-foreground: ${tokens.sidebarAccentForeground};
${indent}--sidebar-border: ${tokens.sidebarBorder};
${indent}--sidebar-ring: ${tokens.sidebarRing};
  }`;
}

/**
 * Generate full CSS content for a theme
 */
export function generateStyleCSS(
  themeName: string,
  lightTokens: ThemeTokens,
  darkTokens: ThemeTokens,
): string {
  return `${CSS_HEADER}
/* =========================
   Design tokens (OKLCH only) - ${themeName} Style
   ========================= */
@layer base {
${generateTokensBlock(lightTokens, ':root')}

${generateTokensBlock(darkTokens, '.dark')}
${CSS_BASE_STYLES}}

${THEME_INLINE_CSS}`;
}
