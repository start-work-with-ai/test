# Wanderly — Tour Guide Website

A modern, responsive website for a tour guide platform that connects travelers with expert local guides around the world.

## Features

- **Hero Section** — Eye-catching landing area with a call to action
- **Popular Tours** — Grid of tour cards with images, pricing, and booking buttons
- **About Section** — Highlights why travelers should choose Wanderly
- **Testimonials** — Real traveler reviews in a clean card layout
- **Contact Form** — Inquiry form with client-side validation and feedback
- **Responsive Design** — Fully mobile-friendly with hamburger navigation
- **Scroll Animations** — Subtle reveal-on-scroll effects for visual polish

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, CSS Grid, Flexbox, media queries
- **Vanilla JavaScript** — No frameworks or build tools required

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/start-work-with-ai/test.git
   cd test
   ```
2. Open `index.html` in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Project Structure

```
├── index.html        # Main HTML page
├── css/
│   └── styles.css    # All styles
├── js/
│   └── main.js       # Interactive behavior
└── README.md
```

## Customization

- **Colors** — Edit CSS custom properties in `:root` at the top of `css/styles.css`
- **Tours** — Add or remove `<article class="tour-card">` blocks in `index.html`
- **Images** — Replace Unsplash URLs with your own photos
- **Contact Form** — Wire up the form submission in `js/main.js` to your backend or a service like Formspree