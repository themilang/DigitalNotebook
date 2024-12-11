import Head from 'next/head';
import Intro from '@/components/intro';
import NewsletterForm from '@/components/newsletter-form';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';
import CustomTestimonials from '@/components/testimonials';
import AdSense from '@/components/ads';

export default function Home() {
  const adsensePid = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <>
      {/* Head Tag for SEO */}
      <Head>
        <title>Milan Ghimire - Home</title>
        <meta
          name="description"
          content="Welcome to the official site of Milan Ghimire. Explore blogs, projects, testimonials, and more. Stay updated with the latest content and insights!"
        />
        <meta
          name="keywords"
          content="Milan Ghimire, Portfolio, Projects, Blogs, Testimonials, Full Stack Developer, MERN Stack, ML/AI Enthusiast"
        />
        <meta name="author" content="Milan Ghimire" />
        <link rel="canonical" href="https://milanghimire.info.np/" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Milan Ghimire - Home" />
        <meta
          property="og:description"
          content="Welcome to the official site of Milan Ghimire. Explore blogs, projects, testimonials, and more. Stay updated with the latest content and insights!"
        />
        <meta property="og:url" content="https://milanghimire.info.np/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Milan Ghimire - Home" />
        <meta
          name="twitter:description"
          content="Welcome to the official site of Milan Ghimire. Explore blogs, projects, testimonials, and more."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw"
        />

        {/* AdSense Script */}
        {adsensePid && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePid}`}
            crossOrigin="anonymous"
          ></script>
        )}
      </Head>

      {/* Inject AdSense Component */}
      {adsensePid && <AdSense pId={adsensePid} />}

      {/* Main Content */}
      <section className="pb-20 pt-40">
        <div className="container max-w-3xl">
          <Intro />
          <RecentPosts />
          <RecentProjects />
          <CustomTestimonials />
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}