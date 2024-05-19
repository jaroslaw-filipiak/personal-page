import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import Image from 'next/image';

import Hero from '@/components/oferta/budzetowe-strony-www/Hero';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Tanie / Budżetowe strony www od j-filipiak.pl',
  description:
    'Potrzebujesz prostej strony internetowej i nie masz wysokiego budżetu? Skorzystaj z mojej oferty na tanie strony www oparte o gotowe rozwiązania. Tanie strony www oparte o system WordPress to idealne rozwiązanie na start swojego biznesu',
};

export default function CheapSites() {
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
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 w-full '>
        <div className='container'>
          <h3 className='text-5xl'>
            Profesjonalna strona internetowa oparta o najpopularniajszy na
            świecie system WordPress.
          </h3>
          <h4 className='pb-40 text-2xl mt-6'>
            43% sieci działa na WordPressie.
          </h4>
          <ul className='flex flex-wrap flex-col lg:flex-row items-start justify-between gap-10'>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Maksymalizuj liczbę potencjalnych klientów i konwersji Uzyskuj
                  wyższej jakości kontakty do potencjalnych klientów i więcej
                  wartościowych konwersji.
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                zyskuj wyższej jakości kontakty do potencjalnych klientów
                i więcej wartościowych konwersji.
              </p>
            </li>
            <li className='w-full lg:w-6/12'>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Maksymalizuj liczbę potencjalnych klientów i konwersji Uzyskuj
                  wyższej jakości kontakty do potencjalnych klientów i więcej
                  wartościowych konwersji.
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                zyskuj wyższej jakości kontakty do potencjalnych klientów
                i więcej wartościowych konwersji.
              </p>
            </li>

            <li className='w-full '>
              <div className='flex flex-col'>
                <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
                <h5 className='text-xl lg:mt-4 text-balance mb-5'>
                  Dowolnie rozszerzaj funkcjonalności swojej strony
                </h5>
              </div>
              <p className='text-sm text-gray text-balance'>
                Po wykonaniu strony otrzymasz od nas pełny dostęp do strony.
                Dzięki czemu będiesz miał nad nią pełną kontrolę oraz
                praktycznie nieograniczone możliwości rozbudowy. Dlatego strony
                www oparte o system WordPress są doskonałym rozwiązaniem dla
                naszych kientów
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Script src='/js/confetti.js' />
    </>
  );
}
