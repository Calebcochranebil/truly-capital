# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 14 marketing website for Truly Investor Capital (real estate lending). Uses the App Router with TypeScript, Tailwind CSS, and Framer Motion animations.

### Key Patterns

**Component structure**: All page sections are in `src/components/` with a barrel export in `index.ts`. Components are client-side (`"use client"`) when using Framer Motion animations or React hooks.

**Styling approach**: Custom Tailwind theme in `tailwind.config.ts` defines the brand colors (`forest`, `gold`, `cream`, `slate`) and fonts (`font-display` for headings, `font-sans` for body). Reusable button and section styles are defined as `@layer components` in `globals.css` (e.g., `btn-primary`, `btn-secondary`, `section-tag`, `section-title`).

**Data management**: Static content data lives inline within components or in `src/data/` for shared data like team members. The `src/data/team.ts` exports both the data array and helper functions (`getTeamMemberById`, `getLeadership`, `getSalesTeam`).

**Route structure**:
- `/` - Homepage composing all main section components
- `/products/[product]` - Product detail pages (e.g., `/products/dscr`)
- `/team` - Team listing page
- `/team/[id]` - Individual team member profiles (dynamic route)
- `/about`, `/brokerpartners`, `/referralpartners` - Static pages

**Animation pattern**: Framer Motion is used consistently with `motion` components, `initial`/`animate`/`whileInView` props, and staggered delays for list items.

### Path Alias

Use `@/*` to import from `src/*` (configured in tsconfig.json).
