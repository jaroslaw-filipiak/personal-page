'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ValidationMessage from '@/components/forms/ValidationMessage';


const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type formProps = { 
  title: string;
}

export default function Form(props: formProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null);
  const [validationErr, setValidationErr] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const sendForm = async () => {
    setValidationErr([]);
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
      setValidationErr(res['invalid_fields']);
      setStatus(res.status);
      setLoading(false);
      setMessage(res?.message);
      setIsVisible(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      <Image
        className='absolute hidden xl:flex xl:-left-[239px] xl:-top-[40px]'
        loading='lazy'
        width={201}
        height={629}
        role='presentation'
        alt='shadow png'
        src='img/form-shadow222.png'
      ></Image>
      <div className='text-2xl mb-14'>
       {props.title}
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
        {status === 'validation_failed' && (
          <ValidationMessage errors={validationErr} field_key='your-name' />
        )}
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
        {status === 'validation_failed' && (
          <ValidationMessage errors={validationErr} field_key='your-email' />
        )}
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
        {status === 'validation_failed' && (
          <ValidationMessage errors={validationErr} field_key='tel-548' />
        )}
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
      {message && <div className='h-4 mt-4 pb-10 pt-3'>{message}</div>}
    </div>
  );
}
