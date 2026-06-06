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

    const allProjects = siteContent.projects || [];

    // Dynamic categories with updated colors
    const categories = [
        { name: 'All', icon: '📁', count: allProjects.length, color: 'bg-secondary-100 text-secondary-800' },
        ...Array.from(new Set(allProjects.map(p => p.category))).map(category => ({
            name: category,
            count: allProjects.filter(p => p.category === category).length,
            icon: category === 'Education' ? '📚' :
                category === 'Mental Health' ? '🧠' :
                    category === 'Advocacy' ? '📢' :
                        category === 'Youth' ? '👥' :
                            category === 'Women' ? '🚺' :
                                category === 'Research' ? '🔬' : '📌',
            color: category === 'Education' ? 'bg-primary-50 text-primary-700' :
                category === 'Mental Health' ? 'bg-accent-50 text-accent-700' :
                    category === 'Advocacy' ? 'bg-secondary-100 text-secondary-800' :
                        category === 'Youth' ? 'bg-primary-50 text-primary-700' :
                            category === 'Women' ? 'bg-accent-50 text-accent-700' :
                                category === 'Research' ? 'bg-secondary-100 text-secondary-800' :
                                    'bg-primary-50 text-primary-700'
        }))
    ];

    const statuses = [
        { name: 'All', icon: '🔄' },
        { name: 'Ongoing', icon: '⚡' },
        { name: 'Completed', icon: '✅' },
        { name: 'Upcoming', icon: '🔜' }
    ];

    const featuredProjects = allProjects.filter(project => project.featured) || [];

    // Filtering logic
    const filteredProjects = allProjects.filter(project => {
        const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
        const statusMatch = activeStatus === 'All' || project.status === activeStatus;
        const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (project.location && project.location.toLowerCase().includes(searchQuery.toLowerCase()));
        return categoryMatch && statusMatch && searchMatch;
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasExternalProjects = allProjects.some(p => p.external);

    return (
        <div className="overflow-hidden">
            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
                <section className="page-section-soft">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-6">
                            {featuredProjects.slice(0, 2).map((project, index) => (
                                <div key={project.id} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                    {project.external ? (
                                        <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-secondary-900 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
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
                                            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                                                <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-secondary-900 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
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

                        <div className="text-center max-w-2xl mx-auto mt-16 animate-slide-up">
                            <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Featured</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                                Spotlight projects
                            </h2>
                        </div>
                    </div>
                </section>
            )}

            {/* Sticky Search and Filter Bar – updated colors */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-secondary-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full lg:w-96">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-secondary-50 border border-secondary-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-secondary-900 placeholder:text-secondary-400"
                            />
                            <svg className="absolute left-4 top-3.5 w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-full transition-all ${
                                    viewMode === 'grid' ? 'bg-secondary-900 text-white' : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-full transition-all ${
                                    viewMode === 'list' ? 'bg-secondary-900 text-white' : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
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
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {allProjects.length > 0 && (
                        <>
                            <div className="text-center mb-12 animate-fade-in">
                                <h3 className="text-sm font-medium text-secondary-400 uppercase tracking-wider mb-4">Filter by Category</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {categories.map((category) => (
                                        <button
                                            key={category.name}
                                            onClick={() => setActiveCategory(category.name)}
                                            className={`
                                                group px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                                                ${activeCategory === category.name
                                                ? 'bg-secondary-900 text-white'
                                                : `${category.color} hover:shadow-md`
                                            }
                                            `}
                                        >
                                            <span className="mr-2">{category.icon}</span>
                                            {category.name}
                                            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                                activeCategory === category.name
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-white/60 text-secondary-600'
                                            }`}>
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                                <h3 className="text-sm font-medium text-secondary-400 uppercase tracking-wider mb-4">Filter by Status</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {statuses.map((status) => (
                                        <button
                                            key={status.name}
                                            onClick={() => setActiveStatus(status.name)}
                                            className={`
                                                px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                                                ${activeStatus === status.name
                                                ? 'bg-secondary-900 text-white'
                                                : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                                            }
                                            `}
                                        >
                                            <span className="mr-2">{status.icon}</span>
                                            {status.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {hasExternalProjects && (
                        <div className="mb-8 max-w-2xl mx-auto animate-fade-in">
                            <div className="p-4 bg-primary-50 rounded-2xl border border-primary-200 text-center">
                                <p className="text-primary-800 text-sm">
                                    <span className="font-semibold">Note:</span> Some projects are external. Click on their cards to visit their dedicated websites.
                                </p>
                            </div>
                        </div>
                    )}

                    {allProjects.length > 0 && (
                        <div className="text-center mb-6">
                            <p className="text-secondary-500">
                                Showing <span className="font-semibold text-secondary-900">{visibleProjects.length}</span> of{' '}
                                <span className="font-semibold text-secondary-900">{filteredProjects.length}</span> projects
                            </p>
                        </div>
                    )}

                    {allProjects.length > 0 ? (
                        filteredProjects.length > 0 ? (
                            <>
                                {viewMode === 'grid' ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {visibleProjects.map((project, index) => {
                                            const categoryColor = {
                                                Education: 'bg-primary-50 text-primary-700',
                                                'Mental Health': 'bg-accent-50 text-accent-700',
                                                Advocacy: 'bg-secondary-100 text-secondary-800',
                                                Youth: 'bg-primary-50 text-primary-700',
                                                Women: 'bg-accent-50 text-accent-700',
                                                Research: 'bg-secondary-100 text-secondary-800',
                                            }[project.category] || 'bg-primary-50 text-primary-700';

                                            return (
                                                <div key={project.id} className="group animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                                    {project.external ? (
                                                        <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                                                            <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-secondary-900 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                                                                <span className="mr-1">🔗</span> External
                                                            </div>
                                                            <ProjectCard project={project} categoryColor={categoryColor} />
                                                        </a>
                                                    ) : (
                                                        <Link to={`/projects/${project.id}`} className="block">
                                                            <ProjectCard project={project} categoryColor={categoryColor} />
                                                        </Link>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="space-y-4 max-w-3xl mx-auto">
                                        {visibleProjects.map((project, index) => {
                                            const categoryColor = {
                                                Education: 'bg-primary-50 text-primary-700',
                                                'Mental Health': 'bg-accent-50 text-accent-700',
                                                Advocacy: 'bg-secondary-100 text-secondary-800',
                                                Youth: 'bg-primary-50 text-primary-700',
                                                Women: 'bg-accent-50 text-accent-700',
                                                Research: 'bg-secondary-100 text-secondary-800',
                                            }[project.category] || 'bg-primary-50 text-primary-700';

                                            return (
                                                <div key={project.id} className="group animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                                    {project.external ? (
                                                        <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                                                            <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-secondary-900 px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                                                                <span className="mr-1">🔗</span> External
                                                            </div>
                                                            <ProjectCard project={project} variant="horizontal" categoryColor={categoryColor} />
                                                        </a>
                                                    ) : (
                                                        <Link to={`/projects/${project.id}`} className="block">
                                                            <ProjectCard project={project} variant="horizontal" categoryColor={categoryColor} />
                                                        </Link>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {visibleCount < filteredProjects.length && (
                                    <div className="text-center mt-16">
                                        <button
                                            onClick={() => setVisibleCount(prev => prev + 6)}
                                            className="group px-8 py-4 bg-secondary-900 text-white rounded-full font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-medium"
                                        >
                                            Load more projects
                                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">↓</span>
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 bg-secondary-50 rounded-3xl max-w-2xl mx-auto animate-fade-in">
                                <div className="text-6xl mb-4">📭</div>
                                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No projects found</h3>
                                <p className="text-secondary-500 mb-6">Try adjusting your filters or search criteria</p>
                                <button
                                    onClick={() => {
                                        setActiveCategory('All');
                                        setActiveStatus('All');
                                        setSearchQuery('');
                                    }}
                                    className="px-6 py-3 bg-secondary-900 text-white rounded-full font-medium hover:bg-primary-600 transition-all shadow-soft hover:scale-105"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )
                    ) : (
                        <div className="text-center py-20 bg-secondary-50 rounded-3xl max-w-2xl mx-auto animate-fade-in">
                            <div className="text-6xl mb-4">📁</div>
                            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No projects yet</h3>
                            <p className="text-secondary-500">Projects will be added soon.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section – updated gradient */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-slide-up">
                        Support our projects
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
                        Your support helps us expand our reach and create more impact in communities across Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-secondary-900 rounded-full font-bold hover:bg-secondary-100 transition-all hover:scale-105 shadow-large"
                        >
                            Donate now
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">❤️</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Partner with us
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        🤝 Join 50+ organizations already making a difference
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Projects;

