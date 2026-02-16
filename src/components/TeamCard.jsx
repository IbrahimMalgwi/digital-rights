import React, { useState } from 'react';

const TeamCard = ({ member, variant = 'default', layout = 'grid' }) => {
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Get initials from name
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Social media icons mapping
    const SocialIcon = ({ platform, url }) => {
        const icons = {
            linkedin: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            ),
            twitter: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
            ),
            github: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            email: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            )
        };

        return icons[platform] || null;
    };

    // Default Grid Layout Card
    if (layout === 'grid') {
        return (
            <div
                className={`
                    group relative bg-white rounded-2xl overflow-hidden transition-all duration-500
                    ${variant === 'compact'
                    ? 'p-4 border border-gray-100 hover:shadow-soft'
                    : 'p-6 md:p-8 card-hover border border-gray-100'
                }
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image/Initials Section */}
                <div className="relative mb-6">
                    <div className={`
                        relative mx-auto rounded-full overflow-hidden
                        ${variant === 'compact' ? 'w-20 h-20' : 'w-28 h-28 md:w-32 md:h-32'}
                    `}>
                        {member.image && !imageError ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className={`
                                w-full h-full bg-gradient-to-br from-primary-500 to-accent-600 
                                flex items-center justify-center text-white font-bold
                                ${variant === 'compact' ? 'text-xl' : 'text-3xl'}
                            `}>
                                {getInitials(member.name)}
                            </div>
                        )}

                        {/* Animated ring */}
                        <div className={`
                            absolute inset-0 rounded-full border-4 border-white/50 
                            transform scale-0 group-hover:scale-110 transition-transform duration-500
                        `}></div>
                    </div>

                    {/* Floating social icons that appear on hover */}
                    <div className={`
                        absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                        flex space-x-2 transition-all duration-300
                        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}>
                        {member.social && Object.entries(member.social).map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 shadow-soft"
                                aria-label={`${member.name}'s ${platform}`}
                            >
                                <SocialIcon platform={platform} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                    <h3 className={`
                        font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors
                        ${variant === 'compact' ? 'text-base' : 'text-xl'}
                    `}>
                        {member.name}
                    </h3>

                    <p className="text-primary-600 font-medium text-sm mb-3">
                        {member.role}
                    </p>

                    {variant !== 'compact' && (
                        <p className="text-secondary-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {member.bio}
                        </p>
                    )}

                    {/* Expertise tags */}
                    {member.expertise && variant !== 'compact' && (
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {member.expertise.slice(0, 3).map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Horizontal Layout Card (for team leads or featured members)
    if (layout === 'horizontal') {
        return (
            <div className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Image */}
                    <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary-100">
                            {member.image && !imageError ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-2xl font-bold">
                                    {getInitials(member.name)}
                                </div>
                            )}
                        </div>

                        {/* Status indicator */}
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                            {member.name}
                        </h3>

                        <p className="text-primary-600 font-semibold mb-3">
                            {member.role}
                        </p>

                        <p className="text-secondary-600 mb-4 leading-relaxed">
                            {member.bio}
                        </p>

                        {/* Social links */}
                        <div className="flex justify-center md:justify-start space-x-3">
                            {member.social && Object.entries(member.social).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary-400 hover:text-primary-600 transition-colors"
                                >
                                    <SocialIcon platform={platform} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Minimal Layout Card (for sidebars or team overview)
    return (
        <div className="group flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-soft transition-all duration-300 border border-gray-100">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    {member.image && !imageError ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-sm font-bold">
                            {getInitials(member.name)}
                        </div>
                    )}
                </div>
            </div>

            {/* Info */}
            <div className="flex-1">
                <h4 className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {member.name}
                </h4>
                <p className="text-sm text-primary-600">
                    {member.role}
                </p>
            </div>

            {/* Social icon */}
            {member.social?.linkedin && (
                <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-primary-600 transition-colors"
                >
                    <SocialIcon platform="linkedin" />
                </a>
            )}
        </div>
    );
};

export default TeamCard;