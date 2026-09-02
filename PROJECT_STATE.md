# PROJECT STATE — Ghayoor Khan Portfolio

Status: V1 COMPLETE — live in production

## LIVE URL
https://ghayoorkhan.vercel.app

## COMPLETED
- Full environment setup, Next.js 16 + TypeScript + Tailwind v4 + App Router
- Stitch design reference (screen.png, code.html, DESIGN.md) imported and
  documented via stitch-reference/IMPLEMENTATION_SPEC.md
- Project architecture: components/{layout,sections,experiments,
  intelligence-field,ui}, data/, hooks/, lib/, types/
- Full typed content system (all 6 data files), all content verified
  against real sources or explicitly confirmed
- Design tokens wired from DESIGN.md into Tailwind v4 @theme
- Navigation: desktop nav with scroll-spy active-link highlighting, full
  mobile menu (slide-in panel, backdrop, staggered links, keyboard support)
- Hero: boot-sequence typewriter, real profile photo (glow ring + corner
  brackets, responsive), Canvas 2D Intelligence Field (mouse-reactive)
- All 8 sections built and verified: Hero, Identity, Systems, Experiments,
  Journey, Thinking, Evidence, Connect
- Responsive pass: clean at 390/430/768/1024/1280/1440px
- Accessibility pass: aria-labelledby throughout, focus-visible rings,
  WCAG AA contrast verified, full keyboard support
- Performance pass: deferred animation start, code-split, forced-reflow
  fixed, reduced node count (Lighthouse Performance 73-96 depending on run;
  Accessibility 96, Best Practices 100, SEO 100 - all consistent)
- SEO: full Open Graph + Twitter Card metadata, generated preview image,
  verified via live social-debugger tool
- Deployed to Vercel (auto-deploy on push to main), custom domain
  ghayoorkhan.vercel.app
- Customization pass: mobile menu, scroll spy, Journey pulse, Connect
  button hover, footer color, Identity accent border, Hero photo

## KNOWN ISSUES / OPEN TODOS
- "VIEW RESUME" button links to #resume, which doesn't exist yet -
  Ghayoor will upload a resume PDF and wire the link himself later
- Systems section's pipeline layout is slightly visually dense (minor,
  not broken)
- Focus-ring animation (skipped by choice - kept as plain static outline)

## ARCHITECTURAL DECISIONS
- DESIGN.md is the design-token source of truth over code.html's config
- Intelligence Field: Canvas 2D (not WebGL/Three.js) - approved
- Icons: lucide-react (not Material Symbols) - approved
- Dark theme only for V1, no toggle
- Evidence section: static verified info, no live GitHub API - V1 scope
- Exactly 7 numbered sections after Hero (Identity through Connect)
- No fabricated metrics/percentages anywhere
- Footer placeholder links (TERMINAL/STABLE_DIFFUSION/NEURAL_LINK) removed
- Footer background intentionally diverges from Stitch (teal, not graphite)
  per Ghayoor's explicit request - documented deviation
- Hero photo (real, not cartoon/3D avatar) added per Ghayoor's explicit
  request after evaluating a 3D-avatar approach - documented deviation

## VERIFIED CONTENT
- Name: Ghayoor Khan | Role: AI Engineer / Software Engineer
- Education: BS Computer Science, Islamia College Peshawar
  (Chartered University)
- Location: Pakistan (hero coordinate display specifically stayed omitted;
  Identity card shows "PAKISTAN")
- GitHub: github.com/Ghayoor-105 | LinkedIn: linkedin.com/in/ghayoorkhan1015
  | Email: ghayoorkhan1015@gmail.com (public, shown in Connect/footer)
- 4 projects, all with verified GitHub links; 1 with a live demo URL
- Timeline, principles, and Systems tech categories all confirmed as-is
  or corrected by Ghayoor directly

## NEXT STEPS (future sessions, not blocking V1)
- Wire up the resume PDF link when ready
- Add new projects to data/projects.ts as they're built (architecture
  already supports this with no other code changes needed)
- Optional: live GitHub API integration for Evidence section (deferred
  from V1 by design)