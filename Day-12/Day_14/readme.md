# Day 14 — Live Profile Card Generator

A single-page app where a form and a live card preview sit side by side. Every keystroke updates the card instantly — no page reload, no submit button.

---

## What it does

You fill in four fields on the left:

- **Full Name** — updates the card heading and avatar initials as you type
- **Role / Tagline** — reflects below the name in real time
- **Short Bio** — textarea capped at 200 characters, with a live counter beneath it that turns red as you approach the limit
- **Accent Colour** — a dropdown (Indigo, Emerald, Rose, Amber) that re-themes the entire card the moment you change it — heading colour, top stripe, avatar, badge, and button all switch together

---

## Files

```
index.html   — page structure and markup
styles.css   — design tokens and all styling
script.js    — all interactive behaviour
```

---

## How the token system works

The entire colour palette, type scale, and spacing is defined as CSS custom properties inside `:root` in `styles.css`. The card's own rules reference only `var()` — no hardcoded pixel values or colour names appear inside any `.card` selector.

When the accent dropdown changes, `script.js` calls `element.style.setProperty()` to update `--card-accent`, `--card-accent-dim`, and `--card-accent-glow` directly on the card element. Because the heading, stripe, avatar, badge, and button all point to `--card-accent`, they all recolour in one step.

```
Dropdown changes
      ↓
applyAccent() in script.js
      ↓
card.style.setProperty("--card-accent", newColour)
      ↓
.card-name, .card-stripe, .avatar, .card-badge, .card-cta → all update via CSS
```

---

## JavaScript approach

All behaviour lives in `script.js`. There are zero inline event handlers (`onclick`, `oninput`, etc.) in the HTML — every listener is added with `addEventListener`.

Three things the script does:

1. Listens to the `input` event on the name, role, and bio fields and writes the value to the card using `textContent` (not `innerHTML`, to avoid any XSS risk from user-typed content)
2. Updates the character counter on every bio keystroke and toggles the `.near-limit` class on the `<span>` when the count reaches 160 — CSS handles the colour change
3. Calls `setProperty` to swap the accent token whenever the dropdown fires a `change` event

---

## Design decisions

The layout uses a dark glassmorphism style — deep `hsl` background, frosted-glass panels with `backdrop-filter`, and ambient gradient blobs that also shift colour with the accent. Fonts are DM Serif Display (card heading) and DM Sans (everything else), loaded from Google Fonts.

The page is responsive — on screens narrower than 780px the two columns stack vertically. It also respects `prefers-reduced-motion` by disabling all transitions for users who have that setting enabled.

---

## Running it locally

No build step needed. Just clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/your-username/day14-profile-card
cd day14-profile-card
# open index.html in your browser
```

---

## Commits

```
feat: add semantic HTML structure for profile card studio
style: dark glassmorphism design with full CSS token system
feat: live card updates, char counter, and accent re-theming via JS
```