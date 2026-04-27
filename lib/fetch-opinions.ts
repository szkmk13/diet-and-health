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

export async function fetchZnanyLekarzData(): Promise<ZnanyLekarzData> {
  const url = 'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#';
  const opinieSelector =
    '#profile-reviews > div > div.card-body.pb-0 > div > div.w-100 > div';

  const response = await fetch(url, { next: { revalidate: 3600 } });
  const html = await response.text();
  const $ = cheerio.load(html);

  const opinionsCount = $(opinieSelector).text().trim();

  const opinionsUl = $('ul.standard-opinions-container.list-unstyled.mb-0');
  const opinions = opinionsUl
    .children('li')
    .slice(0, 6)
    .map((_, child) => {
      const el = $(child);
      return {
        name: el.find('[itemprop="author"]').text().trim() || null,
        opinion: el.find('[itemprop="reviewBody"]').text().trim() || null,
        date: el.find('[itemprop="datePublished"]').text().trim() || null,
      };
    })
    .get();

  return { opinionsCount, opinions };
}
