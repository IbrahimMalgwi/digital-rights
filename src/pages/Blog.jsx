import React, { useState } from 'react';
import BlogCard from '../components/cards/BlogCard';
import { siteContent } from '../data/content';
import Hero from '../components/cards/Hero';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    // Get unique categories from actual blog posts for dynamic counts
    const allPosts = siteContent.blog?.featured || [];
    const categoryCounts = allPosts.reduce((acc, post) => {
        const cat = post.category || 'Uncategorized';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
    }, {});

    // Categories with updated colors to match new theme
    const categories = [
        { name: 'All', icon: '📚', count: allPosts.length, color: 'bg-secondary-100 text-secondary-800' },
        { name: 'Research', icon: '🔬', count: categoryCounts['Research'] || 0, color: 'bg-primary-50 text-primary-700' },
        { name: 'Wellness', icon: '🧠', count: categoryCounts['Wellness'] || 0, color: 'bg-accent-50 text-accent-700' },
        { name: 'Policy', icon: '📜', count: categoryCounts['Policy'] || 0, color: 'bg-secondary-100 text-secondary-800' },
        { name: 'Community', icon: '🤝', count: categoryCounts['Community'] || 0, color: 'bg-primary-50 text-primary-700' },
        { name: 'Events', icon: '📅', count: categoryCounts['Events'] || 0, color: 'bg-accent-50 text-accent-700' }
    ];

    const featuredPosts = allPosts.filter(post => post.featured) || [];

    // Filter posts based on category and search
    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.author?.toLowerCase().includes(searchQuery.toLowerCase());
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
        <div className="overflow-hidden">
            <Hero compact eyebrow="Ideas and updates" title="Stories from our work" subtitle="Research, field notes, and practical perspectives on digital rights and mental wellbeing." />
            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="page-section-soft">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-12 animate-slide-up">
                            <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Featured</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
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
            <section id="blog-posts" className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                                    <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
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
                                            btn-primary group px-8 py-4
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
                                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">↓</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        // No results state
                        <div className="card text-center py-20 px-6 max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">📭</div>
                            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No articles found</h3>
                            <p className="text-secondary-500 mb-6">
                                Try adjusting your search or filter
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                className="btn-primary px-6 py-3 text-sm"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Filter Bar – centered, updated colors */}
            <section className="filter-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-secondary-400 uppercase tracking-wider text-center mb-4">Filter by Category</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeCategory === category.name
                                    ? 'bg-secondary-900 text-white'
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
                                            : 'bg-white/60 text-secondary-600'
                                    }`}>
                                        {category.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search Bar – centered */}
            <section className="py-8 bg-white">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input rounded-full pl-12 pr-4 py-4"
                        />
                        <svg className="absolute left-4 top-4 w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Results count */}
            <section className="pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-secondary-500">
                            Showing <span className="font-semibold text-secondary-900">{Math.min(visiblePosts, filteredPosts.length)}</span> of{' '}
                            <span className="font-semibold text-secondary-900">{filteredPosts.length}</span> articles
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section – new gradient */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-slide-up">
                        Never miss an update
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
                        Join our community of changemakers and stay informed.
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                            />
                            <button className="btn-secondary px-6 py-3 text-sm">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-white/60 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        📬 Join 500+ readers staying informed
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;

