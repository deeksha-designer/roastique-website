# Roastique Website Design System

This file is the implementation contract for future Codex work. Do not create section-specific font scales, gutters, button shapes or colour values when an existing token covers the need.

## Creative direction

Roastique is presented as a contemporary French-inspired coffee house: warm, assured, tactile and image-led. Photography carries atmosphere; typography and interface stay restrained. The homepage journey is strictly ordered from emotion to evidence to action.

Core idea: the Roastique visit becomes an editorial sequence of framed moments—coffee craft, bakery theatre, spatial atmosphere, useful digital service, then practical visit information.

## Source of truth

All global decisions live in `:root` in `styles.css`. Components must consume variables instead of introducing raw values.

### Colour tokens

| Token | Value | Role |
|---|---:|---|
| `--color-ink` | `#473435` | Brand brown; main dark ground and text |
| `--color-paper` | `#F0E5CA` | Brand cream; main light ground |
| `--color-paper-deep` | `#AFC2D3` | Brand blue; secondary field |
| `--color-muted` | brown at 72% | Secondary text on light |
| `--color-soft` | `#AFC2D3` | Secondary text on dark |
| `--color-accent` | `#AFC2D3` | Primary action and one active accent per view |
| `--color-accent-dark` | `#473435` | Hover reversal |

These values come directly from the supplied Roastique palette: RGB 71/52/53, 175/194/211 and 240/229/202. No off-brand accent may be introduced. Do not add gradients as decoration. Image scrims are allowed only for text legibility.

### Typography

- Display: Instrument Serif (`--font-display`)
- Body/UI: DM Sans (`--font-body`)
- Display: `--text-display`
- Section heading: `--text-h2`
- Card/subheading: `--text-h3`
- Lead: `--text-lead`
- Body: `--text-body`
- Labels/meta: `--text-small`, never below 14px

Use `.section-title` for all main section headings, `.body-copy` for standard paragraphs, and `.lead-copy` only for one elevated supporting paragraph. Headings stay within two lines where possible. Never invent a local `font-size` for normal section copy.

### Container and spacing

- Every contained section uses exactly one `.container`.
- `.container`: width `100%`, max-width `94rem`, auto margins, common horizontal padding `--gutter`.
- Standard vertical section spacing: `--section-space`.
- Full-bleed media sections may sit outside `.container`; their text/card must align with `--gutter`.
- Grid gaps can scale with `clamp()`, but page gutters do not change per section.
- One global small radius: `--radius` (`4px`). Avoid pill shapes except choice chips.

### Buttons and links

- Shared base `.button`; variants: `.button-primary`, `.button-dark`, `.button-light`, `.button-quiet`.
- Primary clay accent appears once per decision area.
- Text-level navigation uses `.text-link`.
- All controls need visible focus. Icon-only controls require an accessible label.

### Image direction

- Prioritise real Roastique interior, coffee, bakery, team and guest photography when supplied.
- Use consistent natural light, tactile close crops and quiet backgrounds.
- Avoid stock-looking lifestyle poses, floating bean graphics and decorative café clichés.
- Hero is a muted, looping coffee-preparation film with a still poster and reduced-motion fallback.
- Every image must have explicit dimensions, meaningful alt text, and lazy loading except the hero.

### Motion

- Motion supports atmosphere, never access.
- Interaction feedback: transform/opacity only, maximum 200ms.
- Looping hero media pauses visually for reduced-motion users by switching to its poster.
- Never animate layout properties or large blur surfaces.

### Responsive rules

- Desktop: editorial split grids, asymmetric image/text relationships.
- Tablet: all major grids collapse to one column at 900px.
- Mobile: 1.15rem common gutter; actions become full-width when needed; no horizontal page scroll.
- Full-bleed photography remains full-bleed; contained copy always returns to the shared gutter.
- Touch controls must have comfortable hit areas; mobile menu uses native `details/summary` behaviour.

### Content integrity

Never invent current hours, address, menu prices, coffee origin, ratings, testimonials, seating availability, Wi-Fi, accessibility, pet policy, valet status, events or app-store links. Keep a clearly labelled confirmation placeholder until approved content is supplied.

## Homepage sequence

1. Premium hero
2. Live visit information
3. The Roastique experience
4. Featured menu edit
5. Coffee provenance and craft
6. Open bakery story
7. A space for different moments
8. Roastique app
9. AI Sommelier teaser
10. Community and events
11. Guest proof
12. Trusted by
13. Visit Roastique
14. Editorial footer

Do not move the app above the café, menu, coffee and bakery story. Technology supports the physical experience; it does not define the brand.
