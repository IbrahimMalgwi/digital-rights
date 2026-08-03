import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import Hero from '../components/cards/Hero';

const Partners = () => {
    const [activeType, setActiveType] = useState('All');

    // Get partners from siteContent
    const partners = siteContent.partners || [];

    // Dynamically generate partner types from actual data with updated colors
    const partnerTypes = [
        { name: 'All', count: partners.length, icon: '🤝', color: 'bg-secondary-100 text-secondary-800' },
        ...Array.from(new Set(partners.map(p => p.type))).map(type => ({
            name: type,
            count: partners.filter(p => p.type === type).length,
            icon: type === 'Government' ? '🏛️' :
                type === 'Foundation' ? '🏗️' :
                    type === 'Corporate' ? '🏢' :
                        type === 'Research' ? '🔬' :
                            type === 'Research Institute' ? '🔬' :
                                type === 'Cooperative' ? '🤝' :
                                    type === 'Worker Union' ? '👥' :
                                        type === 'Community Organization' ? '🌍' :
                                            type === 'Network' ? '🔗' : '🤝',
            color: type === 'Government' ? 'bg-primary-50 text-primary-700' :
                type === 'Foundation' ? 'bg-accent-50 text-accent-700' :
                    type === 'Corporate' ? 'bg-secondary-100 text-secondary-800' :
                        type === 'Research' ? 'bg-primary-50 text-primary-700' :
                            type === 'Research Institute' ? 'bg-primary-50 text-primary-700' :
                                type === 'Cooperative' ? 'bg-accent-50 text-accent-700' :
                                    type === 'Worker Union' ? 'bg-secondary-100 text-secondary-800' :
                                        type === 'Community Organization' ? 'bg-primary-50 text-primary-700' :
                                            type === 'Network' ? 'bg-accent-50 text-accent-700' :
                                                'bg-secondary-50 text-secondary-700'
        }))
    ];

    // Tier colors – updated to match new theme
    const tierColors = {
        'Strategic Partner': 'bg-primary-50 text-primary-700',
        'Funding Partner': 'bg-accent-50 text-accent-700',
        'Technical Partner': 'bg-secondary-100 text-secondary-800',
        'Program Partner': 'bg-primary-100 text-primary-800',
        'Research Partner': 'bg-accent-100 text-accent-800',
        'Community Partner': 'bg-secondary-100 text-secondary-800'
    };

    // Filter partners by type
    const filteredPartners = activeType === 'All'
        ? partners
        : partners.filter(p => p.type === activeType);

    return (
        <div className="overflow-hidden">
            <Hero compact eyebrow="Stronger together" title="Our partners" subtitle="Working across sectors to build safer technologies, healthier workplaces, and more inclusive digital communities." />
            {/* Partners Grid – 4 Columns, updated styles */}
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPartners.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {filteredPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="group card-hover p-5 animate-fade-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-soft">
                                            {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${tierColors[partner.tier] || 'bg-secondary-100 text-secondary-700'}`}>
                                            {partner.tier}
                                        </span>
                                    </div>

                                    <div className="mb-3">
                                        <h3 className="text-base font-bold text-secondary-900 mb-1 line-clamp-1 group-hover:text-primary-600 transition-colors">
                                            {partner.name}
                                        </h3>
                                        <p className="text-xs text-secondary-500 mb-2 line-clamp-2">
                                            {partner.description}
                                        </p>
                                        <span className="text-[10px] text-secondary-400">
                                            Since {partner.partnershipYear}
                                        </span>
                                    </div>

                                    {partner.projects && partner.projects.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {partner.projects.slice(0, 2).map((project, idx) => (
                                                <span key={idx} className="px-1.5 py-0.5 bg-secondary-100 text-secondary-600 rounded text-[9px]">
                                                    {project.length > 15 ? project.substring(0, 15) + '...' : project}
                                                </span>
                                            ))}
                                            {partner.projects.length > 2 && (
                                                <span className="px-1.5 py-0.5 bg-secondary-100 text-secondary-600 rounded text-[9px]">
                                                    +{partner.projects.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {partner.impact && (
                                        <div className="flex items-center text-[10px] text-secondary-500 mb-3">
                                            <svg className="w-3 h-3 text-primary-600 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            <span className="truncate">{partner.impact}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-secondary-100">
                                        <div className="flex items-center space-x-2">
                                            {partner.contact && (
                                                <a
                                                    href={`mailto:${partner.contact}`}
                                                    className="text-secondary-400 hover:text-primary-600 transition-colors"
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
                                                    className="text-secondary-400 hover:text-primary-600 transition-colors"
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
                                                    className="text-secondary-400 hover:text-primary-600 transition-colors"
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
                                                className="text-[10px] text-secondary-600 hover:text-primary-600 transition-colors flex items-center"
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
                        <div className="card text-center py-20 px-6 max-w-2xl mx-auto animate-fade-in">
                            <div className="text-6xl mb-4">🤝</div>
                            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No partners found</h3>
                            <p className="text-secondary-500 mb-6">Try selecting a different category</p>
                            <button
                                onClick={() => setActiveType('All')}
                                className="btn-primary px-6 py-3 text-sm"
                            >
                                View all partners
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Filter Bar – centered */}
            <section className="filter-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-secondary-400 uppercase tracking-wider text-center mb-4">Filter by Type</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {partnerTypes.map((type) => (
                            <button
                                key={type.name}
                                onClick={() => setActiveType(type.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeType === type.name
                                    ? 'bg-secondary-900 text-white'
                                    : `${type.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{type.icon}</span>
                                {type.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeType === type.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/60 text-secondary-600'
                                }`}>
                                    {type.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-secondary-500">
                            Showing <span className="font-semibold text-secondary-900">{filteredPartners.length}</span> partners
                        </p>
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA – updated gradient */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-slide-up">
                        Become a partner
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
                        Join us in creating meaningful change across Africa. Let's collaborate to protect digital rights and promote mental wellbeing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-secondary group px-8 py-4"
                        >
                            Partner with us
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        🤝 Join our growing network of partners across Africa
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Partners;

