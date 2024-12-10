import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon, ClockIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'
import SourceCodeForm from '@/components/SourceCodeForm' // Import the form

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

// Utility to calculate read time
const calculateReadTime = (content: string) => {
  const words = content.split(/\s+/).length
  const wordsPerMinute = 200 // Average reading speed
  return `${Math.ceil(words / wordsPerMinute)} min read`
}

// Simulate fetching dynamic views (replace with actual API call if available)
const fetchViews = async (slug: string): Promise<number> => {
  return Math.floor(Math.random() * 1000) + 1 // Simulated random views
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, authorPhoto, publishedAt,youtubeLink ,summary} = metadata

  const readTime = calculateReadTime(content) // Calculate read time
  const views = await fetchViews(slug) // Fetch dynamic views

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
            {/* Author Info */}
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

            {/* Read Time and Views */}
            <div className='flex items-center gap-4 text-right'>
              {/* Read Time */}
              <div className='flex items-center gap-1'>
                <ClockIcon className='w-4 h-4' />
                <span>{readTime}</span>
              </div>

              {/* Views */}
              <div className='flex items-center gap-1'>
                <EyeOpenIcon className='w-4 h-4' />
                <span>{views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
          <h1 className='text-sm mt-16 '>{summary}</h1>

  {/* Add the Source Code Form */}
  <div className="mt-2">
            <SourceCodeForm />
          </div>
        
        </header>
        {youtubeLink && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Watch on YouTube</h3>
            <Link
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Realtime messaging app | NextJS, Clerk & Stream - @hamedbahram
            </Link>
          </div>
        )}


        {/* Content */}
        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        {/* Footer */}
        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}