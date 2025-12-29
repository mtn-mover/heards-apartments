# Heards Apartments

A modern, professional static website showcasing 5 luxury apartments in Interlaken, Switzerland. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **5 Apartment Listings** - Beautiful showcase pages for each apartment
- **Bilingual Support** - English (primary) and German (secondary) with next-intl
- **Image Gallery** - Full-screen lightbox with keyboard navigation
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Meta tags, sitemap, robots.txt
- **Fast Performance** - Next.js Image optimization, lazy loading
- **Airbnb Integration** - Direct booking links to Airbnb listings

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **i18n:** next-intl
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/heards-apartments.git
cd heards-apartments

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
heards-apartments/
├── app/
│   ├── [locale]/           # i18n routing (en/de)
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Root layout
│   │   ├── apartments/
│   │   │   ├── page.tsx    # All apartments
│   │   │   └── [id]/
│   │   │       └── page.tsx # Apartment detail
│   │   ├── about/
│   │   │   └── page.tsx    # About page
│   │   └── contact/
│   │       └── page.tsx    # Contact page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ApartmentCard.tsx   # Apartment preview card
│   ├── ImageGallery.tsx    # Image gallery with lightbox
│   ├── LanguageSwitcher.tsx # EN/DE toggle
│   └── BookingCTA.tsx      # "Book on Airbnb" button
├── data/
│   └── apartments.ts       # Apartment data
├── i18n/
│   ├── request.ts          # next-intl config
│   ├── routing.ts          # Locale routing
│   └── navigation.ts       # Navigation helpers
├── messages/
│   ├── en.json             # English translations
│   └── de.json             # German translations
├── public/
│   └── images/
│       ├── heart1/         # HEART1 images
│       ├── heart2/         # HEART2 images
│       ├── heart3/         # HEART3 images
│       ├── heart4/         # HEART4 images
│       └── heart5/         # HEART5 images
└── lib/
    └── utils.ts            # Utility functions
```

## Apartments

| ID | Name | Airbnb URL |
|----|------|------------|
| heart1 | HEART1 - Cosy, Central, AC & Lift | [View on Airbnb](https://www.airbnb.com/rooms/18552489) |
| heart2 | HEART2 - Cosy, Central, AC & Lift | [View on Airbnb](https://www.airbnb.com/rooms/24131251) |
| heart3 | HEART3 of Interlaken | [View on Airbnb](https://www.airbnb.com/rooms/19632116) |
| heart4 | HEART4 of Interlaken | [View on Airbnb](https://www.airbnb.com/rooms/20281126) |
| heart5 | HEART5 - Cosy Jewel | [View on Airbnb](https://www.airbnb.com/rooms/1006983308851279367) |

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Updating Content

### Apartment Data
Edit `data/apartments.ts` to update apartment information.

### Translations
Edit files in `messages/` folder:
- `messages/en.json` - English
- `messages/de.json` - German

### Images
Replace files in `public/images/heart[1-5]/` folders.

## License

Private - All rights reserved.

## Contact

Heards Apartments - Interlaken, Switzerland
