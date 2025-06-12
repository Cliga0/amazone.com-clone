/**
 * RootLayout.tsx
 * ---------------
 * Application Root Layout for the Amazon Clone.
 * 
 * This file defines the base HTML structure for the application using Next.js App Router.
 * It wraps every page with global providers, layout components (Header, Footer),
 * and loads shared styles and fonts.
 * 
 * Structure:
 * - HTML document with lang + font classes
 * - Global context providers (Auth, Theme, Cart)
 * - Site-wide Header and Footer
 * - Main content injected via `children`
 * 
 * Best Practices:
 * - SEO-first: Metadata configuration with OpenGraph
 * - Accessibility: Language, font fallback, consistent color themes
 * - Performance: Optimized font loading, modular layout
 */

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css'; // Global Tailwind and base styles

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from '@/context/Providers';

// Load Google Inter font with optimal display strategy for CLS
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Improves performance by preventing layout shifts
});

// Global SEO metadata applied to all routes
export const metadata: Metadata = {
  title: 'Amazon Clone – Next.js + Tailwind',
  description: 'A modern Amazon-like e-commerce frontend built with Next.js, Tailwind CSS, and TypeScript.',
  keywords: ['ecommerce', 'next.js', 'typescript', 'tailwind', 'amazon clone'],
  viewport: 'width=device-width, initial-scale=1',
  authors: [{ name: 'TonNom', url: 'https://tonportfolio.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Amazon Clone',
    description: 'High-performance e-commerce UI inspired by Amazon.',
    url: 'https://amazone.com-clone.vercel.app',
    siteName: 'Amazon Clone',
    images: [
      {
        url: '/og-image.jpg', // Recommended dimensions: 1200x630
        alt: 'Amazon Clone Preview',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

// Props for layout component — ReactNode injected via Next.js routing
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout Component
 * ---------------------
 * Defines the base HTML structure and wraps all pages in global providers and layout.
 * @param children - Page-specific components rendered by the App Router.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        {/* Global context: Theme, Auth, Cart, etc. */}
        <Providers>
          {/* Persistent site header (e.g. logo, nav, search, user account, cart) */}
          <Header />

          {/* Dynamic content area */}
          <main className="min-h-screen px-4 sm:px-6 lg:px-8">
            {children}
          </main>

          {/* Persistent footer with links, support, policies, etc. */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
