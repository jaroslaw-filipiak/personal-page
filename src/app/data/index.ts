interface WebsiteType {
  name: string;
  description: string;
  basePrice: {
    min: number;
    max: number;
  };
  cons?: string[];
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
    cons: [
      'Szybkie wdrożenie już od 7 dni roboczych',
      'Elastyczna architektura umożliwiająca przyszłą rozbudowę',
      'Efektywna konwersja dzięki zoptymalizowanej ścieżce użytkownika',
      'Wydajność i szybkość działania zapewniająca komfort użytkowania',
    ],
  },
  small_website: {
    name: 'Prosta strona tzw: wizytówka',
    description:
      'Jej rozmiar to zazwyczaj strona główna oraz strona kontaktowa. Idealna dla małych firm, freelancerów czy osób prywatnych chcących zaistnieć w internecie.',
    basePrice: { min: 1499, max: 6000 },

    cons: [
      'Doskonała opcja na start z możliwością rozbudowy w przyszłości',
      'Możliwość dodania bloga lub portfolio',
      'Optymalizacja pod kątem SEO',
      'Dostosowanie do różnych urządzeń',
      'Możliwość elastycznej rozbudowy o dodatkowe funkcjonalności',
    ],
  },
  business: {
    name: 'Strona firmowa',
    description:
      'Rozbudowana wizytówka firmy z podstronami zawierającymi informacje o firmie, usługach, realizacjach i dane kontaktowe. Świetna dla firm chcących zaznaczyć swoją obecność w internecie.',
    basePrice: { min: 4000, max: 8000 },
    cons: [
      'Kompleksowa prezentacja oferty firmy',
      'Integracja z mediami społecznościowymi',
      'System zarządzania treścią (CMS)',
      'Zaawansowana optymalizacja SEO',
      'Moduł aktualności i nowości',
    ],
  },
  shop: {
    name: 'Sklep internetowy',
    description:
      'Pełnoprawna platforma e-commerce z katalogiem produktów, koszykiem, systemem płatności i panelem administracyjnym. Niezbędna dla firm prowadzących sprzedaż online.',
    basePrice: { min: 8000, max: 15000 },
    cons: [
      'Zaawansowany system zarządzania produktami',
      'Integracja z popularnymi bramkami płatności',
      'System zarządzania zamówieniami i statusami',
      'Integracja z systemami kurierskimi',
      'Moduł rabatów i promocji',
    ],
  },
  portfolio: {
    name: 'Portfolio/Blog',
    description:
      'Strona prezentująca prace, projekty lub treści w formie bloga. Idealna dla twórców, fotografów, architektów czy freelancerów chcących pokazać swoje dokonania.',
    basePrice: { min: 3000, max: 6000 },
    cons: [
      'Elegancka prezentacja projektów i realizacji',
      'System kategoryzacji i tagowania treści',
      'Galerie zdjęć z zaawansowanymi funkcjami',
      'System komentarzy i interakcji z użytkownikami',
      'Integracja z platformami społecznościowymi',
    ],
  },
  coursesPlatform: {
    name: 'Platforma edukacyjna',
    description:
      'System do prowadzenia kursów online z modułami do zarządzania treścią, postępami uczniów, płatnościami za kursy i komunikacją. Doskonała dla edukatorów i firm szkoleniowych.',
    basePrice: { min: 8000, max: 30000 },
    cons: [
      'Zautomatyzowany system monetyzacji wiedzy',
      'Zaawansowane narzędzia do budowania społeczności edukacyjnej',
      'System śledzenia postępów wspierający rozwój uczestników',
      'Automatyczna certyfikacja potwierdzająca zdobyte kompetencje',
      'Integracja z platformami do prowadzenia zajęć online',
    ],
  },
  // reservation: {
  //   name: 'System rezerwacji',
  //   description:
  //     'Platforma do zarządzania rezerwacjami z kalendarzem, systemem powiadomień i płatnościami. Idealna dla restauracji, salonów, gabinetów czy hoteli.',
  //   basePrice: { min: 10000, max: 20000 },
  // },
  // realEstate: {
  //   name: 'Portal nieruchomości',
  //   description:
  //     'Specjalistyczna platforma z zaawansowaną wyszukiwarką, filtrowaniem, mapami i systemem zarządzania ofertami. Dedykowana dla agencji nieruchomości i deweloperów. Możliwość integracji z systemami typu Asari CMS itp.',
  //   basePrice: { min: 8000, max: 30000 },
  // },
  // jobBoard: {
  //   name: 'Portal ogłoszeń pracy',
  //   description:
  //     'System z zarządzaniem ogłoszeniami pracy, profilami kandydatów, aplikacjami i komunikacją między pracodawcami a kandydatami.',
  //   basePrice: { min: 14000, max: 25000 },
  // },
  // customApp: {
  //   name: 'Aplikacja webowa',
  //   description:
  //     'Zaawansowana aplikacja internetowa z dedykowanymi funkcjami biznesowymi, intergracjami i złożoną logiką. Dla firm potrzebujących specjalistycznego oprogramowania.',
  //   basePrice: { min: 25000, max: 100000 },
  // },
};

export const approaches: Approaches = {
  static: {
    name: 'Wersja statyczna (bez systemu CMS)',
    description:
      'Najprostsze podejście oparte na czystym HTML, CSS i JavaScript. Strony są przechowywane jako pliki .html na serwerze i wysyłane bezpośrednio do przeglądarki. Brak systemu CMS uniemożliwia samodzielną edycję strony',
    budget: 'od 1500 PLN',
    forWho: [
      'Proste strony wizytówkowe',
      'Spzedażowy landing page',
      'Strony wydarzeń jednorazowych',
      'Projekty z minimalnym budżetem',
      'Małe projekty bez potrzeby częstej aktualizacji',
    ],
    pros: [
      'Ultra szybkie ładowanie strony!',
      'Najwyższy możliwy poziom bezpieczeństwa',
      'Bardzo szybkie wdrożenie',
      'Niska cena',
      'Proste wdrożenie i hosting',
    ],
    cons: [
      'Brak panelu administracyjnego',
      'Brak możliwości samodzielnej edycji treści',
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
      'Możliwość samodzielnej obsługi przez klienta',
    ],
    cons: [
      'Ograniczona unikalność designu',
      'Kompromisy w funkcjonalności',
      'Możliwe problemy z wydajnością',
    ],
    priceModifier: 1.6,
    recommended: 'Dla: małych firm, blogów, projektów z mniejszym budżetem',
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
    name: 'WordPress - Projekty autorskie',
    description:
      'Tworzenie autorskich motywów WordPress na podstawie indywidualnych projektów graficznych. Pełna kontrola nad wyglądem i funkcjonalnością przy zachowaniu zalet CMSa. Projekt graficzny tworzony autorsko przez grafika',
    budget: '8000 - 25000 PLN',
    forWho: [
      'Średnie firmy wymagające unikalnego wizerunku',
      'Sklepy internetowe',
      'Portale contentowe',
      'Firmy które stawiają na jakośc oraz unikalny design',
    ],
    pros: [
      'Unikalny design dopasowany do marki',
      'Łatwe zarządzanie treścią',
      'Bardzo szybkie wczytywanie strony',
      'Wysoki poziom bezpieczeństwa',
      'Wysoka jakość kodu',
      'Możliwość rozbudowy o nowe funkcjonalnośći',
    ],
    cons: ['Dłuższy czas realizacji (4-6 tygodni)', 'Wyższy koszt początkowy'],
    priceModifier: 2.2,
    recommended: 'Dla: firm, sklepów internetowych, portali contentowych',
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
  // wp_headless: {
  //   name: 'WordPress jako Headless CMS',
  //   description:
  //     'Wykorzystanie WordPressa jako backendu do zarządzania treścią, z frontendem zbudowanym w nowoczesnym frameworku (Next.js, React).',
  //   budget: '20000 - 50000 PLN',
  //   forWho: [
  //     'Duże projekty wymagające wysokiej wydajności',
  //     'Aplikacje webowe z rozbudowanym interfejsem',
  //     'Projekty wymagające zaawansowanych animacji',
  //     'Firmy stawiające na najnowsze technologie',
  //   ],
  //   pros: [
  //     'Najlepsza wydajność i UX',
  //     'Łączenie zalet WordPressa i nowoczesnych technologii',
  //     'Zaawansowane możliwości frontendowe',
  //     'Lepsze bezpieczeństwo',
  //     'Elastyczna architektura',
  //   ],
  //   cons: [
  //     'Złożoność utrzymania (dwa środowiska)',
  //     'Dłuższy czas wdrożenia (8-12 tygodni)',
  //     'Wymaga bardziej zaawansowanej struktury serwerowej',
  //   ],
  //   priceModifier: 3.5,
  //   recommended:
  //     'Dla: dużych firm, zaawansowanych aplikacji webowych, projektów zorientowanych na wydajność',
  //   showForSelectedWebsiteType: [
  //     'landing',
  //     'business',
  //     'portfolio',
  //     'realEstate',
  //     'jobBoard',
  //     'small_website',
  //   ],
  // },
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
      'Nowoczesna architektura',
    ],
    cons: [
      'Wyzwania z SEO',
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
  // nextjs: {
  //   name: 'Next.js Full-stack',
  //   description: 'Zaawansowane aplikacje wykorzystujące możliwości Next.js',
  //   budget: '30000 - 100000+ PLN',
  //   forWho: [
  //     'Duże platformy internetowe',
  //     'Projekty e-commerce enterprise',
  //     'Aplikacje wymagające najwyższej wydajności',
  //     'Startupy planujące szybki rozwój',
  //   ],
  //   pros: [
  //     'Najlepsza wydajność i SEO',
  //     'Server-side i static generation',
  //     'Zaawansowane możliwości cachowania',
  //     'Doskonała skalowalność',
  //   ],
  //   cons: [
  //     'Wysoki koszt rozwoju',
  //     'Złożoność implementacji',
  //     'Wymaga doświadczonego zespołu',
  //     'Dłuższy czas wdrożenia (10-14 tygodni)',
  //   ],
  //   priceModifier: 3.8,
  //   recommended:
  //     'Dla: dużych platform, zaawansowanych e-commerce, projektów wymagających najwyższej wydajności',
  //   showForSelectedWebsiteType: [
  //     'landing',
  //     'business',
  //     'portfolio',
  //     'reservation',
  //     'jobBoard',
  //     'customApp',
  //     'small_website',
  //   ],
  // },
};

export const additionalFeatures = {
  // RWD w różnych wariantach
  rwd_advanced: {
    name: 'RWD - Wariant Zaawansowany',
    description:
      'Rozszerzona responsywność z obsługą 5 breakpointów oraz screenshot testy na realnych urządzeniach.',
    explain:
      'Ten pakiet sprawia, że Twoja strona będzie wyglądać idealnie na każdym urządzeniu - od małych smartfonów po duże monitory. Dzięki zaawansowanym testom mamy pewność, że wszystko działa perfekcyjnie zarówno na iPadzie trzymanym poziomo, jak i na najmniejszym telefonie. To jak posiadanie strony, która "czuje się jak w domu" na każdym urządzeniu.',
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
    name: 'Przystosowanie strony pod SEO',
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

  // Analityka
  analytics_basic: {
    name: 'Wdrożenie narzędzi analitycznych',
    description: 'Podstawowe śledzenie zachowań użytkowników na stronie.',
    explain:
      'To jak zainstalowanie kamer w sklepie stacjonarnym - dowiesz się, ilu masz odwiedzających, które "półki" (podstrony) są najpopularniejsze i jak długo ludzie zostają w Twoim "sklepie". Podstawowa analityka daje Ci wgląd w to, co się dzieje na Twojej stronie, dzięki czemu możesz podejmować lepsze decyzje biznesowe. Zobaczysz, skąd przychodzą Twoi użytkownicy i co ich najbardziej interesuje.',
    details: ['Implementacja Google Analytics 4'],
    price: { min: 500, max: 1000 },
  },

  // Dodatkowe funkcje
  security: {
    name: 'Bezpieczeństwo Premium',
    description: 'Zaawansowane zabezpieczenia strony i danych.',
    explain:
      'To jak zainstalowanie najnowocześniejszego systemu alarmowego w Twoim domu. Twoja strona otrzymuje wielopoziomową ochronę: szyfrowanie danych (SSL) zapewnia, że informacje przesyłane między użytkownikiem a stroną są bezpieczne, firewall chroni przed atakami hakerskimi, a system kopii zapasowych gwarantuje, że nawet w przypadku awarii nie stracisz żadnych danych. Regularne audyty bezpieczeństwa działają jak okresowe przeglądy techniczne, wykrywając potencjalne zagrożenia, zanim staną się problemem.',
    details: ['SSL/TLS', 'Firewall aplikacyjny', 'Backup danych'],
    price: { min: 2000, max: 4000 },
  },
  performance: {
    name: 'Optymalizacja Wydajności',
    description: 'Kompleksowa optymalizacja wydajności strony.',
    explain:
      'Ten pakiet sprawia, że strona ładuje się błyskawicznie: obrazy są automatycznie optymalizowane, treści dostarczane z najbliższego serwera (CDN), a elementy strony ładowane tylko wtedy, każdy element jest dopracowany, by działać jak najwydajniej. Szybka strona to nie tylko zadowoleni użytkownicy, ale także lepsza pozycja w Google.',
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
      'System automatycznie wykrywa język przeglądarki użytkownika i wyświetla odpowiednią wersję strony. Możesz łatwo zarządzać wszystkimi tłumaczeniami w jednym miejscu, a strona jest zoptymalizowana pod SEO dla każdego języka osobno. To idealne rozwiązanie, jeśli chcesz dotrzeć do klientów z różnych krajów - każdy zobaczy Twoją stronę w swoim języku, co znacząco zwiększa zaufanie i konwersję.',
    details: [
      'System zarządzania tłumaczeniami',
      'SEO dla wielu języków',
      'Automatyczne wykrywanie języka',
      'Regionalizacja treści',
    ],
    price: { min: 2000, max: 4000 },
  },
  forms_advanced: {
    name: 'Zaawansowane Formularze i Integracje',
    description: 'System formularzy z integracjami i automatyzacją.',
    explain:
      'Formularze mogą być wieloetapowe (jak dobry sprzedawca, który prowadzi klienta krok po kroku), sprawdzają poprawność danych na bieżąco i automatycznie zapisują wersje robocze - nikt nie straci wypełnionych informacji, jeśli przypadkiem zamknie przeglądarkę. Gdy ktoś wypełni formularz, system może automatycznie wysłać potwierdzenie, zapisać dane w Twoim CRM i powiadomić odpowiednie osoby w firmie.',
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
      'Twoja strona ożywa: teksty płynnie pojawiają się podczas przewijania, tła zmieniają się w zależności od ruchu myszki, a przejścia między podstronami są płynne i eleganckie. To wszystko jest zrobione z dbałością o wydajność - animacje nie spowalniają strony i działają płynnie nawet na słabszych urządzeniach. To jak profesjonalny efekty specjalne w filmie - subtelne, ale robiące wrażenie.',
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
};
