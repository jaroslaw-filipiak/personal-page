import Link from 'next/link';
import DateFormatter from '@/components/blog/Date';

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
                <div className='flex items-center gap-1 mt-2 mb-6'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='icon icon-tabler icons-tabler-filled icon-tabler-clock-hour-9 fill-dark'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.883 9.653a1 1 0 0 0 .883 -.993v-5a1 1 0 0 0 -2 0v4h-2.5a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h3.5z' />
                    </svg>
                  </span>
                  <DateFormatter
                    dateString={post?.modified ? post?.modified : post.date}
                  />
                </div>
                <h4 className='text-lg'>{post?.acf?.subtitle}</h4>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
