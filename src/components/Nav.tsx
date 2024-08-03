'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    pathname.includes('case-studies') ? window.scrollTo(0, 90) : null;
    pathname.includes('o-mnie') ? window.scrollTo(0, 90) : null;
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed hidden lg:flex left-0  w-screen transition-all z-10 ${
          scrollDirection === 'up'
            ? 'nav--visible bg-white top-0'
            : 'nav--hidden -top-[90px]'
        }`}
      >
        <ul className='flex container justify-end items-center text-base gap-10 h-[90px]'>
          <li className='flex-grow hover:opacity-70 transition-all'>
            <Link className='inline-flex' href='/'>
              <Image
                width={47}
                height={43}
                alt='jaroslaw-filipiak logotyp'
                src='/img/logo.svg'
              />
            </Link>
          </li>

          <li>
            <Link
              className='hover:underline underline-offset-[6px] transition-all'
              href='/#case-studies'
            >
              Case studies
            </Link>
          </li>
          <li>
            <Link
              className='hover:underline underline-offset-[6px] transition-all'
              href='/o-mnie'
            >
              O mnie
            </Link>
          </li>
          <li className='relative'>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className='hover:underline underline-offset-[6px] transition-all cursor-pointer selection:bg-transparent'
            >
              Oferta
            </div>
            {showDropdown && (
              <div className='absolute top-14 left-[50%] lg:w-[500px] bg-white shadow-xl translate-x-[-50%]  px-10 py-6 selection:bg-transparent'>
                <ul className='relative flex flex-col items-start gap-1 text-sm'>
                  <li>
                    <Link
                      className='hover:underline underline-offset-[6px] transition-all'
                      href='/oferta/budzetowe-strony-www'
                    >
                      Budżetowe strony www oparte o system WordPress
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:underline underline-offset-[6px] transition-all'
                      href='/oferta/administracja-stronami-internetowymi'
                    >
                   Administracja stronami internetowymi WordPress
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              className='hover:underline underline-offset-[6px] transition-all'
              href='/blog'
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              className='hover:underline underline-offset-[6px] transition-all'
              href='/cennik'
            >
              Cennik
            </Link>
          </li>
          <li>
            <Link
              className='hover:underline underline-offset-[6px] transition-all'
              href='/kontakt'
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
