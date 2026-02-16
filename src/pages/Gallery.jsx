import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(9);

    // Enhanced gallery data with more details
    const galleryItems = siteContent.gallery?.length ? siteContent.gallery : [
        {
            id: 1,
            title: "Digital Literacy Workshop",
            description: "Community members learning basic computer skills",
            category: "Workshops",
            location: "Nairobi, Kenya",
            date: "March 2024",
            participants: 45,
            image: null,
            featured: true,
            tags: ["Education", "Digital Rights", "Youth"]
        },
        {
            id: 2,
            title: "Mental Health Awareness Campaign",
            description: "Launch event for our digital mental health initiative",
            category: "Campaigns",
            location: "Lagos, Nigeria",
            date: "February 2024",
            participants: 120,
            image: null,
            featured: true,
            tags: ["Mental Health", "Awareness", "Community"]
        },
        {
            id: 3,
            title: "Policy Roundtable",
            description: "Stakeholders discussing digital rights legislation",
            category: "Events",
            location: "Accra, Ghana",
            date: "January 2024",
            participants: 35,
            image: null,
            featured: false,
            tags: ["Policy", "Advocacy", "Government"]
        },
        {
            id: 4,
            title: "Youth Tech Summit",
            description: "Young innovators showcase their projects",
            category: "Events",
            location: "Kigali, Rwanda",
            date: "December 2023",
            participants: 200,
            image: null,
            featured: true,
            tags: ["Youth", "Technology", "Innovation"]
        },
        {
            id: 5,
            title: "Community Outreach",
            description: "Taking digital literacy to rural communities",
            category: "Campaigns",
            location: "Mombasa, Kenya",
            date: "November 2023",
            participants: 80,
            image: null,
            featured: false,
            tags: ["Outreach", "Rural", "Education"]
        },
        {
            id: 6,
            title: "Research Workshop",
            description: "Training community researchers",
            category: "Workshops",
            location: "Cape Town, South Africa",
            date: "October 2023",
            participants: 25,
            image: null,
            featured: false,
            tags: ["Research", "Training", "Data Workers"]
        }
    ];

    // Categories with counts
    const categories = [
        { name: 'All', count: galleryItems.length, icon: '🖼️' },
        { name: 'Events', count: galleryItems.filter(item => item.category === 'Events').length, icon: '📅' },
        { name: 'Campaigns', count: galleryItems.filter(item => item.category === 'Campaigns').length, icon: '📢' },
        { name: 'Workshops', count: galleryItems.filter(item => item.category === 'Workshops').length, icon: '🔧' }
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
                className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden animate-scale-up"
                onClick={e => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors shadow-soft"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-primary-500 to-accent-600">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-9xl text-white/30">📸</span>
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="p-8 overflow-y-auto max-h-[600px]">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                                {item.category}
                            </span>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                {item.title}
                            </h2>
                            <p className="text-xl text-secondary-600 mb-6">
                                {item.description}
                            </p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-secondary-500 mb-1">Location</div>
                                <div className="font-semibold text-gray-900">{item.location}</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-secondary-500 mb-1">Date</div>
                                <div className="font-semibold text-gray-900">{item.date}</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-secondary-500 mb-1">Participants</div>
                                <div className="font-semibold text-gray-900">{item.participants}+</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="text-sm text-secondary-500 mb-1">Status</div>
                                <div className="font-semibold text-green-600">Completed</div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {item.tags?.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Related actions */}
                        <div className="flex space-x-4">
                            <button className="flex-1 btn-primary">
                                Share
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                            <button className="flex-1 btn-secondary">
                                Download
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title="Gallery"
                subtitle="Visual stories from our projects and events across Africa"
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Featured Strip */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-large p-6 border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                                    📸
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Featured Collection</h3>
                                    <p className="text-sm text-secondary-600">Our most impactful moments</p>
                                </div>
                            </div>
                            <button className="text-primary-600 font-semibold hover:text-primary-700">
                                View Slideshow →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Enhanced Filter Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                        <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveFilter(category.name)}
                                    className={`
                                        inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300
                                        ${activeFilter === category.name
                                        ? 'bg-primary-600 text-white shadow-soft scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }
                                    `}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                    <span className={`
                                        ml-2 px-2 py-0.5 rounded-full text-xs
                                        ${activeFilter === category.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-300 text-gray-700'
                                    }
                                    `}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                            <button className="p-3 bg-primary-100 text-primary-600 rounded-xl">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Loading State */}
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-64 bg-gray-200 rounded-2xl mb-4"></div>
                                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {/* Gallery Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {visibleItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="group cursor-pointer animate-slide-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => setSelectedImage(item)}
                                    >
                                        <div className="relative h-64 rounded-2xl mb-4 overflow-hidden bg-gradient-to-br from-primary-500 to-accent-600">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-6xl text-white/30 group-hover:scale-110 transition-transform duration-700">
                                                        📸
                                                    </span>
                                                </div>
                                            )}

                                            {/* Overlay with zoom icon */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 left-4">
                                                    <div className="flex items-center space-x-2 text-white">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                        <span className="text-sm">Click to enlarge</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Featured badge */}
                                            {item.featured && (
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold">
                                                        Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
                                                    {item.description}
                                                </p>
                                                <div className="flex items-center space-x-3">
                                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                                                        {item.category}
                                                    </span>
                                                    <span className="text-xs text-secondary-500">
                                                        📍 {item.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visibleCount < filteredItems.length && (
                                <div className="text-center mt-16">
                                    <button
                                        onClick={loadMore}
                                        className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft"
                                    >
                                        <span>Load More Photos</span>
                                        <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                            <div className="text-secondary-600">Photos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">15</div>
                            <div className="text-secondary-600">Countries</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                            <div className="text-secondary-600">Events</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">5K+</div>
                            <div className="text-secondary-600">Views</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
            )}

            {/* Add custom animation to index.css */}
            <style jsx>{`
                @keyframes scaleUp {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-scale-up {
                    animation: scaleUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Gallery;