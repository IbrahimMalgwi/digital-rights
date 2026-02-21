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

    // Partner types for filtering with colors
    const partnerTypes = [
        { name: 'All', count: partners.length, icon: '🤝', color: 'bg-amber-50 text-amber-700' },
        { name: 'Government', count: partners.filter(p => p.type === 'Government').length, icon: '🏛️', color: 'bg-emerald-50 text-emerald-700' },
        { name: 'International NGO', count: partners.filter(p => p.type === 'International NGO').length, icon: '🌍', color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Corporate', count: partners.filter(p => p.type === 'Corporate').length, icon: '💼', color: 'bg-rose-50 text-rose-700' },
        { name: 'Foundation', count: partners.filter(p => p.type === 'Foundation').length, icon: '🎯', color: 'bg-amber-50 text-amber-700' }
    ];

    // Tier colors
    const tierColors = {
        'Strategic Partner': 'bg-emerald-50 text-emerald-700',
        'Funding Partner': 'bg-indigo-50 text-indigo-700',
        'Technical Partner': 'bg-amber-50 text-amber-700',
        'Program Partner': 'bg-rose-50 text-rose-700'
    };

    // Filter partners by type
    const filteredPartners = activeType === 'All'
        ? partners
        : partners.filter(p => p.type === activeType);

    return (
        <div>
            {/* Hero Section - Bold & Graphic (matching other pages) */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-sm mb-8">
                            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">→</span>
                            <span className="text-gray-900 font-medium">Partners</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Collaborating for Impact
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Partners
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Collaborating with organizations across Africa to amplify our impact in digital rights and mental health.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setActiveType('All')}
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                View all partners
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Partners Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 justify-center mb-16">
                        {partnerTypes.map((type) => (
                            <button
                                key={type.name}
                                onClick={() => setActiveType(type.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeType === type.name
                                    ? 'bg-gray-900 text-white'
                                    : `${type.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{type.icon}</span>
                                {type.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeType === type.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/60 text-gray-600'
                                }`}>
                                    {type.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Partners Grid */}
                    {filteredPartners.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            {/* Logo/Initials */}
                                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                                                {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                            </div>

                                            {/* Partnership Tier Badge */}
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${tierColors[partner.tier] || 'bg-gray-100 text-gray-700'}`}>
                                                {partner.tier}
                                            </span>
                                        </div>

                                        {/* Partner Info */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {partner.name}
                                                </h3>
                                                <span className="text-xs text-gray-400">
                                                    Since {partner.partnershipYear}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3">
                                                {partner.description}
                                            </p>
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                {partner.longDescription}
                                            </p>
                                        </div>

                                        {/* Projects & Impact */}
                                        <div className="space-y-3 mb-4">
                                            {partner.projects && partner.projects.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {partner.projects.map((project, idx) => (
                                                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                            {project}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {partner.impact && (
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <svg className="w-4 h-4 text-emerald-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                    </svg>
                                                    <span className="font-medium mr-1">Impact:</span> {partner.impact}
                                                </div>
                                            )}
                                        </div>

                                        {/* Contact & Social */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-3">
                                                {partner.contact && (
                                                    <a
                                                        href={`mailto:${partner.contact}`}
                                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {partner.social?.twitter && (
                                                    <a
                                                        href={partner.social.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {partner.social?.linkedin && (
                                                    <a
                                                        href={partner.social.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                                                >
                                                    Visit
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <p className="text-gray-500 mb-6">Try selecting a different category</p>
                            <button
                                onClick={() => setActiveType('All')}
                                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
                            >
                                View all partners
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Impact Stories Section - Simplified */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Impact</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            What we've achieved together
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Digital Policy Framework",
                                partner: "African Union",
                                achievement: "Adopted by 15 member states",
                                icon: "📜"
                            },
                            {
                                title: "Youth Digital Literacy",
                                partner: "Google.org",
                                achievement: "Trained 50,000+ young people",
                                icon: "🚀"
                            },
                            {
                                title: "Mental Health Support",
                                partner: "WHO",
                                achievement: "Reached 100,000+ people",
                                icon: "🧠"
                            }
                        ].map((story, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-4xl mb-3">{story.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.title}</h3>
                                <p className="text-sm text-emerald-600 mb-2">with {story.partner}</p>
                                <p className="text-sm text-gray-500">{story.achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA - Matching other pages */}
            <section className="relative bg-gray-900 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Become a partner
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join us in creating meaningful change across Africa. Let's collaborate to protect digital rights and promote mental wellbeing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            Partner with us
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <button className="px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-bold hover:bg-white/10 transition-all">
                            Download deck
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                        Already a partner? <Link to="/partner-resources" className="text-white underline">Access resources →</Link>
                    </p>
                </div>
            </section>

            {/* Partner Testimonials - Simplified */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            What our partners say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                quote: "DRMHI Africa has been an exceptional partner in advancing digital rights across the continent.",
                                author: "Dr. Amina Mohamed",
                                role: "African Union"
                            },
                            {
                                quote: "The collaboration on digital mental health has exceeded our expectations.",
                                author: "John Kariuki",
                                role: "WHO Africa"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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