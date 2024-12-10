'use client'

import { useState } from 'react'

export default function SourceCodeForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccessMessage('Thank you! You will receive an email with the source code soon.')
      setUsername('')
      setEmail('')
    }, 2000)
  }

  return (
    <div className="mt-8 p-1     overflow-hidden w-full ">
      <h3 className="text-lg font-bold mb-4"> Source Code</h3>
      <p className='text-gray-600'>Enter your Github username and email to access the source code. <br />

</p>
<form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row md:gap-2 mt-3">
  <div className="w-full">
    <input
      type="text"
      id="username"
      name="username"
      placeholder="GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      className="w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
  <div className="w-full">
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Submitting...' : 'Get Source Code'}
  </button>
</form>
      {successMessage && (
        <p className="mt-4 text-sm text-green-600">
          {successMessage}
        </p>
      )}
    </div>
  )
}