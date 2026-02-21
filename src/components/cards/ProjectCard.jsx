import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, variant = 'default', categoryColor }) => {
    // Removed unused imageError state

    // Featured variant
    if (variant === 'featured') {
        return (
            <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-64 bg-gradient-to-br from-amber-500 to-emerald-600">
                    {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl text-white/30">🚀</span>
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
                            {project.category}
                        </span>
                        <span className="text-xs text-gray-400">{project.status}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">📍 {project.location}</span>
                        <Link to={`/projects/${project.id}`} className="text-sm text-gray-900 font-medium hover:text-amber-600">
                            View details →
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Compact variant (for grid)
    return (
        <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
                        {project.category}
                    </span>
                    <span className="text-xs text-gray-400">{project.status}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">📍 {project.location}</span>
                    <Link to={`/projects/${project.id}`} className="text-sm text-gray-900 font-medium hover:text-amber-600">
                        View →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;