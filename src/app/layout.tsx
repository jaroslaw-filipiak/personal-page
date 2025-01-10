import localFont from 'next/font/local';
import './globals.css';
import '@/scss/main.scss';
import Footer from '@/components/Footer';
import Hamburger from '@/components/Hamburger';
import SideMenu from '@/components/SideMenu';

import { GoogleTagManager } from '@next/third-parties/google';

import type { Metadata } from 'next';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
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
        <GoogleTagManager gtmId='GTM-M7H5MHM' />
        <Script
          type='text/plain'
          data-category='analytics'
          src='/hotjar.js'
          strategy='afterInteractive'
        />
        <Script
          type='text/plain'
          data-category='analytics'
          src='/meta-pixel.js'
          strategy='afterInteractive'
        />
        <Script
          type='text/plain'
          data-category='analytics'
          src='/piwik.js'
          strategy='afterInteractive'
        />
        <Script
          type='text/plain'
          data-category='analytics'
          src='/js/ms_clarity.js'
        />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
