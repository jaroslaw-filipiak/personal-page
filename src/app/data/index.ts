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
