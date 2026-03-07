import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z dietetykiem Moniką Skibicką. Umów wizytę online lub stacjonarnie w Gdyni. Napisz na kontakt@diet-and-health.pl lub wypełnij formularz kontaktowy.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt | Monika Skibicka Dietetyk',
    description:
      'Umów wizytę u dietetyka klinicznego w Gdyni. Konsultacje online i stacjonarne.',
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
