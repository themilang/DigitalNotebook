import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import CustomTestimonials from '@/components/testimonials'

export default function Home() {
  return (
    <section className='pb-20 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />
        <CustomTestimonials/>
        <NewsletterForm />
      </div>
    </section>
  )
}
