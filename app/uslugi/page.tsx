import { createClient } from '@supabase/supabase-js';
import { fontVariables } from '@/lib/fonts';
import UslugiList from './UslugiList';

interface SupabaseOffer {
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

async function fetchOffers(): Promise<SupabaseOffer[] | null> {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    const { data, error } = await supabase.from('offers').select();
    if (error) return null;
    return data;
  } catch {
    return null;
  }
}

export default async function Page() {
  const offers = await fetchOffers();
  return (
    <div className={`dh-page min-h-screen bg-white ${fontVariables}`}>
      <section className="bg-[var(--dh-mist)]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:flex-row lg:items-end lg:justify-between">
          <h1>
            <span className="font-display block text-5xl leading-[1.05] text-[var(--dh-indigo)] md:text-[4.5rem]">
              Oferta
            </span>{' '}
            <span className="mt-3.5 block text-lg font-semibold text-[var(--dh-teal-text)] md:text-xl">
              Usługi dietetyczne w Gdyni i online
            </span>
          </h1>
          <p className="max-w-[520px] text-lg leading-relaxed text-[var(--dh-body)]">
            Oferuję szeroki zakres usług - od indywidualnych konsultacji, przez psychodietetykę,
            po spersonalizowane jadłospisy i pakiety. Znajdź rozwiązanie dopasowane do Twoich potrzeb.
          </p>
        </div>
      </section>

      <UslugiList offers={offers} />
    </div>
  );
}
