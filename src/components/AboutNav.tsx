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
    pathname.includes('o-mnie') ? window.scrollTo(0, 90) : null;
  }, [pathname]);

  return (
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
            href='#dlaczego-ja'
          >
            Dlaczego ja ?{' '}
          </Link>
        </li>
        <li>
          <Link
            className='bg-dark hover:opacity-80 transition-all text-white block py-3 px-10 items-center justify-center text-center'
            href='/kontakt'
            onClick={() => {
              window.dataLayer?.push({
                event: 'contact_click_about_page',
                event_category: 'Navigation',
                event_label: 'Navbar',
              });
            }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
