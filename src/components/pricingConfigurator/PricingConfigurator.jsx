'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRouter } from 'next/router';
// import { Card, CardContent } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Info, ArrowRight } from 'lucide-react';

export default function PricingConfigurator() {
  const [step, setStep] = useState('step1');
  const [selectedOptions, setSelectedOptions] = useState({
    approach: '',
    websiteType: '',
    pagesCount: 1,
    techStack: [],
    additionalFeatures: [],
  });

  const [totalEstimate, setTotalEstimate] = useState({
    min: 0,
    max: 0,
  });

  // const steps = [
  //   '1.Wybierz rodzaj strony internetowej',
  //   '2.Wybierz podejście do tworzenia strony',
  //   '3.Wybierz liczbę podstron',
  //   '4.Wybierz dodatkowe funkcjonalności',
  //   '5.Podsumowanie',
  // ];

  const approaches = {
    template: {
      name: 'Strona oparta o system CMS, z panelem administracyjnym',
      description:
        'Strony oparte o system CMS np: WordPress, pozwalają na łatwe zarządzanie treścią bez znajomości programowania. Klient otrzymuje dedykowany panel administracyjny z poziomu którego może samodzielnie edytować stronę ',
      budget: 'od 2500 ',
      forWho: [
        'Proste strony firmowe jak i rozbudowane, korporacyjne serwisy',
        'Strony tymczasowe pod kampanie',
        'Landing page o krótkim czasie życia',
        'Projekty z ograniczonym budżetem',
        'Firmy potrzebujące strony "na już"',
      ],
      pros: [
        'Szybka realizacja (1-2 tygodnie)',
        'Niski koszt początkowy',
        'Panel administracyjny dzięki któremu mozna samodzielnie zarządzać swoją stroną',
        'Ogromne możliwości zwiększania funkcjonalności strony np: formularze kontaktowe, systemy automatyzacji. Dzięki tzw: wtyczkom można rozszerzyć funkcjonalności swojej strony - znajomośći programowania',
      ],
      cons: [
        'Z racji popularności są bardziej narażone na ataki',
        'Strony oparte o CMS wymagają stałej opieki w zakresie aktualizacji systemu, wtyczek itp.',
      ],
      priceModifier: 0.4,
      recommended:
        'Dla: jednoosobowych firm, stron tymczasowych, projektów z minimalnym budżetem',
    },
    custom_wp: {
      name: 'Strona na WordPressie z autorskim projektem',
      description:
        'Rekomendowane rozwiązanie! Tworzymy indywidualny projekt w Figmie, następnie implementujemy go na WordPressie. Świetna równowaga między unikalnością a łatwością zarządzania.',
      budget: 'Budżet: 8 000 - 25 000 PLN',
      forWho: [
        'Małe i średnie firmy wymagające profesjonalnego wizerunku',
        'Sklepy internetowe do 1000 produktów',
        'Portale contentowe i blogi firmowe',
        'Firmy potrzebujące częstej aktualizacji treści',
        'Lokalne marki budujące silną obecność online',
      ],
      pros: [
        'Unikalny projekt dopasowany do marki',
        'Łatwe zarządzanie treścią',
        'Dobra wydajność przy odpowiedniej implementacji',
        'Możliwość rozbudowy w przyszłości',
        'Optymalizacja pod SEO',
        'Pełna dokumentacja projektu',
      ],
      cons: [
        'Czas realizacji 4-6 tygodni',
        'Ograniczenia techniczne WordPressa',
      ],
      priceModifier: 1,
      recommended:
        'Dla: firm średniej wielkości, sklepów internetowych, portali contenowych',
    },
    custom_dev: {
      name: 'W pełni autorska strona (custom development)',
      description:
        'Najbardziej profesjonalne podejście. Tworzymy unikalny projekt w Figmie, następnie implementujemy go używając nowoczesnych technologii (React, Next.js). Idealne dla wymagających projektów.',
      budget: 'Budżet: 25 000 - 100 000+ PLN',
      forWho: [
        'Duże firmy i korporacje',
        'Zaawansowane platformy e-commerce',
        'Aplikacje webowe i systemy',
        'Projekty wymagające integracji z zewnętrznymi systemami',
        'Startupy technologiczne',
      ],
      pros: [
        'Maksymalna wydajność i bezpieczeństwo',
        'Pełna unikalność i kontrola nad kodem',
        'Zaawansowane animacje i interakcje',
        'Nieograniczone możliwości rozwoju',
        'Integracja z dowolnymi systemami',
        'Dedykowany system CMS',
      ],
      cons: ['Czas realizacji 8-12 tygodni', 'Wyższe koszty utrzymania'],
      priceModifier: 2,
      recommended:
        'Dla: dużych firm, platform internetowych, zaawansowanych aplikacji webowych',
    },
  };

  const websiteTypes = {
    landing: {
      name: 'Landing Page',
      description:
        'Pojedyncza, długa strona skupiająca się na konkretnym celu (np. sprzedaż produktu, zapis na newsletter). Idealna do kampanii marketingowych i prezentacji pojedynczego produktu/usługi.',
      basePrice: { min: 2000, max: 4000 },
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
  };

  const additionalFeatures = {
    seo: {
      name: 'Optymalizacja SEO',
      description:
        'Kompleksowa optymalizacja strony pod kątem wyszukiwarek internetowych.',
      price: { min: 1000, max: 2000 },
    },
    analytics: {
      name: 'System analityki',
      description: 'Implementacja Google Analytics i panelu raportowania.',
      price: { min: 500, max: 1000 },
    },
    cms: {
      name: 'System zarządzania treścią',
      description: 'Panel administracyjny do samodzielnej aktualizacji treści.',
      price: { min: 1500, max: 3000 },
    },
    responsive: {
      name: 'RWD (Responsive Web Design)',
      description:
        'Dostosowanie strony do wszystkich urządzeń (desktop, tablet, mobile).',
      price: { min: 1000, max: 2000 },
    },
  };

  const calculateEstimate = () => {
    if (!selectedOptions.websiteType || !selectedOptions.approach) return;

    let basePrice = websiteTypes[selectedOptions.websiteType].basePrice;
    let minPrice = basePrice.min;
    let maxPrice = basePrice.max;

    // Modyfikacja ceny based on podejścia
    minPrice *= approaches[selectedOptions.approach].priceModifier;
    maxPrice *= approaches[selectedOptions.approach].priceModifier;

    // Modyfikacja ceny based on liczby stron
    if (selectedOptions.pagesCount > 1) {
      minPrice += (selectedOptions.pagesCount - 1) * 500;
      maxPrice += (selectedOptions.pagesCount - 1) * 1000;
    }

    // Dodanie cen za dodatkowe funkcjonalności
    selectedOptions.additionalFeatures.forEach((feature) => {
      minPrice += additionalFeatures[feature].price.min;
      maxPrice += additionalFeatures[feature].price.max;
    });

    setTotalEstimate({
      min: Math.round(minPrice),
      max: Math.round(maxPrice),
    });
  };

  useEffect(() => {
    calculateEstimate();
  }, [selectedOptions]);

  const generateSummary = () => {
    if (!selectedOptions.websiteType || !selectedOptions.approach) return '';

    const approach = approaches[selectedOptions.approach];
    const websiteType = websiteTypes[selectedOptions.websiteType];
    const selectedFeatures = selectedOptions.additionalFeatures
      .map((feature) => additionalFeatures[feature].name)
      .join(', ');

    return `
      Wybrałeś podejście: ${approach.name}, które jest ${approach.description}
      
      Typ strony: ${websiteType.name}
      ${
        selectedOptions.pagesCount > 1
          ? `Liczba podstron: ${selectedOptions.pagesCount}`
          : ''
      }
      ${
        selectedFeatures
          ? `\nDodatkowe funkcjonalności: ${selectedFeatures}`
          : ''
      }
      
      Szacowany czas realizacji: ${
        selectedOptions.approach === 'template'
          ? '1-2 tygodnie'
          : selectedOptions.approach === 'custom_wp'
          ? '2-4 tygodnie'
          : '4-8 tygodni'
      }
      
      Ostateczna cena może się różnić w zależności od szczegółowych wymagań i stopnia skomplikowania projektu.
    `;
  };

  return (
    <div className='container border'>
      <div className='bg-gray-50  p-6 mb-8'>
        <h2 className='text-3xl  mb-4 text-center'>
          Konfigurator kosztów strony internetowej
        </h2>
        <nav>
          <ul className='flex justify-center gap-4 mt-10'>
            <li
              className='cursor-pointer hover:underline opacity-70 hover:opacity-100'
              onClick={() => setStep('step1')}
            >
              1. Wybierz rodzaj strony internetowej
            </li>
            <li
              className='cursor-pointer hover:underline opacity-70 ho'
              onClick={() => setStep('step2')}
            >
              2. Wybierz podejście do tworzenia strony
            </li>
            <li
              className='cursor-pointer hover:underline opacity-70 ho'
              onClick={() => setStep('step3')}
            >
              3. Wybierz liczbę podstron
            </li>
            <li
              className='cursor-pointer hover:underline opacity-70 ho'
              onClick={() => setStep('step4')}
            >
              4. Wybierz dodatkowe funkcjonalności
            </li>
            <li
              className='cursor-pointer hover:underline opacity-70 ho'
              onClick={() => setStep('step5')}
            >
              5. Podsumowanie
            </li>
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
          <div className='mb-6'>
            {/* <div>
              Zanim przejdziemy do szczegółów, wybierz preferowane podejście do
              tworzenia strony. Każda opcja ma swoje zalety i wady, a różnice w
              cenach wynikają z ilości pracy i zaangażowanych zasobów.
            </div> */}
          </div>

          <div className='grid grid-cols-1 gap-6'>
            {Object.entries(approaches).map(([key, approach]) => (
              <div
                key={key}
                className={`cursor-pointer transition-colors p-6
                ${
                  selectedOptions.approach === key
                    ? 'bg-lightGray'
                    : 'bg-lightGray'
                }`}
                onClick={() => {
                  setSelectedOptions((prev) => ({ ...prev, approach: key }));
                  setStep('details');
                }}
              >
                <div className='p-6'>
                  <h3 className='text-3xl  mb-2'>{approach.name}</h3>
                  <p className='text-gray-600 mb-4'>{approach.description}</p>
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
                      <h4 className='font-semibold text-red-600 mb-2'>Wady:</h4>
                      <ul className='list-disc pl-5'>
                        {approach.cons.map((con, index) => (
                          <li key={index} className='text-sm'>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Szczegóły projektu */}
      {step === 'details' && (
        <>
          <div className='flex items-center mb-6 text-sm'>
            <button
              onClick={() => setStep('approach')}
              className='text-blue-600 hover:text-blue-800'
            >
              ← Wróć do wyboru podejścia
            </button>
          </div>

          {/* Typ strony */}
          <div className='mb-6'>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>Typ strony</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {Object.entries(websiteTypes).map(([key, type]) => (
                  <div
                    key={key}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors
                      ${
                        selectedOptions.websiteType === key
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    onClick={() =>
                      setSelectedOptions((prev) => ({
                        ...prev,
                        websiteType: key,
                      }))
                    }
                  >
                    <h4 className='font-semibold mb-2'>{type.name}</h4>
                    <p className='text-sm text-gray-600'>{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Liczba podstron */}
          <div className='mb-6'>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>Liczba podstron</h3>
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

          {/* Podsumowanie */}
          {selectedOptions.websiteType && (
            <div className='mb-6 bg-blue-50'>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Szacunkowa wycena
                </h3>
                <div className='text-2xl font-bold mb-4'>
                  {totalEstimate.min.toLocaleString()} -{' '}
                  {totalEstimate.max.toLocaleString()} PLN
                </div>
                <div>
                  <div className='h-4 w-4' />
                  <div className='whitespace-pre-line'>{generateSummary()}</div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
