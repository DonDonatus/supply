'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import Globe3D to avoid SSR issues with Three.js
const Globe3D = dynamic(() => import('../components/Globe3D'), { ssr: false });

export default function AboutPage() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

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
    'Afghanistan', 'Bahrain', 'Bangladesh', 'Brazil', 'Canada', 'Central African Republic',
    'Chad', 'Colombia', 'Curacao', 'Democratic Republic of the Congo', 'El Salvador',
    'Eritrea', 'Finland', 'France', 'Germany', 'Ghana', 'Honduras', 'India', 'Iraq',
    'Ivory Coast', 'Japan', 'Jordan', 'Kenya', 'Kuwait', 'Liberia', 'Malaysia',
    'Mauritania', 'Mexico', 'Netherlands', 'Niger', 'Panama', 'Philippines', 'Qatar',
    'Saudi Arabia', 'Senegal', 'Sierra Leone', 'South Korea', 'South Sudan', 'Spain',
    'Tunisia', 'United Arab Emirates', 'United States', 'Vietnam', 'Yemen', 'Zimbabwe'
  ];

  const teamLeaders = [
    { name: 'Shawn Winn', description: 'is an expert in business operations and transportation. He currently serves as a Director for Supply Chain Visions Inc. and manages projects and professional networks around the globe. His work includes supply chain and industrial base assessments for Maersk across the continent of Africa and the Departments of Defense and Commerce across the Middle East and Central Asia. Shawn holds a BBA from the College of William and Mary and an MBA from the University of Tennessee. He is a Certified Production and Inventory Control Manager with additional certifications in Lean Six Sigma/Continuous Process Improvement and supply chain technologies.', image: '/swin.png' },
    { name: 'Matt Hunt', description: 'has spent the last decade providing financial management and strategic enterprise support to clients throughout the Department of Defense. His focus has been on development and implementation of solutions for complex enterprise challenges. He is an expert of organizational studies, change management, enterprise/program communication strategy, process improvement, training, and technical analysis. He has extensive knowledge of audit sustainment and policies as it relates to audit readiness and accounting standards.', image: '/mhunt.png' },
    { name: 'Mike Rudolph', description: 'is a retired Marine Colonel with over 30 years of operational experience, proven leadership, and management success. He has worked around the globe solving business challenges, from small/local to regional and global reach. Mike has led organizations at all levels of complexity and responsibility to develop solutions that produced performance improvements and quantifiable return on investment by using proven leadership, management, and business processes. He is a writer for DC Velocity and a graduate of the University of Missouri, with advanced education from the University of North Carolina (UNC), Pennsylvania State University (Penn State), and Marine Corps University.', image: '/mrudolph.png' },
    { name: 'Rich Hardie', description: 'has 30 years\' experience managing operations & developing logistics & supply chain processes in military, government & commercial environments. He was AT&T\'s Logistics Manager for a cutting-edge Army R&D program. He provided consulting services to the DLA, DoD Deputy Chief Management Office & the Pentagon. He played a key role in the development & implementation of in-theater financial & contract business systems for the DoD & U.S. Army Central Command. He deployed to Afghanistan & Iraq as a Logistics Civilian Augmentation Program Support Officer. He holds an MS in Supply Chain & Acquisition Management from UMD.', image: '/rhardie.png' },
    { name: 'Gerry Brown', description: 'brings 30 years of experience in both large and small companies, public sector and private sector, both in the United States and internationally. He has been involved in several start-ups as a member of the management team. Gerry spent several years, as part of a US government economic development effort, working with businesses in Iraq and Afghanistan. Prior to joining Supply Chain Visions, Gerry held management roles in operations, finance, and sales and marketing at Chase Manhattan Bank, IBM, Accenture, HP and Black & Decker. He holds an MBA from the Yale School of Management, a BA from Amherst College, and an Advanced Certificate in Economics from the Fundacao Getulio Vargas in Rio De Janeiro, Brazil.', image: '/jbrown.png' },
    { name: 'Leila Hertzberg', description: 'is the Business Manager for Supply Chain Visions, coordinating administration, research, and responses. Leila has experience in academic, government, private sector, and nonprofit enterprises. Leila has planned and managed international conferences and academic exchanges around the world, including Washington, DC, Tokyo, Seoul, and Moscow, bringing together high-level government leaders to address strategic issues. With a Bachelor\'s from George Washington University in Sociology – minoring in Russian Language and Literature - and a Master\'s in International Affairs from George Washington, Leila brings a strategic perspective to global business issues. Leila is certified as a Program Management Professional (PMP). Leila edits scholarly books, journals, and conference papers on politics, economics, and military/strategic matters.', image: '/lhberg.png' },
    { name: 'Rose Lopez Keravuori', description: '(currently on a leave of absence) BG Keravuori is an expert in intelligence and military logistics, assigned to USAFRICOM J2 in Stuttgart, Germany. Previously, BG Keravuori served as Brigade Commander, 259th Expeditionary Military Intelligence Brigade. In the private sector, Rose founded Rose Solutions over a decade ago. Prior to connecting with Supply Chain Visions, BG Keravuori was a Director of Business Development for a large prime contractor in the Washington, DC area, with a focus on stability operations. Before the business development role, Rose held numerous positions, including Program Director with P&L responsibility. A graduate of West Point, Rose also has a Master\'s Degree in International Relations from the University of Oxford and Master\'s in Strategic Studies from the US Army War College.', image: '/rlopez.png' }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamLeaders.length / itemsPerPage);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
        <div className="absolute inset-0">
          <Image
            src="/about.jpg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across government, defense, and private sectors
          </p>
        </div>
      </section>

      {/* NAICS Codes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
              CERTIFICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              NAICS Codes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {naicsCodes.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-brand-blue text-lg font-bold mb-1">{item.code}</div>
                <p className="text-gray-900 text-sm font-normal">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Globe Visualization */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Globe3D />
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                GLOBAL REACH
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                We Work Where Others Won't
              </h2>
              <p className="text-gray-600 mb-6">
                Our team has delivered successful projects across 45+ countries spanning six continents.
              </p>

              {/* Countries list in columns */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {countries.map((country, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leaders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
              OUR TEAM
            </div>
          </div>

          {/* Team Grid - All members displayed */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {teamLeaders.map((leader, index) => (
              <button
                key={index}
                onClick={() => setSelectedMember(index)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Circular Profile Image */}
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-gray-300 transition-all duration-300">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Team Member Info */}
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 px-2">
                  {leader.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Modal for Team Member Details */}
        {selectedMember !== null && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-start justify-between rounded-t-2xl">
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-brand-orange">
                      <Image
                        src={teamLeaders[selectedMember].image}
                        alt={teamLeaders[selectedMember].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {teamLeaders[selectedMember].name}
                    </h3>
                    <p className="text-brand-blue font-medium">Team Leader</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-8 py-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">{teamLeaders[selectedMember].name}</span>{' '}
                  {teamLeaders[selectedMember].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}