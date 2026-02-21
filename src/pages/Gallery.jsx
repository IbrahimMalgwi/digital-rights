import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    // Categories with colors
    const categories = [
        { name: 'All', count: galleryItems.length, icon: '🖼️', color: 'bg-amber-50 text-amber-700' },
        { name: 'Events', count: galleryItems.filter(item => item.category === 'Events').length, icon: '📅', color: 'bg-emerald-50 text-emerald-700' },
        { name: 'Campaigns', count: galleryItems.filter(item => item.category === 'Campaigns').length, icon: '📢', color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Workshops', count: galleryItems.filter(item => item.category === 'Workshops').length, icon: '🔧', color: 'bg-rose-50 text-rose-700' }
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
                                <div className="font-medium text-gray-900 text-sm">{item.location}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Date</div>
                                <div className="font-medium text-gray-900 text-sm">{item.date}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Participants</div>
                                <div className="font-medium text-gray-900 text-sm">{item.participants}+</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Status</div>
                                <div className="font-medium text-emerald-600 text-sm">Completed</div>
                            </div>
                        </div>

                        {/* Tags */}
                        {item.tags && (
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
            {/* Hero Section - Bold & Graphic (matching other pages) */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-sm mb-8">
                            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">→</span>
                            <span className="text-gray-900 font-medium">Gallery</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Visual Stories
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Gallery
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Visual stories from our projects and events across Africa.
                        </p>

                        <div className="flex flex-wrap gap-4">
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

            {/* Gallery Stats - Bold Numbers (matching other pages) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                100+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Photos</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                15
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Countries</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                20+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Events</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                5K+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Views</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Gallery Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
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
                                            className="group cursor-pointer"
                                            onClick={() => setSelectedImage(item)}
                                        >
                                            <div className="relative h-64 rounded-2xl mb-3 overflow-hidden bg-gradient-to-br from-amber-500 to-emerald-600">
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

                                            <div>
                                                <div className="flex items-start justify-between mb-1">
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColor}`}>
                                                        {item.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                                                    {item.description}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    📍 {item.location} • {item.date}
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
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};

export default Gallery;