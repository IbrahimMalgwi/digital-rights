import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    // Popular tags
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
                            <span className="text-gray-900 font-medium">Blog</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Insights & Stories
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Blog &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Insights
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Latest research, stories, and updates from our work across Africa.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#blog-posts"
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Read articles
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Bar */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
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
                                        group px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
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
                </div>
            </section>

            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-gray-400 font-medium mb-4 block">Featured</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Editor's choice
                                </h2>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
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
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content - Blog Posts */}
                        <div className="lg:w-2/3">
                            {/* Results count */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {activeCategory === 'All' ? 'All articles' : activeCategory}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Showing {Math.min(visiblePosts, filteredPosts.length)} of {filteredPosts.length}
                                </p>
                            </div>

                            {/* Blog Posts Grid */}
                            {filteredPosts.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6">
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
                                                    group px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105
                                                    ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
                                                `}
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Loading...
                                                    </>
                                                ) : (
                                                    <>
                                                        Load more
                                                        <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                // No results state
                                <div className="text-center py-16 bg-gray-50 rounded-2xl">
                                    <div className="text-5xl mb-3">🔍</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Try adjusting your search or filter
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveCategory('All');
                                        }}
                                        className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-5">
                            {/* Categories Widget */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category.name}
                                            onClick={() => setActiveCategory(category.name)}
                                            className={`
                                                w-full flex items-center justify-between p-3 rounded-xl transition-all
                                                ${activeCategory === category.name
                                                ? 'bg-gray-900 text-white'
                                                : 'hover:bg-white'
                                            }
                                            `}
                                        >
                                            <span className="flex items-center">
                                                <span className="mr-2">{category.icon}</span>
                                                {category.name}
                                            </span>
                                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                                                activeCategory === category.name
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-gray-200 text-gray-600'
                                            }`}>
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map((tag, index) => (
                                        <button
                                            key={index}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 transition-colors"
                                        >
                                            #{tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Trending Now */}
                            <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-semibold mb-4">Trending Now</h3>
                                <div className="space-y-3">
                                    {trendingTopics.map((topic, index) => (
                                        <Link
                                            key={index}
                                            to={`/blog/${index}`}
                                            className="flex items-center justify-between group"
                                        >
                                            <span className="text-sm text-white/90 group-hover:text-white">
                                                {topic.title}
                                            </span>
                                            <span className="text-xs text-white/70">
                                                {topic.views}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Widget */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <div className="text-center">
                                    <div className="text-3xl mb-3">📧</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Subscribe
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-4">
                                        Get the latest articles in your inbox
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                    />
                                    <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Newsletter Section - Matching other pages */}
            <section className="relative bg-gray-900 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Never miss an update
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join our community of changemakers and stay informed.
                    </p>

                    <div className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;