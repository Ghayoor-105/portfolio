markdown
<div align="center">

![Ghayoor Khan — AI Laboratory](https://ghayoorkhan.vercel.app/opengraph-image)

# Ghayoor Khan // AI Laboratory

**Personal portfolio of Ghayoor Khan — AI Engineer & Software Engineer**

[![Live Site](https://img.shields.io/badge/live-ghayoorkhan.vercel.app-00e5ff?style=flat-square)](https://ghayoorkhan.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square)](https://tailwindcss.com)

</div>

---

## About

A single-page, animated portfolio built around an "AI Laboratory" concept — editorial + technical design language, real verified project data, and a signature canvas-based "Intelligence Field" visual. Designed in Google Stitch, implemented from scratch in Next.js.

**Live:** [ghayoorkhan.vercel.app](https://ghayoorkhan.vercel.app)

## Sections

01 Identity · 02 Systems · 03 Experiments · 04 Journey · 05 Thinking · 06 Evidence · 07 Connect

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Deployment:** Vercel (auto-deploy on push to `main`)

## Features

- Canvas 2D "Intelligence Field" — mouse-reactive animated node network, pauses off-screen and on reduced-motion
- Fully custom mobile navigation — slide-in panel, backdrop blur, staggered links, full keyboard support
- Scroll-spy active-link highlighting + smooth scroll
- Fully typed, data-driven content (`data/`) — no hardcoded copy in components
- WCAG AA-verified contrast, semantic landmarks, keyboard-accessible throughout
- Auto-generated Open Graph preview image (`app/opengraph-image.tsx`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npx tsc --noEmit  # type check
```

## Project Structure

app/ Next.js routes, layout, global styles
components/
layout/ Navbar, Footer
sections/ One component per page section
experiments/ Project card + data-flow strip
intelligence-field/ Canvas 2D animated visual
ui/ Shared UI primitives
data/ Typed content (projects, tech stack, timeline, etc.)
types/ Shared TypeScript interfaces
stitch-reference/ Original design source (screen.png, DESIGN.md, code.html)


## Design Reference

The original visual design and design-system spec live in [`stitch-reference/`](./stitch-reference), including the implementation notes in [`IMPLEMENTATION_SPEC.md`](./stitch-reference/IMPLEMENTATION_SPEC.md).

## Connect

[LinkedIn](https://linkedin.com/in/ghayoorkhan1015) · [GitHub](https://github.com/Ghayoor-105) · [Email](mailto:ghayoorkhan1015@gmail.com)

---

<div align="center">
<sub>© 2026 Ghayoor Khan</sub>
</div>