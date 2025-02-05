'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { trackFBEvent } from '@/utils/facebook';

const test = () => {
  trackFBEvent('click_pricing_page_heading_test', {
    value: 1.0,
    currency: 'PLN',
  });
};

export default function BlogHero() {
  return (
    <section
      id='start'
      className='pt-32 lg:pt-40 2xl:pt-72 pb-40 lg:pb-40 2xl:pb-72'
    >
      <div>
        <motion.div
          initial={{ opacity: 0, top: 30 }}
          whileInView={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className='container relative flex gap-20'
        >
          <div className='xl:w-8/12'>
            <h1 className='text-5xl text-balance pb-10'>Cennik</h1>
            <h2 className='text-xl max-w-6xl' onClick={test}>
              Indywidualne oferty potrzebują indywidualnej wyceny, nie mniej
              zanim zdecydujesz się na rozmowę sprawdź w jakich “widełkach”
              cenowych się poruszam
            </h2>
          </div>
          {/* <div className='w-6/12'>
            <Image
              src='/img/konfigurator-img.jpg'
              width={699}
              height={701}
              alt='ile kosztuje strona internetowa lub landing page? skorzystaj z mojego konfiguratora aby sprawdzić widełki cenowe'
            ></Image>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
