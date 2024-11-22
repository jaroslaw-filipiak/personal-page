'use client';

import Link from 'next/link';
import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    console.log(CookieConsent);
  }, []);
  return (
    <>
      <footer className='bg-dark text-white h-screen w-screen flex flex-col items-center justify-center fixed left-0 bottom-0'>
        <div className='w-full h-full flex items-center justify-center '>
          <ul className='text-5xl text-center flex flex-col gap-5'>
            <li>
              <Link
                className='hover:opacity-75 transition-all opacity-100'
                href='/#case-studies'
              >
                Case studies
              </Link>
            </li>
            <li>
              <Link
                className='hover:opacity-75 transition-all opacity-100'
                href='/o-mnie'
              >
                O mnie
              </Link>
            </li>

            <li>
              <Link
                className='hover:opacity-75 transition-all opacity-100'
                href='/kontakt'
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-full pb-5'>
          <ul className='flex flex-col lg:flex-row item-center justify-center gap-3 text-center lg:gap-10 text-gray text-xs'>
            <li>
              <Link
                className='transition-all hover:underline underline-offset-[5px]'
                href='mailto:info@j-filipiak.pl'
              >
                info@j-filipiak.pl
              </Link>
            </li>
            <li>
              <Link
                className='transition-all hover:underline underline-offset-[5px]'
                href='tel:663568828'
              >
                (+48) 663 568 828
              </Link>
            </li>
            <li>
              <Link
                className='transition-all hover:underline underline-offset-[5px]'
                href='https://www.facebook.com/jfilipiakpl'
                target='_blank'
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                className='transition-all hover:underline underline-offset-[5px]'
                href='https://www.behance.net/jarekfilipiak'
                target='_blank'
              >
                Behance
              </Link>
            </li>
            <li>
              <Link
                className='transition-all hover:underline underline-offset-[5px]'
                href='/polityka-prywatnosci'
              >
                Polityka prywatności
              </Link>
            </li>
            <li
              className='transition-all hover:underline underline-offset-[5px] cursor-pointer'
              onClick={CookieConsent.showPreferences}
            >
              Preferencje cookies
            </li>
          </ul>
        </div>
        <div className='w-full pb-5 opacity-60'>
          <div className='container flex flex-col lg:flex-row justify-center text-gray text-xs pl-10 pr-10'>
            <p className='text-center'>Copyright 2014 - 2024</p>
            <p className='text-center lg:pl-4'>INCREMENT POLAND</p>
            <p className='text-center lg:pl-4'>
              Jarosław Filipiak | NIP: 7881922096
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
