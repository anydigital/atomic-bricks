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

