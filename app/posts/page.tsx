import Head from 'next/head'; // Import Head for SEO
import { getPosts } from '@/lib/posts';
import PostsWithSearch from '@/components/posts-with-search';

export default async function PostsPage() {
  const posts = await getPosts();

  // Dynamically generate the title based on the number of posts
  const dynamicTitle = `All ${posts.length} Posts | Milan Ghimire`;

  return (
    <>
      {/* Dynamic Head with Meta Tags */}
      <Head>
        <title>{dynamicTitle}</title>
        <meta
          name="description"
          content="Discover insightful blog posts on various topics by Milan Ghimire. Stay updated with the latest articles."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.milanghimire.info.np/posts" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={dynamicTitle} />
        <meta
          property="og:description"
          content="Discover insightful blog posts on various topics by Milan Ghimire. Stay updated with the latest articles."
        />
        <meta property="og:image" content="https://www.milanghimire.info.np/images/posts/cover.png" />
        <meta property="og:url" content="https://www.milanghimire.info.np/posts" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content={dynamicTitle} />
        <meta
          name="twitter:description"
          content="Discover insightful blog posts on various topics by Milan Ghimire. Stay updated with the latest articles."
        />
        <meta name="twitter:image" content="https://www.milanghimire.info.np/images/posts/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Page Content */}
      <section className="dark:bg-gray-900 pb-24 pt-40">
        <div className="container max-w-3xl">
          <h1 className="title mb-12">Posts</h1>
          <PostsWithSearch posts={posts} />
        </div>
      </section>
    </>
  );
}