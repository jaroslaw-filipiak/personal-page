'use client';

import Link from 'next/link';
import { useMainStore } from '@/store/main';
import { useState } from 'react';

export default function SideMenu() {
  const isMenuOpen = useMainStore((state) => state.isMenuOpen);
  const toggleMenu = useMainStore((state) => state.toggleMenu);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={`bg-accent text-dark lg:hidden h-screen w-screen flex-col items-center justify-center left-0 bottom-0 z-20 fixed transition-all   ${
        isMenuOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className='w-full h-full  flex items-center justify-center'>
        <ul className='text-5xl text-center flex flex-col gap-5'>
          <li onClick={toggleMenu}>
            <Link href='/#case-studies'>Case studies </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href='/o-mnie'>O mnie </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href='/blog'>Blog</Link>
          </li>

          <li>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className='selection:bg-transparent cursor-pointer'
            >
              Oferta
            </div>
            {showDropdown && (
              <div className='selection:bg-transparent mt-6'>
                <ul className='flex flex-col items-center gap-3 w-full text-lg'>
                  <li className='pt-1 pb-1 pl-2 pr-2 bg-black text-accent'>
                    <Link
                      onClick={toggleMenu}
                      className='transition-all hover:no-underline '
                      href='/oferta/budzetowe-strony-www'
                    >
                      Budżetowe strony www oparte o system WordPress
                    </Link>
                  </li>
                  <li className='pt-1 pb-1 pl-2 pr-2 bg-black text-accent'>
                    <Link
                      onClick={toggleMenu}
                      className='transition-all hover:no-underline '
                      href='/oferta/administracja-stronami-internetowymi/'
                    >
                      Administracja stronami internetowymi WordPress
                    </Link>
                  </li>
                  <li className='pt-1 pb-1 pl-2 pr-2 bg-black text-accent'>
                    <Link
                      onClick={toggleMenu}
                      className='transition-all hover:no-underline '
                      href='/oferta/usuwanie-wirusow-wordpress'
                    >
                      Usuwanie wirusów WordPress
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li onClick={toggleMenu}>
            <Link href='/cennik'>Cennik</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href='/kontakt'>Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className='w-full pb-10'>
        <ul className='flex flex-col lg:flex-row item-center justify-center gap-4 text-center lg:gap-10 text-dark text-md'>
          <li className='transition-all hover:underline underline-offset-[5px]'>
            <Link href='https://www.facebook.com/jfilipiakpl'>Facebook</Link>
          </li>
          <li className='transition-all hover:underline underline-offset-[5px]'>
            <Link href='mailto:info@j-filipiak.pl'>info@j-filipiak.pl</Link>
          </li>
          <li className='transition-all hover:underline underline-offset-[5px]'>
            <Link href='tel:663568828'>(+48) 663 568 828</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
