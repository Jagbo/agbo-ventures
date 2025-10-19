'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Button } from '@/components/button'
import { useState } from 'react'

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.',
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        })
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-16">
            <Subheading>Contact Us</Subheading>
            <Heading as="h1" className="mt-2">
              Get in touch
            </Heading>
            <p className="mt-6 max-w-3xl text-xl/8 text-gray-950/75">
              Have a question or want to work with us? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
        </Container>
      </div>

      <main className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-950/5 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-semibold text-gray-950"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-3 block w-full rounded-xl border border-gray-300 px-5 py-4 text-base text-gray-950 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold text-gray-950"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-3 block w-full rounded-xl border border-gray-300 px-5 py-4 text-base text-gray-950 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-base font-semibold text-gray-950"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-3 block w-full rounded-xl border border-gray-300 px-5 py-4 text-base text-gray-950 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950/20"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-gray-950"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-3 block w-full rounded-xl border border-gray-300 px-5 py-4 text-base text-gray-950 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950/20 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`rounded-xl p-5 text-base font-medium ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 ring-1 ring-green-200'
                        : 'bg-red-50 text-red-800 ring-1 ring-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-[200px] justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Additional info section */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-semibold text-gray-950">
                  Quick Response
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-semibold text-gray-950">
                  Partnerships
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Interested in partnering? We're always looking for innovative collaborations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

