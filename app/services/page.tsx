'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const servicesData = [
  {
    id: 'economic-network-analysis',
    title: 'Economic Network Analysis',
    tagline: 'Understanding the economic forces that drive your supply chain',
    description: "SCV's network analysis and development engineers are committed to capitalize on their existing base of industry leaders and stakeholders. By developing an understanding of what makes each regional or industrial economy unique, SCV's experts can combine the strengths of the community with a fresh perspective on how to make those strengths stand out in an increasingly competitive national and global marketplace.",
    capabilities: [
      'Strategy & Implementation Planning',
      'Industrial Base Management',
      'Market Diversification Support',
      'Ecosystem Analysis (SWOT, Geospatial Value Chain, Heat, etc.)',
      'Cluster Collaboration Programs',
      'Advocacy Creation',
      'Business Education & Advising',
      'Demand Identification & Generation'
    ]
  },
  {
    id: 'strategy-enablement',
    title: 'Strategy Enablement',
    tagline: 'Empowering your organization with actionable strategies',
    description: 'Our strategy enablement services help organizations develop and execute comprehensive strategies that align with their business objectives and market realities.',
    capabilities: [
      'Strategic Planning & Roadmapping',
      'Organizational Alignment',
      'Change Management',
      'Performance Metrics Development',
      'Stakeholder Engagement',
      'Risk Assessment & Mitigation'
    ]
  },
  {
    id: 'operational-alignment',
    title: 'Operational Alignment',
    tagline: 'Synchronizing your operations for maximum efficiency',
    description: 'We help organizations align their operational processes with strategic goals, ensuring seamless execution and optimal resource utilization.',
    capabilities: [
      'Process Optimization',
      'Workflow Analysis & Design',
      'Resource Allocation',
      'Performance Monitoring',
      'Continuous Improvement Programs',
      'Cross-functional Coordination'
    ]
  },
  {
    id: 'lifecycle-sustainment',
    title: 'Lifecycle Sustainment',
    tagline: 'Sustaining excellence throughout the entire lifecycle',
    description: 'Our lifecycle sustainment services ensure your systems and processes remain effective, efficient, and relevant throughout their operational life.',
    capabilities: [
      'Maintenance Planning',
      'Asset Management',
      'Modernization Strategies',
      'End-of-Life Planning',
      'Obsolescence Management',
      'Sustainability Programs'
    ]
  },
  {
    id: 'knowledge-transfer',
    title: 'Knowledge Transfer',
    tagline: 'Building internal expertise for long-term success',
    description: 'We facilitate effective knowledge transfer to build your organization\'s internal capabilities and ensure sustainable expertise development.',
    capabilities: [
      'Training Program Development',
      'Mentorship Programs',
      'Documentation & Best Practices',
      'Skills Assessment',
      'Capability Building',
      'Succession Planning'
    ]
  },
  {
    id: 'supply-chain-risk-management',
    title: 'Supply Chain Risk Management',
    tagline: 'Protecting your supply chain from disruption',
    description: 'Our risk management services help identify, assess, and mitigate supply chain vulnerabilities to ensure business continuity and resilience.',
    capabilities: [
      'Risk Assessment & Analysis',
      'Vulnerability Identification',
      'Mitigation Strategy Development',
      'Business Continuity Planning',
      'Supplier Risk Evaluation',
      'Crisis Management Support'
    ]
  },
  {
    id: 'expert-witness',
    title: 'Expert Witness',
    tagline: 'Authoritative expertise when it matters most',
    description: 'Our expert witness services provide authoritative testimony and analysis for legal proceedings involving supply chain, logistics, and operational matters.',
    capabilities: [
      'Expert Testimony',
      'Technical Analysis',
      'Report Preparation',
      'Deposition Support',
      'Case Strategy Consultation',
      'Industry Standards Interpretation'
    ]
  }
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate through services every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % servicesData.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeService = servicesData[activeIndex];

  const handleServiceClick = (index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
        <div className="absolute inset-0">
          <Image
            src="/service.jpg"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive supply chain solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Column - Service List */}
            <div className="space-y-2">
              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-brand-blue bg-brand-blue/5 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                      activeIndex === index 
                        ? 'bg-brand-blue text-white' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold mb-0.5 transition-colors ${
                        activeIndex === index ? 'text-brand-blue' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{service.tagline}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column - Service Details */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div
                className={`transition-all duration-300 ${
                  isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md mb-2 uppercase tracking-wide">
                    {activeService.title}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {activeService.tagline}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    Key Capabilities
                  </h3>
                  <div className="grid gap-2">
                    {activeService.capabilities.map((capability, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 bg-gray-50 rounded-md p-2.5 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5">
                          <svg className="w-2 h-2 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-900 text-xs font-normal flex-1 leading-relaxed">
                          {capability}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 flex items-center gap-1.5">
                  {servicesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-brand-blue w-6' : 'bg-gray-300 w-1'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}