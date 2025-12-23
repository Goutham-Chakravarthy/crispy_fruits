import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Crispy Fruits',
    template: '%s | Crispy Fruits',
  },
  description: 'Discover the freshest and most delicious fruits for a healthy lifestyle',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  keywords: ['fruits', 'healthy', 'organic', 'fresh', 'groceries'],
  authors: [{ name: 'Crispy Fruits Team' }],
  creator: 'Crispy Fruits',
  publisher: 'Crispy Fruits',
  openGraph: {
    title: 'Crispy Fruits',
    description: 'Discover the freshest and most delicious fruits for a healthy lifestyle',
    url: '/',
    siteName: 'Crispy Fruits',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crispy Fruits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crispy Fruits',
    description: 'Discover the freshest and most delicious fruits for a healthy lifestyle',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <div className="pt-16">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
