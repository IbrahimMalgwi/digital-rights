import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
            <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                        {siteContent.hero.title}
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        {siteContent.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            to={siteContent.hero.primaryButton.link}
                            className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                        >
                            {siteContent.hero.primaryButton.text}
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to={siteContent.hero.secondaryButton.link}
                            className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium border border-gray-200 hover:border-gray-300 transition-all"
                        >
                            {siteContent.hero.secondaryButton.text}
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Hero;