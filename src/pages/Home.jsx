import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/cards/Hero'; // Fixed import path
import BlogCard from '../components/cards/BlogCard';
import ProjectCard from '../components/cards/ProjectCard';
import { siteContent } from '../data/content';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />



            {/* Programs Section */}
            <section className="relative py-24 bg-white overflow-hidden">
                {/* Decorative elements with theme colors */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full filter blur-3xl opacity-50"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Programs</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            What we do
                        </h2>
                        <p className="text-xl text-gray-500">
                            Comprehensive solutions addressing digital rights and mental health challenges across Africa
                        </p>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {siteContent.programs?.map((program, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all hover:border-amber-200 border border-transparent"
                            >
                                <div className="text-4xl mb-4">{program.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {program.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {program.description}
                                </p>
                                <Link
                                    to={`/programs/${program.slug}`}
                                    className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700"
                                >
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/programs"
                            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            Explore all programs
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-gray-400 font-medium mb-4 block">Our work</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Featured projects
                            </h2>
                        </div>
                        <Link
                            to="/projects"
                            className="hidden md:flex items-center text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            View all
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                        {siteContent.projects?.featured?.slice(0, 2).map((project, index) => {
                            // Get category color
                            const categoryColor =
                                project.category === 'Education' ? 'bg-emerald-50 text-emerald-700' :
                                    project.category === 'Mental Health' ? 'bg-indigo-50 text-indigo-700' :
                                        project.category === 'Advocacy' ? 'bg-rose-50 text-rose-700' :
                                            project.category === 'Research' ? 'bg-amber-50 text-amber-700' :
                                                'bg-gray-50 text-gray-700';

                            return (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    variant="featured"
                                    categoryColor={categoryColor}
                                />
                            );
                        })}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteContent.projects?.featured?.slice(2, 5).map((project, index) => {
                            const categoryColor =
                                project.category === 'Education' ? 'bg-emerald-50 text-emerald-700' :
                                    project.category === 'Mental Health' ? 'bg-indigo-50 text-indigo-700' :
                                        project.category === 'Advocacy' ? 'bg-rose-50 text-rose-700' :
                                            project.category === 'Research' ? 'bg-amber-50 text-amber-700' :
                                                'bg-gray-50 text-gray-700';

                            return (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    variant="compact"
                                    categoryColor={categoryColor}
                                />
                            );
                        })}
                    </div>

                    {/* Mobile View All Link */}
                    <div className="text-center mt-12 md:hidden">
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            View all projects
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest Insights Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-gray-400 font-medium mb-4 block">Blog & insights</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Latest updates
                            </h2>
                        </div>
                        <Link
                            to="/blog"
                            className="hidden md:flex items-center text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            View all
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteContent.blog?.featured?.slice(0, 3).map((post, index) => (
                            <BlogCard key={index} post={post} />
                        ))}
                    </div>

                    {/* Mobile View All Link */}
                    <div className="text-center mt-12 md:hidden">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            View all articles
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Stay updated
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Get the latest news, stories, and impact reports delivered to your inbox.
                    </p>

                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="text-sm text-white/60 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;