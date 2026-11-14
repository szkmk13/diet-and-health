import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Ceny w bazie to tekst, np. "190", "170/250" albo "190 zł".
const PRICE_PATTERN = /^[0-9 .,/zł-]{1,30}$/i;
const MAX_OFFERS = 100;

interface OfferUpdate {
  id: number;
  price: string;
}

function isValidOffer(offer: unknown): offer is OfferUpdate {
  if (typeof offer !== 'object' || offer === null) return false;
  const { id, price } = offer as Record<string, unknown>;
  return (
    typeof id === 'number' &&
    Number.isInteger(id) &&
    id > 0 &&
    typeof price === 'string' &&
    PRICE_PATTERN.test(price.trim())
  );
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { offers } = await req.json();
  if (!Array.isArray(offers) || offers.length === 0 || offers.length > MAX_OFFERS || !offers.every(isValidOffer)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  for (const offer of offers) {
    const { error } = await supabase
      .from('offers')
      .update({ price: offer.price.trim() })
      .eq('id', offer.id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
