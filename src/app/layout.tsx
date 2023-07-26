import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/organism/Nav';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Promptio',
  description: 'Prompt.io is a platform for creating and sharing prompts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
