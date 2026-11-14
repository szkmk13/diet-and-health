import type { Metadata } from 'next';
import { baseOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Trener HYROX i CrossFit - treningi personalne',
  description:
    'Certyfikowany trener HYROX Krzysztof Skibicki. Przygotowanie do zawodów HYROX, treningi CrossFit, treningi personalne i indywidualne plany treningowe dopasowane do Twoich celów.',
  keywords: [
    'HYROX',
    'trener HYROX',
    'trening HYROX',
    'przygotowanie do HYROX',
    'CrossFit',
    'trening CrossFit',
    'trener personalny',
    'plan treningowy',
  ],
  alternates: { canonical: '/treningi' },
  openGraph: {
    ...baseOpenGraph,
    title: 'Certyfikowany trener HYROX i CrossFit | Diet and Health',
    description:
      'Przygotowanie do zawodów HYROX, treningi CrossFit i indywidualne plany treningowe z certyfikowanym trenerem.',
    url: '/treningi',
  },
};

export default function TreningiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
