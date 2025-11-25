import React from 'react';
import PageHeader from '../components/PageHeader';
import TeamCard from '../components/TeamCard';
import { siteContent } from '../data/content';

const Team = () => {
    return (
        <div>
            <PageHeader
                title="Our Team"
                subtitle="Meet the passionate professionals driving our mission forward"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {siteContent.team.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Join Our Mission
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We're always looking for passionate individuals to join our team and help us make a difference.
                    </p>
                    <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        View Open Positions
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Team;