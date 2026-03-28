'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="L&L Contracting Group" width={40} height={40} className="h-10 w-auto" />
            <span className="font-bold text-lg hidden sm:inline">L&L Contracting</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              U.S. Veteran Owned
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Built on Trust. Backed by Service.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Long Branch's most trusted home improvement and contracting service. From roof repairs to landscaping, we bring military values of integrity and reliability to every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8">
              Get a Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 h-12 px-8">
              Contact Us
            </Button>
          </div>

          <p className="text-sm text-slate-500">
            Serving Long Branch and surrounding areas • Licensed & Insured
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-lg text-slate-600">Professional home improvement solutions you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '🧼', title: 'Gutter Cleaning', desc: 'Keep your gutters flowing properly with professional cleaning services' },
              { icon: '🔧', title: 'Minor Repairs', desc: 'Quick fixes and repairs handled with attention to detail' },
              { icon: '🏠', title: 'Roof Repairs', desc: 'Expert roof inspection and repair services for long-lasting protection' },
              { icon: '🌿', title: 'Landscaping', desc: 'Enhance your property with professional landscaping services' },
              { icon: '🗑️', title: 'Junk Removal', desc: 'Efficient and clean removal of unwanted items from your property' },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-slate-200 cursor-pointer"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About L&L Contracting Group</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in Long Branch, New Jersey, we&apos;ve built our reputation on honesty, hard work, and dependable service. As a U.S. Veteran Owned business, we bring the values of integrity, discipline, and commitment to every project we undertake.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that quality craftsmanship and professional service should go hand in hand. Our team treats every customer with respect and ensures that every job is completed to the highest standards. We&apos;re not just contractors—we&apos;re your neighbors committed to your satisfaction.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <span className="text-2xl">🇺🇸</span>
                  <div>
                    <p className="font-semibold text-blue-900">Veteran Owned & Operated</p>
                    <p className="text-sm text-blue-700">Serving with integrity and pride</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-lg p-8 text-white flex flex-col items-center justify-center h-80">
              <Image src="/logo.png" alt="L&L Logo" width={150} height={150} className="mb-4 filter drop-shadow-lg" />
              <p className="text-center text-lg font-semibold">L&L Contracting Group</p>
              <p className="text-center text-sm opacity-90 mt-2">Built on Trust. Backed by Service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Why Choose L&L Contracting Group?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Veteran Owned', desc: 'Military values of integrity, discipline, and reliability in every project' },
              { title: 'Local Service', desc: 'Proud to serve Long Branch and surrounding communities' },
              { title: 'Honest Estimates', desc: 'Transparent pricing with no hidden fees or surprise costs' },
              { title: 'Quality Craftsmanship', desc: 'Expert workmanship backed by years of experience' },
              { title: 'Responsive & Reliable', desc: 'Quick response times and dependable service you can count on' },
              { title: 'Customer Focused', desc: 'Your satisfaction is our priority, every time' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Get Your Free Estimate</h2>
            <p className="text-lg text-slate-600">Fill out the form below and we&apos;ll get back to you promptly</p>
          </div>

          <Card className="p-8 sm:p-10 border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-900 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="repairs">Minor Repairs</option>
                  <option value="roof">Roof Repairs</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="junk">Junk Removal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
                Request Free Estimate
              </Button>

              <p className="text-center text-sm text-slate-600 pt-4 border-t border-slate-200">
                We&apos;ll respond within 24 hours. Contact us directly at{' '}
                <a href="mailto:llcontractingnj@gmail.com" className="font-semibold text-blue-600 hover:text-blue-700">
                  llcontractingnj@gmail.com
                </a>
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let&apos;s discuss your project and see how we can help improve your home.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-12 px-8">
            Get Your Free Estimate Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="L&L Logo" width={40} height={40} className="h-10 w-auto" />
                <span className="font-bold text-white">L&L Contracting Group</span>
              </div>
              <p className="text-sm">Built on Trust. Backed by Service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Gutter Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition">Roof Repairs</a></li>
                <li><a href="#" className="hover:text-white transition">Landscaping</a></li>
                <li><a href="#" className="hover:text-white transition">Junk Removal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">Long Branch, NJ</p>
              <p className="text-sm">
                <a href="mailto:llcontractingnj@gmail.com" className="hover:text-white transition">
                  llcontractingnj@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 L&L Contracting Group. All rights reserved. U.S. Veteran Owned Business.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
