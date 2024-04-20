import localFont from 'next/font/local';
import './globals.css';
import '@/scss/main.scss';
import Footer from '@/components/Footer';
import Hamburger from '@/components/Hamburger';
import SideMenu from '@/components/SideMenu';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2', // Updated path
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://j-filipiak.pl/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={`relative  ${satoshi.className}`}>
        <Hamburger />
        <SideMenu />
        <main className='z-10 relative mb-[100vh] bg-white'>{children}</main>
        <GoogleAnalytics gaId='G-X4MDTE1EBE' />
        <Script src='/hotjar.js' strategy='afterInteractive' />
        <Script src='/meta-pixel.js' strategy='afterInteractive' />
        <Script src='/piwik.js' strategy='afterInteractive' />
        <Script src='/js/ms_clarity.js' />
        <Footer />
      </body>
    </html>
  );
}
