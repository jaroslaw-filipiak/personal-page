'use client';

import Nav from '@/components/Nav';
import Link from 'next/link';
import Cta from '@/components/Cta';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Thing,
  WithContext,
  Offer,
  Person,
  Place,
  Organization,
  ContactPoint,
  WebPage,
} from 'schema-dts';

export const metadata: Metadata = {
  title: '23knots - Case Study projektu - j-filipiak.pl',
  description:
    '23knots to bardzo szybka strona internetowa,te case study pokazuje, że każda strona internetowa może być inna. Masz dosyć takich samych stron internetowych ?! Napisz do mnie już teraz!',
  keywords: [
    'projektowanie stron www w Figmie',
    'projektowanie stron internetowych',
    'auktorskie kodowanie stron www , html, js, css, sass, webpack, vite.js, next.js, vue.js, wordpress, node.js, dedykowane oprogramowanie dla firm, aplikacje webowe spa, aplikacje webowe pwa, aplikacje webowe ssr, szybkie strony internetowe',
    'Webpack',
    'Next.js',
    'Node.js',
    'WordPress',
    'Google Lighthouse',
    'Dedykowane oprogramowanie dla firm',
    'Aplikacje webowe SPA',
    'Aplikacje webowe PWA',
    'Aplikacje webowe SSR',
    'Szybkie strony internetowe',
  ],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    url: 'https://j-filipiak.pl/case-studies/23knots',
    title: '23knots - Case Study projektu - j-filipiak.pl',
    description:
      '23knots to bardzo szybka strona internnetowa,te case study pokazuje, że każda strona internetowa może być inna. Masz dosyć takich samych stron internetowych ?! Napisz do mnie już teraz!',
    images: ['ogimage-contact.jpg'],
    // TODO: og images per page
  },
};

export default function Home() {
  const caseStudySchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Case Study: 23knots',
    description: 'Zobacz case study projektu strony internetowej dla 23knots',
    url: 'https://j-filipiak.pl/case-studies/23knots',
    author: {
      '@type': 'Person',
      name: 'Jarosław Filipiak',
      url: 'https://j-filipiak.pl/about-me',
      sameAs: [
        'https://www.facebook.com/jfilipiakpl',
        'https://www.linkedin.com/showcase/j-filipiak-pl',
        'https://twitter.com/twojafirma',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Professional',
        telephone: '+48 663 568 828',
        email: 'info@j-filipiak.pl',
        areaServed: 'PL',
        availableLanguage: ['Polish'],
        url: 'https://j-filipiak.pl/kontakt',
      },
    },
    mainEntityOfPage: {
      '@type': 'CreativeWork',
      creator: {
        '@type': 'Person',
        name: 'Jarosław Filipiak',
      },
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://calendly.com/jaroslaw-filipiak',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform',
        ],
      },
      name: 'Zarezerwuj rozmowę',
    },
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema),
        }}
      />
      <Nav />
      <section
        id='case-study-hero'
        className=' bg-white h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen w-full relative transition-all'
      >
        <Image
          src='/img/portfolio/23knots/23knots-hero.webp'
          layout='fill'
          objectFit='cover'
          alt='23knots'
          quality={100}
        ></Image>
      </section>

      <section className='pt-20  bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-center justify-start'>
            <div>
              <Link
                className='text-xl mt-3 mb-10 inline-flex hover:underline hover:underline-offset-[16px] transition-all'
                href='https://23knots.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Zobacz stronę na żywo ( https://23knots.com )
              </Link>
              <h2 className='text-5xl text-balance pb-16 lg:pb-24'>
                23knots idealnie pokazuje, że każda strona może być inna. Masz
                dosyć takich samych stron internetowych ?! Napisz do mnie już
                teraz!
              </h2>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-6 lg:gap-10 lg:pb-24'>
              <div>
                <h3 className='text-lg'>
                  Ta strona nie wymaga żadnej uwagi od klienta ponieważ jest to
                  strona statyczna, która nie wymaga żadnej aktualizacji. Strona
                  jest szybka, lekka i przyjemna dla oka. Responsywna oraz
                  posiada ciekawe efekty wizualne.
                </h3>
              </div>
              <div className='text-sm'>
                <p className='mb-10'>
                  Prezentuje się niesamowice i z całą pewnością jest wizytówką
                  nie tylko dla firmy ale również dla mnie jako autora. Jestem
                  dumny z tego ponieważ byłem odpowiedzialny za całość projektu
                  od A do Z. Zrobiłem projekt graficzny, który następnie
                  zakodowałem.
                </p>
              </div>
            </div>

            <div className='relative'>
              <Image
                src='/img/portfolio/23knots/23knots-img-1.webp'
                width={1422}
                height={822}
                alt='image'
                className='mb-6 lg:mb-20'
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className='lg:pt-20 bg-white'>
        <div className='container'>
          <div>
            <h3 className='text-5xl text-balance pb-12 lg:pb-24 pt-10'>
              Kwestia technologiczna
            </h3>
          </div>
        </div>
        <div className='container'>
          <ul>
            <li className='flex flex-col lg:flex-row items-start pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>
                Projekt graficzny
              </div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>Został wykonany preze mnie we Figmie</p>
                <p>
                  Bliska współpraca z klientem na każdym etapie projektowania
                </p>
              </div>
            </li>
            <li className='flex flex-col lg:flex-row items-start pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Frontend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>Strona zakodowana z wykorzystaniem preprocesorów SASS</p>
                <p>Bundle za pomocą webpacka</p>
                <p>
                  Została ona utworzona na moim autorskim starterze do projektów
                  statycznych. Aktualnie został on wyparty przez vite.js
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='pt-40 pb-20 hidden'>
        <div className='container flex items-center justify-center'>
          <div className='title inline-flex text-center text-lg cursor-pointer hover:underline hover:underline-offset-[16px] transition-all'>
            Następny projekt:<strong>Lorem, ipsum dolor.</strong>
          </div>
        </div>
      </section>

      <Cta title='Masz ciekawy projekt? Potrzebujesz profesjonalnych usług ?! Napisz do mnie lub zadzwoń już teraz! (+48) 663 568 828' />
    </>
  );
}
