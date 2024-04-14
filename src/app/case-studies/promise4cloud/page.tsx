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
          src='/img/portfolio/promise4cloud/promise4cloud-hero.webp'
          layout='fill'
          objectFit='cover'
          alt='promise4cloud'
          quality={100}
        ></Image>
      </section>

      <section className='pt-20  bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-start justify-start'>
            <div>
              <Link
                className='text-xl mt-3 mb-10 inline-flex hover:underline hover:underline-offset-[16px] transition-all'
                href='https://promise4cloud.com/'
                target='_blank'
              >
                Zobacz stronę na żywo ( https://promise4cloud.com )
              </Link>
              <h2 className='text-5xl text-balance pb-16 lg:pb-6'>
                Promise4cloud to ciekawy projekt, który miałem przyjemność
                zarówno zaprojektować od strony graficznej jak i finalnie
                wdrożyć go do systemu CMS WordPress
              </h2>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-6 lg:gap-10 lg:pb-24'>
              <div>
                <h3 className='text-lg'>
                  Strona została wdrożona w oparciu o builder 'Beaver Builder'.
                  Podjeliśmy tą decyzję wspólnie z klientem ponieważ jednym z
                  wymogów była możliwość edycji za pomocą buildera wizualnego
                </h3>
              </div>
              <div className='text-sm'>
                <p className='mb-10'>
                  Świadomie zrezygnowaliśmy z Elementora. Dziś okazuje się, że
                  był to strzał w dziesiątkę. Ze stroną nic się nie dzieje a
                  builder posiada to co potrzebne bez zbędnych dodatków
                </p>
              </div>
            </div>

            <div className='relative'>
              <Image
                src='/img/portfolio/promise4cloud/promise4cloud-img-1.webp'
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
                <p>Strona wdrożona w oparciu o Beaver Builder</p>
              </div>
            </li>
            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Backend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Stronę wdrożono autorsko do systemu WordPress na podstawie
                  motywu startowego Ocean Wp
                </p>
                <p>
                  Edycja treści została zrealizowana za pomocą Beaver Buildera
                  oraz pomocniczo Advanced Custom Fields. Strona zawiera
                  autorski system zapisu na webinary
                </p>
              </div>
            </li>

            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>
                Projekt graficzny
              </div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>Strona zaprototypowana i zaprojektowana w Figmie.</p>
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
