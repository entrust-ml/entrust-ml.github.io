'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/blog', label: 'Blog' },
  { href: '/contributions', label: 'Contributions' },
  { href: '/careers', label: 'Work with us' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-apple-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-apple-gray-700 hover:text-apple-gray-900 transition-colors"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 150 150"
            >
              <defs>
                <linearGradient id="entrust-gradient" x1="-211.24" y1="482.2" x2="-211.24" y2="478.63" gradientTransform="matrix(23.21, 0, 0, -26.8, 4978.74, 12949.98)" gradientUnits="userSpaceOnUse">
                  <stop offset="0.2" stopColor="#c6168d"/>
                  <stop offset="0.8" stopColor="#762b8a"/>
                </linearGradient>
              </defs>
              <path fill="#762b8a" d="M75.79,145.6l-61-35.24V39.88l61-35.25,61,35.25v70.48ZM127,104.69V45.54L75.78,16,24.56,45.54v59.15l51.22,29.57Z"/>
              <polygon fill="url(#entrust-gradient)" points="85.45 107.69 85.45 97.8 117.16 79.36 117.16 69.55 85.45 87.81 85.45 77.99 117.2 59.74 117.19 51.22 75.79 27.3 34.38 51.22 34.38 99.02 75.79 122.93 117.2 99.01 117.2 89.19 85.45 107.69"/>
            </svg>
            <span className="font-display font-semibold text-lg">
              Entrust
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-apple-gray-500 hover:text-apple-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-apple-gray-500 hover:text-apple-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-apple-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-apple-gray-500 hover:text-apple-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
