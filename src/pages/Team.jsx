import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/cards/TeamCard';
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

    // Department categories with colors
    const departments = [
        { name: 'All', count: teamMembers.length, icon: '👥', color: 'bg-amber-50 text-amber-700' },
        { name: 'Leadership', count: teamMembers.filter(m => m.department === 'Leadership').length, icon: '⭐', color: 'bg-emerald-50 text-emerald-700' },
        { name: 'Research', count: teamMembers.filter(m => m.department === 'Research').length, icon: '🔬', color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Programs', count: teamMembers.filter(m => m.department === 'Programs').length, icon: '📋', color: 'bg-rose-50 text-rose-700' },
        { name: 'Advocacy', count: teamMembers.filter(m => m.department === 'Advocacy').length, icon: '⚖️', color: 'bg-amber-50 text-amber-700' }
    ];

    // Filter team members by department
    const filteredTeam = activeDepartment === 'All'
        ? teamMembers
        : teamMembers.filter(m => m.department === activeDepartment);



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
                            <span className="text-gray-900 font-medium">Team</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Passionate Professionals
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Team
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Meet the passionate professionals driving our mission forward across Africa.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setActiveDepartment('All')}
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Meet everyone
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            {/* Team Values Section - Simple & Clean */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-3">💡</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diverse Expertise</h3>
                            <p className="text-gray-500 text-sm">Bringing together professionals from various fields</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🌍</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pan-African</h3>
                            <p className="text-gray-500 text-sm">Team members across the continent</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🤝</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission-Driven</h3>
                            <p className="text-gray-500 text-sm">Passionate about creating lasting change</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Department Filters */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                            {departments.map((dept) => {
                                const deptColor = departments.find(d => d.name === dept.name)?.color || 'bg-gray-50 text-gray-700';
                                return (
                                    <button
                                        key={dept.name}
                                        onClick={() => setActiveDepartment(dept.name)}
                                        className={`
                                            group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                            ${activeDepartment === dept.name
                                            ? 'bg-gray-900 text-white'
                                            : `${deptColor} hover:shadow-md`
                                        }
                                        `}
                                    >
                                        <span className="mr-2">{dept.icon}</span>
                                        {dept.name}
                                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                            activeDepartment === dept.name
                                                ? 'bg-white/20 text-white'
                                                : 'bg-white/60 text-gray-600'
                                        }`}>
                                            {dept.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-full transition-all ${
                                    viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-full transition-all ${
                                    viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Team Grid/List */}
                    {filteredTeam.length > 0 ? (
                        viewMode === 'grid' ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredTeam.map((member, index) => {
                                    // Get department color
                                    const deptColor =
                                        member.department === 'Leadership' ? 'bg-emerald-50 text-emerald-700' :
                                            member.department === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                                                member.department === 'Programs' ? 'bg-rose-50 text-rose-700' :
                                                    member.department === 'Advocacy' ? 'bg-amber-50 text-amber-700' :
                                                        'bg-amber-50 text-amber-700';

                                    return (
                                        <div key={member.id} className="group">
                                            <TeamCard
                                                member={member}
                                                variant="default"
                                                layout="grid"
                                                departmentColor={deptColor}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredTeam.map((member, index) => {
                                    const deptColor =
                                        member.department === 'Leadership' ? 'bg-emerald-50 text-emerald-700' :
                                            member.department === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                                                member.department === 'Programs' ? 'bg-rose-50 text-rose-700' :
                                                    member.department === 'Advocacy' ? 'bg-amber-50 text-amber-700' :
                                                        'bg-amber-50 text-amber-700';

                                    return (
                                        <div key={member.id}>
                                            <TeamCard
                                                member={member}
                                                layout="horizontal"
                                                departmentColor={deptColor}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No team members found</h3>
                            <p className="text-gray-500 mb-6">Try selecting a different department</p>
                            <button
                                onClick={() => setActiveDepartment('All')}
                                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
                            >
                                View all members
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Leadership Spotlight - Clean & Bold */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm mb-4">
                            Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Meet our leaders
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {teamMembers.filter(m => m.department === 'Leadership').map((leader) => (
                            <div key={leader.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                                        {leader.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                                        <p className="text-white/80 text-sm">{leader.role}</p>
                                        <p className="text-white/60 text-xs mt-1">{leader.education}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board - Simplified */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Advisory Board</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Strategic guidance
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl">
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    {String.fromCharCode(64 + i)}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Advisor Name</h3>
                                <p className="text-gray-600 text-sm mb-2">Title/Position</p>
                                <p className="text-gray-400 text-xs">Organization/Affiliation</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join the Team CTA - Matching other pages */}
            <section className="relative bg-gray-900 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join our mission
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        We're always looking for passionate individuals to join our team.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/careers"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            View open positions
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            Send application
                        </Link>
                    </div>

                    {/* Perks */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        {[
                            { icon: '🌍', text: 'Remote Work' },
                            { icon: '📚', text: 'Learning Budget' },
                            { icon: '🏥', text: 'Health Insurance' },
                            { icon: '✈️', text: 'Flexible Hours' }
                        ].map((perk, i) => (
                            <div key={i} className="flex items-center text-gray-400">
                                <span className="text-xl mr-2">{perk.icon}</span>
                                <span className="text-sm">{perk.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;