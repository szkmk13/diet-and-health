import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, } from '@mantine/core';
import { theme } from '../theme';
import { FooterCentered } from '@/components/Footer/Footer';
import StickyNavbar from '@/components/StickyNavbar/StickyNavbar';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import 'dayjs/locale/pl'; // Import the Polish locale
import dayjs from 'dayjs';
import { Analytics } from '@vercel/analytics/react';

dayjs.locale('pl'); // Set the locale to Polish
export const metadata = {
  title: 'Diet and health',
  description: 'Dietetyka',
};

export default function RootLayout({ children }: { children: any }) {
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
        <MantineProvider theme={theme}>
          <Analytics />
          <Notifications position="top-right" zIndex={100} />
          <StickyNavbar />
          <div style={{ paddingTop: '10vh',minHeight: '90vh'}}>{children}</div>
          <FooterCentered />
        </MantineProvider>
      </body>
    </html>
  );
}
