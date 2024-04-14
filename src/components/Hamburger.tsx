'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMainStore } from '@/store/main';

export default function Nav() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const pathname = usePathname();
  const isMenuOpen = useMainStore((state) => state.isMenuOpen);
  const toggleMenu = useMainStore((state) => state.toggleMenu);
  const closeMenu = useMainStore((state) => state.closeMenu);

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
    pathname.includes('/o-mnie') ? window.scrollTo(0, 90) : null;
  }, []);

  return (
    <nav
      className={`fixed w-screen lg:hidden left-0 transition-all z-30 bg-transparnt flex items-center pt-3 pb-3  ${
        isMenuOpen ? 'bg-transparent' : 'bg-white'
      } ${
        scrollDirection === 'up'
          ? 'nav--visible  top-0'
          : 'nav--hidden -top-[90px]'
      } `}
    >
      <ul className='w-full flex items-center justify-between pl-6 pr-6'>
        <li>
          <Link onClick={closeMenu} className='inline-flex' href='/'>
            <svg
              width='47'
              height='43'
              viewBox='0 0 47 43'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.82 0.200038L14.5 0.200038L14.5 4.40004H12.82C10.26 4.40004 8.20003 5.08004 6.64003 6.44004C5.12003 7.80004 4.36003 9.78004 4.36003 12.38C4.36003 15.1 5.14003 17.1 6.70003 18.38C8.26003 19.7 10.32 20.36 12.88 20.36L43.96 20.36V24.68L12.76 24.68C10.2 24.68 7.98003 24.16 6.10003 23.12C4.22003 22.08 2.78003 20.62 1.78003 18.74C0.780029 16.9 0.280029 14.78 0.280029 12.38C0.280029 9.82004 0.800027 7.62004 1.84003 5.78004C2.88003 3.94004 4.34003 2.54004 6.22003 1.58004C8.14003 0.660037 10.34 0.200037 12.82 0.200038Z'
                className={`${isMenuOpen ? 'fill-dark' : 'fill-dark'}`}
              />
              <path
                d='M25.54 0.0400391V43H21.22V0.0400391H25.54ZM46.54 4.00004H21.4V0.0400391H46.54V4.00004ZM43.12 24.1H21.4V20.2H43.12V24.1Z'
                className={`${isMenuOpen ? 'fill-dark' : 'fill-dark'}`}
              />
            </svg>
          </Link>
        </li>
        <li>
          <button
            onClick={toggleMenu}
            className={`hamburger hamburger--vortex ${
              isMenuOpen ? 'is-active' : ''
            }`}
            type='button'
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
