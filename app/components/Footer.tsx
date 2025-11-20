'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/scv.png"
                alt="SCV Supply Chain"
                width={150}
                height={50}
                className="h-12 w-auto invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Delivering innovative supply chain solutions with confidence, clarity, and insight across regions and borders around the globe.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-brand-orange flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-brand-orange flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/successes" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  Our Successes
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services?service=supply-chain-consulting" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  Supply Chain Consulting
                </Link>
              </li>
              <li>
                <Link href="/services?service=logistics-management" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  Logistics Management
                </Link>
              </li>
              <li>
                <Link href="/services?service=training-development" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all duration-200"></span>
                  Training & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@scvsupplychain.com" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
                  info@scvsupplychain.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15550000000" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
                  +1 (555) 000-0000
                </a>
              </li>
              <li>
                <Link href="/contacts" className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-brand-orange text-white font-semibold text-sm rounded-xl hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light">
              © {currentYear} Supply Chain Visions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
