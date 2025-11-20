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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1e4d6b] to-[#3987b8]">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-4 animate-fadeInUp">WE'RE THE EXPERTS</span>
              <span className="block text-brand-orange animate-fadeInUp animation-delay-300">
                THE EXPERTS TURN TO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fadeInUp animation-delay-600">
              Delivering innovative supply chain solutions with confidence, clarity, and insight
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-900">
              <Link
                href="/services"
                className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-black mb-16">
            Our Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {servicesData.map((service, index) => (
              <Link
                key={service.id}
                href={`/services?service=${service.id}`}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-brand-blue group-hover:text-brand-orange transition-colors duration-300 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Text Split Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-bg.png"
                alt="Supply Chain Operations"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange to-transparent opacity-80"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Across regions and borders around the globe
              </h3>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                Our team of experts uses decades of industry-leading and nationally-recognized 
                expertise to empower the connections between{' '}
                <span className="text-brand-orange font-semibold italic">people</span>,{' '}
                <span className="text-brand-orange font-semibold italic">ideas</span>, and{' '}
                <span className="text-brand-orange font-semibold italic">things</span>.
              </p>
              <p className="text-white/80 leading-relaxed">
                We deliver innovative solutions to streamline your supply chain, enhance efficiency, 
                and drive growth in a rapidly changing world.
              </p>
              <Link
                href="/about"
                className="inline-block mt-8 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="relative py-32 overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                SUCCESS STORIES
              </h2>
              <div className="w-24 h-1 bg-brand-orange mb-8"></div>
              <Link
                href="/successes"
                className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                LEARN MORE
              </Link>
            </div>

            <div className="bg-black/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                We are the experts the experts turn to.
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Our <span className="text-brand-orange font-semibold">experts</span> are{' '}
                <span className="text-brand-orange font-semibold">strategists</span>,{' '}
                <span className="text-brand-orange font-semibold">planners</span>,{' '}
                <span className="text-brand-orange font-semibold">logisticians</span>,{' '}
                <span className="text-brand-orange font-semibold">scientists</span>,{' '}
                <span className="text-brand-orange font-semibold">trainers</span>,{' '}
                <span className="text-brand-orange font-semibold">educators</span>, and{' '}
                <span className="text-brand-orange font-semibold">data visualization professionals</span>.
              </p>
              <p className="text-white/80 leading-relaxed">
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
