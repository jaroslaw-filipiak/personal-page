import Image from 'next/image';
import Cta from '@/components/Cta';

import type { Metadata } from 'next';
import { WithContext, Person } from 'schema-dts';

export const metadata: Metadata = {
  title: 'O mnie - Jarosław Filipiak',
  description:
    'Projektuję oraz wdrażam strony internetowe WordPress, Vue.js, Next.js oraz aplikacje webowe SPA (Vue.js, Next.js, Node.js, Mongo DB). Dowiedz się więcej o mnie!',
  keywords: [
    'projektowanie stron www',
    'projektowanie stron internetowych',
    'projektowanie stron internetowych w Wordpress',
    'Vue.js',
    'Next.js',
    'Node.js',
    'WordPress',
    'Dedykowane oprogramowanie dla firm',
    'Aplikacje webowe SPA',
    'Aplikacje webowe PWA',
    'Aplikacje webowe SSR',
  ],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    url: 'https://j-filipiak.pl/o-mnie',
    title: 'O mnie - Jarosław Filipiak',
    description:
      'Projektuję oraz wdrażam strony internetowe WordPress, Vue.js, Next.js oraz aplikacje webowe SPA (Vue.js, Next.js, Node.js, Mongo DB). Dowiedz się więcej o mnie!',
    images: ['ogimage-contact.jpg'],
  },
};
export default function AboutMe() {
  const aboutMeSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jarosław Filipiak',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Kontakt',
      telephone: '+48 663 568 828',
      email: 'info@j-filipiak.pl',
      areaServed: 'PL',
      availableLanguage: ['Polish'],
      url: 'https://j-filipiak.pl/kontakt',
    },
    sameAs: [
      'https://www.facebook.com/jfilipiakpl',
      'https://www.linkedin.com/showcase/j-filipiak-pl',
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutMeSchema) }}
        key='amout-me-page-schema-jsonld'
      ></script>
      <section
        id='about'
        className='min-h-screen flex items-center justify-center bg-dark text-white'
      >
        <div className='container'>
          <h1 className='text-5xl text-balance'>
            Nazywam się Jarosław Filipiak, jestem doświadczonym grafikiem oraz
            front-end developerem. Specjalizuje się w projektowaniu oraz
            kodowaniu stron internetowych a także kompleksowych aplikacji
            webowych.
          </h1>
        </div>
      </section>
      <section className='pt-20 pb-10 lg:pb-40 bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-end'>
            <div>
              <h2 className='text-5xl text-balance pb-10 lg:pb-24'>
                Posiadam solidny zestaw umiejętności i technologii związanych z
                całą otoczką procesu projektowania.
              </h2>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-10 '>
              <div>
                <h3 className='text-lg'>
                  Rozpoczynałem swoją przygodę jako grafik komputerowy, w
                  trakcie ponad 10 letniej przygody zdobyłem kompetencje, które
                  doprowadziły mnie do pracy jako front-end developer. A to
                  jeszcze nie koniec mojej przygody. Uważam, że człowiek musi
                  się rozwijać, bo gdy się nie rozwija to tak naprawdę się
                  cofa... ponieważ świat idzie do przodu.
                </h3>
              </div>
              <div className='text-sm'>
                <p className='mb-10'>
                  Doświadczenie zdobywałem zarówno w większych agencjach jak i
                  obsługując klientów “mniej technicznych”Uważnie wsłuchuję się
                  w potrzeby każdego klienta. Pracując jako freelancer mam tę
                  swobodę że mogę zasugerować więcej różnych rozwiązań/wariantów
                  wdrożenia projektu informatycznego aniżeli agencja, która
                  jednak jest mocno zunifikowana na jedym stacku
                  technologicznym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' bg-white mb-20'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-start'>
            <div></div>

            <div
              id='dlaczego-ja'
              className='flex flex-col lg:flex-row items-center justify-between gap-10'
            >
              <div className='w-full lg:w-6/12 xl:w-4/12 pb-10 lg:pb-0'>
                <Image
                  src='/img/jaroslaw-filipiak.webp'
                  alt='Jarosław Filipiak'
                  width={434}
                  height={688}
                ></Image>
              </div>
              <div className='lg:flex-1'>
                <h3 className='text-5xl text-balance pb-10 lg:pb-24'>
                  Oferuje indywidualne , partnerskie podejście w kameralnym
                  gronie, ogromne doświadczenie oraz jasne warunki współpracy.
                </h3>
                <h4 className='text-lg'>
                  Współpraca bezpośrednio ze mną to gwarancja, że Twoje zlecenie
                  zostanie wykonane z najwyższą starannością, zgodnie z
                  najnowszymi trendami. Masz również pewność szybkiego przepływu
                  informacji oraz tego, że kwota na fakturze nie będzie zawyżona
                  o koszty aparatu administracyjnego, wynajmu biura czy też
                  kosztów floty samochodowej itp.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
