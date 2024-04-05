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
      <section id='skills' className='pt-72 pb-72 bg-white'>
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

      <section id='skills' className='pb-72 bg-white'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-start'>
            <div>
              <h3 className='text-5xl text-balance pb-24 hidden'>
                Mój największy kapitał to ludzie z którymi pracuje
              </h3>
            </div>

            <div className='flex items-end gap-10'>
              <div>
                <h4 className='text-lg'>
                  Jestem freelancerem i współpracuje blisko z klientem. Nie
                  mniej posiadam kameralne grono osób z którymi współpracuje.
                  Mam “pod ręką” kilka świetnych osób, które pomagają mi w
                  codziennej pracy. Potrzebujesz fotografa ? montazysty ? osoby
                  do konsultacji od AI ? Do wiekszych lub bardziej wymagających
                  projektów jestem w stanie utowrzyć wiekszy zespół.
                </h4>
              </div>
            </div>

            <div className='mt-24'>
              <Image
                src='/img/jaroslaw-filipiak.webp'
                alt='Jarosław Filipiak'
                width={434}
                height={688}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
