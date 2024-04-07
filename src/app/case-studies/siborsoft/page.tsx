'use client';

import Nav from '@/components/Nav';
import Link from 'next/link';
import Cta from '@/components/Cta';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Nav />
      <section
        id='case-study-hero'
        className=' bg-white h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen w-full relative transition-all'
      >
        <Image
          src='/img/portfolio/siborsoft/siborsoft-hero.webp'
          layout='fill'
          objectFit='cover'
          alt='siborsoft'
          quality={100}
        ></Image>
      </section>

      <section className='pt-20  bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-center justify-start'>
            <div>
              <h2 className='text-5xl text-balance pb-16 lg:pb-24'>
                Siborsoft to bardzo prosta strona, nie mogło zabraknąć tutaj
                czegoś zaskakującego!
              </h2>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-6 lg:gap-10 lg:pb-24'>
              <div>
                <h3 className='text-lg'>
                  Dlatego też podjełem decyzję o sprawdzeniu jak zachowuje się
                  strona, która nie przeładowuje się po wejściu na kolejne
                  podstrony. Przypomne, że jest ona oparta o system CMS
                  WordPress także jest to dosyć unikalna funkcjonalność, która
                  wyróznia stronę na tle innych.
                </h3>
              </div>
              <div className='text-sm'>
                <p className='mb-10'>
                  Zakres prac obejmował zarówno projekt graficzny jak i jego
                  autorskie wdrożenie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='lg:pt-20 bg-white'>
        <div className='container'>
          <div>
            <h3 className='text-5xl text-balance pb-12 lg:pb-24'>
              Kwestia technologiczna
            </h3>
          </div>
        </div>
        <div className='container'>
          <ul>
            <li className='flex flex-col lg:flex-row items-start pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Frontend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>Strona zakodowana z wykorzystaniem preprocesorów SASS</p>
              </div>
            </li>
            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Backend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Stronę wdrożono autorsko do systemu WordPress na podstawie
                  motywu startowego _underscore.me
                </p>
                <p>
                  Panel administratora oraz edycja treści została zrealizowana
                  za pomocą Advanced Custom Fields
                </p>
              </div>
            </li>

            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Dodatkowe </div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Strona nie przeładowuje się w przypadku przejścia na kolejne
                  podstrony. Jest to standardowa funkcjonalnośc w przypadku
                  stron typu SPA (Single Page Application) które rówież mam w
                  swoje ofercie i portfolio. Jednakże wdrożenie takiej strony na
                  WordPressie było dosyć kłopotliwe. Nie mniej jednak udało się
                  to zrealizować.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='pt-40 pb-20 '>
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
