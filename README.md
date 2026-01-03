# `atomic-bricks`

Framework-agnostic CSS utility helpers for modern web development.

## Installation

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@anydigital/atomic-bricks@1/dist/atomic-bricks.min.css">
```

### Via npm

```sh
npm install @anydigital/atomic-bricks
```

Then import in your CSS:

```css
@import '@anydigital/atomic-bricks';
```

## Features

### Overflow Control

Prevents horizontal overflow and scrolling on the entire page:

```css
html, body {
  overflow-x: clip;
}
```

This is automatically applied when you include the stylesheet.

### Full Viewport Height

Ensures the body element takes at least the full height of the viewport using dynamic viewport height for better mobile support:

```css
body {
  min-height: 100dvh;
}
```

This is automatically applied when you include the stylesheet.

### Typography Enhancements

Improves text rendering and readability:

```css
body {
  hyphens: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- Automatic hyphenation for better text flow
- Font smoothing for cleaner text rendering across browsers

This is automatically applied when you include the stylesheet.

### Prose Styling

The `.prose` class provides enhanced typography for article content and long-form text:

**Links:**
- Custom underline offset and thickness (1px default, 2px on hover)
- Special handling for links containing `small`, `sup`, or `sub` elements

**Headings:**
- `h1` with `small`, `sup`, or `sub` elements get reduced font size (0.5em) and lighter weight
- `h2` headings (without classes) get a full-width decorative bar above them
- `h3` and `h4` headings (without classes) get a decorative gradient bar to the left

**Tables:**
- Tables are displayed as blocks with horizontal scrolling
- On mobile (max-width: 767px), tables get horizontal padding
- Table cells have consistent vertical padding
- Workaround for widening columns using hidden `hr` elements
- Support for headings in Markdown tables using `big` elements

**Blockquotes:**
- Lighter font weight (300)
- Adjacent `figcaption` elements are styled with italic text, right alignment, and an em dash prefix

**Usage:**

```html
<article class="prose">
  <h1>Article Title</h1>
  <p>Your content here...</p>
</article>
```

This is automatically included when you import the stylesheet.

### Flexbox Layout

Sets up a flexible column layout structure:

```css
body {
  display: flex;
  flex-direction: column;
}

body > main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
```

The body becomes a flex container with column direction, and `main` elements automatically grow to fill available space. This is useful for creating sticky footers and full-height layouts.

This is automatically applied when you include the stylesheet.

### Breakout CSS

Includes [breakout-css](https://github.com/anydigital/breakout-css) utilities for breaking out images and figures beyond their container width. Use the `.breakout` class to allow elements to extend beyond their parent container:

```html
<div class="breakout">
  <img src="image.jpg" alt="Description">
</div>
```

The breakout utilities support images, pictures, figures, canvas, audio, video, tables, pre, iframe, and other media elements. This is automatically included when you import the stylesheet.

## Bricks (Template Components)

The package includes reusable Nunjucks template macros in the `src/bricks/` directory. These are useful for common web development patterns.

### Navigation (`_nav.njk`)

A navigation macro that renders a list of navigation links with proper accessibility attributes.

**Parameters:**
- `navPages` - Array of navigation page objects with `url` and `title` properties
- `currentPageUrl` - The URL of the current page (used to set `aria-current="page"`)

**Usage:**

```njk
{% from "bricks/_nav.njk" import render %}
{{ render(navPages, page.url) }}
```

**Example:**

```njk
{% set navPages = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/contact', title: 'Contact' }
] %}
{% from "bricks/_nav.njk" import render %}
{{ render(navPages, '/about') }}
```

**Output:**

```html
<nav>
  <a href="/">Home</a>
  <a href="/about" aria-current="page">About</a>
  <a href="/contact">Contact</a>
</nav>
```

**Compatibility:** Compatible with [Eleventy Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/#bring-your-own-html-render-the-menu-items-manually).

### Google Tag Manager (`_gtm.njk`)

A macro for embedding Google Tag Manager scripts in your pages.

**Parameters:**
- `gtmId` - Your Google Tag Manager container ID (e.g., `GTM-XXXXXXX`)
- `bodyFallback` - Boolean flag (default: `false`). When `false`, renders the script tag for the `<head>`. When `true`, renders the noscript fallback for the `<body>`.

**Usage:**

In your base template's `<head>`:

```njk
{% from "bricks/_gtm.njk" import render %}
{{ render('GTM-XXXXXXX') }}
```

In your base template's `<body>` (right after the opening tag):

```njk
{% from "bricks/_gtm.njk" import render %}
{{ render('GTM-XXXXXXX', true) }}
```

**Example:**

```njk
<!DOCTYPE html>
<html>
<head>
  {% from "bricks/_gtm.njk" import render %}
  {{ render('GTM-XXXXXXX') }}
</head>
<body>
  {% from "bricks/_gtm.njk" import render %}
  {{ render('GTM-XXXXXXX', true) }}
  <!-- Your content -->
</body>
</html>
```

## License

MIT

