import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, EyeOpenIcon } from '@radix-ui/react-icons' // Import icons

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import SourceCodeForm from '@/components/SourceCodeForm'
import MockAd from '@/components/MockAd'

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

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, authorPhoto, publishedAt } = metadata
  const readTime = calculateReadTime(content) // Calculate read time
  const views = await fetchViews(slug) // Fetch dynamic views

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to projects</span>
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


        {/* Mock Ad */}
       

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
                {/* Read Time and Views */}
                <div className="flex items-center gap-4 mt-2 sm:mt-0 sm:hidden">
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
        <MockAd />
        {/* Source Code Form */}
        <div className="mt-2">
          <SourceCodeForm />
        </div>

        {/* Content */}
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>

        {/* Mock Ad */}
        <MockAd />
      </div>
    </section>
  )
}