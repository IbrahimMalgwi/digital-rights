import React, { useState } from 'react';

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
        console.log('Image failed to load:', member.image); // Debug log
        setImageError(true);
    };

    // Horizontal layout
    if (layout === 'horizontal') {
        return (
            <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="flex items-start p-6">
                    {/* Image with fallback */}
                    <div className="w-20 h-20 rounded-xl mr-6 overflow-hidden bg-gradient-to-br from-amber-500 to-emerald-600 flex-shrink-0">
                        {member.image && !imageError ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                                onError={handleImageError}
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${departmentColor}`}>
                                {member.department}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{member.bio}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-3">
                                {member.social?.linkedin && (
                                    <a href={member.social.linkedin} className="text-gray-400 hover:text-amber-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <span className="text-xs text-gray-400">{member.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default grid layout
    return (
        <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
            <div className="p-6 text-center">
                {/* Image with fallback */}
                <div className="w-24 h-24 mx-auto rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-amber-500 to-emerald-600">
                    {member.image && !imageError ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                            {getInitials(member.name)}
                        </div>
                    )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${departmentColor}`}>
                    {member.department}
                </span>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                    {member.social?.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-amber-600">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;