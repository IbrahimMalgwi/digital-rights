import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const Hero = () => {
    // Split the title to highlight key parts if needed
    const titleParts = siteContent.hero.title.split('&');

    return (
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 min-h-screen flex items-center py-32 lg:py-40 overflow-hidden">
            {/* Decorative Elements - Larger and more spread out */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/20 to-emerald-100/20 rounded-full filter blur-3xl opacity-20"></div>

            {/* Additional subtle decorative elements */}
            <div className="absolute top-60 left-10 w-32 h-32 border-4 border-amber-200/30 rounded-full"></div>
            <div className="absolute bottom-60 right-10 w-40 h-40 border-4 border-emerald-200/30 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-amber-300/10 rounded-lg transform rotate-45"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Subtle badge/indicator */}
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-12 border border-amber-100">
                        <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-gray-600 font-medium">Advancing Digital Rights & Mental Health Across Africa</span>
                    </div>

                    {/* Main Title - More spacious with better hierarchy */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                        <span className="block mb-4">{titleParts[0]}</span>
                        {titleParts.length > 1 && (
                            <span className="block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                    &{titleParts[1]}
                                </span>
                            </span>
                        )}
                    </h1>

                    {/* Subtitle - More breathing room */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.hero.subtitle}
                    </p>

                    {/* CTA Buttons - Larger and more prominent */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link
                            to={siteContent.hero.primaryButton.link}
                            className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-amber-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
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
                            className="group px-10 py-5 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex items-center"
                        >
                            {siteContent.hero.secondaryButton.text}
                            <svg className="w-5 h-5 ml-2 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Trust Indicators - Optional, adds more visual interest */}
                    {/*<div className="mt-20 pt-10 border-t border-gray-200/60">*/}
                    {/*    <p className="text-sm text-gray-500 mb-6 tracking-wider uppercase">Trusted by leading organizations</p>*/}
                    {/*    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">*/}
                    {/*        {[1, 2, 3, 4, 5].map((i) => (*/}
                    {/*            <div key={i} className="h-8 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            {/*/!* Scroll indicator - subtle *!/*/}
            {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">*/}
            {/*    <div className="flex flex-col items-center space-y-2 text-gray-400">*/}
            {/*        <span className="text-xs uppercase tracking-wider">Scroll</span>*/}
            {/*        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">*/}
            {/*            <div className="w-1 h-2 bg-gradient-to-b from-amber-500 to-emerald-500 rounded-full mt-2 animate-bounce"></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default Hero;