# Implementation Spec — Stitch V3 → Next.js

Derived from screen.png, code.html, DESIGN.md. This is the concise reference
for how the approved design translates into the Next.js build.

## Colors, Typography, Spacing
Source of truth: DESIGN.md tokens (not code.html's Tailwind config — the two
disagree in places, e.g. `background` and `surface-bright` values differ;
DESIGN.md wins per project priority order).

- Base: dark graphite hierarchy (`deep-void` → `surface` → `surface-container`
  → `surface-bright`), single fixed dark theme, no toggle.
- Accent: Electric Cyan (`primary` / `surface-tint`), used sparingly —
  status beacons, active states, focus rings, CTA buttons only.
- Type: Inter (headlines/body, tight tracking) + JetBrains Mono
  (uppercase metadata/labels, wide tracking). 9-step type scale as defined
  in DESIGN.md's `typography` block.
- Spacing: 4px base unit. Mobile gutters 16px, desktop 24px/48px margins.
  Section gaps: 32px mobile, 64px desktop.
- Radius: 4px default (cards/modules), 8px for large section containers,
  full/circular for status beacons.
- Borders over shadows: 1px `outline-strong` on all containers; shadows
  restrained to a subtle cyan glow (20–40% opacity) on active states only.

## Grid / Layout
12-column grid, max content width 1200px, centered.

## Navigation
Fixed top bar, backdrop-blur, border-bottom. Logo mark "GHAYOOR / 01"
top-left. 7 nav links (desktop only — collapses on mobile, see below).
Status beacon top-right (pulsing dot + "SYSTEM ACTIVE" label).

## Section Order & IDs
Hero (no numbered id) →
01 `#identity` → 02 `#systems` → 03 `#experiments` →
04 `#journey` → 05 `#thinking` → 06 `#evidence` → 07 `#connect`

Exactly 7 numbered sections after the hero — use these IDs and numbers
consistently in nav links, scroll-spy, data files, and section headings.

## Hero
Boot-sequence typewriter line → headline "BUILDING INTELLIGENT SOFTWARE."
(cyan on "INTELLIGENT") → 3 tag chips (SYSTEM/MODE/DOMAIN) → dual CTA
("Explore Experiments" primary, "View Resume" ghost) → Intelligence Field
visual as a right-side/background element (Canvas 2D reimplementation,
not the original WebGL shader — approved).
Location coordinate row: NOT approved for use as-is (was Lahore's
coordinates, not verified as intentional) — render as TODO_GHAYOOR or a
plain "Peshawar, Pakistan" text label pending your confirmation.

## Identity
Two-column: statement text (left) + "ID card" module (right) with
NAME / ROLE / LOCATION / STATUS fields. Only verified fields are
populated; anything unconfirmed is TODO_GHAYOOR — not invented.

## Systems
Pipeline-style diagram grouping tech into labeled categories (data-driven
from `data/techStack.ts`), connected by arrow glyphs. No skill percentage
bars — categories/relationships only, no fabricated proficiency numbers.

## Experiments
1 featured (full-width) + 3 standard cards, in a responsive grid
(1 col mobile → 2 col tablet/desktop, featured always full-width).
Each card: category tag, title, description, a "data-flow strip"
(3-stage visual specific to that project), tech tags, external-link icon.
No progress percentages, no fabricated metrics — `progress` field removed
from the data type per your correction. GitHub/demo links: `undefined`
until you provide real per-project URLs — never rendered as broken `#`.

## Journey
Vertical timeline, 1px spine, cyan node = current entry, gray nodes =
past entries. Data-driven from `data/timeline.ts`. No invented dates —
only chronology you've verified.

## Thinking
3 principle statements, large display type, left border accent on hover.
No generic motivational quotes — grounded engineering principles only.

## Evidence
Static panel (V1 — no live GitHub API integration) with a link to your
verified GitHub profile. "Live activity stream" language from Stitch is
a Phase-16-later possibility, not V1.

## Connect
Closing CTA band (cyan-inverted background), verified LinkedIn + GitHub
links. No email unless you explicitly provide one.

## Footer
Copyright line + minimal link list. Stitch's placeholder links
(TERMINAL / STABLE_DIFFUSION / NEURAL_LINK) are REMOVED in V1 — not
implemented, not shown as TODO — per your correction, since they have
no defined destination or purpose yet.

## Responsive Behavior
| Breakpoint | Nav | Hero | Systems | Experiments | Timeline |
|---|---|---|---|---|---|
| 390–430px | links hidden (icon/menu TBD in Phase 19) | single column, field as low-opacity backdrop | pipeline fully stacked | single column | same spine, tighter margin |
| 768px | full link list | field visible as side panel | 3-col pipeline rows | 2-col grid begins | unchanged |
| 1024px+ | standard | standard | standard | standard | standard |
| 1440px+ | content capped at 1200px, extra whitespace only | | | | |

Not a "shrink desktop" approach — each section has an intentionally
different mobile composition, matching what's already encoded in
code.html's breakpoint classes.