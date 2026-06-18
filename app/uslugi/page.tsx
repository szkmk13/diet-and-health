import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--trainer-primary)' }}>
                  Oferta
                </h1>
                <div className="h-1 w-20 mb-6" style={{ backgroundColor: 'var(--trainer-accent)' }} />
                <p className="text-lg md:text-xl mb-4" style={{ color: 'var(--trainer-text)' }}>
                  Usługi dietetyczne
                </p>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                  Oferuję szeroki zakres usług - od indywidualnych konsultacji, przez psychodietetykę,
                  po spersonalizowane jadłospisy i pakiety. Znajdź rozwiązanie dopasowane do Twoich potrzeb.
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src="/images/owsianka.jpeg"
                  alt="Usługi dietetyczne"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <UslugiList offers={offers} />
    </div>
  );
}
