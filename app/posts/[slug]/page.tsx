import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon, ClockIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'
import SourceCodeForm from '@/components/SourceCodeForm'
import MockAd from '@/components/MockAd' // Import MockAd component

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, authorPhoto, publishedAt, youtubeLink, summary } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        {/* Back link */}
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        
        

        {/* Main image */}
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        {/* Header */}
        <header className='flex flex-col mt-3'>
          {/* Title */}
          <h1 className='text-4xl font-bold font-mono mb-2'>{title}</h1>

          {/* Metadata */}
          <div className='mt-2 flex justify-between items-center text-sm text-muted-foreground'>
            <div className='flex items-center'>
              {authorPhoto && (
                <Image
                  src={authorPhoto}
                  alt={author || ''}
                  width={34}
                  height={34}
                  className='rounded-full mr-3'
                />
              )}
              <span>
                {author} / {formatDate(publishedAt ?? '')}
              </span>
            </div>
          </div>
          
          <h1 className='text-sm mt-16'>{summary}</h1>

          {/* Add the Source Code Form */}
          <div className="mt-2">
            <SourceCodeForm />
          </div>
        </header>

        <MockAd />

        {/* Content */}
        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        {/* Ad: Above Footer */}
        <MockAd />

        {/* Footer */}
        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}