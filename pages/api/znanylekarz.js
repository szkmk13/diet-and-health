import axios from 'axios';
import cheerio from 'cheerio'; 

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#');
    const html = response.data;
    const $ = cheerio.load(html); 
    const element = $('[data-nav-id="profile-reviews"]');
    const textContent = element.text(); 
    const matches = textContent.match(/\(([^)]+)\)/);
    const opinionsNumber = matches[1];
    res.status(200).json({ opinionsCount: opinionsNumber }); 
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
