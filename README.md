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

## License

MIT

