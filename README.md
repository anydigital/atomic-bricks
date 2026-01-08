# *Any*`bricks`

Framework-agnostic CSS utilities and single-file Nunjucks 'bricks' for modern web development.

## Installation

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@anydigital/bricks@1/dist/bricks.css">
```

### Via npm

```sh
npm install @anydigital/bricks
```

Then import in your CSS:

```css
@import '@anydigital/bricks';
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

The `.prose` class provides enhanced typography for article content and long-form text with container-like behavior:

**Container:**
- Full width with `1rem` padding
- Centered with automatic inline margins

**Links:**
- Custom underline offset (`0.1em`) and thickness (`1px` default, `2px` on hover)
- Special handling for `small`, `sup`, or `sub` elements: lighter weight (`300`) and displayed as `inline-block` to prevent underline decoration

**Headings:**
- `h1` with `small`, `sup`, or `sub` elements get reduced font size (`0.5em`) and lighter weight (`300`)
- `h2` headings (without classes) get a full-width decorative bar above them (`0.4em` height, positioned `1em` above, with `2em` top margin)
- `h3` headings (without classes) get a decorative gradient bar to the left (`10em` width, `0.3em` height, fading from 10% to 5% to transparent opacity)
- `h4` headings (without classes) get a similar decorative gradient bar but thinner (`0.2em` height)

**Tables:**
- Tables are displayed as blocks with horizontal scrolling
- On mobile (max-width: 767px), tables get `1.5em` horizontal padding
- Table cells have `1em` vertical padding (top and bottom)
- Workaround for widening columns using hidden `hr` elements (minimum width: `25ch`)
- Support for headings in Markdown tables using `big` elements (styled as bold italic)

**Blockquotes:**
- Lighter font weight (`300`)
- Adjacent `figcaption` elements are styled with italic text, right alignment, lighter weight (`300`), negative top margin (`-1em`), and an em dash prefix

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

The package includes reusable Nunjucks template macros in the `bricks/` directory. These are useful for common web development patterns.

### Base HTML Template (`__html.njk`)

A base HTML template that provides the essential document structure with built-in support for modern web best practices.

**Features:**
- HTML5 DOCTYPE with language attribute
- UTF-8 charset and comprehensive viewport meta tag with `viewport-fit=cover` for notched devices
- Dynamic title generation with site title suffix
- Favicon link
- CSS dependencies management via `bricksDependencies` filter
- Google Tag Manager integration (conditional on production environment)
- Body content block for template extension

**Usage:**

```njk
{% extends site.bricks ~ '__html.njk' %}

{% block body %}
  <!-- Your page content -->
{% endblock %}
```

**Required Variables:**
- `title` - Page title (optional, will be stripped of HTML tags)
- `site.title` - Site title for the title suffix
- `site.bricks` - Path to the bricks directory
- `site.gtmId` - Google Tag Manager ID (optional)
- `site.isProd` - Boolean flag for production environment (optional)

### Navigation (`_nav.njk`)

A navigation macro that renders a list of navigation links with proper accessibility attributes.

**Parameters:**
- `navPages` - Array of navigation page objects with `url` and `title` properties
- `curPageUrl` - The URL of the current page (used to set `aria-current="page"`)

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
{% import "bricks/_gtm.njk" as gtm %}
{{ gtm.render(site.gtmId) }}
```

In your base template's `<body>` (right after the opening tag):

```njk
{{ gtm.render(site.gtmId, bodyFallback=true) }}
```

**Example:**

```njk
<!DOCTYPE html>
<html>
<head>
  {% import "bricks/_gtm.njk" as gtm %}
  {{ gtm.render('GTM-XXXXXXX') }}
</head>
<body>
  {{ gtm.render('GTM-XXXXXXX', bodyFallback=true) }}
  <!-- Your content -->
</body>
</html>
```

## License

MIT

