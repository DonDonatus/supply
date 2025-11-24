"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, GraduationCap, Briefcase } from 'lucide-react';

export default function ClientsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const clients = [
        { name: "United States Africa Command", sector: "public" },
        { name: "United States Air Force", sector: "public" },
        { name: "Missile Defense Agency", sector: "public" },
        { name: "U.S. Small Business Administration", sector: "public" },
        { name: "United States Transportation Command", sector: "public" },
        { name: "Operation Enduring Freedom", sector: "public" },
        { name: "United States Trade & Development Agency", sector: "public" },
        { name: "Department of Defense", sector: "public" },
        { name: "DoD Office of Economic Adjustment", sector: "public" },
        { name: "United States Marine Corps", sector: "public" },
        { name: "State of Pennsylvania", sector: "public" },
        { name: "NASA", sector: "public" },
        { name: "United States Postal Service", sector: "public" },
        { name: "Department of Veterans Affairs", sector: "public" },
        { name: "Department of Commerce", sector: "public" },
        { name: "Deloitte Consulting", sector: "private" },
        { name: "Lockheed Martin", sector: "private" },
        { name: "General Electric", sector: "private" },
        { name: "National Association of Electrical Distributors (NAED)", sector: "private" },
        { name: "Boeing", sector: "private" },
        { name: "PriceWaterhouse Coopers", sector: "private" },
        { name: "Rolls Royce", sector: "private" },
        { name: "Raytheon", sector: "private" },
        { name: "Pratt & Whitney", sector: "private" },
        { name: "GP Strategies", sector: "private" },
        { name: "BAE Systems", sector: "private" },
        { name: "Kohler", sector: "private" },
        { name: "Science Applications International Corporation", sector: "private" },
        { name: "Northrop Grumman", sector: "private" },
        { name: "Cisco Systems", sector: "private" },
        { name: "Auburn University", sector: "education" },
        { name: "University of Tennessee Knoxville", sector: "education" },
        { name: "Tufts University", sector: "education" },
        { name: "Wright State University", sector: "education" },
        { name: "University of North Texas", sector: "education" },
        { name: "Defense Acquisition University", sector: "education" },
        { name: "VA Acquisition Academy", sector: "education" },
    ];

    const testimonials = [
        {
            quote: "The consulting team is always helpful and available to answer any questions. Their strategic insights are consistently on point, which is crucial for our business operations and supply chain optimization.",
            author: "Thomas Pold",
            role: "Supply Chain Director",
        },
        {
            quote: "We appreciate the strategic approach to supply chain risk management. The economic network analysis provided valuable insights that helped us identify and mitigate potential disruptions in our supply chain.",
            author: "Jenny Morphy",
            role: "VP of Supply Chain Operations",
        },
        {
            quote: "Their expertise in logistics and supply chain management has been invaluable. The team consistently delivers innovative solutions that exceed expectations and drive measurable results.",
            author: "Client Representative",
            role: "Operations Manager",
        },
    ];

    const filters = [
        { id: 'all', label: 'All Clients' },
        { id: 'public', label: 'Government & Defense' },
        { id: 'private', label: 'Commercial Partners' },
        { id: 'education', label: 'Academic Institutions' },
    ];

    const filteredClients = activeFilter === 'all' 
        ? clients 
        : clients.filter(client => client.sector === activeFilter);

    const getSectorIcon = (sector: string) => {
        switch(sector) {
            case 'public':
                return <Building2 className="w-5 h-5" />;
            case 'private':
                return <Briefcase className="w-5 h-5" />;
            case 'education':
                return <GraduationCap className="w-5 h-5" />;
            default:
                return <Building2 className="w-5 h-5" />;
        }
    };

    const getSectorColor = (sector: string) => {
        switch(sector) {
            case 'public':
                return 'from-blue-50 to-blue-100 border-brand-blue/20 hover:border-brand-blue/40';
            case 'private':
                return 'from-orange-50 to-orange-100 border-brand-orange/20 hover:border-brand-orange/40';
            case 'education':
                return 'from-blue-50 to-blue-100 border-brand-blue/20 hover:border-brand-blue/40';
            default:
                return 'from-gray-50 to-gray-100 border-gray-200 hover:border-gray-300';
        }
    };

    const getSectorIconColor = (sector: string) => {
        switch(sector) {
            case 'public':
                return 'text-brand-blue bg-brand-blue/10';
            case 'private':
                return 'text-brand-orange bg-brand-orange/10';
            case 'education':
                return 'text-brand-blue bg-brand-blue/10';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/client.jpg"
                        alt="Our Clients"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Our Clients
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Trusted by leading organizations across government, defense, and private sectors
                    </p>
                </div>
            </section>

            {/* Clients Grid Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <motion.div 
                        className="flex flex-wrap gap-3 justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeFilter === filter.id
                                        ? 'bg-brand-blue text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Clients Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredClients.map((client, index) => (
                                <motion.div
                                    key={client.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: index * 0.02
                                    }}
                                    whileHover={{ 
                                        scale: 1.02,
                                        y: -4
                                    }}
                                    className={`bg-gradient-to-br ${getSectorColor(client.sector)} rounded-xl p-4 transition-all duration-200 border-2 cursor-pointer group`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${getSectorIconColor(client.sector)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            {getSectorIcon(client.sector)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-900 text-sm font-semibold leading-snug">
                                                {client.name}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Client Success Stories
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                            Our clients across government, defense, aerospace, and commercial sectors have achieved measurable improvements in efficiency, risk mitigation, and cost savings.
                        </p>
                    </motion.div>

                    {/* Testimonials Grid - Horizontal */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-4">
                                    <svg
                                        className="w-10 h-10 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-gray-900 text-sm leading-relaxed mb-6">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark flex-shrink-0"></div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}