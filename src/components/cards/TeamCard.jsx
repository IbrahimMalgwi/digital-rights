import React, { useState } from 'react';
import { getAssetUrl } from '../../utils/assets';

const TeamCard = ({ member, variant = 'default', layout = 'grid', departmentColor }) => {
    const [imageError, setImageError] = useState(false);

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    // Horizontal layout
    if (layout === 'horizontal') {
        return (
            <div className="group card-hover overflow-hidden">
                <div className="flex items-start p-7">
                    {/* Image with fallback */}
                    <div className="w-24 h-24 rounded-3xl mr-6 overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-700 to-accent-600 flex-shrink-0 shadow-large ring-4 ring-white">
                        {member.image && !imageError ? (
                            <img
                                src={getAssetUrl(member.image)}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={handleImageError}
                                loading="lazy"
                                decoding="async"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                                {getInitials(member.name)}
                            </div>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-display font-bold text-secondary-950 mb-1">{member.name}</h3>
                                <p className="text-sm text-secondary-600 mb-2 font-semibold">{member.role}</p>
                            </div>
                            {departmentColor && (
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${departmentColor}`}>
                                    {member.department}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-secondary-600 mb-3 line-clamp-2 leading-relaxed">{member.bio}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-3">
                                {member.social?.linkedin && (
                                    <a href={member.social.linkedin} className="text-secondary-400 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                )}
                                {member.social?.twitter && (
                                    <a href={member.social.twitter} className="text-secondary-400 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Twitter`}>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default grid layout
    return (
        <div className="group card-hover overflow-hidden h-full flex flex-col text-center">
            <div className="p-7 flex flex-col flex-1">
                {/* Image with fallback */}
                <div className="w-28 h-28 mx-auto rounded-3xl mb-5 overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-700 to-accent-600 shadow-large ring-4 ring-white flex-shrink-0">
                    {member.image && !imageError ? (
                        <img
                            src={getAssetUrl(member.image)}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={handleImageError}
                            loading="lazy"
                            decoding="async"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                            {getInitials(member.name)}
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-950 mb-1">{member.name}</h3>
                <p className="text-sm text-secondary-600 mb-3 font-semibold">{member.role}</p>
                {departmentColor && (
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-3 ${departmentColor}`}>
                        {member.department}
                    </span>
                )}
                <p className="text-sm text-secondary-600 mb-5 flex-1 line-clamp-3 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-3 pt-3 border-t border-secondary-100">
                    {member.social?.linkedin && (
                        <a href={member.social.linkedin} className="text-secondary-400 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    )}
                    {member.social?.twitter && (
                        <a href={member.social.twitter} className="text-secondary-400 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Twitter`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
