'use client';

export default function Cta({
  title = 'Masz ciekawy projekt? Skontaktuj się ze mną już teraz! Napisz do mnie lub zadzwoń (+48) 663 568 828',
}: {
  title?: string;
}) {
  return (
    <section id='cta' className='pt-20 pb-20 bg-lightGray'>
      <div className='flex items-center justify-center'>
        <div className='container flex flex-col items-start'>
          <div>
            <h3 className='text-5xl text-balance pb-24'>{title}</h3>
          </div>

          <div className='flex flex-col lg:flex-row 2xl:w-10/12 gap-10 text-sm'>
            <div>
              <h4 className='text-base'>
                Porozmawiamy o Twoim projekcie — w ciągu 24 godzin możesz liczyć
                na pierwszy kontakt z mojej strony.
              </h4>
            </div>
            <div>
              <h4>
                Wycena przygotowana specjalnie dla Ciebie — przygotuję ofertę
                szytą na miarę, która zawierać będzie wszystkie najważniejsze
                czynniki.
                <br /> <br />
                Wspólnie stworzymy świetny projekt — po akceptacji oferty możemy
                rozpocząć prace nad Twoim projektem.
              </h4>
              <h4></h4>
            </div>
            <div>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
