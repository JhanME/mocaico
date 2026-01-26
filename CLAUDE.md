# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (flat config with next/core-web-vitals + next/typescript)

No test framework is configured.

## Architecture

Single-page portfolio site for a computer engineer, built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

### Routing & Structure

There is only one route (`/`). The page is a scroll-based SPA with sections: Hero, About, Projects, Services, Footer. Navigation uses anchor links (`#inicio`, `#acerca`, `#proyectos`, `#servicios`).

- `app/layout.tsx` — Root layout with full SEO metadata, JSON-LD, dark mode init script, Geist fonts
- `app/page.tsx` — Entire UI as a single `"use client"` component; contains all section markup, state, and a hardcoded `DATA` object with all content
- `app/globals.css` — Tailwind v4 imports, dark mode variant config, custom keyframe animations
- `app/robots.ts`, `app/sitemap.ts` — SEO metadata routes

### Key Patterns

- **All content data** lives in a `DATA` constant inside `page.tsx` (projects, services, skills, profile info). There is no CMS or external data source.
- **Dark mode** uses localStorage + system preference detection, toggled via `.dark` class on `<html>`. A clip-path circle animation handles the transition (CSS in `globals.css`, state in `page.tsx`).
- **Scroll spy** in `page.tsx` tracks the active section for navbar highlighting using scroll position with a 150px offset.
- **Typewriter effect** cycles through role titles using `useState`/`useEffect` timers.
- **No API routes, no middleware, no external state management.** All state is local React hooks.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Dark mode variant defined as `@variant dark (&:where(.dark, .dark *))` in `globals.css`. Fonts are Geist Sans and Geist Mono loaded via `next/font/google`.

### Dependencies

- `lucide-react` — All icons (Github, Linkedin, Mail, Cpu, Terminal, Layers, Moon, Sun, etc.)
- `next/image` — Optimized images for projects and profile photos

### SEO

Canonical URL: `https://www.mocaico.dev`. Language is Spanish (`es`). Full Open Graph, Twitter cards, and Person schema JSON-LD are configured in `layout.tsx` and `page.tsx`.

### Path Alias

`@/*` maps to the project root (configured in `tsconfig.json`).
