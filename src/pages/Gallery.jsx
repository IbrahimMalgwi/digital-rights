import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/content';
import { getAssetUrl } from '../utils/assets';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(9);

    // Get gallery items from siteContent
    const galleryItems = siteContent.gallery || [];

    // Categories with updated colors to match new theme
    const categories = [
        { name: 'All', count: galleryItems.length, icon: '🖼️', color: 'bg-secondary-100 text-secondary-800' },
        ...Array.from(new Set(galleryItems.map(item => item.category))).map(category => ({
            name: category,
            count: galleryItems.filter(item => item.category === category).length,
            icon: category === 'Events' ? '🎉' :
                category === 'Campaigns' ? '📢' :
                    category === 'Workshops' ? '🔧' : '📸',
            color: category === 'Events' ? 'bg-primary-50 text-primary-700' :
                category === 'Campaigns' ? 'bg-accent-50 text-accent-700' :
                    category === 'Workshops' ? 'bg-secondary-100 text-secondary-800' :
                        'bg-primary-50 text-primary-700'
        }))
    ];

    // Filter gallery items
    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const visibleItems = filteredItems.slice(0, visibleCount);

    // Simulate loading
    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    // Load more items
    const loadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    // Lightbox component – updated colors
    const Lightbox = ({ item, onClose }) => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden animate-fade-in"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-900 hover:bg-secondary-100 transition-colors shadow-lg"
                    aria-label="Close image preview"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="relative h-80 md:h-[500px] bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <span className="text-8xl text-white/30">🖼️</span>
                        {item.image ? (
                            <img
                                src={getAssetUrl(item.image)}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                decoding="async"
                                onError={(event) => {
                                    event.currentTarget.style.display = 'none';
                                }}
                            />
                        ) : null}
                    </div>

                    <div className="p-8">
                        <div className="mb-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                                item.category === 'Events' ? 'bg-primary-50 text-primary-700' :
                                    item.category === 'Campaigns' ? 'bg-accent-50 text-accent-700' :
                                        item.category === 'Workshops' ? 'bg-secondary-100 text-secondary-800' :
                                            'bg-primary-50 text-primary-700'
                            }`}>
                                {item.category}
                            </span>
                            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-2">
                                {item.title}
                            </h2>
                            <p className="text-secondary-600 mb-4">
                                {item.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-secondary-50 rounded-lg p-3">
                                <div className="text-xs text-secondary-500 mb-1">Location</div>
                                <div className="font-medium text-secondary-900 text-sm">{item.location || 'N/A'}</div>
                            </div>
                            <div className="bg-secondary-50 rounded-lg p-3">
                                <div className="text-xs text-secondary-500 mb-1">Date</div>
                                <div className="font-medium text-secondary-900 text-sm">{item.date || 'N/A'}</div>
                            </div>
                            <div className="bg-secondary-50 rounded-lg p-3">
                                <div className="text-xs text-secondary-500 mb-1">Participants</div>
                                <div className="font-medium text-secondary-900 text-sm">{item.participants || 0}+</div>
                            </div>
                            <div className="bg-secondary-50 rounded-lg p-3">
                                <div className="text-xs text-secondary-500 mb-1">Status</div>
                                <div className="font-medium text-primary-600 text-sm">Completed</div>
                            </div>
                        </div>

                        {item.tags && item.tags.length > 0 && (
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex space-x-3">
                            <button className="flex-1 px-4 py-2 bg-secondary-900 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors">
                                Share
                            </button>
                            <button className="flex-1 px-4 py-2 bg-secondary-100 text-secondary-900 rounded-lg text-sm font-medium hover:bg-secondary-200 transition-colors">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="overflow-hidden">
            {/* Main Gallery Section */}
            <section className="pt-32 md:pt-36 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-64 bg-secondary-200 rounded-2xl mb-4"></div>
                                    <div className="h-4 bg-secondary-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {galleryItems.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {visibleItems.map((item, index) => {
                                            const categoryColor =
                                                item.category === 'Events' ? 'bg-primary-50 text-primary-700' :
                                                    item.category === 'Campaigns' ? 'bg-accent-50 text-accent-700' :
                                                        item.category === 'Workshops' ? 'bg-secondary-100 text-secondary-800' :
                                                            'bg-primary-50 text-primary-700';

                                            return (
                                                <div
                                                    key={item.id}
                                                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-secondary-200 hover:shadow-large transition-all hover:scale-[1.02] animate-fade-in"
                                                    style={{ animationDelay: `${index * 0.05}s` }}
                                                    onClick={() => setSelectedImage(item)}
                                                >
                                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500">
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <span className="text-6xl text-white/30">🖼️</span>
                                                        </div>
                                                        {item.image ? (
                                                            <img
                                                                src={getAssetUrl(item.image)}
                                                                alt={item.title}
                                                                className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                loading="lazy"
                                                                decoding="async"
                                                                onError={(event) => {
                                                                    event.currentTarget.style.display = 'none';
                                                                }}
                                                            />
                                                        ) : null}

                                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white text-sm font-medium">Click to enlarge</span>
                                                        </div>

                                                        {item.featured && (
                                                            <div className="absolute top-3 right-3">
                                                                <span className="px-2 py-1 bg-white text-secondary-900 rounded-full text-xs font-medium shadow-lg">
                                                                    ⭐ Featured
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="p-5">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                                                                {item.title}
                                                            </h3>
                                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColor}`}>
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-secondary-500 mb-3 line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <p className="text-xs text-secondary-400">
                                                            📍 {item.location || 'N/A'} 📅 {item.date || 'N/A'}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {visibleCount < filteredItems.length && (
                                        <div className="text-center mt-16">
                                            <button
                                                onClick={loadMore}
                                                className="group px-8 py-4 bg-secondary-900 text-white rounded-full font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-medium"
                                            >
                                                Load more photos
                                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">↓</span>
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 bg-secondary-50 rounded-3xl max-w-2xl mx-auto">
                                    <div className="text-6xl mb-4">📷</div>
                                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No photos found</h3>
                                    <p className="text-secondary-500">Gallery will be updated soon.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Filter Bar – centered, updated colors */}
            {galleryItems.length > 0 && (
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
            )}

            {/* Results Count */}
            {galleryItems.length > 0 && (
                <section className="pb-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-secondary-500">
                                Showing <span className="font-semibold text-secondary-900">{visibleItems.length}</span> of{' '}
                                <span className="font-semibold text-secondary-900">{filteredItems.length}</span> photos
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

