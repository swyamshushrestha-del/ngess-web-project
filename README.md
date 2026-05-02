# New Galaxy Education Institute - Official Website

A modern marketing website with AI-powered tutoring for New Galaxy Education Institute, Pokhara.

## Features

- **Marketing Landing Page** - Conversion-focused homepage showcasing the institute
- **AI Tutor** - Voice-enabled AI tutor powered by Google Gemini for student learning
- **About Us** - School history, mission, and values
- **Academic Programs** - Grade 11-12 courses and curriculum
- **Photo Gallery** - Campus life and events
- **Admission Portal** - Online admission application
- **Contact Form** - Inquiry management

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **AI**: Google Gemini Live API (voice conversation)
- **Routing**: React Router v7

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Gemini API key (get from https://aistudio.google.com/apikey)

### Installation

```bash
# Install dependencies
npm install

# Create .env.local and add your API key
cp .env.example .env.local

# Edit .env.local and add your GEMINI_API_KEY
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
school-website/
├── src/
│   ├── components/
│   │   └── AITutor.tsx    # AI Tutor voice component
│   ├── lib/
│   │   └── cmsContext.tsx # CMS integration (optional)
│   ├── App.tsx            # Main application
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env.example           # Environment template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
└── package.json
```

## AI Tutor Feature

The built-in AI Tutor uses Google Gemini's Live API for real-time voice conversations:

- Students can practice English or Nepali conversation
- Voice-enabled with natural audio responses
- Configurable for different subjects/topics
- Located on the Academic page

To customize the AI Tutor behavior, edit the `systemInstruction` in `src/components/AITutor.tsx`.

## Deployment

### Manual Deploy (Any Hosting)

```bash
npm run build
# Upload dist/ folder to your host
```

### Vercel

1. Connect your GitHub repo to Vercel
2. Add `GEMINI_API_KEY` as environment variable
3. Deploy

### Babal Host (cPanel)

1. Run `npm run build`
2. Add `.htaccess` to dist/ for SPA routing:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```
3. Upload contents of `dist/` to `public_html/`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key for AI Tutor |
| `APP_URL` | Your website URL (optional) |

---

Built with ❤️ for New Galaxy Education Institute
