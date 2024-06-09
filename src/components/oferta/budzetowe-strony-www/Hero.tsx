'use client';

import Form from '@/components/oferta/budzetowe-strony-www/forms/Form';

export default function Hero() {
  return (
    <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42'>
      <div className='flex items-center justify-center'>
        <div className='container flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16'>
          <div className='lg:w-6/12 xl:w-8/12'>
            <h1 className='text-5xl text-balance pb-10'>
              Profesjonalna strona www w przystępnej cenie ?
            </h1>
            <h2 className='text-lg'>
              Oczywiście że to możliwe. Dostarcze Tobie profesjonalną stronę www
              w pełni przygotowaną pod SEO. Wraz z panelem administratora dzieki
              czemu będziesz mógł samodzielnie zarządzać swoją stroną
            </h2>
            <ul className='mt-10 gap-1 flex flex-col'>
              <li>
                <h3 className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-check'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M5 12l5 5l10 -10' />
                  </svg>
                  Niska cena!
                </h3>
              </li>
              <li>
                <h3 className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-check'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M5 12l5 5l10 -10' />
                  </svg>{' '}
                  Wdrożenie już od 3 dni roboczych
                </h3>
              </li>
              <li>
                <h3 className='flex items-center gap-2'>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-check'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M5 12l5 5l10 -10' />
                  </svg>
                  Strona typu One page idealna na start!
                </h3>
              </li>
            </ul>
          </div>
          <div className='border border-[#d7d7d7] shadow-md lg:w-6/12 xl:w-4/12 p-10 pb-10'>
            <Form></Form>
          </div>
        </div>
      </div>
    </section>
  );
}
