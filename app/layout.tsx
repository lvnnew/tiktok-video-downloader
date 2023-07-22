import './globals.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import React from 'react';
import { Footer } from '@/components/layout/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tiktok Downloader',
  description: 'Tiktok mp3 mp4 downloader',
};

const languages = ['en', 'ru', 'ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'ms', 'nl', 'pl', 'pt', 'th', 'tr', 'uk', 'vi'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: React.PropsWithChildren & { params: { lng: string } }) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main className='mt-14'>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
