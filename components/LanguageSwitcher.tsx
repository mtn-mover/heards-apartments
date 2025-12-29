'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'de') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1">
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-3 py-1 text-sm font-medium rounded-full transition-all',
          locale === 'en'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('de')}
        className={cn(
          'px-3 py-1 text-sm font-medium rounded-full transition-all',
          locale === 'de'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        DE
      </button>
    </div>
  );
}
