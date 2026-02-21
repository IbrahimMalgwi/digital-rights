import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Awards = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedAward, setSelectedAward] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(9);

    // Use awards from siteContent with fallback
    const awardsData = siteContent.awards || [];

    // Categories with colors
    const categories = [
        { name: 'All', count: awardsData.length, icon: '🏆', color: 'bg-amber-50 text-amber-700' },
        { name: 'Recognition', count: awardsData.filter(item => item.category === 'Recognition').length, icon: '🌟', color: 'bg-emerald-50 text-emerald-700' },
        { name: 'Innovation', count: awardsData.filter(item => item.category === 'Innovation').length, icon: '💡', color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Leadership', count: awardsData.filter(item => item.category === 'Leadership').length, icon: '👥', color: 'bg-rose-50 text-rose-700' }
    ];

    // Simulate loading
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
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

    // Award Detail Modal
    const AwardModal = ({ award, onClose }) => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="relative h-80 md:h-auto bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center">
                        {award.image ? (
                            <img
                                src={award.image}
                                alt={award.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="text-center">
                                <span className="text-9xl text-white/30 block mb-4">🏆</span>
                                <span className="text-white/50 text-sm font-medium px-4 py-2 bg-white/10 rounded-full">
                                    {award.year} • {award.category}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="p-8 md:p-10">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                                    {award.category}
                                </span>
                                <span className="text-gray-400 text-sm">✦ {award.year}</span>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-3">{award.title}</h2>
                            <p className="text-lg text-amber-600 font-medium mb-4">{award.recipient}</p>
                            <p className="text-gray-500 leading-relaxed mb-4">{award.description}</p>
                            <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
                        </div>

                        <div className="flex items-center text-gray-500 mb-6">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {award.location}
                        </div>

                        {award.tags && award.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {award.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <a
                            href={award.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
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
        <div>
            {/* Hero Section - Bold & Graphic */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
                <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-sm mb-8">
                            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">→</span>
                            <span className="text-gray-900 font-medium">Awards</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Recognition & Impact
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Awards &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Recognition
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Celebrating the impact and recognition of our work protecting digital rights
                            and promoting mental health across Africa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats - Bold Numbers */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                {awardsData.length}+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Total Awards</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                {awardsData.filter(a => a.year === '2024').length}
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Awards in 2024</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                {[...new Set(awardsData.map(a => a.location))].length}
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Locations</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                {awardsData.filter(a => a.featured).length}
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Featured</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Pills */}
            <section className="pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveFilter(category.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeFilter === category.name
                                    ? 'bg-gray-900 text-white'
                                    : `${category.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeFilter === category.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/60 text-gray-600'
                                }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse bg-gray-100 rounded-3xl h-80"></div>
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
                                                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
                                                onClick={() => setSelectedAward(award)}
                                            >
                                                <div className="relative h-48 bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center">
                                                    <span className="text-6xl text-white/30">🏆</span>

                                                    {award.featured && (
                                                        <div className="absolute top-3 right-3">
                                                            <span className="px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-medium shadow-lg">
                                                                ✦ Featured
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="p-6">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                                                            {award.category}
                                                        </span>
                                                        <span className="text-gray-400 text-xs">{award.year}</span>
                                                    </div>

                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-emerald-600 transition-all">
                                                        {award.title}
                                                    </h3>

                                                    <p className="text-sm text-amber-600 font-medium mb-2">
                                                        {award.recipient}
                                                    </p>

                                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                                        {award.description}
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-400">
                                                            📍 {award.location}
                                                        </span>
                                                        <span className="text-gray-900 text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
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
                                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                                            >
                                                Load more awards
                                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 bg-gray-50 rounded-3xl">
                                    <div className="text-6xl mb-4">🏆</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No awards found</h3>
                                    <p className="text-gray-500">Awards will be added soon.</p>
                                </div>
                            )}
                        </>
                    )}
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