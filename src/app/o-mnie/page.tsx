'use client';
import Link from 'next/link';
import Image from 'next/image';
import Cta from '@/components/Cta';

export default function AboutMe() {
  return (
    <>
      <section
        id='about'
        className='h-screen flex items-center justify-center bg-dark text-white'
      >
        <div className='container'>
          <h1 className='text-5xl text-balance'>
            Nazywam się Jarosław Filipiak, jestem doświadczonym grafikiem oraz
            front-end developerem. Specjalizuje się w projektowaniu oraz
            kodowaniu stron internetowych a także kompleksowych aplikacji
            webowych.
          </h1>
        </div>
      </section>
      <section id='skills' className='pt-20 pb-72 bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-end'>
            <div>
              <h2 className='text-5xl text-balance pb-24'>
                Posiadam solidny zestaw umiejętności i technologii związanych z
                całą otoczką procesu projektowania.
              </h2>
            </div>

            <div className='flex items-start gap-10 '>
              <div>
                <h3 className='text-lg'>
                  Rozpoczynałem swoją przygodę jako grafik komputerowy, w
                  trakcie ponad 10 letniej przygody zdobyłem kompetencje, które
                  doprowadziły mnie do pracy jako front-end developer. A to
                  jeszcze nie koniec mojej przygody. Uważam, że człowiek musi
                  się rozwijać, bo gdy się nie rozwija to tak naprawdę się
                  cofa... ponieważ świat idzie do przodu.
                </h3>
              </div>
              <div className='text-sm'>
                <p className='mb-10'>
                  Doświadczenie zdobywałem zarówno w większych agencjach jak i
                  obsługując klientów “mniej technicznych”Uważnie wsłuchuję się
                  w potrzeby każdego klienta. Pracując jako freelancer mam tę
                  swobodę że mogę zasugerować więcej różnych rozwiązań/wariantów
                  wdrożenia projektu informatycznego aniżeli agencja, która
                  jednak jest mocno zunifikowana na jedym stacku
                  technologicznym.
                </p>
                <p>
                  Oferuje indywidualne , partnerskie podejście , ogromne
                  doświadczenie oraz jasne warunki współpracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='cooperation' className='pb-72 bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-start'>
            <div></div>

            <div className='flex items-center justify-between'>
              <div className='w-4/12'>
                <Image
                  src='/img/jaroslaw-filipiak.webp'
                  alt='Jarosław Filipiak'
                  width={434}
                  height={688}
                ></Image>
              </div>
              <div className='flex-1'>
                <h3 className='text-5xl text-balance pb-24'>
                  Oferuje indywidualne , partnerskie podejście w kameralnym
                  gronie, ogromne doświadczenie oraz jasne warunki współpracy.
                </h3>
                <h4 className='text-lg'>
                  Współpraca bezpośrednio ze mną to gwarancja, że Twoje zlecenie
                  zostanie wykonane z najwyższą starannością, zgodnie z
                  najnowszymi trendami. Masz również pewność szybkiego przepływu
                  informacji oraz tego, że kwota na fakturze nie będzie zawyżona
                  o koszty aparatu administracyjnego, wynajmu biura czy też
                  kosztów floty samochodowej itp.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
