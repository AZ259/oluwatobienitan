# Oluwatobi Enitan — Portfolio Website

A personal portfolio and blog website built with Next.js for Oluwatobi Enitan, a journalist, media consultant, and creative entrepreneur.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** CSS (custom properties, CSS modules)
- **Data:** WordPress REST API (blog), local data files (portfolio, services)
- **Deployment:** Static generation with ISR

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` — Pages and routes
- `src/components/` — Reusable UI components
- `src/data/` — Static data (works, services)
- `src/lib/` — WordPress API client and mappers

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/blog` | News/Blog listing with category filters |
| `/blog/[slug]` | Individual article |
| `/work` | Portfolio with category filter and detail modal |
| `/services` | Services overview |
| `/service/[slug]` | Service detail |
| `/about` | About page with bio and timeline |
| `/cv` | Printable CV/Resume |
| `/contact` | Contact form |
| `/portfolio-category/[category]` | Category archive pages |
