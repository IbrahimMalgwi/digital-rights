import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/cards/BlogCard';
import ProjectCard from '../components/cards/ProjectCard';
import { siteContent } from '../data/content';

const Home = () => {
    const featuredProjects = siteContent.projects?.filter(project => project.featured) || [];

    return (
        <div className="overflow-hidden aurora-bg">

            {/* Hero Section - Women Empowerment */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.24),transparent_24rem),radial-gradient(circle_at_80%_35%,rgba(217,70,239,0.22),transparent_26rem),linear-gradient(135deg,#ffffff_0%,#faf5ff_48%,#f8fafc_100%)]"></div>
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-300/20 blur-3xl animate-pulse"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in">
                        <span className="section-eyebrow mb-8">Digital rights. Mental health. Women first.</span>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-secondary-950 mb-8 leading-[0.95] tracking-tight">
                            {siteContent.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {siteContent.hero.subtitle}
                        </p>
                        <p className="text-lg text-primary-700 font-bold mb-12">
                            Every woman deserves a life free from inequality
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                        <Link
                            to={siteContent.hero.primaryButton.link}
                            className="btn-primary group px-8 py-4"
                        >
                            {siteContent.hero.primaryButton.text}
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to={siteContent.hero.secondaryButton.link}
                            className="btn-secondary px-8 py-4"
                        >
                            {siteContent.hero.secondaryButton.text}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Impact Section */}
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">How We Serve</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                            Our Approach
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="group text-center p-8 rounded-2xl hover:bg-primary-50 transition-all duration-300 animate-fade-in">
                            <span className="text-5xl mb-4 block">❤️</span>
                            <h3 className="text-2xl font-semibold text-secondary-900 mb-3">We Care</h3>
                            <p className="text-secondary-600">Today's youth need a helpful hand and right guidance at every stage. Here's where we take care of them like our own.</p>
                        </div>
                        <div className="group text-center p-8 rounded-2xl hover:bg-accent-50 transition-all duration-300 animate-fade-in">
                            <span className="text-5xl mb-4 block">📚</span>
                            <h3 className="text-2xl font-semibold text-secondary-900 mb-3">We Educate</h3>
                            <p className="text-secondary-600">We run small-scale schools for the underprivileged children and youth of daily wage workers for a better future.</p>
                        </div>
                        <div className="group text-center p-8 rounded-2xl hover:bg-secondary-100 transition-all duration-300 animate-fade-in">
                            <span className="text-5xl mb-4 block">💪</span>
                            <h3 className="text-2xl font-semibold text-secondary-900 mb-3">We Empower</h3>
                            <p className="text-secondary-600">We equip women with the skills, resources, and confidence they need to achieve financial independence and leadership in their communities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="page-section-white">
                {/* Decorative elements with new theme colors */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-50 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Programs</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                            What we do
                        </h2>
                        <p className="text-lg text-secondary-600">
                            Comprehensive solutions addressing digital rights and mental health challenges across Africa
                        </p>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {siteContent.programs?.map((program, index) => (
                            <div
                                key={index}
                                className="group card-hover p-6 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{program.icon}</div>
                                <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-secondary-500 text-sm mb-4 leading-relaxed">
                                    {program.description}
                                </p>
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center text-sm font-bold text-primary-700 hover:text-accent-700 transition-colors"
                                >
                                    Learn more
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-secondary-600 hover:text-primary-600 transition-colors font-medium"
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
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 animate-slide-up">
                        <div>
                            <span className="text-secondary-400 font-medium mb-2 block tracking-wide">Our work</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                                Featured projects
                            </h2>
                        </div>
                        <Link
                            to="/projects"
                            className="hidden md:flex items-center text-secondary-600 hover:text-primary-600 transition-colors font-medium"
                        >
                            View all
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Projects Grid - Featured (large) */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                        {featuredProjects.slice(0, 2).map((project, index) => {
                            // Updated category colors to match new theme
                            const categoryColor = {
                                Education: 'bg-primary-50 text-primary-700',
                                'Mental Health': 'bg-accent-50 text-accent-700',
                                Advocacy: 'bg-secondary-100 text-secondary-800',
                                Research: 'bg-primary-100 text-primary-800',
                            }[project.category] || 'bg-secondary-50 text-secondary-700';

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
                        {featuredProjects.slice(2, 5).map((project, index) => {
                            const categoryColor = {
                                Education: 'bg-primary-50 text-primary-700',
                                'Mental Health': 'bg-accent-50 text-accent-700',
                                Advocacy: 'bg-secondary-100 text-secondary-800',
                                Research: 'bg-primary-100 text-primary-800',
                            }[project.category] || 'bg-secondary-50 text-secondary-700';

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
                            className="inline-flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
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
            <section className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 animate-slide-up">
                        <div>
                            <span className="text-secondary-400 font-medium mb-2 block tracking-wide">Blog & insights</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                                Latest updates
                            </h2>
                        </div>
                        <Link
                            to="/blog"
                            className="hidden md:flex items-center text-secondary-600 hover:text-primary-600 transition-colors font-medium"
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
                            className="inline-flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                            View all articles
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Section - Modern redesign */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Empowering Change, One Step at a Time
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Your support helps us continue our mission to empower women and protect digital rights across Africa.
                        </p>
                    </div>

                    <Link
                        to="/donate"
                        className="inline-flex items-center px-8 py-4 bg-white text-secondary-900 rounded-full font-bold hover:bg-secondary-100 transition-all hover:scale-105 shadow-large animate-fade-in"
                    >
                        DONATE
                        <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">❤️</span>
                    </Link>

                    <p className="text-sm text-white/60 mt-8">
                        Every contribution makes a difference in breaking barriers and creating opportunities
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;

