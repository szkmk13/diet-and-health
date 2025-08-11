'use client'
import React from 'react';
import { FooterCentered } from '@/components/Footer';
import StickyNavbar from '@/components/StickyNavbar';
import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import "./globals.css"
import { QueryProvider } from "@/components/query-provider";

dayjs.locale('pl');

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
            
                 <QueryProvider>{children}</QueryProvider>
            <FooterCentered />
        </SessionProvider>
      </body>
    </html>
  );
}
