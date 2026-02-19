import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Hero = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-block mb-6">
                        <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                            Empowering Communities Since 2020
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        {siteContent.hero.title}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                        {siteContent.hero.subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={siteContent.hero.primaryButton.link}
                            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            {siteContent.hero.primaryButton.text}
                        </Link>
                        <Link
                            to={siteContent.hero.secondaryButton.link}
                            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                            {siteContent.hero.secondaryButton.text}
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">500+</div>
                            <div className="text-sm text-gray-500">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">50+</div>
                            <div className="text-sm text-gray-500">Partners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">10k+</div>
                            <div className="text-sm text-gray-500">Lives</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">100+</div>
                            <div className="text-sm text-gray-500">Volunteers</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;