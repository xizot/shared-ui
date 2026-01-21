import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * Rose theme - Rose/Pink (hue ~350°)
 * Chart colors: Rose/Coral/Pink spectrum
 * Sidebar: Rose tinted
 */

const lightTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0.035 350)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0.035 350)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0.035 350)',
  primary: 'oklch(0.55 0.2 350)',
  primaryForeground: 'oklch(0.985 0.01 350)',
  secondary: 'oklch(0.965 0.015 350)',
  secondaryForeground: 'oklch(0.205 0.04 350)',
  muted: 'oklch(0.965 0.015 350)',
  mutedForeground: 'oklch(0.55 0.04 350)',
  accent: 'oklch(0.965 0.015 350)',
  accentForeground: 'oklch(0.205 0.04 350)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.922 0.02 350)',
  input: 'oklch(0.922 0.02 350)',
  ring: 'oklch(0.55 0.2 350)',
  // Chart colors - Rose spectrum
  chart1: 'oklch(0.60 0.22 350)', // Rose
  chart2: 'oklch(0.65 0.18 20)', // Coral
  chart3: 'oklch(0.70 0.16 330)', // Pink
  chart4: 'oklch(0.75 0.14 35)', // Peach
  chart5: 'oklch(0.50 0.20 10)', // Crimson
  // Sidebar - Rose tinted
  sidebar: 'oklch(0.982 0.01 350)',
  sidebarForeground: 'oklch(0.145 0.035 350)',
  sidebarPrimary: 'oklch(0.55 0.2 350)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 350)',
  sidebarAccent: 'oklch(0.965 0.015 350)',
  sidebarAccentForeground: 'oklch(0.205 0.04 350)',
  sidebarBorder: 'oklch(0.922 0.02 350)',
  sidebarRing: 'oklch(0.55 0.2 350)',
};

const darkTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(0.145 0.025 350)',
  foreground: 'oklch(0.985 0.01 350)',
  card: 'oklch(0.205 0.03 350)',
  cardForeground: 'oklch(0.985 0.01 350)',
  popover: 'oklch(0.205 0.03 350)',
  popoverForeground: 'oklch(0.985 0.01 350)',
  primary: 'oklch(0.65 0.2 350)',
  primaryForeground: 'oklch(0.145 0.025 350)',
  secondary: 'oklch(0.275 0.035 350)',
  secondaryForeground: 'oklch(0.985 0.01 350)',
  muted: 'oklch(0.275 0.035 350)',
  mutedForeground: 'oklch(0.70 0.04 350)',
  accent: 'oklch(0.275 0.035 350)',
  accentForeground: 'oklch(0.985 0.01 350)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.65 0.2 350)',
  // Chart colors - Rose spectrum (brighter for dark mode)
  chart1: 'oklch(0.70 0.22 350)',
  chart2: 'oklch(0.75 0.18 20)',
  chart3: 'oklch(0.80 0.16 330)',
  chart4: 'oklch(0.85 0.14 35)',
  chart5: 'oklch(0.60 0.20 10)',
  // Sidebar - Rose tinted dark
  sidebar: 'oklch(0.205 0.03 350)',
  sidebarForeground: 'oklch(0.985 0.01 350)',
  sidebarPrimary: 'oklch(0.65 0.2 350)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 350)',
  sidebarAccent: 'oklch(0.275 0.035 350)',
  sidebarAccentForeground: 'oklch(0.985 0.01 350)',
  sidebarBorder: 'oklch(1 0 0 / 10%)',
  sidebarRing: 'oklch(0.65 0.2 350)',
};

export const ROSE_STYLE_CSS = generateStyleCSS('Rose', lightTokens, darkTokens);
