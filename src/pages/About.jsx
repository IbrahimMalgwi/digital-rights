import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/cards/TeamCard';
import { siteContent } from '../data/content';

const About = () => {
    // Core values with colors
    const values = [
        {
            title: "Collaboration",
            description: "Working together with communities and partners",
            color: "bg-amber-50 text-amber-700",
            icon: "🤝"
        },
        {
            title: "Innovation",
            description: "Finding creative solutions to complex challenges",
            color: "bg-emerald-50 text-emerald-700",
            icon: "💡"
        },
        {
            title: "Integrity",
            description: "Transparent and ethical in all we do",
            color: "bg-indigo-50 text-indigo-700",
            icon: "⚖️"
        },
        {
            title: "Impact",
            description: "Focused on measurable, lasting change",
            color: "bg-rose-50 text-rose-700",
            icon: "🌍"
        }
    ];

    return (
        <div>
            {/* Hero Section - Centered like the new Hero design */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 min-h-[90vh] flex items-center py-32 lg:py-40 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/20 to-emerald-100/20 rounded-full filter blur-3xl opacity-20"></div>

                {/* Additional subtle decorative elements */}
                <div className="absolute top-60 left-10 w-32 h-32 border-4 border-amber-200/30 rounded-full"></div>
                <div className="absolute bottom-60 right-10 w-40 h-40 border-4 border-emerald-200/30 rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumbs - Centered */}
                        <nav className="flex items-center justify-center space-x-2 text-sm mb-8 text-gray-500">
                            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 font-medium">About</span>
                        </nav>

                        {/* Badge - Centered */}
                        <div className="inline-flex items-center justify-center mb-12">
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-amber-100">
                                ✦ Since 2015
                            </span>
                        </div>

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">We're on a mission to</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                protect digital rights
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Across Africa, we're building a future where everyone can safely access and benefit from the digital world.
                        </p>

                        {/* CTA Buttons - Centered */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link
                                to="/contact"
                                className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-amber-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                <span className="relative z-10 flex items-center">
                                    Get involved
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </Link>

                            <Link
                                to="/projects"
                                className="group px-10 py-5 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex items-center"
                            >
                                See our work
                                <svg className="w-5 h-5 ml-2 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Scroll indicator - subtle */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                            <div className="flex flex-col items-center space-y-2 text-gray-400">
                                <span className="text-xs uppercase tracking-wider">Scroll</span>
                                <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                                    <div className="w-1 h-2 bg-gradient-to-b from-amber-500 to-emerald-500 rounded-full mt-2 animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Split Screen */}
            <section className="grid md:grid-cols-2 min-h-[600px]">
                {/* Mission */}
                <div className="bg-amber-50 p-12 md:p-20 flex items-center justify-center">
                    <div className="max-w-lg text-center md:text-left">
                        <span className="text-amber-600 font-medium mb-4 block">01 — Mission</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {siteContent.about.mission.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {siteContent.about.mission.content}
                        </p>
                        <div className="mt-8 flex items-center justify-center md:justify-start text-amber-600 font-medium">
                            <span>Learn more</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Vision */}
                <div className="bg-emerald-50 p-12 md:p-20 flex items-center justify-center">
                    <div className="max-w-lg text-center md:text-left">
                        <span className="text-emerald-600 font-medium mb-4 block">02 — Vision</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {siteContent.about.vision.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {siteContent.about.vision.content}
                        </p>
                        <div className="mt-8 flex items-center justify-center md:justify-start text-emerald-600 font-medium">
                            <span>Learn more</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - Colorful Cards */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">What we believe</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Our values
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`${value.color} p-8 rounded-3xl hover:scale-105 transition-transform cursor-default text-center`}
                            >
                                <span className="text-5xl mb-4 block">{value.icon}</span>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="opacity-90 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team - Modern Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">The people</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Meet the team
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {siteContent.team?.slice(0, 5).map((member, index) => (
                            <TeamCard key={index} member={member} variant="compact" />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/team"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                            View all team members
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA - Bold & Graphic */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to make a difference?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join us in creating a safer, more inclusive digital Africa
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            Support our work
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Partner with us
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        ✦ Non-profit organization registered in Kenya
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;