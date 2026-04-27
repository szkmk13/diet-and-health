import { FooterCentered } from '@/components/Footer';
import StickyNavbar from '@/components/StickyNavbar';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';
import Providers from './providers';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Dietetyk - Monika Skibicka | diet-and-health.pl',
    template: '%s | Monika Skibicka Dietetyk',
  },
  description:
    'Diet and health Monika Skibicka. Konsultacje dietetyczne, psychodietetyka, jadłospisy, analiza składu ciała, treningi personalne. Umów wizytę online lub stacjonarnie.',
  metadataBase: new URL('https://diet-and-health.pl'),
  openGraph: {
    siteName: 'diet-and-health.pl',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/Diet_and_Health_logo_podpis_tlo.jpg',
        width: 1200,
        height: 630,
        alt: 'Diet and Health - Monika Skibicka Dietetyk',
      },
    ],
  },
  icons: {
    icon: '/favicon.jpg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Dietitian'],
  name: 'Diet and Health - Monika Skibicka',
  alternateName: 'Dietetyk Monika Skibicka',
  description:
    'Konsultacje dietetyczne, psychodietetyka, jadłospisy i analiza składu ciała w Gdyni. Dietetyk kliniczny i psychodietetyk.',
  url: 'https://diet-and-health.pl',
  email: 'kontakt@diet-and-health.pl',
  image: 'https://diet-and-health.pl/images/monia_kontakt.jpeg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Chłopska 34a/6',
    addressLocality: 'Gdańsk',
    postalCode: '80-368',
    addressCountry: 'PL',
  },
  employee: {
    '@type': 'Person',
    name: 'Monika Skibicka',
    jobTitle: 'Dietetyk kliniczny, Psychodietetyk',
    alumniOf: 'Gdański Uniwersytet Medyczny',
    url: 'https://diet-and-health.pl',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi dietetyczne',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Konsultacja dietetyczna' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Konsultacja online' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jadłospis indywidualny' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Psychodietetyka' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analiza składu ciała' } },
    ],
  },
  sameAs: ['https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Analytics />
          <StickyNavbar />
          <Toaster />
          <main className="flex-1">{children}</main>
          <FooterCentered />
        </Providers>
      </body>
    </html>
  );
}
