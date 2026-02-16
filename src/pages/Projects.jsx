import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { siteContent } from '../data/content';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStatus, setActiveStatus] = useState('All');
    const [viewMode, setViewMode] = useState('grid'); // grid or list
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');

    // Enhanced categories with icons and counts
    const categories = [
        { name: 'All', icon: '📋', count: siteContent.projects?.length || 0 },
        { name: 'Education', icon: '📚', count: siteContent.projects?.filter(p => p.category === 'Education').length || 0 },
        { name: 'Mental Health', icon: '🧠', count: siteContent.projects?.filter(p => p.category === 'Mental Health').length || 0 },
        { name: 'Advocacy', icon: '⚖️', count: siteContent.projects?.filter(p => p.category === 'Advocacy').length || 0 },
        { name: 'Youth', icon: '👥', count: siteContent.projects?.filter(p => p.category === 'Youth').length || 0 },
        { name: 'Women', icon: '👩', count: siteContent.projects?.filter(p => p.category === 'Women').length || 0 },
        { name: 'Research', icon: '🔬', count: siteContent.projects?.filter(p => p.category === 'Research').length || 0 }
    ];

    const statuses = [
        { name: 'All', icon: '🔄', color: 'gray' },
        { name: 'Ongoing', icon: '⚡', color: 'blue' },
        { name: 'Completed', icon: '✅', color: 'green' },
        { name: 'Upcoming', icon: '📅', color: 'purple' }
    ];

    const featuredProjects = siteContent.projects?.filter(project => project.featured) || [];

    // Filter and search projects
    const filteredProjects = (siteContent.projects || []).filter(project => {
        const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
        const statusMatch = activeStatus === 'All' || project.status === activeStatus;
        const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.location.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && statusMatch && searchMatch;
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    // Calculate stats
    const stats = {
        total: siteContent.projects?.length || 0,
        ongoing: siteContent.projects?.filter(p => p.status === 'Ongoing').length || 0,
        completed: siteContent.projects?.filter(p => p.status === 'Completed').length || 0,
        countries: 15,
        impact: '100K+'
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title="Our Projects"
                subtitle="Discover our initiatives making an impact across Africa in digital rights and mental health"
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Stats Strip */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-large p-8 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl mb-2">📊</div>
                                <div className="text-2xl font-bold gradient-text">{stats.total}+</div>
                                <div className="text-sm text-secondary-600">Total Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">⚡</div>
                                <div className="text-2xl font-bold gradient-text">{stats.ongoing}</div>
                                <div className="text-sm text-secondary-600">Active Now</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">✅</div>
                                <div className="text-2xl font-bold gradient-text">{stats.completed}</div>
                                <div className="text-sm text-secondary-600">Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🌍</div>
                                <div className="text-2xl font-bold gradient-text">{stats.countries}</div>
                                <div className="text-sm text-secondary-600">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
                <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                                    Featured Initiatives
                                </span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                                    Spotlight{' '}
                                    <span className="gradient-text">Projects</span>
                                </h2>
                            </div>
                            <Link
                                to="/projects/featured"
                                className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                            >
                                View All Featured
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {featuredProjects.slice(0, 2).map((project, index) => (
                                <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                                    <ProjectCard project={project} featured={true} />
                                </div>
                            ))}
                        </div>

                        {featuredProjects.length > 2 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                {featuredProjects.slice(2, 5).map((project, index) => (
                                    <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                                        <ProjectCard project={project} variant="compact" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Search and Filter Bar */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-glass border-b border-gray-200 shadow-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96">
                            <input
                                type="text"
                                placeholder="Search projects by title, description, or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                            <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-xl transition-colors ${
                                    viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-xl transition-colors ${
                                    viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Projects Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-6 mb-8">
                        {/* Categories */}
                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setActiveCategory(category.name)}
                                        className={`
                                            inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                            ${activeCategory === category.name
                                            ? 'bg-primary-600 text-white shadow-soft scale-105'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }
                                        `}
                                    >
                                        <span className="mr-2">{category.icon}</span>
                                        {category.name}
                                        <span className={`
                                            ml-2 px-2 py-0.5 rounded-full text-xs
                                            ${activeCategory === category.name
                                            ? 'bg-white/20 text-white'
                                            : 'bg-gray-300 text-gray-700'
                                        }
                                        `}>
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Status</h3>
                            <div className="flex flex-wrap gap-2">
                                {statuses.map((status) => (
                                    <button
                                        key={status.name}
                                        onClick={() => setActiveStatus(status.name)}
                                        className={`
                                            inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                            ${activeStatus === status.name
                                            ? `bg-${status.color}-600 text-white shadow-soft scale-105`
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }
                                        `}
                                    >
                                        <span className="mr-2">{status.icon}</span>
                                        {status.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-secondary-600">
                            Showing <span className="font-semibold text-gray-900">{visibleProjects.length}</span> of{' '}
                            <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projects
                        </p>
                        <p className="text-sm text-secondary-500">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    {/* Projects Grid/List */}
                    {filteredProjects.length > 0 ? (
                        <>
                            {viewMode === 'grid' ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {visibleProjects.map((project, index) => (
                                        <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                            <ProjectCard project={project} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {visibleProjects.map((project, index) => (
                                        <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                            <ProjectCard project={project} variant="horizontal" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Load More Button */}
                            {visibleCount < filteredProjects.length && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={() => setVisibleCount(prev => prev + 6)}
                                        className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft"
                                    >
                                        Load More Projects
                                        <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-secondary-600 mb-6">Try adjusting your filters or search criteria</p>
                            <button
                                onClick={() => {
                                    setActiveCategory('All');
                                    setActiveStatus('All');
                                    setSearchQuery('');
                                }}
                                className="btn-primary"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Impact Map Section */}
            <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-soft">
                            Geographic Reach
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Impact Across{' '}
                            <span className="gradient-text">Africa</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Our projects span 15 countries, reaching communities from Nairobi to Cape Town
                        </p>
                    </div>

                    {/* Simple Map Visualization */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-large border border-gray-200">
                        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-9xl mb-4">🗺️</div>
                                <p className="text-primary-600 font-semibold">Interactive Project Map</p>
                                <p className="text-secondary-500 text-sm mt-2">Click to explore projects by region</p>
                            </div>
                        </div>

                        {/* Country Stats */}
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-8">
                            {['Kenya', 'Nigeria', 'South Africa', 'Ghana', 'Uganda'].map((country) => (
                                <div key={country} className="text-center p-3 bg-gray-50 rounded-xl">
                                    <div className="font-semibold text-gray-900">{country}</div>
                                    <div className="text-sm text-primary-600">{Math.floor(Math.random() * 10) + 1} projects</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Support Our{' '}
                        <span className="text-primary-200">Projects</span>
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Your support helps us expand our reach and create more impact in communities across Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Donate Now
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Partner With Us
                        </Link>
                    </div>

                    <p className="text-sm text-primary-200 mt-8">
                        Join 50+ organizations already making a difference
                    </p>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h3>
                                <p className="text-secondary-600">
                                    Get the latest project updates and impact stories delivered to your inbox
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                <button className="px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;