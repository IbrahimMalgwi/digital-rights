import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import TeamCard from '../components/TeamCard';
import { siteContent } from '../data/content';

const Home = () => {
    // Animation variants for staggered animations
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <Hero />

            {/* Trust Badges / Partners Strip */}
            <div className="bg-white border-y border-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-secondary-500 mb-6 tracking-wider uppercase">
                        Trusted by leading organizations
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="h-8 w-24 bg-gradient-to-r from-primary-200 to-accent-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Programs Section - Enhanced */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Our Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Making a Difference Through{' '}
                            <span className="gradient-text">Focused Action</span>
                        </h2>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Comprehensive solutions addressing digital rights and mental health challenges across Africa
                        </p>
                        <div className="flex justify-center mt-8">
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {siteContent.programs?.map((program, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 card-hover border border-gray-100 animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon with animated background */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-primary-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                        {program.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-secondary-600 mb-4 leading-relaxed">
                                    {program.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {program.features?.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-secondary-600">
                                            <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Progress Indicator (if applicable) */}
                                {program.progress && (
                                    <div className="mt-4">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-secondary-500">Progress</span>
                                            <span className="font-semibold text-primary-600">{program.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-primary-500 to-accent-600 h-1.5 rounded-full transition-all duration-500"
                                                style={{ width: `${program.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}

                                {/* Learn More Link */}
                                <Link
                                    to={`/programs/${program.slug}`}
                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link mt-4"
                                >
                                    <span>Learn more</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-16">
                        <Link
                            to="/programs"
                            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-large"
                        >
                            Explore All Programs
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section - Enhanced */}
            <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold backdrop-blur-sm mb-4">
                            Our Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Making a Difference{' '}
                            <span className="text-primary-300">Together</span>
                        </h2>
                        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                            Real results from our work across the continent
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            { number: '50+', label: 'Projects Completed', icon: '🚀' },
                            { number: '15', label: 'African Countries', icon: '🌍' },
                            { number: '10K+', label: 'People Reached', icon: '👥' },
                            { number: '25+', label: 'Partner Organizations', icon: '🤝' }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group text-center transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4 filter drop-shadow-lg">{stat.icon}</div>
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                                    {stat.number}
                                </div>
                                <div className="text-primary-200 text-sm lg:text-base">
                                    {stat.label}
                                </div>

                                {/* Decorative line */}
                                <div className="w-12 h-0.5 bg-primary-400 mx-auto mt-4 opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <Link
                            to="/impact"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            View Full Impact Report
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
                        <div className="max-w-2xl">
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                                Our Work
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Featured{' '}
                                <span className="gradient-text">Projects</span>
                            </h2>
                            <p className="text-xl text-secondary-600">
                                Discover how we're creating lasting change in communities across Africa
                            </p>
                        </div>

                        <Link
                            to="/projects"
                            className="mt-4 lg:mt-0 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                        >
                            <span>View All Projects</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {siteContent.projects?.featured?.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} project={project} featured={index === 0} />
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteContent.projects?.featured?.slice(2, 5).map((project, index) => (
                            <ProjectCard key={index} project={project} variant="compact" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Insights Section - Enhanced */}
            <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Blog & Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Latest{' '}
                            <span className="gradient-text">News & Updates</span>
                        </h2>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Recent research, stories, and insights from our work across Africa
                        </p>
                    </div>

                    {/* Featured Blog Post */}
                    <div className="mb-12">
                        <BlogCard
                            post={siteContent.blog?.featured[0]}
                            featured={true}
                        />
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.blog?.featured?.slice(1, 4).map((post, index) => (
                            <BlogCard
                                key={index}
                                post={post}
                                variant={index === 0 ? 'horizontal' : 'default'}
                            />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-16">
                        <Link
                            to="/blog"
                            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-large group"
                        >
                            <span>View All Articles</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Stay Updated with Our Work
                    </h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Get the latest news, stories, and impact reports delivered to your inbox
                    </p>

                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="text-sm text-primary-200 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;