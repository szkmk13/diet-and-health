import * as cheerio from 'cheerio';

export interface Opinion {
  name: string | null;
  opinion: string | null;
  date: string | null;
}

export interface ZnanyLekarzData {
  opinionsCount: string;
  opinions: Opinion[];
}

const PROFILE_URL = 'https://www.znanylekarz.pl/profil/monika-skibicka';
const MAX_OPINIONS = 6;

export async function fetchZnanyLekarzData(): Promise<ZnanyLekarzData> {
  const opinieSelector =
    '#profile-reviews > div > div.card-body.pb-0 > div > div.w-100 > div';

  const response = await fetch(PROFILE_URL, { next: { revalidate: 3600 } });
  if (!response.ok) {
    throw new Error(`ZnanyLekarz responded with ${response.status}`);
  }
  const html = await response.text();
  const $ = cheerio.load(html);

  const rawCount = $(opinieSelector).text().trim();
  const opinionsCount = rawCount.match(/\d+/)?.[0] ?? '100+';

  const opinions = $('[data-test-id="opinion-block"]')
    .map((_, block) => {
      const el = $(block);
      return {
        name: el.find('h4 span').first().text().trim() || null,
        opinion: el.find('[data-test-id="opinion-comment"]').first().text().trim() || null,
        date: el.find('time').first().text().trim() || null,
      };
    })
    .get()
    .filter((o) => o.opinion)
    .slice(0, MAX_OPINIONS);

  return { opinionsCount, opinions };
}
