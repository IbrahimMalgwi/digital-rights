import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/cards/ProjectCard';
import { siteContent } from '../data/content';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStatus, setActiveStatus] = useState('All');
    const [viewMode, setViewMode] = useState('grid');
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');

    // Enhanced projects with external links
    const allProjects = [
        ...(siteContent.projects || []).filter(p =>
            !p.title.includes("Data Workers' Inquiry") &&
            !p.title.includes("WDFA") &&
            !p.title.includes("Women Digital Futures Africa")
        ),
        {
            id: 'data-workers-inquiry',
            title: "Data Workers' Inquiry",
            description: "A global, radically participatory research initiative where data workers become community researchers, documenting their own labor conditions and building transnational solidarity.",
            category: "Research",
            status: "Ongoing",
            location: "Global",
            impact: "16 researchers, 9 countries",
            image: null,
            featured: true,
            externalUrl: "https://dataworkers.org",
            external: true
        },
        {
            id: 'wdfa',
            title: "Women Digital Futures Africa (WDFA)",
            description: "Empowering African women with digital skills, AI literacy, and safe online practices through practical training, mentorship, and advocacy.",
            category: "Women",
            status: "Ongoing",
            location: "Multiple Countries",
            impact: "500+ women trained",
            image: null,
            featured: true,
            externalUrl: "https://wdfa.org",
            external: true
        }
    ];

    // Categories with colors (matching About/Awards pages)
    const categories = [
        { name: 'All', icon: '📋', count: allProjects.length, color: 'bg-amber-50 text-amber-700' },
        { name: 'Education', icon: '📚', count: allProjects.filter(p => p.category === 'Education').length, color: 'bg-emerald-50 text-emerald-700' },
        { name: 'Mental Health', icon: '🧠', count: allProjects.filter(p => p.category === 'Mental Health').length, color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Advocacy', icon: '⚖️', count: allProjects.filter(p => p.category === 'Advocacy').length, color: 'bg-rose-50 text-rose-700' },
        { name: 'Youth', icon: '👥', count: allProjects.filter(p => p.category === 'Youth').length, color: 'bg-amber-50 text-amber-700' },
        { name: 'Women', icon: '👩', count: allProjects.filter(p => p.category === 'Women').length, color: 'bg-emerald-50 text-emerald-700' },
        { name: 'Research', icon: '🔬', count: allProjects.filter(p => p.category === 'Research').length, color: 'bg-indigo-50 text-indigo-700' }
    ];

    const statuses = [
        { name: 'All', icon: '🔄', color: 'gray' },
        { name: 'Ongoing', icon: '⚡', color: 'blue' },
        { name: 'Completed', icon: '✅', color: 'green' },
        { name: 'Upcoming', icon: '📅', color: 'purple' }
    ];

    const featuredProjects = allProjects.filter(project => project.featured) || [];

    // Filter and search projects
    const filteredProjects = allProjects.filter(project => {
        const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
        const statusMatch = activeStatus === 'All' || project.status === activeStatus;
        const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (project.location && project.location.toLowerCase().includes(searchQuery.toLowerCase()));
        return categoryMatch && statusMatch && searchMatch;
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);


    return (
        <div>
            {/* Hero Section - Bold & Graphic (matching About/Awards) */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-sm mb-8">
                            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">→</span>
                            <span className="text-gray-900 font-medium">Projects</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Making Impact Across Africa
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Projects
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Discover our initiatives making an impact across Africa in digital rights and mental health.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    setActiveCategory('All');
                                    setActiveStatus('All');
                                    setSearchQuery('');
                                }}
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Explore all projects
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <span className="text-gray-400 font-medium mb-4 block">Featured</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Spotlight projects
                                </h2>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {featuredProjects.slice(0, 2).map((project, index) => (
                                <div key={project.id} className="group">
                                    {project.external ? (
                                        <a
                                            href={project.externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block relative"
                                        >
                                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                                                <span className="mr-1">🔗</span> External
                                            </div>
                                            <ProjectCard project={project} featured={true} />
                                        </a>
                                    ) : (
                                        <Link to={`/projects/${project.id}`} className="block relative">
                                            <ProjectCard project={project} featured={true} />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {featuredProjects.length > 2 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {featuredProjects.slice(2, 5).map((project, index) => (
                                    <div key={project.id} className="group">
                                        {project.external ? (
                                            <a
                                                href={project.externalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block relative"
                                            >
                                                <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                                                    <span className="mr-1">🔗</span> External
                                                </div>
                                                <ProjectCard project={project} variant="compact" />
                                            </a>
                                        ) : (
                                            <Link to={`/projects/${project.id}`} className="block">
                                                <ProjectCard project={project} variant="compact" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Search and Filter Bar */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            />
                            <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-full transition-all ${
                                    viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-full transition-all ${
                                    viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    <div className="flex flex-wrap gap-6 mb-12">
                        {/* Categories */}
                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => {
                                    const categoryColor = categories.find(c => c.name === category.name)?.color || 'bg-gray-50 text-gray-700';
                                    return (
                                        <button
                                            key={category.name}
                                            onClick={() => setActiveCategory(category.name)}
                                            className={`
                                                group px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                                                ${activeCategory === category.name
                                                ? 'bg-gray-900 text-white'
                                                : `${categoryColor} hover:shadow-md`
                                            }
                                            `}
                                        >
                                            <span className="mr-2">{category.icon}</span>
                                            {category.name}
                                            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                                activeCategory === category.name
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-white/60 text-gray-600'
                                            }`}>
                                                {category.count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Status</h3>
                            <div className="flex flex-wrap gap-2">
                                {statuses.map((status) => (
                                    <button
                                        key={status.name}
                                        onClick={() => setActiveStatus(status.name)}
                                        className={`
                                            px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                                            ${activeStatus === status.name
                                            ? 'bg-gray-900 text-white'
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

                    {/* External Projects Note */}
                    <div className="mb-8 p-4 bg-amber-50 rounded-2xl border border-amber-200">
                        <div className="flex items-center">
                            <span className="text-2xl mr-3">🔗</span>
                            <p className="text-amber-800 text-sm">
                                <span className="font-semibold">Note:</span> Data Workers' Inquiry and WDFA are external projects. Click on their cards to visit their dedicated websites.
                            </p>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-500">
                            Showing <span className="font-semibold text-gray-900">{visibleProjects.length}</span> of{' '}
                            <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projects
                        </p>
                    </div>

                    {/* Projects Grid/List */}
                    {filteredProjects.length > 0 ? (
                        <>
                            {viewMode === 'grid' ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {visibleProjects.map((project, index) => {
                                        // Get category color
                                        const categoryColor =
                                            project.category === 'Education' ? 'bg-emerald-50 text-emerald-700' :
                                                project.category === 'Mental Health' ? 'bg-indigo-50 text-indigo-700' :
                                                    project.category === 'Advocacy' ? 'bg-rose-50 text-rose-700' :
                                                        project.category === 'Youth' ? 'bg-amber-50 text-amber-700' :
                                                            project.category === 'Women' ? 'bg-emerald-50 text-emerald-700' :
                                                                project.category === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                                                                    'bg-amber-50 text-amber-700';

                                        return (
                                            <div key={project.id} className="group">
                                                {project.external ? (
                                                    <a
                                                        href={project.externalUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block relative"
                                                    >
                                                        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                                                            <span className="mr-1">🔗</span> External
                                                        </div>
                                                        <ProjectCard
                                                            project={project}
                                                            categoryColor={categoryColor}
                                                        />
                                                    </a>
                                                ) : (
                                                    <Link to={`/projects/${project.id}`} className="block">
                                                        <ProjectCard
                                                            project={project}
                                                            categoryColor={categoryColor}
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {visibleProjects.map((project, index) => {
                                        const categoryColor =
                                            project.category === 'Education' ? 'bg-emerald-50 text-emerald-700' :
                                                project.category === 'Mental Health' ? 'bg-indigo-50 text-indigo-700' :
                                                    project.category === 'Advocacy' ? 'bg-rose-50 text-rose-700' :
                                                        project.category === 'Youth' ? 'bg-amber-50 text-amber-700' :
                                                            project.category === 'Women' ? 'bg-emerald-50 text-emerald-700' :
                                                                project.category === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                                                                    'bg-amber-50 text-amber-700';

                                        return (
                                            <div key={project.id} className="group">
                                                {project.external ? (
                                                    <a
                                                        href={project.externalUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block relative"
                                                    >
                                                        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                                                            <span className="mr-1">🔗</span> External
                                                        </div>
                                                        <ProjectCard
                                                            project={project}
                                                            variant="horizontal"
                                                            categoryColor={categoryColor}
                                                        />
                                                    </a>
                                                ) : (
                                                    <Link to={`/projects/${project.id}`} className="block">
                                                        <ProjectCard
                                                            project={project}
                                                            variant="horizontal"
                                                            categoryColor={categoryColor}
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Load More Button */}
                            {visibleCount < filteredProjects.length && (
                                <div className="text-center mt-16">
                                    <button
                                        onClick={() => setVisibleCount(prev => prev + 6)}
                                        className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                                    >
                                        Load more projects
                                        <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
                            <button
                                onClick={() => {
                                    setActiveCategory('All');
                                    setActiveStatus('All');
                                    setSearchQuery('');
                                }}
                                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section - Bold & Graphic (matching About page) */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Support our projects
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Your support helps us expand our reach and create more impact in communities across Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            Donate now
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Partner with us
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        ✦ Join 50+ organizations already making a difference
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Projects;