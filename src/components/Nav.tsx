import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='fixed left-0 top-0 w-screen'>
      <ul className='flex container justify-end text-base gap-10 pt-10'>
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
