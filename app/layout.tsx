import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Milan Ghimire - Software Developer, ML/AI Enthusiast, and Tech Visionary',
  description:
    'Milan Ghimire is a computer engineer, full-stack web developer, and ML/AI enthusiast, specializing in MERN technologies and building innovative solutions for the future of technology.',
  openGraph: {
    title: 'Milan Ghimire - Software Developer, ML/AI Enthusiast, and Tech Visionary',
    description:
      "Discover Milan Ghimire's expertise as a full-stack web developer and ML/AI enthusiast.",
    url: 'https://milanghimire.info.np',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* General Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google AdSense Script */}
        
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}