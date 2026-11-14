import type { Metadata } from 'next';

/**
 * Wspólne pola Open Graph. Next.js nie łączy `openGraph` z layoutu nadrzędnego
 * z tym z podstrony, tylko go zastępuje, więc każda podstrona z własnym
 * `openGraph` musi dołożyć tę bazę, żeby nie zgubić obrazka i nazwy serwisu.
 */
export const baseOpenGraph = {
  siteName: 'diet-and-health.pl',
  locale: 'pl_PL',
  type: 'website',
  images: [
    {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Diet and Health - Monika Skibicka Dietetyk',
    },
  ],
} satisfies NonNullable<Metadata['openGraph']>;
