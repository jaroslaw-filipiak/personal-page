import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav className='border fixed left-0 top-0 w-screen h-10'>
        <ul className='flex gap-3 pt-3 pb-3 border border-dashed border-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/o-mnie'>O mnie</Link>
          </li>
        </ul>
      </nav>
      <section className='h-screen flex items-center justify-center'>
        <div className='container flex flex-col items-end gap-10'>
          <div>
            <h1 className='text-5xl text-balance'>
              Tworzę i rozwijam aplikacje szyte na miarę. Obsługuję klientów
              kompleksowo - od koncepcji przez projekt graficzny, finalne
              wdrożenie oraz stałą obsługę. Pracuję tylko w najnowszych
              technologiach
            </h1>
          </div>

          <div className='flex lg:w-7/12 gap-10 text-base'>
            <div>
              Znamy narzędzia branżowe, jeśli chodzi o tworzenie dedykowanych
              aplikacji (mobilnych i webowych). Oferujemy znacznie więcej niż
              tylko umiejętności.
            </div>
            <div>
              Znamy narzędzia branżowe, jeśli chodzi o tworzenie dedykowanych
              aplikacji (mobilnych i webowych). Oferujemy znacznie więcej niż
              tylko umiejętności.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
