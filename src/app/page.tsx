import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav>
        <ul className='flex gap-3 pt-3 pb-3 border border-dashed border-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/o-mnie'>O mnie</Link>
          </li>
        </ul>
      </nav>
      <div>Home..</div>
    </>
  );
}
