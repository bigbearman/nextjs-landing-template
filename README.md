# Next.js Landing Page Template

A modern, responsive landing page template built with Next.js, Tailwind CSS, and TypeScript.

## Demo

Check out the live demo: [next-landing-template.vercel.app](https://next-landing-template.vercel.app)

## Features

- 🚀 Next.js 14 with App Router
- 💨 Tailwind CSS for styling
- 🎨 Dark mode support
- 📱 Fully responsive design
- 🧩 Reusable UI components:
  - Custom Button (Primary, Secondary, Outline variants)
  - Modal Dialog with transitions
  - Drawer (Left/Right variants)
  - Two Carousel variants (Default & Swiper)
- 🎯 Modern landing page sections:
  - Hero section
  - Features grid
  - CTA section
  - Footer
- ✨ Smooth scrolling
- 🎨 Custom scrollbar
- 🌗 Auto dark mode detection
## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Headless UI
- Swiper

## Project Structure
src/
├── app/ # Next.js app router
├── components/ # Page sections
│ ├── Header.tsx
│ ├── Hero.tsx
│ ├── Features.tsx
│ ├── CTA.tsx
│ └── Footer.tsx
└── libs/
└── ui/ # Reusable UI components
├── Button
├── Dialog
├── Drawer
└── Carousel