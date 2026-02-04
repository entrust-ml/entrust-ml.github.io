import Link from 'next/link';
import Tag from './Tag';

type TagType = 'methods' | 'vision' | 'nlp' | 'ml' | 'systems' | 'fairness';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: Array<{ type: TagType; label: string }>;
  authors?: string[];
  featured?: boolean;
}

export default function PostCard({
  title,
  excerpt,
  date,
  slug,
  tags,
  authors,
  featured = false,
}: PostCardProps) {
  return (
    <article
      className={`bg-white rounded-xl border border-apple-gray-200 p-6 min-w-0 overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            type={tag.type}
            label={tag.label}
            href={`/category/${tag.type}`}
          />
        ))}
      </div>

      {/* Title */}
      <Link href={`/posts/${slug}`}>
        <h3
          className={`font-display font-semibold text-apple-gray-700 mb-3 break-words ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-apple-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
        {excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-apple-gray-400">
        <time dateTime={date}>{date}</time>
        {authors && authors.length > 0 && (
          <span className="truncate ml-4">
            {authors.slice(0, 3).join(', ')}
            {authors.length > 3 && ` +${authors.length - 3} more`}
          </span>
        )}
      </div>
    </article>
  );
}
