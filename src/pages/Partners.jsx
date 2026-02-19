import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Partners = () => {
    const [activeType, setActiveType] = useState('All');

    // Ensure partners exists and provide fallback data if it doesn't
    const partners = siteContent.partners?.length ? siteContent.partners : [
        {
            name: "African Union",
            type: "Government",
            description: "Collaborating on digital rights policy across member states",
            longDescription: "Working together to develop comprehensive digital rights frameworks and policies that protect citizens across the African continent.",
            logo: null,
            website: "https://au.int",
            partnershipYear: "2018",
            projects: ["Digital Rights Policy", "Youth Digital Literacy"],
            impact: "Reached 15 countries",
            tier: "Strategic Partner",
            contact: "partnerships@au.int",
            social: {
                twitter: "https://twitter.com/_AfricanUnion",
                linkedin: "https://linkedin.com/company/african-union"
            }
        },
        {
            name: "UNICEF",
            type: "International NGO",
            description: "Partnering on child online protection initiatives",
            longDescription: "Joint initiatives focused on protecting children and young people online through education, advocacy, and policy development.",
            logo: null,
            website: "https://unicef.org",
            partnershipYear: "2019",
            projects: ["Child Online Safety", "Digital Literacy for Youth"],
            impact: "Trained 5,000+ youth",
            tier: "Strategic Partner",
            contact: "partnerships@unicef.org",
            social: {
                twitter: "https://twitter.com/UNICEF",
                linkedin: "https://linkedin.com/company/unicef"
            }
        },
        {
            name: "Google.org",
            type: "Corporate",
            description: "Supporting digital skills training across Africa",
            longDescription: "Funding and technical support for our digital literacy programs, reaching underserved communities with essential digital skills.",
            logo: null,
            website: "https://google.org",
            partnershipYear: "2020",
            projects: ["Digital Skills Training", "Community Tech Hubs"],
            impact: "50 community hubs supported",
            tier: "Funding Partner",
            contact: "partnerships@google.org",
            social: {
                twitter: "https://twitter.com/GoogleOrg",
                linkedin: "https://linkedin.com/company/google-org"
            }
        },
        {
            name: "World Health Organization",
            type: "International NGO",
            description: "Collaborating on digital mental health initiatives",
            longDescription: "Working together to integrate digital mental health support into primary healthcare systems across Africa.",
            logo: null,
            website: "https://who.int",
            partnershipYear: "2021",
            projects: ["Digital Mental Health", "Healthcare Worker Training"],
            impact: "Trained 1,000+ healthcare workers",
            tier: "Technical Partner",
            contact: "partnerships@who.int",
            social: {
                twitter: "https://twitter.com/WHO",
                linkedin: "https://linkedin.com/company/world-health-organization"
            }
        },
        {
            name: "Mastercard Foundation",
            type: "Foundation",
            description: "Supporting youth digital employment initiatives",
            longDescription: "Enabling young Africans to access dignified work through digital skills training and entrepreneurship support.",
            logo: null,
            website: "https://mastercardfdn.org",
            partnershipYear: "2022",
            projects: ["Youth Employment", "Digital Entrepreneurship"],
            impact: "Created 2,000+ jobs",
            tier: "Strategic Partner",
            contact: "partnerships@mastercardfdn.org",
            social: {
                twitter: "https://twitter.com/MastercardFdn",
                linkedin: "https://linkedin.com/company/mastercard-foundation"
            }
        },
        {
            name: "Facebook",
            type: "Corporate",
            description: "Collaborating on online safety and digital literacy",
            longDescription: "Joint initiatives to promote online safety, digital literacy, and responsible social media use across African communities.",
            logo: null,
            website: "https://facebook.com",
            partnershipYear: "2021",
            projects: ["Online Safety", "Digital Literacy Campaigns"],
            impact: "Reached 1M+ people",
            tier: "Program Partner",
            contact: "partnerships@fb.com",
            social: {
                twitter: "https://twitter.com/Facebook",
                linkedin: "https://linkedin.com/company/facebook"
            }
        }
    ];

    // Partner types for filtering with safe counts
    const partnerTypes = [
        { name: 'All', count: partners.length, icon: '🤝' },
        { name: 'Government', count: partners.filter(p => p.type === 'Government').length, icon: '🏛️' },
        { name: 'International NGO', count: partners.filter(p => p.type === 'International NGO').length, icon: '🌍' },
        { name: 'Corporate', count: partners.filter(p => p.type === 'Corporate').length, icon: '💼' },
        { name: 'Foundation', count: partners.filter(p => p.type === 'Foundation').length, icon: '🎯' }
    ];

    // Tier colors with safe fallback
    const tierColors = {
        'Strategic Partner': 'bg-purple-100 text-purple-700',
        'Funding Partner': 'bg-green-100 text-green-700',
        'Technical Partner': 'bg-blue-100 text-blue-700',
        'Program Partner': 'bg-orange-100 text-orange-700'
    };

    // Filter partners by type
    const filteredPartners = activeType === 'All'
        ? partners
        : partners.filter(p => p.type === activeType);

    // Ensure siteContent.site exists with fallback
    const site = siteContent.site || {
        name: "DRMHI Africa",
        fullName: "Digital Rights & Mental Health Initiative Africa",
        tagline: "Protecting digital rights and promoting mental health across Africa",
        email: "info@drmhiafrica.org",
        phone: "+254 700 000 000",
        address: "Nairobi, Kenya",
        social: {
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        }
    };

    return (
        <div className="overflow-hidden">
            {/* Custom Hero Header - Replaces PageHeader */}
            <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24 lg:py-32 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                </div>

                {/* Animated Shapes */}
                <div className="absolute top-10 right-10 w-20 h-20 border-4 border-primary-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-accent-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary-300 rounded-lg opacity-10 transform rotate-45 animate-pulse"></div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center space-x-2 text-sm mb-6 text-secondary-500">
                        <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-primary-600 font-medium">Partners</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                        Our <span className="gradient-text">Partners</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                        Collaborating with organizations across Africa to amplify our impact
                    </p>

                    {/* Decorative line */}
                    <div className="flex items-center justify-center space-x-4 mt-8">
                        <div className="w-12 h-0.5 bg-primary-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                        <div className="w-12 h-0.5 bg-primary-500 rounded-full"></div>
                    </div>
                </div>

                {/* Wave Divider at Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-auto text-white" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="currentColor" fillOpacity="0.1"/>
                    </svg>
                </div>
            </section>

            {/* Partner Stats Strip */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-large p-8 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🤝</div>
                                <div className="text-2xl font-bold gradient-text">{partners.length}+</div>
                                <div className="text-sm text-secondary-600">Active Partners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🌍</div>
                                <div className="text-2xl font-bold gradient-text">15</div>
                                <div className="text-sm text-secondary-600">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">📊</div>
                                <div className="text-2xl font-bold gradient-text">30+</div>
                                <div className="text-sm text-secondary-600">Joint Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🎯</div>
                                <div className="text-2xl font-bold gradient-text">5</div>
                                <div className="text-sm text-secondary-600">Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Partners Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 justify-center mb-16">
                        {partnerTypes.map((type) => (
                            <button
                                key={type.name}
                                onClick={() => setActiveType(type.name)}
                                className={`
                                    inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300
                                    ${activeType === type.name
                                    ? 'bg-primary-600 text-white shadow-soft scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }
                                `}
                            >
                                <span className="mr-2">{type.icon}</span>
                                {type.name}
                                <span className={`
                                    ml-2 px-2 py-0.5 rounded-full text-xs
                                    ${activeType === type.name
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-300 text-gray-700'
                                }
                                `}>
                                    {type.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Partners Grid */}
                    {filteredPartners.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl overflow-hidden card-hover border border-gray-100 animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Header with gradient */}
                                    <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-600"></div>

                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-6">
                                            {/* Logo/Initials */}
                                            {partner.logo ? (
                                                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden flex items-center justify-center p-2 shadow-soft">
                                                    <img
                                                        src={partner.logo}
                                                        alt={partner.name}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.innerHTML = `
                                                                <div class="w-full h-full bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                                                                    ${partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                                                </div>
                                                            `;
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-soft">
                                                    {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                                </div>
                                            )}

                                            {/* Partnership Tier Badge */}
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tierColors[partner.tier] || 'bg-gray-100 text-gray-700'}`}>
                                                {partner.tier}
                                            </span>
                                        </div>

                                        {/* Partner Info */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-2xl font-display font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                                                    {partner.name}
                                                </h3>
                                                <span className="text-sm text-secondary-500">
                                                    Since {partner.partnershipYear}
                                                </span>
                                            </div>
                                            <p className="text-secondary-600 mb-4">
                                                {partner.description}
                                            </p>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {partner.longDescription}
                                            </p>
                                        </div>

                                        {/* Projects & Impact */}
                                        <div className="space-y-4 mb-6">
                                            {partner.projects && partner.projects.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Collaboration Areas:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {partner.projects.map((project, idx) => (
                                                            <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">
                                                                {project}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {partner.impact && (
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                    </svg>
                                                    <span className="text-sm text-gray-700">
                                                        <span className="font-semibold">Impact:</span> {partner.impact}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Contact & Social */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-3">
                                                {partner.contact && (
                                                    <a
                                                        href={`mailto:${partner.contact}`}
                                                        className="text-gray-400 hover:text-primary-600 transition-colors"
                                                        title="Email"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {partner.social?.twitter && (
                                                    <a
                                                        href={partner.social.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-primary-600 transition-colors"
                                                        title="Twitter"
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {partner.social?.linkedin && (
                                                    <a
                                                        href={partner.social.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-primary-600 transition-colors"
                                                        title="LinkedIn"
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>

                                            {partner.website && (
                                                <a
                                                    href={partner.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm group/link"
                                                >
                                                    Visit Website
                                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl">
                            <div className="text-6xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No partners found</h3>
                            <p className="text-secondary-600 mb-6">Try selecting a different category</p>
                            <button
                                onClick={() => setActiveType('All')}
                                className="btn-primary"
                            >
                                View All Partners
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Impact Stories Section */}
            <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-soft">
                            Partnership Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            What We've Achieved{' '}
                            <span className="gradient-text">Together</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Digital Policy Framework",
                                partner: "African Union",
                                achievement: "Adopted by 15 member states",
                                icon: "📜",
                                color: "from-blue-500 to-cyan-600"
                            },
                            {
                                title: "Youth Digital Literacy",
                                partner: "Google.org",
                                achievement: "Trained 50,000+ young people",
                                icon: "🚀",
                                color: "from-green-500 to-emerald-600"
                            },
                            {
                                title: "Mental Health Support",
                                partner: "WHO",
                                achievement: "Reached 100,000+ people",
                                icon: "🧠",
                                color: "from-purple-500 to-pink-600"
                            }
                        ].map((story, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-8 card-hover">
                                <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 transform group-hover:scale-110 transition-transform`}>
                                    {story.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                                <p className="text-primary-600 font-semibold mb-3">with {story.partner}</p>
                                <p className="text-secondary-600">{story.achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Become a{' '}
                        <span className="text-primary-200">Partner</span>
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Join us in creating meaningful change across Africa. Let's collaborate to protect digital rights and promote mental wellbeing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            Partner With Us
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <button className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                            Download Partnership Deck
                            <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm text-primary-200 mt-8">
                        Already a partner? <Link to="/partner-resources" className="text-white font-semibold underline">Access partner resources →</Link>
                    </p>
                </div>
            </section>

            {/* Partner Testimonials */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            What Our{' '}
                            <span className="gradient-text">Partners Say</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                quote: "DRMHI Africa has been an exceptional partner in advancing digital rights across the continent. Their grassroots approach and deep community connections make them invaluable.",
                                author: "Dr. Amina Mohamed",
                                role: "Director, Digital Transformation",
                                organization: "African Union",
                                image: "👩🏾"
                            },
                            {
                                quote: "The collaboration on digital mental health has exceeded our expectations. Their team's expertise and commitment to impact is truly remarkable.",
                                author: "John Kariuki",
                                role: "Program Manager",
                                organization: "WHO Africa",
                                image: "👨🏾"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-3xl p-8 relative">
                                <svg className="absolute top-6 right-6 w-12 h-12 text-primary-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-xl text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                                        <p className="text-sm text-secondary-500">{testimonial.role}, {testimonial.organization}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;