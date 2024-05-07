'use client';

import Link from 'next/link';

export default function Form() {
  return (
    <div>
      <div>
        <label htmlFor='name' />
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='text'
          name='name'
          id='name'
          placeholder='Imię, nazwisko *'
        />
      </div>

      <div>
        <label htmlFor='email' />
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='email'
          name='email'
          id='email'
          placeholder='Email *'
        />
      </div>

      <div>
        <label htmlFor='phone' />
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='text'
          name='phone'
          id='phone'
          placeholder='Telefon'
        />
      </div>

      <div className='mt-20 flex items-center gap-6'>
        <input
          className='bg-dark hover:opacity-80 transition-all text-white py-4 px-10 inline-block  cursor-pointer'
          type='submit'
          value='Wyślij'
        />
        <div>
          <small>
            Wysyłając wiadomość wyrażasz zgodę na&nbsp;
            <Link
              href='polityka-prywatnosci'
              className='hover:underline underline-offset-[5px]'
            >
              przetwarzanie danych osobowych
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
