import Link from 'next/link';
import Image from 'next/image';
import { ClockIcon, EyeOpenIcon, ArrowLeftIcon } from '@radix-ui/react-icons';

import { getPosts, getPostBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';
import SourceCodeForm from '@/components/SourceCodeForm';
import { notFound } from 'next/navigation';

// Utility to calculate read time
const calculateReadTime = (content: string) => {
  const words = content.split(/\s+/).length;
  const wordsPerMinute = 200; // Average reading speed
  return `${Math.ceil(words / wordsPerMinute)} min read`;
};

// Dynamically generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Milan Ghimire',
      description: 'The post you are looking for does not exist.',
    };
  }

  const { title, summary, image } = post.metadata;

  return {
    title: title,
    description: summary,
    openGraph: {
      title: title,
      description: summary,
      images: [
        {
          url: `https://www.milanghimire.info.np${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: `https://www.milanghimire.info.np/posts/${params.slug}`,
      type: 'article',
    },
    twitter: {
      title: title,
      description: summary,
      images: [`https://www.milanghimire.info.np${image}`],
      card: 'summary_large_image',
    },
  };
}

export default async function post({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, summary, author, authorPhoto, publishedAt } = metadata;
  const readTime = calculateReadTime(content); // Calculate read time
  const views = Math.floor(Math.random() * 1000) + 1; // Simulated random views

  return (
    <>
      <section className="dark:bg-gray-900 pb-24 pt-32">
        <div className="container max-w-3xl">
          <Link
            href="/posts"
            className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to posts</span>
          </Link>

          {/* Cover Image from Metadata */}
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
                    {author} / {formatDate(publishedAt ?? '')}
                  </span>
                </div>
              </div>

              {/* Read Time and Views for Larger Screens */}
              <div className="hidden sm:flex items-center gap-4">
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