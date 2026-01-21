import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * Orange theme - Orange/Amber (hue ~45°)
 * Chart colors: Orange/Amber/Yellow spectrum
 * Sidebar: Orange tinted
 */

const lightTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0.04 45)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0.04 45)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0.04 45)',
  primary: 'oklch(0.60 0.18 45)',
  primaryForeground: 'oklch(0.985 0.01 45)',
  secondary: 'oklch(0.965 0.02 45)',
  secondaryForeground: 'oklch(0.205 0.045 45)',
  muted: 'oklch(0.965 0.02 45)',
  mutedForeground: 'oklch(0.55 0.05 45)',
  accent: 'oklch(0.965 0.02 45)',
  accentForeground: 'oklch(0.205 0.045 45)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.922 0.025 45)',
  input: 'oklch(0.922 0.025 45)',
  ring: 'oklch(0.60 0.18 45)',
  // Chart colors - Orange spectrum
  chart1: 'oklch(0.65 0.20 45)', // Orange
  chart2: 'oklch(0.70 0.18 60)', // Amber
  chart3: 'oklch(0.80 0.16 85)', // Yellow
  chart4: 'oklch(0.60 0.19 30)', // Tangerine
  chart5: 'oklch(0.75 0.17 70)', // Gold
  // Sidebar - Orange tinted
  sidebar: 'oklch(0.982 0.012 45)',
  sidebarForeground: 'oklch(0.145 0.04 45)',
  sidebarPrimary: 'oklch(0.60 0.18 45)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 45)',
  sidebarAccent: 'oklch(0.965 0.02 45)',
  sidebarAccentForeground: 'oklch(0.205 0.045 45)',
  sidebarBorder: 'oklch(0.922 0.025 45)',
  sidebarRing: 'oklch(0.60 0.18 45)',
};

const darkTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(0.145 0.025 45)',
  foreground: 'oklch(0.985 0.01 45)',
  card: 'oklch(0.205 0.035 45)',
  cardForeground: 'oklch(0.985 0.01 45)',
  popover: 'oklch(0.205 0.035 45)',
  popoverForeground: 'oklch(0.985 0.01 45)',
  primary: 'oklch(0.70 0.18 45)',
  primaryForeground: 'oklch(0.145 0.025 45)',
  secondary: 'oklch(0.275 0.04 45)',
  secondaryForeground: 'oklch(0.985 0.01 45)',
  muted: 'oklch(0.275 0.04 45)',
  mutedForeground: 'oklch(0.70 0.05 45)',
  accent: 'oklch(0.275 0.04 45)',
  accentForeground: 'oklch(0.985 0.01 45)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.70 0.18 45)',
  // Chart colors - Orange spectrum (brighter for dark mode)
  chart1: 'oklch(0.75 0.20 45)',
  chart2: 'oklch(0.80 0.18 60)',
  chart3: 'oklch(0.88 0.16 85)',
  chart4: 'oklch(0.70 0.19 30)',
  chart5: 'oklch(0.85 0.17 70)',
  // Sidebar - Orange tinted dark
  sidebar: 'oklch(0.205 0.035 45)',
  sidebarForeground: 'oklch(0.985 0.01 45)',
  sidebarPrimary: 'oklch(0.70 0.18 45)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 45)',
  sidebarAccent: 'oklch(0.275 0.04 45)',
  sidebarAccentForeground: 'oklch(0.985 0.01 45)',
  sidebarBorder: 'oklch(1 0 0 / 10%)',
  sidebarRing: 'oklch(0.70 0.18 45)',
};

export const ORANGE_STYLE_CSS = generateStyleCSS('Orange', lightTokens, darkTokens);
