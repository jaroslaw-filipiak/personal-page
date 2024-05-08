'use client';

import Link from 'next/link';
import { useState } from 'react';
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sendForm = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('_wpcf7_unit_tag', 'wpcf7-f183-p41-o1');
      formData.append('your-name', name);
      formData.append('your-email', email);
      formData.append('tel-548', phone);

      const response = await fetch(
        `${NEXT_PUBLIC_BASE_URL}/api/wp-json/contact-form-7/v1/contact-forms/183/feedback`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const res = await response.json();

      setLoading(false);
      setMessage(res?.message);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='text-2xl mb-14'>
        Porozmawiajmy o Twojej nowej stronie internetowej!
      </div>
      <div>
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='text'
          name='name'
          id='name'
          placeholder='Imię, nazwisko *'
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='email'
          name='email'
          id='email'
          placeholder='Email *'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='text'
          name='phone'
          id='phone'
          placeholder='Telefon'
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className='mt-12 flex flex-col items-start gap-6'>
        <input
          onClick={sendForm}
          className='bg-dark hover:opacity-80 transition-all text-white py-4 px-10 inline-block  cursor-pointer w-full'
          type='submit'
          value={loading ? 'Wysyłam...' : 'Wyślij'}
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
      <div className='mt-10 h-4'>{message}</div>
    </>
  );
}
