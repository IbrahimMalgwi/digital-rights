import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const DataWorkersInquiry = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Find the Data Workers' Inquiry project
    const dwiProject = siteContent.projects?.find(project =>
        project.title.includes("Data Workers' Inquiry") ||
        project.title.includes("Data Workers")
    );

    // Enhanced data with more details
    const projectData = {
        title: "Data Workers' Inquiry",
        subtitle: "A global, radically participatory research initiative where data workers become community researchers",
        stats: [
            { value: "16", label: "Worker Researchers", icon: "👥" },
            { value: "9", label: "Countries", icon: "🌍" },
            { value: "4", label: "Continents", icon: "🗺️" },
            { value: "1000+", label: "Workers Reached", icon: "📊" }
        ],
        regions: [
            {
                region: "Kenya",
                title: "Data Workers in Kenya Organize!",
                description: "Learn about grievances of data workers at Sama, Cloud Factory, and Remotasks, and how they organize for better conditions.",
                researchers: ["James Mwangi", "Sarah Akinyi", "David Otieno"],
                image: "🇰🇪",
                color: "from-green-500 to-emerald-600"
            },
            {
                region: "Syria/Lebanon",
                title: "Syrian Data Workers in their own Words",
                description: "Challenges faced by refugee data workers in Lebanon and daily life of data workers in Syria.",
                researchers: ["Layla Hassan", "Omar Al-Rashid", "Nour Khalil"],
                image: "🇸🇾",
                color: "from-red-500 to-orange-600"
            },
            {
                region: "South Africa",
                title: "AI Training in the Global South",
                description: "Examining working conditions and labor rights in South Africa's AI training industry.",
                researchers: ["Thabo Ndlovu", "Priya Singh", "John Mbeki"],
                image: "🇿🇦",
                color: "from-blue-500 to-purple-600"
            },
            {
                region: "Philippines",
                title: "Content Moderators Speak Out",
                description: "Mental health impacts and organizing efforts among content moderators in Manila.",
                researchers: ["Maria Santos", "Jose Reyes", "Carla Mercado"],
                image: "🇵🇭",
                color: "from-yellow-500 to-orange-600"
            }
        ],
        events: [
            {
                topic: "What impact does content moderation have on workers' mental health?",
                date: "October 21, 2024",
                time: "3:00 PM GMT",
                speakers: [
                    { name: "Kauna Malgwi", role: "Researcher, Nigeria", avatar: "🇳🇬" },
                    { name: "Botlhokwa Ranta", role: "Data Worker, South Africa", avatar: "🇿🇦" },
                    { name: "Fasica Gebrekidan", role: "Researcher, Ethiopia", avatar: "🇪🇹" },
                    { name: "Milagros Miceli", role: "Principal Investigator", avatar: "🔬" }
                ],
                recording: true,
                youtubeId: "abc123"
            },
            {
                topic: "Organizing Across Borders: Data Worker Solidarity",
                date: "November 15, 2024",
                time: "4:00 PM GMT",
                speakers: [
                    { name: "James Mwangi", role: "Worker Researcher, Kenya", avatar: "🇰🇪" },
                    { name: "Layla Hassan", role: "Worker Researcher, Lebanon", avatar: "🇱🇧" },
                    { name: "Carlos Mendez", role: "Labor Organizer, Philippines", avatar: "🇵🇭" }
                ],
                recording: false,
                registration: true
            }
        ],
        objectives: [
            {
                title: "Document Working Conditions",
                description: "Systematically document labor conditions in the data work industry across the Global South"
            },
            {
                title: "Build Worker Networks",
                description: "Foster transnational solidarity and support networks among data workers"
            },
            {
                title: "Amplify Worker Voices",
                description: "Create platforms for data workers to share their experiences and demands"
            },
            {
                title: "Influence Policy",
                description: "Generate evidence to advocate for better labor protections and industry standards"
            }
        ],
        methodology: {
            approach: "Participatory Action Research",
            phases: [
                "Training worker-researchers in research methods",
                "Collaborative data collection in workplaces",
                "Collective analysis and sense-making",
                "Public dissemination and advocacy"
            ],
            principles: [
                "Worker-led and controlled",
                "Transnational collaboration",
                "Action-oriented outcomes",
                "Community ownership of data"
            ]
        }
    };

    // Use enhanced data or fallback to siteContent
    const displayData = dwiProject || projectData;

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title={displayData.title || "Data Workers' Inquiry"}
                subtitle={displayData.subtitle || "A global, radically participatory research initiative where data workers become community researchers"}
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
                            {projectData.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-display font-bold gradient-text">
                                        {stat.value}
                                    </div>
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
                                About the Project
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Research by{' '}
                                <span className="gradient-text">Data Workers,</span> for Data Workers
                            </h2>
                            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                                {displayData.about || "The Data Workers' Inquiry is a global, radically participatory research initiative where data workers become community researchers, documenting their own labor conditions and building transnational solidarity."}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Worker-led participatory action research</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">16 worker-researchers across 9 countries</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Building transnational worker solidarity</span>
                                </div>
                            </div>
                        </div>

                        {/* Methodology Card */}
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100 animate-fade-in">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Methodology</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center mb-3">
                                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                                        <span className="font-semibold text-gray-900">Participatory Action Research</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {projectData.methodology.phases.map((phase, index) => (
                                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-sm text-gray-700">
                                                {phase}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center mb-3">
                                        <span className="w-2 h-2 bg-accent-600 rounded-full mr-2"></span>
                                        <span className="font-semibold text-gray-900">Core Principles</span>
                                    </div>
                                    <div className="space-y-2">
                                        {projectData.methodology.principles.map((principle, index) => (
                                            <div key={index} className="flex items-center">
                                                <svg className="w-4 h-4 text-accent-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-700">{principle}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regional Inquiries Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Global Research
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Regional{' '}
                            <span className="gradient-text">Inquiries</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            16 data workers across 9 countries conducting research in their workplaces
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projectData.regions.map((inquiry, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl overflow-hidden card-hover border border-gray-100"
                            >
                                <div className={`h-2 bg-gradient-to-r ${inquiry.color}`}></div>
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="text-5xl">{inquiry.image}</span>
                                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                                            {inquiry.region}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                                        {inquiry.title}
                                    </h3>
                                    <p className="text-secondary-600 mb-6 leading-relaxed">
                                        {inquiry.description}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Researchers:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {inquiry.researchers.map((researcher, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                                                >
                                                    {researcher}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        to={`/inquiry/${inquiry.region.toLowerCase()}`}
                                        className="inline-flex items-center mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                                    >
                                        Read Full Inquiry
                                        <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
                        <div>
                            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                                Events & Discussions
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                                Upcoming{' '}
                                <span className="gradient-text">Panels</span>
                            </h2>
                            <p className="text-xl text-secondary-600 max-w-2xl">
                                Online panels where community researchers discuss their inquiries and findings
                            </p>
                        </div>
                        <Link
                            to="/events"
                            className="mt-4 lg:mt-0 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                        >
                            View All Events
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="space-y-6">
                        {projectData.events.map((event, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-primary-200 transition-all duration-300 hover:shadow-medium"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                                                {event.topic}
                                            </h3>
                                            <div className="flex items-center text-sm text-secondary-500 mt-1">
                                                <span>{event.date}</span>
                                                <span className="mx-2">•</span>
                                                <span>{event.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        {event.recording && (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                                Recording Available
                                            </span>
                                        )}
                                        {event.registration && (
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                                Register Now
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Speakers:</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {event.speakers.map((speaker, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <span className="text-2xl">{speaker.avatar}</span>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{speaker.name}</p>
                                                    <p className="text-xs text-secondary-500">{speaker.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    {event.recording && (
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Watch Recording
                                        </a>
                                    )}
                                    {event.registration && (
                                        <a
                                            href="#"
                                            className="inline-flex items-center bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                                        >
                                            Register for Event
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-soft">
                            Project Objectives
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            What We're{' '}
                            <span className="gradient-text">Working Toward</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectData.objectives.map((objective, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 card-hover border border-gray-100"
                            >
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-soft">
                                    {index + 1}
                                </div>
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                                        🎯
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {objective.title}
                                </h3>
                                <p className="text-secondary-600 text-sm leading-relaxed">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications/Outputs Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Recent{' '}
                            <span className="gradient-text">Publications</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Reports, articles, and findings from the Data Workers' Inquiry
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <div className="bg-gray-100 rounded-2xl h-48 mb-4 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-4xl">
                                        📄
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    Preliminary Findings from Kenya
                                </h3>
                                <p className="text-sm text-secondary-500 mb-2">October 2024</p>
                                <p className="text-sm text-secondary-600 line-clamp-2">
                                    Initial findings from worker-researchers in Kenya documenting conditions at major data work platforms.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Join the{' '}
                        <span className="text-primary-200">Inquiry</span>
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Be part of this global initiative documenting labor conditions and building transnational solidarity among data workers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={dwiProject?.website || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Visit Project Website
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Get Involved
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <p className="text-sm text-primary-200 mt-8">
                        Join 16 worker-researchers across 9 countries
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DataWorkersInquiry;