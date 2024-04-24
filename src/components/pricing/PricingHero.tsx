'use client';

import { motion } from 'framer-motion';
export default function BlogHero() {
  return (
    <section
      id='start'
      className='pt-32 lg:pt-40 2xl:pt-72 pb-40 lg:pb-40 2xl:pb-72'
    >
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, top: 30 }}
          whileInView={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className='container flex flex-col items-start relative  '
        >
          <div>
            <h1 className='text-5xl text-balance pb-10'>Cennik</h1>
            <h2 className='text-2xl'>
              Indywidualne oferty potrzebują indywidualnej wyceny, nie mniej
              zanim zdecydujesz się na rozmowę sprawdź w jakich “widełkach”
              cenowych się poruszam
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
