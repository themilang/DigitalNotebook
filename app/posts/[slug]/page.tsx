import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, EyeOpenIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaCopy } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import SourceCodeForm from '@/components/SourceCodeForm'
import Head from 'next/head'

// Utility to calculate read time
const calculateReadTime = (content: string) => {
  const words = content.split(/\s+/).length
  const wordsPerMinute = 200 // Average reading speed
  return `${Math.ceil(words / wordsPerMinute)} min read`
}

// Simulated fetch views count
const fetchViews = async (slug: string): Promise<number> => {
  return Math.floor(Math.random() * 1000) + 1 // Simulated random views
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, authorPhoto, publishedAt, description } =
    metadata
  const readTime = calculateReadTime(content)
  const views = await fetchViews(slug)
  const publishedDate = publishedAt ?? 'Not Available'
  const fullImageUrl = `https://milanghimire.info.np${image}`
  const pageUrl = `https://milanghimire.info.np/posts/${slug}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description || 'A detailed blog post.'}
        />
        <meta property='og:title' content={title} />
        <meta
          property='og:description'
          content={description || 'A detailed blog post.'}
        />
        <meta property='og:image' content={fullImageUrl} />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content={description || 'A detailed blog post.'}
        />
        <meta name='twitter:image' content={fullImageUrl} />
      </Head>

      <section className='pb-24 pt-32 dark:bg-gray-900'>
        <div className='container mx-auto max-w-3xl'>
          {/* Back to Posts */}
          <Link
            href='/posts'
            className='mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground'
          >
            <ArrowLeftIcon className='h-5 w-5' />
            Back to Posts
          </Link>

          {/* Cover Image */}
          {image && (
            <div className='relative mb-8 h-64 w-full'>
              <Image
                src={image}
                alt={`${title} cover image`}
                fill
                className='rounded-lg object-cover'
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className='mb-6 text-3xl font-bold'>{title}</h1>

          {/* Header */}
          <div className='mb-6 flex justify-between text-sm text-muted-foreground'>
            <div className='flex items-center gap-3'>
              {authorPhoto && (
                <Image
                  src={authorPhoto}
                  alt={author ?? "Author's photo"}
                  width={34}
                  height={34}
                  className='rounded-full'
                />
              )}
              <span>
                {author} · {formatDate(publishedDate)}
              </span>
            </div>
            <div className='flex gap-4'>
              <span className='flex items-center gap-1'>
                <ClockIcon className='h-4 w-4' /> {readTime}
              </span>
              <span className='flex items-center gap-1'>
                <EyeOpenIcon className='h-4 w-4' /> {views.toLocaleString()}{' '}
                views
              </span>
            </div>
          </div>

          {/* Social Media Share Buttons */}
          <div className='mb-8 flex float-right items-center gap-4 rounded-md p-4 '>
           
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Share on Facebook'
              className='text-blue-600 hover:text-blue-500'
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(title)}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Share on Twitter'
              className='text-blue-400 hover:text-blue-300'
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Share on LinkedIn'
              className='text-blue-700 hover:text-blue-600'
            >
              <FaLinkedinIn size={24} />
            </a>
           
          </div>
          

          {/* Source Code Form */}
          <div className='mb-8'>
            <SourceCodeForm />
          </div>

          {/* Content */}
          <main className='prose dark:prose-invert'>
            <MDXContent source={content} />
          </main>
        </div>
      </section>
    </>
  )
}
