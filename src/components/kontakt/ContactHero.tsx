'use client';

import Link from 'next/link';
export default function ContactHero() {
  return (
    <div className='container relative'>
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
    </div>
  );
}
