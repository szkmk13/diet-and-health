import { FooterCentered } from '@/components/Footer';
import StickyNavbar from '@/components/StickyNavbar';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';
import Providers from './providers';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Analytics />
          <StickyNavbar />
          <Toaster />
          <main className="flex-1">{children}</main>
          <FooterCentered />
        </Providers>
      </body>
    </html>
  );
}
