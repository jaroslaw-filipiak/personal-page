'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { ClaudeResponse, ClaudeMessage } from './ClaudeResponse';

import { approaches, websiteTypes, additionalFeatures } from '@/app/data';

interface SelectedOptions {
  approach: keyof typeof approaches;
  websiteType: keyof typeof websiteTypes;
  pagesCount: number;
  viewsCount: number;
  techStack: string[];
  additionalFeatures: string[];
}

// Define a type for the keys of additionalFeatures
type AdditionalFeatureKey = keyof typeof additionalFeatures;

//slider
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

//checkmark
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

// StepItem component
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
      clickable ? 'cursor-pointer' : 'pointer-events-none blur-[2px] opacity-15'
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
  const [currentStep, setCurrentStep] = useState<'step1' | 'step2' | 'step3'>(
    'step1'
  );
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

  // Generate messages for Claude based on current step
  const generateMessages = useCallback((): ClaudeMessage[] => {
    switch (step) {
      case 'step2':
        return [
          {
            role: 'user' as const,
            content: `Kontekst: Konfigurator strony. Użytkownik wybrał typ strony: ${
              websiteTypes[selectedOptions.websiteType].name
            }. Wygeneruj krótką (2 zdania) wskazówkę biznesową dotyczącą wyboru podejścia.`,
          },
        ];
      case 'step3':
        return [
          {
            role: 'user' as const,
            content: `Kontekst: Konfigurator strony. Użytkownik wybrał typ: ${
              websiteTypes[selectedOptions.websiteType].name
            } i podejście: ${
              approaches[selectedOptions.approach].name
            }. Wygeneruj 3-zdaniową poradę biznesową.`,
          },
        ];
      default:
        return [];
    }
  }, [step, selectedOptions.websiteType, selectedOptions.approach]);

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
              isActiveStep={websiteTypeKey !== ''}
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

      {/* step1 */}
      {step === 'step1' && (
        <div>
          <div className='mb-6 container   text-center'>
            <div className='inline-flex items-start gap-4 border border-opacity-20 border-black p-6 '>
              <div>
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
              </div>
              <div>
                <p>
                  {' '}
                  Zanim przejdziemy do szczegółów, wybierz{' '}
                  <strong>typ strony internetowej</strong>, którą chcesz
                  stworzyć.
                </p>

                <p>
                  {' '}
                  Wyróżniamy kilka typów stron internetowych. Każdy ma swój
                  własny cel oraz przeznaczenie.
                </p>
              </div>
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
                  className={`relative overflow-visible transition-colors py-12 px-6 cursor-pointer hover:bg-slate-100  z-20
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
                  <div className='p-6 overflow-visible'>
                    <div
                      className={`${
                        selectedOptions.websiteType === key
                          ? 'block absolute right-5 top-5'
                          : 'hidden'
                      }`}
                    >
                      <ActiveApproachCheckmark />
                    </div>
                    <h3 className='text-2xl mb-2'>{type.name}</h3>
                    <p className='text-gray-600 mb-4'>{type.description}</p>
                    <div className='line w-full h-[1px] bg-black bg-opacity-20 my-6'></div>

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

      {/* step2 */}
      {step === 'step2' && (
        <div>
          <div className='mb-6 container max-w-4xl flex items-start justify-center  border border-opacity-20 border-black p-6 gap-12'>
            <div>
              <p>
                Wybrałeś:{' '}
                <strong>
                  {websiteTypes[selectedOptions.websiteType].name}.
                </strong>
                Taką stronę można stworzyć na wiele różnych sposobów a każdy z
                nich, jak w poprzednim kroku różni sie zarówno czasem realizacji
                jak i kosztami. Wybierz podejście, które najlepiej pasuje do
                Twoich wymagań. W każdym elemencie wyszczególniłem listę zalet
                oraz wad takiego podejścia.
              </p>
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
                    className={`relative transition-colors py-12 px-6 cursor-pointer hover:bg-slate-100 
                  ${activeApproach === key ? 'bg-slate-100 ' : 'bg-lightGray'}
                  ${
                    activeApproach === key
                      ? 'bg-slate-100 relative border'
                      : 'border border-transparent'
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
                    <div
                      className={`${
                        activeApproach === key
                          ? 'block absolute right-5 top-5'
                          : 'hidden'
                      }`}
                    >
                      <ActiveApproachCheckmark />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-3xl  mb-2'>{approach.name}</h3>
                      <p className='text-gray-600 mb-4'>
                        {approach.description}
                      </p>
                      <div className='line w-full h-[1px] bg-black bg-opacity-20 my-6'></div>

                      <div className='flex flex-col gap-6'>
                        {/* zalety */}
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
                        {/* wady */}
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

      {/* step3 */}
      {step === 'step3' && (
        <div className='container'>
          <div className='mb-6 container flex items-start justify-center  border border-opacity-20 border-black p-6 gap-12'>
            <div className=' w-8/12'>
              Wybrałeś:
              <span className='font-semibold pl-1'>
                {websiteTypes[selectedOptions.websiteType].name}
              </span>{' '}
              a podejście z którego zdecydowałeś się skorzystać to:{' '}
              <span className='font-semibold pl-1 pr-1'>
                {approaches[selectedOptions.approach].name}.{' '}
              </span>
              <p>
                Szacunkowy budżet jaki należy zabezpieczyć:{' '}
                <strong>
                  {' '}
                  {totalEstimate.min.toLocaleString()} PLN -{' '}
                  {totalEstimate.max.toLocaleString()} PLN
                </strong>
              </p>
            </div>
            <ClaudeResponse
              messages={generateMessages()}
              className='mt-4 bg-gray-50 rounded p-4'
            />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2'>
            {/* Liczba podstron */}
            <div>
              <div className='p-6 flex items-center gap-3'>
                <div className='flex flex-col'>
                  <h3 className='text-lg font-semibold'>
                    Przybliżona liczba podstron
                  </h3>
                  <div className='max-w-lg text-sm'>
                    <p className='p-0 m-0'>
                      {' '}
                      Maksymalna liczba podstron została ustawiona na 30
                    </p>

                    <p className='p-0 m-0'>
                      W przypadku większej ilości zalecana jest indywidualna
                      wycena.
                    </p>
                  </div>
                </div>
                <input
                  type='number'
                  min='1'
                  max='30'
                  value={selectedOptions.pagesCount}
                  onChange={(e) =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      pagesCount:
                        parseInt(e.target.value) > 30
                          ? 30
                          : parseInt(e.target.value) || 1,
                    }))
                  }
                  className='w-20 p-2 border rounded'
                />
                {selectedOptions.pagesCount > 30 && (
                  <div>
                    Maksymalna liczba podstron została ustawiona na 30. W
                    przypadku większej ilości zalecana jest indywidualna wycena
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dodatkowe funkcjonalności */}
          <div className='mb-6'>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-6'>
                Dodatkowe funkcjonalności
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {Object.entries(additionalFeatures).map(([key, feature]) => (
                  <div
                    key={key}
                    className={`relative py-12 px-6  cursor-pointer transition-colors
                      ${
                        selectedOptions.additionalFeatures.includes(key)
                          ? 'bg-slate-100 border'
                          : 'bg-lightGray border border-transparent'
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
                    <div
                      className={`${
                        selectedOptions.additionalFeatures.includes(key)
                          ? 'block absolute right-5 top-5'
                          : 'hidden'
                      }`}
                    >
                      <ActiveApproachCheckmark />
                    </div>
                    <h4 className='font-semibold mb-2 selection:bg-transparent'>
                      {feature.name}
                    </h4>
                    <p className='text-sm text-gray-600 selection:bg-transparent'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* step4 */}
      {step === 'step4' && (
        <>
          {/* Podsumowanie */}

          <div className='mb-6 bg-slate-100 container'>
            <div className='px-6 py-12'>
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
