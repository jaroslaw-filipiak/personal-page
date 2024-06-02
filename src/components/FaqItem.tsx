'use client';

import { useState } from 'react';

type FaqItemProps = {
  title: string;
  content: string;
  id: number;
  active: boolean;
};

export default function FaqItem(props: FaqItemProps) {
  const [active, setActive] = useState(props.active);
  const [allFaqItemsActive, setAllFaqItemsActive] = useState([]);

  const toggleActive = () => {
    setActive(!active);
    if (active) {
      setAllFaqItemsActive((prev) => prev.filter((item) => item !== active));
    }
  };

  return (
    <div
      className={`faq-item group border-b border-black border-opacity-50 pb-6 ${
        active ? 'is-open' : ''
      }`}
    >
      <div>
        <div className='faq-item__title'>
          <h6
            onClick={toggleActive}
            className='text-xl selection:bg-transparent'
          >
            {props.title}
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
          className={`faq-item__content selection:bg-transparent transition-all ${
            !active ? 'max-h-0' : 'max-h-[333px]'
          }`}
        >
          <div className='w-10/12'>
            <p className='text-base pt-6'>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
