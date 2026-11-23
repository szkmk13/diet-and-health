import About from '@/components/Home/components/About';
import CtaSection from '@/components/Home/components/CtaSection';
import Opinions from '@/components/Home/components/Opinions';
import Patients from '@/components/Home/components/Patients';
import TopSection from '@/components/Home/components/TopSection';
import { fetchZnanyLekarzData, ZnanyLekarzData } from '@/lib/fetch-opinions';
import type { Metadata } from 'next';
import { Figtree, Young_Serif } from 'next/font/google';

const display = Young_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-display',
});

const body = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  let data: ZnanyLekarzData | null = null;
  try {
    data = await fetchZnanyLekarzData();
  } catch {
    // brak danych: Opinions pokaże opinie zapasowe
  }

  return (
    <div className={`home min-h-screen bg-white ${display.variable} ${body.variable}`}>
      <TopSection opinionsCount={data?.opinionsCount ?? '100+'} />
      <About />
      <Patients />
      <Opinions opinions={data?.opinions ?? []} />
      <CtaSection />
    </div>
  );
}
