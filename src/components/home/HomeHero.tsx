'use client';

import { motion } from 'motion/react';

export default function HomeHero() {
  return (
    <section
      id='start'
      className='pt-32 lg:pt-40 2xl:pt-72 pb-40 lg:pb-40 2xl:pb-72'
      style={{
        backgroundImage: 'url(/img/hero--main.jpg)',
        backgroundSize: ' cover',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex items-center justify-center'>
        <div className='container flex flex-col items-start relative'>
          <div className='sm:w-9/12'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-5xl text-balance pb-10 '
            >
              Profesjonalne strony internetowe, które przyciągają klientów
            </motion.h1>
          </div>

          <div className='flex flex-col lg:flex-row lg:w-9/12 gap-10 text-lg'>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Strony internetowe oparte min. o system WordPress.
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Optymalizacja SEO
              </motion.h3>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Piekielnie szybkie i stabilne strony
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
