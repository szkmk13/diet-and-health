import TopSection from './compontents/TopSection';
import About from './compontents/About/About';
import Patients from './compontents/Patients/Patients';
import Opinions from './compontents/Opinions/Opinions';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useState } from 'react';


const fetchElementData = async () => {
  const res = await fetch(`/api/fetch-data`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export default function Home() {
  const [childCount, setChildCount] = useState(0);
  const [firstFive, setFirstFive] = useState([]);

 const { data, error, isLoading } = useQuery(['elementData'], () => fetchElementData(), {
    staleTime: 1000 * 60 * 60,  // 5 minutes cache
    cacheTime: 1000 * 60 * 600, // 10 minutes cache before garbage collected
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
        <TopSection />
        <About />
        <Patients />
        <Opinions /> 
    </>
  );
}
