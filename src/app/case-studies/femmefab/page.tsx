import Nav from '@/components/Nav';
import Link from 'next/link';
import Cta from '@/components/Cta';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Thing,
  WithContext,
  Offer,
  Person,
  Place,
  Organization,
  ContactPoint,
  WebPage,
} from 'schema-dts';

export const metadata: Metadata = {
  title: 'Femmefab - Case Study projektu - j-filipiak.pl',
  description:
    'Femmefab to autorsko wdrożona strona internetowa wykonana na systemie WordPress. Zobacz jak wygląda profesjonalna strona internetowa!',
  keywords: [
    'projektowanie stron www w Figmie',
    'strony www WordPress',
    'projektowanie stron internetowych',
    'auktorskie kodowanie stron www , html, js, css, sass, webpack, vite.js, next.js, vue.js, wordpress, node.js, dedykowane oprogramowanie dla firm, aplikacje webowe spa, aplikacje webowe pwa, aplikacje webowe ssr, szybkie strony internetowe',
    'Webpack',
    'Next.js',
    'Node.js',
    'WordPress',
    'Dedykowane oprogramowanie dla firm',
    'Aplikacje webowe SPA',
    'Aplikacje webowe PWA',
    'Aplikacje webowe SSR',
    'Szybkie strony internetowe',
  ],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    url: 'https://j-filipiak.pl/case-studies/femmefab',
    title: 'Femmefab - Case Study projektu - j-filipiak.pl',
    description:
      'Femmefab to autorsko wdrożona strona internetowa wykonana na systemie WordPress. Zobacz jak wygląda profesjonalna strona internetowa!',
    images: ['ogimage-contact.jpg'],
    // TODO: og images per page
  },
};

export default function Home() {
  const caseStudySchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Case Study: Femmefab',
    description: 'Zobacz case study projektu strony internetowej dla Femmefab',
    url: 'https://j-filipiak.pl/case-studies/femmefab',
    author: {
      '@type': 'Person',
      name: 'Jarosław Filipiak',
      url: 'https://j-filipiak.pl/about-me',
      sameAs: [
        'https://www.facebook.com/jfilipiakpl',
        'https://www.linkedin.com/showcase/j-filipiak-pl',
        'https://twitter.com/twojafirma',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Professional',
        telephone: '+48 663 568 828',
        email: 'info@j-filipiak.pl',
        areaServed: 'PL',
        availableLanguage: ['Polish'],
        url: 'https://j-filipiak.pl/kontakt',
      },
    },
    mainEntityOfPage: {
      '@type': 'CreativeWork',
      creator: {
        '@type': 'Person',
        name: 'Jarosław Filipiak',
      },
    },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema),
        }}
      />
      <Nav />
      <section
        id='case-study-hero'
        className=' bg-white h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen w-full relative transition-all'
      >
        <Image
          src='/img/portfolio/femmefab/femmefab-hero.webp'
          layout='fill'
          objectFit='cover'
          alt='femmefab'
          quality={100}
        ></Image>
      </section>

      <section className='pt-20  bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-center justify-start'>
            <div>
              <Link
                className='text-xl mt-3 mb-10 inline-flex hover:underline hover:underline-offset-[16px] transition-all'
                href='https://www.femmefab.nl//'
                target='_blank'
              >
                Zobacz stronę na żywo ( https://www.femmefab.nl )
              </Link>
              <h2 className='text-5xl text-balance pb-16 lg:pb-24'>
                Świeża i lekka strona z ciekawymi efektami i nowoczenym wyglądem
                ?
              </h2>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-6 lg:gap-10 lg:pb-24'>
              <div>
                <h3 className='text-lg'>
                  Femmefab to świetnie wyglądająca strona ,została ona
                  zaprojektowana przez zespół projektowy. Ja z kolei byłem
                  odpowiedzialny za zamiane statycznego projektu w nowoczesną,
                  responsywną i dynamiczną stronę internetową
                </h3>
              </div>
              <div className='text-sm'>
                <p className='mb-10'>
                  Zakres prac obejmował prace front-endowe oraz podpięcie strony
                  pod system CMS. Klasycznie wybrano system CMS WordPress.
                  Całość została wdrożona w pełni autorsko z uwględnieniem
                  indywidualnego motywu
                </p>
              </div>
            </div>

            <div className='relative'>
              <Image
                src='/img/portfolio/femmefab/femmefab-img-2.webp'
                width={1422}
                height={822}
                alt='image'
                className='mb-6 lg:mb-20'
              ></Image>
            </div>

            <div className='relative'>
              <Image
                src='/img/portfolio/femmefab/femmefab-img-3.webp'
                width={1422}
                height={822}
                alt='image'
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-10 lg:pt-20 pb-24 bg-white hidden'>
        <div className='container'>
          <div>
            <h3 className='text-5xl lg:text-balance pb-10'>
              Największe wyzwania ? Szczegóły!
            </h3>
          </div>

          <div className='flex items-start gap-10 pb-12 lg:pb-24'>
            <div>
              <h3 className='text-lg'>
                Ponieważ to one napędzają ten projekt oraz pokazują
                odwiedzajacemu, że właściciel marki dba o profesjonalizm. To
                własnie jest przewaga którą zyskujesz zamawiając autorską usługę
                projektowania i wdrażania. Wyższe koszty wykonania projeku
                szybką się zwrócą a klient nie będzie musiał co roku zastanawiać
                się nad nową stroną - ta posłuży jeszcze pare dobrych lat!
              </h3>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-start justify-center gap-10'>
            <figure className='lg:w-6/12'>
              <div className='aspect-square relative'>
                <Image
                  src='/img/portfolio/femmefab/femmefab-img-2.webp'
                  layout='fill'
                  objectFit='cover'
                  alt='image'
                ></Image>
              </div>
              <figcaption>
                Counter reagujący nie tylko na scrollowanie, zmiana jego koloru
                również jest dynamiczna i zależna od sekcji którą użytkownik
                przegląda
              </figcaption>
            </figure>

            <figure className='lg:w-6/12'>
              <div className='aspect-square relative'>
                <Image
                  src='/img/portfolio/femmefab/femmefab-img-2.webp'
                  layout='fill'
                  objectFit='cover'
                  alt='image'
                ></Image>
              </div>
              <figcaption>
                Zmiana koloru po scrollowaniu - każdy szczegół został najpierw
                przemyślany przez zespół projektowy a następnie skrupulatnie
                odzwierciedlony za pomocą kodu.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className='lg:pt-20 bg-white'>
        <div className='container'>
          <div>
            <h3 className='text-5xl text-balance pb-12 lg:pb-24 pt-10'>
              Kwestia technologiczna
            </h3>
          </div>
        </div>
        <div className='container'>
          <ul>
            <li className='flex flex-col lg:flex-row items-start pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Frontend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Style zostały napisane z użyciem tailwind.css -
                  najnowocześniejszego i najbardziej zaawansowanego narzędzia do
                  pisania styli
                </p>
                <p>
                  Oprócz pisania inline z wykorzystaniem tailwind korzystałem
                  jezcze z preprocesorów scss - style piszę w metodologii BEM
                  korzystając ze standaryzacji scss 7-1 pattern
                </p>
                <p>Bunder: Vite.js</p>
              </div>
            </li>
            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Backend</div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Stronę wdrożono autorsko do systemu WordPress na podstawie
                  motywu startowego _underscore.me
                </p>
                <p>
                  Panel administratora oraz edycja treści została zrealizowana
                  za pomocą Advanced Custom Fields
                </p>
              </div>
            </li>

            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Animacje </div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Wykorzystano bibliotekę gsap oraz plugin scrollTrigger za
                  pomocą którego utworzyłem autorskie animacje “on scroll”
                </p>
                <p>Smooth scroll to biblioteka lenis.js</p>
              </div>
            </li>

            <li className='flex flex-col lg:flex-row pb-12  border-b border-black border-opacity-20 mb-12'>
              <div className='text-lg lg:w-6/12 mb-6 lg:mb-0'>Dodatkowe </div>
              <div className='lg:w-6/12 flex flex-col items-start justify-start gap-6 text-balance'>
                <p>
                  Okienko cookies zostało stworzone autorsko jako dedykowany
                  plugin
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='pt-40 pb-20 hidden'>
        <div className='container flex items-center justify-center'>
          <div className='title inline-flex text-center text-lg cursor-pointer hover:underline hover:underline-offset-[16px] transition-all'>
            Następny projekt:<strong>Lorem, ipsum dolor.</strong>
          </div>
        </div>
      </section>

      <Cta title='Masz ciekawy projekt? Potrzebujesz profesjonalnych usług ?! Napisz do mnie lub zadzwoń już teraz! (+48) 663 568 828' />
    </>
  );
}
