# Project Brief: testproject

## Source
- **Template URL:** https://original-approach-564408.framer.app/
- **Analyzed:** 2026-01-09
- **Type:** Business/SaaS landing page

## Overview
Dutch speech-to-text service website (Wonderflux). Dark-themed, professional design with teal accent color. Single-page layout with multiple sections.

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #1f514c | Buttons, accents, contact section bg |
| `--color-accent` | #0000ee | Links |
| `--color-bg` | #ffffff | Light backgrounds |
| `--color-bg-2` | #fafafa | Services section |
| `--color-bg-3` | #000000 | Main dark background |
| `--color-text` | #000000 | Dark text |
| `--color-dark` | #636363 | Muted text |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Hedvig Letters Serif | 56px | 400 |
| H2 | Hedvig Letters Serif | 45px | 400 |
| H3 | Hedvig Letters Serif | 36px | 400 |
| H4 | Inter | 28px | 500 |
| Body | Hedvig Letters Serif | 22px | 400 |

### Spacing
8px, 16px, 24px, 32px, 40px

### Border Radius
- Standard: 20px
- Pill/buttons: 1000px

## Sections

1. **Header** - Hero with main headline, nav, CTA button
2. **Logo carousel** - Client logos
3. **Problem** - Why standard tools don't work
4. **Services** - Feature cards with slider
5. **CTA** - Call to action with features
6. **Testimonial** - Quote with avatar
7. **How it works** - Process steps (Stats)
8. **About** - Company story
9. **Results** - Metrics/outcomes
10. **FAQ** - Accordion questions
11. **Contact** - Form with teal background
12. **Footer** - Links, tagline

## Files

```
testproject/
├── brief.md              # This file
├── analysis.json         # Raw analysis data
├── analysis.md           # Readable analysis report
├── src/
│   ├── index.html        # Main HTML
│   └── styles/
│       ├── tokens.css    # Design tokens
│       ├── base.css      # Reset + global
│       ├── typography.css# Font styles
│       ├── layout.css    # Section layouts
│       └── components.css# Buttons, cards, inputs
└── content/
    └── screenshots/      # Section screenshots
```

## Next Steps

1. [ ] Review generated HTML structure
2. [ ] Replace placeholder images with actual assets
3. [ ] Update text content (marked with `<!-- CONTENT: -->` comments)
4. [ ] Add Google Fonts links (Hedvig Letters Serif, Inter)
5. [ ] Adjust responsive breakpoints (809px, 1199px)
6. [ ] Add animations/interactions
7. [ ] Test cross-browser
