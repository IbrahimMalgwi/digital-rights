import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/content';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(9);

    // Get gallery items from siteContent
    const galleryItems = siteContent.gallery || [];

    // Categories with colors - dynamically generated
    const categories = [
        { name: 'All', count: galleryItems.length, icon: '🖼️', color: 'bg-amber-50 text-amber-700' },
        ...Array.from(new Set(galleryItems.map(item => item.category))).map(category => ({
            name: category,
            count: galleryItems.filter(item => item.category === category).length,
            icon: category === 'Events' ? '📅' :
                category === 'Campaigns' ? '📢' :
                    category === 'Workshops' ? '🔧' : '🖼️',
            color: category === 'Events' ? 'bg-emerald-50 text-emerald-700' :
                category === 'Campaigns' ? 'bg-indigo-50 text-indigo-700' :
                    category === 'Workshops' ? 'bg-rose-50 text-rose-700' :
                        'bg-amber-50 text-amber-700'
        }))
    ];

    // Filter gallery items
    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const visibleItems = filteredItems.slice(0, visibleCount);

    // Simulate loading
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    // Load more items
    const loadMore = () => {
        setVisibleCount(prev => prev + 6);
    };


    // Lightbox component
    const Lightbox = ({ item, onClose }) => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-80 md:h-[500px] bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-8xl text-white/30">📸</span>
                        )}
                    </div>

                    {/* Details */}
                    <div className="p-8">
                        <div className="mb-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                                item.category === 'Events' ? 'bg-emerald-50 text-emerald-700' :
                                    item.category === 'Campaigns' ? 'bg-indigo-50 text-indigo-700' :
                                        item.category === 'Workshops' ? 'bg-rose-50 text-rose-700' :
                                            'bg-amber-50 text-amber-700'
                            }`}>
                                {item.category}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {item.description}
                            </p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Location</div>
                                <div className="font-medium text-gray-900 text-sm">{item.location || 'N/A'}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Date</div>
                                <div className="font-medium text-gray-900 text-sm">{item.date || 'N/A'}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Participants</div>
                                <div className="font-medium text-gray-900 text-sm">{item.participants || 0}+</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Status</div>
                                <div className="font-medium text-emerald-600 text-sm">Completed</div>
                            </div>
                        </div>

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex space-x-3">
                            <button className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                                Share
                            </button>
                            <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                Download
                            </button>
                        </div>
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

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">Our</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Gallery
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Visual stories from our projects and events across Africa.
                        </p>

                        {/* CTA Button - Centered */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => setActiveFilter('All')}
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                View all photos
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </button>
                        </div>


                    </div>
                </div>
            </section>


            {/* Main Gallery Section */}
            <section className="py-8 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Loading State */}
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-64 bg-gray-200 rounded-2xl mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {galleryItems.length > 0 ? (
                                <>
                                    {/* Gallery Grid */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {visibleItems.map((item, index) => {
                                            // Get category color
                                            const categoryColor =
                                                item.category === 'Events' ? 'bg-emerald-50 text-emerald-700' :
                                                    item.category === 'Campaigns' ? 'bg-indigo-50 text-indigo-700' :
                                                        item.category === 'Workshops' ? 'bg-rose-50 text-rose-700' :
                                                            'bg-amber-50 text-amber-700';

                                            return (
                                                <div
                                                    key={item.id}
                                                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:scale-[1.02]"
                                                    onClick={() => setSelectedImage(item)}
                                                >
                                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-500 to-emerald-600">
                                                        {item.image ? (
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <span className="text-6xl text-white/30">📸</span>
                                                            </div>
                                                        )}

                                                        {/* Overlay */}
                                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white text-sm font-medium">Click to enlarge</span>
                                                        </div>

                                                        {/* Featured badge */}
                                                        {item.featured && (
                                                            <div className="absolute top-3 right-3">
                                                                <span className="px-2 py-1 bg-white text-gray-900 rounded-full text-xs font-medium shadow-lg">
                                                                    ✦ Featured
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="p-5">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                                                                {item.title}
                                                            </h3>
                                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColor}`}>
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            📍 {item.location || 'N/A'} • {item.date || 'N/A'}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Load More Button */}
                                    {visibleCount < filteredItems.length && (
                                        <div className="text-center mt-16">
                                            <button
                                                onClick={loadMore}
                                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                                            >
                                                Load more photos
                                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 bg-gray-50 rounded-3xl max-w-2xl mx-auto">
                                    <div className="text-6xl mb-4">🖼️</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No photos found</h3>
                                    <p className="text-gray-500">Gallery will be updated soon.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Filter Bar - Centered (only show if there are items) */}
            {galleryItems.length > 0 && (
                <section className="pt-16 pb-8 bg-white">
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
            )}

            {/* Results Count */}
            {galleryItems.length > 0 && (
                <section className="py-4 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{visibleItems.length}</span> of{' '}
                                <span className="font-semibold text-gray-900">{filteredItems.length}</span> photos
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Lightbox */}
            {selectedImage && (
                <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};

export default Gallery;