import * as cheerio from "cheerio";

export default async function handler(req, res) {
    const url = "https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
    const opinieSelector = '#profile-reviews > div > div.card-body.pb-0 > div > div.w-100 > div'
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        const opinieElement = $(opinieSelector);
        const opinionsCount = opinieElement.text().trim()

        const opinionsUl = $("ul.standard-opinions-container.list-unstyled.mb-0");
        const firstFiveLis = opinionsUl.children('li').slice(0, 5);
        const opinions = firstFiveLis.map((i, child) => {
            const el = $(child);
            return {
                name: el.find('[itemprop="author"]').text().trim() || null,
                text: el.find('[itemprop="reviewBody"]').text().trim() || null,
                date: el.find('[itemprop="datePublished"]').text().trim() || null,
            };
        }).get(); 
        res.json({ opinionsCount, opinions });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch or parse HTML" });
    }
}
