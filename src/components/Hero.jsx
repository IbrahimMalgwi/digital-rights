import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {siteContent.hero.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
                    {siteContent.hero.subtitle}
                </p>
                <div className="space-x-4">
                    <Link
                        to={siteContent.hero.primaryButton.link}
                        className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                        {siteContent.hero.primaryButton.text}
                    </Link>
                    <Link
                        to={siteContent.hero.secondaryButton.link}
                        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors inline-block"
                    >
                        {siteContent.hero.secondaryButton.text}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;