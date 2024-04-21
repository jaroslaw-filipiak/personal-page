'use client';

export default function LandingPage() {
  return (
    <>
      <div className='page-content mx-auto bg-[#fff]'>
        <div className='bg-light-1 font-Sora pt-40 xl:pt-32 pb-24 w-full lg:min-h-screen strona-www-hero'>
          <div className='container'>
            <h1 className='text-dark-5 text-xl xl:text-4xl text-center font-semibold xl:leading-[80px]'>
              Strona internetowa
              <br />
              <span className='text-4xl xl:text-8xl font-extrabold'>
                <span className='text-accent'>Do końca stycznia</span>
                <br />
                w cenie <br className='block lg:hidden' />
                1499 zł brutto
              </span>
            </h1>
            <ul className='w-8/12 mx-auto xl:w-full font-Sora font-semibold text-base lg:text-lg text-dark-5 flex flex-col items-start lg:flex-row gap-4 xl:gap-10 xl:items-center justify-center pt-10'>
              <li className='flex items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck /> */}
                <div>Domena .pl na rok gratis</div>
              </li>
              <li className='flex items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck /> */}
                <div>Hosting na rok gratis</div>
              </li>
              <li className='flex items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck /> */}
                <div>Certyfikat ssl w cenie</div>
              </li>
            </ul>
            <div className='w-full flex items-center justify-center pt-12 xl:pt-20'>
              <button className='bg-accent text-white transition-all scale-100 rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:bg-dark-5 flex items-center gap-3 cursor-pointer hover:scale-105'>
                {/* <IconArrowNarrowRight /> */}
                Zamów teraz!
              </button>
            </div>
          </div>
        </div>

        <div className='bg-[#fff] font-Sora pt-10 xl:pt-40 pb-10 xl:pb-40 w-full pl-7 pr-7'>
          <div className='container'>
            <div className='text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
              Jasne warunki współpracy
            </div>
            <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
              Żadnych dodatkowych i <br />
              ukrytych kosztów
            </h3>
            <h4 className='text-dark-5 text-xl font-semibold max-w-2xl mt-6 mb-6'>
              Profesjonalna strona internetowa oparta o najpopularniejszy na
              świecie sytem WordPress. 43% sieci działa na WordPressie.
            </h4>
            <ul className='font-Sora font-semibold text-dark-5 flex flex-col gap-4 items-start justify-start'>
              <li className='flex items-start xl:items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                <div>Strona dostosowana do telefonów i tabletów</div>
              </li>
              <li className='flex items-start xl:items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                <div>Optymalizacja czasu wczytywania</div>
              </li>
              <li className='flex items-start xl:items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                <div>Profesjonalne wykonanie</div>
              </li>
              <li className='flex items-start xl:items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                <div>
                  Roczny hosting na naszych serwerach oraz domena .pl na rok
                  gratis
                </div>
              </li>
              <li className='flex items-start xl:items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                <div>
                  Prosty w obsłudze system zarządzania treścią na stronie
                </div>
              </li>
              <li className='flex items-start xl:items-center justify-start xl:justify-center gap-3'>
                {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                <div>
                  Masa dodatków do wyboru min: formularze kontaktowe , galerie,
                  mapka google, newsletter itp
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full flex items-center justify-center xl:mb-20'>
          <div className='w-9/12 bg-light-1 rounded-xl pt-10 pb-10 pl-10 pr-10 xl:pl-20 xl:pr-20'>
            <h3 className='text-3xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
              Roczny hosting na naszych <br />
              serwerach
            </h3>
            <h4 className='text-[#80818C] text-xl font-semibold max-w-2xl mt-6 mb-6'>
              A także dodatkowo domena z końcówką .pl na 12 miesięcy gratis.
            </h4>
          </div>
        </div>

        <div className='xl:mb-20 mb-10 mt-20 w-full xl:pl-20 pl-7 pr-7 mx-auto'>
          <div className='flex flex-col lg:flex-row items-stretch justify-center'>
            <div className='w-full xl:w-5/12'>
              <div className='text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
                Panel administracyjny
              </div>
              <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
                Niesamowity panel <br />
                administratora
              </h3>
              <ul className='font-Sora mt-10'>
                <li className='flex flex-col'>
                  <div className='flex gap-6'>
                    <div>
                      <div className='w-9 h-9 rounded-full bg-light-1 flex items-center justify-center'>
                        {/* <IconInfinity className="text-[#64656c]" /> */}
                      </div>
                    </div>
                    <div>
                      <h4 className='text-dark-5 text-2xl font-semibold mb-3'>
                        Potężne funkcje i nieograniczone możliwości
                      </h4>
                      <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                        Dodanie funkcji sklepu internetowego ? a może chcesz
                        uruchomić liste mailingową czy stworzyć zaawansowany
                        formularz ? wybierz z pośród 55 000 wtyczek i dodatków
                      </h5>
                    </div>
                  </div>
                </li>
                <li className='flex flex-col mt-12'>
                  <div className='flex gap-6'>
                    <div>
                      <div className='w-9 h-9 rounded-full bg-light-1 flex items-center justify-center'>
                        {/* <IconPencil className="text-[#64656c]" /> */}
                      </div>
                    </div>
                    <div>
                      <h4 className='text-dark-5 text-2xl font-semibold mb-3'>
                        Łatwa edycja stron oraz możliwości rozbudowy
                      </h4>
                      <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                        Dodanie nowej podstrony czy też wpisu na bloga jest
                        dziecinnie proste.Możesz edytować strony samodzielnie
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='w-full xl:w-7/12 bg-light-1 rounded-3xl flex items-center justify-center relative'>
              <img
                className='hidden lg:flex'
                src='@/assets/uploads/admin_panel.png'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='w-full mb-20 xl:mt-20 max-w-[1920px] xl:pr-20 pl-7 pr-7 mx-auto'>
          <div className='flex flex-col lg:flex-row items-stretch justify-center'>
            <div className='w-full xl:w-6/12 bg-light-1 rounded-3xl flex items-center justify-center'>
              <img
                className='w-full h-auto'
                src='@/assets/uploads/oferta/rwd.jpg'
                alt=''
              />
            </div>
            <div className='w-full xl:w-6/12 xl:pl-20'>
              <div className='hidden text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 lg:inline-flex pt-3 pb-3 mb-6'>
                widoczność na każdym urządzeniu
              </div>
              <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold mt-10 lg:mt-0'>
                Strona przystosowana <br />
                do telefonów i tabletów
              </h3>
              <ul className='font-Sora mt-10'>
                <li className='flex flex-col'>
                  <div className='flex gap-6'>
                    <div>
                      <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                        Zdecydowana większośc ruchu na stronach internetowych
                        pochodzi z urządzeń mobilnych. Zadbam o to aby strona
                        poprawnie wyświetlała się na telefonie komórkowym ,
                        tablecie czy laptopie oraz dodatkowo zoptymalizujemy
                        szybkość wczytywania
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>

              <ul className='font-Sora mt-10 font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start'>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>
                    Strona będzie poprawnie wyświetlana
                    <br />
                    na telefonie komórkowym , tablecie czy laptopie
                  </div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Tworzę zgodnie z zasadą "mobile first design"</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className='text-[#48b02c] min-w-[24px] max-w-[24px]' /> */}
                  <div>
                    Dbam o poprawne wyświetlanie na nowoczesnych przeglądarkach
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='w-full xl:mb-20 pl-7 pr-7'>
          <div className='container'>
            <ul className='font-Sora xl:mt-10 flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-0'>
              <li className='flex flex-col'>
                <div className='flex gap-6'>
                  <div>
                    <div className='w-16 h-16 rounded-full bg-accent flex items-center justify-center'>
                      {/* <IconMailFilled className="text-white" /> */}
                    </div>
                  </div>
                  <div>
                    <h4 className='text-dark-5 text-2xl font-semibold mb-3'>
                      Konta pocztowe dla Twojej firmy
                    </h4>
                    <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                      Otrzymasz dostęp do kont pocztowych w twojej domenie np:
                      biuro@nazwafirmy.pl
                    </h5>
                  </div>
                </div>
              </li>
              <li className='flex flex-col'>
                <div className='flex gap-6'>
                  <div>
                    <div className='w-16 h-16 rounded-full bg-accent flex items-center justify-center'>
                      {/* <IconFileCertificate className="text-white" /> */}
                    </div>
                  </div>
                  <div>
                    <h4 className='text-dark-5 text-2xl font-semibold mb-3'>
                      RODO
                    </h4>
                    <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                      Strona będzie przystosowana również pod tym względem.
                      Będzie posiadała mechanizm zarządzania cookies
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full xl:mb-20 mt-20 max-w-[1920px] xl:pl-20 pl-7 pr-7 mx-auto'>
          <div className='flex flex-col lg:flex-row items-stretch justify-center'>
            <div className='w-full xl:w-5/12'>
              <div className='text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
                Google cie pokocha
              </div>
              <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
                Pozycjonowanie
              </h3>
              <ul className='font-Sora xl:mt-10 mt-6'>
                <li className='flex flex-col'>
                  <div className='flex gap-6'>
                    <div>
                      <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                        Tworzę strony z myślą o pozycjonowaniu dlatego stosujemy
                        szereg dobrych praktyk dzięki którym strona będzie
                        przystosowana pod SEO
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
              <h4 className='text-dark-5 text-2xl font-semibold mb-6 mt-6'>
                Co dokładnie otrzymam ?
              </h4>
              <ul className='font-Sora font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start'>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>
                    Prawidłowe oznaczenie tagów na stronie. min 1 tag h1 na
                    każdej stronie
                  </div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Konfiguracja pluginu pod SEO</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Ustawienie fraz kluczowych</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Odpowienie meta tagi</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Optymalizacja szybkości wczytywania strony</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Ustawienie mapy witryny</div>
                </li>
              </ul>
            </div>
            <div className='w-full xl:w-7/12 bg-light-1 rounded-3xl flex items-center justify-center'>
              <img
                className='w-full h-auto hidden lg:flex'
                src='@/assets/uploads/oferta/seo.jpg'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='w-full xl:mb-20 mt-20 max-w-[1920px] xl:pr-20 mx-auto pl-7 pr-7'>
          <div className='flex flex-col lg:flex-row items-stretch justify-center'>
            <div className='w-full xl:w-6/12 bg-light-1 rounded-3xl flex items-center justify-center'>
              <img
                className='w-full h-auto hidden lg:flex'
                src='@/assets/uploads/oferta/ssl.jpg'
                alt=''
              />
            </div>
            <div className='w-full xl:w-6/12 xl:pl-20'>
              <div className='text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
                szyfrowane połączenie
              </div>
              <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
                Certyfikat SSL <br />
                czyli tzw: Kłódka
                <br />
                przy adresie strony
              </h3>
              <div>
                <div className='flex flex-col mt-10'>
                  <div className='flex items-center gap-6'>
                    <div>
                      <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center'>
                        {/* <IconAlertTriangleFilled className="text-white" /> */}
                      </div>
                    </div>
                    <div>
                      <h5 className='text-dark-5 text-lg font-semibold max-w-xl'>
                        Strony bez tego certyfikatu są oznaczane jako
                        niebezpieczne!
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <ul className='font-Sora mt-10'>
                <li className='flex flex-col'>
                  <div className='flex gap-6'>
                    <div>
                      <h5 className='text-[#80818C] text-base font-semibold max-w-xl'>
                        Certyfikat SSL to bardzo ważny aspekt oferty zwłaszcza,
                        że taki certyfikat potrafi kosztować kilkaset złotych
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- optymalizacja szybkości --> */}
        <div className='w-full mb-20 mt-20 max-w-[1920px] xl:pl-20 mx-auto pl-7 pr-7'>
          <div className='flex flex-col lg:flex-row items-stretch justify-center'>
            <div className='w-full xl:w-6/12'>
              <div className='text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
                Szybkość decyduje o wrażeniach użytkowników
              </div>
              <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
                Optymalizacja <br />
                szybkości wczytywania
              </h3>
              <h5 className='text-[#80818C] text-base font-semibold max-w-xl mt-6 xl:mt-10'>
                Każda sekunda opóźnienia we wczytywaniu strony powoduje spadek
                konwersji o nawet 20 procent w handlu detalicznym. Dlatego
                zadbam o to aby strona ładowała się tak szybko jak to tylko
                możliwe.
              </h5>
              <h4 className='text-dark-5 text-2xl font-semibold mb-6 mt-6'>
                Co dokładnie otrzymam ?
              </h4>
              <ul className='font-Sora font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start'>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Minifikacja zasobów css/js</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Optymalizacja zasobów graficznych</div>
                </li>
                <li className='flex items-start justify-center gap-3'>
                  {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
                  <div>Ustawienie systemu pamięci cache</div>
                </li>
              </ul>
            </div>
            <div className='w-full xl:w-6/12 bg-light-1 rounded-3xl flex items-center justify-center'>
              <img
                className='hidden lg:flex'
                src='@/assets/uploads/oferta/fast.jpg'
                alt=''
              />
            </div>
          </div>
        </div>

        {/* <!-- portfolio -->
    <!-- 23knots + siborsoft + https://j-filipiak.pl/clients/behira/  http://biallly.webd.pl/stagging/immedrive/--> */}
        <div className='bg-light-1 font-Sora pt-20 pb-20 w-full hidden'>
          <div className='container'>
            <div className='text-base font-Sora font-semibold text-[#80818C] bg-[#fff] rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
              Jak może wyglądać Twoja nowa strona?
            </div>
            <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
              Przykładowe <br />
              realizacje
            </h3>
          </div>

          <div className='container columns-2 mt-10 gap-0'>
            <div className='border bg-light-1'>1</div>
            <div className='border bg-light-1'>2</div>
            <div className='border bg-light-1'>3</div>
            <div className='border bg-light-1'>4</div>
          </div>
        </div>

        {/* <!-- przebieg ralizacji --> */}
        <div className='w-full pb-20 pt-20 max-w-[1920px] xl:pl-20 xl:pr-20 mx-auto bg-[#f0f0f2] pl-7 pr-7'>
          <div className='flex items-stretch justify-start'>
            <div className='w-full xl:w-6/12'>
              <div className='text-base font-Sora font-semibold text-[#80818C] bg-[#fff] rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
                Transparentny przebieg realizacji
              </div>
              <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
                Zaledwie kilka kroków <br />
                dzieli cię od posiadania strony www
              </h3>
            </div>
          </div>
          <div className='flex mt-10'>
            <ul className='flex flex-col lg:flex-row items-start justify-start gap-10'>
              <li className='w-full lg:w-3/12 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-start w-full gap-6 pr-6'>
                  <div className='w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-[#fff] flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora'>
                    1
                  </div>
                  <div className='hidden lg:flex border w-10/12'></div>
                </div>
                <div className='mt-3'>
                  <h5 className='text-dark-5 text-lg font-semibold max-w-xl'>
                    Zakup usługi
                  </h5>
                </div>
                <div>
                  <h5 className='text-[#80818C] text-base font-semibold max-w-xl mt-1'>
                    Jeżeli oferta jest dla Ciebie jasna, wybierz rodzaj
                    płatności i dokonaj zakupu
                  </h5>
                </div>
              </li>

              <li className='w-full lg:w-3/12 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-start w-full gap-6 pr-6'>
                  <div className='w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-[#fff] flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora'>
                    2
                  </div>
                  <div className='hidden lg:flex border w-10/12'></div>
                </div>
                <div className='mt-3'>
                  <h5 className='text-dark-5 text-lg font-semibold max-w-xl'>
                    Wypełnij brief
                  </h5>
                </div>
                <div>
                  <h5 className='text-[#80818C] text-base font-semibold max-w-xl mt-1'>
                    Z którego dowiem się czego dokładnie potrzebujesz. Otrzymasz
                    go po zakupie
                  </h5>
                </div>
              </li>

              <li className='w-full lg:w-3/12 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-start w-full gap-6 pr-6'>
                  <div className='w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-[#fff] flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora'>
                    3
                  </div>
                  <div className='hidden lg:flex border w-10/12'></div>
                </div>
                <div className='mt-3'>
                  <h5 className='text-dark-5 text-lg font-semibold max-w-xl'>
                    Projektowanie
                  </h5>
                </div>
                <div>
                  <h5 className='text-[#80818C] text-base font-semibold max-w-xl mt-1'>
                    Rozpoczynam proces tworzenia twojej strony. Wstępny projekt
                    otrzymasz po kilku dniach. Zależy MI na tym aby stronę
                    dostarczyć szybko i sprawnie
                  </h5>
                </div>
              </li>

              <li className='w-full lg:w-3/12 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-start w-full gap-6 pr-6'>
                  <div className='w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-[#fff] flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora'>
                    4
                  </div>
                </div>
                <div className='mt-3'>
                  <h5 className='text-dark-5 text-lg font-semibold max-w-xl'>
                    Akceptacja projektu
                  </h5>
                </div>
                <div>
                  <h5 className='text-[#80818C] text-base font-semibold max-w-xl mt-1'>
                    W momencie gdy uznasz, że prace zostały zakończone czas na
                    uruchomienie projektu. Gratulujemy! Twoja strona jest gotowa
                    a ty możesz się nią chwalić
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- before payment --> */}
        <div className='bg-yellow-400 font-Sora pt-20 pb-6 xl:pb-20 w-full xl:pl-20 xl:pr-20 pl-7 pr-7 hidden'>
          <div className='container'>
            <div className='text-base font-Sora font-semibold text-light-1 bg-dark-5 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
              Oferta ogarniczona czasowo oraz liczbowo
            </div>
            <h3 className='text-xl xl:text-3xl xl:leading-[70px] text-dark-5 font-semibold'>
              Nie!, to nie jest kolejny chwyt marketingowy.
            </h3>
            <h3 className='text-3xl sm:text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold mb-10 mt-10 lg:mt-0'>
              Oferta ograniczona czasowo
            </h3>
            <p className='text-dark-5 text-2xl lg:text-4xl'>
              Nazywam się Jarosław Filipiak i jestem programistą WordPress.
              <br className='lg:hidden' />
              &nbsp;
              <br className='lg:hidden' />
              Od wielu lat obsługuję agencję kreatywne wdrażając duże projekty.
              <br className='lg:hidden' />
              &nbsp;
              <br className='lg:hidden' />W tym miesiącu testowo oferuje
              wykonanie strony z pominięciem pośrednika jakim jest agencja
              kreatywna.
            </p>
            <ul className='text-dark-5 text-2xl pt-6 flex flex-col items-start gap-6'>
              <li className='flex items-start justify-center gap-3'>
                {/* <IconCheck className="text-dark-5 min-w-[24px] max-w-[24px]" /> */}
                <div>Sam osobiście wykonam dla Ciebie stronę</div>
              </li>
              <li className='flex items-start justify-center gap-3'>
                {/* <IconCheck className="text-dark-5 min-w-[24px] max-w-[24px]" /> */}
                <div>
                  Projekt będziemy realizowali we wścisłej wspólpracy i
                  kameralnej atmosferze
                </div>
              </li>
              <li className='flex items-start justify-center gap-3'>
                {/* <IconCheck className="text-dark-5 min-w-[24px] max-w-[24px]" /> */}
                <div>
                  Pod tą ofertą podpisuje się moim własnym imieniem i nazwiskiem
                </div>
              </li>
              <li className='flex items-start justify-center gap-3'>
                {/* <IconCheck className="text-dark-5 min-w-[24px] max-w-[24px]" /> */}
                <div>
                  Rozpocznij współpracę z freelancerem i ogarnicz koszty lub
                  wybierz agencję która... zatrudnia freelancerów
                </div>
              </li>
            </ul>

            <p className='text-dark-5 pt-32 text-[12px]'>
              * Ze względu na ogarniczoną ilość mocy przerobowych zastrzegam
              sobie prawo do kolejkownia klientów wg. wybranej formy płatności
            </p>
          </div>
        </div>

        {/* <div className="w-full border overflow-hidden p-0 m-0">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="4"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p10.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/uploads/oferta/p11.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div> */}

        {/* <!-- payment --> */}
        <div
          id='zamawiam'
          className='w-full pt-20 pb-20 max-w-[1920px] xl:pl-20 xl:pr-20 font-Sora pl-7 pr-7'
        >
          <div className='text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
            Chce porzadną stronę www
          </div>
          <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
            Wybierz dogodną <br />
            formę płatności
          </h3>
          <ul className='font-Sora font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start mt-10'>
            <li className='flex items-start justify-center gap-3'>
              {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
              <div>Pełen koszt to 1499zł brutto</div>
            </li>
            <li className='flex items-start justify-center gap-3'>
              {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
              <div>
                Hosting, domena, certyfikat SSL oraz skrzynki pocztowe na okres
                12 miesięcy w cenie usługi
              </div>
            </li>
            <li className='flex items-start justify-center gap-3'>
              {/* <IconCheck className="text-[#48b02c] min-w-[24px] max-w-[24px]" /> */}
              <div>Faktura VAT 23%</div>
            </li>
          </ul>

          <div className='container flex flex-col lg:flex-row items-stretch justify-center mt-14 lg:gap-12 gap-4'>
            <div className='w-full xl:w-6/12 border bg-light-1 p-6 lg:p-10 rounded-xl relative flex flex-col items-center justify-center gap-4'>
              <p className='text-dark-5 text-xl text-center font-semibold'>
                Rozpocznijmy współpracę odrazu!
              </p>
              <p className='text-dark-5 text-base text-center xl:w-10/12'>
                Bardzo przejrzysty proces zakupowy. Wystarczy kliknąć w przycisk
                "Przechodzę do zamówienia". Możliwośc opłacenia blikiem, Google
                Pay oraz via Przelewy24.com
              </p>
              <img
                className='lg:max-w-[360px] w-full hidden lg:flex'
                src='@/assets/uploads/oferta/formy-platnosci.png'
                alt=''
              />

              <div className='bg-accent text-white transiton-all rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:bg-dark-5 flex items-center gap-3'>
                {/* <IconArrowNarrowRight /> */}
                Przechodzę do zamówienia
              </div>

              <div className='w-full border-t mt-6 text-center pt-4'>
                <p className='text-dark-5 text-base text-center'>
                  Oferta ograniczona
                </p>
              </div>
            </div>

            <div className='flex max-lg:w-full justify-center items-center'>
              <p className='text-dark-5 font-Sora font-semibold text-xl text-center'>
                lub
              </p>
            </div>

            <div className='w-full xl:w-5/12 border bg-light-1 p-6 lg:p-10 rounded-xl relative flex flex-col items-center justify-center gap-4'>
              <p className='text-dark-5 text-xl text-center font-semibold'>
                Faktura zaliczkowa 50%
              </p>
              <p className='text-dark-5 text-base text-center lg:w-10/12'>
                Dajemy możliwość rozłożenia płatności na 2 raty. Dzięki czemu
                możemy przystąpić do pracy odrazu po wpłacie pierwszej raty a
                drugą wpłacisz dopiero po zakończeniu prac.
              </p>
              <div className='bg-accent text-white transiton-all rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:bg-dark-5 flex items-center gap-3'>
                {/* <IconArrowNarrowRight /> */}
                Opłacam 50% teraz
              </div>
              <p className='text-dark-5 text-base text-center lg:w-10/12'>
                Resztę opłacę po zakończeniu prac
              </p>
            </div>
          </div>
        </div>

        {/* <!-- faq --> */}
        <div className='bg-light-1 font-Sora pt-20 pb-20 w-full pl-7 pr-7'>
          <div className='container'>
            <div className='text-base font-Sora font-semibold text-[#80818C] bg-[#fff] rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6'>
              sekcja FAQ
            </div>
            <h3 className='text-4xl xl:text-7xl xl:leading-[100px] text-dark-5 font-semibold'>
              Najczęściej zadawane <br />
              pytania
            </h3>
          </div>

          <div className='container'>
            <div className='budget-websites-faq--items'>
              {/* <faqItem
            color="dark"
            :title="item.title"
            :content="item.content"
            :id="item.id"
            v-for="item in faqs"
            v-bind:key="item.id"
          /> */}
            </div>
            <div className='budget-websites-faq--footer text-dark-5 font-Sora hidden lg:flex'>
              <div className='flex flex-col lg:flex-row items-center justify-start mt-10 lg:mt-6'>
                <div className='flex flex-col w-full lg:w-6/12'>
                  <p className='lg:pr-20 text-3xl xl:text-5xl lg:text-3xl'>
                    Nie znalazłeś/aś odpowiedzi na pytanie ?
                  </p>
                  <p className='text-xl mt-6'>
                    <strong>skontaktuj się ze mną</strong>{' '}
                    <br className='lg:hidden' />a chętnie udziele więcej
                    informacji
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center lg:flex-row mt-6 lg:mt-0 w-full lg:w-6/12 gap-2 lg:gap-0'>
                  <div className='flex'>
                    <a
                      href='tel:663568828'
                      className='max-lg:text-2xl link-with-undeline link-with-undeline__dark md:ml-0 inline-block relative underline-after text-dark-3'
                    >
                      +48 663 568 828
                    </a>
                    {/* <IconArrowNarrowRight className='text-dark-5 mr-3 ml-3' /> */}
                  </div>
                  <div className='flex'>
                    <a
                      href='mailto:info@j-filipiak.pl'
                      className='max-lg:text-2xl link-with-undeline link-with-undeline__dark md:ml-0 inline-block underline-after text-dark-3 relative'
                    >
                      info@j-filipiak.pl
                    </a>
                    {/* <IconArrowNarrowRight className='text-dark-5 mr-3 ml-3' /> */}
                  </div>
                  <div className='flex'>
                    <a
                      target='_blank'
                      href='https://calendly.com/jaroslaw-filipiak/30minmeeting'
                      className='max-lg:text-2xl link-with-undeline link-with-undeline__dark md:ml-0 inline-block underline-after text-dark-3 relative'
                    >
                      porozmawiajmy via online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <CtaLanding /> */}
      </div>
    </>
  );
}
