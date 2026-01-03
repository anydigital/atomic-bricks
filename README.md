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

## License

MIT

