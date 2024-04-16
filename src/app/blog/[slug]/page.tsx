import Nav from '@/components/Nav';
import Cta from '@/components/Cta';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
  description:
    'od 2017 r. wdrażam profesjonale strony internetowe, aplikacje mobilne oraz dedykowane oprogramowanie wspierające biznes. Sprawdź moje realizacje!',
};

export async function generateStaticParams() {
  const posts = await fetch(
    'https://j-filipiak.pl/api/wp-json/wp/v2/posts'
  ).then((res) => res.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
    title: string;
  };
}) {
  const post = await fetch(
    `https://j-filipiak.pl/api/wp-json/wp/v2/posts?slug=${params.slug}`
  ).then((res) => res.json());
  return (
    <>
      <Nav />

      <section
        id='start'
        className='pt-32 lg:pt-40 2xl:pt-72 lg:pb-40 2xl:pb-72  '
      >
        <div className='flex items-center justify-center'>
          <div className='container'>
            <div>
              <h1 className='text-5xl pb-3 text-balance'>
                {post[0].title.rendered}
              </h1>
              <h2 className='text-xl lg:text-3xl text-balance pb-10'>
                {post[0].acf.subtitle}
              </h2>
            </div>
            <div className='flex flex-col lg:flex-row lg:w-9/12 gap-10 text-lg'>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <main
        className='container'
        dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
      ></main>
    </>
  );
}
