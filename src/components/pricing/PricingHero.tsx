'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { trackFBEvent } from '@/utils/facebook';

const test = () => {
  trackFBEvent('click_pricing_page_heading_test', {
    value: 1.0,
    currency: 'PLN',
  });
};

export default function BlogHero() {
  return (
    <section id='start' className='pt-32 lg:pt-40 2xl:pt-72 pb-20'>
      <div>
        <div className='container relative flex flex-col xl:flex-row gap-10'>
          <div className='w-full xl:w-6/12 flex flex-col items-start justify-start gap-10'>
            <h1 className='text-5xl text-balance '>Cennik</h1>
            <h2 className='text-xl' onClick={test}>
              Indywidualne oferty potrzebują indywidualnej wyceny, nie mniej
              zanim zdecydujesz się na rozmowę sprawdź w jakich “widełkach”
              cenowych się poruszam
            </h2>
            <h3 className='text-xl'>
              lub skorzystaj z dedykowanego konfiguratora ceny strony www
            </h3>
            <div className='flex items-center gap-20'>
              <Link
                className='bg-dark hover:opacity-80 transition-all text-white block py-3 px-10 items-center justify-center text-center text-lg'
                href='/ile-kosztuje-strona-internetowa'
                onClick={() => {
                  window.dataLayer?.push({
                    event: 'pricing_configurator_button_click',
                    event_category: 'Click',
                    event_label: 'Pricing Hero',
                  });
                }}
              >
                Konfigurator ceny strony www
              </Link>
              <div>
                <svg
                  width='72'
                  height='22'
                  viewBox='0 0 72 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <mask
                    id='mask0_1998_1637'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='72'
                    height='22'
                  >
                    <path d='M72 0L0 0L0 21.4165L72 21.4165V0Z' fill='white' />
                  </mask>
                  <g mask='url(#mask0_1998_1637)'>
                    <path
                      d='M19.9059 11.9443C13.6941 11.9443 7.48235 11.8659 1.27059 11.7092C0.933611 11.7092 0.610428 11.5717 0.372147 11.3268C0.133865 11.0819 0 10.7497 0 10.4033C0 10.057 0.133865 9.72487 0.372147 9.47997C0.610428 9.23508 0.933611 9.09744 1.27059 9.09744C23.0739 9.64591 45.1737 9.22803 66.96 7.86124C67.297 7.84046 67.6282 7.95812 67.8808 8.18833C68.1333 8.41853 68.2866 8.74241 68.3068 9.08873C68.3271 9.43514 68.2125 9.77554 67.9886 10.0351C67.7646 10.2947 67.4494 10.4522 67.1125 10.473C51.4842 11.448 35.6612 11.9443 19.9059 11.9443Z'
                      fill='black'
                    />
                    <path
                      d='M56.3885 17.1332C56.0899 17.1328 55.8008 17.0244 55.5722 16.8267C55.3436 16.6291 55.19 16.3551 55.1385 16.0527C55.087 15.7503 55.1407 15.4389 55.2902 15.1732C55.4398 14.9075 55.6757 14.7045 55.9565 14.5998C59.9522 13.098 63.8657 11.3746 67.6798 9.43719C62.9992 7.42397 58.452 5.09741 54.0676 2.47248C53.9235 2.38559 53.7976 2.27039 53.6968 2.13345C53.596 1.99653 53.5226 1.84054 53.4805 1.67441C53.4384 1.50829 53.4286 1.33526 53.4515 1.16523C53.4745 0.995195 53.5299 0.831473 53.6144 0.683419C53.699 0.535366 53.811 0.405873 53.9443 0.30234C54.0775 0.198807 54.2293 0.123261 54.3909 0.080011C54.5525 0.0367608 54.7208 0.0266543 54.8864 0.0502712C55.0518 0.0738882 55.211 0.130766 55.3551 0.217655C60.4271 3.27943 65.723 5.93111 71.1951 8.14871C71.4232 8.23941 71.6209 8.3958 71.7645 8.59911C71.9082 8.80244 71.9917 9.04403 72.0052 9.29493C72.0186 9.54583 71.9613 9.79535 71.8401 10.0136C71.7189 10.2319 71.5391 10.4096 71.3222 10.5254C66.6374 13.0425 61.7957 15.2382 56.829 17.0984C56.6853 17.1365 56.5362 17.1482 56.3885 17.1332Z'
                      fill='black'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-6/12 '>
            <Image
              src='/img/konfigurator-img.jpg'
              width={699}
              height={701}
              alt='ile kosztuje strona internetowa lub landing page? skorzystaj z mojego konfiguratora aby sprawdzić widełki cenowe'
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
