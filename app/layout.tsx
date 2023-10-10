import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Image } from '@mantine/core';
import { theme } from '../theme';
import { FooterCentered } from '@/components/Footer/Footer';
import StickyNavbar from '@/components/StickyNavbar/StickyNavbar';
import Script from 'next/script';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

export const metadata = {
  title: 'Diet',
  description: 'Dietetyka',
};
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications position="top-right" zIndex={1000} />
          <StickyNavbar />
          <div style={{ minHeight: '80vh' }}>{children}</div>
          <FooterCentered />
        </MantineProvider>
      </body>
    </html>
  );
}
