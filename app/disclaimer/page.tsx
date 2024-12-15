import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <section className="dark:bg-gray-900 pb-24 pt-32">
      <div className="container max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="text-gray-700 mb-4">
          Effective Date: <strong>December 10, 2024</strong>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">General Information</h2>
          <p className="text-gray-600">
            Welcome to <strong>milanghimire.info.np</strong>. This website is primarily a platform to showcase my personal portfolio and share blogs on various topics. The content provided here reflects my work, interests, and knowledge. While I strive to ensure the accuracy and reliability of the information presented, I do not make any guarantees regarding its completeness, suitability, or accuracy for specific purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Content Disclaimer</h2>
          <p className="text-gray-600">
            All content, including blog posts, tutorials, images, and project descriptions, is for informational purposes only. The views and opinions expressed are my own and do not represent those of any employer, client, or other entity I may be affiliated with. Readers should independently verify information and seek professional advice when necessary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">External Links Disclaimer</h2>
          <p className="text-gray-600">
            <strong>milanghimire.info.np</strong> may contain links to external websites or resources. These links are provided for convenience and informational purposes only. I am not responsible for the content, accuracy, or availability of these external sites. Visiting external links is at your own discretion, and I recommend reviewing the terms, privacy policies, and disclaimers of these websites before engaging with them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Advertisement Disclaimer</h2>
          <p className="text-gray-600">
            This website may feature advertisements, including those served by Google AdSense or other third-party networks. These advertisements help support the maintenance of this platform. However, I do not control the content, accuracy, or functionality of the ads displayed. Clicking on any advertisement will redirect you to the advertiser&apos;s website, and I am not responsible for any issues or losses resulting from interactions with these third-party sites.
          </p>
          <p className="text-gray-600">
            Google AdSense uses cookies to serve ads based on a user&apos;s previous visits to this site or other sites on the internet. Users can opt out of personalized advertising by visiting the <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Copyright and Intellectual Property</h2>
          <p className="text-gray-600">
            Unless explicitly stated otherwise, all content on <strong>milanghimire.info.np</strong>, including text, images, graphics, and code, is the intellectual property of the website owner. Unauthorized reproduction, modification, distribution, or use of this content is strictly prohibited. If you wish to use any part of this website&apos;s content, please contact me for permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="text-gray-600">
            I am not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of this website or the reliance on any content provided herein. This includes, but is not limited to, errors, inaccuracies, or interruptions in the availability of the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Privacy and Data Use</h2>
          <p className="text-gray-600">
            Your privacy is important to me. Any personal information collected through this website (e.g., through forms or subscriptions) will be handled in accordance with my <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>. I do not share your personal information with third parties without your explicit consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Consent</h2>
          <p className="text-gray-600">
            By using this website, you hereby consent to this disclaimer and agree to its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Changes to This Disclaimer</h2>
          <p className="text-gray-600">
            This disclaimer is subject to updates or modifications at any time. Any changes will be prominently posted on this page, along with an updated effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding this disclaimer, please feel free to contact me:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Email: <a href="mailto:milanghimireinfo@gmail.com" className="text-blue-600 hover:underline">milanghimireinfo@gmail.com</a></li>
            <li>Website: <Link href="/" className="text-blue-600 hover:underline">milanghimire.info.np</Link></li>
          </ul>
        </section>
      </div>
    </section>
  )
}