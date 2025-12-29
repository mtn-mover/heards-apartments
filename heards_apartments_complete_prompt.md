# HEARDS APARTMENTS - Static Showcase Website

## Project Overview
Build a modern, professional static website showcasing 5 apartments in Interlaken, Switzerland. The website should be bilingual (English primary, German secondary) with a focus on beautiful design, fast performance, and easy booking via AirBnB links.

**Domain:** TBD (to be confirmed by client)  
**Brand:** Heards Apartments  
**Location:** Interlaken, Switzerland  

---

## THE 5 APARTMENTS - AirBnB Data

### Apartment 1: HEART1 - Cosy, Central, AC and Lift
**AirBnB URL:** https://www.airbnb.com/rooms/18552489
**Title:** HEART1 - cosy, central, AC and lift, for 4 guests
**Short Description:** Modern apartment in central Interlaken with air conditioning and elevator access
**Key Features:**
- **Location:** Central Interlaken, 200m from Interlaken West train station
- **Guests:** Up to 4 guests
- **Amenities:** Air conditioning, Elevator/Lift, WiFi, Fully equipped kitchen
- **Distance to Train:** 200m walking distance
- **Bus Stop:** Right next to the building

### Apartment 2: HEART2 - Cosy, Central, AC and Lift
**AirBnB URL:** https://www.airbnb.com/rooms/24131251
**Title:** HEART2 - cosy, central, AC and lift, for 4 guests
**Short Description:** Centrally located apartment in Interlaken, just a short walk from train station
**Key Features:**
- **Location:** Central Interlaken, 200m from Interlaken West train station
- **Guests:** Up to 4 guests
- **Amenities:** Air conditioning, Elevator/Lift, WiFi, Fully equipped kitchen
- **Distance to Train:** 200m walking distance
- **Bus Stop:** Right next to the building

### Apartment 3: HEART3 of Interlaken
**AirBnB URL:** https://www.airbnb.com/rooms/19632116
**Title:** HEART3 of Interlaken, elevator, AC, up to 4 people
**Short Description:** Modern apartment with elevator and air conditioning in the heart of Interlaken
**Key Features:**
- **Location:** Central Interlaken
- **Guests:** Up to 4 guests
- **Amenities:** Air conditioning, Elevator/Lift, WiFi, Fully equipped kitchen
- **Ideal For:** Families, groups, exploring the Jungfrau region

### Apartment 4: HEART4 of Interlaken
**AirBnB URL:** https://www.airbnb.com/rooms/20281126
**Title:** HEART4 of Interlaken, elevator, AC, up to 4 people
**Short Description:** Centrally located apartment with modern amenities
**Key Features:**
- **Location:** Central Interlaken, 200m from Interlaken West train station
- **Guests:** Up to 4 guests
- **Amenities:** Air conditioning, Elevator/Lift, WiFi, Fully equipped kitchen
- **Distance to Train:** 200m walking distance
- **Bus Stop:** Right next to the building

### Apartment 5: HEART5 - Cosy Jewel as Home Base
**AirBnB URL:** https://www.airbnb.com/rooms/1006983308851279367
**Title:** HEART5 - cosy juwel as home base
**Short Description:** Renovated jewel in the heart of Interlaken, nestled in a charming old wooden chalet
**Key Features:**
- **Location:** Heart of Interlaken, in a charming old wooden chalet
- **Guests:** Up to 4 guests (exact capacity TBD)
- **Style:** Renovated with modern amenities in traditional Swiss chalet
- **Unique Selling Point:** Authentic Swiss chalet experience with modern comforts
- **Amenities:** WiFi, Fully equipped kitchen, Traditional charm

**Note:** All apartments are centrally located in Interlaken, perfect for exploring the Swiss Alps, Jungfrau region, lakes (Thun & Brienz), and adventure activities.

---

## Technical Requirements

### Tech Stack
```
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: Shadcn/ui (for polished components)
i18n: next-intl for bilingual support (EN/DE)
Deployment: Vercel
Version Control: Git + GitHub
Image Optimization: Next.js Image component
```

### Project Setup
```bash
# Initialize Next.js project
npx create-next-app@latest heards-apartments --typescript --tailwind --app

# Install dependencies
cd heards-apartments
npm install next-intl
npm install shadcn-ui  # if using shadcn components
```

---

## Project Structure

```
heards-apartments/
├── app/
│   ├── [locale]/              # i18n routing (en/de)
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── apartments/
│   │   │   ├── page.tsx       # All apartments grid
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Individual apartment detail
│   │   ├── about/
│   │   │   └── page.tsx       # About Heards
│   │   └── contact/
│   │       └── page.tsx       # Contact page
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── ApartmentCard.tsx      # Apartment preview card
│   ├── ImageGallery.tsx       # Image gallery with lightbox
│   ├── LanguageSwitcher.tsx   # EN/DE toggle
│   └── BookingCTA.tsx         # "Book on AirBnB" button
├── public/
│   └── images/
│       ├── heart1/            # Images for HEART1
│       ├── heart2/            # Images for HEART2
│       ├── heart3/            # Images for HEART3
│       ├── heart4/            # Images for HEART4
│       └── heart5/            # Images for HEART5
├── data/
│   └── apartments.ts          # Apartment data structure
├── messages/                   # i18n translation files
│   ├── en.json                # English translations
│   └── de.json                # German translations
├── lib/
│   └── utils.ts               # Utility functions
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── i18n.ts                    # next-intl configuration
├── middleware.ts              # i18n middleware
└── package.json
```

---

## Core Features

### 1. Homepage

**Hero Section:**
```tsx
- Large hero image (Interlaken/Swiss Alps landscape)
- Heading: "Heards Apartments"
- Subheading: "Your Home in the Heart of the Swiss Alps | Interlaken"
- CTA Button: "View All Apartments"
- Language switcher (EN | DE) in top-right
```

**Featured Apartments Grid:**
```tsx
- Display all 5 apartments in a responsive grid
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card shows:
  * Featured image
  * Apartment name (HEART1, HEART2, etc.)
  * Short tagline (e.g., "Cosy, Central, AC & Lift")
  * Guest capacity icon + number
  * Key amenity icons (AC, Elevator, WiFi)
  * "View Details" button
```

**About Snippet:**
```tsx
- Brief intro (2-3 sentences)
- Why choose Interlaken
- Link to "About" page
```

**Footer:**
```tsx
- Quick links (Home, Apartments, About, Contact)
- AirBnB logo/link
- Copyright © 2025 Heards Apartments
```

### 2. All Apartments Page (`/apartments`)

```tsx
- Page title: "Our Apartments"
- Same grid layout as homepage
- All 5 apartments displayed
- Optional: Filter by guest capacity (future feature)
- Breadcrumb: Home > Apartments
```

### 3. Individual Apartment Pages (`/apartments/[id]`)

**Layout Structure:**
```
┌─────────────────────────────────────────┐
│        Image Gallery (Full Width)      │
│  [Main image + thumbnail strip below]  │
└─────────────────────────────────────────┘
┌────────────────────┬────────────────────┐
│   Details Column   │  Booking Sidebar   │
│                    │                    │
│ - Title            │ - Guest capacity   │
│ - Description      │ - Key amenities    │
│ - Amenities grid   │ - Location map     │
│ - Location info    │ - "Book on AirBnB" │
│                    │   (Primary CTA)    │
└────────────────────┴────────────────────┘
```

**Image Gallery Component:**
- Large main image viewer (aspect ratio 4:3 or 16:9)
- Thumbnail strip below (4-6 visible, horizontally scrollable)
- Click thumbnail → changes main image
- Click main image → opens lightbox/modal for fullscreen view
- Lightbox features:
  * Fullscreen overlay
  * Navigation arrows (prev/next)
  * Image counter (1/8)
  * Close button
  * Keyboard navigation (arrow keys, ESC)
  * Touch/swipe support on mobile

**Details Section:**
```tsx
Title: "HEART1 - Cosy, Central, AC & Lift"
Short description paragraph

📍 Location:
- Central Interlaken
- 200m from Interlaken West Station
- Bus stop right outside

✨ Amenities:
[Icon Grid]
- Air Conditioning
- Elevator/Lift
- Free WiFi
- Fully Equipped Kitchen
- [Additional amenities from AirBnB]

👥 Ideal For:
- Families
- Couples
- Groups exploring Jungfrau region
```

**Booking Sidebar (Sticky):**
```tsx
┌────────────────────┐
│  👥 Up to 4 Guests │
│                    │
│  ✓ AC  ✓ Elevator  │
│  ✓ WiFi  ✓ Kitchen │
│                    │
│  📍 Interlaken     │
│  [Mini Map]        │
│                    │
│  ┌──────────────┐  │
│  │  Book on     │  │
│  │  AirBnB  →   │  │
│  └──────────────┘  │
│                    │
│  [AirBnB Logo]     │
└────────────────────┘
```

**"Book on AirBnB" Button:**
- Large, prominent button
- Opens AirBnB listing in new tab
- Color: AirBnB red (#FF5A5F) or custom brand color
- Hover effect: slight scale/shadow
- Icon: External link icon →

### 4. About Page (`/about`)

```tsx
Title: "About Heards Apartments"

Content sections:
- Who We Are
- Our Story
- Why Interlaken?
- Our Apartments
- Contact Us link
```

### 5. Contact Page (`/contact`)

```tsx
Title: "Get in Touch"

Contact Information:
- Email: [to be provided]
- Phone: [to be provided]
- Address: Interlaken, Switzerland

Optional: Simple contact form or mailto link
Optional: Embedded Google Map
```

---

## Multi-Language Implementation (EN/DE)

### next-intl Configuration

**i18n.ts:**
```typescript
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

**middleware.ts:**
```typescript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

### Translation Files

**messages/en.json:**
```json
{
  "nav": {
    "home": "Home",
    "apartments": "Apartments",
    "about": "About",
    "contact": "Contact"
  },
  "home": {
    "hero_title": "Heards Apartments",
    "hero_subtitle": "Your Home in the Heart of the Swiss Alps",
    "view_apartments": "View All Apartments"
  },
  "apartment": {
    "guests": "guests",
    "book_now": "Book on AirBnB",
    "amenities": "Amenities",
    "location": "Location",
    "ideal_for": "Ideal For"
  },
  "about": {
    "title": "About Heards Apartments",
    "description": "Welcome to Heards Apartments, your perfect base for exploring Interlaken and the stunning Jungfrau region."
  }
}
```

**messages/de.json:**
```json
{
  "nav": {
    "home": "Startseite",
    "apartments": "Wohnungen",
    "about": "Über uns",
    "contact": "Kontakt"
  },
  "home": {
    "hero_title": "Heards Apartments",
    "hero_subtitle": "Ihr Zuhause im Herzen der Schweizer Alpen",
    "view_apartments": "Alle Wohnungen ansehen"
  },
  "apartment": {
    "guests": "Gäste",
    "book_now": "Auf AirBnB buchen",
    "amenities": "Ausstattung",
    "location": "Standort",
    "ideal_for": "Ideal für"
  },
  "about": {
    "title": "Über Heards Apartments",
    "description": "Willkommen bei Heards Apartments, Ihrem perfekten Ausgangspunkt für die Erkundung von Interlaken und der atemberaubenden Jungfrauregion."
  }
}
```

### Language Switcher Component

```tsx
// components/LanguageSwitcher.tsx
'use client';

import {useRouter, usePathname} from 'next/navigation';
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        className={locale === 'en' ? 'font-bold' : ''}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => switchLocale('de')}
        className={locale === 'de' ? 'font-bold' : ''}
      >
        DE
      </button>
    </div>
  );
}
```

---

## Data Structure

### apartments.ts

```typescript
export type Apartment = {
  id: string;
  name: string;
  airbnbUrl: string;
  en: {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    idealFor: string[];
  };
  de: {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    idealFor: string[];
  };
  specs: {
    maxGuests: number;
  };
  amenities: string[]; // Keys like 'ac', 'elevator', 'wifi', 'kitchen'
  images: string[]; // Paths to images
  featured: boolean;
};

export const apartments: Apartment[] = [
  {
    id: 'heart1',
    name: 'HEART1',
    airbnbUrl: 'https://www.airbnb.com/rooms/18552489',
    en: {
      title: 'HEART1 - Cosy, Central, AC & Lift',
      subtitle: 'Modern apartment with air conditioning and elevator',
      description: 'Centrally located apartment in Interlaken, just 200m from Interlaken West train station. Perfect for exploring the Jungfrau region with all modern amenities including air conditioning and elevator access.',
      location: 'Central Interlaken, 200m from Interlaken West Station',
      idealFor: ['Families', 'Couples', 'Groups exploring Jungfrau'],
    },
    de: {
      title: 'HEART1 - Gemütlich, Zentral, Klimaanlage & Aufzug',
      subtitle: 'Moderne Wohnung mit Klimaanlage und Aufzug',
      description: 'Zentral gelegene Wohnung in Interlaken, nur 200 m vom Bahnhof Interlaken West entfernt. Perfekt für die Erkundung der Jungfrauregion mit allen modernen Annehmlichkeiten wie Klimaanlage und Aufzug.',
      location: 'Zentrum Interlaken, 200m vom Bahnhof Interlaken West',
      idealFor: ['Familien', 'Paare', 'Gruppen für Jungfrau-Erkundung'],
    },
    specs: {
      maxGuests: 4,
    },
    amenities: ['ac', 'elevator', 'wifi', 'kitchen'],
    images: [
      '/images/heart1/1.jpg',
      '/images/heart1/2.jpg',
      '/images/heart1/3.jpg',
      '/images/heart1/4.jpg',
      '/images/heart1/5.jpg',
    ],
    featured: true,
  },
  {
    id: 'heart2',
    name: 'HEART2',
    airbnbUrl: 'https://www.airbnb.com/rooms/24131251',
    en: {
      title: 'HEART2 - Cosy, Central, AC & Lift',
      subtitle: 'Centrally located with modern comforts',
      description: 'Welcome! Centrally located apartment in Interlaken, just a short walk from train station Interlaken West (200m). A bus stop is right next to the building, making it easy to explore the region.',
      location: 'Central Interlaken, 200m from Interlaken West Station',
      idealFor: ['Families', 'Couples', 'Adventure seekers'],
    },
    de: {
      title: 'HEART2 - Gemütlich, Zentral, Klimaanlage & Aufzug',
      subtitle: 'Zentral gelegen mit modernem Komfort',
      description: 'Willkommen! Zentral gelegene Wohnung in Interlaken, nur einen kurzen Spaziergang vom Bahnhof Interlaken West (200 m) entfernt. Eine Bushaltestelle befindet sich direkt neben dem Gebäude.',
      location: 'Zentrum Interlaken, 200m vom Bahnhof Interlaken West',
      idealFor: ['Familien', 'Paare', 'Abenteuersuchende'],
    },
    specs: {
      maxGuests: 4,
    },
    amenities: ['ac', 'elevator', 'wifi', 'kitchen'],
    images: [
      '/images/heart2/1.jpg',
      '/images/heart2/2.jpg',
      '/images/heart2/3.jpg',
    ],
    featured: true,
  },
  {
    id: 'heart3',
    name: 'HEART3',
    airbnbUrl: 'https://www.airbnb.com/rooms/19632116',
    en: {
      title: 'HEART3 of Interlaken',
      subtitle: 'Elevator, AC, up to 4 people',
      description: 'Modern apartment with elevator and air conditioning in the heart of Interlaken. Ideal base for exploring the stunning Jungfrau region and Swiss Alps.',
      location: 'Central Interlaken',
      idealFor: ['Families', 'Groups', 'Mountain lovers'],
    },
    de: {
      title: 'HEART3 von Interlaken',
      subtitle: 'Aufzug, Klimaanlage, bis zu 4 Personen',
      description: 'Moderne Wohnung mit Aufzug und Klimaanlage im Herzen von Interlaken. Idealer Ausgangspunkt für die Erkundung der atemberaubenden Jungfrauregion und der Schweizer Alpen.',
      location: 'Zentrum Interlaken',
      idealFor: ['Familien', 'Gruppen', 'Bergliebhaber'],
    },
    specs: {
      maxGuests: 4,
    },
    amenities: ['ac', 'elevator', 'wifi', 'kitchen'],
    images: [
      '/images/heart3/1.jpg',
      '/images/heart3/2.jpg',
    ],
    featured: true,
  },
  {
    id: 'heart4',
    name: 'HEART4',
    airbnbUrl: 'https://www.airbnb.com/rooms/20281126',
    en: {
      title: 'HEART4 of Interlaken',
      subtitle: 'Elevator, AC, up to 4 people',
      description: 'Centrally located apartment in Interlaken, just a short walk from train station Interlaken West (200m). Modern amenities including air conditioning and elevator access.',
      location: 'Central Interlaken, 200m from Interlaken West Station',
      idealFor: ['Families', 'Couples', 'Hikers'],
    },
    de: {
      title: 'HEART4 von Interlaken',
      subtitle: 'Aufzug, Klimaanlage, bis zu 4 Personen',
      description: 'Zentral gelegene Wohnung in Interlaken, nur einen kurzen Spaziergang vom Bahnhof Interlaken West (200 m) entfernt. Moderne Ausstattung mit Klimaanlage und Aufzug.',
      location: 'Zentrum Interlaken, 200m vom Bahnhof Interlaken West',
      idealFor: ['Familien', 'Paare', 'Wanderer'],
    },
    specs: {
      maxGuests: 4,
    },
    amenities: ['ac', 'elevator', 'wifi', 'kitchen'],
    images: [
      '/images/heart4/1.jpg',
      '/images/heart4/2.jpg',
    ],
    featured: true,
  },
  {
    id: 'heart5',
    name: 'HEART5',
    airbnbUrl: 'https://www.airbnb.com/rooms/1006983308851279367',
    en: {
      title: 'HEART5 - Cosy Jewel as Home Base',
      subtitle: 'Renovated charm in traditional Swiss chalet',
      description: 'Welcome to our renovated jewel in the heart of Interlaken! The apartment is nestled in a charming old wooden chalet and shines in new splendor. Experience authentic Swiss charm with modern comforts.',
      location: 'Heart of Interlaken, Traditional Swiss Chalet',
      idealFor: ['Couples', 'Families', 'Culture lovers'],
    },
    de: {
      title: 'HEART5 - Gemütliches Juwel als Heimatbasis',
      subtitle: 'Renovierter Charme im traditionellen Schweizer Chalet',
      description: 'Willkommen in unserem renovierten Juwel im Herzen von Interlaken! Die Wohnung befindet sich in einem charmanten alten Holzchalet und erstrahlt in neuem Glanz. Erleben Sie authentischen Schweizer Charme mit modernem Komfort.',
      location: 'Herz von Interlaken, Traditionelles Schweizer Chalet',
      idealFor: ['Paare', 'Familien', 'Kulturliebhaber'],
    },
    specs: {
      maxGuests: 4,
    },
    amenities: ['wifi', 'kitchen', 'charm', 'traditional'],
    images: [
      '/images/heart5/1.jpg',
      '/images/heart5/2.jpg',
    ],
    featured: true,
  },
];

// Amenity icons mapping
export const amenityIcons: Record<string, {icon: string; label: {en: string; de: string}}> = {
  ac: {
    icon: '❄️',
    label: {en: 'Air Conditioning', de: 'Klimaanlage'},
  },
  elevator: {
    icon: '🛗',
    label: {en: 'Elevator', de: 'Aufzug'},
  },
  wifi: {
    icon: '📶',
    label: {en: 'Free WiFi', de: 'Kostenloses WLAN'},
  },
  kitchen: {
    icon: '🍳',
    label: {en: 'Full Kitchen', de: 'Vollständige Küche'},
  },
  charm: {
    icon: '✨',
    label: {en: 'Swiss Charm', de: 'Schweizer Charme'},
  },
  traditional: {
    icon: '🏡',
    label: {en: 'Traditional Chalet', de: 'Traditionelles Chalet'},
  },
};
```

---

## Design Guidelines

### Color Palette
```css
Primary: #FF5A5F (AirBnB red) or custom brand color
Secondary: #00A699 (Teal accent)
Neutral Dark: #484848 (Text)
Neutral Light: #767676 (Secondary text)
Background: #FFFFFF (White)
Light Background: #F7F7F7 (Sections)
Border: #DDDDDD (Borders)
```

### Typography
```css
Font Family: Inter, system-ui, sans-serif
Headings: font-weight: 700
Body: font-weight: 400

Font Sizes:
- Hero Title: 3rem (mobile), 4.5rem (desktop)
- Section Titles: 2rem
- Apartment Titles: 1.5rem
- Body Text: 1rem
- Small Text: 0.875rem
```

### Spacing
```css
Container Max Width: 1280px
Section Padding: 4rem (desktop), 2rem (mobile)
Card Gap: 1.5rem
Component Spacing: 1rem (vertical), 0.5rem (horizontal)
```

### Responsive Breakpoints (Tailwind)
```css
sm: 640px   (Mobile landscape, small tablets)
md: 768px   (Tablets)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
```

---

## Git & GitHub Setup

### Initialize Git Repository
```bash
cd heards-apartments
git init
git add .
git commit -m "Initial commit: Heards Apartments website"
```

### Create GitHub Repository
```bash
# On GitHub.com:
# 1. Create new repository: "heards-apartments"
# 2. Copy repository URL

# In terminal:
git remote add origin https://github.com/[your-username]/heards-apartments.git
git branch -M main
git push -u origin main
```

### Commit Best Practices
```bash
# Feature commits
git commit -m "feat: add apartment detail page"
git commit -m "feat: implement image gallery with lightbox"

# Fix commits
git commit -m "fix: resolve mobile navigation issue"

# Style commits
git commit -m "style: update color palette and typography"

# Refactor commits
git commit -m "refactor: optimize image loading"
```

### .gitignore
```
node_modules/
.next/
out/
.env*.local
.vercel
.DS_Store
*.log
```

---

## Vercel Deployment

### Connect GitHub to Vercel

**Step 1:** Go to [vercel.com](https://vercel.com)  
**Step 2:** Click "Add New Project"  
**Step 3:** Import `heards-apartments` repository from GitHub  
**Step 4:** Configure project:
```
Framework Preset: Next.js (auto-detected)
Build Command: next build
Output Directory: .next
Install Command: npm install
```

**Step 5:** Environment Variables (if needed):
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Step 6:** Click "Deploy"

### Auto-Deployment
- Every push to `main` branch → automatically deploys to production
- Every pull request → creates preview deployment
- Deployment URL: `heards-apartments.vercel.app` (default)

### Custom Domain Setup
**In Vercel Dashboard:**
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `heards-apartments.com`)
3. Configure DNS records as instructed by Vercel
4. Wait for DNS propagation (can take 24-48 hours)

---

## Image Requirements from Client

### Format & Quality
- **Format:** JPG or PNG (JPG preferred for photos)
- **Dimensions:** Minimum 1920x1080px (Full HD)
- **File Size:** Optimize to < 500KB per image
- **Quantity:** 5-10 images per apartment

### Naming Convention
```
heart1/
  - 1.jpg (main/hero image)
  - 2.jpg
  - 3.jpg
  - 4.jpg
  - 5.jpg
  ...

heart2/
  - 1.jpg
  - 2.jpg
  ...
```

### Image Types Needed
- Living room / main space
- Bedrooms
- Kitchen
- Bathroom
- Building exterior
- View from windows/balcony
- Special features (if any)

**Client to provide images as ZIP file or via cloud storage (Google Drive, Dropbox, etc.)**

---

## SEO & Performance Optimization

### Meta Tags (Example for Homepage)
```tsx
export const metadata = {
  title: 'Heards Apartments | Luxury Apartments in Interlaken, Switzerland',
  description: 'Discover 5 beautiful apartments in central Interlaken, perfect for exploring the Swiss Alps and Jungfrau region. Book directly on AirBnB.',
  keywords: 'Interlaken apartments, Swiss Alps accommodation, Jungfrau region, vacation rental Interlaken',
  openGraph: {
    title: 'Heards Apartments - Your Home in Interlaken',
    description: 'Luxury apartments in central Interlaken, Switzerland',
    images: ['/images/og-image.jpg'],
  },
};
```

### Performance Checklist
✅ Use Next.js `<Image>` component everywhere  
✅ Enable `placeholder="blur"` for smooth loading  
✅ Lazy load images below the fold  
✅ Compress images (WebP format preferred)  
✅ Minimize JavaScript bundle size  
✅ Use server components where possible  
✅ Implement proper caching headers  

### Lighthouse Score Targets
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Sitemap Generation
```xml
https://heards-apartments.com/en
https://heards-apartments.com/en/apartments
https://heards-apartments.com/en/apartments/heart1
https://heards-apartments.com/en/apartments/heart2
https://heards-apartments.com/en/apartments/heart3
https://heards-apartments.com/en/apartments/heart4
https://heards-apartments.com/en/apartments/heart5
https://heards-apartments.com/en/about
https://heards-apartments.com/en/contact

https://heards-apartments.com/de
https://heards-apartments.com/de/apartments
... (same structure for /de)
```

---

## Development Timeline

### Phase 1: Setup & Foundation (Day 1)
- Initialize Next.js project with TypeScript
- Set up Tailwind CSS
- Configure next-intl for i18n
- Create basic project structure
- Set up Git repository
- Connect to GitHub

### Phase 2: Core Pages (Day 2)
- Build Homepage with hero and apartment grid
- Create Header and Footer components
- Implement ApartmentCard component
- Set up routing for apartment pages
- Add LanguageSwitcher component

### Phase 3: Apartment Details (Day 3)
- Create apartment detail page template
- Build ImageGallery component with lightbox
- Implement BookingCTA component
- Add amenities grid display
- Integrate apartment data

### Phase 4: Polish & Content (Day 4)
- Add About and Contact pages
- Optimize images (compress, WebP)
- Add translations (EN/DE)
- Responsive design testing
- SEO optimization (meta tags, sitemap)

### Phase 5: Deploy & Test (Day 5)
- Deploy to Vercel
- Test on multiple devices
- Performance optimization
- Fix any bugs
- Client review and feedback

**Total Timeline:** 3-5 days

---

## Success Criteria

### Functional Requirements
✅ All 5 apartments displayed with complete details  
✅ Each apartment links to correct AirBnB listing  
✅ Bilingual support (EN/DE) working flawlessly  
✅ Image galleries with lightbox/fullscreen  
✅ Responsive design (mobile, tablet, desktop)  
✅ Fast load times (< 2s)  
✅ Clean navigation and user experience  

### Visual Requirements
✅ Modern, professional design  
✅ Consistent branding throughout  
✅ High-quality images optimized  
✅ Clear call-to-actions ("Book on AirBnB")  
✅ Excellent mobile experience  
✅ Accessibility (WCAG AA compliant)  

### Technical Requirements
✅ Next.js 14+ with TypeScript  
✅ Tailwind CSS styling  
✅ Git version control  
✅ GitHub repository  
✅ Vercel hosting with auto-deploy  
✅ Lighthouse score 90+  
✅ SEO optimized  

---

## Post-Launch Enhancements (Future)

### Phase 2 Features (NOT NOW)
- ❌ Direct booking system
- ❌ Availability calendar
- ❌ Payment processing
- ❌ Reviews/testimonials section
- ❌ Blog/news section
- ❌ Advanced filtering (by price, amenities, etc.)
- ❌ Multi-currency support
- ❌ Email newsletter signup

### Analytics & Tracking (Optional)
- Google Analytics 4 integration
- Conversion tracking (AirBnB clicks)
- Heatmap analysis (Hotjar, Clarity)

### Content Management (Optional)
- Sanity CMS or Contentful for easy content updates
- Admin panel for non-technical updates

---

## Important Notes

### Client Responsibilities
1. ✅ Provide high-quality images for all apartments (via ZIP/cloud)
2. ✅ Review and approve apartment descriptions
3. ✅ Confirm AirBnB URLs are correct and active
4. ✅ Provide contact information (email, phone if desired)
5. ✅ Test website on devices after deployment
6. ✅ Approve final design and content
7. ✅ Confirm domain name (if using custom domain)

### Developer Responsibilities
1. ✅ Set up clean, maintainable codebase
2. ✅ Implement responsive design
3. ✅ Optimize images and performance
4. ✅ Deploy to Vercel with Git integration
5. ✅ Create comprehensive README for future maintenance
6. ✅ Provide instructions for content updates

### Maintenance
- **Hosting:** Vercel (free tier supports this project)
- **Updates:** Via Git commit → auto-deploy
- **Images:** Replace files in `/public/images/` folders
- **Content:** Update `data/apartments.ts` and translation files
- **No database:** All data is static (fast, secure, cheap)

---

## Final Checklist Before Launch

### Content
- [ ] All apartment descriptions reviewed and approved
- [ ] Images uploaded and optimized
- [ ] AirBnB URLs tested and working
- [ ] Contact information added
- [ ] About page content finalized

### Technical
- [ ] All pages responsive on mobile/tablet/desktop
- [ ] Image galleries working with lightbox
- [ ] Language switcher functional (EN ↔ DE)
- [ ] All external links open in new tabs
- [ ] 404 page created
- [ ] Sitemap generated
- [ ] Meta tags for all pages
- [ ] Favicon added

### Performance
- [ ] Lighthouse score 90+ on all pages
- [ ] Images compressed and optimized
- [ ] Load time < 2 seconds
- [ ] No console errors

### Deployment
- [ ] GitHub repository created
- [ ] Connected to Vercel
- [ ] Auto-deployment working
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)

### Testing
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on iOS and Android devices
- [ ] All booking links work
- [ ] Forms validated (if contact form exists)
- [ ] Cross-browser compatibility confirmed

---

## Contact & Support

**For questions during development:**
- Developer GitHub: [to be provided]
- Client contact: [to be provided]

**For post-launch support:**
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repository: https://github.com/[username]/heards-apartments
- Documentation: See README.md in repository

---

## Let's Build! 🚀

This is a **clean, professional, static website** designed to:
1. Showcase 5 beautiful apartments in Interlaken
2. Drive bookings via AirBnB
3. Provide excellent user experience
4. Load fast and rank well in search engines

**Focus:** MVP first - get it live, looking great, and functional. Future enhancements can be added later based on user feedback and business needs.

**Timeline:** 3-5 days from start to launch.

**Good luck, and let's create something beautiful!** ✨