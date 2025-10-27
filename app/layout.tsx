import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic Starter',
  description: 'Deployed on Vercel by an autonomous agent.',
  metadataBase: new URL('https://agentic-f0f9f38f.vercel.app'),
  openGraph: {
    title: 'Agentic Starter',
    description: 'Next.js App Router + TypeScript',
    url: 'https://agentic-f0f9f38f.vercel.app',
    siteName: 'Agentic Starter',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Agentic Starter' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
