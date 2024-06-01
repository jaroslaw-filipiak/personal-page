export default function Testimonials() {
  return (
    <>
      <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42 w-full bg-black text-white testimonials overflow-hidden'>
        <div>
          <div className='container'>
            {/* article to będzie props tablica  */}

            <article>
              <blockquote cite='https://g.co/kgs/gRRiwC5'>
                <p className='text-3xl mb-32 '>
                  Bardzo dobry kontakt i duża wiedza. Znalazłam kontakt do pana
                  Jarosława przy wykonywaniu jednego zlecenia, natomiast szybko
                  postanowiłam skorzystać z jego pomocy również przy współpracy
                  z innym klientem. Landing page wykonane starannie, a wszelkie
                  poprawki były wprowadzone niezwłocznie po ich zgłoszeniu.
                  Zdecydowanie jest to osoba, do której wraca się w przypadku
                  kolejnych zleceń. Polecam i pozdrawiam :)
                </p>
                <div className='flex items-center gap-20'>
                  <footer> Malwina Nowakowska, Opinia z Google</footer>
                </div>
              </blockquote>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
