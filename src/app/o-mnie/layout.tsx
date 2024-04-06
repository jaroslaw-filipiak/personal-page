'use client';

import AboutNav from '@/components/AboutNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AboutNav />
      {children}
    </div>
  );
}
