import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Sidebar from './components/sidebar';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Management System',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  flex  overflow-hidden`}
      >
        <Sidebar />
        <main className="relative  min-h-screen flex-1 overflow-auto p-9">
          {children}
        </main>
      </body>
    </html>
  );
}
