import { generateStyleCSS, ThemeTokens } from './base.js';

/**
 * Blue theme - Blue/Indigo (hue ~240°)
 * Chart colors: Blue/Indigo/Sky spectrum
 * Sidebar: Blue tinted
 */

const lightTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0.035 240)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0.035 240)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0.035 240)',
  primary: 'oklch(0.50 0.18 240)',
  primaryForeground: 'oklch(0.985 0.01 240)',
  secondary: 'oklch(0.965 0.015 240)',
  secondaryForeground: 'oklch(0.205 0.04 240)',
  muted: 'oklch(0.965 0.015 240)',
  mutedForeground: 'oklch(0.55 0.04 240)',
  accent: 'oklch(0.965 0.015 240)',
  accentForeground: 'oklch(0.205 0.04 240)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(0.922 0.02 240)',
  input: 'oklch(0.922 0.02 240)',
  ring: 'oklch(0.50 0.18 240)',
  // Chart colors - Blue spectrum
  chart1: 'oklch(0.55 0.20 240)', // Blue
  chart2: 'oklch(0.50 0.18 265)', // Indigo
  chart3: 'oklch(0.70 0.14 220)', // Sky
  chart4: 'oklch(0.40 0.16 255)', // Navy
  chart5: 'oklch(0.60 0.17 230)', // Cobalt
  // Sidebar - Blue tinted
  sidebar: 'oklch(0.982 0.01 240)',
  sidebarForeground: 'oklch(0.145 0.035 240)',
  sidebarPrimary: 'oklch(0.50 0.18 240)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 240)',
  sidebarAccent: 'oklch(0.965 0.015 240)',
  sidebarAccentForeground: 'oklch(0.205 0.04 240)',
  sidebarBorder: 'oklch(0.922 0.02 240)',
  sidebarRing: 'oklch(0.50 0.18 240)',
};

const darkTokens: ThemeTokens = {
  radius: '0.625rem',
  background: 'oklch(0.145 0.025 240)',
  foreground: 'oklch(0.985 0.01 240)',
  card: 'oklch(0.205 0.03 240)',
  cardForeground: 'oklch(0.985 0.01 240)',
  popover: 'oklch(0.205 0.03 240)',
  popoverForeground: 'oklch(0.985 0.01 240)',
  primary: 'oklch(0.60 0.18 240)',
  primaryForeground: 'oklch(0.145 0.025 240)',
  secondary: 'oklch(0.275 0.035 240)',
  secondaryForeground: 'oklch(0.985 0.01 240)',
  muted: 'oklch(0.275 0.035 240)',
  mutedForeground: 'oklch(0.70 0.04 240)',
  accent: 'oklch(0.275 0.035 240)',
  accentForeground: 'oklch(0.985 0.01 240)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.984 0.003 247.858)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.60 0.18 240)',
  // Chart colors - Blue spectrum (brighter for dark mode)
  chart1: 'oklch(0.65 0.20 240)',
  chart2: 'oklch(0.60 0.18 265)',
  chart3: 'oklch(0.80 0.14 220)',
  chart4: 'oklch(0.50 0.16 255)',
  chart5: 'oklch(0.70 0.17 230)',
  // Sidebar - Blue tinted dark
  sidebar: 'oklch(0.205 0.03 240)',
  sidebarForeground: 'oklch(0.985 0.01 240)',
  sidebarPrimary: 'oklch(0.60 0.18 240)',
  sidebarPrimaryForeground: 'oklch(0.985 0.01 240)',
  sidebarAccent: 'oklch(0.275 0.035 240)',
  sidebarAccentForeground: 'oklch(0.985 0.01 240)',
  sidebarBorder: 'oklch(1 0 0 / 10%)',
  sidebarRing: 'oklch(0.60 0.18 240)',
};

export const BLUE_STYLE_CSS = generateStyleCSS('Blue', lightTokens, darkTokens);
