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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Safely extract values from metadata with type casting
  const title = (metadata.title || '') as string;
  const description = (metadata.description || '') as string;
  const ogTitle = (metadata.openGraph?.title || title) as string;
  const ogDescription = (metadata.openGraph?.description || description) as string;
  const ogUrl = (metadata.openGraph?.url || 'https://milanghimire.info.np') as string;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* General Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph and Twitter Fallbacks */}
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />

        {/* Google AdSense Script */}
        <meta name="google-site-verification" content="59LqVUnp07UYOy3uNr-unyFZnhgb48zqRjvAN_7XSkE" />
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