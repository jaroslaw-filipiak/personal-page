import Nav from '@/components/Nav';
import ContactHero from '@/components/kontakt/ContactHero';

import type { Metadata } from 'next';
import { WithContext, ContactPoint, Organization, Person } from 'schema-dts';

export const metadata: Metadata = {
  title: 'j-filipiak.pl | Skontaktuj się ze mną i uzyskaj wycene w 24h!',
  description:
    'Porozmawiajmy o Twoim projekcie. Napisz do mnie lub zadzwoń już teraz! (+48) 663 568 828',
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
  const contactSchema: WithContext<ContactPoint | Organization | Person> = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    telephone: '+48 663 568 828',
    email: 'info@j-filipiak.pl',
    areaServed: 'PL',
    availableLanguage: ['Polish'],
    url: 'https://j-filipiak.pl/kontakt',
    sameAs: [
      'https://www.facebook.com/jfilipiakpl',
      'https://www.linkedin.com/showcase/j-filipiak-pl/',
      'https://twitter.com/twojafirma',
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://calendly.com/jaroslaw-filipiak',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform',
        ],
      },
      name: 'Zarezerwuj rozmowę',
    },
  };
  return (
    <>
      <Nav />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      ></script>
      <section
        id='kontakt'
        className='h-screen flex items-center justify-center bg-white'
      >
        <ContactHero />
      </section>
    </>
  );
}
