---
name: AI Lab & Systems Architecture
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#181E2A'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#EDEDF0'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#c3c6d3'
  on-secondary: '#2c303a'
  secondary-container: '#454953'
  on-secondary-container: '#b5b8c4'
  tertiary: '#c7f4ff'
  on-tertiary: '#00363e'
  tertiary-container: '#41e3fe'
  on-tertiary-container: '#006270'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dfe2ef'
  secondary-fixed-dim: '#c3c6d3'
  on-secondary-fixed: '#181c25'
  on-secondary-fixed-variant: '#434751'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
  deep-void: '#07080A'
  on-surface-muted: '#949BA8'
  on-surface-subdued: '#626B7D'
  outline-strong: '#222A3A'
  outline-subtle: '#151A24'
  system-success: '#10B981'
  system-error: '#F87171'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-sm:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  stat-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter-sm: 16px
  gutter-lg: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap-mobile: 32px
  section-gap-desktop: 64px
---

## Brand & Style

This design system embodies an **Editorial + Technical AI Research Laboratory** atmosphere. It is designed for high-density information environments where engineering precision meets sophisticated, minimalist aesthetics. The visual language moves away from consumer "dark mode" trends, opting instead for a multi-tiered graphite architecture that feels like a high-end command center or an advanced developer environment.

The core style is a fusion of **Minimalism** and **Technical Brutalism**. It utilizes strong grid structures, hairline rules, and coordinate systems to frame content. The tone is intelligent, futuristic, and restrained, emphasizing clarity through hierarchy and metadata rather than decorative flourishes. 

Visual accents are used with surgical precision—primarily an electric cyan that functions as a "digital beacon" for status, telemetry, and active states.

## Colors

The palette is a "dark-first" system built on varying degrees of graphite and charcoal. 

- **Foundation**: Use `deep-void` (#07080A) as the base underlay. The `neutral` color (#0B0D11) serves as the primary surface color for layout sections.
- **Surface Hierarchy**: `secondary` (#12161F) is the default for card containers and content modules. `surface-bright` (#181E2A) is reserved for interactive states (hover), popovers, and elevated tabs.
- **Accents**: `primary` (Electric Cyan) is the flagship accent. Use it sparingly—only for status pulses, active indicators, and focus rings. `tertiary` (Vivid Teal) provides secondary interactive support for data visualizations.
- **Typography**: `on-surface` (Warm Off-White) is for primary headings. `on-surface-muted` is for general body text, and `on-surface-subdued` is for technical metadata and coordinate labels.
- **Lines**: Use `outline-strong` (#222A3A) for primary structural boundaries and `outline-subtle` (#151A24) for internal dividers.

## Typography

This system uses a dual-font approach to balance editorial authority with technical precision.

- **Inter**: Employed for all "human-facing" content. Headlines should utilize tight negative letter-spacing to enhance the editorial feel. Line heights for body text are intentionally generous (1.6x) to maintain legibility in dense technical dossiers.
- **JetBrains Mono**: Used strictly for "machine-facing" metadata, status indicators, and code. Labels in JetBrains Mono should always be uppercase with open tracking (+0.08em) to evoke the appearance of hardware-engraved text or console telemetry.
- **Mobile Scaling**: For mobile screens, scale `display-xl` down to `display-xl-mobile` (32px) to prevent layout breakages.

## Layout & Spacing

The layout is built on a **12-column rigid technical grid** with a maximum content width of 1200px. 

- **Rhythm**: Use a 4px base unit for all incremental spacing (4, 8, 12, 16, 24, 32, 48, 64).
- **Margins & Gutters**: Mobile layouts use a 16px gutter/margin; Desktop scales to 24px gutters and 48px margins.
- **Sections**: Separate major layout blocks with a 64px vertical gap on desktop and 32px on mobile. These sections should be partitioned by thin hairline rules (`outline-strong`) and often include coordinate markers or project ID tags at the top-left or right.
- **Density**: Cards and modules should maintain a tight internal padding (20px-24px) to emphasize technical density without feeling cluttered.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** rather than traditional soft shadows.

- **Base Level**: The viewport background is `#0B0D11`.
- **Raised Level**: Primary components and cards sit at `#12161F`.
- **Elevated/Interactive Level**: Hover states or active modals sit at `#181E2A`.
- **Borders**: All containers must have a 1px solid border using `outline-strong` (#222A3A).
- **Shadows**: Use highly restrained, low-opacity ambient shadows only when an element overlaps others significantly. For primary active states, use a subtle outer glow tinted with Electric Cyan (`#00E5FF`) at 20-40% opacity rather than a black shadow.

## Shapes

The design system utilizes a "Soft" roundedness level (0.25rem / 4px) to maintain a precise, engineered feel. 

- **Default Corners**: 4px radius for all standard cards and modules.
- **Large Elements**: Use `rounded-lg` (8px) for major section containers.
- **Status Indicators**: Status "beacons" (dots) should be fully circular.
- **Badges**: Monospace tags and technical chips use a 2px (minimal) radius to appear more like physical components.

## Components

### Buttons
- **Primary**: Solid Electric Cyan background with near-black text. High-contrast, sharp, with a subtle cyan glow on hover.
- **Secondary**: Graphite background (#181E2A) with a strong outline. Text is off-white. 
- **Ghost/Terminal**: No background. Border appears only on hover. Monospace text with arrow symbols (e.g., `[ACTION ->]`).

### Technical Identity Cards
- Use for "About" sections. Features a `#12161F` container with a technical header showing coordinates and a "SYSTEM_ID" in monospace. Includes structured fields for Core Disciplines and Runtime Environments using small pill tags.

### Experiments Modules
- Structured project cards. Each card must strictly follow a three-part data architecture: 
  1. `[01 // PROBLEM]`
  2. `[02 // SYSTEM ARCHITECTURE]`
  3. `[03 // VERIFIED RESULT]`
- Use `headline-sm` for project titles and `code-sm` for the technical breakdown.

### Journey Vertical Timeline
- A 1px vertical spine (`outline-strong`) with Electric Cyan nodes. Each milestone is tagged with a monospace timestamp chip.

### Navigation & Status
- Fixed top bar with `backdrop-blur`. Includes a pulsing green beacon on the right displaying "SYS_ONLINE // FASTAPI ACTIVE" to reinforce the "live lab" narrative.

### Inputs & Terminal Fields
- Dark, recessed fields (`#0E1117`) with cyan focus rings. Labels should always be `label-caps` positioned above the input with a secondary metadata line (e.g., character count) below it.