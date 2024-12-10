import Image from 'next/image'
import authorImage from '@/public/images/authors/milan.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-6 gap-y-4 pb-16 md:flex-row md:items-center'>
      <div className='mt-0 flex-1 md:mt-0'>
        <h1 className='title no-underline font-mono text-3xl md:text-3xl '>
          Hey, I&#39;m Milan <span className='font-mono text-sm text-sky-600'>/mi/lən/</span>
        </h1>
        <p className='mt-2 text-sm font-light text-muted-foreground leading-relaxed'>
          Welcome to my digital notebook. I’m a Computer Engineer and Fullstack Developer from Nepal. Here, I share my latest projects, insights into ML & AI, and lessons learned throughout my journey. Actively sharing knowledge with the community.
        </p>
      </div>
      <div className='relative flex-shrink-0'>
        <Image
          className='rounded-lg'
          src={authorImage}
          alt='Milan Ghimire'
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  )
}