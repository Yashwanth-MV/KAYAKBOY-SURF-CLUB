# Kayakboy Surf Club — Pixel-Perfect Clone

A production-ready Next.js clone of the [Kayakboy Surf Club Framer template](https://surfing-template.framer.website/).

## Tech Stack

- **Next.js 15** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** — all animations and transitions
- **Lenis** (`@studio-freight/lenis`) — smooth scroll

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Full Dependency List

```json
{
  "dependencies": {
    "next": "^15",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11.2.10",
    "@studio-freight/lenis": "^1.0.42",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}
```

## Project Structure

```
surfing-site/
├── app/
│   ├── layout.tsx          # Root layout with font imports
│   └── page.tsx            # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav with scroll transparency + mobile menu
│   │   └── Footer.tsx      # Footer with big logo + ticker tape
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with parallax + rating badge
│   │   ├── About.tsx       # Video + stats counters
│   │   ├── Courses.tsx     # 4-course card grid
│   │   ├── Locations.tsx   # Masonry location cards
│   │   ├── Process.tsx     # 6-step process with sticky image
│   │   ├── Gallery.tsx     # Dual auto-scrolling photo strips
│   │   ├── Testimonials.tsx # Masonry testimonial grid
│   │   └── FAQ.tsx         # Accordion FAQ + CTA banner
│   └── ui/
│       ├── SmoothScroll.tsx # Lenis smooth scroll wrapper
│       └── TickerTape.tsx  # Warning tape marquee
├── styles/
│   └── globals.css         # Global styles + CSS animations
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Features Implemented

### Animations
- ✅ Hero parallax scroll effect (image scales + translates)
- ✅ Scroll-triggered fade-in reveals (every section)
- ✅ Stagger animations on card grids
- ✅ Counter animation for stats (0 → target)
- ✅ Smooth Lenis scroll
- ✅ Navbar transparency on scroll
- ✅ Mobile menu with animated hamburger
- ✅ Dual auto-scrolling gallery strips (left/right)
- ✅ Ticker tape marquee (WARNING · NO SWIMMING · SHARK SIGHTED)
- ✅ FAQ accordion with smooth height animation
- ✅ Image zoom on card hover
- ✅ Parallax on section backgrounds

### Design
- ✅ Bebas Neue display font (italic style for "IING")
- ✅ Deep ocean dark theme (#050F18)
- ✅ Sand/cream ticker tape (#F5E6C8)
- ✅ Teal accent color (#7ECDC8)
- ✅ All framerusercontent.com images used directly
- ✅ Pexels video for About section
- ✅ Pill badges, section labels, cards
- ✅ Responsive across mobile/tablet/desktop

## Asset Notes

All images and videos are loaded directly from their original CDN sources:
- **Images**: `framerusercontent.com` — all original assets
- **Video**: Pexels video ID 7660624 (About section background)
- **Fonts**: Google Fonts (Bebas Neue + Inter) — loaded via CSS @import

No assets require local downloading — everything streams from CDN.
