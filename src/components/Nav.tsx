import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 w-screen transition-all z-10 ${
        scrollDirection === 'up'
          ? 'nav--visible bg-white'
          : 'nav--hidden -top-[90px]'
      }`}
    >
      <ul className='flex container justify-end items-center text-base gap-10 h-[90px]'>
        <li className='flex-grow'>
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
          <Link href='/#uslugi'>Usługi</Link>
        </li>
        <li>
          <Link href='/'>Case studies</Link>
        </li>
        <li>
          <Link href='/o-mnie'>O mnie</Link>
        </li>
        <li>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
