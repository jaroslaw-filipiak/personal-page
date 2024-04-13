'use client';

import Link from 'next/link';
import { useMainStore } from '@/store/main';

export default function SideMenu() {
  const isMenuOpen = useMainStore((state) => state.isMenuOpen);
  const toggleMenu = useMainStore((state) => state.toggleMenu);

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
            <Link href='/kontakt'>Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className='w-full pb-10'>
        <ul className='flex flex-col lg:flex-row item-center justify-center gap-4 text-center lg:gap-10 text-dark text-md'>
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
