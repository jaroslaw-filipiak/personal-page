'use client';

import Link from 'next/link';

export default function Cta({
  title = 'Masz ciekawy projekt? Skontaktuj się ze mną już teraz! Napisz do mnie lub zadzwoń (+48) 663 568 828',
}: {
  title?: string;
}) {
  return (
    <section className='pt-20 pb-20 bg-lightGray'>
      <div id='cta' className='cta--wrapper bg-dark-3 mt-0'>
        <div className='cta--inner container'>
          <div className='cta--header'>
            <div className='pr-5'>
              <img src='~/assets/uploads/jarek-avatar.png' alt='' />
            </div>
            <div className='pl-5'>
              <div className='text-base'>
                Jesteś zainteresowany współpracą? Porozmawiajmy o Twoim
                projekcie.
              </div>
              <div>
                <h4 className='text--reveal'>
                  Skontaktuj się ze mną i uzyskaj
                  <span>
                    wycenę w 24 godziny
                    {/* <img src='~/assets/uploads/smush.svg' alt='' /> */}
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className='cta--middle pl-8'>
            <div>
              <Link
                className='bg-dark hover:opacity-80 transition-all text-white block pt-5 pb-5 pr-10 pl-10  items-center justify-center text-center'
                href='/kontakt'
              >
                Strona kontaktowa
              </Link>
            </div>
          </div>
          <div className='cta--footer'>
            <p>
              Porozmawiamy o Twoim projekcie — w ciągu 24 godzin możesz liczyć
              na pierwszy kontakt z mojej strony.
            </p>
            <p>
              Wycena przygotowana specjalnie dla Ciebie — przygotuję ofertę
              szytą na miarę, która zawierać będzie wszystkie najważniejsze
              czynniki.
            </p>
            <p>
              Wspólnie stworzymy świetny projekt — po akceptacji oferty możemy
              rozpocząć prace nad Twoim projektem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
