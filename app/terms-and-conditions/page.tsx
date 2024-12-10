import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function TermsAndConditions() {
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

        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-700 mb-4">
          Effective Date: <strong>December 10, 2024</strong>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using <strong>milanghimire.info.np</strong>, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Use of the Website</h2>
          <p className="text-gray-600">
            The content on this website is provided for informational purposes only. You may not use this website or its content for any unlawful or prohibited purpose. By using this website, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Access the site content for personal and non-commercial use only.</li>
            <li>Not attempt to gain unauthorized access to any part of the website.</li>
            <li>Not engage in any activity that could harm, disrupt, or interfere with the website&apos;s functionality.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
          <p className="text-gray-600">
            All content on <strong>milanghimire.info.np</strong>, including text, images, graphics, code, and other materials, is the intellectual property of the website owner unless otherwise stated. Unauthorized reproduction, modification, or distribution of this content is strictly prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">User-Generated Content</h2>
          <p className="text-gray-600">
            If you submit any content (e.g., comments, suggestions, or feedback) to this website, you grant <strong>milanghimire.info.np</strong> a non-exclusive, royalty-free, worldwide license to use, modify, and display such content. You represent and warrant that you own or have the necessary rights to submit such content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Third-Party Links</h2>
          <p className="text-gray-600">
            This website may contain links to third-party websites for additional resources or advertisements. I am not responsible for the content, accuracy, or availability of these external sites. Accessing these links is at your own discretion, and I recommend reviewing their terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            All content on <strong>milanghimire.info.np</strong> is provided &quot;as is&quot; without any warranties, express or implied. I do not guarantee the accuracy, reliability, or completeness of the content. Your use of the website is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="text-gray-600">
            To the fullest extent permitted by law, I am not liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from your use of this website or its content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Privacy</h2>
          <p className="text-gray-600">
            Your use of this website is also governed by the <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which explains how your personal data is collected, used, and protected.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Termination</h2>
          <p className="text-gray-600">
            I reserve the right to terminate or restrict your access to this website at any time without prior notice if you violate these terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>
          <p className="text-gray-600">
            These terms and conditions may be updated or modified at any time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
          <p className="text-gray-600">
            These terms and conditions are governed by and construed in accordance with the laws of Nepal, and you irrevocably submit to the exclusive jurisdiction of the courts in Nepal for any disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these terms and conditions, please contact me:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Email: <a href="mailto:your-milanghimireinfo@gmail.com" className="text-blue-600 hover:underline">milanghimireinfo@gmail.com</a></li>
            <li>Website: <Link href="/" className="text-blue-600 hover:underline">milanghimire.info.np</Link></li>
          </ul>
        </section>

      </div>
    </section>
  )
}