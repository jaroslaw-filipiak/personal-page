interface WebsiteType {
  name: string;
  description: string;
  basePrice: {
    min: number;
    max: number;
  };
}

interface WebsiteTypes {
  [key: string]: WebsiteType;
}

interface Approach {
  name: string;
  description: string;
  budget: string;
  forWho: string[];
  pros: string[];
  cons: string[];
  priceModifier: number;
  recommended: string;
  showForSelectedWebsiteType: string[];
}

interface Approaches {
  [key: string]: Approach;
}

export const websiteTypes: WebsiteTypes = {
  landing: {
    name: 'Landing Page',
    description:
      'Pojedyncza, długa strona skupiająca się na konkretnym celu (np. sprzedaż produktu, zapis na newsletter). Idealna do kampanii marketingowych i prezentacji pojedynczego produktu/usługi.',
    basePrice: { min: 999, max: 4000 },
  },
  small_website: {
    name: 'Prosta strona tzw: wizytówka',
    description:
      'Jej rozmiar to zazwyczaj strona główna oraz strona kontaktowa. Idealna dla małych firm, freelancerów czy osób prywatnych chcących zaistnieć w internecie.',
    basePrice: { min: 1499, max: 6000 },
  },
  business: {
    name: 'Strona firmowa',
    description:
      'Rozbudowana wizytówka firmy z podstronami zawierającymi informacje o firmie, usługach, realizacjach i dane kontaktowe. Świetna dla firm chcących zaznaczyć swoją obecność w internecie.',
    basePrice: { min: 4000, max: 8000 },
  },
  shop: {
    name: 'Sklep internetowy',
    description:
      'Pełnoprawna platforma e-commerce z katalogiem produktów, koszykiem, systemem płatności i panelem administracyjnym. Niezbędna dla firm prowadzących sprzedaż online.',
    basePrice: { min: 8000, max: 15000 },
  },
  portfolio: {
    name: 'Portfolio/Blog',
    description:
      'Strona prezentująca prace, projekty lub treści w formie bloga. Idealna dla twórców, fotografów, architektów czy freelancerów chcących pokazać swoje dokonania.',
    basePrice: { min: 3000, max: 6000 },
  },
  coursesPlatform: {
    name: 'Platforma edukacyjna',
    description:
      'System do prowadzenia kursów online z modułami do zarządzania treścią, postępami uczniów, płatnościami za kursy i komunikacją. Doskonała dla edukatorów i firm szkoleniowych.',
    basePrice: { min: 8000, max: 30000 },
  },
  reservation: {
    name: 'System rezerwacji',
    description:
      'Platforma do zarządzania rezerwacjami z kalendarzem, systemem powiadomień i płatnościami. Idealna dla restauracji, salonów, gabinetów czy hoteli.',
    basePrice: { min: 10000, max: 20000 },
  },
  realEstate: {
    name: 'Portal nieruchomości',
    description:
      'Specjalistyczna platforma z zaawansowaną wyszukiwarką, filtrowaniem, mapami i systemem zarządzania ofertami. Dedykowana dla agencji nieruchomości i deweloperów. Możliwość integracji z systemami typu Asari CMS itp.',
    basePrice: { min: 8000, max: 30000 },
  },
  jobBoard: {
    name: 'Portal ogłoszeń pracy',
    description:
      'System z zarządzaniem ogłoszeniami pracy, profilami kandydatów, aplikacjami i komunikacją między pracodawcami a kandydatami.',
    basePrice: { min: 14000, max: 25000 },
  },
  customApp: {
    name: 'Aplikacja webowa',
    description:
      'Zaawansowana aplikacja internetowa z dedykowanymi funkcjami biznesowymi, intergracjami i złożoną logiką. Dla firm potrzebujących specjalistycznego oprogramowania.',
    basePrice: { min: 25000, max: 100000 },
  },
};

export const approaches: Approaches = {
  static: {
    name: 'Wersja statyczna (bez systemu CMS)',
    description:
      'Najprostsze podejście oparte na czystym HTML, CSS i JavaScript. Strony są przechowywane jako pliki .html na serwerze i wysyłane bezpośrednio do przeglądarki. Brak systemu CMS uniemożliwia samodzielną edycję strony',
    budget: 'od 1500 PLN',
    forWho: [
      'Proste strony wizytówkowe',
      'Landing page',
      'Strony wydarzeń jednorazowych',
      'Projekty z minimalnym budżetem',
      'Małe projekty bez potrzeby częstej aktualizacji',
    ],
    pros: [
      'Najszybsze ładowanie strony',
      'Minimalne wymagania hostingowe',
      'Wysokie bezpieczeństwo (brak bazy danych)',
      'Niskie koszty utrzymania',
      'Proste wdrożenie i hosting',
    ],
    cons: [
      'Brak dynamicznej zawartości',
      'Trudniejsza aktualizacja treści',
      'Ograniczone możliwości interakcji',
      'Każda zmiana wymaga ingerencji programisty',
    ],
    priceModifier: 1,
    recommended: 'Dla: małych projektów, stron wizytówkowych, landing page',
    showForSelectedWebsiteType: ['landing', 'small_website'],
  },
  wp_theme: {
    name: 'WordPress - Gotowe motywy',
    description:
      'Wykorzystanie istniejących motywów WordPress i dostosowanie ich przez panel administracyjny. Szybkie wdrożenie przy ograniczonej elastyczności projektowej.',
    budget: 'od 2000 PLN',
    forWho: [
      'Małe firmy z standardowymi wymaganiami',
      'Blogi i proste strony firmowe',
      'Projekty z ograniczonym budżetem',
      'Firmy potrzebujące szybkiego wdrożenia',
    ],
    pros: [
      'Bardzo szybkie wdrożenie (1-2 tygodnie)',
      'Niski koszt początkowy',
      'Łatwe zarządzanie treścią',
      'Duży wybór gotowych wtyczek',
      'Możliwość samodzielnej obsługi przez klienta',
    ],
    cons: [
      'Ograniczona unikalność designu',
      'Kompromisy w funkcjonalności',
      'Możliwe problemy z wydajnością',
      'Regularne aktualizacje systemu i wtyczek',
    ],
    priceModifier: 1.6,
    recommended: 'Dla: małych firm, blogów, projektów z minimalnym budżetem',
    showForSelectedWebsiteType: [
      'business',
      'portfolio',
      'coursesPlatform',
      'reservation',
      'jobBoard',
      'landing',
      'small_website',
    ],
  },
  wp_custom: {
    name: 'WordPress - Projekty autorskie z Figmy',
    description:
      'Tworzenie własnych motywów WordPress na podstawie indywidualnych projektów z Figmy. Pełna kontrola nad wyglądem i funkcjonalnością przy zachowaniu zalet CMSa.',
    budget: '8000 - 25000 PLN',
    forWho: [
      'Średnie firmy wymagające unikalnego wizerunku',
      'Sklepy internetowe do 1000 produktów',
      'Portale contentowe',
      'Firmy potrzebujące częstej aktualizacji treści',
    ],
    pros: [
      'Unikalny design dopasowany do marki',
      'Pełna kontrola nad kodem i wydajnością',
      'Łatwe zarządzanie treścią',
      'Możliwość tworzenia własnych bloków Gutenberga',
      'Integracja z Advanced Custom Fields',
    ],
    cons: [
      'Dłuższy czas realizacji (4-6 tygodni)',
      'Wyższy koszt początkowy',
      'Ograniczenia architektury WordPress',
    ],
    priceModifier: 2.2,
    recommended:
      'Dla: firm średniej wielkości, sklepów internetowych, portali contentowych',
    showForSelectedWebsiteType: [
      'landing',
      'business',
      'portfolio',
      'coursesPlatform',
      'reservation',
      'realEstate',
      'jobBoard',
      'small_website',
    ],
  },
  wp_headless: {
    name: 'WordPress jako Headless CMS',
    description:
      'Wykorzystanie WordPressa jako backendu do zarządzania treścią, z frontendem zbudowanym w nowoczesnym frameworku (Next.js, React).',
    budget: '20000 - 50000 PLN',
    forWho: [
      'Duże projekty wymagające wysokiej wydajności',
      'Aplikacje webowe z rozbudowanym interfejsem',
      'Projekty wymagające zaawansowanych animacji',
      'Firmy stawiające na najnowsze technologie',
    ],
    pros: [
      'Najlepsza wydajność i UX',
      'Łączenie zalet WordPressa i nowoczesnych technologii',
      'Zaawansowane możliwości frontendowe',
      'Lepsze bezpieczeństwo',
      'Elastyczna architektura',
    ],
    cons: [
      'Wysoki koszt rozwoju',
      'Złożoność utrzymania (dwa środowiska)',
      'Dłuższy czas wdrożenia (8-12 tygodni)',
      'Wymaga zaawansowanej wiedzy technicznej',
    ],
    priceModifier: 3.5,
    recommended:
      'Dla: dużych firm, zaawansowanych aplikacji webowych, projektów zorientowanych na wydajność',
    showForSelectedWebsiteType: [
      'landing',
      'business',
      'portfolio',
      'realEstate',
      'jobBoard',
      'small_website',
    ],
  },
  spa: {
    name: 'Single Page Application (React/Vue)',
    description:
      'Nowoczesne aplikacje webowe wykorzystujące frameworki React lub Vue.js. Dynamiczne interfejsy z płynnym działaniem bez przeładowywania strony.',
    budget: '15000 - 40000 PLN',
    forWho: [
      'Aplikacje webowe wymagające płynnego działania',
      'Projekty z rozbudowaną interaktywnością',
      'Startupy technologiczne',
      'Dashboardy i panele administracyjne',
    ],
    pros: [
      'Płynne działanie aplikacji',
      'Bogaty interfejs użytkownika',
      'Możliwość pracy offline',
      'Łatwa integracja z API',
      'Nowoczesna architektura',
    ],
    cons: [
      'Wyzwania z SEO',
      'Dłuższe pierwsze ładowanie',
      'Wyższe wymagania hostingowe',
      'Konieczność osobnego CMSa',
    ],
    priceModifier: 3.3,
    recommended: 'Dla: aplikacji webowych, dashboardów, projektów z bogatym UI',
    showForSelectedWebsiteType: [
      'landing',
      'business',
      'portfolio',
      'reservation',
      'realEstate',
      'jobBoard',
      'customApp',
      'small_website',
    ],
  },
  nextjs: {
    name: 'Next.js Full-stack',
    description:
      'Zaawansowane aplikacje wykorzystujące możliwości Next.js, łączące server-side rendering z nowoczesnym frontendem.',
    budget: '30000 - 100000+ PLN',
    forWho: [
      'Duże platformy internetowe',
      'Projekty e-commerce enterprise',
      'Aplikacje wymagające najwyższej wydajności',
      'Startupy planujące szybki rozwój',
    ],
    pros: [
      'Najlepsza wydajność i SEO',
      'Server-side i static generation',
      'Zaawansowane możliwości cachowania',
      'Wbudowane API routes',
      'Doskonała skalowalność',
    ],
    cons: [
      'Wysoki koszt rozwoju',
      'Złożoność implementacji',
      'Wymaga doświadczonego zespołu',
      'Dłuższy czas wdrożenia (10-14 tygodni)',
    ],
    priceModifier: 3.8,
    recommended:
      'Dla: dużych platform, zaawansowanych e-commerce, projektów wymagających najwyższej wydajności',
    showForSelectedWebsiteType: [
      'landing',
      'business',
      'portfolio',
      'reservation',
      'jobBoard',
      'customApp',
      'small_website',
    ],
  },
  jamstack: {
    name: 'Jamstack (Gatsby/Astro)',
    description:
      'Architektura łącząca statyczne strony z dynamicznymi funkcjami poprzez API. Strony generowane podczas buildu dla maksymalnej wydajności.',
    budget: '15000 - 45000 PLN',
    forWho: [
      'Projekty wymagające wysokiej wydajności',
      'Strony z dużym ruchem',
      'Blogi i portale contentowe',
      'Projekty wymagające dobrego SEO',
    ],
    pros: [
      'Znakomita wydajność',
      'Wysokie bezpieczeństwo',
      'Niskie koszty hostingu',
      'Świetne SEO',
      'Możliwość integracji z headless CMS',
    ],
    cons: [
      'Ograniczenia w dynamicznej zawartości',
      'Dłuższy proces buildu',
      'Wymaga znajomości ekosystemu',
      'Złożoność przy dużych projektach',
    ],
    priceModifier: 3.8,
    recommended: 'Dla: portali contentowych, blogów, stron z dużym ruchem',
    showForSelectedWebsiteType: [
      'landing',
      'business',
      'portfolio',
      'reservation',
      'realEstate',
      'jobBoard',
      'customApp',
      'small_website',
    ],
  },
};

export const additionalFeatures = {
  // RWD w różnych wariantach
  rwd_advanced: {
    name: 'RWD - Wariant Zaawansowany',
    description:
      'Rozszerzona responsywność z obsługą 5 breakpointów oraz dodatkową optymalizacją dla różnych urządzeń.',
    explain:
      'Ten pakiet sprawia, że Twoja strona będzie wyglądać idealnie na każdym urządzeniu - od małych smartfonów po duże monitory. Wyobraź sobie, że Twoja strona jest jak plastelina, która automatycznie dopasowuje się do ekranu użytkownika. Dzięki zaawansowanym testom mamy pewność, że wszystko działa perfekcyjnie zarówno na iPadzie trzymanym poziomo, jak i na najmniejszym telefonie. To jak posiadanie strony, która "czuje się jak w domu" na każdym urządzeniu.',
    details: [
      'Obsługa 5 breakpointów (mobile S/M/L, tablet, desktop)',
      'Zaawansowane testy na większej liczbie urządzeń',
      'Optymalizacja złożonych komponentów UI',
      'Dostosowanie do orientacji poziomej/pionowej',
    ],
    price: { min: 2000, max: 3000 },
  },

  // SEO w różnych wariantach
  seo_basic: {
    name: 'SEO - Pakiet Podstawowy',
    description:
      'Podstawowa optymalizacja SEO z implementacją najważniejszych elementów.',
    explain:
      'Rozpocznij swoją przygodę z pozycjonowaniem dzięki naszemu podstawowemu pakietowi SEO, który pomoże Twojej stronie być lepiej widoczną w wynikach wyszukiwania Google. Pakiet zawiera niezbędne elementy, które sprawią, że Twoja strona stanie się przyjazna zarówno dla użytkowników, jak i wyszukiwarek. Zoptymalizujemy tytuły i opisy stron, strukturę nagłówków oraz meta tagi, dzięki czemu Twoja strona będzie jasno komunikować swoją zawartość. Dodamy też odpowiednie opisy do zdjęć i utworzymy mapę strony, ułatwiając robotom Google indeksowanie Twojej witryny. To idealne rozwiązanie dla małych firm i start-upów, które chcą zwiększyć swoją widoczność online i przyciągnąć więcej potencjalnych klientów bez dużych nakładów finansowych."',
    details: [
      'Optymalizacja meta tagów',
      'Podstawowa struktura nagłówków',
      'Optymalizacja URL',
      'Podstawowa mapa strony',
    ],
    price: { min: 800, max: 1500 },
  },
  seo_advanced: {
    name: 'SEO - Pakiet Zaawansowany',
    description:
      'Rozszerzona optymalizacja SEO z dodatkowymi funkcjami i analizą.',
    explain:
      'Ten pakiet to jak zatrudnienie całego zespołu marketingowego dla Twojej strony. Nie tylko sprawiamy, że Google lepiej rozumie Twoją stronę, ale także przyspieszamy jej działanie i dodajemy specjalne oznaczenia, które mogą wyróżnić Twoją stronę w wynikach wyszukiwania (np. wyświetlając gwiazdki przy opiniach czy ceny przy produktach). Otrzymujesz też regularne raporty pokazujące, jak Twoja strona radzi sobie w wyszukiwarce. To kompleksowa strategia, która pomaga Ci być przed konkurencją.',
    details: [
      'Wszystko z pakietu podstawowego',
      'Optymalizacja prędkości ładowania',
      'Structured Data / Schema.org',
      'Rozszerzona mapa strony',
      'Optymalizacja treści',
      'Raport SEO',
    ],
    price: { min: 1500, max: 3000 },
  },

  // Analityka
  analytics_basic: {
    name: 'Analityka - Podstawowa',
    description: 'Podstawowe śledzenie zachowań użytkowników na stronie.',
    explain:
      'To jak zainstalowanie kamer w sklepie stacjonarnym - dowiesz się, ilu masz odwiedzających, które "półki" (podstrony) są najpopularniejsze i jak długo ludzie zostają w Twoim "sklepie". Podstawowa analityka daje Ci wgląd w to, co się dzieje na Twojej stronie, dzięki czemu możesz podejmować lepsze decyzje biznesowe. Zobaczysz, skąd przychodzą Twoi użytkownicy i co ich najbardziej interesuje.',
    details: [
      'Implementacja Google Analytics 4',
      'Podstawowe cele konwersji',
      'Podstawowe raporty',
    ],
    price: { min: 500, max: 1000 },
  },
  analytics_advanced: {
    name: 'Analityka - Zaawansowana',
    description:
      'Rozszerzone możliwości analityczne z dodatkowymi narzędziami.',
    explain:
      'Wyobraź sobie, że masz osobistego analityka, który śledzi każdy aspekt Twojej strony. Dowiesz się nie tylko ile osób odwiedza Twoją stronę, ale także dokładnie jak się po niej poruszają - gdzie klikają, jak daleko przewijają, co ich najbardziej interesuje. Dodatkowo, system automatycznie łączy się z Twoim CRM, więc widzisz pełną drogę klienta od pierwszych odwiedzin do zakupu. Co miesiąc otrzymujesz przystępny raport z najważniejszymi wskaźnikami i rekomendacjami.',
    details: [
      'Google Analytics 4 + Google Tag Manager',
      'Niestandardowe zdarzenia i cele',
      'Śledzenie zachowań użytkownika (heatmapy)',
      'Integracja z systemami CRM',
      'Miesięczne raporty analityczne',
    ],
    price: { min: 1500, max: 2500 },
  },

  // CMS
  cms_basic: {
    name: 'CMS - System Podstawowy',
    description:
      'Podstawowy system zarządzania treścią do prostej edycji zawartości.',
    explain:
      'To jak panel administracyjny dla Twojej strony - prosty w obsłudze interfejs, gdzie możesz samodzielnie zmieniać teksty i zdjęcia na stronie bez znajomości programowania. Wyobraź sobie, że to taki Word dla Twojej strony internetowej - możesz edytować treści tak łatwo, jak dokument tekstowy. Nie musisz dzwonić do programisty za każdym razem, gdy chcesz zaktualizować ofertę czy dodać nowe zdjęcie.',
    details: [
      'Edycja podstawowych treści',
      'Zarządzanie obrazami',
      'Podstawowe role użytkowników',
    ],
    price: { min: 1500, max: 2500 },
  },
  cms_advanced: {
    name: 'CMS - System Zaawansowany',
    description:
      'Rozbudowany system zarządzania z dodatkowymi funkcjami i modułami.',
    explain:
      'To jak mieć profesjonalne studio wydawnicze na własność. Możesz nie tylko edytować treści, ale także tworzyć zaawansowane layouty, zarządzać wersjami treści (jak w Google Docs), przydzielać różne uprawnienia członkom zespołu i organizować multimedia w przejrzystej bibliotece. System posiada zaawansowany edytor tekstu podobny do Worda, który pozwala na tworzenie atrakcyjnych treści bez znajomości HTML. Możesz też przygotowywać treści wcześniej i publikować je w zaplanowanym terminie.',
    details: [
      'Zaawansowany edytor WYSIWYG',
      'System wersjonowania treści',
      'Zaawansowane role i uprawnienia',
      'Zarządzanie multimediami',
      'System szablonów',
    ],
    price: { min: 3000, max: 5000 },
  },

  // Dodatkowe funkcje
  security: {
    name: 'Bezpieczeństwo Premium',
    description: 'Zaawansowane zabezpieczenia strony i danych.',
    explain:
      'To jak zainstalowanie najnowocześniejszego systemu alarmowego w Twoim domu. Twoja strona otrzymuje wielopoziomową ochronę: szyfrowanie danych (SSL) zapewnia, że informacje przesyłane między użytkownikiem a stroną są bezpieczne, firewall chroni przed atakami hakerskimi, a system kopii zapasowych gwarantuje, że nawet w przypadku awarii nie stracisz żadnych danych. Regularne audyty bezpieczeństwa działają jak okresowe przeglądy techniczne, wykrywając potencjalne zagrożenia, zanim staną się problemem.',
    details: [
      'SSL/TLS',
      'Firewall aplikacyjny',
      'Ochrona przed DDOS',
      'Regularne audyty bezpieczeństwa',
      'Backup danych',
    ],
    price: { min: 2000, max: 4000 },
  },
  performance: {
    name: 'Optymalizacja Wydajności',
    description: 'Kompleksowa optymalizacja wydajności strony.',
    explain:
      'Wyobraź sobie, że Twoja strona to samochód wyścigowy - musi działać szybko i płynnie, by nie tracić klientów. Ten pakiet sprawia, że strona ładuje się błyskawicznie: obrazy są automatycznie optymalizowane, treści dostarczane z najbliższego serwera (CDN), a elementy strony ładowane tylko wtedy, gdy są potrzebne. To jak tuning samochodu - każdy element jest dopracowany, by działać jak najwydajniej. Szybka strona to nie tylko zadowoleni użytkownicy, ale także lepsza pozycja w Google.',
    details: [
      'Optymalizacja obrazów i multimediów',
      'Implementacja CDN',
      'Lazy loading',
      'Minifikacja i bundling',
      "Cache'owanie",
    ],
    price: { min: 1500, max: 3000 },
  },
  multilingual: {
    name: 'Wsparcie Wielojęzyczności',
    description: 'Przystosowanie strony do obsługi wielu języków.',
    explain:
      'To jak zatrudnienie profesjonalnego tłumacza dla Twojej strony. System automatycznie wykrywa język przeglądarki użytkownika i wyświetla odpowiednią wersję strony. Możesz łatwo zarządzać wszystkimi tłumaczeniami w jednym miejscu, a strona jest zoptymalizowana pod SEO dla każdego języka osobno. To idealne rozwiązanie, jeśli chcesz dotrzeć do klientów z różnych krajów - każdy zobaczy Twoją stronę w swoim języku, co znacząco zwiększa zaufanie i konwersję.',
    details: [
      'System zarządzania tłumaczeniami',
      'SEO dla wielu języków',
      'Automatyczne wykrywanie języka',
      'Regionalizacja treści',
    ],
    price: { min: 2000, max: 4000 },
  },
  maintenance: {
    name: 'Pakiet Utrzymaniowy',
    description: 'Regularne wsparcie i utrzymanie strony.',
    explain:
      'To jak mieć osobistego mechanika dla Twojej strony. Co miesiąc wykonujemy przegląd techniczny: aktualizujemy zabezpieczenia, sprawdzamy czy wszystko działa jak należy, robimy kopie zapasowe i reagujemy na ewentualne problemy. Jeśli potrzebujesz drobnych zmian na stronie, wykonamy je w ramach pakietu. Monitorujemy też dostępność strony 24/7, więc jeśli cokolwiek przestanie działać, dowiesz się o tym od nas, a nie od swoich klientów.',
    details: [
      'Miesięczne aktualizacje bezpieczeństwa',
      'Monitoring dostępności',
      'Kopie zapasowe',
      'Wsparcie techniczne',
      'Drobne modyfikacje',
    ],
    price: { min: 500, max: 1500 },
    recurring: true, // opłata miesięczna
  },

  social_integration: {
    name: 'Integracja z Mediami Społecznościowymi',
    description: 'Kompleksowa integracja strony z platformami social media.',
    explain:
      'Ten pakiet łączy Twoją stronę ze światem mediów społecznościowych. To jak zbudowanie mostów między Twoją stroną a Facebookiem, Instagramem i innymi platformami. Odwiedzający mogą łatwo udostępniać Twoje treści, a Ty możesz pokazać najnowsze posty z social media bezpośrednio na stronie. System może też automatycznie publikować nowe treści ze strony na Twoich profilach społecznościowych. Dodatkowo, specjalne znaczniki sprawiają, że gdy ktoś udostępni link do Twojej strony, pojawi się atrakcyjny podgląd z obrazkiem i opisem.',
    details: [
      'Przyciski udostępniania treści',
      'Feed z social media na stronie',
      'Automatyczne publikowanie treści na social media',
      'Meta tagi dla social media (Open Graph)',
      'Pixel Facebook i inne trackery social media',
    ],
    price: { min: 800, max: 2000 },
  },

  forms_advanced: {
    name: 'Zaawansowane Formularze i Integracje',
    description: 'System formularzy z integracjami i automatyzacją.',
    explain:
      'Wyobraź sobie inteligentnego asystenta, który pomaga Twoim klientom wypełniać formularze i automatycznie przetwarza otrzymane informacje. Formularze mogą być wieloetapowe (jak dobry sprzedawca, który prowadzi klienta krok po kroku), sprawdzają poprawność danych na bieżąco i automatycznie zapisują wersje robocze - nikt nie straci wypełnionych informacji, jeśli przypadkiem zamknie przeglądarkę. Gdy ktoś wypełni formularz, system może automatycznie wysłać potwierdzenie, zapisać dane w Twoim CRM i powiadomić odpowiednie osoby w firmie.',
    details: [
      'Formularze wieloetapowe',
      'Walidacja w czasie rzeczywistym',
      'Integracja z CRM/ERP',
      'Automatyczne powiadomienia email/SMS',
      'System antyspamowy',
      'Zapisywanie wersji roboczych formularzy',
    ],
    price: { min: 2000, max: 4000 },
  },

  custom_animations: {
    name: 'Animacje i Efekty Specjalne',
    description: 'Zaawansowane animacje i interaktywne elementy strony.',
    explain:
      'To jak dodanie magii do Twojej strony. Zamiast statycznych elementów, Twoja strona ożywa: teksty płynnie pojawiają się podczas przewijania, tła zmieniają się w zależności od ruchu myszki, a przejścia między podstronami są płynne i eleganckie. To wszystko jest zrobione z dbałością o wydajność - animacje nie spowalniają strony i działają płynnie nawet na słabszych urządzeniach. To jak profesjonalny efekty specjalne w filmie - subtelne, ale robiące wrażenie.',
    details: [
      'Animacje scroll-triggered',
      'Efekty paralaksy',
      'Animowane przejścia między podstronami',
      'Interaktywne elementy UI',
      'Optymalizacja wydajności animacji',
      'Fallbacki dla starszych przeglądarek',
    ],
    price: { min: 1500, max: 3500 },
  },

  search_system: {
    name: 'System Wyszukiwania',
    description: 'Zaawansowany system wyszukiwania treści na stronie.',
    explain:
      'To jak posiadanie super-inteligentnego asystenta, który pomaga odwiedzającym znaleźć dokładnie to, czego szukają na Twojej stronie. System nie tylko znajduje dokładne frazy, ale rozumie też podobne słowa i synonimy. Podczas wpisywania podpowiada możliwe wyniki, a znalezione treści można łatwo filtrować i sortować. To jak mieć osobistego przewodnika, który dokładnie wie, gdzie co się znajduje na Twojej stronie i potrafi błyskawicznie do tego zaprowadzić.',
    details: [
      'Wyszukiwanie full-text',
      'Filtrowanie i sortowanie wyników',
      'Autouzupełnianie',
      'Obsługa synonimów',
      'Kategoryzacja wyników',
      'Historia wyszukiwania',
      'Raportowanie popularnych wyszukiwań',
    ],
    price: { min: 2000, max: 4000 },
  },

  payment_integration: {
    name: 'Integracja Płatności',
    description:
      'System obsługi płatności online z różnymi metodami płatności.',
    explain:
      'To jak wyposażenie Twojej strony w kompletny system kasowy z wszystkimi możliwymi metodami płatności. Twoi klienci mogą płacić tak, jak im wygodnie - kartą, przelewem, BLIK-iem czy w systemie ratalnym. System dba o bezpieczeństwo transakcji, automatycznie generuje faktury i wysyła potwierdzenia. Możesz też ustawić płatności cykliczne, idealne dla abonamentów czy regularnych usług. Panel administracyjny pokazuje Ci wszystkie transakcje w jednym miejscu, więc masz pełną kontrolę nad przepływem pieniędzy.',
    details: [
      'Integracja z popularnymi bramkami (Przelewy24, PayU, Stripe)',
      'Płatności cykliczne/subskrypcje',
      'System fakturowania',
      'Panel zarządzania transakcjami',
      'Automatyczne powiadomienia o statusie płatności',
      'Zabezpieczenia transakcji',
    ],
    price: { min: 2500, max: 5000 },
  },
};
