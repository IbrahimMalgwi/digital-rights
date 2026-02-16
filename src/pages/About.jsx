import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TeamCard from '../components/TeamCard';
import { siteContent } from '../data/content';

const About = () => {
    // Stats for impact section
    const impactStats = [
        {
            value: "75%",
            label: "Digital Literacy Improvement",
            description: "In communities where we've implemented our training programs",
            icon: "📱",
            color: "from-primary-500 to-primary-600"
        },
        {
            value: "60%",
            label: "Mental Health Awareness",
            description: "Reported better understanding of digital mental health",
            icon: "🧠",
            color: "from-accent-500 to-accent-600"
        },
        {
            value: "40%",
            label: "Policy Engagement Success",
            description: "Of our policy recommendations adopted by governments",
            icon: "📊",
            color: "from-secondary-500 to-secondary-600"
        }
    ];

    // Timeline data
    const timeline = [
        {
            year: "2015",
            title: "Foundation",
            description: "WDFA was established to address digital rights in Africa"
        },
        {
            year: "2017",
            title: "First Major Project",
            description: "Launched digital literacy program in 5 countries"
        },
        {
            year: "2019",
            title: "Mental Health Initiative",
            description: "Expanded focus to include digital mental health"
        },
        {
            year: "2021",
            title: "Policy Impact",
            description: "First policy recommendations adopted by national governments"
        },
        {
            year: "2024",
            title: "Continental Reach",
            description: "Active in 15 African countries with 50+ partners"
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title="About Us"
                subtitle="Learn about our mission, vision, and the work we do across Africa"
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Mission & Vision Section - Side by Side */}
            <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Our Purpose
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            What Drives{' '}
                            <span className="gradient-text">Our Work</span>
                        </h2>
                    </div>

                    {/* Mission & Vision Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                        {/* Mission Card */}
                        <div className="group relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 card-hover border border-primary-100 animate-slide-up">
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-soft">
                                🎯
                            </div>

                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                                    🚀
                                </div>

                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                                    {siteContent.about.mission.title}
                                </h3>

                                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                                    {siteContent.about.mission.content}
                                </p>

                                {/* Mission Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600">15+</div>
                                        <div className="text-xs text-secondary-500">Countries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600">50+</div>
                                        <div className="text-xs text-secondary-500">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600">10K+</div>
                                        <div className="text-xs text-secondary-500">Lives</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative bg-gradient-to-br from-accent-50 to-white rounded-3xl p-8 card-hover border border-accent-100 animate-slide-up" style={{ animationDelay: '200ms' }}>
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-soft">
                                👁️
                            </div>

                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                                    🌟
                                </div>

                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-accent-700 transition-colors">
                                    {siteContent.about.vision.title}
                                </h3>

                                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                                    {siteContent.about.vision.content}
                                </p>

                                {/* Vision Highlights */}
                                <div className="space-y-3 pt-6 border-t border-gray-200">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Inclusive digital future for all</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Mental health accessible to everyone</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Policy change at continental scale</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Values Section - Full Width Below */}
                    <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                                    Our Foundation
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                                    Core <span className="gradient-text">Values</span>
                                </h3>
                                <p className="text-lg text-secondary-600">
                                    The principles that guide every decision and action we take
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {siteContent.about.values.map((value, index) => {
                                    const icons = ["🤝", "💡", "⚖️", "🌍"];
                                    const colors = [
                                        "from-blue-500 to-cyan-600",
                                        "from-green-500 to-emerald-600",
                                        "from-purple-500 to-pink-600",
                                        "from-orange-500 to-red-600"
                                    ];

                                    return (
                                        <div
                                            key={index}
                                            className="group relative bg-white rounded-2xl p-6 card-hover border border-gray-100"
                                        >
                                            {/* Icon with gradient background */}
                                            <div className={`relative mb-4`}>
                                                <div className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                                <div className={`relative w-14 h-14 bg-gradient-to-r ${colors[index % colors.length]} rounded-xl flex items-center justify-center text-white text-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                                    {icons[index % icons.length]}
                                                </div>
                                            </div>

                                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                                {value.title}
                                            </h4>

                                            <p className="text-secondary-600 text-sm leading-relaxed">
                                                {value.description}
                                            </p>

                                            {/* Decorative corner */}
                                            <div className="absolute bottom-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Values Quote */}
                            <div className="mt-12 text-center">
                                <div className="inline-flex items-center space-x-2 text-primary-600">
                                    <span className="w-12 h-0.5 bg-primary-300"></span>
                                    <p className="text-lg italic font-medium">
                                        "These values are not just words on a wall — they're the heartbeat of our organization"
                                    </p>
                                    <span className="w-12 h-0.5 bg-primary-300"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons - Centered Below Values */}
                    <div className="flex flex-wrap gap-4 justify-center pt-12">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Partner With Us
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/projects"
                            className="group px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
                        >
                            View Our Work
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Story / Timeline Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold backdrop-blur-sm mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            The Story of{' '}
                            <span className="text-primary-300">WDFA</span>
                        </h2>
                        <p className="text-xl text-primary-100">
                            From a vision to a movement - our path to creating impact across Africa
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400"></div>

                        {/* Timeline Items */}
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col lg:flex-row gap-8 mb-12 last:mb-0 ${
                                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-primary-500 z-10"></div>

                                {/* Content */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <div className="inline-block px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-bold mb-4">
                                            {item.year}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-primary-100">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section - Enhanced */}
            <section className="relative py-24 bg-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Our Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Making a{' '}
                            <span className="gradient-text">Difference</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Real results from our work in communities across Africa
                        </p>
                    </div>

                    {/* Impact Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {impactStats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 card-hover border border-gray-100 text-center"
                            >
                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white text-4xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Value */}
                                <div className="text-5xl font-display font-bold gradient-text mb-3">
                                    {stat.value}
                                </div>

                                {/* Label */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-secondary-600">
                                    {stat.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="mt-6 w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                    <div
                                        className={`bg-gradient-to-r ${stat.color} h-1.5 rounded-full transition-all duration-1000`}
                                        style={{ width: stat.value }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Impact Map or Additional Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
                        {[
                            { label: "Communities Reached", value: "150+" },
                            { label: "Workshops Conducted", value: "500+" },
                            { label: "Trained Facilitators", value: "200+" },
                            { label: "Research Papers", value: "25+" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-primary-600">{item.value}</div>
                                <div className="text-sm text-secondary-500">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Preview Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Our Team
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Meet the{' '}
                            <span className="gradient-text">People Behind</span> the Mission
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Dedicated professionals working to create lasting change
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {siteContent.team?.slice(0, 5).map((member, index) => (
                            <TeamCard key={index} member={member} variant="compact" />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/team"
                            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                        >
                            <span>View Full Team</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-16 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-secondary-500 mb-8 tracking-wider uppercase">
                        Trusted By Leading Organizations
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="h-12 w-32 bg-gradient-to-r from-primary-100 to-accent-100 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Join us in our mission to create a safer, healthier digital Africa
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Support Our Work
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;