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
  return <UslugiList offers={offers} />;
}
