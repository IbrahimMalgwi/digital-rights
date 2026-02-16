import React from 'react';

const PageHeaderMinimal = ({
                               title,
                               subtitle,
                               size = "default",
                               alignment = "center",
                               accent = "primary"
                           }) => {
    // Size classes mapping
    const titleSizeClasses = {
        small: 'text-3xl md:text-4xl',
        default: 'text-4xl md:text-5xl lg:text-6xl',
        large: 'text-5xl md:text-6xl lg:text-7xl'
    };

    const subtitleSizeClasses = {
        small: 'text-lg',
        default: 'text-xl md:text-2xl',
        large: 'text-xl md:text-2xl'
    };

    // Get alignment classes
    const getAlignmentClasses = () => {
        switch(alignment) {
            case 'left': return 'text-left';
            case 'right': return 'text-right';
            default: return 'text-center';
        }
    };

    // Get decorative element alignment
    const getDecorativeAlignment = () => {
        switch(alignment) {
            case 'center': return 'mx-auto';
            case 'right': return 'ml-auto';
            default: return 'ml-0';
        }
    };

    // Get accent color class
    const getAccentColor = () => {
        switch(accent) {
            case 'secondary': return 'bg-secondary-500';
            case 'accent': return 'bg-accent-500';
            default: return 'bg-primary-500';
        }
    };

    return (
        <section className="relative py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`max-w-4xl mx-auto ${getAlignmentClasses()}`}>
                    {/* Small decorative element */}
                    <div className={`
                        inline-block w-12 h-1 rounded-full mb-6
                        ${getAccentColor()}
                        ${getDecorativeAlignment()}
                    `}></div>

                    {/* Title */}
                    <h1 className={`
                        font-display font-bold text-gray-900 mb-4
                        ${titleSizeClasses[size]}
                    `}>
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className={`
                            text-secondary-600 leading-relaxed
                            ${subtitleSizeClasses[size]}
                        `}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeaderMinimal;