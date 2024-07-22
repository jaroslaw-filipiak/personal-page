export default function Process(props) {
  return (
    <ul className='flex flex-col lg:flex-row flex-wrap items-start justify-center gap-12 container'>
      {props.data.map((step) => (
        <>
          <div> {step.title}</div>
        </>
      ))}

      {/* <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>
            1.Skontaktuj się ze mną.
          </h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Porozmawiajmy na temat Twojego projektu, ja dowiem się o Twoich
          wymaganiach a ty otrzymasz wycenę w ciągu 24 godzin.``
        </p>
      </li> */}

      <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>
            1.Skontaktuj się ze mną.
          </h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Porozmawiajmy na temat Twojego projektu, ja dowiem się o Twoich
          wymaganiach a ty otrzymasz wycenę w ciągu 24 godzin.``
        </p>
      </li>
      {/* <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>
            2. Akceptacja warunków
          </h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Jeżeli moja oferta jest zgodna z Twoimi wymaganiami to konfiguruję
          niezbędne narzędzia do zarządzania projektem i rozpocznamy współpracę.
        </p>
      </li>
      <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>
            3. Proces realizacji projektu graficznego
          </h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Pierwszy etap to przygotowanie projektu graficznego. Otrzymasz dostęp
          do pierwszych widoków a po Twoich sugestiach projekt będzie
          modyfikowany. W momencie gdy uznasz, że projekt graficzny jest
          kompletny i zaspokaja całkowicie Twoje potrzeby to przechodzimy do
          kolejnego etapu.
        </p>
      </li>
      <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>4. Development</h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Development to etap programistyczny, otrzymasz link do strony w tzw:
          wesji stagingowej która jest widoczna tylko dla Ciebie. Będziesz mógl
          sprawdzić jak działa Twoja strona na swoim komputerze czy też na
          telefonie. Tutaj również będziesz miał pełną kontrolę nad stroną i
          będziesz mógł zgłaszać poprawki.
        </p>
      </li>
      <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>
            5. Testy przed wdrożeniowe
          </h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Zanim Twoja strona zostanie umieszczona na docelowej domenie musi
          przejśc ona jeszcze parę testów. Posiadam własne procedury i sprawdzam
          wiele aspektów strony. W momencie gdy tzw: 'checklista wdrożeniowa'
          zostanie spełniona prechodzimy do finalizacji czyli wdrożenia twojej
          strony internetowej
        </p>
      </li>
      <li className='w-full lg:w-3/12 xl:w-2/12'>
        <div className='flex flex-col'>
          <div className='w-28 h-28 bg-lightGray rounded-full flex items-center justify-center mb-5 lg:mb-0'></div>
          <h5 className='text-xl lg:mt-4 text-balance mb-5'>
            6. Strona gotowa!
          </h5>
        </div>
        <p className='text-sm text-gray text-balance'>
          Otrzymasz gwarancję oraz zaproszenie do dalszej współpracy. Obsługuję
          moich klientów kompleksowo a po zakończeniu współpracy chętnie pomogę
          Tobie przy innych aspektach takich jak: stała administracja , obsługa
          graficzna czy też kolejne pracę programistyczne na stronie.
        </p>
      </li> */}
    </ul>
  );
}
