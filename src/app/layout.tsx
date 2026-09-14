import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import { AudioProvider } from '@/context/AudioContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Toon Fable Bangla — Stories Beyond Imagination | Bengali Animated Stories',
  description:
    'Step into the dark ethereal universe of Toon Fable Bangla. Immersive Bengali animated ghost stories (ভূতের গল্প), folklore mysteries, dark fantasy, and moral adventures.',
  keywords: [
    'Toon Fable Bangla',
    'Bengali horror stories',
    'Bhuter Golpo',
    'বাংলা ভূতের গল্প',
    'Bengali cartoon stories',
    'Bengali animation universe',
    'Bengali ghost animation',
    'Brahmodaittya',
    'Petni',
    'Bengali folklore',
    'Stories Beyond Imagination',
  ],
  authors: [{ name: 'Toon Fable Bangla' }],
  openGraph: {
    title: 'Toon Fable Bangla — Stories Beyond Imagination',
    description:
      'Enter the realm of Bengali animated horror, folklore mystery, and supernatural adventures.',
    url: 'https://toonfable.com',
    siteName: 'Toon Fable Bangla',
    images: [
      {
        url: '/toon-fable.jpeg',
        width: 1200,
        height: 630,
        alt: 'Toon Fable Bangla',
      },
    ],
    locale: 'bn_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toon Fable Bangla — Stories Beyond Imagination',
    description:
      'Immersive Bengali animated ghost stories and folklore mystery universe.',
    images: ['/toon-fable.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/toon-fable.jpeg" />
      </head>
      <body>
        <LanguageProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
