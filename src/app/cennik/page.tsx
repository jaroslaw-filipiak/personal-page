import Nav from '@/components/Nav';
import PricingHero from '@/components/pricing/PricingHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Cennik stron internetowych, ile kosztuje strona internetowa ? | j-filipiak.pl',
  description:
    'Indywidualne oferty potrzebują indywidualnej wyceny, nie mniej zanim zdecydujesz się na rozmowę sprawdź w jakich “widełkach” cenowych się poruszam',
  keywords: [
    'Strony www cennik',
    'Landing page cena',
    'Strony WordPress cena',
    'Ile kosztuje strona internetowa',
    'Koszty WordPress',
    'WordPress cena',
    'Cennik stron internetowych',
  ],
  generator: 'Next.js',
  openGraph: {
    images: ['ogimage-contact.jpg'],
  },
};

export default function pricing() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cennik stron internetowych',
    description:
      'Indywidualne oferty potrzebują indywidualnej wyceny, nie mniej zanim zdecydujesz się na rozmowę sprawdź w jakich "widełkach" cenowych się poruszam',
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strony typu OnePage',
          description:
            'Strony internetowe, które wyświetlają całą swoją zawartość na jednej długiej stronie',
          provider: {
            '@type': 'LocalBusiness',
            name: 'j-filipiak.pl',
          },
        },
        price: '1299',
        priceCurrency: 'PLN',
        priceSpecification: {
          '@type': 'PriceSpecification',
          valueAddedTaxIncluded: false,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strony Landing Page',
          description:
            'Landing page to pojedyncza strona internetowa służąca do konwersji odwiedzających na klientów',
          provider: {
            '@type': 'LocalBusiness',
            name: 'j-filipiak.pl',
          },
        },
        price: '1399',
        priceCurrency: 'PLN',
        priceSpecification: {
          '@type': 'PriceSpecification',
          valueAddedTaxIncluded: false,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strony oparte o system CMS WordPress',
          description:
            'Witryna internetowa zbudowana przy użyciu systemu zarządzania treścią WordPress',
          provider: {
            '@type': 'LocalBusiness',
            name: 'j-filipiak.pl',
          },
        },
        price: '2199',
        priceCurrency: 'PLN',
        priceSpecification: {
          '@type': 'PriceSpecification',
          valueAddedTaxIncluded: false,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Budżetowa / Ekonomiczna strona www',
          description:
            'Prosta strona internetowa oparta o system CMS WordPress',
          provider: {
            '@type': 'LocalBusiness',
            name: 'j-filipiak.pl',
          },
        },
        price: '699',
        priceCurrency: 'PLN',
        priceSpecification: {
          '@type': 'PriceSpecification',
          valueAddedTaxIncluded: true,
        },
      },
    ],
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className='pricing'>
        <Nav />
        <PricingHero />
        {/* one page */}
        <section className='container pb-20'>
          <h3 className='text-3xl mb-20'>1. Strony internetowe </h3>
          <ul>
            <li>
              <h4 className='text-2xl'>Strony typu OnePage</h4>
              <div className='border-b mt-3 mb-10'></div>
              <div className='description mb-10 flex flex-col lg:flex-row gap-8'>
                <div className='text-lg w-full lg:w-5/12 xl:w-6/12 '>
                  Strony typu onepage
                  <strong>
                    &nbsp;to strony internetowe, które wyświetlają całą swoją
                    zawartość na jednej długiej stronie, zamiast podzielać
                    treści na kilka róznych podstron
                  </strong>
                  .
                </div>
                <div className='w-full lg:w-7/12 xl:w-6/12 '>
                  <p className='pb-6'>
                    Cała zawartość strony jest umieszczona na jednej dłuższej
                    stronie podzielonej na sekcje , a nawigacja opiera się na
                    przewijaniu w dół lub w górę.Zamiast tradycyjnego menu
                    nawigacyjnego, strony takie często mają menu typu scroll,
                    które przenosi użytkowników do odpowiednich sekcji strony po
                    kliknięciu. Strony typu onepage są często stosowane do
                    promowania konkretnego produktu, usługi lub kampanii,
                    skupiając uwagę użytkownika na głównym celu strony.
                  </p>
                  <p>
                    <strong>
                      Strony onepage są popularne ze względu na swoją prostotę,
                      interaktywność i możliwość szybkiego przekazania
                      informacji użytkownikowi. Pozwalają na kreatywne podejście
                      do prezentacji treści i skoncentrowanie się na ważnych
                      elementach bez konieczności przemieszczania się między
                      różnymi stronami.
                    </strong>
                  </p>
                </div>
              </div>
              <p>
                <strong>
                  Szacukowe koszty: <span>Od 1299zł netto + VAT</span>
                </strong>
              </p>
              <p>Cena obejmuje:</p>

              <ul className='list-disc pt-5 pl-5'>
                <li>Przygotowanie dedykowanego projektu graficznego</li>
                <li>
                  Wdrożenie projektu graficznego do w pełni funkcjonalnej strony
                  www
                </li>
                <li>Wyprawka SEO</li>
                <li>Pakiet bezpieczeństwa</li>
                <li>Optymalizacja szybkości wczytywania</li>
                <li>Strona w pelni responsywna</li>
                <li>Panel administarcyjny do zarządzania stroną</li>
                <li>Wdrożenie consent mode v2</li>
              </ul>
            </li>
          </ul>
        </section>
        {/* one page */}
        <section className='container pb-20 pt-20'>
          <ul>
            <li>
              <h4 className='text-2xl'>Strony Landing Page</h4>
              <div className='border-b mt-3 mb-10'></div>
              <div className='description mb-10 flex flex-col lg:flex-row gap-8'>
                <div className='text-lg w-full lg:w-5/12 xl:w-6/12'>
                  Landing page (strona docelowa) to pojedyncza strona
                  internetowa, na którą użytkownik trafia po kliknięciu w link z
                  zewnętrznego źródła, takiego jak reklama, newsletter, czy
                  wynik wyszukiwania.
                  <strong>
                    Celem landing page jest przyciągnięcie uwagi użytkownika i
                    zachęcenie go do podjęcia określonej akcji, takiej jak
                    zakup, rejestracja, pobranie pliku, wypełnienie formularza
                    itp.
                  </strong>
                </div>
                <div className='w-full lg:w-7/12 xl:w-6/12'>
                  <p className='pb-6'>
                    Landing page skupia się na jednej konkretnie określonej
                    ofercie, promocji, produktu lub usłudze.Posiada wyraźny CTA
                    (Call to Action) zachęcające użytkownika do podjęcia
                    określonej akcji, np. "Zamów teraz", "Zapisz się", "Pobierz
                    darmowy e-book", "Skontaktuj się z nami". Landing page jest
                    kluczowym narzędziem marketingowym, służącym do konwersji
                    odwiedzających na klientów lub aktywnych użytkowników.
                    Dzięki odpowiedniemu projektowaniu i optymalizacji, landing
                    page może skutecznie zwiększyć współczynnik konwersji i
                    efektywność kampanii marketingowej.
                  </p>
                </div>
              </div>
              <p>
                <strong>
                  Szacukowe koszty: <span>Od 1399zł netto + VAT</span>
                </strong>
              </p>
              <p>Cena obejmuje:</p>

              <ul className='list-disc pt-5 pl-5'>
                <li>
                  Przygotowanie dedykowanego projektu graficznego zgodnie z
                  zasadami projektowania konwertujących stron spredażowych
                </li>
                <li>
                  Wdrożenie projektu graficznego do w pełni funkcjonalnej strony
                  www
                </li>
                <li>Wyprawka SEO</li>
                <li>Optymalizacja szybkości wczytywania</li>
                <li>Strona w pelni responsywna</li>
                <li>Wdrożenie consent mode v2</li>
                <li>
                  Podpięcie danych analitycznych: Google Analytics / Hotjar /
                  Microsoft Clarity itp.
                </li>
                <li>
                  Opcjonalnie: przygotowanie tekstów przez copywritera: od 800zł
                  netto strona
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {/* wordpress */}
        <section className='container pb-20 pt-20'>
          <ul>
            <li>
              <h4 className='text-2xl'>Strony oparte o system CMS WordPress</h4>
              <div className='border-b mt-3 mb-10'></div>
              <div className='description mb-10 flex flex-col lg:flex-row gap-8'>
                <div className='text-lg w-full lg:w-5/12 xl:w-6/12'>
                  Strona oparta o WordPress to witryna internetowa zbudowana
                  przy użyciu systemu zarządzania treścią (CMS) o nazwie
                  WordPress.
                  <strong>
                    WordPress jest jednym z najpopularniejszych i najczęściej
                    używanych systemów CMS na świecie, który umożliwia łatwe
                    tworzenie, zarządzanie i aktualizowanie stron internetowych.
                  </strong>
                </div>
                <div className='w-full lg:w-7/12 xl:w-6/12'>
                  <p className='pb-6'>
                    Strona oparta o WordPress może mieć różne zastosowania,
                    począwszy od prostych stron firmowych, blogów, portfolio, aż
                    po zaawansowane portale internetowe czy sklepy internetowe.
                    Dzięki prostocie obsługi i szerokim możliwościom
                    dostosowania, WordPress jest popularnym wyborem dla osób i
                    firm chcących stworzyć funkcjonalną i atrakcyjną witrynę
                    internetową.
                  </p>
                </div>
              </div>
              <p>
                <strong>
                  Szacukowe koszty: <span>Od 2199zł netto + VAT</span>
                </strong>
              </p>
              <p>Cena obejmuje:</p>

              <ul className='list-disc pt-5 pl-5'>
                <li>
                  Przygotowanie dedykowanego projektu graficznego lub
                  modyfikacja gotowego motywu pod określone wymagania klienta (
                  strona głównia + do 5 podstron)
                </li>
                <li>Przygotowanie dedykowanej strony typu 404</li>
                <li>
                  Przygotowanie stron z wpisami, szablon strony podejyńczego
                  wpisu
                </li>
                <li>Formularz kontaktowy, galeria zdjęc</li>
                <li>
                  Wdrożenie projektu graficznego do w pełni funkcjonalnej strony
                  www
                </li>
                <li>Wyprawka SEO</li>
                <li>Optymalizacja szybkości wczytywania</li>
                <li>Strona w pelni responsywna</li>
                <li>Wdrożenie consent mode v2</li>
                <li>
                  Podpięcie danych analitycznych: Google Analytics / Hotjar /
                  Microsoft Clarity itp.
                </li>
                <li>Dostęp do panelu administracyjnego</li>
                <li>Instalacja na serwerze klienta</li>
                <li>Gwarancja oraz wsparcie techniczne</li>
              </ul>
            </li>
          </ul>
        </section>
        {/* tanie budżetowe strony  */}
        <section className='container pb-20 pt-20'>
          <ul>
            <li>
              <h4 className='text-2xl'>Budżetowa / Ekonomiczna strona www</h4>
              <div className='border-b mt-3 mb-10'></div>
              <div className='description mb-10 flex flex-col lg:flex-row gap-8'>
                <div className='text-lg w-full lg:w-5/12 xl:w-6/12'>
                  Oferta dla klientów, którzy potrzebują prostej strony
                  internetowej aby zaistnieć w internecie.
                  <strong>
                    &nbsp; Tanie strony www to oparte o system CMS WordPress
                  </strong>
                </div>
                <div className='w-full lg:w-7/12 xl:w-6/12'>
                  <p className='pb-6'>
                    Oferta składa się z instalacji systemu WordPress na serwerze
                    klienta oraz uzupełnienia wybranego motywu treścią
                    dostarczoną od klienta.
                  </p>
                  <p>
                    <strong>Płatność za usługę: przedpłata 100%</strong>
                  </p>
                  <p>
                    <strong>Stronę otrzymasz już po 3 dniach </strong>
                  </p>
                  <a
                    className='bg-dark hover:opacity-80 transition-all text-white p-4 inline-block mt-3'
                    href='https://app.easycart.pl/checkout/28473636/budzetowa-strona-www'
                  >
                    Kup teraz i otrzymaj stronę w ciągu 3 dni roboczych!
                  </a>
                </div>
              </div>
              <p>
                <strong>
                  Cena: <span>699 zł brutto</span>
                </strong>
              </p>
              <p>Co otrzymasz:</p>

              <ul className='list-disc pt-5 pl-5'>
                <li>System CMS - Panel do zarządzania stroną</li>
                <li>Podstawowy szablon graficzny</li>
                <li>
                  Rozmiar strony obejmuje przygotowanie strony głównej + strony
                  kontaktowej
                </li>
                <li>Wsparcie oraz pomoc techniczna</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
