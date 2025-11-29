import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, featured = false }) => {
    const statusColors = {
        'Completed': 'bg-green-100 text-green-800',
        'Ongoing': 'bg-blue-100 text-blue-800',
        'Upcoming': 'bg-purple-100 text-purple-800'
    };

    const categoryColors = {
        'Education': 'bg-orange-100 text-orange-800',
        'Mental Health': 'bg-pink-100 text-pink-800',
        'Advocacy': 'bg-indigo-100 text-indigo-800',
        'Youth': 'bg-cyan-100 text-cyan-800',
        'Women': 'bg-rose-100 text-rose-800',
        'Research': 'bg-emerald-100 text-emerald-800'
    };

    if (featured) {
        return (
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        ) : (
                            <div className="text-center p-8">
                                <div className="text-6xl mb-4">🚀</div>
                                <p className="text-lg font-semibold">Project Image</p>
                            </div>
                        )}
                    </div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                            {project.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
                            {project.category}
                        </span>
                    </div>
                    {project.featured && (
                        <div className="absolute top-4 right-4">
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                Featured
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Location</p>
                            <p className="text-sm font-medium text-gray-800">{project.location}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Duration</p>
                            <p className="text-sm font-medium text-gray-800">{project.duration}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Impact</p>
                            <p className="text-sm font-medium text-primary-600">{project.impact}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 mb-2">Partners:</p>
                            <div className="flex flex-wrap gap-1">
                                {project.partners.slice(0, 2).map((partner, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                        {partner}
                                    </span>
                                ))}
                                {project.partners.length > 2 && (
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                        +{project.partners.length - 2} more
                                    </span>
                                )}
                            </div>
                        </div>
                        <Link
                            to={`/projects/${project.id}`}
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center group"
                        >
                            Learn More
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="text-center p-6">
                            <div className="text-4xl mb-2">🚀</div>
                            <p className="text-sm font-semibold">Project Image</p>
                        </div>
                    )}
                </div>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                        {project.status}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors flex-1">
                        {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${categoryColors[project.category]}`}>
                        {project.category}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                    <div>
                        <p className="text-gray-500">{project.location}</p>
                        <p className="text-primary-600 font-medium">{project.impact}</p>
                    </div>
                    <Link
                        to={`/projects/${project.id}`}
                        className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center group"
                    >
                        View
                        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;