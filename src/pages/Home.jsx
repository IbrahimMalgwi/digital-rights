import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/cards/BlogCard';
import ProjectCard from '../components/cards/ProjectCard';
import { siteContent } from '../data/content';
import { getAssetUrl } from '../utils/assets.js';

const Home = () => {
    const featuredProjects = siteContent.projects?.filter(project => project.featured) || [];
    const featuredHighlights = (siteContent.gallery || [])
        .filter(item => ['Community Outreach', 'Trainings', 'Advocacy Campaigns'].includes(item.category))
        .slice(0, 3);

    return (
        <div className="overflow-hidden aurora-bg">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.24),transparent_24rem),radial-gradient(circle_at_80%_35%,rgba(217,70,239,0.22),transparent_26rem),linear-gradient(135deg,#ffffff_0%,#faf5ff_48%,#f8fafc_100%)]"></div>
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-300/20 blur-3xl animate-pulse"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in section-intro">
                        <span className="section-eyebrow mb-8">{siteContent.hero.eyebrow}</span>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-secondary-950 leading-[0.95] tracking-tight">
                            {siteContent.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
                            {siteContent.hero.subtitle}
                        </p>
                        <p className="text-lg text-primary-700 font-bold">
                            {siteContent.hero.summary}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mt-10">
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

                    <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in">
                        <div className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-secondary-700 shadow-soft backdrop-blur">
                            Digital literacy workshops
                        </div>
                        <div className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-secondary-700 shadow-soft backdrop-blur">
                            Mental health support pathways
                        </div>
                        <div className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-secondary-700 shadow-soft backdrop-blur">
                            Policy advocacy for safe online spaces
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Impact Section */}
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-intro mb-16 animate-slide-up">
                        <span className="section-eyebrow">How We Serve</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            Our Approach
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="icon-card p-8 animate-fade-in">
                            <span className="text-5xl mb-4 block">🤝</span>
                            <h3 className="text-2xl font-semibold text-secondary-900 mb-3">We listen</h3>
                            <p className="text-secondary-600">We create compassionate support pathways so people can access mental health guidance and practical help when online harms or stress become overwhelming.</p>
                        </div>
                        <div className="icon-card p-8 animate-fade-in">
                            <span className="text-5xl mb-4 block">💡</span>
                            <h3 className="text-2xl font-semibold text-secondary-900 mb-3">We educate</h3>
                            <p className="text-secondary-600">We deliver digital literacy, online safety, and wellbeing workshops that help youth and women navigate technology with confidence and care.</p>
                        </div>
                        <div className="icon-card p-8 animate-fade-in">
                            <span className="text-5xl mb-4 block">⚖️</span>
                            <h3 className="text-2xl font-semibold text-secondary-900 mb-3">We advocate</h3>
                            <p className="text-secondary-600">We work with communities and decision-makers to strengthen protections for digital rights, safe workplaces, and healthier online spaces.</p>
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
                    <div className="section-intro mb-16 animate-slide-up">
                        <span className="section-eyebrow">Programs</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
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

            {/* Highlights Section */}
            <section className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 animate-slide-up">
                        <div>
                            <span className="text-secondary-400 font-medium mb-2 block tracking-wide">Recent highlights</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                                Stories from our work
                            </h2>
                        </div>
                        <Link
                            to="/gallery"
                            className="hidden md:flex items-center text-secondary-600 hover:text-primary-600 transition-colors font-medium"
                        >
                            Browse the gallery
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {featuredHighlights.map((item, index) => (
                            <div key={item.id} className="group card-hover overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={getAssetUrl(item.image)}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-secondary-900 backdrop-blur-sm">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">{item.title}</h3>
                                    <p className="text-secondary-600 text-sm leading-relaxed mb-4">{item.description}</p>
                                    <p className="text-sm text-secondary-400">
                                        📍 {item.location || 'N/A'} • {item.date || 'N/A'}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                            Protecting rights. Supporting wellbeing.
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Your support helps us expand mental health support, digital literacy programs, and advocacy for safer online spaces across Africa.
                        </p>
                    </div>

                    <Link
                        to="/donate"
                        className="btn-secondary group inline-flex items-center px-8 py-4 animate-fade-in"
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

