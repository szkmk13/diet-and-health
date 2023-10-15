import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#');
    const html = response.data;
    const $ = cheerio.load(html);
    const opinionsListValues = [];
    $('.card-body.opinions-list .media.opinion.text-break').each((index, element) => {
      const name = $(element)
        .find('[data-dp-expander-auto-start-slice="50"][itemprop="name"]')
        .text()
        .replace(/\t|\n/g, '');
      const date = $(element).find('.small.text-muted[itemprop="datePublished"]').text();
      const opinion = $(element)
        .find('[data-test-id="opinion-comment"]')
        .text()
        .replace(/\t|\n/g, '');
      opinionsListValues.push({
        name,
        date,
        opinion,
      });
    });
    res.status(200).json({ comments: opinionsListValues.slice(0, 6) }); // Return the selected element
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
