// Service data structure
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  capabilities: string[];
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: 'economic-network-analysis',
    title: 'Economic Network Analysis',
    shortDescription: 'Comprehensive economic network analysis and development',
    tagline: 'Understanding the economic forces that drive your supply chain',
    description: 'SCV\'s network analysis and development engineers are committed to capitalize on their existing base of industry leaders and stakeholders. By developing an understanding of what makes each regional or industrial economy unique, SCV\'s experts can combine the strengths of the community with a fresh perspective on how to make those strengths stand out in an increasingly competitive national and global marketplace.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    capabilities: [
      'Strategy & Implementation Planning',
      'Industrial Base Management',
      'Market Diversification Support',
      'Ecosystem Analysis (SWOT, Geospatial Value Chain, Heat, etc.)',
      'Cluster Collaboration Programs',
      'Advocacy Creation',
      'Business Education & Advising',
      'Demand Identification & Generation'
    ],
    benefits: [
      'Data-driven decision making',
      'Competitive advantage in global markets',
      'Strengthened community partnerships',
      'Sustainable economic growth'
    ]
  },
  {
    id: 'strategy-enablement',
    title: 'Strategy Enablement',
    shortDescription: 'Strategic planning and implementation support',
    tagline: 'Empowering your organization with actionable strategies',
    description: 'Our strategy enablement services help organizations develop and execute comprehensive strategies that align with their business objectives and market realities.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    capabilities: [
      'Strategic Planning & Roadmapping',
      'Organizational Alignment',
      'Change Management',
      'Performance Metrics Development',
      'Stakeholder Engagement',
      'Risk Assessment & Mitigation'
    ],
    benefits: [
      'Clear strategic direction',
      'Improved organizational alignment',
      'Enhanced decision-making capabilities',
      'Measurable performance improvements'
    ]
  },
  {
    id: 'operational-alignment',
    title: 'Operational Alignment',
    shortDescription: 'Aligning operations with strategic objectives',
    tagline: 'Synchronizing your operations for maximum efficiency',
    description: 'We help organizations align their operational processes with strategic goals, ensuring seamless execution and optimal resource utilization.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    capabilities: [
      'Process Optimization',
      'Workflow Analysis & Design',
      'Resource Allocation',
      'Performance Monitoring',
      'Continuous Improvement Programs',
      'Cross-functional Coordination'
    ],
    benefits: [
      'Streamlined operations',
      'Reduced operational costs',
      'Improved productivity',
      'Better resource utilization'
    ]
  },
  {
    id: 'lifecycle-sustainment',
    title: 'Lifecycle Sustainment',
    shortDescription: 'Comprehensive lifecycle management solutions',
    tagline: 'Sustaining excellence throughout the entire lifecycle',
    description: 'Our lifecycle sustainment services ensure your systems and processes remain effective, efficient, and relevant throughout their operational life.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    capabilities: [
      'Maintenance Planning',
      'Asset Management',
      'Modernization Strategies',
      'End-of-Life Planning',
      'Obsolescence Management',
      'Sustainability Programs'
    ],
    benefits: [
      'Extended asset life',
      'Reduced total cost of ownership',
      'Improved system reliability',
      'Sustainable operations'
    ]
  },
  {
    id: 'knowledge-transfer',
    title: 'Knowledge Transfer',
    shortDescription: 'Expert knowledge sharing and capability building',
    tagline: 'Building internal expertise for long-term success',
    description: 'We facilitate effective knowledge transfer to build your organization\'s internal capabilities and ensure sustainable expertise development.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    capabilities: [
      'Training Program Development',
      'Mentorship Programs',
      'Documentation & Best Practices',
      'Skills Assessment',
      'Capability Building',
      'Succession Planning'
    ],
    benefits: [
      'Enhanced internal capabilities',
      'Reduced dependency on external resources',
      'Improved knowledge retention',
      'Stronger organizational resilience'
    ]
  },
  {
    id: 'supply-chain-risk-management',
    title: 'Supply Chain Risk Management',
    shortDescription: 'Comprehensive risk identification and mitigation',
    tagline: 'Protecting your supply chain from disruption',
    description: 'Our risk management services help identify, assess, and mitigate supply chain vulnerabilities to ensure business continuity and resilience.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    capabilities: [
      'Risk Assessment & Analysis',
      'Vulnerability Identification',
      'Mitigation Strategy Development',
      'Business Continuity Planning',
      'Supplier Risk Evaluation',
      'Crisis Management Support'
    ],
    benefits: [
      'Reduced supply chain disruptions',
      'Enhanced business resilience',
      'Improved supplier relationships',
      'Better risk visibility'
    ]
  },
  {
    id: 'expert-witness',
    title: 'Expert Witness',
    shortDescription: 'Professional expert testimony and litigation support',
    tagline: 'Authoritative expertise when it matters most',
    description: 'Our expert witness services provide authoritative testimony and analysis for legal proceedings involving supply chain, logistics, and operational matters.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    capabilities: [
      'Expert Testimony',
      'Technical Analysis',
      'Report Preparation',
      'Deposition Support',
      'Case Strategy Consultation',
      'Industry Standards Interpretation'
    ],
    benefits: [
      'Credible expert testimony',
      'Comprehensive technical analysis',
      'Clear, defensible opinions',
      'Extensive industry experience'
    ]
  }
];

export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id);
}

export function getAllServiceIds(): string[] {
  return servicesData.map(service => service.id);
}
