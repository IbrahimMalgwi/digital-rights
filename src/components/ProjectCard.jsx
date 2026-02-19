import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, featured = false }) => {
    const [imageError, setImageError] = useState(false);

    // Simple status colors
    const statusColors = {
        'Completed': 'bg-green-100 text-green-800',
        'Ongoing': 'bg-blue-100 text-blue-800',
        'Upcoming': 'bg-purple-100 text-purple-800',
        'On Hold': 'bg-orange-100 text-orange-800'
    };

    // Simple category colors
    const categoryColors = {
        'Education': 'bg-primary-100 text-primary-800',
        'Mental Health': 'bg-secondary-100 text-secondary-800',
        'Advocacy': 'bg-accent-100 text-accent-800',
        'Youth': 'bg-cyan-100 text-cyan-800',
        'Women': 'bg-rose-100 text-rose-800',
        'Research': 'bg-emerald-100 text-emerald-800'
    };

    const getCategoryColor = (category) => {
        return categoryColors[category] || 'bg-gray-100 text-gray-800';
    };

    // Featured Project Card
    if (featured) {
        return (
            <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                    {project.image && !imageError ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">🌟</span>
                        </div>
                    )}

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[project.status] || 'bg-gray-100 text-gray-800'}`}>
                            {project.status}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(project.category)}`}>
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div>
                            <span className="text-gray-500">Location:</span>
                            <p className="font-medium text-gray-900">{project.location}</p>
                        </div>
                        <div>
                            <span className="text-gray-500">Impact:</span>
                            <p className="font-medium text-primary-600">{project.impact}</p>
                        </div>
                    </div>

                    {/* Partners */}
                    {project.partners && project.partners.length > 0 && (
                        <div className="mb-4">
                            <span className="text-xs text-gray-500">Partners:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {project.partners.slice(0, 2).map((partner, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                        {partner}
                                    </span>
                                ))}
                                {project.partners.length > 2 && (
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                        +{project.partners.length - 2}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                        View Project Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        );
    }

    // Regular Project Card
    return (
        <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                {project.image && !imageError ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl text-gray-400">📋</span>
                    </div>
                )}

                {/* Status Badge */}
                <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${statusColors[project.status] || 'bg-gray-100 text-gray-800'}`}>
                    {project.status}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                    <div>
                        <p className="text-gray-500">{project.location}</p>
                        <p className="text-primary-600 font-medium">{project.impact}</p>
                    </div>
                    <Link
                        to={`/projects/${project.id}`}
                        className="text-primary-600 font-medium hover:text-primary-700"
                    >
                        View →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;