import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'TerraValue — Natural Capital Infrastructure for Agriculture',
  description:
    'TerraValue frames agriculture as the meeting point of purpose, carbon, and water intelligence, translating ecosystem performance into decision-ready and finance-ready value.',
  keywords: [
    'ecosystem services',
    'natural capital',
    'agriculture',
    'soil carbon',
    'water quality',
    'biodiversity',
    'digital twin',
    'farm valuation',
    'climate tech',
    'ag tech',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
