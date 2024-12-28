import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Script from 'next/script';
import FaqItem from '@/components/FaqItem';
import Cta from '@/components/Cta';
import Head from 'next/head';

import { TestimonialsData } from '@/js/testimonials';
import { WithContext, Offer, Person, Service, Place } from 'schema-dts';
import { NextSeo } from 'next-seo';

export const metadata: Metadata = {
  title: 'Usuwanie wirusów WordPress - j-filipiak.pl',
  description:
    'Skuteczne usuwanie wirusów oraz zabezpieczanie stron WordPress. Szybki czas realizacji oraz gwarancja bezpieczeństwa. Sprawdź ofertę!',
};

export default function CheapSites() {
  const MallwareRemovalWebsitesSchema: WithContext<Offer> = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Usuwanie wirusów WordPress - j-filipiak.pl',
    description:
      'Skuteczne usuwanie wirusów oraz zabezpieczanie stron WordPress. Szybki czas realizacji oraz gwarancja bezpieczeństwa. Sprawdź ofertę!',
    url: 'https://j-filipiak.pl/oferta/usuwanie-wirusow-wordpress',
    priceCurrency: 'PLN',
    price: '899.00',
    seller: {
      '@type': 'Person',
      name: 'Jarosław Filipiak',
      url: 'https://j-filipiak.pl',
      image: 'https://j-filipiak.pl/jaroslaw-filipiak-schema.jpg',
      sameAs: [
        'https://www.facebook.com/jfilipiakpl',
        'https://www.linkedin.com/showcase/j-filipiak-pl',
        'https://twitter.com/twojafirma',
      ],
      jobTitle: 'Designer & FullStack Developer',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+48 663 568 828',
        contactType: 'Kontakt',
        availableLanguage: ['Polish'],
      },
    },
  };
  type FaqItem = {
    id: number;
    title: string;
    content: string;
    active: boolean;
  };
  type ProcessItem = {
    id: number;
    title: string;
    content: string;
    active: boolean;
  };

  const allFaqItems: Array<FaqItem> = [
    {
      id: 3,
      title: 'Ile to kosztuje? Czy są jakieś dodatkowe opłaty?',
      content:
        'Oferta usuwania wirusów ze storn opartych o WordPress jest wyceniania indywidualnie w zależności od rozmiaru projektu, ilości wtyczek, ilości stron na serwerze oraz paru innych czynników. Minimalne koszty z jakimi należy się liczyć do 699zł netto. Wszystkie koszty są jasno przedstawione w umowie, nie ma żadnych ukrytych opłat.',
      active: false,
    },
    {
      id: 4,
      title: 'Jakie są objawy zainfekowanej strony?',
      content:
        'Objawy mogą obejmować spowolnienie działania strony, pojawienie się nieznanych treści, przekierowania do złośliwych stron, a także komunikaty o zagrożeniach od przeglądarek lub wyszukiwarek.”',
      active: false,
    },

    {
      id: 6,
      title: 'Czy mogę samodzielnie usunąć wirusa z mojej strony?',
      content:
        'Choć istnieją narzędzia do samodzielnego usuwania malware, zalecamy skorzystanie z profesjonalnej pomocy, aby upewnić się, że wszystkie zagrożenia zostały całkowicie usunięte i nie doszło do dalszych naruszeń. W przypadku nieprawidłowego usunięcia wirusa, strona może zostać zablokowana przez Google lub inne wyszukiwarki a podatnośc może wrócić po pewnym czasie.',
      active: false,
    },
    {
      id: 7,
      title: 'Jak długo trwa proces usuwania wirusów z WordPressa?',
      content:
        'Proces usuwania wirusów zwykle trwa od 1 do 3 dni roboczych, w zależności od stopnia zainfekowania strony.',
      active: false,
    },

    {
      id: 10,
      title: 'Czy po usunięciu wirusa moja strona będzie bezpieczna?',
      content: `Po usunięciu wirusów wdrażamy dodatkowe zabezpieczenia, aby zminimalizować ryzyko przyszłych ataków, jednak regularne aktualizacje i audyty są kluczowe dla długoterminowego bezpieczeństwa. Warto rozważyć skorzystanie z ofery na stałą opiekę nad stroną, która zapewni ci spokój i bezpieczeństwo. Jeżeli chcesz się dowiedzieć więcej zajrzyj do <a target='_blank' href="https://j-filipiak.pl/oferta/administracja-stronami-internetowymi/"/>dedykownej oferty na opiekę nad stroną.</a> `,
      active: false,
    },
    {
      id: 11,
      title: 'Czy będę musiał zmienić hasła po usunięciu wirusa?',
      content:
        'Tak, zalecamy zmianę wszystkich haseł dostępowych do panelu administracyjnego, bazy danych, FTP oraz innych kont powiązanych z Twoją stroną. Zmiana haseł jest kluczowa dla zapewnienia bezpieczeństwa po ataku. Dodatko zalecamy wdrożenie dwuetapowej weryfikacji logowania oraz zabezpieczenie strony przed atakami brute-force.',
      active: false,
    },
    {
      id: 12,
      title:
        'Czy moja strona zostanie wyłączona podczas procesu usuwania wirusa?',
      content:
        'Tymczasowe wyłączenie strony jest niezbędne, aby zapewnić skuteczne usunięcie zagrożenia. W trakcie prac nad stroną na serwerze będzie widniała informacja o konserwacji. Po zakończeniu prac strona zostanie przywrócona do pełnej funkcjonalności.',
      active: false,
    },
    {
      id: 13,
      title: 'Czy mogę zlecić stały monitoring mojej strony?',
      content: `Tak, oferuję usługę stałego monitoringu, który pozwala na szybką reakcję w przypadku wykrycia jakichkolwiek zagrożeń. Dzięki temu Twoja strona będzie stale chroniona.
`,
      active: false,
    },
    {
      id: 14,
      title: 'Czy mogę zlecić również inne usługi związane z WordPressem?',
      content: `Oczywiście, oprócz usuwania wirusów, oferuję szeroki zakres usług związanych z WordPressem, w tym tworzenie stron, optymalizację, wdrożenie CI/CD i wiele innych.`,
      active: false,
    },
    {
      id: 15,
      title: 'Jakie są najlepsze praktyki zabezpieczania strony WordPress?',
      content: `Najlepsze praktyki obejmują regularne aktualizacje, stosowanie silnych haseł, wdrożenie firewalli, regularne backupy, oraz monitorowanie aktywności na stronie.`,
      active: false,
    },
  ];

  const features = [
    'Skuteczne usuwanie wirusów ze stron opartych o WordPress',
    'Zabezpieczenie strony przed przyszłymi atakami',
    'Szybko i sprawnie',
    'Ponad 10 lat doświadczenia',
    'Gwarancja bezpieczeństwa',
  ];
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MallwareRemovalWebsitesSchema),
        }}
      />

      <Nav />
      <Hero
        title='Skuteczne usuwanie wirusów WordPress'
        subtitle='Szybko i sprawnie usunę wirusa / złośliwe oprogramowanie z Twojej strony opartej o system WordPress oraz zabezpiecze Twoją stronę przed przyszłymi atakami'
        features={features}
        formTitle='Porozmawiajmy o oczyszczeniu Twojego WordPressa'
        hasForm={true}
        formId={539}
      />
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 bg-dark text-lightGray w-full'>
        <div className='container'>
          <h3 className='text-5xl '>
            Czy Twoja Strona WordPress Została Zainfekowana? To bardzo
            niebezpieczna sytuacja nie tylko dla Ciebie ale także dla każdego
            użytkownika odwiedzającego Twoją strone
          </h3>
          <h5 className='text-xl pt-10 pb-32'>
            Jakie zagrożenia niesie wirus na WordPress ?
          </h5>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/* Utrata lub wyciek danych użytkowników. */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div>
                {/* <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_1.svg'
                  alt='wordpress, ikona informacyjna'
                /> */}
              </div>
              <div className='flex flex-col items-start gap-5 '>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Utrata lub wyciek danych użytkowników.
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Złośliwe oprogramowanie na Twojej stronie to ogromne
                  zagrożenie dla danych zarejestrowanych użytkowników. Jest to
                  wg. ustawy o RODO wyciek danych. Takie sytuacje muszą być
                  rozwiązane jak najszybciej w przeciwnym wypadku groźą Tobie
                  konsekwencje prawne.
                </p>
              </div>
            </div>

            {/*   Niższa pozycja w Google */}
            <div className='flex flex-col items-start justify-start w-full xl:w-5/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
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
                  Niższa pozycja w Google
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Wirus na stronie opartej o WordPress może spowodować utrate
                  pozycji w wynikach wyszukiwania Google. Gdy algorytm oznaczy
                  Twoją stronę jako potencjalnie niebezpieczną zauważysz ogromne
                  spadki odwiedzin i
                </p>
              </div>
            </div>
          </div>
          <div className='spacer border-b-[1px] border-lightGray mt-32 mb-6 border-opacity-35'></div>

          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/*   Blokady i ostrzeżenia z poziomu przeglądarki */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12 xl:pl-10 xl:pr-10 group relative top-0 transition-all '>
              <div></div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Blokady i ostrzeżenia z poziomu przeglądarki
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Przeglądarki posiadają swoje własne mechanizmy, które
                  ostrzegają użytkowników o potencjalnych zagrożeniach a nawed i
                  mogą skutecznie zablokować dostęp do Twojej strony
                </p>
              </div>
            </div>

            {/*   Nieautoryzowany dostęp do systemu plików oraz bazy danych */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12 xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div></div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Nieautoryzowany dostęp do systemu plików oraz bazy danych
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Nieautoryzowany dostęp do twojej strony opartej o WordPress to
                  również dostęp do Twojej bazy danych oraz plików w katalogu
                </p>
              </div>
            </div>
          </div>

          <div className='spacer border-b-[1px] border-lightGray mt-20 mb-6 border-opacity-35'></div>

          <div>
            <h6 className='text-xl text-center pt-20'>
              Nie pozwól na to aby Twoja strona doprowadziła do wycieku danych
              lub spadła w wynikach wyszukiwania
            </h6>
          </div>
        </div>
      </section>
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 w-full'>
        <div className='container'>
          <h3 className='text-5xl'>Dlaczego warto mi zaufać?</h3>
          <h4 className='pb-40 text-2xl mt-6'>
            Jestem programistą WordPress-a. Jako WordPress freelancer autorsko
            wdrażam projekty dla moich klientów ale to nie wszystko:
          </h4>
          <ul className='flex flex-col lg:flex-row flex-wrap items-start justify-center gap-y-12 lg:gap-y-32'>
            <li className='w-full lg:w-6/12 '>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-topology-star-ring-3'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
                    <path d='M6 12h4' />
                    <path d='M14 12h4' />
                    <path d='M15 7l-2 3' />
                    <path d='M9 7l2 3' />
                    <path d='M11 14l-2 3' />
                    <path d='M13 14l2 3' />
                    <path d='M10 5h4' />
                    <path d='M10 19h4' />
                    <path d='M17 17l2 -3' />
                    <path d='M19 10l-2 -3' />
                    <path d='M7 7l-2 3' />
                    <path d='M5 14l2 3' />
                  </svg>
                </div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Ponad 10 lat doświadczenia w branży
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Od ponad dekady zajmuję się tworzeniem, zarządzaniem i ochroną
                stron opartych na WordPressie. Moje bogate doświadczenie
                obejmuje współpracę z klientami indywidualnymi, agencjami
                marketingowymi oraz firmami typu software house. Dzięki temu
                doskonale rozumiem potrzeby różnych typów klientów i potrafię
                dostosować swoje usługi do ich specyficznych wymagań. Pracuje z
                różnymi klientami oraz różnymi budżetami dlatego posiadam
                szerokie spektrum klientów - od mikrofirm po spółki akcyjne.
              </p>
            </li>
            <li className='w-full lg:w-6/12 '>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-seo'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3' />
                    <path d='M14 16h-4v-8h4' />
                    <path d='M11 12h2' />
                    <path d='M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z' />
                  </svg>
                </div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Czynny programista
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                WordPress nie jest jedyną technologią z której korzystam. Na
                codzień pracuje w software house jako full stack developer,
                wdrażam min. autorsko projekty graficzne do WordPressa ale
                pracuje również w innych technologiach. Wdrażamy dla klientów
                pełne aplikacje internetowe, systemy CRM, automatyzacje oraz o
                wiele więcej. Bardzo dużo piszę w Node.js / Express.js oraz
                Vue.js, ta strona oparta jest o framework Next.js także
                podejmując współpracę ze mna współpracujesz z osobą techniczną,
                programistą. Na codzień mam pod swoją opieką sporo serwisów
                opartych o WordPress.
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-apps'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
                    <path d='M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
                    <path d='M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
                    <path d='M14 7l6 0' />
                    <path d='M17 4l0 6' />
                  </svg>
                </div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Pełna odpowiedzialność za projekty
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Na co dzien zarządzam WordPressami większych klientów. Moje
                obowiązki obejmują dbanie o kopie zapasowe, ciągłość działania
                serwisów oraz wdrożenia CI/CD, które są kluczowe dla zachowania
                bezpieczeństwa i stabilności stron. Doświadczenie w obsłudze
                zaawansowanych projektów pozwala mi skutecznie zarządzać każdym
                aspektem Twojej strony, od usunięcia wirusów po długoterminowe
                zabezpieczenia.
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M7 7l5 5l-5 5' />
                    <path d='M13 7l5 5l-5 5' />
                  </svg>
                </div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Indywidualne podejście
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                To od Ciebie zależy czy podejmiesz wspólpracę z freelancerem czy
                też z firmą, która freelancerów zatrudnia. Wspólpracując ze mną
                masz pewnośc, że każda złotówka zostanie wydana na realne prace
                a nie na utrzymalnie aparatu administracyjnego, najem biura,
                leasing samochodu czy nowych macbooków. Pracuje w oparciu o
                stawkę godzinową lub fixed price, zapewniam jasne i
                transparentne formy rozliczenia. Wspólpraca face 2 face w
                kameralnym gronie oraz indywidualne podejście to coś czego nie
                zapewni żadna agencja
              </p>
            </li>
          </ul>
          <section>
            <div>
              <h5 className='text-5xl pt-40'>
                Zaufaj osobie, która zna WordPressa jak własną kieszeń
              </h5>
              <h6 className='text-2xl mt-6'>
                Jeśli chcesz mieć pewność, że Twoja strona WordPress jest w
                pełni bezpieczna i działa bez zarzutu, skontaktuj się ze mną już
                dziś. Wykorzystaj moje doświadczenie i umiejętności, aby chronić
                swoją stronę i dane użytkowników przed zagrożeniami.
              </h6>
            </div>
          </section>
        </div>
      </section>

      <Testimonials data={TestimonialsData} />

      {/* <section className='pt-32 pb-40 lg:pb-40 2xl:pb-42 w-full'>
        <div className='container'>
          <h3 className='text-5xl text-center'>
            Jakie strony internetowe wykonuje ?
          </h3>
          <h4 className='text-center text-lg mt-10'>
            Wykonuje strony niezależnie od wymagań. Mam spore doświadczenie przy
            większych projektach jako osoba, która na codzień obsługuję firmy
            typu software-house / agencja kreatywna jestem w stanie wykonać
            również i stronę internetową o złożonej funkcjonalnośći. Pracuje w
            różnych technologiach a kwestię techologiczną dobieram zawsze do
            potrzeb projektu.
          </h4>
          <ul className='flex flex-col lg:flex-row items-center lg:items-start justify-center flex-wrap gap-10 mt-20 text-base'>
            <li className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-check'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
              Aplikacje internetowe dla firm
            </li>
            <li className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-check'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
              WordPress oraz WordPress jako headless CMS
            </li>
            <li className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-check'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
              Landing page
            </li>
            <li className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-check'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
              Strony typu One Page
            </li>
            <li className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-check'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
              Sklepy internetowe
            </li>
            <li className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-check'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
              Zapisy na newsletter, automatyzacje
            </li>
          </ul>
        </div>
      </section> */}
      {/* <section className='pt-32 pb-40 lg:pb-40 2xl:pb-42 w-full bg-lightGray'>
        <div className='container'>
          <h3 className='text-5xl'>
            Jak wygląda proces realizacji strony internetowej?
          </h3>
          <h4 className='pb-40 text-2xl mt-6'>
            Prosty i transparentny proces to podstawa
          </h4>
        </div>
        <Process data={processSteps} />
      </section> */}

      <section className='pt-32 pb-40 lg:pb-40 2xl:pb-42 w-full bg-lightGray'>
        <div className='container'>
          <h3 className='text-5xl'>Jak wygląda proces realizacji ?</h3>
          <h4 className='text-xl pt-10 pb-32'>
            Jeżeli potrzebujesz usługi usunięcia infekcji ze strony WordPress,
            skontaktuj się ze mną korzystając z formularza zgłoszeniowego. Na
            podstawie przesłanych informacji wykonam wstępny audyt oraz oszacuje
            koszt wykonania usługi. Po akceptacji proces wygląda następująco:
          </h4>
          <div className='flex flex-wrap'>
            {/* Inicjalizacja prac */}
            <div className='flex flex-col w-full lg:w-6/12 lg:p-12'>
              <p className='text-2xl mb-32'>1. Inicjalizacja prac</p>
              <div className='flex'>
                <div className='flex'>
                  <div className='w-56 h-56 rounded-full bg-dark text-white flex items-center justify-center text-center p-10'>
                    <p className='text-lg text-center'>
                      {' '}
                      Kopia zapasowa strony
                    </p>
                  </div>
                </div>
                <div className='flex relative -left-6'>
                  <div className='w-56 h-56 rounded-full bg-accent text-dark flex items-center justify-center text-center p-10 '>
                    <p className='text-lg text-center '>
                      Blokada dostępu do strony
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <p>
                  Początkowy proces do blokada dostepu do strony aby ograniczyć
                  skutki infekcji oraz wykonanie kopii zapasowej aktualnej
                  wersji. Nie przywracam żadnych poprzednich backupów -
                  pobierana jest aktualna wersję strony{' '}
                </p>
              </div>
            </div>
            {/* Pełne oczyszczenie systemu plików oraz bazy danych */}
            <div className='flex flex-col w-full lg:w-6/12 lg:p-12'>
              <p className='text-2xl mb-32'>
                2. Czyszczenie plików oraz bazy danych
              </p>
              <div className='flex'>
                <div className='flex'>
                  <div className='w-56 h-56 rounded-full bg-dark text-white flex items-center justify-center text-center p-10'>
                    <p className='text-lg text-center'>
                      Eliminacja złośliwego kodu
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <p>
                  Wszystkie wtyczki instaluję od nowa, pobierając je wyłącznie z
                  pewnych, zaufanych źródeł. Następnie przeprowadzam dokładne
                  oczyszczanie bazy danych, usuwając wszystkie potencjalne
                  zagrożenia. Sprawdzam ręcznie system plików oraz motywy.
                  Głowny motyw sprawdzany jest plik po pliku aby wykryć
                  potencjalne linie kodu przeznaczone do tzw: backdoorów itp.
                </p>
                <p className='font-semibold mt-6'>
                  Ten krok zapewnia, że Twoja strona jest w pełni bezpieczna i
                  wolna od jakiegokolwiek złośliwego kodu.
                </p>
              </div>
            </div>
            {/* Dodatkowe zabezpieczenia */}
            <div className='flex flex-col w-full lg:w-6/12 lg:p-12'>
              <p className='text-2xl mb-32'>3. Dodatkowe zabezpieczenia</p>
              <div className='flex'>
                <div className='flex'>
                  <div className='w-56 h-56 rounded-full bg-dark text-white flex items-center justify-center text-center p-10'>
                    <p className='text-lg text-center'>
                      Dodatkowe zabezpieczenia
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <p>
                  Zabezpieczam dodatkowo stronę oraz serwer na wypadek
                  przyszłych infekcji. Dzięki czemu Twoja strona stanie się
                  bezpieczniejsza niż kiedykolwiek
                </p>
                {/* <p className='font-semibold mt-6'>
                  Ten krok zapewnia, że Twoja strona jest w pełni bezpieczna i
                  wolna od jakiegokolwiek złośliwego kodu.
                </p> */}
              </div>
            </div>
            {/*Aktualizacja wersji produkcyjnej */}
            <div className='flex flex-col w-full lg:w-6/12 lg:p-12'>
              <p className='text-2xl mb-32'>
                4. Aktualizacja wersji produkcyjnej
              </p>
              <div className='flex'>
                <div className='flex'>
                  <div className='w-56 h-56 rounded-full bg-dark text-white flex items-center justify-center text-center p-10'>
                    <p className='text-lg text-center'>Deploy na serwer</p>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <p>
                  Na samym końcu generuje nowe hasła dla użytkowników oraz kont
                  ftp a także wysylam raport końcowy. W każdym raporcie znajdują
                  się sugestie dotyczące zabezpieczeń, które warto wdrożyć jak
                  np: konfiguracja 2fa
                </p>
                <div className='mt-6'>
                  <ul>
                    <li>
                      <strong> ✔ Twoja strona WordPress</strong> - zabezpieczona
                      oraz oczyszczona
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-lightGray pt-32'>
        <div className='container'>
          <h3 className='text-5xl'>FAQ</h3>
          <h4 className='pb-40 text-2xl mt-6'>
            Czyli najczęściej zadawane pytania
          </h4>
          <div className='faq__wrapper'>
            <div className='faq__inner flex flex-col gap-6'>
              {allFaqItems.map((faqItem, index) => (
                <FaqItem
                  id={faqItem.id}
                  key={index}
                  title={faqItem.title}
                  content={faqItem.content}
                  active={faqItem.active}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
