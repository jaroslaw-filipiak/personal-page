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
              Strona internetowa, która przyciągnie do Ciebie nowych klientów i
              zaprezentuje Twoją firmę w idealnym świetle!
            </h1>
          </div>

          <div className='flex flex-col lg:flex-row lg:w-9/12 gap-10 text-lg'>
            <div>
              <h2>
                Pełna obsługa stron internetowych. Potrzebujesz specjalisty do
                optymalizacji szybkośći? SEO? Wdrożenia projektu graficznego do
                WordPressa? Rozpocznijmy współpracę!
              </h2>
              <h3 className='mt-6'>
                Piekielnie szybkie i stabilne strony WordPress!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
