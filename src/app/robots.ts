import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: '*',
        disallow: '/clients/',
      },
    ],
    sitemap: 'https:/j-filipiak.pl/sitemap.xml',
  };
}
