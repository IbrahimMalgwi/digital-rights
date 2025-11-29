import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { siteContent } from '../data/content';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStatus, setActiveStatus] = useState('All');

    const categories = ['All', 'Education', 'Mental Health', 'Advocacy', 'Youth', 'Women', 'Research'];
    const statuses = ['All', 'Completed', 'Ongoing', 'Upcoming'];

    const featuredProjects = siteContent.projects.filter(project => project.featured);

    const filteredProjects = siteContent.projects.filter(project => {
        const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
        const statusMatch = activeStatus === 'All' || project.status === activeStatus;
        return categoryMatch && statusMatch;
    });

    return (
        <div>
            <PageHeader
                title="Our Projects"
                subtitle="Discover our initiatives making an impact across Africa in digital rights and mental health"
            />

            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Highlighted initiatives creating significant impact in communities across Africa
                            </p>
                            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} featured={true} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Projects Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Projects</h2>
                            <p className="text-gray-600">Explore our complete portfolio of initiatives</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
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

                            {/* Status Filter */}
                            <div className="flex flex-wrap gap-2">
                                {statuses.map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setActiveStatus(status)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                            activeStatus === status
                                                ? 'bg-primary-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} featured={false} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No projects found</h3>
                            <p className="text-gray-600">Try adjusting your filters to see more results</p>
                        </div>
                    )}

                    {/* Stats Section */}
                    <div className="mt-20 bg-gray-50 rounded-2xl p-8">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {siteContent.projects.length}+
                                </div>
                                <div className="text-gray-600">Active Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {siteContent.projects.filter(p => p.status === 'Completed').length}
                                </div>
                                <div className="text-gray-600">Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {siteContent.projects.filter(p => p.status === 'Ongoing').length}
                                </div>
                                <div className="text-gray-600">Ongoing</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                                <div className="text-gray-600">African Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Support Our Projects
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Your support helps us expand our reach and create more impact in communities across Africa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/donate"
                                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Donate Now
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors"
                            >
                                Partner With Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;