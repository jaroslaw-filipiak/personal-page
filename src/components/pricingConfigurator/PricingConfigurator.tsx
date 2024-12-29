'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

// import { Card, CardContent } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Info, ArrowRight } from 'lucide-react';

interface SelectedOptions {
  approach: keyof typeof approaches;
  websiteType: keyof typeof websiteTypes;
  pagesCount: number;
  viewsCount: number;
  techStack: string[];
  additionalFeatures: string[];
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

const approaches: Approaches = {
  static: {
    name: 'Tradycyjne strony statyczne',
    description:
      'Najprostsze podejście oparte na czystym HTML, CSS i JavaScript. Strony są przechowywane jako pliki na serwerze i wysyłane bezpośrednio do przeglądarki.',
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
    showForSelectedWebsiteType: ['landing'],
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
    ],
  },
};

const websiteTypes: WebsiteTypes = {
  landing: {
    name: 'Landing Page',
    description:
      'Pojedyncza, długa strona skupiająca się na konkretnym celu (np. sprzedaż produktu, zapis na newsletter). Idealna do kampanii marketingowych i prezentacji pojedynczego produktu/usługi.',
    basePrice: { min: 999, max: 4000 },
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
      'Specjalistyczna platforma z zaawansowaną wyszukiwarką, filtrowaniem, mapami i systemem zarządzania ofertami. Dedykowana dla agencji nieruchomości i deweloperów.',
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

const additionalFeatures = {
  // RWD w różnych wariantach
  rwd_basic: {
    name: 'RWD - Wariant Podstawowy',
    description:
      'Dostosowanie strony do 3 podstawowych breakpointów (mobile, tablet, desktop). Zapewnia podstawową responsywność strony.',
    details: [
      'Obsługa 3 głównych breakpointów',
      'Podstawowe testy na popularnych urządzeniach',
      'Optymalizacja podstawowych elementów interfejsu',
    ],
    price: { min: 1000, max: 1500 },
  },
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
  rwd_premium: {
    name: 'RWD - Wariant Premium',
    description:
      'Kompleksowe podejście do responsywności z wykorzystaniem zaawansowanych narzędzi testowych i szczegółową optymalizacją.',
    details: [
      'Obsługa 7+ breakpointów z uwzględnieniem nietypowych rozdzielczości',
      'Automatyczne testy screenshotowe (LambdaTest)',
      'Testy na fizycznych urządzeniach',
      'Optymalizacja wydajnościowa dla urządzeń mobilnych',
      'Raport z testów responsywności',
    ],
    price: { min: 3500, max: 5000 },
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

// Define a type for the keys of additionalFeatures
type AdditionalFeatureKey = keyof typeof additionalFeatures;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '60px',
  nextArrow: <div>Next</div>,
  prevArrow: <div>Prev</div>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: '60px',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        centerPadding: '40px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
      },
    },
  ],
};

const ActiveApproachCheckmark = () => (
  <span className='text-white bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-check'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l5 5l10 -10' />
    </svg>
  </span>
);

// Create a reusable component for the navigation steps
const StepItem = ({
  stepNumber,
  label,
  currentStep,
  activeApproach,
  onClick,
  isActiveStep,
  clickable,
}: {
  stepNumber: string;
  label: string;
  currentStep: string;
  activeApproach: string;
  isActiveStep: boolean;
  clickable: boolean;
  onClick: () => void;
}) => (
  <li
    className={`cursor-pointer opacity-70 hover:opacity-100 group ${
      clickable
        ? 'cursor-pointer'
        : 'pointer-events-none cursor-not-allowed  opacity-15'
    }`}
    onClick={onClick}
  >
    <div className='flex items-center gap-2 min-h-[32px]'>
      <span>
        {isActiveStep ? <ActiveApproachCheckmark /> : `${stepNumber}.`}
      </span>
      {label}
    </div>
    <div
      className={`w-full h-[4px] rounded-lg bg-black my-2 ${
        currentStep === `step${stepNumber}` ? 'bg-opacity-100' : 'bg-opacity-20'
      }`}
    ></div>
  </li>
);

export default function PricingConfigurator() {
  const [step, setStep] = useState('step1');
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    approach: '' as keyof typeof approaches,
    websiteType: '' as keyof typeof websiteTypes,
    pagesCount: 1,
    viewsCount: 0,
    techStack: [],
    additionalFeatures: [],
  });
  const [activeApproach, setActiveApproach] = useState('');

  const [totalEstimate, setTotalEstimate] = useState({
    min: 0,
    max: 0,
  });

  const sliderRef = useRef<any>(null);

  const websiteTypeKey =
    selectedOptions.websiteType as keyof typeof websiteTypes;

  const calculateEstimate = useCallback(() => {
    if (!selectedOptions.websiteType || !selectedOptions.approach) {
      setTotalEstimate({
        min: 0,
        max: 0,
      });
      return;
    }

    // Get base price from website type
    const basePrice = websiteTypes[selectedOptions.websiteType].basePrice;
    let minPrice = basePrice.min;
    let maxPrice = basePrice.max;

    // Apply approach modifier
    const approachModifier = approaches[selectedOptions.approach].priceModifier;
    minPrice *= approachModifier;
    maxPrice *= approachModifier;

    // Add price for additional pages
    if (selectedOptions.pagesCount > 1) {
      const additionalPages = selectedOptions.pagesCount - 1;
      minPrice += additionalPages * 500;
      maxPrice += additionalPages * 1000;
    }

    // Add prices for additional features
    selectedOptions.additionalFeatures.forEach((feature) => {
      const featureKey = feature as AdditionalFeatureKey;
      if (additionalFeatures[featureKey]) {
        minPrice += additionalFeatures[featureKey].price.min;
        maxPrice += additionalFeatures[featureKey].price.max;
      }
    });

    // Round to nearest integer
    setTotalEstimate({
      min: Math.round(minPrice),
      max: Math.round(maxPrice),
    });
  }, [selectedOptions]);

  useEffect(() => {
    console.log('Selected Options:', selectedOptions);
    console.log('Total Estimate:', totalEstimate);
  }, [selectedOptions, totalEstimate]);

  useEffect(() => {
    calculateEstimate();
  }, [selectedOptions, calculateEstimate]);

  const generateSummary = () => {
    if (!selectedOptions.websiteType || !selectedOptions.approach) return '';

    const approach =
      approaches[selectedOptions.approach as keyof typeof approaches];
    const websiteType = websiteTypes[selectedOptions.websiteType];
    const selectedFeatures = selectedOptions.additionalFeatures
      .map((feature) => {
        const featureKey = feature as AdditionalFeatureKey;
        return additionalFeatures[featureKey].name;
      })
      .join(', ');

    return (
      <>
        <div>
          <div> Wybrałeś podejście: {approach.name}</div>
          <div>{approach.description}</div>
          <div>Typ strony: {websiteType.name}</div>
          <div>Liczba podstron: {selectedOptions.pagesCount}</div>
          <div>Dodatkowe funkcjonalności: {selectedFeatures}</div>
          <div>
            Szacowany czas realizacji:
            {selectedOptions.approach === 'template'
              ? '1-2 tygodnie'
              : selectedOptions.approach === 'custom_wp'
              ? '2-4 tygodnie'
              : '4-8 tygodni'}
          </div>
          <div>
            {' '}
            Ostateczna cena może się różnić w zależności od szczegółowych
            wymagań i stopnia skomplikowania projektu.
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='w-full overflow-hidden'>
      <div className='bg-gray-50 p-6 mb-8'>
        <h2 className='text-3xl mb-4 text-center'>
          Konfigurator kosztów strony internetowej
        </h2>
        <nav>
          <ul className='flex justify-center gap-4 mt-10'>
            <StepItem
              stepNumber='1'
              label='Wybierz rodzaj strony internetowej'
              currentStep={step}
              activeApproach={activeApproach}
              onClick={() => setStep('step1')}
              isActiveStep={step === 'step1' && websiteTypeKey !== ''}
              clickable={true}
            />
            <StepItem
              stepNumber='2'
              label='Wybierz podejście do tworzenia strony'
              currentStep={step}
              activeApproach={activeApproach}
              onClick={() => setStep('step2')}
              isActiveStep={step === 'step2' && activeApproach !== ''}
              clickable={websiteTypeKey !== ''}
            />
            <StepItem
              stepNumber='3'
              label='Liczba podstron oraz dodatkowe funkcjonalnośći'
              currentStep={step}
              activeApproach={activeApproach}
              onClick={() => setStep('step3')}
              isActiveStep={step === 'step3' && activeApproach !== ''}
              clickable={websiteTypeKey !== '' && activeApproach !== ''}
            />

            <StepItem
              stepNumber='4'
              label='Podsumowanie'
              currentStep={step}
              activeApproach={activeApproach}
              onClick={() => setStep('step4')}
              isActiveStep={step === 'step4' && activeApproach !== ''}
              clickable={
                websiteTypeKey !== '' &&
                activeApproach !== '' &&
                selectedOptions.pagesCount > 0
              }
            />
          </ul>
        </nav>
        <p className='text-gray-600 mb-4 hidden'>
          Przed rozpoczęciem konfiguracji, zachęcamy do zapoznania się z naszym
          szczegółowym przewodnikiem:
        </p>
        <ul className='space-y-2 hidden'>
          <li>
            <a
              href='#podejscia'
              className='text-blue-600 hover:text-blue-800 flex items-center'
            >
              {/* <ArrowRight className='h-4 w-4 mr-2' /> */}
              Szczegółowe porównanie różnych podejść do tworzenia stron
            </a>
          </li>
          <li>
            <a
              href='#etapy'
              className='text-blue-600 hover:text-blue-800 flex items-center'
            >
              {/* <ArrowRight className='h-4 w-4 mr-2' /> */}
              Etapy realizacji i czasochłonność dla każdego podejścia
            </a>
          </li>
          <li>
            <a
              href='#koszty'
              className='text-blue-600 hover:text-blue-800 flex items-center'
            >
              {/* <ArrowRight className='h-4 w-4 mr-2' /> */}
              Szczegółowa analiza kosztów
            </a>
          </li>
        </ul>
      </div>

      {/* Wybór podejścia */}
      {step === 'step1' && (
        <div>
          <div className='mb-6 container   text-center'>
            <div className='inline-flex items-center gap-2 border border-opacity-20 border-black p-6 '>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='icon icon-tabler icons-tabler-filled icon-tabler-info-square'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z' />
                </svg>
              </span>
              Zanim przejdziemy do szczegółów, wybierz typ strony interentowej,
              którą chcesz stworzyć. Wyróżniamy kilka typów stron internetowych.
              Każdy ma swój własny cel oraz przeznaczenie.
            </div>
          </div>

          <div>
            {/* Slot for Previous Arrow */}
            <div className='flex items-center justify-between container relative top-[30px] z-10 '>
              <div
                className='w-36 transition-all text-white py-4 px-10 bg-black cursor-pointer  flex items-center justify-center hover:opacity-80 selection:bg-transparent'
                onClick={() => sliderRef.current.slickPrev()}
              >
                Wstecz
              </div>

              {/* Slot for Next Arrow */}
              <div
                className='w-36 transition-all text-white py-4 px-10 bg-black cursor-pointer  flex items-center justify-center hover:opacity-80 selection:bg-transparent'
                onClick={() => sliderRef.current.slickNext()}
              >
                Dalej
              </div>
            </div>

            <Slider {...settings} ref={sliderRef}>
              {Object.entries(websiteTypes).map(([key, type]) => (
                <div
                  key={key}
                  className={`transition-colors py-12 px-6 cursor-pointer hover:bg-slate-100  z-20
                  ${
                    selectedOptions.websiteType === key
                      ? 'bg-slate-100 '
                      : 'bg-lightGray'
                  }
                  ${
                    selectedOptions.websiteType === key
                      ? 'bg-slate-100 relative border'
                      : ''
                  }
                  `}
                  onClick={() => {
                    setSelectedOptions((prev) => ({
                      ...prev,
                      websiteType: key,
                    }));
                  }}
                >
                  <div className='p-6'>
                    <h3 className='text-3xl  mb-2'>{type.name}</h3>
                    <p className='text-gray-600 mb-4'>{type.description}</p>
                    <div className='line w-full h-[1px] bg-black bg-opacity-20 my-6'></div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 hidden'>
                      <div>
                        <h4 className='font-semibold text-green-600 mb-2'>
                          Zalety:
                        </h4>
                        <ul className='list-disc pl-5'>
                          {/* {approach.pros.map((pro, index) => (
                            <li key={index} className='text-sm'>
                              {pro}
                            </li>
                          ))} */}
                        </ul>
                      </div>
                      <div>
                        <h4 className='font-semibold text-red-600 mb-2'>
                          Wady:
                        </h4>
                        <ul className='list-disc pl-5'>
                          {/* {approach.cons.map((con, index) => (
                            <li key={index} className='text-sm'>
                              {con}
                            </li>
                          ))} */}
                        </ul>
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <h4 className='text-md  mb-2'>
                          <span className='text-black'>
                            Od: {type.basePrice.min} zł{' '}
                          </span>
                          <span className='text-black text-opacity-40 pl-1'>
                            / netto + VAT
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {step === 'step2' && (
        <div>
          <div className='mb-6 container flex items-start justify-center  border border-opacity-20 border-black p-6 gap-12'>
            <div className=' w-8/12'>
              Wybrałeś:
              <span className='font-semibold pl-1 pr-1'>
                {websiteTypes[selectedOptions.websiteType].name}.
              </span>
              Taką stronę można stworzyć na wiele różnych sposobów a każdy z
              nich różni sie zarówno czasem realizacji jak i kosztami.Wybierz
              podejście, które najlepiej pasuje do Twoich wymagań. W każdym
              elemencie wyszczególniłem listę zalet oraz wad takiego
              podejścia.Jeżeli chciałbyś sie dowiedzieć więcej o róznych
              podejściach zapoznaj się z dedykowanym wpisem gdzie barddziej
              szczegółowo opisane są różnice podejść.
            </div>

            <div>
              {' '}
              <Link href='/blog/podejscia-do-tworzenia-stron-internetowych'>
                <span className='text-black hover:text-opacity-80 flex items-start hover:underline'>
                  Dowiedz się więcej o różnych podejściach do tworzenia stron
                  internetowych
                </span>
              </Link>
            </div>
          </div>

          <div>
            {/* Slot for Previous Arrow */}
            <div className='flex items-center justify-between container relative top-[30px] z-10 '>
              <div
                className='w-36 transition-all text-white py-4 px-10 bg-black cursor-pointer  flex items-center justify-center hover:opacity-80 selection:bg-transparent'
                onClick={() => sliderRef.current.slickPrev()}
              >
                Wstecz
              </div>

              {/* Slot for Next Arrow */}
              <div
                className='w-36 transition-all text-white py-4 px-10 bg-black cursor-pointer  flex items-center justify-center hover:opacity-80 selection:bg-transparent'
                onClick={() => sliderRef.current.slickNext()}
              >
                Dalej
              </div>
            </div>

            <Slider {...settings} ref={sliderRef}>
              {Object.entries(approaches)
                .filter(([_, approach]) =>
                  approach.showForSelectedWebsiteType.includes(
                    selectedOptions.websiteType as string
                  )
                )
                .map(([key, approach]) => (
                  <div
                    key={key}
                    className={`transition-colors py-12 px-6 cursor-pointer hover:bg-slate-100 
                  ${activeApproach === key ? 'bg-slate-100 ' : 'bg-lightGray'}
                  ${
                    activeApproach === key ? 'bg-slate-100 relative border' : ''
                  }
                  `}
                    onClick={() => {
                      setActiveApproach(key);
                      setSelectedOptions((prev) => ({
                        ...prev,
                        approach: key as keyof typeof approaches,
                      }));
                    }}
                  >
                    <div className='p-6'>
                      <h3 className='text-3xl  mb-2'>{approach.name}</h3>
                      <p className='text-gray-600 mb-4'>
                        {approach.description}
                      </p>
                      <div className='line w-full h-[1px] bg-black bg-opacity-20 my-6'></div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <h4 className='font-semibold text-green-600 mb-2'>
                            Zalety:
                          </h4>
                          <ul className='list-disc pl-5'>
                            {approach.pros.map((pro, index) => (
                              <li key={index} className='text-sm'>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className='font-semibold text-red-600 mb-2'>
                            Wady:
                          </h4>
                          <ul className='list-disc pl-5'>
                            {approach.cons.map((con, index) => (
                              <li key={index} className='text-sm'>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className='line w-full h-[1px] bg-black bg-opacity-20 my-6'></div>
                      <div className='mt-6'>
                        Koszty dla wykonania:
                        <strong className='pl-1 pr-2'>
                          {websiteTypes[selectedOptions.websiteType].name}
                        </strong>
                        zgodnie z tym podejściem rozpoczynają się od:
                      </div>
                      <div className='mt-3'>
                        <span className='text-black'>
                          {websiteTypes[selectedOptions.websiteType].basePrice
                            .min * approach.priceModifier}
                          zł
                        </span>
                        <span className='text-black text-opacity-40 pl-1'>
                          / netto + VAT
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )}

      {step === 'step3' && (
        <div className='container'>
          <div className='mb-6 container flex items-start justify-center  border border-opacity-20 border-black p-6 gap-12'>
            <div className=' w-8/12'>
              Wybrałeś:
              <span className='font-semibold pl-1 pr-1'>
                {websiteTypes[selectedOptions.websiteType].name}.
              </span>
            </div>

            {/* <div>
              {' '}
              <Link href='/blog/podejscia-do-tworzenia-stron-internetowych'>
                <span className='text-black hover:text-opacity-80 flex items-start hover:underline'>
                  Dowiedz się więcej o różnych podejściach do tworzenia stron
                  internetowych
                </span>
              </Link>
            </div> */}
          </div>

          {/* Liczba podstron */}
          <div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>
                Przybliżona liczba podstron
              </h3>
              <input
                type='number'
                min='1'
                max='20'
                value={selectedOptions.pagesCount}
                onChange={(e) =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    pagesCount: parseInt(e.target.value) || 1,
                  }))
                }
                className='w-24 p-2 border rounded'
              />
            </div>
          </div>

          {/* Liczba unikalnych widoków */}
          <div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>
                Przybliżona liczba unikalnych widoków
              </h3>
              <input
                type='number'
                min='1'
                max='20'
                value={selectedOptions.viewsCount}
                onChange={(e) =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    viewsCount: parseInt(e.target.value) || 1,
                  }))
                }
                className='w-24 p-2 border rounded'
              />
            </div>
          </div>

          {/* Dodatkowe funkcjonalności */}
          <div className='mb-6'>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>
                Dodatkowe funkcjonalności
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {Object.entries(additionalFeatures).map(([key, feature]) => (
                  <div
                    key={key}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors
                      ${
                        selectedOptions.additionalFeatures.includes(key)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    onClick={() =>
                      setSelectedOptions((prev) => ({
                        ...prev,
                        additionalFeatures: prev.additionalFeatures.includes(
                          key
                        )
                          ? prev.additionalFeatures.filter(
                              (item) => item !== key
                            )
                          : [...prev.additionalFeatures, key],
                      }))
                    }
                  >
                    <h4 className='font-semibold mb-2'>{feature.name}</h4>
                    <p className='text-sm text-gray-600'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 'step4' && (
        <>
          {/* Podsumowanie */}

          <div className='mb-6 bg-blue-50 container'>
            <div className='p-6'>
              <h3 className='text-xl mb-4'>Szacunkowa wycena</h3>
              <div className='text-2xl  mb-4'>
                <span className='font-semibold'>
                  {' '}
                  {totalEstimate.min.toLocaleString()} PLN -{' '}
                  {totalEstimate.max.toLocaleString()} PLN
                </span>
                <span className='text-black text-opacity-20'>
                  {' '}
                  / Netto + VAT
                </span>
              </div>
              <div>
                <div className='h-4 w-4' />
                <div className='whitespace-pre-line'>{generateSummary()}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
