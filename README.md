# *Any*bricks

Framework-agnostic CSS utilities and single-file Liquid 'bricks' for modern web development.

## Installation

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@anydigital/bricks@1/dist/bricks.css" />
```

### Via npm

```sh
npm install @anydigital/bricks
```

Then import in your CSS:

```css
@import "@anydigital/bricks";
```

## Features

### Overflow Control

Prevents horizontal overflow and scrolling on the entire page:

```css
html,
body {
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
- Anchor links (starting with `#`) have no text decoration
- Special handling for `small`, `sup`, or `sub` elements: lighter weight (`300`) and displayed as `inline-block` to prevent underline decoration
- Icon helper: `i` elements inside links are displayed as `inline-block` with normal font style to prevent underline decoration, with `1em` height, `-10%` vertical alignment, and `0.25em` right margin. Nested `img` elements are styled with `100%` height and no margin

**Headings:**

- `h1` with `small`, `sup`, or `sub` elements get reduced font size (`0.5em`) and lighter weight (`300`)
- `h2` headings (without classes) get a full-width decorative bar above them (`0.4em` height, positioned `1em` above with `2em` top margin, centered using transform)
- `h3` and `h4` headings (without classes) get a decorative gradient bar to the left (`10em` width, positioned with `0.5em` right margin, vertically centered using transform, gradient from 10% to 5% to transparent opacity)
- `h4` headings have a thinner bar (`0.2em` height instead of `0.3em`)

**Tables:**

- Tables are displayed as blocks with horizontal scrolling
- On mobile (max-width: 767px), tables get `1.5em` horizontal padding
- Table cells (`th` and `td`) have `1em` vertical padding (top and bottom) and `top` vertical alignment
- Workaround for widening columns using hidden `hr` elements (minimum width: `25ch`, with zero margin and hidden visibility)
- Support for headings in Markdown tables using `big` elements (styled as bold)
- Images in table cells have no top margin and `0.75em` bottom margin

**Blockquotes:**

- Lighter font weight (`300`)
- Adjacent `figcaption` elements (using `+ figcaption` selector) are styled with italic text, right alignment, lighter weight (`300`), negative top margin (`-1em`), and an em dash prefix (`—`) with `0.25em` right margin

**Code Blocks:**

- Code blocks with `data-caption` attribute display the caption above the code block (styled with 50% opacity, italic, and `1.5em` bottom margin)

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
  flex-grow: 1;
}
```

The body becomes a flex container with column direction, and `main` elements automatically grow to fill available space. This is useful for creating sticky footers and full-height layouts.

This is automatically applied when you include the stylesheet.

### Breakout CSS

Includes [breakout-css](https://github.com/anydigital/breakout-css) utilities for breaking out images and figures beyond their container width. Use the `.breakout` class to allow elements to extend beyond their parent container:

```html
<div class="breakout">
  <img src="image.jpg" alt="Description" />
</div>
```

The breakout utilities support images, pictures, figures, canvas, audio, video, tables, pre, iframe, and other media elements. This is automatically included when you import the stylesheet.

## Bricks (Template Components)

The package includes reusable Liquid templates in the `bricks/` directory. These are useful for common web development patterns.

### Base HTML Template (`__html-begin.liquid` and `__html-end.liquid`)

Base HTML templates that provide the essential document structure with built-in support for modern web best practices. Split into begin and end files to wrap around your content.

**Features:**

- HTML5 DOCTYPE with language attribute (defaults to `en`, configurable via `site.lang`)
- UTF-8 charset and comprehensive viewport meta tag with `viewport-fit=cover` for notched devices
- Dynamic title generation with site title suffix (title is stripped of HTML tags and separated with `|`)
- Favicon link (to `/favicon.ico`)
- Automatic stylesheet linking from `site.styles` array
- Inline styles from `site.inline_styles` array (joined with newlines in a `<style>` tag)
- Automatic script loading from `site.scripts` array (with `defer` attribute)
- Inline module scripts from `site.inline_scripts` array (joined with newlines in a `<script type="module">` tag)
- Custom header content via `content_for_header`
- Google Tag Manager integration (automatically rendered via `_gtm.liquid` template for both `<head>` and `<body>`)

**Usage:**

```liquid
{% render 'bricks/__html-begin', site: site, title: title, content_for_header: content_for_header %}

<!-- Your page content -->

{% render 'bricks/__html-end' %}
```

Note: Google Tag Manager is automatically included in both `<head>` and `<body>` (via the `_gtm.liquid` template) when `site.prod` and `site.gtm_id` are set.

**Variables:**

- `title` - Page title (optional, will be stripped of HTML tags)
- `site.title` - Site title for the title suffix
- `site.lang` - Language code (optional, defaults to `'en'`)
- `site.styles` - Array of stylesheet URLs (optional)
- `site.inline_styles` - Array of inline CSS strings (optional)
- `site.scripts` - Array of script URLs (optional)
- `site.inline_scripts` - Array of inline JavaScript strings (optional)
- `content_for_header` - Custom HTML for the head section (optional)
- `site.gtm_id` - Google Tag Manager ID (optional)
- `site.prod` - Boolean flag for production environment (optional)

### Navigation (`_nav.liquid`)

A navigation template that renders a list of navigation links with proper accessibility attributes.

**Parameters:**

- `nav_pages` - Array of navigation page objects with `url` and `title` properties
- `current_url` - The URL of the current page (used to set `aria-current="page"`)

**Usage:**

```liquid
{% render 'bricks/_nav', nav_pages: navPages, current_url: page.url %}
```

**Example:**

```liquid
{% assign navPages = site.pages | where: "nav", true %}
{% render 'bricks/_nav', nav_pages: navPages, current_url: page.url %}
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

### Google Tag Manager (`_gtm.liquid`)

A template for embedding Google Tag Manager scripts in your pages.

**Parameters:**

- `site.gtm_id` - Your Google Tag Manager container ID (e.g., `GTM-XXXXXXX`)
- `site.prod` - Boolean flag to enable GTM only in production
- `for_body` - Boolean flag (default: `false`). When `false`, renders the script tag for the `<head>`. When `true`, renders the noscript fallback for the `<body>`.

**Note:** This template is automatically included when using `__html-begin.liquid` and `__html-end.liquid`. You only need to manually render it if you're not using those base templates.

**Manual Usage:**

In your base template's `<head>`:

```liquid
{% render 'bricks/_gtm', site: site %}
```

In your base template's `<body>` (right after the opening tag):

```liquid
{% render 'bricks/_gtm', site: site, for_body: true %}
```

**Example (Manual Integration):**

```liquid
<!DOCTYPE html>
<html>
<head>
  {% render 'bricks/_gtm', site: site %}
</head>
<body>
  {% render 'bricks/_gtm', site: site, for_body: true %}
  <!-- Your content -->
</body>
</html>
```

**Rendering Logic:** The GTM script is only rendered when both `site.prod` is `true` and `site.gtm_id` is set. The template uses a capture block to strip whitespace from the output.

## License

MIT
