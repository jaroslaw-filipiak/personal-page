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
import SmoothScroll from '@/components/SmoothScroll';


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
        <SmoothScroll />
        <Hamburger />
        <SideMenu />
        <main className='z-10 relative mb-[100vh] bg-white'>{children}</main>
        
        {/* <Script id="google-consent" strategy="beforeInteractive">
          {`
            // Define dataLayer and the gtag function.
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Default consent settings to 'denied'.
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script> */}

       
        <GoogleTagManager gtmId='GTM-M7H5MHM' />

        <Script
          type='text/plain'
          data-category='analytics'
          src='/hotjar.js'
          strategy='afterInteractive'
        />
        <Script
          type='text/plain'
          data-category='marketing'
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
