'use client';

import About from '@/components/Home/compontents/About';
import Opinions from '@/components/Home/compontents/Opinions';
import Patients from '@/components/Home/compontents/Patients';
import TopSection from '@/components/Home/compontents/TopSection';
import { useQuery } from 'react-query';

export default function HomePage() {
  const { data, error, isLoading } = useQuery('fetch-data', fetchElementData, {
    staleTime: 1000 * 60 * 60, // 1 hour cache
    cacheTime: 1000 * 60 * 600, // 10 minutes cache before garbage collected
  });

  console.log(data, error, isLoading);
  if (isLoading) {
    return (
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <TopSection isLoading={isLoading} error={false} opinionsCount={'0'} />
        <About />
        <Patients />
        <Opinions isLoading={isLoading} error={false} opinions={[]} />
      </div>
    );
  }
  if (error) {
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <TopSection isLoading={false} error={true} opinionsCount={'+100'} />
      <About />
      <Patients />
      <Opinions isLoading={false} error={true} opinions={null} />
    </div>;
  }
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <TopSection
          isLoading={isLoading}
          error={false}
          opinionsCount={data.opinionsCount}
        />
        <About />
        <Patients />
        <Opinions
          isLoading={isLoading}
          error={false}
          opinions={data.opinions}
        />
      </div>
    </>
  );
}

// Replace fetchElementData with async fetch version from your comment
async function fetchElementData() {
  const res = await fetch(`/api/fetch-data`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}
