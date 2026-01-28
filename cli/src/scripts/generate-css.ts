#!/usr/bin/env node
/**
 * Generate CSS files from style TypeScript files
 * Usage: tsx src/scripts/generate-css.ts [style-name]
 * Example: tsx src/scripts/generate-css.ts orange
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import style CSS exports
import { 
  ORANGE_STYLE_CSS,
  BLUE_STYLE_CSS,
  DEFAULT_STYLE_CSS,
  EMERALD_STYLE_CSS,
  NEW_YORK_STYLE_CSS,
  ROSE_STYLE_CSS,
  VIOLET_STYLE_CSS,
} from '../styles/index.js';

const STYLE_MAP: Record<string, string> = {
  orange: ORANGE_STYLE_CSS,
  blue: BLUE_STYLE_CSS,
  default: DEFAULT_STYLE_CSS,
  emerald: EMERALD_STYLE_CSS,
  'new-york': NEW_YORK_STYLE_CSS,
  rose: ROSE_STYLE_CSS,
  violet: VIOLET_STYLE_CSS,
};

async function generateCSS(styleName: string, outputDir?: string) {
  const css = STYLE_MAP[styleName];
  
  if (!css) {
    console.error(`❌ Style "${styleName}" not found. Available styles: ${Object.keys(STYLE_MAP).join(', ')}`);
    process.exit(1);
  }

  const outputPath = outputDir 
    ? path.join(outputDir, `${styleName}.css`)
    : path.join(__dirname, '../../..', `${styleName}.css`);

  await fs.ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, css, 'utf-8');
  
  console.log(`✅ Generated ${outputPath}`);
}

// Main execution
const styleName = process.argv[2] || 'orange';
const outputDir = process.argv[3];

generateCSS(styleName, outputDir).catch((error) => {
  console.error('❌ Error generating CSS:', error);
  process.exit(1);
});
