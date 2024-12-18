import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li key={post.slug} className="rounded-lg overflow-hidden">
          <Link
            href={`/posts/${post.slug}`}
            className="flex items-center gap-4 p-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition"
          >
            {/* Image Section */}
            {post.image && (
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-base sm:text-lg font-semibold font-mono line-clamp-1">
                  {post.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm sm:text-base text-muted-foreground">
                  {post.summary}
                </p>
              </div>

              {post.publishedAt && (
                <p className="mt-1 text-xs sm:text-sm font-light">
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}