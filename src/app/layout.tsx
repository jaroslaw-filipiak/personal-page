import type { Metadata } from 'next';
import Link from 'next/link';
import localFont from 'next/font/local';
import './globals.css';

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2', // Updated path
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Projektuje strony internetowe..',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={satoshi.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
