import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/login', '/api/'],
    },
    sitemap: 'https://diet-and-health.pl/sitemap.xml',
  };
}
