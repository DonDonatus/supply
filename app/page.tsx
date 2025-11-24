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
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-blue">
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transform Your Supply Chain Strategy
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
            Strategic consulting for modern supply chains. From optimization to risk management, we deliver results.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-brand-orange-dark transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Schedule Consultation
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Clients Showcase Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clients Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-base sm:text-lg font-medium text-gray-900">
              Over <span className="text-brand-orange">100+ clients</span> All over the World
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-24 mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center">
              <Image src="/logo/nasa-logo.svg" alt="NASA" width={100} height={100} className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/ustc.png" alt="USTC" width={100} height={100} className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/airforce.png" alt="Air Force" width={100} height={100} className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/africacom.png" alt="Air Force" width={100} height={100} className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center col-span-2 sm:col-span-1">
              <Image src="/logo/mda.png" alt="MDA" width={100} height={100} className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
            </div>
          </div>

          {/* About Section with Image */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                ABOUT US
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Transforming Supply Chain Strategy
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                We partner with organizations to optimize supply chain performance. Our seasoned team combines strategic thinking with practical execution across government, aerospace, defense, and commercial sectors.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm sm:text-base md:text-lg border-2 border-brand-orange px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
              >
                Our Approach
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Left Column - Header and Images (2/5 width) */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-3 sm:mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Expert Solutions for Modern Supply Chains
              </h2>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="relative h-32 sm:h-40 md:h-48 rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="/work.jpg"
                    alt="Supply Chain Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 sm:h-40 md:h-48 rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="/worker.jpg"
                    alt="Supply Chain Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 rounded-lg sm:rounded-xl overflow-hidden">
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
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                From network optimization to risk management, we deliver strategic solutions that drive efficiency, reduce costs, and strengthen your competitive advantage.
              </p>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm sm:text-base border-2 border-brand-orange px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 mb-6 sm:mb-8 md:mb-10"
              >
                Explore Our Services
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* What We Offer */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                What We Offer
              </h3>

              <div className="space-y-2 sm:space-y-3">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services?service=${service.id}`}
                    className="flex items-center justify-between p-2.5 sm:p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <span className="text-gray-900 font-normal text-sm sm:text-base">{service.title}</span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-orange group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start mb-8 sm:mb-10 md:mb-12">
            {/* Left Column - Header */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-3 sm:mb-4 uppercase tracking-wide">
                TESTIMONIALS
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Client Success Stories
              </h2>
            </div>

            {/* Right Column - Description & Button */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Our clients across government, defense, aerospace, and commercial sectors have achieved measurable improvements in efficiency, risk mitigation, and cost savings.
              </p>
              <div>
                <Link
                  href="/successes"
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm sm:text-base border-2 border-brand-orange px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
                >
                  View All Stories
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                The consulting team is always helpful and available to answer any questions. Their strategic insights are consistently on point, which is crucial for our business operations and supply chain optimization.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
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
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">Thomas Pold</p>
                  <p className="text-xs text-gray-600">Supply Chain Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                We appreciate the strategic approach to supply chain risk management. The economic network analysis provided valuable insights that helped us identify and mitigate potential disruptions in our supply chain.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
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
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">Jenny Morphy</p>
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
