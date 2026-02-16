import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const WDFA = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Find the WDFA project
    const wdfaProject = siteContent.projects?.find(project =>
        project.title.includes("Women Digital Futures Africa") ||
        project.title.includes("WDFA")
    );

    // Enhanced WDFA data
    const wdfaData = {
        title: "Women Digital Futures Africa",
        subtitle: "Empowering African women with digital skills, AI literacy, and safe online practices",
        about: "Digital spaces are powerful, but they aren't always safe or inclusive. Many women—especially in underserved communities—face barriers of cost, language, confidence, and online harm. We believe every woman deserves the skills, safeguards, and support to participate fully in the digital space without losing privacy, dignity, or mental health.",
        services: "We design practical training, mentorship, and advocacy that help women navigate everyday digital tasks, evaluate AI responsibly, and shape safer online spaces. Our work blends hands-on learning with community support and policy engagement—always focused on real needs, real safeguards, real outcomes.",
        stats: [
            { value: "500+", label: "Women Trained", icon: "👩🏾" },
            { value: "6", label: "Countries", icon: "🌍" },
            { value: "50+", label: "Mentors", icon: "🤝" },
            { value: "85%", label: "Confidence Increase", icon: "📈" }
        ],
        programs: [
            {
                name: "Digital Skills Training",
                description: "Practical, foundational trainings that build AI literacy, digital confidence, and safer online habits using local examples and hands-on activities.",
                icon: "🎓",
                features: ["AI Literacy", "Online Safety", "Digital Tools"],
                color: "from-blue-500 to-cyan-600"
            },
            {
                name: "Mentorship Program",
                description: "Relational support program pairing women with trained mentors and Peer Pods for goal-setting, confidence-building, and healthy digital habits.",
                icon: "🤝",
                features: ["One-on-One Mentoring", "Peer Support Groups", "Goal Setting"],
                color: "from-green-500 to-emerald-600"
            },
            {
                name: "Advocacy & Policy",
                description: "Promoting safer digital spaces free from technology-facilitated gender-based abuse through practical norms and policy engagement.",
                icon: "📢",
                features: ["Policy Engagement", "Community Advocacy", "Awareness Campaigns"],
                color: "from-purple-500 to-pink-600"
            }
        ],
        aiProgram: {
            title: "AI Literacy & Digital Empowerment Program",
            description: "This six-week program gives women in Africa, particularly from underserved communities, a practical foundation in AI. It uses adult learning with a peer-supported, cohort-based approach that includes WhatsApp group discussions, short one-on-one clinics, local examples, and shared resources.",
            features: [
                "Mobile-friendly learning",
                "Low-data usage",
                "Peer-supported cohorts",
                "Hands-on practice",
                "Local examples",
                "WhatsApp integration"
            ],
            duration: "6 weeks",
            format: "Hybrid (Online + WhatsApp)",
            cohortSize: "15-20 women"
        },
        objectives: [
            {
                title: "AI Literacy & Digital Empowerment",
                description: "Build foundational AI literacy and digital confidence among women in underserved communities",
                icon: "🤖"
            },
            {
                title: "Mentorship Networks",
                description: "Create sustainable peer support networks through trained mentors and Peer Pods",
                icon: "👥"
            },
            {
                title: "Safer Digital Spaces",
                description: "Advocate for policies and practices that protect women from online harm",
                icon: "🛡️"
            },
            {
                title: "Practical Skills",
                description: "Provide hands-on training using local examples and real-world applications",
                icon: "💪"
            }
        ],
        partners: [
            "UN Women", "Google.org", "African Union", "Mastercard Foundation", "UNICEF"
        ],
        testimonials: [
            {
                name: "Grace Akinyi",
                location: "Nairobi, Kenya",
                quote: "The WDFA program transformed how I use technology. I now train other women in my community.",
                image: "👩🏾",
                program: "Digital Skills Training"
            },
            {
                name: "Fatima Mohammed",
                location: "Lagos, Nigeria",
                quote: "Through the mentorship program, I gained confidence to start my own online business.",
                image: "👩🏽",
                program: "Mentorship Program"
            }
        ]
    };

    // Use enhanced data or fallback to project data
    const displayData = wdfaProject ? { ...wdfaData, ...wdfaProject } : wdfaData;

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title={displayData.title}
                subtitle={displayData.subtitle}
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Stats Strip */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-large p-8 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {displayData.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-sm text-secondary-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-up">
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                                About WDFA
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Empowering Women in the{' '}
                                <span className="gradient-text">Digital Age</span>
                            </h2>
                            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                                {displayData.about}
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {displayData.services}
                            </p>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Mobile-friendly learning</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Peer-supported cohorts</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Local examples</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Hands-on practice</span>
                                </div>
                            </div>
                        </div>

                        {/* Impact Card */}
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100 animate-fade-in">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Our Impact</h3>
                                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">2024</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">Women Trained</span>
                                        <span className="font-bold text-primary-600">500+</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">Countries Reached</span>
                                        <span className="font-bold text-primary-600">6/15</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-accent-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">Active Mentors</span>
                                        <span className="font-bold text-primary-600">50</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold text-primary-600">85%</span> of participants report increased confidence in using digital tools
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Our Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Comprehensive{' '}
                            <span className="gradient-text">Empowerment</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Holistic programs designed to equip women with digital skills, confidence, and support
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {displayData.programs.map((program, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 card-hover border border-gray-100"
                            >
                                {/* Icon */}
                                <div className={`relative mb-6`}>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                    <div className={`relative w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                                        {program.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                                    {program.name}
                                </h3>

                                <p className="text-secondary-600 mb-6 leading-relaxed">
                                    {program.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {program.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm">
                                            <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={`/wdfa/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Literacy Program - Featured */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                                Featured Program
                            </span>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                                {displayData.aiProgram.title}
                            </h2>
                            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                                {displayData.aiProgram.description}
                            </p>

                            {/* Program Details */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-primary-600">{displayData.aiProgram.duration}</div>
                                    <div className="text-xs text-secondary-600">Duration</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-primary-600">📱</div>
                                    <div className="text-xs text-secondary-600">Mobile-friendly</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-primary-600">👥</div>
                                    <div className="text-xs text-secondary-600">Cohort-based</div>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {displayData.aiProgram.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/wdfa/ai-literacy"
                                className="inline-flex items-center mt-8 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                            >
                                Learn More About the Program
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Program Visualization */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Program Structure</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">1</div>
                                        <div>Weeks 1-2: Foundation & Setup</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">2</div>
                                        <div>Weeks 3-4: Hands-on Practice</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">3</div>
                                        <div>Weeks 5-6: Project & Application</div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <p className="text-sm">
                                        <span className="font-bold">Next cohort starts:</span> March 15, 2024
                                    </p>
                                    <p className="text-sm mt-2">
                                        <span className="font-bold">Apply by:</span> March 1, 2024
                                    </p>
                                </div>

                                <button className="w-full mt-6 bg-white text-primary-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Our Objectives
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            What We're{' '}
                            <span className="gradient-text">Achieving</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {displayData.objectives.map((objective, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 card-hover text-center"
                            >
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                                    {objective.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                                    {objective.title}
                                </h3>
                                <p className="text-sm text-secondary-600">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Voices of{' '}
                            <span className="gradient-text">Impact</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 relative">
                                <svg className="absolute top-6 right-6 w-12 h-12 text-primary-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-secondary-500">{testimonial.location}</p>
                                    </div>
                                    <span className="ml-auto px-3 py-1 bg-white text-primary-600 rounded-full text-xs font-semibold">
                                        {testimonial.program}
                                    </span>
                                </div>

                                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            {displayData.partners && displayData.partners.length > 0 && (
                <section className="py-16 bg-gray-50 border-y border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm font-semibold text-secondary-500 mb-8 tracking-wider uppercase">
                            Trusted By Leading Organizations
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {displayData.partners.map((partner, index) => (
                                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                                    <div className="h-12 px-6 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl flex items-center justify-center">
                                        <span className="text-primary-700 font-semibold">{partner}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Get Involved with{' '}
                        <span className="text-primary-200">WDFA</span>
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Join us in creating safer, more inclusive digital spaces for women across Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Contact Us
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/donate"
                            className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Support Our Work
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-primary-100">
                        <Link to="/wdfa/apply" className="hover:text-white transition-colors">Apply for Training →</Link>
                        <Link to="/wdfa/mentor" className="hover:text-white transition-colors">Become a Mentor →</Link>
                        <Link to="/wdfa/partner" className="hover:text-white transition-colors">Partner With Us →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WDFA;