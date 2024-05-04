// @ts-nocheck
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wp-json/wp/v2/posts`
  );
  const posts = await res.json();

  const postsEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, modified }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      lastModified: modified,
      priority: 1,
    })
  );
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/o-mnie`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/polityka-prywatnosci`,
      priority: 1,
    },
    ...postsEntries,
  ];
}
