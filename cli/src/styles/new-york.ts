import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * New York theme - Neutral gray (hue ~286°)
 * Chart colors: Diverse neutral palette
 * Sidebar: Neutral gray
 */

const lightTokens: ThemeTokens = {
  radius: '0.5rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.141 0.005 285.823)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.141 0.005 285.823)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.141 0.005 285.823)',
  primary: 'oklch(0.21 0.006 285.885)',
  primaryForeground: 'oklch(0.985 0.002 247.839)',
  secondary: 'oklch(0.967 0.001 286.375)',
  secondaryForeground: 'oklch(0.21 0.006 285.885)',
  muted: 'oklch(0.967 0.001 286.375)',
  mutedForeground: 'oklch(0.552 0.016 285.938)',
  accent: 'oklch(0.967 0.001 286.375)',
  accentForeground: 'oklch(0.21 0.006 285.885)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.92 0.004 286.32)',
  input: 'oklch(0.92 0.004 286.32)',
  ring: 'oklch(0.705 0.015 286.067)',
  // Chart colors - Diverse palette
  chart1: 'oklch(0.646 0.222 41.116)',
  chart2: 'oklch(0.6 0.118 184.704)',
  chart3: 'oklch(0.398 0.07 227.392)',
  chart4: 'oklch(0.828 0.189 84.429)',
  chart5: 'oklch(0.769 0.188 70.08)',
  // Sidebar - Neutral
  sidebar: 'oklch(0.984 0.003 247.858)',
  sidebarForeground: 'oklch(0.141 0.005 285.823)',
  sidebarPrimary: 'oklch(0.21 0.006 285.885)',
  sidebarPrimaryForeground: 'oklch(0.985 0.002 247.839)',
  sidebarAccent: 'oklch(0.967 0.001 286.375)',
  sidebarAccentForeground: 'oklch(0.21 0.006 285.885)',
  sidebarBorder: 'oklch(0.92 0.004 286.32)',
  sidebarRing: 'oklch(0.705 0.015 286.067)',
};

const darkTokens: ThemeTokens = {
  radius: '0.5rem',
  background: 'oklch(0.141 0.005 285.823)',
  foreground: 'oklch(0.985 0.002 247.839)',
  card: 'oklch(0.141 0.005 285.823)',
  cardForeground: 'oklch(0.985 0.002 247.839)',
  popover: 'oklch(0.141 0.005 285.823)',
  popoverForeground: 'oklch(0.985 0.002 247.839)',
  primary: 'oklch(0.985 0.002 247.839)',
  primaryForeground: 'oklch(0.21 0.006 285.885)',
  secondary: 'oklch(0.274 0.006 286.033)',
  secondaryForeground: 'oklch(0.985 0.002 247.839)',
  muted: 'oklch(0.274 0.006 286.033)',
  mutedForeground: 'oklch(0.705 0.015 286.067)',
  accent: 'oklch(0.274 0.006 286.033)',
  accentForeground: 'oklch(0.985 0.002 247.839)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.274 0.006 286.033)',
  input: 'oklch(0.274 0.006 286.033)',
  ring: 'oklch(0.442 0.017 285.786)',
  // Chart colors - Diverse palette (dark mode)
  chart1: 'oklch(0.488 0.243 264.376)',
  chart2: 'oklch(0.696 0.17 162.48)',
  chart3: 'oklch(0.769 0.188 70.08)',
  chart4: 'oklch(0.627 0.265 303.9)',
  chart5: 'oklch(0.645 0.246 16.439)',
  // Sidebar - Neutral dark
  sidebar: 'oklch(0.21 0.006 285.885)',
  sidebarForeground: 'oklch(0.985 0.002 247.839)',
  sidebarPrimary: 'oklch(0.488 0.243 264.376)',
  sidebarPrimaryForeground: 'oklch(0.985 0.002 247.839)',
  sidebarAccent: 'oklch(0.274 0.006 286.033)',
  sidebarAccentForeground: 'oklch(0.985 0.002 247.839)',
  sidebarBorder: 'oklch(0.274 0.006 286.033)',
  sidebarRing: 'oklch(0.442 0.017 285.786)',
};

export const NEW_YORK_STYLE_CSS = generateStyleCSS('New York', lightTokens, darkTokens);
