'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { FaGithub, FaYoutube, FaLinkedin, FaRegCopy } from 'react-icons/fa';

export default function AboutUs() {
  const googleAdClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID;
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    const homepageURL = "https://www.milanghimire.info.np";
    navigator.clipboard.writeText(homepageURL).then(() => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Show alert for 2 seconds
    });
  };

  return (
    <>
      {/* Head Tag for SEO */}
      <Head>
        <title>About Me - Milan Ghimire</title>
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

          {/* About Me Content */}
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          {/* Add an Author Photo */}
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://www.milanghimire.info.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmilan.783463ee.png&w=640&q=75"
              alt="Milan Ghimire - Author"
              className="w-40 h-40 rounded-full object-cover shadow-md"
              loading="lazy"
            />

            {/* Copy Notification */}
            {showAlert && (
              <div className="absolute transform -translate-y-10 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade">
                Link copied to clipboard!
              </div>
            )}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="mt-4 bg-slate-500 text-white px-4 py-2 rounded shadow flex items-center gap-2 hover:bg-slate-600 transition"
            >
              <FaRegCopy />
              Copy Homepage Link
            </button>

            {/* Social Media Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/themilang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@we-are-engineers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
              >
                <FaYoutube />
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/in/milan-ghimire-090b72273"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded shadow hover:bg-sky-600 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Additional Content */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">My Mission</h2>
            <p className="text-gray-600">
              My mission is to inspire, educate, and empower individuals by sharing insights, projects, and stories. Through this website, I aim to:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Showcase my professional work and creative projects.</li>
              <li>Share knowledge and insights through engaging blog posts.</li>
              <li>Connect with like-minded individuals and foster collaboration.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">My Vision</h2>
            <p className="text-gray-600">
              At <strong>milanghimire.info.np</strong>, I envision a community where knowledge and creativity are freely shared to empower individuals in their personal and professional journeys. I believe in the power of storytelling, learning, and collaboration to make a positive impact.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">What I Offer</h2>
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
            <h2 className="text-2xl font-semibold mb-3">Why Choose Me?</h2>
            <p className="text-gray-600">
              <strong>milanghimire.info.np</strong> is more than just a website; it&apos;s a reflection of my dedication to excellence, learning, and growth. By exploring this platform, you&apos;ll find:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>A unique perspective rooted in experience and creativity.</li>
              <li>A commitment to delivering quality content and value.</li>
              <li>A welcoming space for meaningful connections and discussions.</li>
            </ul>
          </section>

          {/* Address Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Address</h2>
            <p className="text-gray-600">
              <strong>Location:</strong> Kathmandu, Nepal<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:milanghimireinfo@gmail.com" className="text-blue-600 hover:underline">
                milanghimireinfo@gmail.com
              </a><br />
              
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-8 mt-12">
            <div className="p-6 text-center text-white bg-gradient-to-r from-black via-blue-900 to-blue-500   rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-3">Get in Touch</h2>
              <p className="text-sm mb-6 text-gray-400">
                Feel free to contact me for collaborations, consultations, or just to say hello!
              </p>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded shadow hover:bg-gray-100 transition"
              >
                Contact Me
              </Link>
            </div>
          </section>

        </div>
      </section>
    </>
  );
}