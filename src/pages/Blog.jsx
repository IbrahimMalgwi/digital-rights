import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import { siteContent } from '../data/content';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Research', 'Wellness', 'Policy', 'Community', 'Events'];

    const featuredPosts = siteContent.blog.featured.filter(post => post.featured);

    const filteredPosts = activeCategory === 'All'
        ? siteContent.blog.featured
        : siteContent.blog.featured.filter(post => post.category === activeCategory);

    return (
        <div>
            <PageHeader
                title="Blog & Insights"
                subtitle="Latest research, stories, and updates from our work across Africa"
            />

            {/* Featured Posts Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Featured Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Deep dives into the most pressing issues at the intersection of digital rights and mental health
                        </p>
                        <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {featuredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} featured={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Updates</h2>
                            <p className="text-gray-600">Stay informed with our latest research and insights</p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeCategory === category
                                            ? 'bg-primary-600 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} featured={false} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center">
                            Load More Articles
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Subscribe to our newsletter for the latest updates, research findings, and event announcements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-primary-400 bg-white/10 backdrop-blur-sm text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            />
                            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-primary-200 mt-4">
                            No spam, unsubscribe at any time
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;