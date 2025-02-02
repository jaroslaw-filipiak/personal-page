import Nav from '@/components/Nav';
import Cta from '@/components/Cta';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import Wp from '@/components/icons/Wp';
import Head from 'next/head';

import { Metadata } from 'next';

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
  title: 'Strony internetowe WordPress oraz aplikacje webowe',
  description:
    'Strony internetowe min. WordPress. Projekt graficzny, wdrożenie, skuteczne SEO. Aplikacje webowe, systemy CRM, konfiguratory, kalkulatory. Zadzwoń',
};

export default function Home() {
  const homepageSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jarosław Filipiak',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Kontakt',
      telephone: '+48 663 568 828',
      email: 'info@j-filipiak.pl',
      areaServed: 'PL',
      availableLanguage: ['Polish'],
      url: 'https://j-filipiak.pl/kontakt',
    },
    sameAs: [
      'https://www.facebook.com/jfilipiakpl',
      'https://www.linkedin.com/showcase/j-filipiak-pl',
      'https://twitter.com/twojafirma',
    ],
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
          __html: JSON.stringify(homepageSchema),
        }}
      />

      <Nav />
      <HomeHero />
      <section id='uslugi' className='bg-dark pt-20 pb-20 min-h-screen'>
        <div className='container  text-white'>
          <h3 className='text-5xl pb-40'>W tym mogę Tobie pomóc</h3>
          <div className='flex flex-col lg:flex-row items-start justify-start gap-10'>
            {/* projektowanie graficzne */}
            <div className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all '>
              <div>
                {/* <Wp /> */}

                <Image
                  width={147}
                  height={138}
                  loading='lazy'
                  src='/img/projektowanie-graficzne.svg'
                  alt='projektowanie-graficzne, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start justify-start gap-5 '>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Projektowanie graficzne: strony internetowe, aplikacje mobilne
                  oraz o wiele więcej.
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Pomogę również przy mniejszych kreacjach jak np: bannery
                  reklamowe pod Google Ads, ale również przy większych
                  projektach jak np: stworzenie porządnego landing page, który
                  będzie konwertował czy też aplikacji mobilnej.
                </p>
                <button className='underline underline-offset-[10px] lg:opacity-0 group-hover:opacity-100 transition-all hidden'>
                  więcej
                </button>
              </div>
            </div>
            {/* wp */}
            <div className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/wp.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5 group pb-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Strony internetowe z systemem CMS WordPress i nie tylko
                </h4>
                <p className='text-sm text-gray text-balance'>
                  WordPress to moja główna specjalność. Wdrażam projekty
                  graficzne z figmy/photoshopa do systemu WordPress w pełni
                  autorsko ale zadbam również o inne aspekty: SEO, szybkość
                  ładowania strony, responsywność. Potrzebujesz specjalisty od
                  WordPressa ? jestem do usług!.
                </p>

                <ul className='flex flex-col gap-4 mt-4'>
                  <li>
                    {' '}
                    <Link
                      href='oferta/budzetowe-strony-www/'
                      className='hover:underline underline-offset-[10px]  transition-all flex gap-3'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-number-1'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95' />
                        <path d='M3.69 8.56a9 9 0 0 0 -.69 3.44' />
                        <path d='M3.69 15.44a9 9 0 0 0 1.95 2.92' />
                        <path d='M8.56 20.31a9 9 0 0 0 3.44 .69' />
                        <path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95' />
                        <path d='M20.31 15.44a9 9 0 0 0 .69 -3.44' />
                        <path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92' />
                        <path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69' />
                        <path d='M10 10l2 -2v8' />
                      </svg>
                      Budżetowe strony internetowe
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <Link
                      href='oferta/administracja-stronami-internetowymi/'
                      className='hover:underline underline-offset-[10px]  transition-all flex gap-3'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-number-2'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95' />
                        <path d='M3.69 8.56a9 9 0 0 0 -.69 3.44' />
                        <path d='M3.69 15.44a9 9 0 0 0 1.95 2.92' />
                        <path d='M8.56 20.31a9 9 0 0 0 3.44 .69' />
                        <path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95' />
                        <path d='M20.31 15.44a9 9 0 0 0 .69 -3.44' />
                        <path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92' />
                        <path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69' />
                        <path d='M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3' />
                      </svg>
                      Stała opieka nad Twoją stroną
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <Link
                      href='oferta/usuwanie-wirusow-wordpress/'
                      className='hover:underline underline-offset-[10px]  transition-all flex gap-3'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-number-3'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95' />
                        <path d='M3.69 8.56a9 9 0 0 0 -.69 3.44' />
                        <path d='M3.69 15.44a9 9 0 0 0 1.95 2.92' />
                        <path d='M8.56 20.31a9 9 0 0 0 3.44 .69' />
                        <path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95' />
                        <path d='M20.31 15.44a9 9 0 0 0 .69 -3.44' />
                        <path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92' />
                        <path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69' />
                        <path d='M10 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5' />
                      </svg>{' '}
                      Usuwanie wirusów z WordPressa
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* wsparcie */}
            <div className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all '>
              <div>
                <Image
                  width={126}
                  height={125}
                  loading='lazy'
                  src='/img/wsparcie.svg'
                  alt='wsparcie informatyczne, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Dedykowane oprogramowanie usprawniające Twój biznes
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Tworze oprogramowanie, które wspiera biznes, wszelkiego
                  rodzaju konfiguratory, kalkulatory, systemy CRM. Przy
                  większych zleceniach pracuje w mniejszym teamie programistów.
                  Pracujemy full code / low code , wykorzystujemy również
                  potencjał AI
                </p>
                <button className='underline underline-offset-[10px] lg:opacity-0 group-hover:opacity-100 transition-all hidden'>
                  więcej
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='case-studies' className='bg-white pt-20 pb-20'>
        <div className='container'>
          <h3 className='text-5xl pb-2 '>Case studies</h3>
          <h3 className='text-xl pb-20'>Zobacz wybrane realizacje</h3>
          <div className='flex flex-col gap-10 lg:gap-40'>
            <div className='flex flex-col items-center justify-start gap-40'>
              <Link
                href='/case-studies/femmefab'
                className='case-study w-full group'
              >
                <Image
                  alt='Femmefab'
                  src='/img/portfolio/femmefab/femmefab-cover.webp'
                  width={1400}
                  height={790}
                  className='group-hover:opacity-80 transition-all'
                ></Image>

                <div className='pl-3 pr-3'>
                  <h4 className='text-lg mt-6 '>Femmefab.nl</h4>
                  <h5 className='text-2xl text-balance'>
                    Doskonały przykład, który pokazuje jak wyglądają autorskie,
                    dedykowane strony internetowe, lekkość, świeżość, nowoczesny
                    wygląd oraz przyjemne animacje.
                  </h5>
                </div>
              </Link>
            </div>

            <div className='flex flex-col items-center justify-start gap-40'>
              <Link
                href='/case-studies/siborsoft'
                className='case-study w-full group'
              >
                <Image
                  alt='Siborsoft'
                  src='/img/portfolio/siborsoft/siborsoft-cover.webp'
                  width={1400}
                  height={790}
                  className='group-hover:opacity-80 transition-all'
                ></Image>

                <div className='pl-3 pr-3'>
                  <h4 className='text-lg mt-6 '>Siborsoft</h4>
                  <h5 className='text-2xl text-balance'>
                    Czyli jak zrobić prostą stronę z supermocami ? Strona, która
                    nie przeładowuje się po wejściu na kolejne podstrony!
                  </h5>
                </div>
              </Link>
            </div>

            <div className='flex flex-col items-center justify-start gap-40'>
              <Link
                href='/case-studies/promise4cloud'
                className='case-study w-full group'
              >
                <Image
                  alt='Promise4cloud'
                  src='/img/portfolio/promise4cloud/promise4cloud-cover.webp'
                  width={1400}
                  height={790}
                  className='group-hover:opacity-80 transition-all'
                ></Image>

                <div className='pl-3 pr-3'>
                  <h4 className='text-lg mt-6 '>Proimise4cloud</h4>
                  <h5 className='text-2xl text-balance'>
                    Technologiczna strona tylko w takich odcieniach! Zobacz
                    ciekawą realizację gdzie byłem odpowiedzialny za projekt
                    oraz finalne wdrożenie.
                  </h5>
                </div>
              </Link>
            </div>

            <div className='flex flex-col items-center justify-start gap-40'>
              <Link
                href='/case-studies/23knots'
                className='case-study w-full group'
              >
                <Image
                  alt='23knots'
                  src='/img/portfolio/23knots/23knots-cover.webp'
                  width={1400}
                  height={790}
                  className='group-hover:opacity-80 transition-all'
                ></Image>

                <div className='pl-3 pr-3'>
                  <h4 className='text-lg mt-6 '>23knots</h4>
                  <h5 className='text-2xl text-balance'>
                    Prosty One page, który przykuwa uwagę! Również i przy
                    mniejszych zleceniach staram się zaskoczyć klienta i dać mu
                    coś więcej niż tylko zwykłą stronę jaką robią wszyscy inni.
                  </h5>
                </div>
              </Link>
            </div>

            <div className='flex flex-col items-center justify-start gap-40'>
              <Link
                href='/case-studies/skinoren'
                className='case-study w-full group'
              >
                <Image
                  alt='skinoren'
                  src='/img/portfolio/skinoren/skinoren-cover.webp'
                  width={1400}
                  height={790}
                  className='group-hover:opacity-80 transition-all'
                ></Image>

                <div className='pl-3 pr-3'>
                  <h4 className='text-lg mt-6 '>
                    Skinoren - Twój ekspert w leczeniu trądziku
                  </h4>
                  <h5 className='text-2xl text-balance'>
                    Autorskie wdrożenie na podstawie projektu graficznego.
                    Uwielbiam takie projekty i z przyjemnością i starannością
                    zamieniam je w pełni interaktywne strony www.
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-6 0 bg-white'></div>
      <Cta />
    </>
  );
}
