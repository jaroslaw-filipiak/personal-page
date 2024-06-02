import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Hero from '@/components/oferta/budzetowe-strony-www/Hero';
import Testimonials from '@/components/Testimonials';
import Script from 'next/script';
import FaqItem from '@/components/FaqItem';
import Cta from '@/components/Cta';

export const metadata: Metadata = {
  title: 'Tanie / Budżetowe strony www od j-filipiak.pl',
  description:
    'Potrzebujesz prostej strony internetowej i nie masz wysokiego budżetu? Skorzystaj z mojej oferty na tanie strony www oparte o gotowe rozwiązania. Tanie strony www oparte o system WordPress to idealne rozwiązanie na start swojego biznesu',
};

export default function CheapSites() {
  type FaqItem = {
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
      content: `Jasne! Zapraszam do odwiedzenia tej strony : <a target='_blank' href="https://j-filipiak.pl/o-mnie"/>www.j-filipiak.pl/about</a>`,
      active: false,
    },
    {
      id: 14,
      title: 'Ile trwa realizacja strony?',
      content: `Jest to niezwykle trudne pytanie na które nie da się udielić jednoznacznej odpowiedzi. Każdy projekt jest indywidualny jednakże wraz z ofertą otrzymasz informację o szacownym czasie realizacji projektu.`,
      active: false,
    },
    {
      id: 15,
      title: 'Ile kosztuje strona www?',
      content: `W przypadku wszelkich projektów informatycznych pytanie o budżet jest zasadne. Ofertę przygotowuję w zależności od budżetu i wymagań projektu. Im wyższy budzet tym lepsze rozwiazania technologiczne jestem w stanie zaproponować.`,
      active: false,
    },
  ];
  return (
    <>
      <Nav />
      <Hero />
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
                  src='/img/wp.svg'
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
                  src='/img/wp.svg'
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
                  src='/img/wp.svg'
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
                  src='/img/wp.svg'
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
          <ul className='flex flex-col lg:flex-row flex-wrap items-start justify-center lg:gap-y-32'>
            <li className='w-full lg:w-5/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
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
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
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
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
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
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
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

      <Testimonials />
      <section className='w-full'>
        <div className='container flex items-center justify-center flex-wrap gap-10 -mt-20'>
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
          <ul className='flex items-start justify-center flex-wrap gap-10 mt-20 text-base'>
            <li>Aplikacje internetowe dla firm</li>
            <li>WordPress oraz WordPress jako headless CMS</li>
            <li>Landing page</li>
            <li>Strony typu One Page</li>
            <li>Sklepy internetowe</li>
            <li>
              Strony z automatyzacją , zapisy na newsletter, zbieranie leadów
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-32 pb-40 lg:pb-40 2xl:pb-42 w-full bg-lightGray'>
        <div className='container'>
          <h3 className='text-5xl'>
            Jak wygląda proces realizacji strony internetowej?
          </h3>
          <h4 className='pb-40 text-2xl mt-6'>
            Prosty i transparentny proces to podstawa
          </h4>
          <ul className='flex flex-col lg:flex-row flex-wrap items-start justify-between gap-y-12'>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  1.Skontaktuj się ze mną.
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Porozmawiajmy na temat Twojego projektu, ja dowiem się o Twoich
                wymaganiach a ty otrzymasz wycenę w ciągu 24 godzin.``
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  2. Akceptacja warunków
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Jeżeli moja oferta jest zgodna z Twoimi wymaganiami to
                konfiguruję niezbędne narzędzia do zarządzania projektem i
                rozpocznamy współpracę.
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  3. Proces realizacji projektu graficznego
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Pierwszy etap to przygotowanie projektu graficznego. Otrzymasz
                dostęp do pierwszych widoków a po Twoich sugestiach projekt
                będzie modyfikowany. W momencie gdy uznasz, że projekt graficzny
                jest kompletny i zaspokaja całkowicie Twoje potrzeby to
                przechodzimy do kolejnego etapu.
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  4. Development
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Development to etap programistyczny, otrzymasz link do strony w
                tzw: wesji stagingowej która jest widoczna tylko dla Ciebie.
                Będziesz mógl sprawdzić jak działa Twoja strona na swoim
                komputerze czy też na telefonie. Tutaj również będziesz miał
                pełną kontrolę nad stroną i będziesz mógł zgłaszać poprawki.
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  5. Testy przed wdrożeniowe
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Zanim Twoja strona zostanie umieszczona na docelowej domenie
                musi przejśc ona jeszcze parę testów. Posiadam własne procedury
                i sprawdzam wiele aspektów strony. W momencie gdy tzw:
                'checklista wdrożeniowa' zostanie spełniona prechodzimy do
                finalizacji czyli wdrożenia twojej strony internetowej
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  6. Strona gotowa!
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Otrzymasz gwarancję oraz zaproszenie do dalszej współpracy.
                Obsługuję moich klientów kompleksowo a po zakończeniu współpracy
                chętnie pomogę Tobie przy innych aspektach takich jak: stała
                administracja , obsługa graficzna czy też kolejne pracę
                programistyczne na stronie.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className='w-full bg-lightGray'>
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
