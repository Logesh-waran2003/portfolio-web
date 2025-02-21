import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeWrapper from '@/components/ThemeWrapper'; // ✅ Import ThemeWrapper
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logeshwaran Portfolio',
  description: 'Personal portfolio showcasing work and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
