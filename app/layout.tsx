import type { Metadata } from 'next';
import './globals.css';
import {
  chakraPetch,
  inter,
  kodchasan,
  righteous,
  spaceGrotesk,
} from './ui/fonts';
import NavBar from './ui/component/nav-bar';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Annop T Udomsak',
  description: 'Personal website of Annop T Udomsak',
  keywords: [
    'Annop T Udomsak',
    'Annop',
    'Udomsak',
    'Personal website',
    'Portfolio',
    'Resume',
    'Blog',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kodchasan.variable} ${righteous.variable} ${chakraPetch.variable} ${spaceGrotesk.variable} font-space-grotesk`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar className="sticky top-[-1px] z-[1]" />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
