# PROJECT STATE — Ghayoor Khan Portfolio

Last updated: Phase 3 (Project Architecture)

## CURRENT PHASE
Phase 4 — Content System (complete)

## COMPLETED
- Phase 0: Environment setup verified (Node v22.17.1, npm 11.1.0, Git 2.50.1,
  VS Code 1.133.0)
- Phase 0: Local project folder created, GitHub repo (Ghayoor-105/portfolio,
  public) created and connected, initial commit pushed
- Phase 1: Next.js 16.3.2 scaffolded (TypeScript, Tailwind v4, App Router,
  Turbopack dev bundler, no src/ dir), committed and pushed
- Phase 2: Stitch reference files (screen.png, code.html, DESIGN.md) added
  under stitch-reference/, IMPLEMENTATION_SPEC.md written, committed and
  pushed
- Phase 3: Folder structure created — components/{layout,sections,
  experiments,intelligence-field,ui}, data/, hooks/, lib/, types/;
  PROJECT_STATE.md created
- Phase 4: Typed content data files created — types/content.ts,
  data/{projects,techStack,timeline,principles,socials,navigation}.ts.
  All content verified against real sources (GitHub READMEs, LinkedIn) or
  explicitly approved as-is by Ghayoor. `tsc --noEmit` passes clean.

## CURRENT TASK
Awaiting approval to proceed to Phase 4 (Content System — typed data files)

## KNOWN ISSUES
None currently.

## ARCHITECTURAL DECISIONS
- DESIGN.md is the design-token source of truth (code.html's Tailwind
  config partially disagrees with it and is NOT used directly)
- Intelligence Field: Canvas 2D, not WebGL/Three.js (approved correction)
- Icons: lucide-react, not Material Symbols CDN (approved correction)
- Theme: dark only for V1, no light/dark toggle (approved correction)
- Evidence section: static verified info only for V1, no live GitHub API
  integration yet (approved correction)
- Exactly 7 numbered sections after Hero: 01 Identity, 02 Systems,
  03 Experiments, 04 Journey, 05 Thinking, 06 Evidence, 07 Connect
- No `progress` / percentage / metric fields anywhere unless explicitly
  verified by Ghayoor (approved correction)
- Footer placeholder links (TERMINAL, STABLE_DIFFUSION, NEURAL_LINK)
  removed from V1, not implemented (approved correction)
- Deployment target: Vercel

## VERIFIED CONTENT
- Name: Ghayoor Khan
- Role: AI Engineer / Software Engineer
- Education: BS Computer Science, Islamia College Peshawar (Chartered
  University)
- Based in: Peshawar, Khyber Pakhtunkhwa, Pakistan
- GitHub: github.com/Ghayoor-105
- LinkedIn: linkedin.com/in/ghayoorkhan1015
- Projects (from LinkedIn/GitHub, descriptions from Stitch copy pending
  your final confirmation): AI Resume Bullet Point Improver, QuizVibe,
  Real-Time Fire Detection, Employee Management System

## TODO_GHAYOOR
- Confirm hero location display (coordinates were unverified/incorrect —
  Lahore's, not Peshawar's) — currently omitted, no location shown
- Live demo URLs for QuizVibe, Real-Time Fire Detection, Task Manager Web
  App (only AI Resume Bullet Point Improver has one so far)

## NEXT PHASE
Phase 5 — Design System (Tailwind config wired to DESIGN.md tokens,
font loading via next/font)