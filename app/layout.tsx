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
  keywords:
    'milan-ghimire, MilanGhimire, milanghimire, milanghimireportfolio, MilanGhimirePortfolio, milanghimiremernstack, MilanGhimireMERNStack, milanghimiredeveloper, MilanGhimireDeveloper, milanghimiresoftwaredeveloper, MilanGhimireSoftwareDeveloper, software-developer, SoftwareDeveloper, softwaredeveloper, full-stack-developer, FullStackDeveloper, fullstackdeveloper, mern-stack-developer, MERNStackDeveloper, mernstackdeveloper, computer-engineer, ComputerEngineer, computerengineer, ml-ai-enthusiast, ML/AIEnthusiast, mlaienthusiast, web-developer, WebDeveloper, webdeveloper, technology-visionary, TechnologyVisionary, technologyvisionary, javascript-expert, JavaScriptExpert, javascriptexpert',
  openGraph: {
    title: 'Milan Ghimire - Software Developer, ML/AI Enthusiast, and Tech Visionary',
    description:
      'Discover Milan Ghimire\'s expertise as a full-stack web developer and ML/AI enthusiast specializing in MERN technologies and building innovative solutions.',
    url: 'https://milanghimire.info.np',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw',
        width: 1200,
        height: 630,
        alt: 'Milan Ghimire - Software Developer and Tech Visionary',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://milanghimire.info.np',
    languages: {
      'en-US': 'https://milanghimire.info.np/posts',
    },
  },
  other: {
    'linkedin:profile': 'https://www.linkedin.com/in/milan-ghimire-090b72273/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* General Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Milan Ghimire" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://milanghimire.info.np" />

        {/* Alternate Pages for Language */}
        <link rel="alternate" hrefLang="en-US" href="https://milanghimire.info.np/posts" />

        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Milan Ghimire - Software Developer, ML/AI Enthusiast, and Tech Visionary" />
        <meta property="og:description" content="Discover Milan Ghimire's expertise as a full-stack web developer and ML/AI enthusiast specializing in MERN technologies and building innovative solutions." />
        <meta property="og:url" content="https://milanghimire.info.np" />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Milan Ghimire - Software Developer, ML/AI Enthusiast, and Tech Visionary" />
        <meta name="twitter:description" content="Discover Milan Ghimire's expertise as a full-stack web developer and ML/AI enthusiast specializing in MERN technologies and building innovative solutions." />
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw" />
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