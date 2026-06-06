import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const Hero = () => {
    // Split the title to highlight key parts if needed
    const titleParts = siteContent.hero.title.split('&');

    return (
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 min-h-screen flex items-center py-32 lg:py-40 overflow-hidden">
            {/* Decorative Elements - Larger and more spread out */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full filter blur-3xl opacity-20"></div>

            {/* Additional subtle decorative elements */}
            <div className="absolute top-60 left-10 w-32 h-32 border-4 border-primary-200/30 rounded-full"></div>
            <div className="absolute bottom-60 right-10 w-40 h-40 border-4 border-accent-200/30 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary-300/10 rounded-lg transform rotate-45"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Subtle badge/indicator */}
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-12 border border-primary-100">
                        <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-secondary-600 font-medium">Advancing Digital Rights & Mental Health Across Africa</span>
                    </div>

                    {/* Main Title - More spacious with better hierarchy */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-secondary-900 mb-10 leading-[1.1] tracking-tight">
                        <span className="block mb-4">{titleParts[0]}</span>
                        {titleParts.length > 1 && (
                            <span className="block">
                                <span className="gradient-text">
                                    &{titleParts[1]}
                                </span>
                            </span>
                        )}
                    </h1>

                    {/* Subtitle - More breathing room */}
                    <p className="text-xl md:text-2xl text-secondary-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.hero.subtitle}
                    </p>

                    {/* CTA Buttons - Larger and more prominent */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link
                            to={siteContent.hero.primaryButton.link}
                            className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            <span className="relative z-10 flex items-center">
                                {siteContent.hero.primaryButton.text}
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </Link>

                        <Link
                            to={siteContent.hero.secondaryButton.link}
                            className="group px-10 py-5 bg-white text-secondary-900 rounded-full font-semibold text-lg border-2 border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 flex items-center"
                        >
                            {siteContent.hero.secondaryButton.text}
                            <svg className="w-5 h-5 ml-2 text-secondary-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
