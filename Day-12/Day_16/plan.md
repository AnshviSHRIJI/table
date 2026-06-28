# GreenRoot NGO Website — Planning Document

## 1. Page Map

### index.html (Home)
- Header with logo/name and nav (Home, Programs, Get Involved, Contact)
- Hero section — short intro line + a photo of the team or a project in action
- "Who We Are" — 2-3 sentence mission statement
- "What We Do" — quick preview of the 3 main programs, linking out to programs.html
- Impact snapshot — a few numbers (trees planted, volunteers, events run) to build trust fast
- Call-to-action banner pointing to get-involved.html
- Footer with contact info, social links, copyright

### programs.html
- Page intro — one paragraph on the overall approach to programs
- Program 1 block — description, who it helps, how often it runs
- Program 2 block — same structure
- Program 3 block — same structure
- Photo gallery or image strip from past program activity
- CTA linking to get-involved.html ("Want to help with this?")
- Footer (shared)

### get-involved.html
- Intro line on why volunteers/donors matter to a small NGO like this
- Volunteer section — current opportunities, time commitment, how to sign up
- Donate section — what donations fund, with a simple way to give (link/info, no live payment processing needed for v1)
- Events/calendar section — upcoming community events
- Sign-up form (name, email, how they want to help)
- Footer (shared)

### contact.html
- Short intro — "we'd love to hear from you" type line
- Contact form (name, email, message)
- Direct contact details — email, phone, physical address if relevant
- Embedded map or simple address block
- Social media links
- Footer (shared)

---

## 2. Design Tokens

| Token | Hex | Use |
|---|---|---|
| `--color-primary` | #4A7856 | Main green — headers, nav background, primary buttons |
| `--color-secondary` | #C97B3D | Warm terracotta — accents, CTA buttons, hover states |
| `--color-bg` | #FAF6EE | Off-white/cream page background, not stark white |
| `--color-text` | #2E2A24 | Body text — warm dark brown instead of pure black |
| `--color-light-accent` | #E8DCC4 | Section dividers, card backgrounds, subtle highlight blocks |
| `--color-success` | #7C9A6E | Form confirmations, small success states |

**Rationale:** GreenRoot works on sustainability and community, so the palette leans on earthy greens and warm terracotta rather than the blues/grays a typical corporate or tech site would use — it should feel like soil and plants, not software.

---

## 3. Component List

| Component | HTML Element | Concept |
|---|---|---|
| Nav bar | `<nav>` with a `<button>` toggle for mobile | Sticky top nav, collapses to a simple toggle menu on small screens |
| Hero banner | `<header>` containing a background image + `<h1>`/`<p>` | First thing people see — sets tone fast |
| Program card | `<article>` | Repeatable block used 3x on programs.html, each describing one program |
| Stat counter | `<div>` with nested `<span>` for number + label | Used in the impact snapshot on the homepage |
| CTA button | `<a>` styled as a button | Reused across pages, always points toward get-involved.html |
| Contact/sign-up form | `<form>` with `<label>`/`<input>`/`<textarea>` | Used on both get-involved.html and contact.html with different fields |
| Footer | `<footer>` | Shared across all 4 pages — contact line, social icons, copyright |

(That's 7, one more than the minimum of 6, to cover the footer separately since it repeats site-wide.)

---

## 4. Technical Questions

**Mobile nav strategy:**
Going with a CSS-only approach rather than JavaScript-driven menus. A checkbox or `<details>`/`<summary>` pattern hides the full nav behind a "Menu" toggle below a set breakpoint (around 768px), using just the `:checked` or `[open]` state to show/hide the list. Keeps things simple and avoids JS just for a menu that doesn't need it.

**JavaScript interactions planned:**
Keeping JS minimal and only where it adds real value:
- Basic form validation feedback on get-involved.html and contact.html before fields are submitted
- A small "back to top" button that fades in after scrolling down the longer pages (programs.html)
- Possibly a simple image gallery click-to-enlarge on programs.html, if there's time

**Hardest page and why:**
Programs.html will likely be the hardest. It has the most content to organize (three separate programs, each needing its own description, audience, and visuals) without making the page feel cluttered or repetitive. Striking a balance between giving each program enough space to feel distinct and keeping the page short enough that it still feels "warm and approachable" rather than like a brochure dump is going to take the most iteration.