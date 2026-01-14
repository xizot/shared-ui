# Shared UI Library - AI Assistant Rules

This directory contains comprehensive rules and guidelines for using the **shared-ui** component library with AI coding assistants.

## What is This?

This is a set of rules and guidelines that help AI assistants (like Cursor, Claude, GitHub Copilot, etc.) understand how to properly use the shared-ui library when generating code.

## Files

- **rules.md** - Comprehensive usage rules, patterns, and anti-patterns for the shared-ui library

## How It Works

When you ask an AI assistant to build UI components or work with forms, it will automatically reference these rules to:

1. Use the correct entry points (`shared-ui`, `shared-ui/client`, `shared-ui/rhf`)
2. Import styles correctly
3. Follow best practices for component usage
4. Avoid common mistakes and anti-patterns
5. Generate type-safe, accessible code

## Quick Reference

### Entry Points
- `shared-ui` - Core components (server-safe)
- `shared-ui/client` - Client components (requires 'use client')
- `shared-ui/rhf` - React Hook Form components

### Always Remember
1. Import styles first: `import 'shared-ui/styles.css'`
2. Use correct entry points based on component type
3. Add 'use client' for client components
4. Use tree-shakeable imports

## Example Prompts

```
Build a login form with email and password fields
Create a data table with sorting and pagination
Design a dashboard with cards and charts
Make a responsive navigation sidebar
```

The AI will automatically use the correct components, entry points, and patterns from these rules.

## Library Features

- 🎨 **75+ UI Components** - All shadcn/ui components pre-installed
- 🎯 **TypeScript** - Full type safety
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **Customizable** - All components are in your codebase
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - Built on Radix UI primitives
- 🔗 **RHF Integration** - Pre-built React Hook Form wrappers

## Installation

```bash
npm install git+https://github.com/xizot/share-ui.git
npm install react react-dom

# Optional - only if using specific features
npm install react-hook-form  # For RHF components
npm install date-fns react-day-picker  # For date pickers
npm install @tanstack/react-table  # For DataTable
npm install react-quill-new  # For RHFEditor
```

## Documentation

For detailed documentation, see the main [README.md](../../README.md) in the project root.
