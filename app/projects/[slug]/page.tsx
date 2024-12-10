import Link from 'next/link'
import Image from 'next/image'
import {  ClockIcon, EyeOpenIcon } from '@radix-ui/react-icons' // Import icons

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import SourceCodeForm from '@/components/SourceCodeForm'



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
  const { title, image, author,authorPhoto, publishedAt } = metadata
  const readTime = calculateReadTime(content) // Calculate read time
  const views = await fetchViews(slug) // Fetch dynamic views


  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>
        <h1 className='text-3xl font-bold font-mono mb-6'>{title}</h1>

        

        <header>

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
              <div className='mt-2  gap-32 flex justify-between items-center text-sm text-muted-foreground'>
              <div >
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
              
            </div>

           
        </header>
        <div className="mt-2">
            <SourceCodeForm />
          </div>
        
        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
       
      </div>
    </section>
  )
}
