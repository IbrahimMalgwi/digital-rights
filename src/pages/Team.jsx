import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/cards/TeamCard';
import { siteContent } from '../data/content';
import Hero from '../components/cards/Hero';

const Team = () => {
    const [activeDepartment, setActiveDepartment] = useState('All');
    const [viewMode] = useState('grid');

    const teamMembers = siteContent.team || [];

    // Department categories – dynamically generated with updated colors
    const departments = [
        { name: 'All', count: teamMembers.length, icon: '👥', color: 'bg-secondary-100 text-secondary-800' },
        ...Array.from(new Set(teamMembers.map(m => m.department))).map(dept => ({
            name: dept,
            count: teamMembers.filter(m => m.department === dept).length,
            icon: dept === 'Leadership' ? '⭐' :
                dept === 'Research' ? '🔬' :
                    dept === 'Programs' ? '📋' :
                        dept === 'Advocacy' ? '📢' : '👤',
            color: dept === 'Leadership' ? 'bg-primary-50 text-primary-700' :
                dept === 'Research' ? 'bg-accent-50 text-accent-700' :
                    dept === 'Programs' ? 'bg-secondary-100 text-secondary-800' :
                        dept === 'Advocacy' ? 'bg-primary-50 text-primary-700' :
                            'bg-secondary-50 text-secondary-700'
        }))
    ];

    // Filter team members
    const filteredTeam = activeDepartment === 'All'
        ? teamMembers
        : teamMembers.filter(m => m.department === activeDepartment);

    return (
        <div className="overflow-hidden">
            <Hero compact eyebrow="People behind the mission" title="Meet our team" subtitle="Researchers, advocates, practitioners, and community leaders working for safer digital futures." />
            {/* Main Team Section */}
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 mb-12 animate-slide-up">
                        Team Members
                    </h3>

                    {filteredTeam.length > 0 ? (
                        viewMode === 'grid' ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredTeam.map((member, index) => {
                                    const deptColor = {
                                        Leadership: 'bg-primary-50 text-primary-700',
                                        Research: 'bg-accent-50 text-accent-700',
                                        Programs: 'bg-secondary-100 text-secondary-800',
                                        Advocacy: 'bg-primary-50 text-primary-700',
                                    }[member.department] || 'bg-secondary-50 text-secondary-700';

                                    return (
                                        <div key={member.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
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
                                {filteredTeam.map((member, index) => {
                                    const deptColor = {
                                        Leadership: 'bg-primary-50 text-primary-700',
                                        Research: 'bg-accent-50 text-accent-700',
                                        Programs: 'bg-secondary-100 text-secondary-800',
                                        Advocacy: 'bg-primary-50 text-primary-700',
                                    }[member.department] || 'bg-secondary-50 text-secondary-700';

                                    return (
                                        <div key={member.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
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
                        <div className="card text-center py-20 px-6 max-w-2xl mx-auto animate-fade-in">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">No team members found</h3>
                            <p className="text-secondary-500 mb-6">Check back soon for updates.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Department Filter Buttons – updated colors */}
            <section className="filter-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-sm font-medium text-secondary-400 uppercase tracking-wider text-center mb-4">Filter by Department</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {departments.map((dept) => (
                            <button
                                key={dept.name}
                                onClick={() => setActiveDepartment(dept.name)}
                                className={`
                                    group px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105
                                    ${activeDepartment === dept.name
                                    ? 'bg-secondary-900 text-white'
                                    : `${dept.color} hover:shadow-md`
                                }
                                `}
                            >
                                <span className="mr-2">{dept.icon}</span>
                                {dept.name}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                                    activeDepartment === dept.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/60 text-secondary-600'
                                }`}>
                                    {dept.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Values Section – updated colors */}
            <section className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Our Culture</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            What drives us
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="icon-card animate-fade-in">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Diverse Expertise</h3>
                            <p className="text-secondary-500">Bringing together professionals from various fields</p>
                        </div>
                        <div className="icon-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="text-5xl mb-4">🗺️</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Pan-African</h3>
                            <p className="text-secondary-500">Team members across the continent</p>
                        </div>
                        <div className="icon-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Mission-Driven</h3>
                            <p className="text-secondary-500">Passionate about creating lasting change</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Spotlight – updated gradient and styles */}
            {teamMembers.filter(m => m.department === 'Leadership').length > 0 && (
                <section className="modern-cta">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-slide-up">
                            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm mb-4">
                                Leadership
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                                Meet our leaders
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {teamMembers.filter(m => m.department === 'Leadership').map((leader, index) => (
                                <div key={leader.id} className="rounded-3xl p-6 border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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

            {/* Join the Team CTA – updated gradient */}
            <section className="modern-cta">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-slide-up">
                        Join our mission
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
                        We're always looking for passionate individuals to join our team.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn-secondary group px-8 py-4"
                        >
                            View open positions
                            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-outline px-8 py-4 border-white/30 text-white hover:bg-white/10"
                        >
                            Send application
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        {[
                            { icon: '🏠', text: 'Remote Work' },
                            { icon: '📚', text: 'Learning Budget' },
                            { icon: '🏥', text: 'Health Insurance' },
                            { icon: '⏰', text: 'Flexible Hours' }
                        ].map((perk, i) => (
                            <div key={i} className="flex items-center text-white/80 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="text-xl mr-2">{perk.icon}</span>
                                <span className="text-sm">{perk.text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/60 text-sm mt-8">
                        🌟 Join a team that's making a difference across Africa
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Team;

