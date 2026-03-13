import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// Since we installed @next/font, we can just use the Google Font for Press Start 2P
import { Press_Start_2P } from 'next/font/google';

const pixelFont = Press_Start_2P({
  weight: '400',
  variable: '--font-pixel',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Jack | Playable Portfolio',
  description: 'A retro handheld-inspired portfolio website.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Jack | Playable Portfolio',
    description: 'A retro handheld-inspired portfolio website.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack | Playable Portfolio',
    description: 'A retro handheld-inspired portfolio website.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pixelFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
