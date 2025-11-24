"use client";

import Link from "next/link";
import Image from 'next/image';
import { TrendingUp, Warehouse, Globe, Map, Palette, Mail, GraduationCap, BarChart3, Award, BookOpen, Receipt, Trophy } from 'lucide-react';

export default function SuccessesPage() {
    const successStories = [
        {
            title: "ScaleUp America",
            category: "US Small Business Administration",
            description:
                "In support of the SBA's mission to grow entrepreneurship and create jobs across America, the SCV team was contracted to operate three ScaleUp America sites in small and rural communities on the east coast. Our programs in Roanoke, VA, Williamsport, PA, and Portland, ME created hundreds of full-time jobs and sustainable profit growth for nearly 300 small businesses.",
            icon: TrendingUp,
            iconColor: { bg: 'bg-blue-100', text: 'text-blue-600' }
        },
        {
            title: "Warehousing Education and Resource Council",
            category: "Industry Standards Development",
            description:
                "The Supply Chain Visions team works hand in hand to develop the WERC standards for warehousing and distribution. Our team wrote the guides on warehouse management that have become industry standard. As part of our work with WERC, we regularly organize industry leaders to assess and review best practices to keep the industry on the cutting edge.",
            icon: Warehouse,
            iconColor: { bg: 'bg-green-100', text: 'text-green-600' }
        },
        {
            title: "IBEX Market Research for US Africa Command",
            category: "Defense Logistics Agency",
            description:
                "Leveraging our global network of resources, the SCV team successfully delivered detailed market research reports for multiple regions across Africa, Latin America, and the Caribbean. Our reports provided the DLA and its clients with valuable information on sources of nearly all classes of supply in each target area.",
            icon: Globe,
            iconColor: { bg: 'bg-purple-100', text: 'text-purple-600' }
        },
        {
            title: "IMCP Supply Chain Mapping",
            category: "US Small Business Administration",
            description:
                "The SCV team was contracted to assess three disrupted economies across the United States as part of the SBA's effort to support and grow the nation's vital manufacturing ecosystem. Our team reviewed the economic networks in northeast Tennessee, central Oklahoma, and southern Virginia to aid the SBA in creating resilient manufacturing supply chains.",
            icon: Map,
            iconColor: { bg: 'bg-orange-100', text: 'text-orange-600' }
        },
        {
            title: "Afghan Carpet Center of Excellence",
            category: "US Department of Commerce",
            description:
                "The SCV team mapped the national value system for hand-woven carpets in Afghanistan as part of a Department of Commerce effort to restore economic independence to rural communities in the country. We began with a diversified value chain, damaged by decades of conflict, and organized producers into a community of informed participants.",
            icon: Receipt,
            iconColor: { bg: 'bg-red-100', text: 'text-red-600' }
        },
        {
            title: "Skills Development",
            category: "United States Postal Service",
            description:
                "As the Postal Service continues to face erosion of their core business, combined with competitive pressure from players like FedEx, UPS, and Amazon, leadership has engaged SCV to help find and address opportunities through core skills development.",
            icon: Mail,
            iconColor: { bg: 'bg-indigo-100', text: 'text-indigo-600' }
        },
        {
            title: "Supply Chain Management School",
            category: "Veterans Affairs Acquisition Academy",
            description:
                "We deliver best-in-class education and professional development to the VA's supply chain workforce. Training happens at the VAAA campus in Maryland and over the web with distance-based learning. We address material and technical skills, VA-specific functional areas, and core activities.",
            icon: GraduationCap,
            iconColor: { bg: 'bg-pink-100', text: 'text-pink-600' }
        },
        {
            title: "Life Cycle Cost Analysis",
            category: "US Trade & Development Agency",
            description:
                "SCV designed and developed the Life Cycle Cost Analysis Curriculum. USTDA aims to enhance the skills of partner countries. Based on the success of the first iteration with five partner nations, USTDA has extended work with SCV through 2025.",
            icon: BarChart3,
            iconColor: { bg: 'bg-teal-100', text: 'text-teal-600' }
        },
    ];

    const awards = [
        'Supply Chain Brain "Great Supply Chain Partner"',
        "Who's Who in America, Who's Who in the World, Who's Who in Science and Engineering, and Who's Who in Executives and Professionals",
        'Department of Defense recognition for "Selfless Service to the Nation and the People of Iraq"',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                {/* Background success growth image at bottom */}
                <div className="absolute inset-0">
                    <Image
                        src="/success.png"
                        alt="Success Growth"
                        fill
                        className="object-cover "
                    />
                <div className="absolute inset-0 bg-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Successes
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Delivering excellence across industries and borders.
                        Explore our proven track record of transformative
                        projects.
                    </p>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {successStories.map((story, index) => {
                            const Icon = story.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${story.iconColor.bg} flex items-center justify-center`}>
                                            <Icon className={`w-6 h-6 ${story.iconColor.text}`} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md uppercase tracking-wide">
                                                {story.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {story.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Awards & Recognition Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-md bg-yellow-100 flex items-center justify-center">
                                <Trophy className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Awards & Recognition
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                            >
                                <p className="text-gray-700 leading-relaxed">
                                    {award}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Publications
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-8 border border-gray-200">
                        <p className="text-gray-900 text-lg font-semibold mb-4">
                            Quarterly Editorials
                        </p>
                        <p className="text-gray-600 mb-6">
                            Read our thought leadership and industry insights published in Supply Chain Quarterly.
                        </p>
                        <a
                            href="https://www.supplychainquarterly.com/blogs/1-reflections"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-medium transition-colors"
                        >
                            View Our Contributions
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
