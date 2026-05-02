# New Galaxy English Secondary School — Website

Official website for **New Galaxy English Secondary School**, Pokhara, Nepal.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & bundler
- **Tailwind CSS** — utility styling
- **Framer Motion** — animations
- **React Router v6** — client-side routing

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/academic` | Academic Programmes |
| `/gallery` | Gallery |
| `/contact` | Contact Us |
| `/admission` | Admission |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, AnnouncementBar
│   └── ui/           # Reusable UI components
├── data/             # Page content & data
├── lib/              # Types, contexts, utilities
├── pages/            # Page components
├── App.tsx
├── index.css
└── main.tsx
public/
└── images/           # Optimised school photos & logos
```

## Design System

- **Brand green:** `#00864B`
- **Light green bg:** `#F0FDF4`
- **Style:** Minimal claymorphism — green + white, child-friendly
- **Cards:** White bg, `1.5px solid #BBF7D0` border, soft green shadow

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## School Info

- **Location:** Pokhara, Nepal
- **Affiliation:** NEB (National Examinations Board)
- **Established:** 1994
- **Streams:** Science · Management · Computer Science · Hotel Management & Tourism
