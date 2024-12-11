import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function AboutUs() {
  const googleAdClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID;

  return (
    <>
      {/* Head Tag for SEO */}
      <Head>
        <title>About Us - Milan Ghimire</title>
        <meta
          name="description"
          content="Learn more about Milan Ghimire and the mission behind milanghimire.info.np. Discover the vision, portfolio, and blog offerings that inspire and empower individuals."
        />
        <meta
          name="keywords"
          content="About Milan Ghimire, About milanghimire.info.np, Software Developer, ML/AI Enthusiast, Visionary, Portfolio, Blog"
        />
        <meta name="author" content="Milan Ghimire" />
        <link rel="canonical" href="https://milanghimire.info.np/about" />

        {/* Google AdSense Script */}
        {googleAdClient && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdClient}`}
            crossOrigin="anonymous"
          ></script>
        )}

        {/* OpenGraph Tags */}
        <meta property="og:title" content="About Us - Milan Ghimire" />
        <meta
          property="og:description"
          content="Learn more about Milan Ghimire and the mission behind milanghimire.info.np. Discover the vision, portfolio, and blog offerings that inspire and empower individuals."
        />
        <meta property="og:url" content="https://milanghimire.info.np/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Milan Ghimire" />
        <meta
          name="twitter:description"
          content="Learn more about Milan Ghimire and the mission behind milanghimire.info.np."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/v2/D4E03AQEyGBjw8XIZiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683436186866?e=1739404800&v=beta&t=vHTQD-tbOzMlioE5o3CAYfNrY1ZHAXHuSvOLyPbTAmw"
        />
      </Head>

      <section className="pb-24 pt-32">
        <div className="container max-w-3xl">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          {/* About Us Content */}
          <h1 className="text-4xl font-bold mb-6">About Us</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Welcome to milanghimire.info.np</h2>
            <p className="text-gray-600">
              At <strong>milanghimire.info.np</strong>, we are passionate about sharing knowledge, showcasing creativity, and making meaningful connections through our content. This platform serves as a window into my journey as a professional and a creative individual. Whether you&apos;re here to explore my portfolio or dive into thought-provoking blogs, there&apos;s something for everyone.
            </p>
          </section>
          <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to inspire, educate, and empower individuals by sharing insights, projects, and stories. Through this website, I aim to:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Showcase my professional work and creative projects.</li>
            <li>Share knowledge and insights through engaging blog posts.</li>
            <li>Connect with like-minded individuals and foster collaboration.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600">
            At <strong>milanghimire.info.np</strong>, I envision a community where knowledge and creativity are freely shared to empower individuals in their personal and professional journeys. I believe in the power of storytelling, learning, and collaboration to make a positive impact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-gray-600">
            This platform is a blend of creativity, professionalism, and passion. Here&apos;s what you can expect:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Portfolio:</strong> A curated collection of my work, highlighting skills, experiences, and accomplishments.
            </li>
            <li>
              <strong>Blog:</strong> Thought-provoking articles, tutorials, and stories on various topics, from technology to personal growth.
            </li>
            <li>
              <strong>Opportunities:</strong> Open for collaborations, consultations, and creative partnerships.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <p className="text-gray-600">
            <strong>milanghimire.info.np</strong> is more than just a website; it&apos;s a reflection of my dedication to excellence, learning, and growth. By exploring this platform, you&apos;ll find:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>A unique perspective rooted in experience and creativity.</li>
            <li>A commitment to delivering quality content and value.</li>
            <li>A welcoming space for meaningful connections and discussions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
          <p className="text-gray-600">
            I&apos;d love to hear from you! Whether you have a question, want to collaborate, or simply want to connect, feel free to reach out:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Email: <a href="mailto:milanghimireinfo@gmail.com" className="text-blue-600 hover:underline">milanghimireinfo@gmail.com</a>
            </li>
            <li>
              Social Media: Follow me on <a href="https://www.linkedin.com/in/milan-ghimire-090b72273" className="text-blue-600 hover:underline">LinkedIn</a>.
            </li>
          </ul>
        </section>
          <footer className="mt-8 border-t pt-4 text-gray-500 text-sm">
            <p>&copy; 2024 <Link href="/" className="text-blue-600 hover:underline">milanghimire.info.np</Link>. All rights reserved.</p>
          </footer>
        </div>
        
      </section>
    </>
  );
}