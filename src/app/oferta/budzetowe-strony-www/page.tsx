import Nav from '@/components/Nav';
import type { Metadata } from 'next';

import Hero from '@/components/oferta/budzetowe-strony-www/Hero';
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'Budżetowe strony www ',
  description:
    'Potrzebujesz prostej strony internetowej i nie masz wysokiego budżetu? Skorzystaj z mojej oferty na tanie strony www oparte o gotowe rozwiązania. Tanie strony www oparte o system WordPress to idealne rozwiązanie na start swojego biznesu',
};

export default function CheapSites() {
  return (
    <>
      <Nav />
      <Hero />
      <Script src='/js/confetti.js' />
    </>
  );
}
