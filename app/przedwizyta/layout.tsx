import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Przed wizytą',
  description:
    'Jak przygotować się do konsultacji dietetycznej? Praktyczne wskazówki oraz wstępna ankieta przed pierwszą wizytą u dietetyka Moniki Skibickiej.',
  alternates: { canonical: '/przedwizyta' },
  openGraph: {
    title: 'Przed wizytą | Monika Skibicka Dietetyk',
    description:
      'Przygotuj się do wizyty dietetycznej — wskazówki i wstępna ankieta online.',
  },
};

export default function PrzedWizytaLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
