import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
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

        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Effective Date: <strong>December 10, 2024</strong>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="text-gray-600">
            At <strong>milanghimire.info.np</strong>, your privacy is a top priority. This Privacy Policy explains how I collect, use, disclose, and safeguard your personal information in accordance with various privacy regulations, including:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>GDPR (General Data Protection Regulation - EU)</li>
            <li>CCPA (California Consumer Privacy Act - USA)</li>
            <li>CALOPPA (California Online Privacy Protection Act - USA)</li>
            <li>PIPEDA (Personal Information Protection and Electronic Documents Act - Canada)</li>
            <li>Australia&apos;s Privacy Act (1988)</li>
            <li>Nepal&apos;s Privacy Act (2018)</li>
            <li>UK Data Protection Act (2018 - England)</li>
          </ul>
          <p className="text-gray-600 mt-4">
            By accessing or using this website, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Information I Collect</h2>
          <p className="text-gray-600">
            When you visit <strong>milanghimire.info.np</strong>, the following types of information may be collected:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Personal Information:</strong> Information you provide directly, such as your name, email address, or GitHub username when completing forms or subscribing to newsletters.
            </li>
            <li>
              <strong>Usage Data:</strong> Automatically collected data, such as your IP address, browser type, operating system, and browsing behavior on this website.
            </li>
            <li>
              <strong>Cookies:</strong> Small files stored on your device to improve user experience and serve relevant advertisements.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Global Privacy Compliance</h2>
          <p className="text-gray-600">
            <strong>milanghimire.info.np</strong> strives to comply with international privacy standards. Here&apos;s how the policy aligns with specific regulations:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>GDPR (EU):</strong> You have the right to access, rectify, delete, or restrict the processing of your personal data. You may also withdraw consent or request data portability.
            </li>
            <li>
              <strong>CCPA (California, USA):</strong> California residents can request to know, delete, or opt out of the sale of their personal information without discrimination.
            </li>
            <li>
              <strong>CALOPPA (USA):</strong> This website clearly states its privacy practices, and users are informed of any updates to the Privacy Policy.
            </li>
            <li>
              <strong>PIPEDA (Canada):</strong> Personal information is handled with consent, and users can access, update, or withdraw consent regarding their data.
            </li>
            <li>
              <strong>Australia&apos;s Privacy Act:</strong> Personal data is collected and managed in compliance with the 13 Australian Privacy Principles (APPs).
            </li>
            <li>
              <strong>Nepal&apos;s Privacy Act:</strong> Personal data is processed with respect to confidentiality and privacy, following the data privacy and security guidelines established in Nepal.
            </li>
            <li>
              <strong>UK Data Protection Act:</strong> Personal data is processed in accordance with the UK GDPR and the Data Protection Act of 2018.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Your Privacy Rights</h2>
          <p className="text-gray-600">
            Depending on your jurisdiction, you may have the following privacy rights:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Access your personal information and obtain a copy.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Opt out of the processing of your personal information.</li>
            <li>Withdraw consent for data collection and processing.</li>
            <li>File a complaint with a relevant data protection authority.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking</h2>
          <p className="text-gray-600">
            Cookies are used to enhance user experience, analyze traffic, and display personalized advertisements. You can control or disable cookies through your browser settings. For more information, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
          <p className="text-gray-600">
            I use third-party services like Google AdSense and Google Analytics to provide and improve services. These services may collect and process data according to their respective privacy policies.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Google AdSense: <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
            </li>
            <li>
              Google Analytics: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding this Privacy Policy, please contact me:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Email: <a href="mailto:milanghimireinfo@gmail.com" className="text-blue-600 hover:underline">milanghimireinfo@gmail.com</a></li>
            <li>Website: <Link href="/" className="text-blue-600 hover:underline">milanghimire.info.np</Link></li>
          </ul>
        </section>

        <footer className="mt-8 border-t pt-4 text-gray-500 text-sm">
          <p>&copy; 2024 <Link href="/" className="text-blue-600 hover:underline">milanghimire.info.np</Link>. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}