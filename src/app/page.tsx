import Nav from '@/components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <section id='start' className='pt-72 pb-72'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-end'>
            <div>
              <h1 className='text-5xl text-balance pb-24'>
                Tworzę i rozwijam aplikacje szyte na miarę. Obsługuję klientów
                kompleksowo - od koncepcji przez projekt graficzny, finalne
                wdrożenie oraz stałą obsługę. Pracuję tylko w najnowszych
                technologiach
              </h1>
            </div>

            <div className='flex lg:w-7/12 gap-10 text-sm'>
              <div>
                <h2>
                  Znamy narzędzia branżowe, jeśli chodzi o tworzenie
                  dedykowanych aplikacji (mobilnych i webowych). Oferujemy
                  znacznie więcej niż tylko umiejętności.
                </h2>
              </div>
              <div>
                Znamy narzędzia branżowe, jeśli chodzi o tworzenie dedykowanych
                aplikacji (mobilnych i webowych). Oferujemy znacznie więcej niż
                tylko umiejętności.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='uslugi' className='bg-black pt-20 pb-20'>
        <div className='container  text-white'>
          <h3 className='text-5xl pb-60'>W tym mogę Tobie pomóc</h3>
          <div className='flex flex-col lg:flex-row items-stretch justify-between gap-10'>
            {/* projektowanie graficzne */}
            <Link
              href='/projektowanie-graficzne'
              className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all lg:hover:-top-2'
            >
              <div>
                <img
                  loading='lazy'
                  src='/img/projektowanie-graficzne.svg'
                  alt='projektowanie-graficzne, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl mt-14 text-balance'>
                  Projekty graficzne stron www oraz aplikacji mobilnych
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Zaprojektuję dla Ciebie unikalny projekt aplikacji mobilnej,
                  aplikacji webowej lub strony internetowej. Projekt będzie w
                  pełni profesjonalny, zgodny ze standardami UI/UX oraz w pełni
                  indywidualny
                </p>
                <button className='underline underline-offset-[10px] lg:opacity-0 group-hover:opacity-100 transition-all'>
                  więcej
                </button>
              </div>
            </Link>
            {/* wp */}
            <Link
              href='/wdrozenia-wordpress'
              className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all lg:hover:-top-2'
            >
              <div>
                <img
                  loading='lazy'
                  src='/img/wp.svg'
                  alt='wordpress, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl mt-14 text-balance'>
                  Autorskie wdrażanie projektów graficznych do systemu WordPress
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Wdrożę dowolny projekt graficzny do systemu WordPress. Strona
                  będzie wdrożona w pełni responsywnie, zgodnie z najnowszymi
                  standardami. Zoptymalizowana pod kątem SEO oraz szybkości
                  ładowania.
                </p>
                <button className='underline underline-offset-[10px] lg:opacity-0 group-hover:opacity-100 transition-all'>
                  więcej
                </button>
              </div>
            </Link>
            {/* wsparcie */}
            <Link
              href='dedykowane-oprogramowanie'
              className='flex flex-col items-start justify-between w-full xl:w-4/12 group relative top-0 transition-all lg:hover:-top-2'
            >
              <div>
                <img
                  loading='lazy'
                  src='/img/wsparcie.svg'
                  alt='wsparcie informatyczne, ikona informacyjna'
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <h4 className='text-xl mt-14 text-balance'>
                  Dedykowane oprogramowanie usprawniające Twój biznes
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Autorskie oprogramowanie dla Twojego biznesu. Uwielbiam
                  tworzyć aplikację, które usprawniają codzienne działanie
                  firmy. Tworze również aplikację mobilne oraz takie, które
                  wykorzystują AI
                </p>
                <button className='underline underline-offset-[10px] lg:opacity-0 group-hover:opacity-100 transition-all'>
                  więcej
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
