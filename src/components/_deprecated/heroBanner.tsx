import Link from 'next/link';

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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#a61f8c] to-[#723988] rounded-2xl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

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
            className="inline-flex items-center px-6 py-3 bg-white text-apple-gray-700 rounded-full font-medium hover:bg-apple-gray-100 transition-colors"
          >
            {ctaText}
            <svg
              className="w-4 h-4 ml-2"
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
