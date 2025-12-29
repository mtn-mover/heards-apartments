'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface BookingCTAProps {
  airbnbUrl: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  className?: string;
}

export default function BookingCTA({
  airbnbUrl,
  variant = 'primary',
  size = 'default',
  className,
}: BookingCTAProps) {
  const t = useTranslations('apartment');

  return (
    <a
      href={airbnbUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200',
        variant === 'primary' && 'bg-rose-600 text-white hover:bg-rose-700 shadow-lg hover:shadow-xl',
        variant === 'secondary' && 'bg-white text-rose-600 border-2 border-rose-600 hover:bg-rose-50',
        size === 'default' && 'px-6 py-3 text-sm',
        size === 'large' && 'px-8 py-4 text-base',
        className
      )}
    >
      <span>{t('bookNow')}</span>
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}
