import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';
import { getPosts, getPostBySlug } from '@/lib/posts';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { notFound } from 'next/navigation';
import NewsletterForm from '@/components/newsletter-form';
import SourceCodeForm from '@/components/SourceCodeForm';

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

// Dynamic Metadata Function
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  const { metadata } = post;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      url: `/posts/${params.slug}`,
      images: [
        {
          url: metadata.image || '/default-image.jpg',
          alt: metadata.title,
        },
      ],
      type: 'article',
      publishedTime: metadata.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [metadata.image || '/default-image.jpg'],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, authorPhoto, publishedAt, summary } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        {/* Back Link */}
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to posts</span>
        </Link>

        {/* Main Image */}
        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ''}
              className="object-cover"
              fill
            />
          </div>
        )}

        {/* Header */}
        <header className="flex flex-col mt-3">
          {/* Title */}
          <h1 className="text-4xl font-bold font-mono mb-2">{title}</h1>

          {/* Metadata */}
          <div className="mt-2 flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              {authorPhoto && (
                <Image
                  src={authorPhoto}
                  alt={author || ''}
                  width={34}
                  height={34}
                  className="rounded-full mr-3"
                />
              )}
              <span>
                {author} / {formatDate(publishedAt ?? '')}
              </span>
            </div>
          </div>

          {/* Summary */}
          <h1 className="text-sm mt-4 text-gray-600">{summary}</h1>

          {/* Source Code Form */}
          <div className="mt-4">
            <SourceCodeForm />
          </div>
        </header>

        {/* Mock Ad */}
      

        {/* Content */}
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>

        {/* Ad: Above Footer */}
      

        {/* Newsletter Form */}
        <footer className="mt-16">
          <NewsletterForm />
        </footer>
      </div>
    </section>
  );
}