import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='dark:bg-gray-900  pb-52 pt-40 '>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
    </section>
  )
}
