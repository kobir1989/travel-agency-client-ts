import '@/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ReduxProvider from '@/redux/store/provider';

const opensans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Horizon Explorers',
  description: 'Horizon Explorers Travel agency',
  icons: {
    icon: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-icon-57x57.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
