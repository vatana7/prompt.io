import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nav, Provider } from '@/components/organism';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prompt.io',
  description: 'Prompt.io is a platform for creating and sharing prompts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </Provider>
    </html>
  );
}
