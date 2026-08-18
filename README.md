# Diwa ng Tarlac Gallery — React Rebuild

A redesigned, React + Vite version of the Diwa ng Tarlac art gallery website.

## What changed from the original

- **Converted to React** (Vite + React Router). Four pages — Home, About, Contact,
  Paintings — are now components with shared `Header` / `Footer`, instead of four
  separate static HTML files with duplicated markup.
- **New visual design**: a warm cream/forest-green/gold palette, Playfair Display
  for headings + Inter for body text, a proper hero section, card hover effects,
  a sticky/blurred header, and a redesigned footer.
- **Category filter for paintings** (the feature you asked for): on the
  `/paintings` page there's a pill bar — *All, Portrait, Landscape, Abstract,
  Historical*. Clicking a pill instantly filters the grid to that genre, shows a
  live count per category, and updates the URL (e.g. `/paintings?category=Landscape`)
  so a filtered view can be linked or bookmarked directly. The category cards on
  the Home page and the "Categories" links in the footer link straight into a
  filtered view.
- Clicking any painting now opens a nicer lightbox/modal with the artist, medium,
  and genre tag, instead of just a zoomed image.
- Images were compressed/resized for faster load.

## Project structure

```
src/
  components/       Header, Footer, Home, About, Contact, Paintings,
                     CategoryFilter, PaintingModal, ScrollToTop
  data/paintings.js  All artwork + team data lives here — edit this file
                      to add/remove paintings or change genres.
  index.css          The full design system / stylesheet
public/images/       All images (logo, team photos, artwork, backgrounds)
```

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/` — you can deploy that folder to any static host
(Netlify, Vercel, GitHub Pages, etc.).

## Adding a new painting

Open `src/data/paintings.js` and add an object to the `paintings` array, e.g.:

```js
{
  id: 17,
  title: 'New Painting Title',
  artist: 'Artist Name',
  location: 'Tarlac',
  year: 2025,
  medium: 'Oil on Canvas',
  genre: 'Landscape', // must be one of: Portrait, Landscape, Abstract, Historical
  image: '/images/your-image.jpg',
}
```

Drop the image file into `public/images/` and it'll show up automatically in the
gallery and in its category filter.
