'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ValidationMessage from '@/components/forms/ValidationMessage';
import ConfettiEffect from '@/components/extra/ConfettiEffect';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FormProps {
  title: string;
  formId: number;
  configuratorData?: {
    websiteType: string;
    approach: string;
    pagesCount: number;
    additionalFeatures: string;
    timeComplete: string;
    estimatedBudget: {
      min: number;
      max: number;
    };
  };
}

export default function Form(props: FormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<
    | 'default'
    | 'sending'
    | 'success'
    | 'validation_failed'
    | 'mail_sent'
    | 'loading'
  >('default');
  const [validationErr, setValidationErr] = useState<
    Array<{ field: string; message: string }>
  >([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Function to remove confetti canvas from DOM
  const removeConfettiCanvas = () => {
    // Find and remove all canvas elements that might have been created
    const confettiCanvases = document.querySelectorAll('canvas');
    confettiCanvases.forEach((canvas) => {
      if (
        canvas.style.position === 'fixed' &&
        canvas.style.zIndex === '9999999'
      ) {
        document.body.removeChild(canvas);
      }
    });
  };

  // Debug function to manually trigger confetti
  const triggerConfetti = () => {
    // Remove any existing canvases first
    removeConfettiCanvas();

    setShowConfetti(true);
    // Reset after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const formComputedValue = {
    default: 'Wyślij wiadomość',
    sending: 'Wysyłanie...',
    success: 'Wiadomość została wysłana!',
    mail_sent: 'Wiadomość została wysłana :)',
    validation_failed: 'Upss.. nie udało się wysłać wiadomości',
    loading: 'Wysyłanie...',
  };

  const submitButtonClasses = {
    default: 'bg-dark text-white cursor-pointer w-full',
    sending: 'bg-dark text-white  w-full pointer-none',
    success:
      'bg-accent text-dark border border-dashed border-dark cursor-pointer w-full',
    mail_sent:
      'bg-accent text-dark border border-dashed border-dark cursor-pointer w-full cursor-not-allowed',
    validation_failed:
      'bg-red-500 text-white w-full pointer-none cursor-not-allowed',
    loading: 'bg-dark text-white w-full pointer-none cursor-not-allowed',
  };

  const clearValidationErr = (inputName: string) => {
    setValidationErr((prevErrors) => {
      return prevErrors.filter((err) => err.field !== inputName);
    });
  };

  useEffect(() => {
    if (status === 'success' || status === 'mail_sent') {
      setShowConfetti(true);

      // Hide confetti after 5 seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendForm = async () => {
    setValidationErr([]);
    setLoading(true);
    setStatus('sending');
    try {
      const formData = new FormData();
      formData.append('_wpcf7_unit_tag', 'wpcf7-f183-p41-o1');
      formData.append('your-name', name);
      formData.append('your-email', email);
      formData.append('tel-548', phone);
      if (props.formId === 585 && props.configuratorData) {
        formData.append(
          'configurator-data',
          JSON.stringify(props.configuratorData)
        );
      }

      const response = await fetch(
        `https://j-filipiak.pl/api/wp-json/contact-form-7/v1/contact-forms/${props.formId}/feedback`,
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
      {showConfetti && <ConfettiEffect />}
      <Image
        className='absolute hidden xl:flex xl:-left-[239px] xl:-top-[40px]'
        loading='lazy'
        width={201}
        height={629}
        role='presentation'
        alt='shadow png'
        src='/img/form-shadow222.png'
      ></Image>
      <div className='text-2xl mb-14'>{props.title}</div>
      <div>
        <input
          className='w-full p-4 border-b-[1px] appearance-none outline:none focus:outline-none focus:border-b-[2px] transition-border'
          type='text'
          name='name'
          id='name'
          placeholder='Imię, nazwisko *'
          onChange={(e) => {
            setName(e.target.value);
            clearValidationErr('your-name');
            setStatus('default');
            setMessage(null);
          }}
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
          onChange={(e) => {
            setEmail(e.target.value);
            clearValidationErr('your-email');
            setStatus('default');
            setMessage(null);
          }}
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
          onChange={(e) => {
            setPhone(e.target.value);
            clearValidationErr('tel-548');
            setStatus('default');
            setMessage(null);
          }}
        />
        {status === 'validation_failed' && (
          <ValidationMessage errors={validationErr} field_key='tel-548' />
        )}
      </div>
      <div className='mt-12 flex flex-col items-start gap-6'>
        <input
          disabled={
            status === 'sending' ||
            status === 'validation_failed' ||
            status === 'loading' ||
            status === 'mail_sent'
          }
          onClick={sendForm}
          className={`hover:opacity-80 transition-all py-4 px-10 inline-block ${submitButtonClasses[status]}`}
          type='submit'
          value={formComputedValue[status]}
        />

        <div className='flex flex-col gap-2'>
          <small>
            Wysyłając wiadomość wyrażasz zgodę na&nbsp;
            <Link
              href='/polityka-prywatnosci'
              className='hover:underline underline-offset-[5px]'
            >
              przetwarzanie danych osobowych
            </Link>
          </small>
          <small>* pola wymagane</small>
        </div>
      </div>
      {/* {message && <div className='h-4 mt-4 pb-10 pt-3'>{message}</div>} */}
    </div>
  );
}
