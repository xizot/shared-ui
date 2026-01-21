import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * Violet theme - Purple/Violet (hue ~280°)
 * Chart colors: Purple/Magenta/Lavender spectrum
 * Sidebar: Violet tinted
 */

const lightTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0.035 280)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0.035 280)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0.035 280)',
  primary: 'oklch(0.50 0.2 280)',
  primaryForeground: 'oklch(0.985 0.01 280)',
  secondary: 'oklch(0.965 0.015 280)',
  secondaryForeground: 'oklch(0.205 0.04 280)',
  muted: 'oklch(0.965 0.015 280)',
  mutedForeground: 'oklch(0.55 0.04 280)',
  accent: 'oklch(0.965 0.015 280)',
  accentForeground: 'oklch(0.205 0.04 280)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.922 0.02 280)',
  input: 'oklch(0.922 0.02 280)',
  ring: 'oklch(0.50 0.2 280)',
  // Chart colors - Violet spectrum
  chart1: 'oklch(0.55 0.22 280)', // Violet
  chart2: 'oklch(0.60 0.20 310)', // Magenta
  chart3: 'oklch(0.65 0.18 260)', // Indigo
  chart4: 'oklch(0.75 0.14 290)', // Lavender
  chart5: 'oklch(0.50 0.18 250)', // Deep Purple
  // Sidebar - Violet tinted
  sidebar: 'oklch(0.982 0.01 280)',
  sidebarForeground: 'oklch(0.145 0.035 280)',
  sidebarPrimary: 'oklch(0.50 0.2 280)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 280)',
  sidebarAccent: 'oklch(0.965 0.015 280)',
  sidebarAccentForeground: 'oklch(0.205 0.04 280)',
  sidebarBorder: 'oklch(0.922 0.02 280)',
  sidebarRing: 'oklch(0.50 0.2 280)',
};

const darkTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(0.145 0.025 280)',
  foreground: 'oklch(0.985 0.01 280)',
  card: 'oklch(0.205 0.03 280)',
  cardForeground: 'oklch(0.985 0.01 280)',
  popover: 'oklch(0.205 0.03 280)',
  popoverForeground: 'oklch(0.985 0.01 280)',
  primary: 'oklch(0.65 0.2 280)',
  primaryForeground: 'oklch(0.145 0.025 280)',
  secondary: 'oklch(0.275 0.035 280)',
  secondaryForeground: 'oklch(0.985 0.01 280)',
  muted: 'oklch(0.275 0.035 280)',
  mutedForeground: 'oklch(0.70 0.04 280)',
  accent: 'oklch(0.275 0.035 280)',
  accentForeground: 'oklch(0.985 0.01 280)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.65 0.2 280)',
  // Chart colors - Violet spectrum (brighter for dark mode)
  chart1: 'oklch(0.65 0.22 280)',
  chart2: 'oklch(0.70 0.20 310)',
  chart3: 'oklch(0.75 0.18 260)',
  chart4: 'oklch(0.85 0.14 290)',
  chart5: 'oklch(0.60 0.18 250)',
  // Sidebar - Violet tinted dark
  sidebar: 'oklch(0.205 0.03 280)',
  sidebarForeground: 'oklch(0.985 0.01 280)',
  sidebarPrimary: 'oklch(0.65 0.2 280)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 280)',
  sidebarAccent: 'oklch(0.275 0.035 280)',
  sidebarAccentForeground: 'oklch(0.985 0.01 280)',
  sidebarBorder: 'oklch(1 0 0 / 10%)',
  sidebarRing: 'oklch(0.65 0.2 280)',
};

export const VIOLET_STYLE_CSS = generateStyleCSS('Violet', lightTokens, darkTokens);
