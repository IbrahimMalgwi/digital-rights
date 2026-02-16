import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import { siteContent } from '../data/content';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    const categories = [
        { name: 'All', icon: '📚', count: siteContent.blog?.featured?.length || 0 },
        { name: 'Research', icon: '🔬', count: 8 },
        { name: 'Wellness', icon: '🧘', count: 6 },
        { name: 'Policy', icon: '⚖️', count: 5 },
        { name: 'Community', icon: '🤝', count: 7 },
        { name: 'Events', icon: '📅', count: 4 }
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

    // Popular tags for sidebar
    const popularTags = [
        'Digital Rights', 'Mental Health', 'Policy', 'Youth',
        'Africa', 'Research', 'Community', 'Wellness', 'Technology'
    ];

    // Trending topics
    const trendingTopics = [
        { title: 'Digital Wellness in 2024', views: '2.5K' },
        { title: 'AI and Mental Health', views: '1.8K' },
        { title: 'Policy Changes in East Africa', views: '1.2K' }
    ];

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
            {/* Hero Header */}
            <PageHeader
                title="Blog & Insights"
                subtitle="Latest research, stories, and updates from our work across Africa"
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Search and Filter Bar */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-glass border-b border-gray-200 shadow-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                            <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`
                                        inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                        ${activeCategory === category.name
                                        ? 'bg-primary-600 text-white shadow-md scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                                    }
                                    `}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                    {category.name !== 'All' && (
                                        <span className={`
                                            ml-2 px-2 py-0.5 rounded-full text-xs
                                            ${activeCategory === category.name
                                            ? 'bg-white/20 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                        }
                                        `}>
                                            {category.count}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                                    Featured Stories
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                                    Editor's{' '}
                                    <span className="gradient-text">Choice</span>
                                </h2>
                            </div>

                            <Link
                                to="/blog/featured"
                                className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                            >
                                View All Featured
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {featuredPosts.slice(0, 2).map((post) => (
                                <BlogCard key={post.id} post={post} featured={true} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content Area */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content - Blog Posts */}
                        <div className="lg:w-2/3">
                            {/* Results count */}
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-display font-bold text-gray-900">
                                    {activeCategory === 'All' ? 'All Articles' : activeCategory}
                                </h2>
                                <p className="text-secondary-600">
                                    Showing {Math.min(visiblePosts, filteredPosts.length)} of {filteredPosts.length} articles
                                </p>
                            </div>

                            {/* Blog Posts Grid */}
                            {filteredPosts.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                                            <div
                                                key={post.id}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <BlogCard
                                                    post={post}
                                                    variant={index === 0 ? 'horizontal' : 'default'}
                                                />
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
                                                    inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold
                                                    hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft
                                                    ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
                                                `}
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Loading...
                                                    </>
                                                ) : (
                                                    <>
                                                        Load More Articles
                                                        <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                // No results state
                                <div className="text-center py-16 bg-gray-50 rounded-3xl">
                                    <div className="text-6xl mb-4">🔍</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                                    <p className="text-secondary-600 mb-6">
                                        We couldn't find any articles matching your search criteria.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveCategory('All');
                                        }}
                                        className="btn-primary"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-8">
                            {/* Categories Widget */}
                            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-1 h-6 bg-primary-600 rounded-full mr-3"></span>
                                    Categories
                                </h3>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.name}
                                            onClick={() => setActiveCategory(category.name)}
                                            className={`
                                                w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300
                                                ${activeCategory === category.name
                                                ? 'bg-primary-600 text-white'
                                                : 'hover:bg-white'
                                            }
                                            `}
                                        >
                                            <span className="flex items-center">
                                                <span className="mr-2">{category.icon}</span>
                                                {category.name}
                                            </span>
                                            <span className={`
                                                px-2 py-1 rounded-full text-xs font-medium
                                                ${activeCategory === category.name
                                                ? 'bg-white/20 text-white'
                                                : 'bg-gray-200 text-gray-600'
                                            }
                                            `}>
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 card-hover">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-1 h-6 bg-accent-600 rounded-full mr-3"></span>
                                    Popular Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map((tag, index) => (
                                        <button
                                            key={index}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-primary-100 hover:text-primary-600 transition-colors"
                                        >
                                            #{tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Trending Now */}
                            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-4 flex items-center">
                                    <span className="w-1 h-6 bg-white rounded-full mr-3"></span>
                                    Trending Now
                                </h3>
                                <div className="space-y-4">
                                    {trendingTopics.map((topic, index) => (
                                        <Link
                                            key={index}
                                            to={`/blog/${index}`}
                                            className="flex items-center justify-between group"
                                        >
                                            <span className="text-primary-100 group-hover:text-white transition-colors">
                                                {topic.title}
                                            </span>
                                            <span className="text-sm text-primary-200">
                                                {topic.views} views
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Widget */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-primary-100 card-hover">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        Subscribe to Newsletter
                                    </h3>
                                    <p className="text-secondary-600 text-sm mb-4">
                                        Get the latest articles and updates directly in your inbox
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                    <button className="w-full btn-primary">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Newsletter Section - Enhanced */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Never Miss an Update
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Join our community of changemakers and stay informed about the latest developments
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                            />
                            <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-primary-200 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mt-12">
                        {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                            <a
                                key={social}
                                href={`https://${social}.com`}
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Social icon path */}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;