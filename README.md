# Elementum — Creative Agency Landing Page

A pixel-perfect React implementation of the Elementum creative agency website.

## Quick Start

```bash
npm install
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview build
```

## Project Structure

```
src/
  components/
    Navbar/         Sticky nav, scroll shadow, hamburger
    Hero/           Headline highlights + floating avatar collage
    Studio/         Two alternating about blocks with decorative shapes
    Services/       Service rows with animated circle arrows
    Testimonials/   Quote card flanked by avatar columns
    CTA/            Newsletter section (mint background)
    Footer/         4-column responsive footer
  hooks/
    useScrollReveal.js   IntersectionObserver scroll reveal
  styles/
    globals.css          CSS vars, resets, reveal animation classes
```

## Tech Stack

- React 18 + Vite
- CSS Modules (scoped styles per component)
- Animate.css (hero load animation)
- IntersectionObserver API (scroll reveal)
- CSS keyframes (float, floatAlt, pulse)
- Google Fonts: Playfair Display + DM Sans

## Animations

| Section       | Animation                                       |
|---------------|--------------------------------------------------|
| Hero          | animate__fadeInUp via Animate.css                |
| Hero avatars  | CSS float keyframe, staggered delays             |
| Studio        | Scroll reveal, slide in from left/right          |
| Services      | Staggered translateY fade-up per row             |
| Testimonials  | Scroll reveal fade-up                            |
| CTA button    | scale(1.05) hover + scale(0.98) active           |
| Service arrow | translateX + rotate(-45deg) on row hover         |
| Deco shapes   | floatAlt keyframe with subtle rotation           |

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```
