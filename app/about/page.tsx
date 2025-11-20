'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const naicsCodes = [
    { code: '541330', name: 'ENGINEERING SERVICES' },
    { code: '541610', name: 'MANAGEMENT CONSULTING SERVICES' },
    { code: '541611', name: 'ADMINISTRATIVE MANAGEMENT & GENERAL MANAGEMENT CONSULTING SERVICES' },
    { code: '541613', name: 'MARKETING CONSULTING SERVICES' },
    { code: '541614', name: 'PROCESS, PHYSICAL DISTRIBUTION, & LOGISTICS CONSULTING SERVICES' },
    { code: '541690', name: 'ECONOMIC CONSULTING SERVICES' },
    { code: '611430', name: 'PROFESSIONAL AND MANAGEMENT DEVELOPMENT TRAINING' },
    { code: '611710', name: 'EDUCATIONAL SUPPORT SERVICES' },
  ];

  const countries = [
    { name: 'Afghanistan', flag: '🇦🇫' },
    { name: 'Bahrain', flag: '🇧🇭' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Central African Republic', flag: '🇨🇫' },
    { name: 'Chad', flag: '🇹🇩' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Curacao', flag: '🇨🇼' },
    { name: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { name: 'El Salvador', flag: '🇸🇻' },
    { name: 'Eritrea', flag: '🇪🇷' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Honduras', flag: '🇭🇳' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Iraq', flag: '🇮🇶' },
    { name: 'Ivory Coast', flag: '🇨🇮' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Jordan', flag: '🇯🇴' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Liberia', flag: '🇱🇷' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Mauritania', flag: '🇲🇷' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Niger', flag: '🇳🇪' },
    { name: 'Panama', flag: '🇵🇦' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Senegal', flag: '🇸🇳' },
    { name: 'Sierra Leone', flag: '🇸🇱' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'South Sudan', flag: '🇸🇸' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Tunisia', flag: '🇹🇳' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Yemen', flag: '🇾🇪' },
    { name: 'Zimbabwe', flag: '🇿🇼' }
  ];

  const teamLeaders = [
    { name: 'Shawn Winn', title: 'Team Leader', description: 'is an expert in business operations and transportation. He currently serves as a Director for Supply Chain Visions Inc. and manages projects and professional networks around the globe. His work includes supply chain and industrial base assessments for Maersk across the continent of Africa and the Departments of Defense and Commerce across the Middle East and Central Asia.  Shawn holds a BBA from the College of William and Mary and an MBA from the University of Tennessee. He is a Certified Production and Inventory Control Manager with additional certifications in Lean Six Sigma/Continuous Process Improvement and supply chain technologies.', image: '/swin.png' },
    { name: 'Matt Hunt', title: 'Team Leader', description: 'has spent the last decade providing financial management and strategic enterprise support to clients throughout the Department of Defense. His focus has been on development and implementation of solutions for complex enterprise challenges. He is an expert of organizational studies, change management, enterprise/program communication strategy, process improvement, training, and technical analysis. He has extensive knowledge of audit sustainment and policies as it relates to audit readiness and accounting standards.', image: '/mhunt.png' },
    { name: 'Mike Rudolph', title: 'Team Leader', description: 'is a retired Marine Colonel with over 30 years of operational experience, proven leadership, and management success.  He has worked around the globe solving business challenges, from small/local to regional and global reach.  Mike has led organizations at all levels of complexity and responsibility to develop solutions that produced performance improvements and quantifiable return on investment by using proven leadership, management, and business processes. He is a writer for DC Velocity and a graduate of the University of Missouri, with advanced education from the University of North Carolina (UNC), Pennsylvania State University (Penn State), and Marine Corps University. ', image: '/mrudolph.png' },
    { name: 'Rich Hardie', title: 'Team Leader', description: 'has 30 years’ experience managing operations & developing logistics & supply chain processes in military, government & commercial environments.  He was AT&T’s Logistics Manager for a cutting-edge Army R&D program. He provided consulting services to the DLA, DoD Deputy Chief Management Office & the Pentagon. He played a key role in the development & implementation of in-theater financial & contract business systems for the DoD & U.S. Army Central Command. He deployed to Afghanistan & Iraq as a Logistics Civilian Augmentation Program Support Officer. He holds an MS in Supply Chain & Acquisition Management from UMD.', image: '/rhardie.png' },
    { name: 'Gerry Brown', title: 'Team Leader', description: 'brings 30 years of experience in both large and small companies, public sector and private sector, both in the United States and internationally.  He has been involved in several start-ups as a member of the management team. Gerry spent several years, as part of a US government economic development effort, working with businesses in Iraq and Afghanistan. Prior to joining Supply Chain Visions, Gerry held management roles in operations, finance, and sales and marketing at Chase Manhattan Bank, IBM, Accenture, HP and Black & Decker. He holds an MBA from the Yale School of Management, a BA from Amherst College, and an Advanced Certificate in Economics from the Fundacao Getulio Vargas  in Rio De Janeiro, Brazil.', image: '/jbrown.png' },
    { name: 'Leila Hertzberg', title: 'Team Leader', description: 'is the Business Manager for Supply Chain Visions, coordinating administration, research, and responses.  Leila has experience in academic, government, private sector, and nonprofit enterprises.  Leila has planned and managed international conferences and academic exchanges around the world, including Washington, DC, Tokyo, Seoul, and Moscow, bringing together high-level government leaders to address strategic issues.  With a Bachelor’s from George Washington University in Sociology – minoring in Russian Language and Literature - and a Master’s in International Affairs from George Washington, Leila brings a strategic perspective to global business issues. Leila is certified as a Program Management Professional (PMP).  Leila edits scholarly books, journals, and conference papers on politics, economics, and military/strategic matters.', image: '/lhberg.png' },
    { name: 'Rose Lopez Keravuori', title: 'Team Leader', description: '(currently on a leave of absence) BG Keravuori is an expert in intelligence and military logistics, assigned to USAFRICOM J2 in Stuttgart, Germany. Previously, BG Keravuori served as Brigade Commander, 259th Expeditionary Military Intelligence Brigade.  In the private sector, Rose founded Rose Solutions over a decade ago.  Prior to connecting with Supply Chain Visions, BG Keravuori was a Director of Business Development for a large prime contractor in the Washington, DC area, with a focus on stability operations. Before the business development role, Rose held numerous positions, including Program Director with P&L responsibility.  A graduate of West Point, Rose also has a Master’s Degree in International Relations from the University of Oxford and Master’s in Strategic Studies from the US Army War College. ', image: '/rlopez.png' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-[#1e4d6b] to-[#3987b8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">What We Do</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-8 animate-fadeInUp animation-delay-200"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
            Across regions and borders around the globe, our team of experts uses decades of 
            industry-leading and nationally-recognized expertise to empower the connections between{' '}
            <span className="text-brand-orange font-semibold italic">people</span>,{' '}
            <span className="text-brand-orange font-semibold italic">ideas</span>, and{' '}
            <span className="text-brand-orange font-semibold italic">things</span>.
          </p>
        </div>
      </section>

      {/* NAICS Codes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">NAICS Codes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified capabilities across multiple industry classifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {naicsCodes.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-2xl font-bold text-brand-blue mb-2">{item.code}</div>
                <div className="text-sm text-gray-700 leading-relaxed">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section with Animated Flags */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-8">
              We Work Where Others Won't
            </h2>
            <p className="text-center text-gray-600 mb-8">Some of the countries we've touched:</p>
            
            {/* Animated Flag Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4" style={{ animation: 'scroll-left 30s linear infinite' }}>
                {[...countries, ...countries].map((country, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center gap-2"
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-md p-3 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-4xl">{country.flag}</span>
                    </div>
                    <span className="text-xs text-gray-600 text-center w-24 truncate">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leaders Section with Card Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Our Team Leaders</h2>
            <p className="text-gray-600">Meet the experts driving our success</p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setCurrentTeamIndex(Math.max(0, currentTeamIndex - 3))}
              disabled={currentTeamIndex === 0}
              className="p-3 rounded-full bg-brand-blue text-white hover:bg-brand-dark-blue disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="Previous team members"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-sm text-gray-600 font-medium">
              {Math.floor(currentTeamIndex / 3) + 1} / {Math.ceil(teamLeaders.length / 3)}
            </span>
            
            <button
              onClick={() => setCurrentTeamIndex(Math.min(teamLeaders.length - 3, currentTeamIndex + 3))}
              disabled={currentTeamIndex >= teamLeaders.length - 3}
              className="p-3 rounded-full bg-brand-blue text-white hover:bg-brand-dark-blue disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label="Next team members"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Team Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamLeaders.slice(currentTeamIndex, currentTeamIndex + 3).map((leader, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-brand-orange transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Team Member Image */}
                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                
                {/* Team Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-black mb-2">{leader.name}</h3>
                  <div className="w-16 h-1 bg-brand-orange mb-4"></div>
                  <p className="text-sm text-brand-blue font-semibold mb-4 uppercase tracking-wide">{leader.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-6">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(teamLeaders.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeamIndex(index * 3)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentTeamIndex / 3) === index 
                    ? 'w-8 bg-brand-orange' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
