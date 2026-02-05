import HeroBanner from '@/components/HeroBanner';
import PostCard from '@/components/PostCard';
import EventCard from '@/components/EventCard';
import { getAllPosts } from '@/lib/posts';

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
}

const events: Event[] = [
  // {
  //   title: 'EurIPS 2025',
  //   description:
  //     'Join us at the thirty-ninth Conference on Neural Information Processing Systems.',
  //   date: 'December 2025',
  //   location: 'Copenhagen, Denmark',
  // },
];

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((p) => p.featured);
  const recentPosts = posts.filter((p) => !p.featured).slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Banner */}
      <HeroBanner
        title="Discover opportunities in Machine Learning"
        subtitle="Explore cutting-edge research and join our team of researchers."
        ctaText="View open positions"
        ctaHref="/careers"
      />

      {/* Blog */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-apple-gray-700">
            Blog
          </h2>
          <a
            href="/blog"
            className="text-sm text-blue-600 hover:underline flex items-center"
          >
            View all
            <svg
              className="w-4 h-4 ml-1"
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
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 overflow-hidden">
            {featuredPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
                tags={post.tags}
                authors={post.authors}
                featured
              />
            ))}
            {recentPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
                tags={post.tags}
                authors={post.authors}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-apple-gray-200 p-12 text-center">
            <p className="text-apple-gray-500">
              No posts yet. Add MDX files to{' '}
              <code className="bg-apple-gray-100 px-2 py-1 rounded text-sm">
                src/content/posts/
              </code>
            </p>
          </div>
        )}
      </section>

      {/* Events */}
      {events.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-semibold text-apple-gray-700">
              Upcoming Events
            </h2>
            <a
              href="/events"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              View all
              <svg
                className="w-4 h-4 ml-1"
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
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
