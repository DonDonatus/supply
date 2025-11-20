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
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1e4d6b] to-[#3987b8]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 transform ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8 leading-tight">
              <span className="block mb-3 md:mb-4 text-white animate-fadeInUp">WE'RE THE EXPERTS</span>
              <span className="block bg-gradient-to-r from-brand-orange via-[#ff9d4d] to-brand-orange-dark bg-clip-text text-transparent animate-fadeInUp animation-delay-300">
                THE EXPERTS TURN TO
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-light animate-fadeInUp animation-delay-600">
              Delivering innovative supply chain solutions with confidence, clarity, and insight
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeInUp animation-delay-900">
              <Link
                href="/services"
                className="group px-10 py-5 bg-brand-orange text-white font-semibold text-lg rounded-xl hover:bg-brand-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Our Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contacts"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-black mb-3 md:mb-4">
              Our Expertise
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
              Comprehensive solutions tailored to your supply chain needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <Link
                key={service.id}
                href={`/services?service=${service.id}`}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon with gradient background */}
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 group-hover:from-brand-orange/10 group-hover:to-brand-orange/5 transition-all duration-500">
                    <div className="text-brand-blue group-hover:text-brand-orange transition-colors duration-500 transform group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 font-normal">
                    {service.shortDescription}
                  </p>
                  
                  {/* Hover arrow indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Text Split Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/hero-bg.png"
                alt="Supply Chain Operations"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/60 to-transparent"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 md:mb-6 leading-tight">
                Across regions and borders around the globe
              </h3>
              <div className="w-16 md:w-20 h-1 bg-brand-orange mb-5 md:mb-6"></div>
              <p className="text-base md:text-lg text-white/90 mb-4 md:mb-5 leading-relaxed font-normal">
                Our team of experts uses decades of industry-leading and nationally-recognized 
                expertise to empower the connections between{' '}
                <span className="text-brand-orange font-semibold">people</span>,{' '}
                <span className="text-brand-orange font-semibold">ideas</span>, and{' '}
                <span className="text-brand-orange font-semibold">things</span>.
              </p>
              <p className="text-white/80 leading-relaxed mb-8 font-light">
                We deliver innovative solutions to streamline your supply chain, enhance efficiency, 
                and drive growth in a rapidly changing world.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/success-bg.png"
            alt="Success Stories Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3987b8]/95 to-[#2d6a94]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-5 md:mb-6 leading-tight">
                SUCCESS STORIES
              </h2>
              <div className="w-20 md:w-24 h-1.5 bg-brand-orange mb-8 md:mb-10"></div>
              <Link
                href="/successes"
                className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                LEARN MORE
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-black/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 md:mb-8 leading-tight">
                We are the experts the experts turn to.
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-5 md:mb-6 font-normal">
                Our <span className="text-brand-orange font-semibold">experts</span> are{' '}
                <span className="text-brand-orange font-semibold">strategists</span>,{' '}
                <span className="text-brand-orange font-semibold">planners</span>,{' '}
                <span className="text-brand-orange font-semibold">logisticians</span>,{' '}
                <span className="text-brand-orange font-semibold">scientists</span>,{' '}
                <span className="text-brand-orange font-semibold">trainers</span>,{' '}
                <span className="text-brand-orange font-semibold">educators</span>, and{' '}
                <span className="text-brand-orange font-semibold">data visualization professionals</span>.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                With more than 25 years of experience and are published across government, 
                business, aerospace, and defense.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
