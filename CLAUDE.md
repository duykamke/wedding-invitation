# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding invitation application built with Vue 3, TypeScript, and Vite. It uses Tailwind CSS v4 for styling and is configured as a modern single-page application with development tooling.

## Package Management

This project uses **bun** as the package manager (evidenced by `bun.lock` file). Install dependencies with:
```bash
bun install
```

## Development Commands

- **Start development server**: `bun dev` or `npm run dev`
- **Build for production**: `bun run build` or `npm run build`
- **Preview production build**: `npm run preview`
- **Type checking**: `npm run type-check`

The build process runs type checking and the build in parallel using `npm-run-all2`.

## Architecture

### Technology Stack
- **Vue 3** with Composition API (`<script setup>`)
- **TypeScript** for type safety
- **Vite** as the build tool and dev server
- **Tailwind CSS v4** for styling (using the new Vite plugin)
- **Vue DevTools** integration for development debugging

### Project Structure
```
src/
├── App.vue          # Root component (currently minimal starter template)
├── main.ts          # Application entry point
└── style.css        # Global styles (imports Tailwind)
```

### Key Configuration Files
- `vite.config.ts`: Vite configuration with Vue plugin, DevTools, and Tailwind CSS
- `tsconfig.json`: TypeScript configuration with Vue-specific settings
- `index.html`: HTML entry point with proper module loading

### Import Aliases
- `@/` is configured as an alias for the `src/` directory

## Development Notes

- Node version requirement: ^20.19.0 || >=22.12.0
- The project uses ES modules (`"type": "module"` in package.json)
- Vue DevTools are automatically integrated in development mode
- The project currently contains the minimal Vue 3 + Vite starter template

## Browser Setup

For optimal development experience:
- Use Chrome/Edge with Vue.js devtools extension and Custom Object Formatter enabled
- Or use Firefox with Vue.js devtools extension