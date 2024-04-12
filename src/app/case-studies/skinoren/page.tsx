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
          src='/img/portfolio/skinoren/skinoren-hero.webp'
          layout='fill'
          objectFit='cover'
          alt='skinoren'
          quality={100}
        ></Image>
      </section>

      <section className='pt-20  bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-center justify-start'>
            <div>
              <h2 className='text-5xl text-balance pb-16 lg:pb-12'>
                Skinoren to strona, która miałem przyjemność wdrażać z projektu
                graficznego do systemu WordPress
              </h2>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-6 lg:gap-10 lg:pb-24'>
              <div>
                <h3 className='text-lg'>
                  Jak przy większości moich projektów wdrożenie strony było w
                  pełni autorskie. W tym przypadku zaczęło się od zakodowania
                  projektu graficznego, który został dostarczony przez
                  klienta.Następnie został on podpięty pod system CMS WordPress.
                </h3>
              </div>
            </div>

            <div className='relative'>
              <Image
                src='/img/portfolio/skinoren/skinoren-img-1.webp'
                width={1422}
                height={822}
                alt='image'
                className='mb-6 lg:mb-20'
              ></Image>
            </div>

            <div className='relative'>
              <Image
                src='/img/portfolio/skinoren/skinoren-img-2.webp'
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
            <li className='flex flex-col lg:flex-row items-start pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Backend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>Strona wdrożona autorsko do systemu WordPress</p>
                <p>Wykorzystano Advanced Custom Fields</p>
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
