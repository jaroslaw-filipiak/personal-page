'use client';

import { motion } from 'framer-motion';

export default function HomeHero() {
  return (
    <section id='start' className='pt-40 lg:pt-72 pb-40 lg:pb-72 '>
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
              Stworzę da Ciebie niesamowitą stronę internetową. Żadnych
              kompromisów - tylko autorski i w pełni profesjonany proces: Od
              projektu graficznego po wdrożenie.
            </h1>
          </div>

          <div className='flex flex-col lg:flex-row lg:w-9/12 gap-10 text-lg'>
            <div>
              <h2>
                Pełna obsługa stron internetowych. Potrzebujesz specjalisty do
                optymalizacji szybkośći ? SEO ? Wdrożenia projektu graficznego
                do WordPressa ? Rozpocznijmy współpracę!
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
