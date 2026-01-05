import * as cheerio from 'cheerio';

export async function GET() {
  const url = 'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#';
  const opinieSelector =
    '#profile-reviews > div > div.card-body.pb-0 > div > div.w-100 > div';

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const opinieElement = $(opinieSelector);
    const opinionsCount = opinieElement.text().trim();

    const opinionsUl = $('ul.standard-opinions-container.list-unstyled.mb-0');
    const firstFiveLis = opinionsUl.children('li').slice(0, 6);

    const opinions = firstFiveLis
      .map((i, child) => {
        const el = $(child);
        return {
          name: el.find('[itemprop="author"]').text().trim() || null,
          opinion: el.find('[itemprop="reviewBody"]').text().trim() || null,
          date: el.find('[itemprop="datePublished"]').text().trim() || null,
        };
      })
      .get();

    return Response.json({ opinionsCount, opinions });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: 'Failed to fetch or parse HTML' },
      { status: 500 }
    );
  }
}
