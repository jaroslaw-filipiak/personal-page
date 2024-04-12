'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrollDirection, setScrollDirection] = useState('up');
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
  }, []);

  return (
    <nav
      className={`fixed w-screen md:hidden left-0 transition-all z-30 bg-transparnt flex items-center pt-3 pb-3`}
    >
      <ul className='w-full flex items-center justify-between pl-6 pr-6'>
        <li>
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
          <button className='hamburger group hover:opacity-80 flex flex-col gap-2 transition-all'>
            <div className='w-10 h-[1px] bg-black transition-all'></div>
            <div className='w-10 h-[1px] bg-black transition-all'></div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
