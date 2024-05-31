import Nav from '@/components/Nav';
import ContactHero from '@/components/kontakt/ContactHero';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'j-filipiak.pl | Skontaktuj się',
  description:
    'Masz pytanie? Napisz do mnie lub zadzwoń już teraz! (+48) 663 568 828',
  keywords: [
    'projektowanie stron www',
    'projektowanie stron internetowych',
    'projektowanie stron internetowych w Wordpress',
    'Vue.js',
    'Wordpress',
    'Dedykowane oprogramowanie dla firm',
  ],
  generator: 'Next.js',
  openGraph: {
    images: ['ogimage-contact.jpg'],
  },
};

export default function Contact() {
  return (
    <>
      <Nav />
      <section
        id='kontakt'
        className='h-screen flex items-center justify-center bg-white'
      >
        <ContactHero />
      </section>
    </>
  );
}
