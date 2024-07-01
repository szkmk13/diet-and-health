import axios from 'axios';
import cheerio from 'cheerio';
import { log } from 'console';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#');
    const html = response.data;
    const $ = cheerio.load(html);
    const element = $('[data-nav-link="profile-reviews"]');
    const textContent = element.text();
    const matches = textContent.match(/\(([^)]+)\)/);
    const opinionsNumber = matches[1];
    var opinionString = ''
    const lastChar = opinionsNumber.slice(-1); // Get the last character of the string
    if (lastChar === '2' || lastChar === '3' || lastChar === '4') {
      opinionString = opinionsNumber + ' Opinie';
    } else {
      opinionString=  opinionsNumber + ' Opinii';
    }
    res.status(200).json({ opinionsCount: opinionString });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
