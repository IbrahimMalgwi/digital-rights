import React, { useState } from 'react';

import BlogCard from '../components/cards/BlogCard';
import { siteContent } from '../data/content';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    // Categories with colors
    const categories = [
        { name: 'All', icon: '📚', count: siteContent.blog?.featured?.length || 0, color: 'bg-amber-50 text-amber-700' },
        { name: 'Research', icon: '🔬', count: 8, color: 'bg-emerald-50 text-emerald-700' },
        { name: 'Wellness', icon: '🧘', count: 6, color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Policy', icon: '⚖️', count: 5, color: 'bg-rose-50 text-rose-700' },
        { name: 'Community', icon: '🤝', count: 7, color: 'bg-amber-50 text-amber-700' },
        { name: 'Events', icon: '📅', count: 4, color: 'bg-emerald-50 text-emerald-700' }
    ];

    const featuredPosts = siteContent.blog?.featured?.filter(post => post.featured) || [];

    // Filter posts based on category and search
    const filteredPosts = (siteContent.blog?.featured || []).filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });



    // Load more posts
    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisiblePosts(prev => prev + 3);
            setIsLoading(false);
        }, 1000);
    };

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
                            <span className="block mb-4">Blog &</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Insights
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Latest research, stories, and updates from our work across Africa.
                        </p>

                    </div>
                </div>
            </section>

            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-gray-400 font-medium mb-4 block">Featured</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Editor's choice
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {featuredPosts.slice(0, 2).map((post) => (
                                <BlogCard key={post.id} post={post} featured={true} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content Area */}
            <section id="blog-posts" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results count - Centered */}
                    <div className="text-center mb-8">
                        <p className="text-gray-500">
                            Showing <span className="font-semibold text-gray-900">{Math.min(visiblePosts, filteredPosts.length)}</span> of{' '}
                            <span className="font-semibold text-gray-900">{filteredPosts.length}</span> articles
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                                    <div key={post.id}>
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visiblePosts < filteredPosts.length && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={loadMore}
                                        disabled={isLoading}
                                        className={`
                                            group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105
                                            ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
                                        `}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Loading...
                                            </>
                                        ) : (
                                            <>
                                                Load more articles
                                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        // No results state - Centered
                        <div className="text-center py-20 bg-gray-50 rounded-3xl max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-500 mb-6">
                                Try adjusting your search or filter
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Filter Bar - Centered */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center mb-4">Filter by Category</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeCategory === category.name
                                    ? 'bg-gray-900 text-white'
                                    : `${category.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                                {category.name !== 'All' && (
                                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                        activeCategory === category.name
                                            ? 'bg-white/20 text-white'
                                            : 'bg-white/60 text-gray-600'
                                    }`}>
                                        {category.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search Bar - Centered */}
            <section className="py-8 bg-white">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        />
                        <svg className="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Newsletter Section - Gradient to match other pages */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Never miss an update
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join our community of changemakers and stay informed.
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-white/60 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        ✦ Join 500+ readers staying informed
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;