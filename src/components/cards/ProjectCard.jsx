import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/assets.js';

const ProjectCard = ({ project, variant = 'default', categoryColor = 'bg-primary-50 text-primary-700', featured = false }) => {
    // Featured variant
    if (featured || variant === 'featured') {
        return (
            <div className="group card-hover overflow-hidden h-full flex flex-col">
                <div className="relative h-72 bg-gradient-to-br from-secondary-950 via-primary-700 to-accent-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl text-white/30">🚀</span>
                    </div>
                    {project.image && (
                        <img
                            src={getAssetUrl(project.image)}
                            alt={project.title}
                            className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                            decoding="async"
                            onError={(event) => {
                                event.currentTarget.style.display = 'none';
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 via-secondary-950/15 to-transparent" />
                    <span className="absolute left-5 top-5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-secondary-900 shadow-soft backdrop-blur">
                        {project.status}
                    </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-secondary-950 mb-3 group-hover:text-primary-700 transition-colors">{project.title}</h3>
                    <p className="text-sm text-secondary-600 mb-5 flex-1 leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                        <span className="text-xs text-secondary-500 font-medium">📍 {project.location}</span>
                        <Link to={`/projects/${project.id}`} className="text-sm text-primary-700 font-bold hover:text-accent-700 transition-colors flex items-center">
                            Details
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Compact variant (for grid)
    return (
        <div className="group card-hover overflow-hidden h-full flex flex-col">
            <div className="relative h-44 bg-gradient-to-br from-secondary-950 via-primary-700 to-accent-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl text-white/30">🚀</span>
                </div>
                {project.image && (
                    <img
                        src={getAssetUrl(project.image)}
                        alt={project.title}
                        className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                            event.currentTarget.style.display = 'none';
                        }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/70 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                        {project.category}
                    </span>
                    <span className="text-xs font-bold text-secondary-600 bg-secondary-100 px-2 py-1 rounded-full">{project.status}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-950 mb-3 group-hover:text-primary-700 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-secondary-600 mb-5 flex-1 line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-secondary-100">
                    <span className="text-xs text-secondary-500 font-medium">📍 {project.location}</span>
                    <Link to={`/projects/${project.id}`} className="text-sm text-primary-700 font-bold hover:text-accent-700 transition-colors flex items-center">
                        View
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
