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
                            <span className="text-gray-900 font-medium">Awards</span>
                        </nav>

                        {/* Badge - Centered */}
                        <div className="inline-flex items-center justify-center mb-12">
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-amber-100">
                                ✦ Recognition & Impact
                            </span>
                        </div>

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">Awards &</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Recognition
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Celebrating the impact and recognition of our work protecting digital rights
                            and promoting mental health across Africa.
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
                            <div className="text-4xl font-bold text-gray-900">{awardsData.length}</div>
                            <div className="text-sm text-gray-500">Total Awards</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">
                                {awardsData.filter(a => a.year === '2024').length}
                            </div>
                            <div className="text-sm text-gray-500">Awards in 2024</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">
                                {[...new Set(awardsData.map(a => a.category))].length}
                            </div>
                            <div className="text-sm text-gray-500">Categories</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">
                                {awardsData.filter(a => a.featured).length}
                            </div>
                            <div className="text-sm text-gray-500">Featured</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Pills - Centered */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center mb-4">Filter by Category</h3>
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

            {/* Results Count */}
            <section className="pb-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-gray-500">
                            Showing <span className="font-semibold text-gray-900">{visibleAwards.length}</span> of{' '}
                            <span className="font-semibold text-gray-900">{filteredAwards.length}</span> awards
                        </p>
                    </div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-8 pb-20 bg-white">
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

                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-emerald-600 transition-all line-clamp-2">
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
                                <div className="text-center py-20 bg-gray-50 rounded-3xl max-w-2xl mx-auto">
                                    <div className="text-6xl mb-4">🏆</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No awards found</h3>
                                    <p className="text-gray-500">Awards will be added soon.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Celebrate with us
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join us in our mission to create a safer, more inclusive digital Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            Support our work
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Get in touch
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        ✦ Every recognition inspires us to do more
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