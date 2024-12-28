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
  title: 'Administracja stronami internetowymi WordPress - j-filipiak.pl',
  description:
    'Strony oparte o system WordPress potrzebują stałej administracji. Oferta obejmuje wszelkie poprawki, aktualizacje, backupy oraz monitoring strony a także pracę programistyczne',
};

export default function CheapSites() {
  const administartionWebsitesSchema: WithContext<Offer> = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Administracja stronami internetowymi WordPress',
    description:
      'Strony oparte o system WordPress potrzebują stałej administracji. Oferta obejmuje wszelkie poprawki, aktualizacje, backupy oraz monitoring strony a także pracę programistyczne',
    url: 'https://j-filipiak.pl/oferta/administracja-stronami-internetowymi',
    priceCurrency: 'PLN',
    price: '499.00',
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
        'Oferta stałej administracji wyceniania jest indywidualnie w zależności od potrzeb i wymagań klienta. Najniższy pakiet obejmujący administrację oraz czuwanie nad stroną to 249 zł netto miesięcznie. W  tej cenie zabezpieczymy stornę oraz zadbamy o to, by strona była na bieżąco aktualizowana.Do dyspozycji masz również dodatkową godzinę prcy specjalisty ds. WordPress w cenie pakietu. W przypadku dodatkowych prac programistycznych prace rozliczane są na podstawie ilośći przepracowanych godzin.',
      active: false,
    },
    {
      id: 4,
      title: 'Czy oferujecie wsparcie w nagłych wypadkach',
      content:
        'Czas reakcji na usterki oraz godziny dostępności ustalane są indywidualnie. Mamy również klientów, którzy oczekują dostępności 24/7. W takim przypadku ustalamy dodatkowe stawki za dostępność w godzinach nocnych. W umowie ustalamy również czas reakcji na zgłoszenia awaryjne w zależności od priorytetu zgłoszenia',
      active: false,
    },

    {
      id: 6,
      title: 'Jakie usługi są zawarte w pakiecie administracyjnym?',
      content: `

      <p>W standardowym pakiecie administracyjnym WordPress znajdują się następujące usługi:</p>

       <ul class="py-6 pl-10 list-disc">
        <li>Regularne aktualizacje WordPress, motywów i wtyczek oraz monitoring ich kompatybilności</li>
        <li>Automatyczne kopie zapasowe według ustalonego harmonogramu z możliwością szybkiego przywrócenia danych. Również kopie zapasowe w niezależnej lokalizacji poza serwerem</li>
        <li>Kompleksowe monitorowanie bezpieczeństwa, w tym skanowanie malware i ochrona przed atakami </li>
        <li> Zaawansowana optymalizacja prędkości ładowania strony i dostosowywanie wydajności serwera</li>
        <li>Profesjonalne wsparcie techniczne i pomoc przy edytowaniu treści, w tym wprowadzanie zmian na stronie </li>
        <li>Szczegółowa analityka i cykliczne raportowanie wydajności strony </li>
       </ul>

       <p>Dodatkowo, w zależności od potrzeb klienta, oferujemy:</p>

       <ul class="py-6 pl-10 list-disc">
        <li>Edycję i tworzenie nowych podstron zgodnie z wytycznymi</li>
        <li>Optymalizację SEO i dostosowywanie treści pod wyszukiwarki</li>
        <li>Modyfikacje kodu (HTML, CSS, PHP) i customizację motywów</li>
        <li>Integrację z narzędziami analitycznymi i marketingowymi</li>
        <li>Audyty bezpieczeństwa i wydajności</li>
       </ul>

       <p>Wszystkie usługi są elastycznie dostosowywane do indywidualnych potrzeb i specyfiki projektu klienta. Zapewniamy stałe wsparcie i szybką reakcję na zgłoszenia.</p>`,
      active: false,
    },
    {
      id: 7,
      title:
        'Czy oferujecie regularne aktualizacje WordPress, motywów i wtyczek?',
      content:
        'Tak, bezpieczeństwo i sprawność działania strony to nasz priorytet. Każdy klient otrzymuje indywidualny harmonogram aktualizacji. Wszelkie aktualizacje są testowane na środowisku stagingowym przed wdrożeniem na stronę produkcyjną. Dzięki temu unikamy problemów z działaniem strony po aktualizacji.',
      active: false,
    },

    {
      id: 10,
      title: 'Czy wykonujecie kopie zapasowe strony, i jak często?',
      content:
        'Zawsze posiadamy kopie zapasową strony oraz dedykowane repozytorium kodu na platformie Gitlab. Kopie zapasowe na serwerze wykonywane są codziennie, dodatkowo raz w tygodniu wykonujemy niezależną kopie zapasową na zewnętrznym serwerze oraz codzienne kopie zapasowe bazy danych. Każdy projekt posiada również odrębne środowisko stagingowe',
      active: false,
    },
    {
      id: 11,
      title: 'Jakie środki bezpieczeństwa wdrażacie, aby chronić moją stronę?',
      content:
        'Jest tego dosyć sporo. Po stronie serwera odpowienia koniguracja firewalla/WAF, optymalizacja ustawień .htacces oraz konfiguracja serwera. Po stronie WordPress - zabezpieczenie przed atakami brute-force, ograniczenie dostępu do panelu logowania, zabezpieczenie plików konfiguracyjnych, regularne skanowanie strony pod kątem złośliwego oprogramowania, szyfrowanie połączenia SSL, regularne aktualizacje WordPress, motywów i wtyczek, regularne kopie zapasowe',
      active: false,
    },
    {
      id: 12,
      title: 'Czy pomagacie w optymalizacji prędkości ładowania strony??',
      content:
        'Tak, każda strona którą się zajmujemy jest optymalizowana pod tym kątem i z czasem przyspiesza. Klienci otrzymują również raporty z prac optymalizacyjnych a po kilku miesiącach współpracy widać znaczącą poprawę w szybkości ładowania strony',
      active: false,
    },
    {
      id: 13,
      title: 'Czy można dowiedzieć się więcej o tobie?',
      content: `Jasne! Zapraszam do odwiedzenia tej strony : <a target='_blank' href="https://j-filipiak.pl/o-mnie"/>j-filipiak.pl/o-mnie</a>`,
      active: false,
    },
    {
      id: 14,
      title:
        'Czy mogę liczyć na pomoc przy tworzeniu i edytowaniu treści na stronie?',
      content: `Tak, oferuje wsparcie w tworzeniu i edytowaniu treści na stronie, aby zapewnić, że treści są aktualne, angażujące i zgodne z najlepszymi praktykami SEO. Współpracuję  również z agencją copywriterską, która może pomóc w tworzeniu treści na stronę internetową. Mam też dedykowane osoby do tworzenia treści w języku angielskim czy też do uzupełniania strony o treści`,
      active: false,
    },
    {
      id: 15,
      title: 'Jakie macie doświadczenie w administracji stron WordPress?',
      content: `Przez ponad 10 lat zaktualizowałem, zmodyfikowałem, zabezpieczyłem oraz wdrożyłem od podstaw mnóstwo stron. W tym również wiele stron dla ogromnych firm firm. Współpracowałem z wieloma agencjami kreatywnymi oraz firmami software-house a to oznacza pracę dla globalnych marek.`,
      active: false,
    },
  ];

  const features = [
    'Wsparcie techniczne 24/7',
    'Administracja stronami internetowymi oraz monitoring dostępności',
    'Aktualizacje systemu WordPress oraz wtyczek, poprawki bezpieczeństwa',
  ];
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(administartionWebsitesSchema),
        }}
      />

      <Nav />
      <Hero
        title='Zadbam o Twoją stronę internetową na WordPress'
        subtitle='Strony oparte o system WordPress potrzebują stałej administracji. Oferta administracji obejmuje wszelkie poprawki, aktualizacje, backupy oraz monitoring strony a także pracę programistyczne'
        features={features}
        formTitle='Porozmawiajmy o opiece nad Twoją stroną lub sklepem'
        hasForm={true}
        formId={358}
      />
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 bg-dark text-lightGray w-full'>
        <div className='container'>
          <h3 className='text-5xl pb-40'>
            Administracja stronami internetowymi to niesamowita usługa, dzięki
            której zyskasz całodobowy monitoring strony oraz bieżące wsparcie w
            cenie niższej niż tworzenie nowego etatu
          </h3>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/* Profesjonalna strona www wraz z dostępem do Panelu administracyjnego */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_1.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5 '>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Dbanie o bieżące aktualizację i poprawki bezpieczeństwa
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Dbamy o częste wykonywnie kopii zapasowych oraz aktualizację
                  systemu i wtyczek. Ustalamy z góry harmonogram aktualizacji
                  strony i nigdy nie robimy tego w sposób automatyczny
                </p>
              </div>
            </div>

            {/* Kopie zapasowe w dedykowanym środowisku*/}
            <div className='flex flex-col items-start justify-start w-full xl:w-5/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_2.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Kopie zapasowe w dedykowanym środowisku
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Tworzymy kopie zapasowe na własnych serwerach. Posiadamy
                  skrypty dzięki którym jestesmy w stanie odzyskać stronę w
                  ekspresowym tempie.
                </p>
              </div>
            </div>
          </div>
          <div className='spacer border-b-[1px] border-lightGray mt-32 mb-6 border-opacity-35'></div>
          <p className='text-lg mt-4 mb-40'>Dodatkowo</p>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/* Monitoring widoczności strony www */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12 xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_3.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Monitoring widoczności strony www
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Za pomocą specjalnych skryptów sprawdzamy dostępność strony
                  internetowej co minutę. Dzięki czemu w minute po awarii mamy
                  jej świadomośc i działamy od razu
                </p>
              </div>
            </div>

            {/* Optymalizacja szybkości */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12 xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_4.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Optymalizacja szybkości
                </h4>
                <p className='text-sm text-gray text-balance'>
                  W ramach pakietów administracji stronami internetowymi dbamy o
                  takie aspekty jak szybkość wczytywnia oraz poprawne SEO.
                  Dzięki czemu strona z miesiąca na miesiąc jest w coraz lepszej
                  kondycji
                </p>
              </div>
            </div>

            {/* Pakiet bezpieczeńśtwa */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12 xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/wp.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Pakiet bezpieczeńśtwa
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Przejmując obowiązki zwiazane z dbaniem o stronę wykonujemy
                  szereg czynności zabezpieczających dzięki czemu strona jest na
                  tyle bezpieczna na ile to tylko możliwe. Regularnie skanujemy
                  strony za pomocą narzędzi typu wp-scan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 w-full'>
        <div className='container'>
          <h3 className='text-5xl'>
            Dlaczego strony oparte o system WordPress powinny być cały czas
            nadzorowane?
          </h3>
          <h4 className='pb-40 text-2xl mt-6'>
            WordPress to najpopularniejszy system na świecie, dlatego jest
            głównym celem ataków.Warto aby nad Twoją stroną stale ktoś czuwał.
          </h4>
          <ul className='flex flex-col lg:flex-row flex-wrap items-start justify-center gap-y-12 lg:gap-y-32'>
            <li className='w-full lg:w-5/12'>
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
                  Bezpieczeństwo Twojej strony oraz danych
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Czy zdajesz sobie sprawę z tego, że nieuprawniony dostęp do
                Twojej strony to tak naprawdę dostęp do całego serwera? Strona
                musi być stale monitorowane oraz zabezpieczana. W ramach usługi
                otrzymujesz stały monitoring strony oraz podatności
              </p>
            </li>

            <li className='w-full lg:w-5/12'>
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
                  Aktualizacje zawsze na czas
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                W przypadku podatności w popularnej wtyczce aktualizację należy
                wykonywać natychmiast.Każda luka w zabezpieczeniach jest
                wykorzysytwana przez hakerów w trybie natychmiastowym. Dlatego
                aktualizacje są tak ważne a w ramach stałej administracji będa
                one wykonywane na bieżąco.
              </p>
            </li>

            <li className='w-full lg:w-5/12'>
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
                  Prace optymalizacyjne
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                W każdym miesiącu wydzielamy czas na optymalizację strony.
                Dzięki temu strona jest coraz szybsza oraz lepiej widoczna w
                Google. W ramach usługi otrzymujesz również raporty z prac
                optymalizacyjnych
              </p>
            </li>

            <li className='w-full lg:w-5/12'>
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
                  Niezależne kopie zapasowe
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Wszystkie kopie zapasowe są przechowywane na naszych serwerach.
                Dzięki temu w przypadku awarii serwera jesteśmy w stanie
                odzyskać stronę w ekspresowym tempie.
              </p>
            </li>
          </ul>
          <section>
            <div>
              <h5 className='text-5xl pt-40'>
                Obsługa stron opartych o system CMS WordPress obejmuje
                kompleksowy pakiet usług
              </h5>
              <h6 className='text-2xl mt-6'>
                Zakres prac obejmuje zarówno standardowe działania wykonywane
                cykliczne w ramach dbania o “higiene” całego systemu jak i prace
                związane z przyspieszeniem działania strony, optymalizację pod
                SEO czy też rozwój nowych funkcjonalności oraz autorskich
                modułów.Stała obsługa to rów
              </h6>
            </div>
          </section>
        </div>
      </section>

      <Testimonials data={TestimonialsData} />

      <section className='w-full'>
        <div className='container flex items-center justify-center flex-wrap gap-10 -mt-20'>
          {/* femmefab */}
          <Link
            href='/case-studies/femmefab'
            className='case-study w-full lg:w-5/12 group aspect-square hover:scale-[101%] scale-100 transition-all'
          >
            <Image
              alt='Femmefab'
              src='/img/portfolio/femmefab/femmefab-square.png'
              width={613}
              height={613}
            ></Image>
          </Link>
          {/* siborsoft */}
          <Link
            href='/case-studies/siborsoft'
            className='case-study w-full lg:w-5/12 group aspect-square hover:scale-[101%] scale-100 transition-all'
          >
            <Image
              alt='siborsoft'
              src='/img/portfolio/siborsoft/siborsoft-square.jpg'
              width={613}
              height={613}
            ></Image>
          </Link>
          {/* 23knots */}
          <Link
            href='/case-studies/23knots'
            className='case-study w-full lg:w-5/12 group aspect-square hover:scale-[101%] scale-100 transition-all'
          >
            <Image
              alt='23knots'
              src='/img/portfolio/23knots/23knots-square.png'
              width={613}
              height={613}
            ></Image>
          </Link>
          {/* promise */}
          <Link
            href='/case-studies/promise4cloud'
            className='case-study w-full lg:w-5/12 group aspect-square hover:scale-[101%] scale-100 transition-all'
          >
            <Image
              alt='promise4cloud'
              src='/img/portfolio/promise4cloud/promise-square.png'
              width={613}
              height={613}
            ></Image>
          </Link>
        </div>
      </section>
      <section className='pt-32 pb-40 lg:pb-40 2xl:pb-42 w-full'>
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
      </section>
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
