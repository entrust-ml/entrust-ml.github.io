import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | Entrust',
  description: 'Explore our latest research in computer vision, biometrics and efficient ML.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-apple-gray-700 mb-4">
          Blog
        </h1>
        <p className="text-lg text-apple-gray-500 max-w-2xl">
          Discover our latest contributions to machine learning research, from foundational
          methods to applied systems.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              tags={post.tags}
              authors={post.authors}
              featured={post.featured}
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
    </div>
  );
}
