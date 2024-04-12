import type { Metadata } from 'next';
import Link from 'next/link';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';
import Hamburger from '@/components/Hamburger';
import SideMenu from '@/components/SideMenu';

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2', // Updated path
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
  description: 'jfilipiak.pl',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`relative  ${satoshi.className}`}>
        <Hamburger />
        <SideMenu />
        <main className='z-10 relative mb-[100vh] bg-white'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
