import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import { siteContent } from '../data/content';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Programs Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our Programs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive solutions addressing digital rights and mental health challenges
                        </p>
                        <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {siteContent.programs.map((program, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary-50 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-primary-200"
                            >
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-700">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {program.description}
                                </p>
                                <ul className="space-y-2">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
                            <div className="text-gray-400">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-400 mb-2">15</div>
                            <div className="text-gray-400">African Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-400 mb-2">10K+</div>
                            <div className="text-gray-400">People Reached</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-400 mb-2">25+</div>
                            <div className="text-gray-400">Partner Organizations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blog Posts Preview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Recent research and stories from our work across Africa
                        </p>
                        <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.blog.featured.slice(0, 3).map((post) => (
                            <BlogCard key={post.id} post={post} featured={false} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/blog" className="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center">
                            View All Articles
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;