import React, { useState } from 'react';

const TeamCard = ({ member }) => {
    const [imageError, setImageError] = useState(false);

    // Get initials from name
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow p-6">
            {/* Image/Initials */}
            <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-accent-600">
                    {member.image && !imageError ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                            {getInitials(member.name)}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {member.name}
                </h3>

                <p className="text-primary-600 font-medium text-sm mb-3">
                    {member.role}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {member.bio}
                </p>

                {/* Expertise Tags */}
                {member.expertise && member.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.expertise.slice(0, 2).map((skill, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                                {skill}
                            </span>
                        ))}
                        {member.expertise.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                +{member.expertise.length - 2}
                            </span>
                        )}
                    </div>
                )}

                {/* Social Links */}
                {member.social && (
                    <div className="flex justify-center space-x-3">
                        {member.social.linkedin && (
                            <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        )}
                        {member.social.twitter && (
                            <a
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamCard;