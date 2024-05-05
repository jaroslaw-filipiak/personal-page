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
    <section className='container grid gap-4 grid-cols-1 lg:grid-cols-2 pb-10 lg:pb-24'>
      {data.map((post: any) => (
        <article className='p-5 group' key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <img
              loading='lazy'
              className='mb-3 group-hover:opacity-65 transition-all opacity-100'
              src={
                post.featured_media_src_url ? post.featured_media_src_url : ''
              }
              alt={post.title.rendered}
            />

            <div className='max-w-[610px] flex flex-col gap-3'>
              <div className='flex flex-col'>
                <h3 className='text-2xl'>{post.title.rendered}</h3>
                <h4 className='text-lg'>{post?.acf?.subtitle}</h4>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
