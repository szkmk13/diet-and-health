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

/** Dane gabinetu (NAP) - te same w JSON-LD, stopce i na /kontakt. */
export const clinic = {
  name: 'Maritimus Clinic',
  streetAddress: 'ul. Żwirki i Wigury 2A',
  postalCode: '81-392',
  city: 'Gdynia',
  mapsUrl: 'https://maps.app.goo.gl/mhi7sRzabVzfXxct5',
} as const;

export const socialLinks = {
  facebook: 'https://www.facebook.com/diet.and.health.dietetyk',
  instagram: 'https://www.instagram.com/monikaskibicka.dietetyk',
  znanyLekarz: 'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia',
} as const;
