import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: 'Heards Apartments | Interlaken, Switzerland',
    template: '%s | Heards Apartments',
  },
  description: 'Discover 5 beautiful apartments in central Interlaken, perfect for exploring the Swiss Alps and Jungfrau region.',
  keywords: ['Interlaken apartments', 'Swiss Alps accommodation', 'Jungfrau region', 'vacation rental Interlaken', 'Switzerland holiday'],
  authors: [{ name: 'Heards Apartments' }],
  openGraph: {
    title: 'Heards Apartments - Your Home in Interlaken',
    description: 'Luxury apartments in central Interlaken, Switzerland',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_DE',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16 md:pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
