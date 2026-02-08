import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkImageSize from '@/lib/remark-image-size';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import Tag from '@/components/Tag';
import { Children } from 'react';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

const CAPTION_MARKER = "^:";

const mdxComponents: MDXRemoteProps['components'] = {
  h1: (props) => (
    <h1 className="text-4xl font-semibold text-apple-gray-700 mb-6 mt-8 font-display" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold text-apple-gray-700 mb-4 mt-8 font-display" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold text-apple-gray-700 mb-3 mt-6 font-display" {...props} />
  ),
  p: ({ children, ...props }) => {
    // Safely flatten content into an array so we can inspect the start
    const content = Children.toArray(children);
    const firstChild = content[0];

    // Check if the paragraph starts with our text marker
    if (typeof firstChild === 'string' && firstChild.startsWith(CAPTION_MARKER)) {
      
      // Clean up the marker from the text
      const markerRegex = new RegExp(`^${CAPTION_MARKER.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\s*`);
      content[0] = firstChild.replace(markerRegex, '');

      return (
        <p className="text-center text-apple-gray-500 text-sm mt-2" {...props}>
          {content}
        </p>
      );
    }

    // Default formatting
    return (
      <p className="text-apple-gray-600 leading-relaxed mb-4" {...props}>
        {children}
      </p>
    );
  },
  a: (props) => (
    <a
      className="text-entrust-purple hover:text-entrust-magenta transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-outside ml-6 mb-4 text-apple-gray-600 space-y-2" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside ml-6 mb-4 text-apple-gray-600 space-y-2" {...props} />
  ),
  li: (props) => (
    <li className="text-apple-gray-600" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-apple-gray-300 pl-4 italic text-apple-gray-500 my-4" {...props} />
  ),
  code: ({ children, ...props }) => {
    // Check if this is inline code (not inside a pre block)
    // rehype-pretty-code adds data attributes to code blocks
    const isInlineCode = !('data-language' in props);
    if (isInlineCode) {
      return <code className="bg-apple-gray-100 text-apple-gray-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>;
    }
    return <code {...props}>{children}</code>;
  },
  pre: ({ children, ...props }) => (
    <pre className="bg-[#24292e] text-apple-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props}>{children}</pre>
  ),
  strong: (props) => (
    <strong className="font-semibold text-apple-gray-700" {...props} />
  ),
  em: (props) => (
    <em className="italic" {...props} />
  ),
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Entrust`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm text-apple-gray-500 hover:text-apple-gray-700 flex items-center"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Research
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <Tag key={index} type={tag.type} label={tag.label} />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-apple-gray-700 mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-apple-gray-500">
          <time dateTime={post.date}>{post.date}</time>
          {post.authors.length > 0 && (
            <>
              <span className="text-apple-gray-300">|</span>
              <span>{post.authors.join(', ')}</span>
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-apple max-w-none">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMath, remarkImageSize],
              rehypePlugins: [
                rehypeKatex,
                [rehypePrettyCode, { theme: 'github-dark' }],
              ],
            },
          }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-apple-gray-200">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all research
        </Link>
      </footer>
    </article>
  );
}
