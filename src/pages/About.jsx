import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/cards/TeamCard';
import { siteContent } from '../data/content';

const About = () => {
    // Core values – updated colors to match new theme
    const values = [
        {
            title: "Collaboration",
            description: "Working together with communities and partners",
            color: "bg-primary-50 text-primary-700",
            icon: "🤝"
        },
        {
            title: "Innovation",
            description: "Finding creative solutions to complex challenges",
            color: "bg-accent-50 text-accent-700",
            icon: "💡"
        },
        {
            title: "Integrity",
            description: "Transparent and ethical in all we do",
            color: "bg-secondary-100 text-secondary-800",
            icon: "⚖️"
        },
        {
            title: "Impact",
            description: "Focused on measurable, lasting change",
            color: "bg-primary-100 text-primary-800",
            icon: "🌍"
        }
    ];

    return (
        <div className="overflow-hidden">

            {/* Mission & Vision – Split Screen with new colors */}
            <section className="grid md:grid-cols-2 min-h-[600px] pt-28 md:pt-32 bg-white">
                {/* Mission */}
                <div className="bg-primary-50 p-12 md:p-20 flex items-center justify-center">
                    <div className="max-w-lg text-center md:text-left animate-slide-up">
                        <span className="text-primary-600 font-medium mb-4 block tracking-wide">01 ✨ Mission</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                            {siteContent.about.mission.title}
                        </h2>
                        <p className="text-lg text-secondary-700 leading-relaxed">
                            {siteContent.about.mission.content}
                        </p>
                        <div className="mt-8 flex items-center justify-center md:justify-start text-primary-600 font-medium group cursor-pointer">
                            <span>Learn more</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Vision */}
                <div className="bg-accent-50 p-12 md:p-20 flex items-center justify-center">
                    <div className="max-w-lg text-center md:text-left animate-slide-up">
                        <span className="text-accent-600 font-medium mb-4 block tracking-wide">02 👁️ Vision</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                            {siteContent.about.vision.title}
                        </h2>
                        <p className="text-lg text-secondary-700 leading-relaxed">
                            {siteContent.about.vision.content}
                        </p>
                        <div className="mt-8 flex items-center justify-center md:justify-start text-accent-600 font-medium group cursor-pointer">
                            <span>Learn more</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values – Colorful Cards (updated to new palette) */}
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">What we believe</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            Our values
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`${value.color} p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-default text-center shadow-soft hover:shadow-medium`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="text-5xl mb-4 block">{value.icon}</span>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="opacity-90 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section – Modern Grid */}
            <section className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">The people</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
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
                            className="inline-flex items-center text-secondary-600 hover:text-primary-600 transition-colors group font-medium"
                        >
                            View all team members
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA – Bold & Graphic with new gradient */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-slide-up">
                        Ready to make a difference?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
                        Join us in creating a safer, more inclusive digital Africa
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-secondary-900 rounded-full font-bold hover:bg-secondary-100 transition-all hover:scale-105 shadow-large"
                        >
                            Support our work
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">❤️</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Partner with us
                        </Link>
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        © Non-profit organization registered in Kenya
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
