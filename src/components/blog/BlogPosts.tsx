import Link from 'next/link';

async function fetchPosts() {
  const res = await fetch('https://j-filipiak.pl/api/wp-json/wp/v2/posts');

  if (!res.ok) {
    throw new Error('Upss... wystąpił błąd!');
  }

  return res.json();
}

export default async function BlogPosts() {
  const data = await fetchPosts();

  return (
    <div className='flex gap-10'>
      {data.map((post: any) => (
        <div className='border p-5' key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p className='hidden'>{post.content.rendered}</p>
          <Link href={`/blog/${post.slug}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}