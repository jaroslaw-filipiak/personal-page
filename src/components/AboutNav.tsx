import Link from 'next/link';
import Image from 'next/image';

export default function AboutNav() {
  return (
    <nav className='fixed left-0 top-0 w-screen'>
      <ul className='flex container justify-end text-base gap-10 pt-10'>
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
          <Link href='/#uslugi'>Home</Link>
        </li>
        <li>
          <Link href='/'>Dlaczego ja ?</Link>
        </li>
        <li>
          <Link href='/o-mnie'>Co robie ?</Link>
        </li>
        <li>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
