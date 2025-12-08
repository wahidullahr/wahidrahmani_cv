"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'no') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative group">
      <button
        onClick={() => switchLocale(locale === 'en' ? 'no' : 'en')}
        className="p-2 rounded-full bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/20 transition-colors flex items-center gap-2"
        aria-label="Switch language"
      >
        <Globe size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
        <span className="text-sm font-bold uppercase text-text-secondary group-hover:text-primary transition-colors">
          {locale === 'en' ? 'NO' : 'EN'}
        </span>
      </button>
    </div>
  );
}

