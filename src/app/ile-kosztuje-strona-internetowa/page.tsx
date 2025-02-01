import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import { Metadata } from 'next';
import { WithContext, ContactPoint, Organization, Person } from 'schema-dts';
import PricingConfigurator from '@/components/pricingConfigurator/PricingConfigurator';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title:
    'ile kosztuje strona internetowa? Cennik, konfigurator - j-filipiak.pl',
  description:
    'Poznaj realne koszty stron internetowych, ile kosztuje strona internetowa w 2025 roku?, cena landing page, one page, wordpress',
  keywords: [
    'Ile kosztuje strona internetowa',
    'Cena landingpage',
    'Koszt strony internetowej',
    'Ile kosztuje strona na WordPress',
    'WordPress',
    'Strony internetowe cennik',
  ],
  generator: 'Next.js',
  openGraph: {
    images: ['ogimage-ile-kosztuje-strona-internetowa.jpg'],
  },
};

type ExtendedOrganization = Organization & {
  openingHours?: string[];
};

export default function howMuchDoesItCost() {
  const features = [
    'Dowiesz się ile kosztuje strona internetowa',
    'Dowiesz się co wpływa na różnice w cenie strony',
    'Dowiesz się jakie są różnicę w poszczególnych podejściach do projektowania stron',
    'Sam wybierzesz optymalny sposób wdrożenia strony internetowej i poznasz realne widełki cenowe',
  ];

  const jsonLd: WithContext<ExtendedOrganization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'J-Filipiak',
    url: 'https://j-filipiak.pl',
    logo: 'https://j-filipiak.pl//img/logo.svg',
    description:
      'Profesjonalne usługi tworzenia stron internetowych i rozwiązań webowych',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
      addressRegion: 'Wielkopolskie',
      addressLocality: 'Opalenica',
      postalCode: '64-330',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+48 663 568 828',
      email: 'info@j-filipiak.pl',
      areaServed: 'PL',
      availableLanguage: ['Polish'],
    },
    sameAs: [
      'https://www.facebook.com/jfilipiakpl',
      'https://www.linkedin.com/showcase/j-filipiak-pl',
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
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '52.309238',
        longitude: '16.413059',
      },
      geoRadius: '20000',
    },
  };

  return (
    <div className='how-much-cost-page'>
      <Nav />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key='how-much-costs-website-configurator-page-schema-jsonld'
      ></script>
      <Hero
        title='Ile kosztuje strona internetowa?'
        subtitle='Dlaczego podobna strona kosztuje 500 zł u jednego wykonawcy, a  5000 zł u kolejnego? Poznaj rzeczywiste składniki ceny i dowiedz się co wpływa na koszt strony internetowej korzystając z mojego konfiguratora'
        features={features}
        hasForm={true}
        formTitle='Potrzebujesz indywidualnej oferty? Porozmawiajmy'
        formId={536}
      />
      {/* Dlaczego ceny tak bardzo sie roznia */}
      <section className=' pt-32 lg:pt-40 2xl:pt-42 lg:pb-40 2xl:pb-42 bg-dark text-lightGray w-full'>
        <div className='container'>
          <h3 className='text-5xl max-w-5xl'>
            Dlaczego ceny stron internetowych tak bardzo się różnią?
          </h3>
          <h4 className='text-xl pt-10 pb-16 lg:pb-32'>
            Można powiedzieć, że strona internetowa kosztuje tyle co czerwony
            samochód i będzie w tym sporo prawdy, cena podobnej strony
            internetowej może róznić się diametralnie a na cene wpływa mnóstwo
            czynników. Kilka i tylko kilka z nich to:
          </h4>

          <div className='flex flex-col lg:flex-row'>
            {/* typ rozmiar i sposób wdrożenia col */}
            <div className='flex flex-col lg:border border-opacity-35 border-lightGray  '>
              <div className='flex flex-col gap-16'>
                {/*   Typ i rozmiar strony. */}
                <div className='flex flex-col items-start justify-start w-full   group relative top-0 transition-all '>
                  <div>
                    {/* <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_1.svg'
                  alt='wordpress, ikona informacyjna'
                /> */}
                  </div>
                  <div className='flex flex-col items-start gap-5 lg:pl-10'>
                    <h4 className='text-xl lg:mt-14 text-balance'>
                      Typ i rozmiar strony
                    </h4>
                    <p className='text-sm text-gray text-balance'>
                      Pod pojęciem strona internetowa kryje się zarówno prosta
                      strona wizytówka, strona typu landing page jak i ogromna
                      firmowa strona z mnóstwem podstron, czy też rozbudowany
                      sklep internetowy
                    </p>
                  </div>
                </div>

                {/*   Sposób wdrożenia
                 */}
                <div className='flex flex-col items-start justify-start w-full group relative top-0 transition-all lg:pl-10'>
                  <div>
                    {/* <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_2.svg'
                  alt='wordpress, ikona informacyjna'
                /> */}
                  </div>
                  <div className='flex flex-col items-start gap-5 pb-16'>
                    <h4 className='text-xl lg:mt-14 text-balance'>
                      Sposób wdrożenia
                    </h4>
                    <p className='text-sm text-gray text-balance'>
                      Strona internetowa może być wykonana z tzw: gotowego
                      szablonu lub zaprojektowana w pełnii indywidualnie.
                      Indywidualne strony już na samym wstepie kosztują parę
                      tysięcy więcej aniżeli strony na tzw: ‘Gotowcach’.
                      Dlaczego? Ponieważ dochodzi kolejna osoba do projektu -
                      grafik, który musi zaprojektować stronę od zera co
                      generuje dodatkowe godziny pracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*   Funkcjonalności strony */}
            <div className='flex flex-col lg:pl-10 pb-16 lg:pb-0'>
              <div>
                {/* <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_2.svg'
                  alt='wordpress, ikona informacyjna'
                /> */}
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Funkcjonalności strony
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Tutaj jest w czym wybierać. Wsród funkcjonalności strony
                  możemy wyróznic chociażby blog, newsletter, panel klienta,
                  rozbudowane formularze, automatyzacje, przystosowanie pod SEO
                  oraz o wiele więcej. Każda funkcjonalnośc to dodatkowe koszty.
                  Dodatkową komplikacją w wycenie jest fakt, że tutaj również
                  mówimy o różnych widełkach cenowych. Rozbudowany formularz
                  może kosztować + 1000 zł podczas gdy integracja z systemem CRM
                  klienta może kosztować + 4000 zł
                </p>
              </div>
            </div>
          </div>

          <div className='spacer border-b-[1px] border-lightGray hidden lg:flex mt-32 lg:mb-6 border-opacity-35'></div>

          <div className='flex flex-col lg:flex-row gap-16 lg:gap-0'>
            {/*  Indywidualne wymagania klienta */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12 xl:pl-10 xl:pr-10 group relative top-0 transition-all '>
              <div></div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Indywidualne wymagania klienta
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Strona internetowa musi być dostosowana do Twojego biznesu
                  oraz wymagań a one również są indywidualne. Wsród
                  najczęstszych wymagań klientów możemy wyróżnić: szybkość
                  wczytywania, dostosowanie do WCAG, autorskie konfiguratory
                  wycen czy też implementacje po API np: dwukierunkowe
                  synchronizowanie ofert z np: asari cms itp - każde wymaganie
                  to dodatkowa ilośc roboczhogidzn, które wpływają na cene
                  końcową
                </p>
              </div>
            </div>

            {/*   Opieka techniczna */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12 xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div></div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Opieka techniczna
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Tak jak samochód wymaga od czasu do czasu przeglądu tak strona
                  internetowa wymaga stałej administracji. Zwłaszcza w
                  kontekscie bezpieczeństwa. Tutaj również nalezy liczyc się z
                  róznymi planami cenowymi
                </p>
              </div>
            </div>
          </div>

          <div className='spacer border-b-[1px] border-lightGray mt-20 mb-6 border-opacity-35'></div>

          <div>
            <h6 className='text-xl text-center pt-20 pb-16 lg:pb-0'>
              To tylko kilka ze składowych, które wpływają na cenę strony
              internetowej. A to tylko kilka przykładów. Dlatego też warto
              poprosić potencjalnego wykonawcę o szczegółową wycenę oraz
              informację dotyczącą tzw: stacku technologicznego czyli
              technologii, które zostaną użyte do wykonania strony internetowej.
            </h6>
          </div>
        </div>
      </section>
      {/* Konfigurator */}
      <div className='lg:pt-[100px]'></div>
      <section className='pb-16 lg:pt-40 2xl:pt-42 lg:pb-40 2xl:pb-42 w-full'>
        <div className='container'>
          <h3 className='text-5xl pt-16 lg:pt-0'>
            Ile kosztuje strona internetowa? skorzystaj z konfiguratora i
            dowiedz się jaki budżet powinieneś zabezpieczyć na jej wykonanie
          </h3>
          <h4 className='text-lg mt-6 max-w-5xl'>
            Ten konfigurator pomoże Ci zorientować się w przedziale cenowym
            Twojego projektu. Pamiętaj, że ostateczna wycena może się różnić w
            zależności od szczegółowych wymagań.Gwarantuje, że konfigurator jako
            ważna część tej strony będzie stale aktualizowany i ulepszany.
          </h4>
        </div>
      </section>
      <PricingConfigurator />
    </div>
  );
}
