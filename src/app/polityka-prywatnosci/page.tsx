import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description:
    'Polityka dotycząca serwisu www, funkcjonującego pod adresem url: j-filipiak.pl',
};

type PrivacyPolicy = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  policyCoverage: {
    '@type': string;
    name: string;
    email: string;
  };
};

const privacyPolicySchema: PrivacyPolicy = {
  '@context': 'https://schema.org',
  '@type': 'PrivacyPolicy',
  name: 'Polityka prywatności',
  description:
    'Polityka dotycząca serwisu www, funkcjonującego pod adresem url: j-filipiak.pl',
  url: 'https:/j-filipiak.pl/polityka-prywatnosci',
  provider: {
    '@type': 'Organization',
    name: 'j-filipiak.pl',
    url: 'https:/j-filipiak.pl',
  },
  policyCoverage: {
    '@type': 'DataProtectionOfficer',
    name: 'Jarosław Filipioak',
    email: 'info@j-filipiak.pl',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(privacyPolicySchema),
          }}
        />
      </Head>
      <Nav />
      <section className='pt-52 pb-20 flex items-center justify-center bg-white '>
        <div className='container'>
          <h1 className='text-5xl text-balance'>
            Polityka prywatności opisuje zasady przetwarzania przez nas
            informacji na Twój temat, w tym danych osobowych oraz ciasteczek,
            czyli tzw. cookies.
          </h1>
        </div>
      </section>

      <section className='content bg-white pb-20'>
        <div className='container'>
          <div>
            <h3 className='pb-12 pt-12 text-3xl'>1. Informacje ogólne</h3>
            <ol>
              <li>
                Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
                adresem url: <b>j-filipiak.pl</b>
              </li>
              <li>
                Operatorem serwisu oraz Administratorem danych osobowych jest:
                Jarosław Filipiak Staszica 3 , 64-330 Opalenica
              </li>

              <li>
                Adres kontaktowy poczty elektronicznej operatora:
                info@j-filipiak.pl
              </li>

              <li>
                Operator jest Administratorem Twoich danych osobowych w
                odniesieniu do danych podanych dobrowolnie w Serwisie.
              </li>
              <li>Serwis wykorzystuje dane osobowe w następujących celach:</li>
              <ul>
                <li>Prowadzenie newslettera</li>
                <li>Prowadzenie rozmów typu chat online</li>
                <li>Obsługa zapytań przez formularz</li>
                <li>Realizacja zamówionych usług</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>
              <li>
                Serwis realizuje funkcje pozyskiwania informacji o użytkownikach
                i ich zachowaniu w następujący sposób:
                <ol>
                  <li>
                    Poprzez dobrowolnie wprowadzone w formularzach dane, które
                    zostają wprowadzone do systemów Operatora.
                  </li>
                  <li>
                    Poprzez zapisywanie w urządzeniach końcowych plików cookie
                    (tzw. „ciasteczka”).
                  </li>
                </ol>
              </li>
            </ol>
            <h2 className='pb-12 pt-12 text-3xl'>
              2. Wybrane metody ochrony danych stosowane przez Operatora
            </h2>
            <ol>
              <li>
                Miejsca logowania i wprowadzania danych osobowych są chronione w
                warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
                dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
                komputerze użytkownika i mogą być odczytane jedynie na docelowym
                serwerze.
              </li>
              <li>
                Hasła użytkowników są przechowywane w postaci hashowanej.
                Funkcja hashująca działa jednokierunkowo - nie jest możliwe
                odwrócenie jej działania, co stanowi obecnie współczesny
                standard w zakresie przechowywania haseł użytkowników.
              </li>
              <li>
                W serwisie jest stosowana autentykacja dwuskładnikowa, co
                stanowi dodatkową formę ochrony logowania do Serwisu.
              </li>
              <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
              <li>
                W celu ochrony danych Operator regularnie wykonuje kopie
                bezpieczeństwa.
              </li>
              <li>
                Istotnym elementem ochrony danych jest regularna aktualizacja
                wszelkiego oprogramowania, wykorzystywanego przez Operatora do
                przetwarzania danych osobowych, co w szczególności oznacza
                regularne aktualizacje komponentów programistycznych.
              </li>
            </ol>
            <h2 className='pb-12 pt-12 text-3xl'>3. Hosting</h2>
            <ol>
              <li>
                Serwis jest hostowany (technicznie utrzymywany) na serwerach
                operatora: webd.pl
              </li>

              <li>
                Firma hostingowa w celu zapewnienia niezawodności technicznej
                prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
                <ul>
                  <li>
                    zasoby określone identyfikatorem URL (adresy żądanych
                    zasobów – stron, plików),
                  </li>
                  <li>czas nadejścia zapytania,</li>
                  <li>czas wysłania odpowiedzi,</li>
                  <li>
                    nazwę stacji klienta – identyfikacja realizowana przez
                    protokół HTTP,
                  </li>
                  <li>
                    informacje o błędach jakie nastąpiły przy realizacji
                    transakcji HTTP,
                  </li>
                  <li>
                    adres URL strony poprzednio odwiedzanej przez użytkownika
                    (referer link) – w przypadku gdy przejście do Serwisu
                    nastąpiło przez odnośnik,
                  </li>
                  <li>informacje o przeglądarce użytkownika,</li>
                  <li>informacje o adresie IP,</li>
                  <li>
                    informacje diagnostyczne związane z procesem samodzielnego
                    zamawiania usług poprzez rejestratory na stronie,
                  </li>
                  <li>
                    informacje związane z obsługą poczty elektronicznej
                    kierowanej do Operatora oraz wysyłanej przez Operatora.
                  </li>
                </ul>
              </li>
            </ol>
            <h2 className='pb-12 pt-12 text-3xl'>
              4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
              danych
            </h2>
            <ol>
              <li>
                W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
                dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
                wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
                ciążących na Administratorze. Dotyczy to takich grup odbiorców:
                <ul>
                  <li>firma hostingowa na zasadzie powierzenia</li>
                  <li>operatorzy pocztowi</li>
                  <li>banki</li>
                  <li>operatorzy rozwiązania typu chat online</li>
                  <li>
                    upoważnieni pracownicy i współpracownicy, którzy korzystają
                    z danych w celu realizacji celu działania strony
                  </li>
                  <li>
                    firmy, świadczące usługi marketingu na rzecz Administratora
                  </li>
                </ul>
              </li>
              <li>
                Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
                niż jest to konieczne do wykonania związanych z nimi czynności
                określonych osobnymi przepisami (np. o prowadzeniu
                rachunkowości). W odniesieniu do danych marketingowych dane nie
                będą przetwarzane dłużej niż przez 3 lata.
              </li>
              <li>
                Przysługuje Ci prawo żądania od Administratora:
                <ul>
                  <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                  <li>ich sprostowania,</li>
                  <li>usunięcia,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li>
                Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
                przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych
                osobowych w celu wykonania prawnie uzasadnionych interesów
                realizowanych przez Administratora, w tym profilowania, przy
                czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku
                istnienia ważnych prawnie uzasadnionych podstaw do
                przetwarzania, nadrzędnych wobec Ciebie interesów, praw i
                wolności, w szczególności ustalenia, dochodzenia lub obrony
                roszczeń.
              </li>
              <li>
                Na działania Administratora przysługuje skarga do Prezesa Urzędu
                Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
              </li>
              <li>
                Podanie danych osobowych jest dobrowolne, lecz niezbędne do
                obsługi Serwisu.
              </li>
              <li>
                W stosunku do Ciebie mogą być podejmowane czynności polegające
                na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w
                celu świadczenia usług w ramach zawartej umowy oraz w celu
                prowadzenia przez Administratora marketingu bezpośredniego.
              </li>
              <li>
                Dane osobowe są przekazywane od krajów trzecich w rozumieniu
                przepisów o ochronie danych osobowych. Oznacza to, że przesyłamy
                je poza teren Unii Europejskiej.
              </li>
            </ol>
            <h2 className='pb-12 pt-12 text-3xl'>
              5. Informacje w formularzach
            </h2>
            <ol>
              <li>
                Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
                tym dane osobowe, o ile zostaną one podane.
              </li>
              <li>
                Serwis może zapisać informacje o parametrach połączenia
                (oznaczenie czasu, , User-Agent, adres IP).
              </li>
              <li>
                Serwis, w niektórych wypadkach, może zapisać informację
                ułatwiającą powiązanie danych w formularzu z adresem e-mail
                użytkownika wypełniającego formularz. W takim wypadku adres
                e-mail użytkownika pojawia się wewnątrz adresu url strony
                zawierającej formularz.
              </li>
              <li>
                Dane podane w formularzu są przetwarzane w celu wynikającym z
                funkcji konkretnego formularza, np. w celu dokonania procesu
                obsługi zgłoszenia serwisowego lub kontaktu handlowego,
                rejestracji usług itp. Każdorazowo kontekst i opis formularza w
                czytelny sposób informuje, do czego on służy.
              </li>
            </ol>

            <h2 className='pb-12 pt-12 text-3xl'>6. Logi Administratora</h2>
            <ol>
              <li>
                Informacje zachowaniu użytkowników w serwisie mogą podlegać
                logowaniu. Dane te są wykorzystywane w celu administrowania
                serwisem.
              </li>
            </ol>
            <h2 className='pb-12 pt-12 text-3xl'>
              7. Istotne techniki marketingowe
            </h2>
            <ol>
              <li>
                Operator stosuje analizę statystyczną ruchu na stronie, poprzez
                Google Analytics (Google Inc. z siedzibą w USA). Operator nie
                przekazuje do operatora tej usługi danych osobowych, a jedynie
                zanonimizowane informacje. Usługa bazuje na wykorzystaniu
                ciasteczek w urządzeniu końcowym użytkownika. W zakresie
                informacji o preferencjach użytkownika gromadzonych przez sieć
                reklamową Google użytkownik może przeglądać i edytować
                informacje wynikające z plików cookies przy pomocy narzędzia:
                https://www.google.com/ads/preferences/
              </li>
              <li>
                Operator stosuje techniki remarketingowe, pozwalające na
                dopasowanie przekazów reklamowych do zachowania użytkownika na
                stronie, co może dawać złudzenie, że dane osobowe użytkownika są
                wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi
                do przekazania żadnych danych osobowych od Operatora do
                operatorom reklam. Technologicznym warunkiem takich działań jest
                włączona obsługa plików cookie.
              </li>
              <li>
                Operator stosuje korzysta z piksela Facebooka. Ta technologia
                powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA)
                wie, że dana osoba w nim zarejestrowana korzysta z Serwisu.
                Bazuje w tym wypadku na danych, wobec których sam jest
                administratorem, Operator nie przekazuje od siebie żadnych
                dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje
                na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
              </li>
              <li>
                Operator stosuje rozwiązanie badające zachowanie użytkowników
                poprzez tworzenie map ciepła oraz nagrywanie zachowania na
                stronie. Te informacje są anonimizowane zanim zostaną przesłane
                do operatora usługi tak, że nie wie on jakiej osoby fizycznej
                one dotyczą. W szczególności nagrywaniu nie podlegają wpisywane
                hasła oraz inne dane osobowe.
              </li>
              <li>
                Operator stosuje rozwiązanie automatyzujące działanie Serwisu w
                odniesieniu do użytkowników, np. mogące przesłać maila do
                użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził
                on zgodę na otrzymywanie korespondencji handlowej od Operatora.
              </li>
            </ol>

            <h2 className='pb-12 pt-12 text-3xl'>
              8. Informacja o plikach cookies
            </h2>
            <ol>
              <li>Serwis korzysta z plików cookies.</li>
              <li>
                Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
                szczególności pliki tekstowe, które przechowywane są w
                urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do
                korzystania ze stron internetowych Serwisu. Cookies zazwyczaj
                zawierają nazwę strony internetowej, z której pochodzą, czas
                przechowywania ich na urządzeniu końcowym oraz unikalny numer.
              </li>
              <li>
                Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
                Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
                operator Serwisu.
              </li>
              <li>
                Pliki cookies wykorzystywane są w następujących celach:
                <ol>
                  <li>
                    utrzymanie sesji użytkownika Serwisu (po zalogowaniu),
                    dzięki której użytkownik nie musi na każdej podstronie
                    Serwisu ponownie wpisywać loginu i hasła;
                  </li>
                  <li>
                    realizacji celów określonych powyżej w części Istotne
                    techniki marketingowe;
                  </li>
                </ol>
              </li>
              <li>
                W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
                cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
                cookies). Cookies „sesyjne” są plikami tymczasowymi, które
                przechowywane są w urządzeniu końcowym Użytkownika do czasu
                wylogowania, opuszczenia strony internetowej lub wyłączenia
                oprogramowania (przeglądarki internetowej). „Stałe” pliki
                cookies przechowywane są w urządzeniu końcowym Użytkownika przez
                czas określony w parametrach plików cookies lub do czasu ich
                usunięcia przez Użytkownika.
              </li>
              <li>
                Oprogramowanie do przeglądania stron internetowych (przeglądarka
                internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
                cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu
                mogą dokonać zmiany ustawień w tym zakresie.&nbsp;Przeglądarka
                internetowa umożliwia usunięcie plików cookies. Możliwe jest
                także automatyczne blokowanie plików cookies Szczegółowe
                informacje na ten temat zawiera pomoc lub dokumentacja
                przeglądarki internetowej.
              </li>
              <li>
                Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
                funkcjonalności dostępne na stronach internetowych Serwisu.
              </li>
              <li>
                Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
                Serwisu wykorzystywane mogą być również przez współpracujące z
                operatorem Serwisu podmioty, w szczególności dotyczy to firm:
                Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z
                siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
              </li>
            </ol>
            <h2 className='pb-3 pt-12 text-3xl'>
              9. Szczegółowe informacje o plikach cookies
            </h2>
            <h3 className='text-xl pb-12'>
              Niniejsza dokumentacja zawiera informacje na temat ciasteczek
              używanych na stronie internetowej, w tym ich kategorie,
              przykładowe wartości oraz powiązane domeny. Ciasteczka są
              stosowane do różnych celów, takich jak poprawa funkcjonalności
              strony, analiza danych oraz zarządzanie sesjami użytkowników.
            </h3>

            <h4 className='pb-4 pt-4 text-lg'>1. Ciasteczka niezbędne</h4>
            <ol>
              <li>
                ANON
                <ul className='pl-6'>
                  <li>
                    Przykładowa wartość:
                    b4907189458U&7Wbd355648ec9SC.20U081420250814
                  </li>
                  <li>Domena: .clarity.ms</li>
                  <li>
                    Opis: Używane do zarządzania sesjami i zapewnienia
                    podstawowych funkcji strony.
                  </li>
                </ul>
              </li>
              <li>
                wp-settings-1
                <ul className='pl-6'>
                  <li>Przykładowa wartość: UF1527Đ089KAB1</li>
                  <li>Domena: .clarity.ms</li>
                  <li>
                    Opis: Używane przez WordPress do przechowywania ustawień
                    użytkownika.
                  </li>
                </ul>
              </li>
              <li>
                ftp
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 100001231090906</li>
                  <li>Domena: j-filipiak.pl</li>
                  <li>
                    Opis: Może być używane do podstawowych funkcji związanych z
                    transferem plików lub sesjami.
                  </li>
                </ul>
              </li>
              <li>
                csrftoken
                <ul className='pl-6'>
                  <li>
                    Przykładowa wartość: e1757db4-6aOe-4aee-92ô38S5ebd695fe
                  </li>
                  <li>Domena: j-filipioak.pl</li>
                  <li>
                    Opis: Używane do ochrony przed atakami CSRF (Cross-Site
                    Request Forgery).
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className='pb-4 pt-4 text-lg'>2. Ciasteczka Analityczne</h4>
            <ol>
              <li>
                _ga_
                <ul className='pl-6'>
                  <li>Przykładowa wartość: GAI.1.145Đoeon1714663331</li>
                  <li>Domena: .clarity.ms</li>
                  <li>
                    Opis: Ciasteczko Google Analytics używane do śledzenia
                    interakcji użytkowników na stronie.
                  </li>
                </ul>
              </li>
              <li>
                _pk_id, _pk_ses
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 723&1605290178858322962340329</li>
                  <li>Domena: piwik.pro</li>
                  <li>
                    Ciasteczko Matomo (dawniej Piwik) używane do analizy
                    zachowań użytkowników(id) oraz sesji (ses).
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className='pb-4 pt-4 text-lg'>3. Ciasteczka Marketingowe</h4>
            <ol>
              <li>
                MUID
                <ul className='pl-6'>
                  <li>
                    PPrzykładowa wartość: NBN9 pa g ufC LG RcExwWOS 1
                    GaCyhFBv06vD2gqbM pc_posthog
                  </li>
                  <li>Domena: .facebook.com</li>
                  <li>
                    Opis: Używane do śledzenia działań użytkownika w celu
                    targetowania reklam.
                  </li>
                </ul>
              </li>
              <li>
                intercom-device-id-k893q3vr
                <ul className='pl-6'>
                  <li>Przykładowa wartość: Ae68ZtCB6zSPTMp..OlaEHVIX</li>
                  <li>Domena: .mailerlite.com</li>
                  <li>
                    Opis: Używane przez Intercom do identyfikacji urządzenia
                    użytkownika i zarządzania sesjami.
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className='pb-4 pt-4 text-lg'>4. Ciasteczka Funkcjonalne</h4>
            <ol>
              <li>
                CUD
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 7929ef10cE541 leeĐ28c35d7ff16d9</li>
                  <li>Domena: j-filipiak.piwik.pro</li>
                  <li>
                    Opis: Może być używane do różnych celów funkcjonalnych,
                    takich jak zarządzanie sesjami, ustawieniami użytkownika lub
                    personalizacją treści.
                  </li>
                </ul>
              </li>
              <li>
                lp_custom
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 9-28Zon2S7hUb0B_ŔDjMLH</li>
                  <li>Domena: j-filipiak.pl</li>
                  <li>
                    Opis: Może być używane do przechowywania niestandardowych
                    ustawień i preferencji użytkownika.
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className='pb-4 pt-4 text-lg'>5. Ciasteczka Specjalne</h4>
            <ol>
              <li>
                NAP
                <ul className='pl-6'>
                  <li>Przykładowa wartość: RjosCbuSeCCbS3yeWMGYhhtzayq7</li>
                  <li>Domena: .mailerlite.com</li>
                </ul>
              </li>
              <li>
                presence
                <ul className='pl-6'>
                  <li>
                    Przykładowa wartość: e17S7db4-6aOe-a.aee-92ó-38SS*d69Sfe
                  </li>
                  <li>Domena: .mailerlite.com</li>
                  <li>
                    Opis: Używane do zarządzania stanem obecności użytkowników i
                    sesji.
                  </li>
                </ul>
              </li>
            </ol>
            <h4 className='pb-4 pt-4 text-lg'>
              6. Ciasteczka Sesyjne i Preferencyjne
            </h4>
            <ol>
              <li>
                stg_last_interaction
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 2293*1197</li>
                  <li>Domena: .mailerlite.com</li>
                  <li>
                    Opis: Używane do śledzenia ostatnich interakcji użytkownika
                    z witryną
                  </li>
                </ul>
              </li>
              <li>
                stg_retuming_visitor
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 1714747551</li>
                  <li>Domena: .mailerlite.com</li>
                  <li>
                    Opis: Używane do identyfikacji powracających użytkowników i
                    personalizacji doświadczenia.
                  </li>
                </ul>
              </li>
              <li>
                stg_traffic_source_priority
                <ul className='pl-6'>
                  <li>Przykładowa wartość: 36</li>
                  <li>Domena: .mailerlite.com</li>
                  <li>
                    Opis: Używane do priorytetyzacji źródeł ruchu w celu lepszej
                    analizy i raportowania.
                  </li>
                </ul>
              </li>
            </ol>
            <h2 className='pb-12 pt-12 text-3xl'>
              10. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
              zgodę?
            </h2>
            <ol>
              <li>
                Jeśli użytkownik nie chce otrzymywać plików cookies, może
                zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie
                obsługi plików cookies niezbędnych dla procesów
                uwierzytelniania, bezpieczeństwa, utrzymania preferencji
                użytkownika może utrudnić,&nbsp;a w skrajnych przypadkach może
                uniemożliwić korzystanie ze stron www
              </li>
              <li>
                W celu zarządzania ustawienia cookies wybierz z listy poniżej
                przeglądarkę internetową, której używasz i postępuj zgodnie z
                instrukcjami:
                <ul>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history'
                    >
                      Edge
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer'
                    >
                      Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647'
                    >
                      Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://support.apple.com/kb/PH5042'
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek'
                    >
                      Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://help.opera.com/Windows/12.10/pl/cookies.html'
                    >
                      Opera
                    </a>
                  </li>
                </ul>
                <p>Urządzenia mobilne:</p>
                <ul>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647'
                    >
                      Android
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://support.apple.com/kb/HT1677?viewlocale=pl_PL'
                    >
                      Safari (iOS)
                    </a>
                  </li>
                  <li>
                    <a
                      className='link-with-undeline link-with-undeline__dark relative'
                      href='http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings'
                    >
                      Windows Phone
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
