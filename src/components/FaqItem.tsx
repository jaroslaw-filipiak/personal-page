'use client';

import { useState } from 'react';

type FaqItemProps = {
  active: boolean;
};

export default function FaqItem(props: FaqItemProps) {
  const [active, setActive] = useState(props.active);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className='faq-item group border-b border-black border-opacity-50 pb-6'>
      <div
        onClick={toggleActive}
        className='faq-item__title flex items-start justify-between cursor-pointer'
      >
        <h6 className='text-xl selection:bg-transparent'>
          Ile kosztuje strona internetowa?
        </h6>
        <svg
          className={`w-10 transition-all  ${
            active ? 'rotate-0' : '-rotate-45'
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
        >
          <path
            d='M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z'
            data-name='8-Arrow Down'
          />
        </svg>
      </div>

      <div
        className={`faq-item__content overflow-hidden selection:bg-transparent transition-all ${
          active ? 'max-h-auto' : 'h-0'
        }`}
      >
        <div className='w-10/12'>
          <p className='text-base pt-6'>
            Stack technologiczny dobieramy w zależności od projektu. Głównie po
            stronie frontendu korzystamy z Vue, Nuxt, Gsap, ScrollMagic. Na
            backendzie dobieramy system CMS do wysokości budżetu. Z płatnych
            rozwiązań – datoCMS, strapi. Bezpłatne – WordPress.
          </p>
        </div>
      </div>
    </div>
  );
}
