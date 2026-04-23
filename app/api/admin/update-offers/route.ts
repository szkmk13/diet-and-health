import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { offers } = await req.json();
  if (!Array.isArray(offers)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  console.log('[update-offers] offers to update:', JSON.stringify(offers));
  console.log('[update-offers] supabase url:', process.env.NEXT_PUBLIC_SUPABASE_URL);

  for (const offer of offers) {
    const { error, data, count } = await supabase
      .from('offers')
      .update({ price: offer.price })
      .eq('id', offer.id)
      .select();
    console.log(`[update-offers] id=${offer.id} price=${offer.price} → data:`, data, 'error:', error, 'count:', count);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
