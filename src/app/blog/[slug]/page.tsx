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

// or Dynamic metadata
export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  const post = await fetch(
    `https://j-filipiak.pl/api/wp-json/wp/v2/posts?slug=${params.slug}`
  ).then((res) => res.json());

  return {
    title: post.title?.rendered,
  };
}

// export const metadata: Metadata = {
//   title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
//   description:
//     'od 2017 r. wdrażam profesjonale strony internetowe, aplikacje mobilne oraz dedykowane oprogramowanie wspierające biznes. Sprawdź moje realizacje!',
//   openGraph: {
//     title: 'Next.js',
//     description: 'The React Framework for the Web',
//     url: 'https://nextjs.org',
//     siteName: 'Next.js',
//     images: [
//       {
//         url: 'https://nextjs.org/og.png', // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: 'My custom alt',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// };

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
    </>
  );
}
