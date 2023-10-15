import TopSection from './compontents/TopSection';
import About from './compontents/About/About';
import Patients from './compontents/Patients/Patients';
import Opinions from './compontents/Opinions/Opinions';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TopSection />
        <About />
        <Patients />
        <Opinions />
      </QueryClientProvider>
    </>
  );
}
