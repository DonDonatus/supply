'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f0e8] text-gray-800 border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info - Takes 2 columns */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <Image
                src="/scv.png"
                alt="SCV Supply Chain"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-sm">
              Experts the experts turn to for strategic supply chain insights and solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/successes" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/support" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Connect</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/contacts" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/terms" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-700 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Office Location & Contact Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Office Location */}
            <div>
              <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-2">OFFICE LOCATION</h4>
              <p className="text-gray-700 text-xs sm:text-sm">Washington, DC</p>
              <p className="text-gray-700 text-xs sm:text-sm">3650 S Glebe Rd - Suite 665</p>
              <p className="text-gray-700 text-xs sm:text-sm">Arlington, VA 22202</p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-2">CONTACT</h4>
              <p className="text-gray-700 text-xs sm:text-sm">(703) 825-4031</p>
              <p className="text-gray-700 text-xs sm:text-sm">Monday - Friday, 9AM - 5PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-600 text-xs sm:text-sm">
              © {currentYear} Supply Chain Visions. All rights reserved.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="text-gray-700 hover:text-brand-orange transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-brand-orange transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-brand-orange transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
