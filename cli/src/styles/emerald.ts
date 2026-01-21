import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * Emerald theme - Green/Emerald (hue ~160°)
 * Chart colors: Green/Teal/Mint spectrum
 * Sidebar: Emerald tinted
 */

const lightTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0.035 160)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0.035 160)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0.035 160)',
  primary: 'oklch(0.50 0.15 160)',
  primaryForeground: 'oklch(0.985 0.01 160)',
  secondary: 'oklch(0.965 0.015 160)',
  secondaryForeground: 'oklch(0.205 0.04 160)',
  muted: 'oklch(0.965 0.015 160)',
  mutedForeground: 'oklch(0.55 0.04 160)',
  accent: 'oklch(0.965 0.015 160)',
  accentForeground: 'oklch(0.205 0.04 160)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.922 0.018 160)',
  input: 'oklch(0.922 0.018 160)',
  ring: 'oklch(0.50 0.15 160)',
  // Chart colors - Emerald spectrum
  chart1: 'oklch(0.55 0.16 160)', // Emerald
  chart2: 'oklch(0.60 0.14 180)', // Teal
  chart3: 'oklch(0.65 0.12 140)', // Mint
  chart4: 'oklch(0.70 0.15 120)', // Lime
  chart5: 'oklch(0.45 0.12 150)', // Forest
  // Sidebar - Emerald tinted
  sidebar: 'oklch(0.982 0.01 160)',
  sidebarForeground: 'oklch(0.145 0.035 160)',
  sidebarPrimary: 'oklch(0.50 0.15 160)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 160)',
  sidebarAccent: 'oklch(0.965 0.015 160)',
  sidebarAccentForeground: 'oklch(0.205 0.04 160)',
  sidebarBorder: 'oklch(0.922 0.018 160)',
  sidebarRing: 'oklch(0.50 0.15 160)',
};

const darkTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(0.145 0.025 160)',
  foreground: 'oklch(0.985 0.01 160)',
  card: 'oklch(0.205 0.03 160)',
  cardForeground: 'oklch(0.985 0.01 160)',
  popover: 'oklch(0.205 0.03 160)',
  popoverForeground: 'oklch(0.985 0.01 160)',
  primary: 'oklch(0.60 0.15 160)',
  primaryForeground: 'oklch(0.145 0.025 160)',
  secondary: 'oklch(0.275 0.035 160)',
  secondaryForeground: 'oklch(0.985 0.01 160)',
  muted: 'oklch(0.275 0.035 160)',
  mutedForeground: 'oklch(0.70 0.04 160)',
  accent: 'oklch(0.275 0.035 160)',
  accentForeground: 'oklch(0.985 0.01 160)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.60 0.15 160)',
  // Chart colors - Emerald spectrum (brighter for dark mode)
  chart1: 'oklch(0.65 0.16 160)',
  chart2: 'oklch(0.70 0.14 180)',
  chart3: 'oklch(0.75 0.12 140)',
  chart4: 'oklch(0.80 0.15 120)',
  chart5: 'oklch(0.55 0.12 150)',
  // Sidebar - Emerald tinted dark
  sidebar: 'oklch(0.205 0.03 160)',
  sidebarForeground: 'oklch(0.985 0.01 160)',
  sidebarPrimary: 'oklch(0.60 0.15 160)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 160)',
  sidebarAccent: 'oklch(0.275 0.035 160)',
  sidebarAccentForeground: 'oklch(0.985 0.01 160)',
  sidebarBorder: 'oklch(1 0 0 / 10%)',
  sidebarRing: 'oklch(0.60 0.15 160)',
};

export const EMERALD_STYLE_CSS = generateStyleCSS('Emerald', lightTokens, darkTokens);
