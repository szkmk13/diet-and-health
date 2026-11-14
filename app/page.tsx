import About from '@/components/Home/components/About';
import CtaSection from '@/components/Home/components/CtaSection';
import Opinions from '@/components/Home/components/Opinions';
import Patients from '@/components/Home/components/Patients';
import TopSection from '@/components/Home/components/TopSection';
import { fetchZnanyLekarzData, ZnanyLekarzData } from '@/lib/fetch-opinions';
import type { Metadata } from 'next';

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
    <div className="min-h-screen bg-white">
      <TopSection opinionsCount={data?.opinionsCount ?? '100+'} />
      <About />
      <Patients />
      <Opinions opinions={data?.opinions ?? []} />
      <CtaSection />
    </div>
  );
}
