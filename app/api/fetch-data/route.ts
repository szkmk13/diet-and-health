import { fetchZnanyLekarzData } from '@/lib/fetch-opinions';

export async function GET() {
  try {
    const data = await fetchZnanyLekarzData();
    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: 'Failed to fetch or parse HTML' },
      { status: 500 }
    );
  }
}
