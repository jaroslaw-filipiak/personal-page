export default function PricingRow() {
  return (
    <section className='container pb-20 pt-20'>
      <h3 className='text-3xl mb-20'>1. Strony internetowe </h3>
      <ul>
        <li>
          <h4 className='text-lg'>Strony typu OnePage</h4>
          <div className='border-b mt-3 mb-10'></div>
          <div className='description mb-10 flex flex-col lg:flex-row gap-8'>
            <div className='text-lg w-full lg:w-5/12 xl:w-4/12'>
              Strony typu onepage
              <strong>
                &nbsp;to strony internetowe, które wyświetlają całą swoją
                zawartość na jednej długiej stronie, zamiast podzielać treści na
                kilka róznych podstron
              </strong>
              .
            </div>
            <div className='w-full lg:w-7/12 xl:w-8/12'>
              <p className='pb-6'>
                Cała zawartość strony jest umieszczona na jednej dłuższej
                stronie podzielonej na sekcje , a nawigacja opiera się na
                przewijaniu w dół lub w górę.Zamiast tradycyjnego menu
                nawigacyjnego, strony takie często mają menu typu scroll, które
                przenosi użytkowników do odpowiednich sekcji strony po
                kliknięciu. Strony typu onepage są często stosowane do
                promowania konkretnego produktu, usługi lub kampanii, skupiając
                uwagę użytkownika na głównym celu strony.
              </p>
              <p>
                <strong>
                  Strony onepage są popularne ze względu na swoją prostotę,
                  interaktywność i możliwość szybkiego przekazania informacji
                  użytkownikowi. Pozwalają na kreatywne podejście do prezentacji
                  treści i skoncentrowanie się na ważnych elementach bez
                  konieczności przemieszczania się między różnymi stronami.
                </strong>
              </p>
            </div>
          </div>
          <p>
            <strong>
              Szacukowe koszty: <span>Od 1300zł netto + VAT</span>
            </strong>
          </p>
          <p>Cena obejmuje:</p>

          <ul className='list-disc pt-5 pl-5'>
            <li>Przygotowanie dedykowanego projektu graficznego</li>
            <li>
              Wdrożenie projektu graficznego do w pełni funkcjonalnej strony www
            </li>
            <li>Wyprawka SEO</li>
            <li>Pakiet bezpieczeństwa</li>
            <li>Optymalizacja szybkości wczytywania</li>
            <li>Strona w pelni responsywna</li>
            <li>Panel administarcyjny do zarządzania stroną</li>
            <li>Wdrożenie consent mode v2</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
