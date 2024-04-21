'use client';

export default function HomeHero() {
  return (
    <section
      id='start'
      className='pt-32 lg:pt-40 2xl:pt-72 pb-40 lg:pb-40 2xl:pb-72  '
    >
      <div className='flex items-center justify-center'>
        <div className='container flex flex-col items-end relative'>
          <div>
            <h1 className='text-5xl text-balance pb-10'>
              Stworzę da Ciebie niesamowitą stronę internetową. Żadnych
              kompromisów - tylko autorski i w pełni profesjonany proces: Od
              projektu graficznego po wdrożenie.
            </h1>
          </div>

          <div className='flex flex-col lg:flex-row lg:w-9/12 gap-10 text-lg'>
            <div>
              <h2>
                Pełna obsługa stron internetowych. Potrzebujesz specjalisty do
                optymalizacji szybkośći ? SEO ? Wdrożenia projektu graficznego
                do WordPressa ? Rozpocznijmy współpracę!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
