# Release v1.0.0

## 🎉 @xizot/shared-ui v1.0.0

A comprehensive React component library with CLI tool for easy installation. Built with shadcn/ui, TypeScript, and Tailwind CSS v4.

---

## ✨ Highlights

- 🧩 **70+ UI Components** - Complete shadcn/ui-based component collection
- 📝 **17 React Hook Form Components** - Pre-built form integrations
- 🤖 **AI Agent Skills** - Performance optimization guidelines for AI coding assistants
- ⚡ **CLI Tool** - Easy installation with auto-configuration

---

## 🚀 Quick Start

```bash
# Initialize in your project
npx github:xizot/shared-ui@v1.0.0 init

# Add components
npx github:xizot/shared-ui@v1.0.0 add button input card

# Install AI agent skills
npx github:xizot/shared-ui@v1.0.0 skills
```

---

## 📦 What's Included

### CLI Commands

| Command            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `init`             | Initialize shared-ui with auto Tailwind CSS configuration |
| `add <components>` | Add UI components to your project                         |
| `add --all`        | Add all available components                              |
| `skills`           | Install AI agent skills (interactive)                     |
| `skills --all`     | Install all skills for all IDEs                           |

### Components

- **UI Components (70+)**: Button, Input, Card, Dialog, DataTable, Calendar, and more
- **RHF Components (17)**: RHFInput, RHFSelect, RHFDatePicker, and more
- **Utilities**: cn(), formatCurrency(), validateEmail(), toast, and more
- **Hooks (18)**: useDebounce, useLocalStorage, useMediaQuery, and more

### AI Agent Skills

| Skill                         | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| `vercel-react-best-practices` | 45 React & Next.js performance optimization rules |

### Supported IDEs for Skills

- Cursor (`.cursor/skills/`)
- GitHub Copilot (`.github/skills/`)
- Claude (`.claude/skills/`)
- Codex (`.codex/skills/`)
- Gemini (`.gemini/skills/`)
- Windsurf (`.windsurf/skills/`)
- Cline (`.cline/skills/`)

---

## 📋 Requirements

- React 18+ or 19+
- TypeScript (recommended)
- Tailwind CSS v4
- Node.js 18+

---

## 🔗 Links

- 📖 [Documentation](https://github.com/xizot/shared-ui#readme)
- 🐛 [Report Issues](https://github.com/xizot/shared-ui/issues)
- 💬 [Discussions](https://github.com/xizot/shared-ui/discussions)

---

## 📝 Changelog

### Added

- ✅ CLI tool with `init`, `add`, and `skills` commands
- ✅ 70+ UI components based on shadcn/ui
- ✅ 17 React Hook Form components
- ✅ 18 custom hooks
- ✅ Utility functions (format, validate, string, toast)
- ✅ AI agent skills installation for multiple IDEs
- ✅ Auto Tailwind CSS v4 configuration (Vite/Next.js/PostCSS)
- ✅ Interactive component and IDE selection

### Technical

- Built with TypeScript
- Uses Radix UI primitives for accessibility
- Tailwind CSS v4 with OKLCH color system
- ESM module support

---

**Full Changelog**: https://github.com/xizot/shared-ui/commits/v1.0.0
