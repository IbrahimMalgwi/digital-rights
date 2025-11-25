import React from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const Partners = () => {
    return (
        <div>
            <PageHeader
                title="Our Partners"
                subtitle="Collaborating with organizations across Africa to amplify our impact"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {siteContent.partners.map((partner, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-2xl font-bold mb-6">
                                    {partner.name.split(' ').map(word => word[0]).join('')}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{partner.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Become a Partner
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join us in creating meaningful change across Africa. Let's collaborate to protect digital rights and promote mental wellbeing.
                    </p>
                    <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                        Partner With Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Partners;