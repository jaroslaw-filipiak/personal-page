import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import { Metadata } from 'next';
import PricingConfigurator from '@/components/pricingConfigurator/PricingConfigurator';

export const metadata: Metadata = {
  title:
    'Cennik stron internetowych, ile kosztuje strona internetowa? | j-filipiak.pl',
  description:
    'Poznaj realne koszty stron internetowych, ile kosztuje strona internetowa w 2025 roku?, cena landig page, one page, wordpress',
};

export default function howMuchDoesItCost() {
  const features = [
    'Dowiesz się ile kosztuje strona internetowa',
    'Dowiesz się co wpływa na różnice w cenie strony',
    'Dowiesz się jakie są różnicę w poszczególnych podejściach do projektowania stron',
    'Sam wybierzesz optymalny sposób wdrożenia strony internetowej i poznasz realne widełki cenowe',
  ];

  return (
    <div className='how-much-cost-page'>
      <Nav />
      <Hero
        title='Ile kosztuje strona internetowa?'
        subtitle='Dlaczego podobna strona kosztuje 500 zł u jednego wykonawcy, a  5000 zł u kolejnego? Poznaj rzeczywiste składniki ceny i dowiedz się co wpływa na koszt strony internetowej korzystając z mojego konfiguratora'
        features={features}
        hasForm={true}
        formTitle='Potrzebujesz indywidualnej oferty?'
        formId={536}
      />
      {/* Dlaczego ceny tak bardzo sie roznia */}
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 bg-dark text-lightGray w-full'>
        <div className='container'>
          <h3 className='text-5xl max-w-5xl'>
            Dlaczego ceny stron internetowych tak bardzo się różnią?
          </h3>
          <h4 className='text-xl pt-10 pb-32'>
            Można powiedzieć, że strona internetowa kosztuje tyle co czerwony
            samochód i będzie w tym sporo prawdy, cena podobnej strony
            internetowej może róznić się diametralnie a na cene wpływa mnóstwo
            czynników, kilka i tylko kilka z nich to:
          </h4>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
            {/*   Typ i rozmiar strony. */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
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
                  Typ i rozmiar strony
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Pod pojęciem strona internetowa kryje się zarówno prosta
                  strona wizytówka, strona typu landing page jak i ogromna
                  firmowa strona z mnóstwem podstron, czy też rozbudowany sklep
                  internetowy
                </p>
              </div>
            </div>

            {/*   Funkcjonalności strony */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
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
                  możemy wyróznic chcoiażby blog, newsletter, panel klienta,
                  rozbudowane formularze, automatyzacje, przystosowanie pod SEO
                  oraz o wiele więcej. Każda funkcjonalnośc to dodatkowe koszty
                </p>
              </div>
            </div>

            {/*   Sposób wdrożenia
             */}
            <div className='flex flex-col items-start justify-start w-full xl:w-4/12  xl:pl-10 xl:pr-10  group relative top-0 transition-all '>
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
                  Sposób wdrożenia
                </h4>
                <p className='text-sm text-gray text-balance'>
                  Strona internetowa może być wykonana z tzw: gotowego szablonu
                  lub zaprojektowana w pełnii indywidualnie. Indywidualne strony
                  już na samym wstepie kosztują parę tysięcy więcej aniżeli
                  strony na tzw: ‘Gotowcach’
                </p>
              </div>
            </div>
          </div>
          <div className='spacer border-b-[1px] border-lightGray mt-32 mb-6 border-opacity-35'></div>

          <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
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
            <h6 className='text-xl text-center pt-20'>
              To tylko kilka ze składowych, które wpływają na cenę strony
              interentowej. Dlatego też koszt wykonania strony internetowej może
              różnić się diametralnie.
            </h6>
          </div>
        </div>
      </section>
      {/* Konfigurator */}
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 w-full'>
        <div className='container'>
          <h3 className='text-5xl'>
            Ile kosztuje strona internetowa? skorzystaj z konfiguratora i
            dowiedz się jaki budżet powinieneś zabezpieczyć na jej wykonanie
          </h3>
          <h4 className='text-lg mt-6 max-w-5xl'>
            Nasz konfigurator pomoże Ci zorientować się w przedziale cenowym
            Twojego projektu. Pamiętaj, że ostateczna wycena może się różnić w
            zależności od szczegółowych wymagań.
          </h4>
        </div>
      </section>
      <PricingConfigurator />
    </div>
  );
}
