import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oferta i cennik',
  description:
    'Konsultacje dietetyczne, psychodietetyka, jadłospisy i analiza składu ciała w Gdyni. Sprawdź pełny cennik usług dietetycznych Moniki Skibickiej.',
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Oferta i cennik | Monika Skibicka Dietetyk',
    description:
      'Konsultacje dietetyczne, psychodietetyka, jadłospisy i analiza składu ciała — cennik usług.',
  },
};

export default function UslugiLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
