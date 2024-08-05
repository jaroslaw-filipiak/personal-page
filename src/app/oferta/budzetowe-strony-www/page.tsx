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
  title: 'Budżetowe strony www oparte o gotowe rozwiązania',
  description:
    'Potrzebujesz prostej strony internetowej i nie masz wysokiego budżetu? Skorzystaj z mojej oferty na budżetowe strony www oparte o gotowe rozwiązania. Tanie strony www oparte o system WordPress to idealne rozwiązanie na start swojego biznesu',
};

export default function CheapSites() {
  const websiteCreationOfferSchema: WithContext<Offer> = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Budżetowe strony www oparte o gotowe rozwiązania',
    description:
      'Potrzebujesz prostej strony internetowej i nie masz wysokiego budżetu? Skorzystaj z mojej oferty na budżetowe strony www oparte o gotowe rozwiązania. Tanie strony www oparte o system WordPress to idealne rozwiązanie na start swojego biznesu',
    url: 'https://j-filipiak.pl/oferta/budzetowe-strony-www',
    priceCurrency: 'PLN',
    price: '3000.00',
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
      title: 'Ile poprawek mogę zgłosić w trakcie prac nad stroną?',
      content:
        'Nie stosuje limitów poprawek. W ramach usługi wykonuje wszystkie poprawki do momentu akceptacji projektu przez klienta.',
      active: false,
    },
    {
      id: 4,
      title: 'Czy mój projekt będzie indywidualny?',
      content:
        'Tak oczywiście. Każdy projekt jest tworzony od podstaw na podstawie briefu od klienta. Layout strony oraz poszczególne sekcje są tworzone w oparciu o przesłane materiały dzięki czemu strona jest w pełni spersonalizowana',
      active: false,
    },
    {
      id: 5,
      title: 'Czy mogę edytować swoją stronę www?',
      content:
        'Tak, wraz ze stroną otrzymasz dostęp do panelu administracyjnego, z poziomu którego będzie można w pełni edytować stronę, jej treśći i grafikę a także dodawać nowe podstrony oraz o wiele więcej.',
      active: false,
    },

    {
      id: 6,
      title: 'Czy strony są dopasowane do urządzeń mobilnych?',
      content:
        'Tak, wszystkie strony są w pełni responsywne i dopasowane do urządzeń mobilnych. Oznacza to, że poprawnie wyświetlają się nie tylko na laptopie i komputerze ale i na telefonie komórkowym oraz tabletach',
      active: false,
    },
    {
      id: 7,
      title:
        'Czy strony są zoptymalizowane pod kątem SEO i będą one widoczne w Google?',
      content:
        'Tak, wszystkie strony są zoptymalizowane pod kątem SEO. Każda strona otrzymuje ode mnie wyprawkę w postaci rozwiązań ułatwiających przyszłe pozycjonowanie strony www czyli: prawidłowe oznaczenie tagów na stronie (min. kluczowy tag h1 na każdej podstronie), przygotowanie sitemap.xml oraz robots.txt, skonfigurowanie wtyczki do SEO. Jeżeli jest taka potrzeba to mogę również skonfigurować Google Analytics oraz Google Search Console i poprosić o szybszą indeksację strony www.',
      active: false,
    },
    {
      id: 9,
      title: 'Czy strony mogą mieć wiele języków?',
      content:
        'Tak można dodać obsługę wielu języków samodzielnie za pomocą wtyczki lub zlecić mi to zadanie. W przypadku zlecenia mi tego zadania, proszę o kontakt w celu dodatkowej wyceny.',
      active: false,
    },
    {
      id: 10,
      title: 'Czy otrzymam gwarancję na stronę? ',
      content:
        'Oczywiście. Strona jest objęta 2 letnią gwarancją. W przypadku problemów ze stroną należy złosić ten fakt bezpośrednio na maila. Gdy jednak okaże się, że strona nie działa prawidłowo z winy klienta oraz jego działań naliczam dodatkową płatnośc za obługę',
      active: false,
    },
    {
      id: 11,
      title: 'Co muszę dostarczyć przed rozpoczęciem współpracy?',
      content:
        'Po zakupie dostarcze specjalny formularz który pozwoli poznać Państwa wymagania, preferowaną kolorystykę oraz kilka innych aspektów. Poproszę również o dostarczenie tekstów , informacji kontaktowych oraz grafik, które powinny zostać użyte na stronie. Dostarczanie grafk nie jest obowiązkowe, w przypadku ich braku wykorzystam grafiki ze stocków.',
      active: false,
    },
    {
      id: 12,
      title: 'W jakich technologiach są tworzone strony?',
      content:
        'Stack technologiczny dobieram do klienta oraz jego budżetu i wymagań. Zdecydowana większość stron zostaje wykonana w technologii WordPress. Po stronie frontendu korzystam głownie z ekosystemu Vue czyli Vue.js oraz Nuxt.js. Korzystam również z React.js oraz Next.js. Systemy CMS w zależności od budżetu. Z płatnych rozwiązań Strapi, Contentfull, Ghost. Bezpłatne - WordPress',
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
      title: 'Ile trwa realizacja strony?',
      content: `Jest to niezwykle trudne pytanie na które nie da się udielić jednoznacznej odpowiedzi. Każdy projekt jest indywidualny jednakże wraz z ofertą otrzymasz informację o szacowanym czasie realizacji projektu.`,
      active: false,
    },
    {
      id: 15,
      title: 'Ile kosztuje strona www?',
      content: `W przypadku wszelkich projektów informatycznych pytanie o budżet jest zasadne. Ofertę przygotowuję w zależności od budżetu i wymagań projektu. Im wyższy budzet tym lepsze rozwiazania technologiczne jestem w stanie zaproponować.`,
      active: false,
    },
  ];
  const processSteps: Array<ProcessItem> = [
    {
      id: 1,
      title: 'Skontaktuj się ze mną',
      content:
        'Nie stosuje limitów poprawek. W ramach usługi wykonuje wszystkie poprawki do momentu akceptacji projektu przez klienta.',
      active: false,
    },
  ];
  const features = [
    'Szybki termin realizacji',
    'Strona w pełni responsywna oraz przygotowana pod SEO',
    'Panel administratora',
  ];
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteCreationOfferSchema),
        }}
      />

      <Nav />
      <Hero
        title='Profesjonalna strona www w przystępnej cenie ?'
        subtitle='Dostarcze Tobie profesjonalną stronę www w pełni przygotowaną pod SEO. Wraz z panelem administratora. Bezpieczna, szybka i stabilna strona www'
        features={features}
        formTitle='Porozmawiajmy o Twojej nowej stronie www'
      />
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 bg-dark text-lightGray w-full'>
        <div className='container'>
          <h3 className='text-5xl pb-40'>
            Strony typu One Page z realizacją już w kilka dni roboczych to
            idealne rozwiązanie dla osób, które potrzebują tzw: “stronę
            wizytówkę”
          </h3>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/* Profesjonalna strona www wraz z dostępem do Panelu administracyjnego */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12  group relative top-0 transition-all '>
              <div>
                <Image
                  width={166}
                  height={166}
                  loading='lazy'
                  src='/img/icon_1.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl lg:mt-14 text-balance'>
                  Profesjonalna strona www wraz z dostępem do Panelu
                  administracyjnego
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Dzięki czemu będziesz mógl / mogła samodzielnie zarządzać
                  swoją stroną, dodawać nowe podstrony oraz funkcjonalnośći
                </p>
              </div>
            </div>

            {/* Idealne wyświetlanie na telefonach i tabletach */}
            <div className='flex flex-col items-start justify-start w-full xl:w-6/12  group relative top-0 transition-all '>
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
                  Idealne wyświetlanie na telefonach i tabletach czyl pełna
                  responsywność Twojej strony
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Czyli technologia RWD. Zadbam o to aby Twoja nowa strona
                  idealnie prezentowała się na każdym możliwym urządzeniu. To
                  niezwykle ważne
                </p>
              </div>
            </div>
          </div>
          <div className='spacer border-b-[1px] border-lightGray mt-32 mb-6 border-opacity-35'></div>
          <p className='text-lg mt-4 mb-40'>Dodatkowo</p>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/* Wyprawka SEO */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12  group relative top-0 transition-all '>
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
                <h4 className='text-xl lg:mt-14 text-balance'>Wyprawka SEO</h4>
                <p className='text-sm text-gray text-balance'>
                  Porządny pakiet SEO czyli przygotowanie Twojej strony pod
                  przyszłe pozycjonowanie. W skład pakietu min: semantyczne tagi
                  html , przygotowanie mapy witryny, konfiguracja wtyczki SEO,
                  usatwienie og: image, favicon meta description
                </p>
              </div>
            </div>

            {/* Idealne wyświetlanie na telefonach i tabletach */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12  group relative top-0 transition-all '>
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
                  Dzięki czemu Twoja strona będzie szybka jak błyskawica.
                  Optymalizuje obrazki na stronie oraz ustawiam odpowiednie
                  reguły cachowania aby Twoja strona była szybka jak błyskawica!
                </p>
              </div>
            </div>

            {/* Idealne wyświetlanie na telefonach i tabletach */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12  group relative top-0 transition-all '>
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
                  Pakiet bezpieczeństwa
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Strony tworze w pełni natywnie w tym co oferuje system
                  WordPress ,ograniczam liczbę dodatków. Wraz z instalacją
                  strony usatwiam specjalne reguły w pliku .htacce dzięki czemu
                  ogarniczam ruch z podejrzanych adresów IP, Zabezpieczam
                  również formularze i oddaje stronę w idealnej kondycji
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 w-full'>
        <div className='container'>
          <h3 className='text-5xl'>
            Profesjonalna strona internetowa oparta o najpopularniejszy na
            świecie system WordPress.
          </h3>
          <h4 className='pb-40 text-2xl mt-6'>
            43% sieci działa na WordPressie.
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
                  Zarządzaj stroną z poziomu panelu administratora, edytuj
                  stronę samodzielnie
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Dodawaj nowe podstrony, edytuj teksty oraz zdjęcia. Strona po
                opublikowaniu należy do Ciebie i przejmujesz nad nią pełną
                kontrolę!
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
                  Zarządzaj wszystkim co związane z SEO.
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Twoja strona będzie posiadała dostęp do narzędzia za pomocą
                którego będziesz mógł kontrolować jak wyświetla się strona w
                wynikach wyszukiwnia Google
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
                  Dowolnie rozszerzaj funkcjonalności swojej strony
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Po wykonaniu strony otrzymasz dostęp do panelu
                administracyjnego. Dzięki czemu będiesz miał nad nią pełną
                kontrolę oraz praktycznie nieograniczone możliwości rozbudowy.
                Dlatego strony www oparte o system WordPress są doskonałym
                rozwiązaniem dla naszych kientów
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
                  Gwarancja szybkości wczytywania, strony nastawione na
                  błyskawiczne wczytywanie
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Twoja strona wczyta się poniżej 3 sekund. Jest to bardzo ważne
                ponieważ 3s to granica, której przekroczenie może drastycznie
                zmniejszyc ilośc wizyt na stronie
              </p>
            </li>
          </ul>
          <section>
            <div>
              <h5 className='text-5xl pt-40'>
                Każdy biznes potrzebuje porządnej strony internetowej.
              </h5>
              <h6 className='text-2xl mt-6'>
                Jeżeli tu jesteś to znaczy, że szukasz doświadczonej osoby do
                wykonania solidnego projektu. Strony internetowe, które wychodzą
                z pod mojej ręki są szybkie, bezpieczne i stabilne.
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
