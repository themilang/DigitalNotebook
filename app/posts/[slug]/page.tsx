import Link from "next/link";
import Image from "next/image";
import { ClockIcon, EyeOpenIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/mdx-content";
import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import SourceCodeForm from "@/components/SourceCodeForm";
import Head from "next/head";

// Utility to calculate read time
const calculateReadTime = (content: string) => {
  const words = content.split(/\s+/).length;
  const wordsPerMinute = 200; // Average reading speed
  return `${Math.ceil(words / wordsPerMinute)} min read`;
};

// Simulated fetch views count
const fetchViews = async (slug: string): Promise<number> => {
  return Math.floor(Math.random() * 1000) + 1; // Simulated random views
};

// Static paths generation
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, authorPhoto, publishedAt, description } = metadata;
  const readTime = calculateReadTime(content);
  const views = await fetchViews(slug);

  // Ensure the image URL is absolute for sharing
  const fullImageUrl = `https://milanghimire.info.np${image}`;

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || "A detailed blog post."} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description || "A detailed blog post."} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={`https://milanghimire.info.np/posts/${slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description || "A detailed blog post."} />
        <meta name="twitter:image" content={fullImageUrl} />
      </Head>

      <section className="dark:bg-gray-900 pb-24 pt-32">
        <div className="container max-w-3xl mx-auto">
          {/* Back to Posts */}
          <Link
            href="/posts"
            className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Posts</span>
          </Link>

          {/* Cover Image */}
          {image && (
            <div className="relative w-full h-64 mb-8">
              <Image
                src={image}
                alt={`${title} cover image`}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold font-mono mb-6">{title}</h1>

          {/* Header Section */}
          <header>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-muted-foreground">
              {/* Author and Metadata */}
              <div className="flex items-center gap-3">
                {authorPhoto && (
                  <Image
                    src={authorPhoto}
                    alt={`${author}'s photo`}
                    width={34}
                    height={34}
                    className="rounded-full"
                  />
                )}
                <div>
                  <span>
                    {author} / {formatDate(publishedAt ?? "")}
                  </span>
                </div>
              </div>

              {/* Read Time and Views */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <EyeOpenIcon className="w-4 h-4" />
                  <span>{views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </header>

          {/* Source Code Form */}
          <div className="mt-2">
            <SourceCodeForm />
          </div>

          {/* Content */}
          <main className="prose mt-16 dark:prose-invert">
            <MDXContent source={content} />
          </main>
        </div>
      </section>
    </>
  );
}