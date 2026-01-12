# Truly Investor Capital Website

A modern, animated marketing website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd truly-capital
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
truly-capital/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind imports
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── Navbar.tsx       # Navigation with mega dropdown
│       ├── Hero.tsx         # Hero section with animated stats
│       ├── Products.tsx     # Product cards grid
│       ├── Calculator.tsx   # Loan calculator
│       ├── Process.tsx      # 3-step process timeline
│       ├── Testimonials.tsx # Customer testimonials
│       ├── CTA.tsx          # Call-to-action section
│       ├── Footer.tsx       # Site footer
│       └── index.ts         # Component exports
├── public/                  # Static assets (images, etc.)
├── tailwind.config.ts       # Tailwind configuration with custom theme
├── package.json
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```ts
colors: {
  forest: {
    DEFAULT: "#1a3a2f",
    deep: "#0d1f18",
  },
  gold: {
    DEFAULT: "#c9a962",
    light: "#e8d5a3",
  },
  // ...
}
```

### Fonts

The site uses:
- **Cormorant Garamond** - Display/headings
- **DM Sans** - Body text

To change fonts, update the Google Fonts import in `globals.css` and the `fontFamily` config in `tailwind.config.ts`.

### Content

All text content is contained within each component file. Edit the arrays and objects at the top of each component to update:

- `Products.tsx` - Loan products and features
- `Process.tsx` - Process steps
- `Testimonials.tsx` - Customer quotes
- `Footer.tsx` - Footer links

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

This project is ready to deploy on:

- **Vercel** (recommended) - Zero configuration needed
- **Netlify** - Use the Next.js plugin
- **Any Node.js hosting** - Run `npm run build && npm run start`

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

## Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Animated statistics counter
- ✅ Interactive loan calculator
- ✅ Mega dropdown navigation
- ✅ SEO-optimized metadata
- ✅ Accessible markup
- ✅ TypeScript for type safety

## License

Private - All rights reserved.
