'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  ctaText,
  ctaHref,
}: HeroBannerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: `
          radial-gradient(
            ellipse 80% 50% at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(69, 107, 209, 0.4) 0%,
            transparent 50%
          ),
          radial-gradient(
            ellipse 60% 40% at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
            rgba(198, 22, 141, 0.3) 0%,
            transparent 50%
          ),
          linear-gradient(
            135deg,
            #723988 0%,
            #5a2d6e 20%,
            #a61f8c 50%,
            #723988 80%,
            #456BD1 100%
          )
        `,
        backgroundSize: '100% 100%, 100% 100%, 300% 300%',
        animation: 'heroGradientShift 12s ease infinite',
      }}
    >
      <style jsx>{`
        @keyframes heroGradientShift {
          0% { background-position: 0% 0%, 0% 0%, 0% 50%; }
          50% { background-position: 0% 0%, 0% 0%, 100% 50%; }
          100% { background-position: 0% 0%, 0% 0%, 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>

      {/* Hexagon mesh pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.08 }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="heroHexPattern" width="80" height="69.28" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L80 23.09 L80 46.19 L40 69.28 L0 46.19 L0 23.09 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M40 23.09 L60 34.64 L60 46.19 L40 57.74 L20 46.19 L20 34.64 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroHexPattern)" />
        </svg>
      </div>

      {/* Floating gradient orbs */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(69, 107, 209, 0.5) 0%, transparent 70%)',
          left: '5%',
          top: '-20%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198, 22, 141, 0.6) 0%, transparent 70%)',
          right: '10%',
          top: '10%',
          animation: 'float 6s ease-in-out infinite 1s',
        }}
      />
      <div
        className="absolute w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 57, 136, 0.5) 0%, transparent 70%)',
          right: '30%',
          bottom: '-15%',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />
      <div
        className="absolute w-32 h-32 rounded-full blur-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(69, 107, 209, 0.4) 0%, transparent 70%)',
          left: '40%',
          bottom: '5%',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Interactive spotlight following cursor */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Content */}
      <div className="relative px-8 py-16 md:px-12 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-apple-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="group inline-flex items-center px-6 py-3 bg-white text-apple-gray-700 rounded-full font-medium hover:bg-apple-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
          >
            {ctaText}
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
