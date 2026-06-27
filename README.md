# day14-profile-card

# Day 15 — Component Library Preview Page

A single-page component library built for a design agency, showcasing six reusable UI components with a sticky sidebar and live interactions.

## Components

- **Buttons** — Primary, secondary, danger, and ghost variants with hover, focus, and disabled states
- **Form Fields** — Text, email, password, select, checkbox, and radio inputs, all labelled and accessible
- **Card** — Image, category tag, title, excerpt, author avatar, and CTA button
- **Alerts** — Info, success, warning, and error variants with dismiss functionality
- **Navbar** — Sticky top navigation with working mobile hamburger toggle
- **FAQ Accordion** — Click to expand/collapse with CSS max-height transition

## How it works

- Alert dismiss: JavaScript adds a `.hidden` class, CSS handles the fade and collapse transition
- Hamburger menu: JavaScript toggles `aria-expanded` and an `.open` class, CSS shows/hides the menu
- FAQ accordion: JavaScript toggles `aria-expanded`, CSS transitions `max-height` from 0 to auto

## Files

| File | Purpose |
|------|---------|
| `index.html` | Markup for all six components |
| `components.css` | All styles including tokens, layout, and transitions |
| `components.js` | Hamburger toggle, alert dismiss, accordion logic |

## What I learned

- How to build a token-driven design system using CSS custom properties
- Keeping JavaScript minimal — only toggling classes while CSS handles animations
- Writing accessible markup with proper ARIA attributes and focus styles
