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
            <h3 className='text-5xl text-balance pb-12 lg:pb-24'>
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
