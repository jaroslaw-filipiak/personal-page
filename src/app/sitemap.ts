import { MetadataRoute } from 'next';

interface Post {
  slug: string;
  // Add other properties as needed
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wp-json/wp/v2/posts`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }

  const posts: Post[] = await res.json();

  const postsEntries: MetadataRoute.Sitemap[] = posts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    // Add other properties like lastModified, changeFrequency, priority as needed
    lastModified: new Date().toISOString(), // Example: set current date as last modified
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const homepageEntry: MetadataRoute.Sitemap = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 1.0,
  };

  return [homepageEntry, ...postsEntries];
}
