import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Hero = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated badge */}
                    <div className="inline-block mb-8 animate-fade-in">
                        <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                            ⚡ Empowering Communities Since 2020
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
                        <span className="block text-gray-900">{siteContent.hero.title}</span>
                        <span className="gradient-text block text-3xl md:text-4xl lg:text-5xl mt-2">
                            Transform Lives Today
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                        {siteContent.hero.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
                        <Link
                            to={siteContent.hero.primaryButton.link}
                            className="btn-primary group text-lg px-10 py-4"
                        >
                            {siteContent.hero.primaryButton.text}
                            <svg className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to={siteContent.hero.secondaryButton.link}
                            className="btn-secondary group text-lg px-10 py-4"
                        >
                            {siteContent.hero.secondaryButton.text}
                            <svg className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
                        {[
                            { number: '500+', label: 'Projects' },
                            { number: '50+', label: 'Partners' },
                            { number: '10k+', label: 'Lives Impacted' },
                            { number: '100+', label: 'Volunteers' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                                <div className="text-sm text-secondary-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;