'use client'; // ✅ Add this at the top
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { FooterCentered } from '@/components/Footer/Footer';
import StickyNavbar from '@/components/StickyNavbar/StickyNavbar';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

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
          <MantineProvider>
            <Analytics />
            <Notifications position="top-right" zIndex={100} />
            <StickyNavbar />
            <div style={{ paddingTop: '10vh', minHeight: '90vh' }}>{children}</div>
            <FooterCentered />
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
