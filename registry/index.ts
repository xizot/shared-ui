import type { Registry } from './schema';

// UI Components Registry
export const ui: Registry = [];

// RHF Components Registry
export const rhf: Registry = [];

// Lib Utilities Registry
export const lib: Registry = [];

// Hooks Registry
export const hooks: Registry = [];

// Constants Registry
export const constants: Registry = [];

// Combined registry
export const registry: Registry = [...ui, ...rhf, ...lib, ...hooks, ...constants];
