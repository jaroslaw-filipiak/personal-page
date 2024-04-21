import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wp-json/wp/v2/posts`
  );
  const posts = await res;

  //@ts-ignore
  const postsEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    // lastModified: new Date(),
    // changeFrequency: 'yearly',
    //=== priority: 1,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...postsEntries,
  ];
}
