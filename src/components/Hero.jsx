import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Hero = () => {
    return (
        <section className="bg-white text-gray-900 py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {siteContent.hero.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {siteContent.hero.subtitle}
                </p>
                <div className="space-x-4">
                    <Link
                        to={siteContent.hero.primaryButton.link}
                        className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
                    >
                        {siteContent.hero.primaryButton.text}
                    </Link>
                    <Link
                        to={siteContent.hero.secondaryButton.link}
                        className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors inline-block"
                    >
                        {siteContent.hero.secondaryButton.text}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;