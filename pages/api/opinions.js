import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
    res.status(200).json({ comments: [] });
}

//   try {
//     const response = await axios.get('https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#');
//     const html = response.data;
//     const $ = cheerio.load(html);
//     const opinionsListValues = [];
//     $('.card-body.opinions-list .media.opinion.text-break').each((index, element) => {
//       console.log(element)
//       const name = $(element)
//         .find('[data-dp-expander-auto-start-slice="50"][itemprop="name"]')
//         .text()
//         .replace(/\t|\n/g, '');
//       const date = $(element).find('.small.text-muted[itemprop="datePublished"]').text();
//       const opinion = $(element)
//         .find('[data-test-id="opinion-comment"]')
//         .text()
//         .replace(/\t|\n/g, '');
//       opinionsListValues.push({
//         name,
//         date,
//         opinion,
//       });
//     });
//     // Here add new fitlers for bad opinions
//     function filterBadOpinions(dict) {
//       return dict.name != 'Nie Polecam';
//     }
//     const filtered = opinionsListValues.filter(filterBadOpinions).slice(0, 6);

//     res.status(200).json({ comments: filtered });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
// document.querySelector("#profile-reviews > div > div.card-body.opinions-list > div:nth-child(1) > ul")

// /html/body/div[4]/div[3]/main/div[2]/div[1]/div[1]/section[5]/div/div[7]/div[1]/ul
// #profile-reviews > div > div.card-body.opinions-list > div:nth-child(1) > ul
// //*[@id="profile-reviews"]/div/div[7]/div[1]/ul