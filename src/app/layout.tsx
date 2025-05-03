import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Logeshwaran T S | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, AWS, and cloud infrastructure. View my projects and experience.',
  keywords: 'full stack developer, react, next.js, aws, cloud infrastructure, portfolio, logeshwaran',
  authors: [{ name: 'Logeshwaran T S' }],
  openGraph: {
    title: 'Logeshwaran T S | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, AWS, and cloud infrastructure',
    url: 'https://logeshwaran.dev',
    siteName: 'Logeshwaran T S Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logeshwaran T S | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, AWS, and cloud infrastructure',
    creator: '@logeshwaran_ts',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
