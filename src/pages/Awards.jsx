import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Awards = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedAward, setSelectedAward] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(9);

    // Awards data with external links
    const awardsData = [
        {
            id: 1,
            title: "Digital Rights Innovation Award",
            organization: "Global Digital Rights Forum",
            description: "Recognizing our innovative approach to protecting digital rights and promoting online safety for marginalized communities.",
            category: "Innovation",
            year: "2024",
            location: "Nairobi, Kenya",
            image: null,
            featured: true,
            externalUrl: "https://example.com/award/1",
            tags: ["Digital Rights", "Innovation", "Advocacy"]
        },
        {
            id: 2,
            title: "Mental Health Impact Award",
            organization: "Africa Mental Health Summit",
            description: "Honoring our work in integrating mental health support with digital literacy programs across East Africa.",
            category: "Health",
            year: "2023",
            location: "Kigali, Rwanda",
            image: null,
            featured: true,
            externalUrl: "https://example.com/award/2",
            tags: ["Mental Health", "Impact", "Community"]
        },
        {
            id: 3,
            title: "Women in Tech Champion",
            organization: "African Women in Technology",
            description: "Celebrating our commitment to empowering women through digital skills training and mentorship.",
            category: "Diversity",
            year: "2023",
            location: "Lagos, Nigeria",
            image: null,
            featured: false,
            externalUrl: "https://example.com/award/3",
            tags: ["Women", "Technology", "Empowerment"]
        },
        {
            id: 4,
            title: "Excellence in Research",
            organization: "African Research Council",
            description: "Acknowledging our groundbreaking research on digital labor conditions and worker rights.",
            category: "Research",
            year: "2024",
            location: "Cape Town, South Africa",
            image: null,
            featured: true,
            externalUrl: "https://example.com/award/4",
            tags: ["Research", "Data Workers", "Labor Rights"]
        },
        {
            id: 5,
            title: "Community Impact Award",
            organization: "NGO Partnership Forum",
            description: "Recognizing our grassroots approach to digital literacy in rural communities.",
            category: "Community",
            year: "2022",
            location: "Accra, Ghana",
            image: null,
            featured: false,
            externalUrl: "https://example.com/award/5",
            tags: ["Community", "Outreach", "Education"]
        },
        {
            id: 6,
            title: "Policy Innovation Award",
            organization: "Africa Policy Lab",
            description: "For our contributions to digital rights policy frameworks adopted by multiple governments.",
            category: "Policy",
            year: "2023",
            location: "Addis Ababa, Ethiopia",
            image: null,
            featured: false,
            externalUrl: "https://example.com/award/6",
            tags: ["Policy", "Advocacy", "Government"]
        },
        {
            id: 7,
            title: "Youth Empowerment Award",
            organization: "African Youth Council",
            description: "Celebrating our programs that equip young people with digital skills for the future of work.",
            category: "Youth",
            year: "2024",
            location: "Dakar, Senegal",
            image: null,
            featured: true,
            externalUrl: "https://example.com/award/7",
            tags: ["Youth", "Skills", "Employment"]
        },
        {
            id: 8,
            title: "Transparency & Accountability Award",
            organization: "Global Giving",
            description: "Recognizing our commitment to transparency in reporting and donor communications.",
            category: "Governance",
            year: "2023",
            location: "Online",
            image: null,
            featured: false,
            externalUrl: "https://example.com/award/8",
            tags: ["Transparency", "Governance", "Trust"]
        }
    ];

    // Categories with counts
    const categories = [
        { name: 'All', count: awardsData.length, icon: '🏆' },
        { name: 'Innovation', count: awardsData.filter(item => item.category === 'Innovation').length, icon: '💡' },
        { name: 'Health', count: awardsData.filter(item => item.category === 'Health').length, icon: '🧠' },
        { name: 'Diversity', count: awardsData.filter(item => item.category === 'Diversity').length, icon: '🌈' },
        { name: 'Research', count: awardsData.filter(item => item.category === 'Research').length, icon: '🔬' },
        { name: 'Community', count: awardsData.filter(item => item.category === 'Community').length, icon: '🤝' },
        { name: 'Policy', count: awardsData.filter(item => item.category === 'Policy').length, icon: '⚖️' },
        { name: 'Youth', count: awardsData.filter(item => item.category === 'Youth').length, icon: '👥' }
    ];

    // Years for filter
    const years = ['All', ...new Set(awardsData.map(item => item.year))].sort().reverse();

    // Filter awards by category and year
    const filteredAwards = activeFilter === 'All'
        ? awardsData
        : awardsData.filter(item => item.category === activeFilter);

    const visibleAwards = filteredAwards.slice(0, visibleCount);

    // Simulate loading
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

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
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors shadow-md"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto bg-gradient-to-br from-primary-500 to-accent-600">
                        {award.image ? (
                            <img
                                src={award.image}
                                alt={award.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-8xl text-white/30">🏆</span>
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="p-8">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                    {award.category}
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                    {award.year}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{award.title}</h2>
                            <p className="text-lg text-primary-600 font-medium mb-4">{award.organization}</p>
                            <p className="text-gray-600 mb-6 leading-relaxed">{award.description}</p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Location</div>
                                <div className="font-medium text-gray-900">{award.location}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Year</div>
                                <div className="font-medium text-gray-900">{award.year}</div>
                            </div>
                        </div>

                        {/* Tags */}
                        {award.tags && award.tags.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {award.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* External Link Button */}
                        <a
                            href={award.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            View Award Details
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Awards & <span className="text-primary-600">Recognition</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Celebrating the impact and recognition of our work across Africa
                    </p>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">{awardsData.length}+</div>
                            <div className="text-sm text-gray-600">Total Awards</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">
                                {awardsData.filter(a => a.year === '2024').length}
                            </div>
                            <div className="text-sm text-gray-600">Awards in 2024</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">
                                {[...new Set(awardsData.map(a => a.location))].length}
                            </div>
                            <div className="text-sm text-gray-600">Locations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">
                                {awardsData.filter(a => a.featured).length}
                            </div>
                            <div className="text-sm text-gray-600">Featured</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveFilter(category.name)}
                                className={`
                                    inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors
                                    ${activeFilter === category.name
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }
                                `}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeFilter === category.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-300 text-gray-700'
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
                                <div key={i} className="animate-pulse">
                                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {visibleAwards.map((award) => (
                                    <div
                                        key={award.id}
                                        className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                                        onClick={() => setSelectedAward(award)}
                                    >
                                        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-600">
                                            {award.image ? (
                                                <img
                                                    src={award.image}
                                                    alt={award.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-6xl text-white/30">🏆</span>
                                                </div>
                                            )}

                                            {/* Featured Badge */}
                                            {award.featured && (
                                                <div className="absolute top-3 right-3">
                                                    <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded text-xs font-medium">
                                                        Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                                                    {award.category}
                                                </span>
                                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                                                    {award.year}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                                                {award.title}
                                            </h3>

                                            <p className="text-sm text-primary-600 font-medium mb-2">
                                                {award.organization}
                                            </p>

                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                {award.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">
                                                    📍 {award.location}
                                                </span>
                                                <span className="text-primary-600 text-sm font-medium group-hover:underline">
                                                    View Details →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More */}
                            {visibleCount < filteredAwards.length && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={loadMore}
                                        className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                    >
                                        Load More Awards
                                    </button>
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