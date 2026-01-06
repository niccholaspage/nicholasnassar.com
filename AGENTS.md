# Agent Guidelines for nicholasmdecker.com

This document provides guidelines for AI coding agents working on this Astro-based personal website.

## Project Overview

Personal portfolio website built with:

- **Astro** - Static site generator with island architecture
- **Solid.js** - For interactive components (mobile menu)
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Package Manager

This project uses **pnpm**. Always use `pnpm` commands, never `npm` or `yarn`.

## Build, Lint, and Test Commands

### Development

```bash
pnpm install          # Install dependencies
pnpm dev             # Start dev server at localhost:4321
pnpm start           # Alias for dev
```

### Build & Preview

```bash
pnpm build           # Type check + build (runs: astro check && tsc --noEmit && astro build)
pnpm preview         # Preview production build locally
```

### Type Checking

```bash
pnpm astro check     # Astro-specific type checking
tsc --noEmit         # TypeScript type checking (no output)
```

### Testing

Currently no test suite. If adding tests, document commands here.

### Linting & Formatting

No ESLint configured. Prettier is used for code formatting:

```bash
npx prettier --write "src/**/*.{ts,tsx,astro}"  # Format all source files
npx prettier --check "src/**/*.{ts,tsx,astro}"  # Check formatting
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── home/           # Home page specific components
│   ├── nav/            # Navigation components
│   │   └── mobile/     # Mobile menu (Solid.js components)
│   └── social/         # Social media links
├── data/               # Static data files (positions, projects, skills)
├── images/             # Image assets
├── layouts/            # Page layouts
├── pages/              # Astro pages (routes)
└── tm-langs/           # TextMate language grammars for code highlighting

public/                 # Static assets served as-is
```

## Code Style Guidelines

### Formatting

- **Print Width**: 120 characters
- **Prettier**: Used for all formatting (config in `.prettierrc.js`)
- Format `.astro` files with `prettier-plugin-astro`

### TypeScript

- **Config**: Extends `astro/tsconfigs/strict`
- **Always** use TypeScript for new files (`.ts`, `.tsx`)
- **Always** define types for function parameters and return values
- Use `interface` for object shapes (preferred over `type` for simple objects)
- Use `type` for unions, intersections, and complex types

### Imports

- Use **named imports** for Solid.js: `import { createSignal, Component } from "solid-js"`
- Import order (by convention observed):
  1. External dependencies (React, Solid, Astro)
  2. Local components
  3. Local utilities/data
  4. Assets (images, SVGs)
  5. Types (use `import type` for type-only imports)

Example:

```typescript
import { type Component, onMount } from "solid-js";
import { MobileMenu } from "./mobile/MobileMenu";
import { positions } from "../data/positions";
import Logo from "../../images/logo.svg";
import type { Position } from "../types";
```

### Naming Conventions

- **Files**:
  - Components: PascalCase (e.g., `MobileMenu.tsx`, `Navbar.astro`)
  - Data/utilities: camelCase (e.g., `positions.ts`, `skills.ts`)
- **Variables/Functions**: camelCase (e.g., `isMobileMenuOpen`, `handleItemClick`)
- **Types/Interfaces**: PascalCase (e.g., `Position`, `MobileMenuProps`)
- **Constants**: camelCase for most, SCREAMING_SNAKE_CASE for true constants

### Component Patterns

#### Astro Components (.astro)

```astro
---
// Script section - TypeScript
import Component from "./Component";

interface Props {
  title: string;
  optional?: boolean;
}

const { title, optional = false } = Astro.props;
---

<!-- Template section -->
<div class="container">
  <h1>{title}</h1>
</div>
```

#### Solid.js Components (.tsx)

```typescript
import { type Component } from "solid-js";

interface MyComponentProps {
  children: any;
  title: string;
}

export const MyComponent: Component<MyComponentProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
```

### Styling

- Use **TailwindCSS utility classes** exclusively
- No custom CSS files (keep styles in Tailwind config if needed)
- Responsive design: mobile-first, use `sm:`, `md:`, `lg:` breakpoints
- Dark mode: use `dark:` prefix (e.g., `dark:bg-zinc-900`)
- Common patterns:
  - Layout: `flex`, `grid`, `container mx-auto px-4`
  - Spacing: `pt-16`, `px-2`, `space-x-4`, `space-y-1`
  - Colors: Primary violet-800/900, background zinc-200/900

### State Management

- Use **Solid.js signals** for reactive state: `createSignal()`
- Export signals from dedicated state files (see `MobileMenuState.ts`)
- Keep state close to where it's used, avoid global state unless necessary

### Event Handling

- Properly clean up event listeners in Solid.js:

  ```typescript
  onMount(() => {
    element?.addEventListener("click", handler);
  });

  onCleanup(() => {
    element?.removeEventListener("click", handler);
  });
  ```

### Error Handling

- No specific error handling patterns observed
- Add appropriate try-catch blocks for async operations
- Validate user input and provide meaningful error messages

### Comments

- Use comments sparingly, prefer self-documenting code
- Use inline comments for non-obvious logic
- Use TODO comments for future improvements: `<!-- TODO: Optimize this -->`

### Data Structures

- Define interfaces for all data structures (see `data/positions.ts`, `data/projects.ts`)
- Export data as named exports: `export { positions }`
- Use arrays for collections, objects for single entities

## Astro-Specific Guidelines

### Client Directives

- Most components are **static** (no hydration)
- Use `client:load` for interactive components (mobile menu)
- Minimize JS sent to client - Astro's strength is static content

### Islands Architecture

- Keep interactive "islands" small and focused
- Only hydrate what needs interactivity
- Example: `<MobileMenuButton client:load />`

## Performance Considerations

- Optimize images (use WebP, proper sizing)
- Minimize client-side JavaScript
- Leverage Astro's static generation
- Perfect Lighthouse scores are the goal

## Git Workflow

- Branch naming: descriptive kebab-case (e.g., `add-blog-feature`)
- Commit messages: imperative mood, clear and concise
- Keep commits atomic and focused on single changes

## Best Practices

1. **Type Safety**: Always provide types, never use `any` unless absolutely necessary
2. **Accessibility**: Use semantic HTML, proper ARIA attributes, keyboard navigation
3. **Responsive Design**: Test on mobile, tablet, desktop breakpoints
4. **Performance**: Keep bundle size small, use static generation when possible
5. **Code Reuse**: Extract common patterns into reusable components
6. **Documentation**: Update this file when introducing new patterns or conventions

## Common Tasks

### Adding a New Page

1. Create `.astro` file in `src/pages/`
2. Use `BaseLayout.astro` for consistent structure
3. Add navigation link in `NavbarLinks.astro` if needed

### Adding Interactive Component

1. Create `.tsx` file in appropriate `components/` subdirectory
2. Use Solid.js Component type and proper props interface
3. Add `client:load` directive when importing in `.astro` file
4. Keep interactivity minimal

### Updating Content

- Edit data files in `src/data/` (positions, projects, skills)
- Follow existing interface structures
- Content will rebuild automatically

## Deployment

Site builds to `./dist/` and is deployed statically. Ensure `pnpm build` succeeds before pushing.
