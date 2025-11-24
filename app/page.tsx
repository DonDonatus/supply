'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from './lib/servicesData';

export default function Home() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Container Background */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
        {/* Background image covering full section */}
        <div className="absolute inset-0">
          <Image
            src="/chain.jpg"
            alt="Shipping Containers"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-brand-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Supply Chain Strategy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Strategic consulting for modern supply chains. From optimization to risk management, we deliver results.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-brand-orange-dark transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Schedule Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Clients Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clients Heading */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-sm font-medium text-gray-900">
              Over <span className="text-brand-orange">100+ clients</span> All over the World
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="flex items-center justify-center gap-16 md:gap-24 lg:gap-32 mb-20">
            <div className="flex items-center justify-center">
              <Image src="/logo/nasa-logo.svg" alt="NASA" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/ustc.png" alt="USTC" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/airforce.png" alt="Air Force" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/africacom.png" alt="Air Force" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/mda.png" alt="MDA" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
          </div>

          {/* About Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                ABOUT US
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Supply Chain Strategy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We partner with organizations to optimize supply chain performance. Our seasoned team combines strategic thinking with practical execution across government, aerospace, defense, and commercial sectors.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-lg border-2 border-brand-orange px-6 py-3 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
              >
                Our Approach
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/abou.jpg"
                alt="Supply Chain Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Header and Images (2/5 width) */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Solutions for Modern Supply Chains
              </h2>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/work.jpg"
                    alt="Supply Chain Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/worker.jpg"
                    alt="Supply Chain Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/office.jpg"
                  alt="Warehouse Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Description and Services List (3/5 width) */}
            <div className="lg:col-span-3">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From network optimization to risk management, we deliver strategic solutions that drive efficiency, reduce costs, and strengthen your competitive advantage.
              </p>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-base border-2 border-brand-orange px-5 py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 mb-10"
              >
                Explore Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* What We Offer */}
              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                What We Offer
              </h3>

              <div className="space-y-3">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services?service=${service.id}`}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <span className="text-gray-900 font-normal text-base">{service.title}</span>
                    <div className="w-7 h-7 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                      <svg className="w-3.5 h-3.5 text-brand-orange group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </section>


      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Column - Header */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                TESTIMONIALS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Client Success Stories
              </h2>
            </div>

            {/* Right Column - Description & Button */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our clients across government, defense, aerospace, and commercial sectors have achieved measurable improvements in efficiency, risk mitigation, and cost savings.
              </p>
              <div>
                <Link
                  href="/successes"
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold text-base border-2 border-brand-orange px-5 py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
                >
                  View All Stories
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-900 text-base leading-relaxed mb-6">
                The consulting team is always helpful and available to answer any questions. Their strategic insights are consistently on point, which is crucial for our business operations and supply chain optimization.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/man.jpg"
                    alt="Thomas Pold"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Thomas Pold</p>
                  <p className="text-xs text-gray-600">Supply Chain Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-900 text-base leading-relaxed mb-6">
                We appreciate the strategic approach to supply chain risk management. The economic network analysis provided valuable insights that helped us identify and mitigate potential disruptions in our supply chain.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/woman.jpg"
                    alt="Jenny Morphy"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Jenny Morphy</p>
                  <p className="text-xs text-gray-600">VP of Supply Chain Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
