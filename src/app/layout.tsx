import '@/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ReduxProvider from '@/redux/store/provider';
import ThemeRegistry from '@/theme';
import Navigation from '@/components/Organisms/Navigation/Navigation';
import Footer from '@/components/Organisms/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Analytics } from '@vercel/analytics/react';

const opensans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Horizon Explorers',
  description: 'Horizon Explorers Travel agency',
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={opensans.className}
        style={{ background: '#ebf0f4', overflowX: 'hidden' }}
      >
        <ReduxProvider>
          <ThemeRegistry>
            <Navigation />
            <main
              style={{
                minHeight: '60vh',
              }}
            >
              {children}
              <div id="portal" />
            </main>
            <Footer />
          </ThemeRegistry>
        </ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}
