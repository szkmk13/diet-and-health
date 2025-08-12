'use client'
import React from 'react';
import { FooterCentered } from '@/components/Footer';
import StickyNavbar from '@/components/StickyNavbar';
import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import "./globals.css"
import { QueryClient, QueryClientProvider } from 'react-query';

dayjs.locale('pl');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <SessionProvider>
            <Analytics />
            {/* <Notifications position="top-right" zIndex={100} /> */}
            <StickyNavbar />
            
                 <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            <FooterCentered />
        </SessionProvider>
      </body>
    </html>
  );
}
