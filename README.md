# Day 13 — JavaScript Interactivity

Adding JavaScript interactions to the shop page built in Week 1.

## What I built

A product shop page with three JavaScript interactions added on top of the existing HTML and CSS.

## Interactions

- **Character counter** — Live count on the feedback textarea, turns red when over 300 characters
- **Back to top button** — Appears after scrolling 200px, smooth scrolls back to the top on click
- **Tab switcher** — Shipping, Returns, and Contact tabs, clicking each shows its panel and hides the others

## Files

| File | Purpose |
|------|---------|
| `products.html` | Shop page markup with product cards, tabs, feedback form |
| `products.css` | All styles — dark theme with midnightblue and gold |
| `app.js` | All three JavaScript interactions |

## Rules I followed

- All JavaScript is in `app.js` — no inline `onclick` anywhere in the HTML
- Used `querySelector` and `addEventListener` throughout
- Zero console errors

## What I learned

- How to listen to the `input` event for real-time feedback
- Using `window.scrollY` to show/hide an element based on scroll position
- How tab switchers work — removing `active` from all, then adding it to the clicked one


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


#  Day 16 - GreenRoot NGO Website plane 

## Overview

GreenRoot is a responsive multi-page NGO website that promotes environmental sustainability and community involvement. It provides information about the organization's mission, programs, volunteering, donations, and contact details.

## Pages

* **Home (`index.html`)** – Introduction, mission, impact, and call-to-action.
* **Programs (`programs.html`)** – Details of the NGO's three main programs.
* **Get Involved (`get-involved.html`)** – Volunteer opportunities, donations, events, and sign-up form.
* **Contact (`contact.html`)** – Contact form, address, phone, email, and social links.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Flexbox & CSS Grid
* Responsive Web Design

## Features

* Responsive layout
* Reusable components
* CSS-only mobile navigation
* Form validation
* Clean, nature-inspired design

## Future Development

* Online donation integration
* Event management system
* Blog or news section
* Interactive impact statistics


 ## Day 17 GreenRoot NGO Website

💻 Code Explanation

The GreenRoot NGO website follows a modular structure where each file has a specific responsibility. HTML is used for creating the webpage structure, CSS is used for designing and responsiveness, and JavaScript adds interactivity. Separating the code into different files makes the project easier to understand, maintain, and update in the future.

🏗 HTML Code Explanation
index.html

The index.html file is the main entry point of the website. It welcomes visitors and introduces the GreenRoot NGO. The page begins with the <!DOCTYPE html> declaration, which tells the browser to use the HTML5 standard. The <head> section contains metadata such as the page title, character encoding, viewport settings, and the link to the external CSS file.

The <body> contains several semantic sections including the header, navigation menu, hero section, information cards, statistics section, call-to-action banner, footer, and back-to-top button. Semantic elements such as <header>, <nav>, <main>, <section>, <article>, and <footer> improve accessibility and search engine optimization..

---

## 📄 index.html (Home Page)

The **index.html** file is the main entry point of the website. It is the first page visitors see when they open the website. This page introduces GreenRoot NGO and provides users with an overview of its mission, environmental programs, and achievements.

### Structure of `index.html`

### 1️⃣ HTML5 Declaration

```html
<!DOCTYPE html>
```

This declaration tells the browser that the webpage is written using the **HTML5 standard**, ensuring modern browser compatibility.

---

### 2️⃣ Head Section

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenRoot NGO</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

The `<head>` section contains metadata about the webpage.

| Element | Purpose |
|----------|---------|
| `<meta charset="UTF-8">` | Supports all international characters. |
| `<meta name="viewport">` | Makes the website responsive on mobile devices. |
| `<title>` | Displays the webpage title in the browser tab. |
| `<link>` | Connects the external CSS stylesheet. |

---

### 3️⃣ Body Section

The `<body>` contains all visible content shown to users.

It includes:

- Header
- Navigation Bar
- Hero Section
- NGO Introduction
- Program Cards
- Statistics
- Call-to-Action Banner
- Footer
- Back-to-Top Button

The page uses semantic HTML elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

These elements improve code readability, SEO, and accessibility.

---

## 📄 programs.html

The **Programs** page explains the three major environmental initiatives run by GreenRoot NGO.

Each program is placed inside a separate `<section>` element with a unique **id**.

Example:

```html
<section id="tree-planting">
```

Using IDs allows users to jump directly to specific sections through navigation links.

Each program contains:

- Program Title
- Image Placeholder
- Detailed Description
- Eligibility Information
- Schedule
- Call-to-Action

The page ends with a button encouraging visitors to volunteer.

---

## 📄 get-involved.html

The **Get Involved** page allows visitors to participate in NGO activities.

The page includes:

- Volunteer Opportunities
- Donation Information
- Upcoming Events
- Registration Form

### Form Validation

The HTML form uses built-in validation attributes.

```html
<input
type="email"
required
aria-required="true">
```

These attributes ensure:

- Users cannot leave required fields empty.
- Email addresses follow the correct format.
- Screen readers understand which fields are mandatory.

---

# 🎨 CSS Code Explanation

All website styling is written inside **styles.css**.

CSS controls the appearance of the website, including colors, typography, layouts, spacing, animations, hover effects, and responsive behavior.

---

## 🎨 CSS Variables

The project uses CSS Variables for reusable values.

```css
:root{
    --color-primary: seagreen;
    --color-secondary: peru;
    --space-md:1.5rem;
}
```

### Why use CSS Variables?

Instead of writing the same colors repeatedly throughout the stylesheet, variables allow developers to define them once and reuse them.

Advantages:

- Easier maintenance
- Consistent colors
- Cleaner code
- Faster updates

---

## Universal Selector

```css
*{
    box-sizing:border-box;
}
```

The universal selector applies the **border-box** sizing model to every HTML element.

This means:

```
Width
=
Content
+
Padding
+
Border
```

This prevents layout calculation problems and makes responsive design easier.

---

## Navigation Bar

```css
.site-nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
```

The navigation uses **Flexbox**.

### Properties

| Property | Purpose |
|-----------|---------|
| display:flex | Creates a flexible layout |
| justify-content | Places logo and links apart |
| align-items | Vertically centers all items |

Benefits:

- Responsive
- Easy alignment
- Less CSS code

---

## Buttons

```css
.btn-primary{
    background-color:var(--color-primary);
}
```

Buttons use reusable CSS classes instead of inline styling.

Advantages:

- Consistency
- Easy maintenance
- Reusable throughout the project

Hover effect:

```css
.btn-primary:hover{
    background-color:darkgreen;
}
```

When users move the mouse over the button, the background color changes, providing visual feedback.

---

## Hero Section

```css
.hero{
    display:flex;
    flex-wrap:wrap;
}
```

The Hero section displays:

- Text
- Image Placeholder

side by side using **Flexbox**.

On smaller screens:

```
Desktop

Text      Image

↓

Mobile

Text
Image
```

The layout automatically changes to improve readability.

---

## Card Layout

```css
.card-grid{
    display:flex;
    flex-wrap:wrap;
}
```

Cards organize information into separate blocks.

Each card automatically expands or shrinks depending on the screen width.

Benefits:

- Clean layout
- Better readability
- Responsive design

---

## Media Queries

```css
@media(max-width:768px)
```

Media Queries detect smaller screen sizes.

When the screen width becomes less than **768px**:

- Navigation becomes a mobile menu
- Hero section stacks vertically
- Cards appear one below another
- Buttons resize automatically

This ensures the website looks good on:

- Desktop
- Laptop
- Tablet
- Mobile Phone

---

# ⚡ JavaScript Code Explanation

All interactive functionality is written inside **app.js**.

JavaScript makes the website dynamic and interactive.

---

## Selecting Elements

```javascript
var navToggle = document.querySelector('.nav-toggle');
```

`querySelector()` selects the first HTML element matching the CSS selector.

Here it selects the mobile navigation button.

---

## Mobile Navigation

```javascript
navToggle.addEventListener("click",function(){
```

An event listener waits for the user to click the menu button.

When clicked:

```javascript
navLinks.classList.toggle("is-open");
```

The `toggle()` method adds or removes the `is-open` class.

Workflow:

```
Hidden
   │
Click
   │
Visible
   │
Click Again
   │
Hidden
```

---

## ARIA Accessibility

```javascript
navToggle.setAttribute(
"aria-expanded",
String(isOpen)
);
```

This updates the accessibility status.

When menu opens:

```html
aria-expanded="true"
```

When menu closes:

```html
aria-expanded="false"
```

Screen readers use this information to help visually impaired users understand the menu state.

---

## Closing Navigation Automatically

```javascript
link.addEventListener("click",function(){
```

When users click any navigation link,

```javascript
navLinks.classList.remove("is-open");
```

the mobile menu automatically closes.

Benefits:

- Better user experience
- Prevents the menu from staying open

---

## Back-to-Top Button

```javascript
window.addEventListener("scroll",function(){
```

This event continuously checks the scroll position.

```javascript
window.scrollY > 400
```

If the user scrolls more than **400 pixels**, the Back-to-Top button appears.

Otherwise, it remains hidden.

---

## Smooth Scrolling

```javascript
window.scrollTo({
    top:0,
    behavior:"smooth"
});
```

Instead of jumping instantly to the top, JavaScript creates a smooth scrolling animation, improving user experience.

---

## Form Validation

```javascript
form.checkValidity();
```

This function checks whether all required fields have been completed correctly.

If validation fails:

```javascript
form.reportValidity();
```

The browser automatically displays validation messages.

---

## Checkbox Validation

HTML cannot require users to select at least one checkbox.

JavaScript solves this problem by checking:

```javascript
input[type="checkbox"]:checked
```

If no checkbox is selected, the following message is displayed:

```
Please choose at least one option.
```

---

## Success Message

After successful validation:

```javascript
form.reset();
```

The form is cleared.

Then:

```javascript
success.classList.add("is-visible");
```

The success message becomes visible.

---

# 🔄 Overall Code Flow

```text
Website Loads
      │
      ▼
HTML Creates Website Structure
      │
      ▼
CSS Styles Every Component
      │
      ▼
JavaScript Adds Interactivity
      │
      ▼
User Opens Navigation Menu
      │
      ▼
Navigation Appears
      │
      ▼
User Completes Form
      │
      ▼
JavaScript Validates Input
      │
      ▼
Form Submitted Successfully
      │
      ▼
Success Message Displayed
```

---
# 🎯 Conclusion

The **GreenRoot NGO Website** is a responsive and user-friendly front-end web application developed using **HTML5**, **CSS3**, and **JavaScript**. The project demonstrates how modern web technologies can be combined to create an informative and interactive website for a non-governmental organization dedicated to environmental conservation and community engagement.

Throughout the development of this project, semantic HTML elements were used to create a well-structured and accessible website. CSS was utilized to design an attractive, responsive, and consistent user interface using Flexbox, CSS Variables, media queries, and reusable components. JavaScript enhanced the user experience by providing interactive features such as a responsive mobile navigation menu, smooth scrolling, back-to-top functionality, and client-side form validation.

The website successfully achieves its primary objectives by providing visitors with information about GreenRoot NGO, its environmental programs, volunteer opportunities, donation details, and upcoming events. The project also follows modern web development best practices by separating structure (HTML), presentation (CSS), and functionality (JavaScript), making the code clean, modular, and easy to maintain.

This project has strengthened my understanding of front-end web development concepts, responsive design techniques, accessibility standards, DOM manipulation, event handling, and form validation. It also demonstrates my ability to design and develop a complete multi-page website using industry-standard technologies.

Although the current version is a static website, it provides a strong foundation for future enhancements such as database integration, online donations, user authentication, an admin dashboard, email notifications, event registration, and real-time data management. Overall, the GreenRoot NGO Website is a well-organized, scalable, and practical project that showcases both technical knowledge and problem-solving skills while supporting an important environmental cause.

 
