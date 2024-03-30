import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'O mnie layout..',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <ul className='flex gap-3 pt-3 pb-3 border border-dashed border-white fixed top-0 left-0 w-screen'>
          <li>
            <Link href='/o-mnie#dlaczego-ja'>Dlaczego ja ?</Link>
          </li>
          <li>
            <Link href='/o-mnie#co-robie'>Co robie </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
