import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import Posts from '@/components/posts';

export default async function RecentPosts() {
  const posts = await getPosts(4); // Fetch 4 recent posts

  return (
    <section className="pb-24">
      <div>
        {/* Section Title */}
        <h2 className="text-xl mb-12 font-mono font-bold">
          Recent Posts
        </h2>

        {/* Posts Component */}
        <div>
          <Posts posts={posts} />
        </div>

        {/* Link to All Posts */}
        <Link
          href="/posts"
          className="mt-8 inline-flex items-center gap-2 text-blue-500 underline decoration-1 underline-offset-2 transition-colors hover:text-blue-600"
        >
          <span>All Posts</span>
        </Link>
      </div>
    </section>
  );
}