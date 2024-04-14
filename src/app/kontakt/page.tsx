import Nav from '@/components/Nav';
import ContactHero from '@/components/kontakt/ContactHero';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Masz pytanie? Napisz do mnie lub zadzwoń już teraz! (+48) 663 568 828',
  // openGraph: {
  //   images: [ ],
  // }
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
