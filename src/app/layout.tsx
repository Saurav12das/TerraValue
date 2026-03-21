import type { Metadata } from 'next';
import { Instrument_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

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
    <html
      lang="en"
      className={`${instrumentSans.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
