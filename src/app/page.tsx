'use client';

import Nav from '@/components/Nav';
import Cta from '@/components/Cta';
import Image from 'next/image';
import Link from 'next/link';

import { use, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {});

  return (
    <>
      <Nav />
      <section id='start' className='pt-72 pb-72 '>
        <div className='flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, top: 30 }}
            whileInView={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className='container flex flex-col items-endm relative  '
          >
            <div>
              <h1 className='text-5xl text-balance pb-10'>
                Tworzę i rozwijam aplikacje szyte na miarę. Obsługuję klientów
                kompleksowo - od koncepcji przez projekt graficzny, finalne
                wdrożenie oraz stałą obsługę. Pracuję tylko w najnowszych
                technologiach
              </h1>
            </div>

            <div className='flex lg:w-7/12 gap-10 text-sm'>
              <div>
                <h2>
                  Znamy narzędzia branżowe, jeśli chodzi o tworzenie
                  dedykowanych aplikacji (mobilnych i webowych). Oferujemy
                  znacznie więcej niż tylko umiejętności.
                </h2>
              </div>
              <div>
                Znamy narzędzia branżowe, jeśli chodzi o tworzenie dedykowanych
                aplikacji (mobilnych i webowych). Oferujemy znacznie więcej niż
                tylko umiejętności.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
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
                <h4 className='text-xl mt-14 text-balance'>
                  Projekty graficzne stron www oraz aplikacji mobilnych
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Zaprojektuję dla Ciebie unikalny projekt aplikacji mobilnej,
                  aplikacji webowej lub strony internetowej. Projekt będzie w
                  pełni profesjonalny, zgodny ze standardami UI/UX oraz w pełni
                  indywidualny
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
                <h4 className='text-xl mt-14 text-balance'>
                  Autorskie wdrażanie projektów graficznych do systemu WordPress
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Wdrożę dowolny projekt graficzny do systemu WordPress. Strona
                  będzie wdrożona w pełni responsywnie, zgodnie z najnowszymi
                  standardami. Zoptymalizowana pod kątem SEO oraz szybkości
                  ładowania.
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
                <h4 className='text-xl mt-14 text-balance'>
                  Dedykowane oprogramowanie usprawniające Twój biznes
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Autorskie oprogramowanie dla Twojego biznesu. Uwielbiam
                  tworzyć aplikację, które usprawniają codzienne działanie
                  firmy. Tworze również aplikację mobilne oraz takie, które
                  wykorzystują AI
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
          <h3 className='text-5xl pb-60'>Case studies</h3>
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
