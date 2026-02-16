import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, featured = false, variant = 'default' }) => {
    const [imageError, setImageError] = useState(false);

    // Enhanced status colors with your primary palette
    const statusStyles = {
        'Completed': 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20',
        'Ongoing': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20',
        'Upcoming': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20',
        'On Hold': 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
    };

    // Enhanced category styles with your accent colors
    const categoryStyles = {
        'Education': 'bg-gradient-to-r from-primary-500 to-accent-500 text-white',
        'Mental Health': 'bg-gradient-to-r from-secondary-500 to-primary-500 text-white',
        'Advocacy': 'bg-gradient-to-r from-accent-500 to-pink-500 text-white',
        'Youth': 'bg-gradient-to-r from-cyan-500 to-primary-500 text-white',
        'Women': 'bg-gradient-to-r from-rose-500 to-accent-500 text-white',
        'Research': 'bg-gradient-to-r from-emerald-500 to-primary-500 text-white'
    };

    // Default gradient for unknown categories
    const getCategoryStyle = (category) => {
        return categoryStyles[category] || 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white';
    };

    // Progress bar component
    const ProgressBar = ({ percentage = 75 }) => (
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
                className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );

    // Impact metrics component
    const ImpactMetric = ({ label, value, icon }) => (
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                {icon}
            </div>
            <div>
                <p className="text-xs text-secondary-500">{label}</p>
                <p className="text-sm font-semibold text-gray-800">{value}</p>
            </div>
        </div>
    );

    // Featured Project Card (Hero/Large)
    if (featured) {
        return (
            <div className="group relative bg-white rounded-3xl overflow-hidden card-hover border border-gray-100">
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent z-10"></div>

                {/* Background Image */}
                <div className="relative h-[600px] overflow-hidden">
                    {project.image && !imageError ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                            <div className="text-center text-white">
                                <span className="text-8xl mb-4 block">🌟</span>
                                <p className="text-2xl font-display font-semibold">Featured Project</p>
                            </div>
                        </div>
                    )}

                    {/* Floating Badges */}
                    <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-3">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-soft ${statusStyles[project.status] || 'bg-primary-600 text-white'}`}>
                            {project.status}
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-soft ${getCategoryStyle(project.category)}`}>
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-soft">
                                ⭐ Featured
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                    <div className="max-w-4xl">
                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 text-lg mb-6 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>

                        {/* Key Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <ImpactMetric
                                label="Location"
                                value={project.location}
                                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            />
                            <ImpactMetric
                                label="Duration"
                                value={project.duration}
                                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                            />
                            <ImpactMetric
                                label="Impact"
                                value={project.impact}
                                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>}
                            />
                            <ImpactMetric
                                label="Partners"
                                value={project.partners?.length || 0}
                                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                            />
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-8 max-w-md">
                            <div className="flex justify-between text-sm text-white/80 mb-2">
                                <span>Project Progress</span>
                                <span className="font-semibold">75%</span>
                            </div>
                            <ProgressBar percentage={75} />
                        </div>

                        {/* Partners and CTA */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                                <p className="text-white/80 text-sm font-medium">Partners:</p>
                                <div className="flex -space-x-2">
                                    {project.partners?.slice(0, 3).map((partner, index) => (
                                        <div
                                            key={index}
                                            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                                            title={partner}
                                        >
                                            {partner.charAt(0)}
                                        </div>
                                    ))}
                                    {project.partners?.length > 3 && (
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white text-xs">
                                            +{project.partners.length - 3}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Link
                                to={`/projects/${project.id}`}
                                className="group/btn inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                            >
                                View Project Details
                                <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Regular Project Card with Variants
    return (
        <div className={`
            group relative bg-white rounded-2xl overflow-hidden transition-all duration-500
            ${variant === 'compact' ? 'card border border-gray-100' : 'card-hover border border-gray-100'}
        `}>
            {/* Image Section */}
            <div className="relative overflow-hidden">
                <div className={`
                    bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center
                    ${variant === 'compact' ? 'h-36' : 'h-52'}
                `}>
                    {project.image && !imageError ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                            {variant === 'compact' ? '📋' : '🚀'}
                        </span>
                    )}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-soft ${statusStyles[project.status] || 'bg-primary-600 text-white'}`}>
                        {project.status}
                    </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-soft ${getCategoryStyle(project.category)}`}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className={variant === 'compact' ? 'p-4' : 'p-6'}>
                {/* Title */}
                <h3 className={`
                    font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors
                    ${variant === 'compact' ? 'text-base' : 'text-xl'}
                `}>
                    <Link to={`/projects/${project.id}`}>
                        {project.title}
                    </Link>
                </h3>

                {/* Description */}
                {variant !== 'compact' && (
                    <p className="text-secondary-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                )}

                {/* Location and Impact */}
                <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center text-secondary-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs">{project.location}</span>
                    </div>
                    <span className="text-primary-600 font-semibold text-xs">
                        {project.impact}
                    </span>
                </div>

                {/* Progress Bar for compact variant */}
                {variant === 'compact' && (
                    <div className="mb-4">
                        <ProgressBar percentage={60} />
                    </div>
                )}

                {/* Partners and CTA */}
                <div className="flex items-center justify-between">
                    {variant !== 'compact' && project.partners && (
                        <div className="flex items-center space-x-1">
                            <span className="text-xs text-secondary-500">Partners:</span>
                            <div className="flex -space-x-1">
                                {project.partners.slice(0, 2).map((partner, index) => (
                                    <div
                                        key={index}
                                        className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
                                        title={partner}
                                    >
                                        {partner.charAt(0)}
                                    </div>
                                ))}
                                {project.partners.length > 2 && (
                                    <div className="w-6 h-6 rounded-full bg-secondary-100 border-2 border-white flex items-center justify-center text-secondary-600 text-[10px]">
                                        +{project.partners.length - 2}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <Link
                        to={`/projects/${project.id}`}
                        className={`
                            inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link
                            ${variant === 'compact' ? 'text-xs' : 'text-sm'}
                        `}
                    >
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;