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
  - Custom Button
  - Modal Dialog
  - Drawer
  - Two Carousel variants (Default & Swiper)

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
read Project

I'll help you understand the current project structure. Looking at the files, this is a Next.js landing page project with the following components:
Main Page (src/app/page.tsx):
A simple layout that combines four main components
Uses a minimal full-height screen design
Hero Section (src/components/Hero.tsx):
Main welcome section with a large heading
Contains a "Get Started" CTA button
Responsive text sizing
Dark mode support
Features Section (src/components/Features.tsx):
Grid layout with three feature cards
Responsive design (1 column on mobile, 2 on tablet, 3 on desktop)
Each card has a title and description
Light/dark mode compatible
CTA Section (src/components/CTA.tsx):
Blue background section
"Sign Up Now" call-to-action
Centered content with heading and description
Footer (src/components/Footer.tsx):
Navigation links (About, Blog, Contact)
Copyright notice
Responsive design
The project uses:
Tailwind CSS for styling
Dark mode support throughout
Responsive design for all screen sizes
Custom color variables in globals.css for light/dark themes
Would you like me to explain any specific part in more detail or help you make any changes to the landing page?
ad header has logo menus and button
menus are anchor link

I'll add a header component with a logo, navigation menu with anchor links, and a button.
First, I'll create a new Header component:
}
Now, I'll update the main page to include the header and add IDs to the sections for the anchor links:
Let's also add some smooth scrolling behavior to make the anchor links work smoothly. I'll update the globals.css:
The new header features:
Fixed position with a semi-transparent background and blur effect
Responsive design (menu links hide on mobile)
Logo on the left
Navigation links in the center that smooth scroll to corresponding sections
CTA button on the right
Dark mode support
Hover effects on links and button
You can replace the "Logo" text with your actual logo image by modifying the logo section in the Header component. For example:
>
Just make sure to add your logo image to the public directory if you want to use an actual logo image.
create libs/ui has button, dialog, drawer, carousel component

I'll help you create a UI component library with reusable components. I'll create these components using modern React patterns and Tailwind CSS.
First, let's create the UI library structure:
}
}
}
}
Now let's create an index file to export all components:
'
These components provide:
Button:
Multiple variants (primary, secondary, outline)
Different sizes (sm, md, lg)
Fully customizable with className prop
TypeScript support
Dialog:
Built with Headless UI for accessibility
Smooth transitions
Backdrop
Title support
Dark mode support
Drawer:
Left/right side options
Smooth slide animations
Backdrop
Dark mode support
Carousel:
Auto-play support
Custom interval
Navigation buttons
Dot indicators
Smooth transitions
To use these components, you'll need to install the required dependencies:
react
Example usage:
>
These components are built with accessibility in mind and follow modern React patterns. They're also fully typed with TypeScript for better development experience.
move Carousel.tsx to folder carousel and make it default then create new carousel use swiper

I'll help you reorganize the Carousel component and create a new one using Swiper.js. First, let's move the existing Carousel and then create a new one.
First, let's create a new folder structure and move the existing Carousel:
}
Now, let's create a new Swiper-based carousel:
}
Let's create an index file to export both carousels:
'
Update the main UI index file:
Let's update the page to use both carousels:
4 hidden lines
You'll need to install Swiper and its dependencies:
swiper
The new structure provides:
DefaultCarousel: The original simple carousel implementation
SwiperCarousel: A more feature-rich carousel using Swiper.js with:
Multiple transition effects (slide/fade)
Better touch support
More customization options
Improved performance
Built-in autoplay controls
Professional-looking navigation and pagination
Both carousels are now organized in their own folders, making it easier to maintain and extend them separately. The Swiper implementation provides a more polished and feature-rich experience, while the default implementation remains as a simpler alternative.
For the code present, we get this error:
```
Module '"./carousel"' has no exported member 'DefaultCarousel'.
```
How can I resolve this? If you propose a fix, please make it concise.

The error occurs because we need to update the export syntax. Let's fix the carousel index file:
This explicitly imports and then re-exports the components, which should resolve the error.
For the code present, we get this error:
```
Already included file name '/Users/leonardzoe/workspace/project/templates/landing-page/src/libs/ui/carousel.tsx' differs from file name '/Users/leonardzoe/workspace/project/templates/landing-page/src/libs/ui/Carousel.tsx' only in casing.
  The file is in the program because:
    Imported via './carousel' from file '/Users/leonardzoe/workspace/project/templates/landing-page/src/libs/ui/index.ts'
    Matched by include pattern '**/*.tsx' in '/Users/leonardzoe/workspace/project/templates/landing-page/tsconfig.json'
```
How can I resolve this? If you propose a fix, please make it concise.

The error is due to case sensitivity conflicts. Let's fix the import path in index.ts:
This changes the import path from ./carousel to ./Carousel to match the actual folder casing. Make sure your folder is also named Carousel (with capital C) to maintain consistency.
check dialog component and move to folder dialog 

I'll help you move the Dialog component to its own folder structure, similar to what we did with the carousel.
}
Then update the main UI index file:
This moves the Dialog component to its own folder and updates the exports accordingly. The component remains functionally the same but is now better organized.
make scrollbar is smaller

I'll add custom scrollbar styles to make them smaller and more modern. Let's update the global CSS:
This adds a slim, modern scrollbar that's 6px wide with rounded corners and hover effects. The track is transparent, and the thumb is gray with a darker shade on hover.
generate README.md and add demo link : next-landing-template.vercel.app

I'll create a concise README.md with essential information and the demo link:
bash
Clone the repository
git clone [repository-url]
Install dependencies
npm install
Run the development server
npm run dev
UI
update @README.md 

I'll update the README with more comprehensive information:
bash
Clone the repository
git clone [repository-url]
Install dependencies
npm install
Run the development server
npm run dev
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
```

## License

MIT