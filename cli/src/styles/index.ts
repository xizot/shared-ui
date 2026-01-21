/**
 * Style exports and type definitions
 */

import { BLUE_STYLE_CSS } from './blue.js';
import { DEFAULT_STYLE_CSS } from './default.js';
import { EMERALD_STYLE_CSS } from './emerald.js';
import { NEW_YORK_STYLE_CSS } from './new-york.js';
import { ORANGE_STYLE_CSS } from './orange.js';
import { ROSE_STYLE_CSS } from './rose.js';
import { VIOLET_STYLE_CSS } from './violet.js';

/**
 * Available style names
 */
export type StyleName = 'default' | 'new-york' | 'rose' | 'violet' | 'emerald' | 'orange' | 'blue';

/**
 * Style choice for CLI prompts
 */
export interface StyleChoice {
  title: string;
  value: StyleName;
  description?: string;
}

/**
 * Available style choices for CLI prompts
 */
export const STYLE_CHOICES: StyleChoice[] = [
  { title: 'Default', value: 'default', description: 'Teal/Cyan - Clean and modern' },
  { title: 'New York', value: 'new-york', description: 'Neutral gray - Minimal and elegant' },
  { title: 'Rose', value: 'rose', description: 'Rose/Pink - Warm and elegant' },
  { title: 'Violet', value: 'violet', description: 'Purple/Violet - Creative and modern' },
  { title: 'Emerald', value: 'emerald', description: 'Green/Emerald - Fresh and natural' },
  { title: 'Orange', value: 'orange', description: 'Orange/Amber - Energetic and friendly' },
  { title: 'Blue', value: 'blue', description: 'Blue/Indigo - Professional and trustworthy' },
];

/**
 * Map of style names to CSS content
 */
export const STYLE_CSS_MAP: Record<StyleName, string> = {
  default: DEFAULT_STYLE_CSS,
  'new-york': NEW_YORK_STYLE_CSS,
  rose: ROSE_STYLE_CSS,
  violet: VIOLET_STYLE_CSS,
  emerald: EMERALD_STYLE_CSS,
  orange: ORANGE_STYLE_CSS,
  blue: BLUE_STYLE_CSS,
};

/**
 * Get CSS content for a style
 */
export function getStyleCSS(styleName: StyleName): string {
  return STYLE_CSS_MAP[styleName] ?? STYLE_CSS_MAP.default;
}

// Re-export individual styles for direct import if needed
export {
  BLUE_STYLE_CSS,
  DEFAULT_STYLE_CSS,
  EMERALD_STYLE_CSS,
  NEW_YORK_STYLE_CSS,
  ORANGE_STYLE_CSS,
  ROSE_STYLE_CSS,
  VIOLET_STYLE_CSS,
};
