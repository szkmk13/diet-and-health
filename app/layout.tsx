'use client';
import React from 'react';
import { FooterCentered } from '@/components/Footer';
import StickyNavbar from '@/components/StickyNavbar';
import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '@/components/ui/sonner';

dayjs.locale('pl');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"></link>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
<body className="min-h-screen flex flex-col">
        <SessionProvider>
          <Analytics />
          {/* <Notifications position="top-right" zIndex={100} /> */}
          <StickyNavbar />
          <Toaster />
    {/* Content grows to fill remaining space */}
    <main className="flex-1">
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </main>
          <FooterCentered />
        </SessionProvider>
      </body>
    </html>
  );
}
