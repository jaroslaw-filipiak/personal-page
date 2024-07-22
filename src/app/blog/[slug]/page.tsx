import Nav from '@/components/Nav';
import Cta from '@/components/Cta';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import Script from 'next/script';

import { Metadata } from 'next';
import MailerLiteNewsletterForm from '@/components/sidebar/MailerLiteNewsletterForm';
import LHbanner from '@/components/sidebar/LHbanner';
import Share from '@/components/blog/Share';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params.slug;

  const post = await fetch(
    `https://j-filipiak.pl/api/wp-json/wp/v2/posts?slug=${slug}`
  ).then((res) => res.json());

  return {
    title: post[0].title?.rendered,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

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

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post[0].title.rendered,
    image: post[0].acf.main_photo,
    author: {
      '@type': 'Person',
      name: post[0].author_name, // assuming you have author_name field in ACF
    },
    datePublished: post[0].date,
    articleBody: post[0].content.rendered,
    publisher: {
      '@type': 'Organization',
      name: 'Your Site Name',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-site-url.com/logo.jpg', // replace with your actual logo URL
      },
    },
  };

  return (
    <>
      <Nav />
      <section id='start' className='pt-32 lg:pt-40 2xl:pt-48 lg:pb-20'>
        <div className='flex items-center justify-center'>
          <div className='container'>
            <div className='flex flex-col items-stretch justify-center'>
              <h1 className='text-5xl pb-3 lg:pb-4 text-balance text-center'>
                {post[0].title.rendered}
              </h1>
              <h2 className='text-xl lg:text-xl text-balance pb-10 lg:pb-20 opacity-60 text-center'>
                {post[0].acf.subtitle}
              </h2>
              <img src={post[0].acf.main_photo} alt={params.slug} />
            </div>
          </div>
        </div>
      </section>

      <div className='wrapper container flex items-start single-blog'>
        <main className='container p-0 w-full lg:w-7/12 xl:w-9/12 lg:pr-16 flex flex-col items-start'>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
          ></div>
          <Share />
        </main>

        <aside className='hidden lg:block lg:w-5/12 xl:w-3/12 sticky top-14'>
          <div>
            <MailerLiteNewsletterForm />
            {/* <LHbanner /> */}
          </div>
        </aside>
      </div>

      <Cta />
      <Script src='/js/mailerlite.js' />
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
