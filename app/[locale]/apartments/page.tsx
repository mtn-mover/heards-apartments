import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { apartments } from '@/data/apartments';
import ApartmentCard from '@/components/ApartmentCard';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Our Apartments',
  description: 'Browse our collection of 5 modern apartments in central Interlaken. Air conditioning, elevator access, and walking distance to train stations.',
};

export default async function ApartmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ApartmentsPageContent />;
}

function ApartmentsPageContent() {
  const t = useTranslations('home');
  const nav = useTranslations('nav');

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              {nav('home')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{nav('apartments')}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('featuredTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('featuredSubtitle')}
          </p>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {apartments.map((apartment, index) => (
              <ApartmentCard
                key={apartment.id}
                apartment={apartment}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
