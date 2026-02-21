import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/cards/TeamCard';
import { siteContent } from '../data/content';

const Team = () => {
    const [activeDepartment, setActiveDepartment] = useState('All');
    const [viewMode, setViewMode] = useState('grid');

    // Get team members from siteContent
    const teamMembers = siteContent.team || [];

    // Department categories with colors (dynamically generated from team data)
    const departments = [
        { name: 'All', count: teamMembers.length, icon: '👥', color: 'bg-amber-50 text-amber-700' },
        ...Array.from(new Set(teamMembers.map(m => m.department))).map(dept => ({
            name: dept,
            count: teamMembers.filter(m => m.department === dept).length,
            icon: dept === 'Leadership' ? '⭐' :
                dept === 'Research' ? '🔬' :
                    dept === 'Programs' ? '📋' :
                        dept === 'Advocacy' ? '⚖️' : '👥',
            color: dept === 'Leadership' ? 'bg-emerald-50 text-emerald-700' :
                dept === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                    dept === 'Programs' ? 'bg-rose-50 text-rose-700' :
                        dept === 'Advocacy' ? 'bg-amber-50 text-amber-700' :
                            'bg-gray-50 text-gray-700'
        }))
    ];

    // Filter team members by department
    const filteredTeam = activeDepartment === 'All'
        ? teamMembers
        : teamMembers.filter(m => m.department === activeDepartment);

    return (
        <div>
            {/* Hero Section - Spacious & Centered like other pages */}
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
                            <span className="text-gray-900 font-medium">Team</span>
                        </nav>

                        {/* Badge - Centered */}
                        <div className="inline-flex items-center justify-center mb-12">
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-amber-100">
                                ✦ Passionate Professionals
                            </span>
                        </div>

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">Our</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Team
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Meet the passionate professionals driving our mission forward across Africa.
                        </p>

                        {/* Scroll indicator */}
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

            {/* Team Stats Section - Optional */}
            {teamMembers.length > 0 && (
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-gray-900">{teamMembers.length}</div>
                                <div className="text-sm text-gray-500">Team Members</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gray-900">
                                    {new Set(teamMembers.map(m => m.location?.split(', ')[1])).size}
                                </div>
                                <div className="text-sm text-gray-500">Countries</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gray-900">
                                    {new Set(teamMembers.map(m => m.department)).size}
                                </div>
                                <div className="text-sm text-gray-500">Departments</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gray-900">
                                    {teamMembers.reduce((acc, m) => acc + (m.expertise?.length || 0), 0)}+
                                </div>
                                <div className="text-sm text-gray-500">Areas of Expertise</div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Team Values Section - Moved up for better flow */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Our Culture</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            What drives us
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="text-5xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Diverse Expertise</h3>
                            <p className="text-gray-500">Bringing together professionals from various fields</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pan-African</h3>
                            <p className="text-gray-500">Team members across the continent</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission-Driven</h3>
                            <p className="text-gray-500">Passionate about creating lasting change</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Department Filters - Centered */}
                    <div className="text-center mb-12">
                        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Filter by Department</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {departments.map((dept) => (
                                <button
                                    key={dept.name}
                                    onClick={() => setActiveDepartment(dept.name)}
                                    className={`
                                        group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                        ${activeDepartment === dept.name
                                        ? 'bg-gray-900 text-white'
                                        : `${dept.color} hover:shadow-md`
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
                            ))}
                        </div>
                    </div>

                    {/* View Toggle - Centered */}
                    <div className="flex justify-center items-center space-x-2 mb-12">
                        <span className="text-sm text-gray-400 mr-2">View:</span>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-3 rounded-full transition-all ${
                                viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                            title="Grid view"
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
                            title="List view"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Results Count */}
                    <div className="text-center mb-8">
                        <p className="text-gray-500">
                            Showing <span className="font-semibold text-gray-900">{filteredTeam.length}</span> team members
                        </p>
                    </div>

                    {/* Team Grid/List */}
                    {filteredTeam.length > 0 ? (
                        viewMode === 'grid' ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredTeam.map((member) => {
                                    const deptColor =
                                        member.department === 'Leadership' ? 'bg-emerald-50 text-emerald-700' :
                                            member.department === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                                                member.department === 'Programs' ? 'bg-rose-50 text-rose-700' :
                                                    member.department === 'Advocacy' ? 'bg-amber-50 text-amber-700' :
                                                        'bg-gray-50 text-gray-700';

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
                            <div className="space-y-4 max-w-4xl mx-auto">
                                {filteredTeam.map((member) => {
                                    const deptColor =
                                        member.department === 'Leadership' ? 'bg-emerald-50 text-emerald-700' :
                                            member.department === 'Research' ? 'bg-indigo-50 text-indigo-700' :
                                                member.department === 'Programs' ? 'bg-rose-50 text-rose-700' :
                                                    member.department === 'Advocacy' ? 'bg-amber-50 text-amber-700' :
                                                        'bg-gray-50 text-gray-700';

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
                        <div className="text-center py-20 bg-gray-50 rounded-3xl max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No team members found</h3>
                            <p className="text-gray-500 mb-6">Check back soon for updates.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Leadership Spotlight - Only show if there are leadership team members */}
            {teamMembers.filter(m => m.department === 'Leadership').length > 0 && (
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
                                <div key={leader.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                                            {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                                            <p className="text-white/80 text-sm">{leader.role}</p>
                                            {leader.education && (
                                                <p className="text-white/60 text-xs mt-1">{leader.education}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Join the Team CTA */}
            <section className="relative bg-gradient-to-br from-amber-600 to-emerald-600 py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join our mission
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        We're always looking for passionate individuals to join our team.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/careers"
                            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            View open positions
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
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
                            <div key={i} className="flex items-center text-white/80">
                                <span className="text-xl mr-2">{perk.icon}</span>
                                <span className="text-sm">{perk.text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        ✦ Join a team that's making a difference across Africa
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Team;