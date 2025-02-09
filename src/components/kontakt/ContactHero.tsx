'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <div className='container relative'>
      <motion.div
        initial={{ opacity: 0, top: 30 }}
        whileInView={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', duration: 1 }}
        className='container relative flex gap-10'
      >
        <h1 className='text-5xl text-balance'>
          Czas na nowy projekt? Potrzebujesz stałego, konkretnego partnera do
          współpracy projektowej? napisz do mnie na&nbsp;
          <Link
            className='text-dark opacity-20 hover:opacity-100 transition-opacity duration-300'
            href='mailto:info@j-filipiak.pl?subject=Czas na nowy projekt&body=Cześć Jarek, chciałbym porozmawiać o świetnym projekcie.'
          >
            info@j-filipiak.pl
          </Link>
          , zadzwoń{' '}
          <Link
            className='text-dark opacity-20 hover:opacity-100 transition-opacity duration-300'
            href='tel:663 568 828'
          >
            663 568 828
          </Link>{' '}
          lub umów&nbsp;
          <Link
            className='text-dark opacity-20 hover:opacity-100 transition-opacity duration-300'
            href='https://calendly.com/jaroslaw-filipiak'
          >
            rozmowę online klikając tutaj
          </Link>
        </h1>
      </motion.div>
    </div>
  );
}
