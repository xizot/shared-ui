import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * Default theme - Teal/Cyan (hue ~197°)
 * WCAG AA compliant contrast ratios
 * Chart colors: Teal spectrum with complementary colors
 * Sidebar: Teal tinted
 */

const lightTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0.035 197)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0.035 197)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0.035 197)',
  primary: 'oklch(0.42 0.12 197)', // Darker for better contrast
  primaryForeground: 'oklch(0.99 0.002 197)',
  secondary: 'oklch(0.95 0.008 197)', // Slightly darker
  secondaryForeground: 'oklch(0.18 0.04 197)', // Darker text
  muted: 'oklch(0.95 0.008 197)',
  mutedForeground: 'oklch(0.45 0.05 197)', // Much darker for readability
  accent: 'oklch(0.95 0.008 197)',
  accentForeground: 'oklch(0.18 0.04 197)', // Darker text
  destructive: 'oklch(0.55 0.22 27.325)', // Adjusted for contrast
  destructiveForeground: 'oklch(0.99 0.003 247.858)',
  border: 'oklch(0.88 0.015 197)', // More visible
  input: 'oklch(0.88 0.015 197)', // More visible
  ring: 'oklch(0.42 0.12 197)',
  // Chart colors - Optimized for visibility on white
  chart1: 'oklch(0.50 0.15 197)', // Teal - darker
  chart2: 'oklch(0.55 0.13 180)', // Cyan - darker
  chart3: 'oklch(0.45 0.12 220)', // Blue-teal - darker
  chart4: 'oklch(0.58 0.14 165)', // Mint - darker
  chart5: 'oklch(0.50 0.13 150)', // Green-teal - darker
  // Sidebar - same as background
  sidebar: 'oklch(1 0 0)',
  sidebarForeground: 'oklch(0.145 0.035 197)',
  sidebarPrimary: 'oklch(0.42 0.12 197)',
  sidebarPrimaryForeground: 'oklch(0.99 0.002 197)',
  sidebarAccent: 'oklch(0.95 0.008 197)',
  sidebarAccentForeground: 'oklch(0.18 0.04 197)',
  sidebarBorder: 'oklch(0.88 0.015 197)',
  sidebarRing: 'oklch(0.42 0.12 197)',
};

const darkTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(0.145 0.035 197)',
  foreground: 'oklch(0.96 0.005 197)', // Slightly less bright
  card: 'oklch(0.20 0.035 197)',
  cardForeground: 'oklch(0.96 0.005 197)',
  popover: 'oklch(0.20 0.035 197)',
  popoverForeground: 'oklch(0.96 0.005 197)',
  primary: 'oklch(0.60 0.13 197)', // Brighter for contrast
  primaryForeground: 'oklch(0.145 0.035 197)',
  secondary: 'oklch(0.26 0.035 197)',
  secondaryForeground: 'oklch(0.96 0.005 197)',
  muted: 'oklch(0.26 0.035 197)',
  mutedForeground: 'oklch(0.75 0.025 197)', // Brighter for readability
  accent: 'oklch(0.26 0.035 197)',
  accentForeground: 'oklch(0.96 0.005 197)',
  destructive: 'oklch(0.65 0.18 27.325)', // Adjusted for dark bg
  destructiveForeground: 'oklch(0.99 0.003 247.858)',
  border: 'oklch(0.35 0.04 197)', // Much more visible
  input: 'oklch(0.38 0.045 197)', // More visible
  ring: 'oklch(0.60 0.13 197)',
  // Chart colors - Brighter and more saturated for dark mode
  chart1: 'oklch(0.68 0.16 197)', // Teal
  chart2: 'oklch(0.72 0.14 180)', // Cyan
  chart3: 'oklch(0.63 0.13 220)', // Blue-teal
  chart4: 'oklch(0.76 0.15 165)', // Mint
  chart5: 'oklch(0.68 0.14 150)', // Green-teal
  // Sidebar - same as background
  sidebar: 'oklch(0.145 0.035 197)',
  sidebarForeground: 'oklch(0.96 0.005 197)',
  sidebarPrimary: 'oklch(0.60 0.13 197)',
  sidebarPrimaryForeground: 'oklch(0.96 0.005 197)',
  sidebarAccent: 'oklch(0.26 0.035 197)',
  sidebarAccentForeground: 'oklch(0.96 0.005 197)',
  sidebarBorder: 'oklch(0.35 0.04 197)',
  sidebarRing: 'oklch(0.60 0.13 197)',
};

export const DEFAULT_STYLE_CSS = generateStyleCSS('Default', lightTokens, darkTokens);
