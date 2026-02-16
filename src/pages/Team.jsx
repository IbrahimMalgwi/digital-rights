import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TeamCard from '../components/TeamCard';
import { siteContent } from '../data/content';

const Team = () => {
    const [activeDepartment, setActiveDepartment] = useState('All');
    const [viewMode, setViewMode] = useState('grid');

    // Enhanced team data with more details
    const teamMembers = siteContent.team?.length ? siteContent.team : [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            role: "Executive Director",
            department: "Leadership",
            bio: "With over 15 years of experience in nonprofit leadership, Sarah leads our organization with passion and vision.",
            expertise: ["Strategic Planning", "Fundraising", "Partnerships"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "sarah@wdfa.org"
            },
            image: null,
            joined: "2018",
            education: "PhD in Public Policy",
            location: "Nairobi, Kenya"
        },
        {
            id: 2,
            name: "Dr. James Mwangi",
            role: "Director of Research",
            department: "Research",
            bio: "Leading our research initiatives on digital rights and mental health across Africa.",
            expertise: ["Data Analysis", "Policy Research", "Academic Partnerships"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "james@wdfa.org"
            },
            image: null,
            joined: "2019",
            education: "PhD in Sociology",
            location: "Nairobi, Kenya"
        },
        {
            id: 3,
            name: "Amina Okonkwo",
            role: "Programs Manager",
            department: "Programs",
            bio: "Overseeing the implementation of our digital literacy and mental health programs.",
            expertise: ["Project Management", "Community Outreach", "Training"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "amina@wdfa.org"
            },
            image: null,
            joined: "2020",
            education: "MPH",
            location: "Lagos, Nigeria"
        },
        {
            id: 4,
            name: "Dr. Kwame Asante",
            role: "Mental Health Specialist",
            department: "Programs",
            bio: "Clinical psychologist leading our digital mental health initiatives.",
            expertise: ["Clinical Psychology", "Digital Mental Health", "Training"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "kwame@wdfa.org"
            },
            image: null,
            joined: "2021",
            education: "PhD in Clinical Psychology",
            location: "Accra, Ghana"
        },
        {
            id: 5,
            name: "Grace Nkosi",
            role: "Policy Analyst",
            department: "Research",
            bio: "Researching digital rights policies and their impact across Southern Africa.",
            expertise: ["Policy Analysis", "Advocacy", "Legislative Research"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "grace@wdfa.org"
            },
            image: null,
            joined: "2022",
            education: "MPP",
            location: "Cape Town, South Africa"
        },
        {
            id: 6,
            name: "David Ochieng",
            role: "Digital Rights Advocate",
            department: "Advocacy",
            bio: "Leading our advocacy efforts for digital rights and internet freedom.",
            expertise: ["Advocacy", "Campaigns", "Public Speaking"],
            social: {
                linkedin: "#",
                twitter: "#",
                email: "david@wdfa.org"
            },
            image: null,
            joined: "2020",
            education: "LLB",
            location: "Nairobi, Kenya"
        }
    ];

    // Department categories
    const departments = [
        { name: 'All', count: teamMembers.length, icon: '👥' },
        { name: 'Leadership', count: teamMembers.filter(m => m.department === 'Leadership').length, icon: '⭐' },
        { name: 'Research', count: teamMembers.filter(m => m.department === 'Research').length, icon: '🔬' },
        { name: 'Programs', count: teamMembers.filter(m => m.department === 'Programs').length, icon: '📋' },
        { name: 'Advocacy', count: teamMembers.filter(m => m.department === 'Advocacy').length, icon: '⚖️' }
    ];

    // Filter team members by department
    const filteredTeam = activeDepartment === 'All'
        ? teamMembers
        : teamMembers.filter(m => m.department === activeDepartment);

    // Team stats
    const stats = {
        total: teamMembers.length,
        countries: [...new Set(teamMembers.map(m => m.location?.split(', ')[1] || 'Unknown'))].length,
        departments: departments.length - 1,
        yearsCombined: teamMembers.reduce((acc, m) => acc + (2024 - parseInt(m.joined)), 0)
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title="Our Team"
                subtitle="Meet the passionate professionals driving our mission forward"
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Team Stats Strip */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-large p-8 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl mb-2">👥</div>
                                <div className="text-2xl font-bold gradient-text">{stats.total}</div>
                                <div className="text-sm text-secondary-600">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🌍</div>
                                <div className="text-2xl font-bold gradient-text">{stats.countries}</div>
                                <div className="text-sm text-secondary-600">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🏢</div>
                                <div className="text-2xl font-bold gradient-text">{stats.departments}</div>
                                <div className="text-sm text-secondary-600">Departments</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">📅</div>
                                <div className="text-2xl font-bold gradient-text">{stats.yearsCombined}+</div>
                                <div className="text-sm text-secondary-600">Combined Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Values Section */}
            <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 text-3xl mx-auto mb-4 shadow-soft">
                                💡
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Diverse Expertise</h3>
                            <p className="text-secondary-600">Bringing together professionals from various fields and backgrounds</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 text-3xl mx-auto mb-4 shadow-soft">
                                🌍
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pan-African</h3>
                            <p className="text-secondary-600">Team members across the continent, understanding local contexts</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 text-3xl mx-auto mb-4 shadow-soft">
                                🤝
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Mission-Driven</h3>
                            <p className="text-secondary-600">Passionate individuals committed to creating lasting change</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Team Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Department Filters */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                        <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
                            {departments.map((dept) => (
                                <button
                                    key={dept.name}
                                    onClick={() => setActiveDepartment(dept.name)}
                                    className={`
                                        inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300
                                        ${activeDepartment === dept.name
                                        ? 'bg-primary-600 text-white shadow-soft scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }
                                    `}
                                >
                                    <span className="mr-2">{dept.icon}</span>
                                    {dept.name}
                                    <span className={`
                                        ml-2 px-2 py-0.5 rounded-full text-xs
                                        ${activeDepartment === dept.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-300 text-gray-700'
                                    }
                                    `}>
                                        {dept.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-xl transition-colors ${
                                    viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-xl transition-colors ${
                                    viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Team Grid/List */}
                    {viewMode === 'grid' ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredTeam.map((member, index) => (
                                <div key={member.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    <TeamCard member={member} variant="default" layout="grid" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredTeam.map((member, index) => (
                                <div key={member.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    <TeamCard member={member} layout="horizontal" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredTeam.length === 0 && (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No team members found</h3>
                            <p className="text-secondary-600 mb-6">Try selecting a different department</p>
                            <button
                                onClick={() => setActiveDepartment('All')}
                                className="btn-primary"
                            >
                                View All Team Members
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Leadership Spotlight */}
            <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold backdrop-blur-sm mb-4">
                            Leadership Team
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Meet Our{' '}
                            <span className="text-primary-200">Leadership</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.filter(m => m.department === 'Leadership').map((leader) => (
                            <div key={leader.id} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center space-x-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
                                        {leader.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                                        <p className="text-primary-200 font-semibold mb-2">{leader.role}</p>
                                        <p className="text-white/80 text-sm">{leader.education}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Advisory Board
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Strategic{' '}
                            <span className="gradient-text">Guidance</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Distinguished experts providing strategic direction and expertise
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group bg-gray-50 rounded-3xl p-8 card-hover text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                                    {String.fromCharCode(64 + i)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Advisor Name</h3>
                                <p className="text-primary-600 font-semibold mb-3">Title/Position</p>
                                <p className="text-secondary-600 text-sm">Organization/Affiliation</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join the Team CTA */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Join Our{' '}
                        <span className="text-primary-200">Mission</span>
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        We're always looking for passionate individuals to join our team and help us make a difference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/careers"
                            className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-soft"
                        >
                            View Open Positions
                            <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Send Application
                        </Link>
                    </div>

                    {/* Perks */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        {[
                            { icon: '🌍', text: 'Remote Work' },
                            { icon: '📚', text: 'Learning Budget' },
                            { icon: '🏥', text: 'Health Insurance' },
                            { icon: '✈️', text: 'Flexible Hours' }
                        ].map((perk, i) => (
                            <div key={i} className="flex items-center text-white/90">
                                <span className="text-2xl mr-2">{perk.icon}</span>
                                <span>{perk.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;