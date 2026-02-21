import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Partners = () => {
    const [activeType, setActiveType] = useState('All');

    // Get partners from siteContent
    const partners = siteContent.partners || [];

    // Dynamically generate partner types from actual data
    const partnerTypes = [
        { name: 'All', count: partners.length, icon: '🤝', color: 'bg-amber-50 text-amber-700' },
        ...Array.from(new Set(partners.map(p => p.type))).map(type => ({
            name: type,
            count: partners.filter(p => p.type === type).length,
            icon: type === 'Government' ? '🏛️' :
                type === 'Foundation' ? '🎯' :
                    type === 'Corporate' ? '💼' :
                        type === 'Research' ? '🔬' :
                            type === 'Research Institute' ? '🔬' :
                                type === 'Cooperative' ? '🤝' :
                                    type === 'Worker Union' ? '⚖️' :
                                        type === 'Community Organization' ? '👥' :
                                            type === 'Network' ? '🌐' : '🌍',
            color: type === 'Government' ? 'bg-emerald-50 text-emerald-700' :
                type === 'Foundation' ? 'bg-amber-50 text-amber-700' :
                    type === 'Corporate' ? 'bg-rose-50 text-rose-700' :
                        type === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                            type === 'Research Institute' ? 'bg-indigo-50 text-indigo-700' :
                                type === 'Cooperative' ? 'bg-amber-50 text-amber-700' :
                                    type === 'Worker Union' ? 'bg-rose-50 text-rose-700' :
                                        type === 'Community Organization' ? 'bg-emerald-50 text-emerald-700' :
                                            type === 'Network' ? 'bg-indigo-50 text-indigo-700' :
                                                'bg-gray-50 text-gray-700'
        }))
    ];

    // Tier colors
    const tierColors = {
        'Strategic Partner': 'bg-emerald-50 text-emerald-700',
        'Funding Partner': 'bg-indigo-50 text-indigo-700',
        'Technical Partner': 'bg-amber-50 text-amber-700',
        'Program Partner': 'bg-rose-50 text-rose-700',
        'Research Partner': 'bg-purple-50 text-purple-700',
        'Community Partner': 'bg-amber-50 text-amber-700'
    };

    // Filter partners by type
    const filteredPartners = activeType === 'All'
        ? partners
        : partners.filter(p => p.type === activeType);

    return (
        <div>
            {/* Hero Section - Spacious & Centered */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 min-h-[90vh] flex items-center py-32 lg:py-40 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/20 to-emerald-100/20 rounded-full filter blur-3xl opacity-20"></div>

                {/* Additional subtle decorative elements */}
                <div className="absolute top-60 left-10 w-32 h-32 border-4 border-amber-200/30 rounded-full"></div>
                <div className="absolute bottom-60 right-10 w-40 h-40 border-4 border-emerald-200/30 rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumbs - Centered */}
                        <nav className="flex items-center justify-center space-x-2 text-sm mb-8 text-gray-500">
                            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 font-medium">Partners</span>
                        </nav>

                        {/* Badge - Centered */}
                        <div className="inline-flex items-center justify-center mb-12">
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-amber-100">
                                ✦ Collaborating for Impact
                            </span>
                        </div>

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">Our</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Partners
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Collaborating with organizations across Africa to amplify our impact in digital rights and mental health.
                        </p>

                        {/* Scroll indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                            <div className="flex flex-col items-center space-y-2 text-gray-400">
                                <span className="text-xs uppercase tracking-wider">Scroll</span>
                                <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                                    <div className="w-1 h-2 bg-gradient-to-b from-amber-500 to-emerald-500 rounded-full mt-2 animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Quick overview */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-gray-900">{partners.length}</div>
                            <div className="text-sm text-gray-500">Total Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">
                                {new Set(partners.map(p => p.type)).size}
                            </div>
                            <div className="text-sm text-gray-500">Partner Types</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">
                                {partners.filter(p => p.impact).length}
                            </div>
                            <div className="text-sm text-gray-500">Active Impact</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">
                                {new Date().getFullYear() - Math.min(...partners.map(p => parseInt(p.partnershipYear) || 2024))}+
                            </div>
                            <div className="text-sm text-gray-500">Years of Collaboration</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Bar - Centered */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center mb-4">Filter by Type</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {partnerTypes.map((type) => (
                            <button
                                key={type.name}
                                onClick={() => setActiveType(type.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeType === type.name
                                    ? 'bg-gray-900 text-white'
                                    : `${type.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{type.icon}</span>
                                {type.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeType === type.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/60 text-gray-600'
                                }`}>
                                    {type.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="pt-8 pb-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-gray-500">
                            Showing <span className="font-semibold text-gray-900">{filteredPartners.length}</span> partners
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid - 4 Columns */}
            <section className="py-8 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPartners.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {filteredPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all p-5 hover:border-amber-200"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        {/* Logo/Initials */}
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                                            {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                        </div>

                                        {/* Partnership Tier Badge */}
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${tierColors[partner.tier] || 'bg-gray-100 text-gray-700'}`}>
                                            {partner.tier}
                                        </span>
                                    </div>

                                    {/* Partner Info */}
                                    <div className="mb-3">
                                        <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
                                            {partner.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                                            {partner.description}
                                        </p>
                                        <span className="text-[10px] text-gray-400">
                                            Since {partner.partnershipYear}
                                        </span>
                                    </div>

                                    {/* Projects */}
                                    {partner.projects && partner.projects.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {partner.projects.slice(0, 2).map((project, idx) => (
                                                <span key={idx} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px]">
                                                    {project.length > 15 ? project.substring(0, 15) + '...' : project}
                                                </span>
                                            ))}
                                            {partner.projects.length > 2 && (
                                                <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px]">
                                                    +{partner.projects.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Impact */}
                                    {partner.impact && (
                                        <div className="flex items-center text-[10px] text-gray-500 mb-3">
                                            <svg className="w-3 h-3 text-emerald-600 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            <span className="truncate">{partner.impact}</span>
                                        </div>
                                    )}

                                    {/* Contact & Website */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <div className="flex items-center space-x-2">
                                            {partner.contact && (
                                                <a
                                                    href={`mailto:${partner.contact}`}
                                                    className="text-gray-400 hover:text-amber-600 transition-colors"
                                                    title="Email"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </a>
                                            )}
                                            {partner.social?.twitter && (
                                                <a
                                                    href={partner.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-amber-600 transition-colors"
                                                    title="Twitter"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                                    </svg>
                                                </a>
                                            )}
                                            {partner.social?.linkedin && (
                                                <a
                                                    href={partner.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-amber-600 transition-colors"
                                                    title="LinkedIn"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        {partner.website && (
                                            <a
                                                href={partner.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] text-gray-600 hover:text-amber-600 transition-colors flex items-center"
                                                title="Visit website"
                                            >
                                                <span>Visit</span>
                                                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No partners found</h3>
                            <p className="text-gray-500 mb-6">Try selecting a different category</p>
                            <button
                                onClick={() => setActiveType('All')}
                                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
                            >
                                View all partners
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Become a Partner CTA - Gradient */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Become a partner
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join us in creating meaningful change across Africa. Let's collaborate to protect digital rights and promote mental wellbeing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            Partner with us
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        ✦ Join our growing network of partners across Africa
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Partners;