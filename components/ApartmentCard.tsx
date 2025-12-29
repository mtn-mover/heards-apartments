'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Apartment, amenityIcons } from '@/data/apartments';
import { cn } from '@/lib/utils';

interface ApartmentCardProps {
  apartment: Apartment;
  priority?: boolean;
}

export default function ApartmentCard({ apartment, priority = false }: ApartmentCardProps) {
  const locale = useLocale() as 'en' | 'de';
  const t = useTranslations('apartment');
  const amenityT = useTranslations('amenities');
  const data = apartment[locale];

  return (
    <Link
      href={`/apartments/${apartment.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={apartment.images[0].src}
          alt={data.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Guest Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
          👥 {t('upTo')} {apartment.specs.maxGuests} {t('guests')}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
          {apartment.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-1">
          {data.subtitle}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.amenities.slice(0, 4).map((amenity) => {
            const icon = amenityIcons[amenity];
            if (!icon) return null;
            return (
              <span
                key={amenity}
                className="inline-flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-700"
              >
                <span>{icon.icon}</span>
                <span>{amenityT(icon.key)}</span>
              </span>
            );
          })}
        </div>

        {/* View Details Button */}
        <div className="flex items-center justify-between">
          <span className="text-rose-600 font-medium text-sm group-hover:underline">
            {t('viewDetails')} →
          </span>
        </div>
      </div>
    </Link>
  );
}
