'use client';

import Form from '@/components/forms/Form';

type heroProps = {
  title: string;
  subtitle: string;
  features: string[];
  formTitle: string;
  hasForm: boolean;
  formId: number;
};

export default function Hero(props: heroProps) {
  return (
    <section className='pt-32 lg:pt-40 2xl:pt-42 pb-40 lg:pb-40 2xl:pb-42'>
      <div className='flex items-center justify-center'>
        <div className='container flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16'>
          <div
            className={`${
              props.hasForm ? 'lg:w-6/12 xl:w-8/12' : 'lg:w-10/12 xl:w-10/12'
            }`}
          >
            <h1 className='text-5xl text-balance pb-10'>{props.title}</h1>
            <h2 className='text-lg'>{props.subtitle}</h2>
            <ul className='mt-10 gap-1 flex flex-col'>
              {props.features.map((feature, index) => (
                <li key={index}>
                  <h3 className='flex items-center gap-2'>
                    <svg
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
                    {feature}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
          {props.hasForm && (
            <div className='border border-[#d7d7d7] shadow-md lg:w-6/12 xl:w-4/12 p-10 pb-10'>
              <Form title={props.formTitle} formId={props.formId}></Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
