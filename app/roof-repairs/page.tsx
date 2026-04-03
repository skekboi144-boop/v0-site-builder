'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section
      id={id}
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

const ROOF_SERVICES = [
  {
    title: 'Leak Detection & Repair',
    desc: 'Expert identification and repair of roof leaks to prevent water damage and protect your home.',
  },
  {
    title: 'Shingle Replacement',
    desc: 'Professional replacement of damaged or missing shingles to restore your roof&apos;s integrity.',
  },
  {
    title: 'Flashing Repair',
    desc: 'Repair and replacement of roof flashing around chimneys, vents, and skylights.',
  },
  {
    title: 'Storm Damage Repair',
    desc: 'Quick response to storm damage with thorough assessment and reliable repairs.',
  },
  {
    title: 'Roof Inspections',
    desc: 'Comprehensive roof inspections to identify potential issues before they become major problems.',
  },
  {
    title: 'Gutter Integration',
    desc: 'Ensure proper drainage with integrated gutter repairs and maintenance.',
  },
]

export default function RoofRepairsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="L&L Contracting Group" width={40} height={40} style={{ width: 40, height: 'auto' }} />
            <span className="font-bold text-white text-lg hidden sm:inline tracking-tight">L&L Contracting Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10" asChild>
              <Link href="/#contact">Contact</Link>
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/#contact">Free Estimate</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div
            className="mb-6 inline-block"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.1s', opacity: 0 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white text-balance"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.25s', opacity: 0 }}
          >
            Roof <span className="text-red-400">Repairs</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.4s', opacity: 0 }}
          >
            Expert roof inspection and repair services for lasting protection against the elements. We bring military precision and reliability to every roofing project.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.55s', opacity: 0 }}
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-13 px-10 text-base font-semibold" asChild>
              <Link href="/#contact">Get a Free Roof Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Roof Repair Services</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From minor leak repairs to major storm damage restoration, we provide comprehensive roofing solutions to keep your home protected year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROOF_SERVICES.map((service, idx) => (
              <AnimatedDiv key={idx} delay={idx * 80}>
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-slate-200 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-700 mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us for Roofing */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">Trusted Roof Repair Experts</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your roof is your home&apos;s first line of defense against the elements. At L&L Contracting Group, we understand the importance of a secure, well-maintained roof. Our team brings years of experience and military-grade attention to detail to every repair job.
              </p>
              <ul className="space-y-4">
                {[
                  'Free comprehensive roof inspections',
                  'Honest assessments and transparent pricing',
                  'Quality materials and expert craftsmanship',
                  'Quick response times for emergency repairs',
                  'Fully licensed and insured',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-10 text-white flex flex-col items-center justify-center h-80 shadow-2xl">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/10 mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-center text-lg font-bold tracking-tight">Protecting Your Home</p>
                <p className="text-center text-sm text-slate-300 mt-2">One Roof at a Time</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <AnimatedDiv className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Need a Roof Inspection?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-xl mx-auto">
            Don&apos;t wait for a small issue to become a costly problem. Contact us today for a free roof assessment.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-100 h-12 px-10 font-semibold text-base" asChild>
            <Link href="/#contact">Schedule Your Free Estimate</Link>
          </Button>
        </AnimatedDiv>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="L&L Logo" width={40} height={40} style={{ width: 40, height: 'auto' }} />
                <span className="font-bold text-white tracking-tight">L&L Contracting Group</span>
              </Link>
              <p className="text-sm leading-relaxed">Built on Trust. Backed by Service.</p>
              <p className="text-sm mt-2">U.S. Veteran Owned Business</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Gutter Cleaning</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Minor Repairs</Link></li>
                <li><Link href="/roof-repairs" className="hover:text-white transition-colors duration-200 text-white font-medium">Roof Repairs</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Landscaping</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Junk Removal</Link></li>
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
