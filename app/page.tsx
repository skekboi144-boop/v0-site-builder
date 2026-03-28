'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </section>
  )
}

function AnimatedDiv({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Gutter Cleaning',
    desc: 'Keep your gutters flowing properly with professional cleaning and maintenance services.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Minor Repairs',
    desc: 'Quick, reliable fixes and repairs handled with attention to detail and quality materials.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Roof Repairs',
    desc: 'Expert roof inspection and repair services for lasting protection against the elements.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Landscaping',
    desc: 'Enhance your property&apos;s curb appeal with our professional landscaping services.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    title: 'Junk Removal',
    desc: 'Fast, efficient removal of unwanted items and debris from your home or property.',
  },
]

const WHY_US = [
  { title: 'Veteran Owned', desc: 'Military values of integrity, discipline, and reliability in every project' },
  { title: 'Local Service', desc: 'Proud to serve Long Branch and surrounding NJ communities' },
  { title: 'Honest Estimates', desc: 'Transparent pricing with no hidden fees or surprise costs' },
  { title: 'Quality Craftsmanship', desc: 'Expert workmanship backed by years of hands-on experience' },
  { title: 'Responsive & Reliable', desc: 'Quick response times and dependable service you can count on' },
  { title: 'Customer Focused', desc: 'Your satisfaction is our top priority, every single time' },
]

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
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="L&L Contracting Group" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="font-bold text-white text-lg hidden sm:inline tracking-tight">L&L Contracting Group</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="#contact">Free Estimate</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Construction workers on a roof"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay with blue tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div
            className="mb-6 inline-block"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              U.S. Veteran Owned &amp; Operated
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white text-balance"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.25s', opacity: 0 }}
          >
            Built on Trust.{' '}
            <span className="text-red-400">Backed by Service.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.4s', opacity: 0 }}
          >
            Long Branch&apos;s most trusted home improvement and contracting service. From roof repairs to landscaping, we bring military values of integrity and reliability to every project.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.55s', opacity: 0 }}
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-13 px-10 text-base font-semibold" asChild>
              <a href="#contact">Get a Free Estimate</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 h-13 px-10 text-base backdrop-blur-sm"
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>

          <p
            className="text-sm text-slate-400 mt-8"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.7s', opacity: 0 }}
          >
            Serving Long Branch and surrounding NJ areas &bull; Licensed &amp; Insured
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <div id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <AnimatedDiv className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">Professional home improvement solutions delivered with military precision and care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {SERVICES.map((service, idx) => (
              <AnimatedDiv key={idx} delay={idx * 80}>
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-slate-200 group cursor-pointer">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-700 mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>
      </div>

      {/* About Section */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">About L&L Contracting Group</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in Long Branch, New Jersey, we&apos;ve built our reputation on honesty, hard work, and dependable service. As a U.S. Veteran Owned business, we bring the values of integrity, discipline, and commitment to every project we undertake.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that quality craftsmanship and professional service should go hand in hand. Our team treats every customer with respect and ensures that every job is completed to the highest standards. We&apos;re not just contractors&mdash;we&apos;re your neighbors committed to your satisfaction.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-4 px-5 py-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-3xl">🇺🇸</div>
                  <div>
                    <p className="font-semibold text-blue-900">Veteran Owned &amp; Operated</p>
                    <p className="text-sm text-blue-600">Serving with integrity and pride</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-10 text-white flex flex-col items-center justify-center h-80 shadow-2xl">
                <Image src="/logo.png" alt="L&L Logo" width={140} height={140} className="mb-5 drop-shadow-2xl" />
                <p className="text-center text-lg font-bold tracking-tight">L&L Contracting Group</p>
                <p className="text-center text-sm text-slate-300 mt-2">Built on Trust. Backed by Service.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
        <AnimatedDiv className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-3">Why L&L</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose L&L Contracting Group?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US.map((item, idx) => (
              <AnimatedDiv key={idx} delay={idx * 70}>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>
      </div>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">Let&apos;s Talk</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Get Your Free Estimate</h2>
            <p className="text-lg text-slate-500">Fill out the form below and we&apos;ll get back to you promptly</p>
          </div>

          <Card className="p-8 sm:p-10 border-slate-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-800 mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white text-sm"
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
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-700 hover:bg-blue-800 text-white h-12 text-base font-semibold">
                Request Free Estimate
              </Button>

              <p className="text-center text-sm text-slate-500 pt-4 border-t border-slate-100">
                We respond within 24 hours. Email us at{' '}
                <a href="mailto:llcontractingnj@gmail.com" className="font-semibold text-blue-600 hover:text-blue-700">
                  llcontractingnj@gmail.com
                </a>
              </p>
            </form>
          </Card>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <AnimatedDiv className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-xl mx-auto">
            Let&apos;s discuss your project and see how we can improve your home. Free estimates, no pressure.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-100 h-12 px-10 font-semibold text-base" asChild>
            <a href="#contact">Get Your Free Estimate Today</a>
          </Button>
        </AnimatedDiv>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="L&L Logo" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="font-bold text-white tracking-tight">L&L Contracting Group</span>
              </div>
              <p className="text-sm leading-relaxed">Built on Trust. Backed by Service.</p>
              <p className="text-sm mt-2">U.S. Veteran Owned Business</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                {['Gutter Cleaning', 'Minor Repairs', 'Roof Repairs', 'Landscaping', 'Junk Removal'].map(s => (
                  <li key={s}><a href="#services" className="hover:text-white transition-colors duration-200">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <p className="text-sm mb-2">Long Branch, NJ</p>
              <p className="text-sm">
                <a href="mailto:llcontractingnj@gmail.com" className="hover:text-white transition-colors duration-200">
                  llcontractingnj@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-600">
            <p>&copy; 2024 L&L Contracting Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
