import Link from 'next/link';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location?: string;
  href?: string;
}

export default function EventCard({
  title,
  description,
  date,
  location,
  href,
}: EventCardProps) {
  const content = (
    <article className="bg-white rounded-xl border border-apple-gray-200 p-6">
      {/* Date badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-apple-gray-100 text-apple-gray-600 text-xs font-medium mb-4">
        {date}
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-apple-gray-700 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-apple-gray-500 text-sm leading-relaxed mb-3">
        {description}
      </p>

      {/* Location */}
      {location && (
        <p className="text-xs text-apple-gray-400 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>
      )}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
