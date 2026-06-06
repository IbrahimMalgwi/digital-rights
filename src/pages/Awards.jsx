import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { getAssetUrl } from '../utils/assets';

const Awards = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedAward, setSelectedAward] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(9);

    // Use awards from siteContent with fallback
    const awardsData = siteContent.awards || [];

    // Categories with updated colors to match new theme
    const categories = [
        { name: 'All', count: awardsData.length, icon: '🏆', color: 'bg-secondary-100 text-secondary-800' },
        { name: 'Recognition', count: awardsData.filter(item => item.category === 'Recognition').length, icon: '⭐', color: 'bg-primary-50 text-primary-700' },
        { name: 'Innovation', count: awardsData.filter(item => item.category === 'Innovation').length, icon: '💡', color: 'bg-accent-50 text-accent-700' },
        { name: 'Leadership', count: awardsData.filter(item => item.category === 'Leadership').length, icon: '👑', color: 'bg-secondary-100 text-secondary-800' }
    ];

    // Simulate loading
    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    // Filter awards by category
    const filteredAwards = activeFilter === 'All'
        ? awardsData
        : awardsData.filter(item => item.category === activeFilter);

    const visibleAwards = filteredAwards.slice(0, visibleCount);

    // Load more items
    const loadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    // Award Detail Modal – updated colors
    const AwardModal = ({ award, onClose }) => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden animate-fade-in"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-900 hover:bg-secondary-100 transition-colors shadow-lg"
                    aria-label="Close award details"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="relative h-80 md:h-auto bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        {award.image ? (
                            <img
                                src={getAssetUrl(award.image)}
                                alt={award.title}
                                className="w-full h-full object-cover"
                                decoding="async"
                            />
                        ) : (
                            <div className="text-center">
                                <span className="text-9xl text-white/30 block mb-4">🏆</span>
                                <span className="text-white/50 text-sm font-medium px-4 py-2 bg-white/10 rounded-full">
                                    {award.year} ✨ {award.category}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="p-8 md:p-10">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                    {award.category}
                                </span>
                                <span className="text-secondary-400 text-sm">📅 {award.year}</span>
                            </div>

                            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-3">{award.title}</h2>
                            <p className="text-lg text-primary-600 font-medium mb-4">{award.recipient}</p>
                            <p className="text-secondary-600 leading-relaxed mb-4">{award.description}</p>
                            <p className="text-sm text-secondary-500 mb-2">{award.organization}</p>
                        </div>

                        <div className="flex items-center text-secondary-500 mb-6">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {award.location}
                        </div>

                        {award.tags && award.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {award.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-xs">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <a
                            href={award.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center px-6 py-3 bg-secondary-900 text-white rounded-full font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-medium"
                        >
                            View Award Details
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="overflow-hidden">
            {/* Awards Grid */}
            <section className="pt-32 md:pt-36 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse bg-secondary-100 rounded-3xl h-80"></div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {awardsData.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {visibleAwards.map((award) => (
                                            <div
                                                key={award.id}
                                                className="group bg-white rounded-3xl border border-secondary-200 overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer animate-fade-in"
                                                onClick={() => setSelectedAward(award)}
                                            >
                                                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                                    <span className="text-6xl text-white/30">🏆</span>
                                                    {award.featured && (
                                                        <div className="absolute top-3 right-3">
                                                            <span className="px-3 py-1 bg-white text-secondary-900 rounded-full text-xs font-medium shadow-lg">
                                                                ⭐ Featured
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="p-6">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                                                            {award.category}
                                                        </span>
                                                        <span className="text-secondary-400 text-xs">📅 {award.year}</span>
                                                    </div>

                                                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                        {award.title}
                                                    </h3>

                                                    <p className="text-sm text-primary-600 font-medium mb-2">
                                                        {award.recipient}
                                                    </p>

                                                    <p className="text-sm text-secondary-500 mb-4 line-clamp-2">
                                                        {award.description}
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-secondary-400">
                                                            📍 {award.location}
                                                        </span>
                                                        <span className="text-secondary-600 text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                                                            View details →
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Load More */}
                                    {visibleCount < filteredAwards.length && (
                                        <div className="text-center mt-16">
                                            <button
                                                onClick={loadMore}
                                                className="group px-8 py-4 bg-secondary-900 text-white rounded-full font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-medium"
                                            >
                                                Load more awards
                                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">↓</span>
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 bg-secondary-50 rounded-3xl max-w-2xl mx-auto">
                                    <div className="text-6xl mb-4">🏆</div>
                                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No awards found</h3>
                                    <p className="text-secondary-500">Awards will be added soon.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Category Pills – centered, updated colors */}
            <section className="py-12 bg-white border-t border-secondary-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-secondary-400 uppercase tracking-wider text-center mb-4">Filter by Category</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveFilter(category.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeFilter === category.name
                                    ? 'bg-secondary-900 text-white'
                                    : `${category.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeFilter === category.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/60 text-secondary-600'
                                }`}>
                                    {category.count}
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
                            Showing <span className="font-semibold text-secondary-900">{visibleAwards.length}</span> of{' '}
                            <span className="font-semibold text-secondary-900">{filteredAwards.length}</span> awards
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section – new gradient */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-slide-up">
                        Celebrate with us
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
                        Join us in our mission to create a safer, more inclusive digital Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-secondary-900 rounded-full font-bold hover:bg-secondary-100 transition-all hover:scale-105 shadow-large"
                        >
                            Support our work
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">❤️</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Get in touch
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        🏆 Every recognition inspires us to do more
                    </p>
                </div>
            </section>

            {/* Modal */}
            {selectedAward && (
                <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />
            )}
        </div>
    );
};

export default Awards;

