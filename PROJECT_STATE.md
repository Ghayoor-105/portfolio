# PROJECT STATE — Ghayoor Khan Portfolio

Last updated: Phase 3 (Project Architecture)

## CURRENT PHASE
Phase 3 — Project Architecture (folder structure created; this file created)

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
  experiments,intelligence-field,ui}, data/, hooks/, lib/, types/

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
  Lahore's, not Peshawar's)
- Per-project GitHub repo URLs + live demo URLs (4 projects)
- Confirm exact wording/verification of each project's description before
  it's treated as final copy (currently sourced from Stitch-generated text,
  which per your correction is not automatically trusted)
- Confirm timeline/Journey entries and dates
- Confirm "How I Think" principle statements as accurate to how you
  actually work, or provide your own
- Contact email (if you want one shown) — none used unless provided

## NEXT PHASE
Phase 4 — Content System (typed data files: data/projects.ts,
data/techStack.ts, data/timeline.ts, data/principles.ts, data/socials.ts,
data/navigation.ts, plus types/content.ts)