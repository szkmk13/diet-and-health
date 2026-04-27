import About from '@/components/Home/compontents/About';
import CtaSection from '@/components/Home/compontents/CtaSection';
import Opinions from '@/components/Home/compontents/Opinions';
import Patients from '@/components/Home/compontents/Patients';
import TopSection from '@/components/Home/compontents/TopSection';
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
    // error state handled in child components
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <TopSection isLoading={false} error={!data} opinionsCount={data?.opinionsCount ?? '+100'} />
      <About />
      <Patients />
      <Opinions isLoading={false} error={!data} opinions={data?.opinions ?? null} />
      <CtaSection />
    </div>
  );
}
