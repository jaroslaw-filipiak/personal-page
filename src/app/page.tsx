import Nav from '@/components/Nav';
import Cta from '@/components/Cta';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import Head from 'next/head';

import { Metadata } from 'next';

import {
  Thing,
  WithContext,
  Offer,
  Person,
  Place,
  Organization,
} from 'schema-dts';

export const metadata: Metadata = {
  title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
  description:
    'od 2017 r. wdrażam profesjonale strony internetowe, aplikacje mobilne oraz dedykowane oprogramowanie wspierające biznes. Sprawdź moje realizacje!',
};

export default function Home() {
  const jsonLd: WithContext<ContactPoint | Organization | Person | WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    mainEntity: {
      '@type': 'Person',
      name: 'Jarosław Filipiak',
      url: 'https://j-filipiak.pl',
      image: 'https://j-filipiak.pl/jaroslaw-filipiak-schema.jpg',
      sameAs: [
        'https://www.facebook.com/jfilipiakpl',
        'https://www.linkedin.com/showcase/j-filipiak-pl/',
        'https://twitter.com/twojafirma',
      ],
      jobTitle: 'Designer & FullStack Developer',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+48 663 568 828',
        contactType: 'Kontakt',
        availableLanguage: ['Polish'],
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'j-filipiak',
      url: 'https://j-filipiak.pl',
      logo: 'https://j-filipiak.pl/logo-schema.jpg',
    },
    url: 'https://j-filipiak.pl',
    name: 'j-filipiak.pl',
    description:
      'Zajmuje się projektowaniem oraz wdrażaniem stron interentowych, aplikacji mobilnych oraz pomagam firmom wspierając ich biznes w optymalizacji procesów firmowych z wykorzystaniem AI oraz automatyzacji. Tworzę rownież dedykowane oprogramowanie dla firm.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'O mnie',
          item: 'https://j-filipiak.pl/o-mnie',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Cennik',
          item: 'https://j-filipiak.pl/cennik',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Kontakt',
          item: 'https://j-filipiak.pl/kontakt',
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </Head>
      <Nav />
      <HomeHero />
      <section id='uslugi' className='bg-dark pt-20 pb-20 min-h-screen'>
        <div className='container  text-white'>
          <h3 className='text-5xl pb-40'>W tym mogę Tobie pomóc</h3>
          <div className='flex flex-col lg:flex-row items-stretch justify-between gap-10'>
            {/* projektowanie graficzne */}
            <div className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all '>
              <div>
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
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Autorskie wdrażanie projektów graficznych do systemu WordPress
                </h4>
                <p className='text-sm text-gray text-balance'>
                  WordPress to moja główna specjalność. Wdrażam projekty
                  graficzne z figmy/photoshopa do systemu WordPress w pełni
                  autorsko ale zadbam również o inne aspekty: SEO, szybkość
                  ładowania strony, responsywność. Potrzebujesz specjalisty od
                  WordPressa ? jestem do usług!.
                </p>
                <button className='underline underline-offset-[10px] lg:opacity-0 group-hover:opacity-100 transition-all hidden'>
                  więcej
                </button>
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
