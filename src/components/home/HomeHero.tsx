'use client';

export default function HomeHero() {
  return (
    <section
      id='start'
      className='pt-32 lg:pt-40 2xl:pt-72 pb-40 lg:pb-40 2xl:pb-72'
      // style={{
      //   background: 'url(/img/hero2.png) no-repeat center center/cover',
      // }}
    >
      <div className='flex items-center justify-center'>
        <div className='container flex flex-col items-start relative'>
          <div>
            <h1 className='text-5xl text-balance pb-10'>
              Profesjonalne strony internetowe, które przyciągają klientów.
            </h1>
          </div>

          <div className='flex flex-col lg:flex-row lg:w-9/12 gap-10 text-lg'>
            <div>
              <h2>Strony internetowe oparte min. o system WordPress.</h2>
              <h3>Optymalizacja SEO</h3>
              <h3>Piekielnie szybkie i stabilne strony</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
