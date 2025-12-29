import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Heards Apartments and discover why Interlaken is the perfect destination for your Swiss Alps adventure.',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageContent />;
}

function AboutPageContent() {
  const t = useTranslations('about');
  const nav = useTranslations('nav');

  const activities = [
    { key: 'activity1', icon: '🏔️' },
    { key: 'activity2', icon: '🪂' },
    { key: 'activity3', icon: '⛵' },
    { key: 'activity4', icon: '🥾' },
    { key: 'activity5', icon: '💧' },
    { key: 'activity6', icon: '🚠' },
  ];

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
            <span className="text-gray-900 font-medium">{nav('about')}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heart3/heards3_22_patio.jpg"
            alt="Interlaken View"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('whoWeAre')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t('whoWeAreText')}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/heart1/heards_1_1_dining_area.jpg"
                alt="Apartment Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Interlaken */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/heart5/heards5_16.jpg"
                alt="Swiss Chalet"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('whyInterlaken')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t('whyInterlakenText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourPromise')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t('ourPromiseText')}</p>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('exploreInterlaken')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.key}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <span className="text-3xl">{activity.icon}</span>
                <span className="font-medium">{t(activity.key as keyof typeof t)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Interlaken?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our collection of apartments and find your perfect home base in the Swiss Alps.
          </p>
          <Link
            href="/apartments"
            className="inline-flex items-center px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Our Apartments
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
