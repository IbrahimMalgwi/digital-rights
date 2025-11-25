import React from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const About = () => {
    return (
        <div>
            <PageHeader
                title="About Us"
                subtitle="Learn about our mission, vision, and the work we do across Africa"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                {siteContent.about.mission.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {siteContent.about.mission.content}
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                {siteContent.about.vision.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {siteContent.about.vision.content}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {siteContent.about.values.map((value, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                                    <h3 className="font-bold text-gray-800 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our Impact
                        </h2>
                        <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary-600 mb-4">75%</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Literacy Improvement</h3>
                            <p className="text-gray-600">In communities where we've implemented our training programs</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary-600 mb-4">60%</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mental Health Awareness Increase</h3>
                            <p className="text-gray-600">Reported better understanding of digital mental health</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary-600 mb-4">40%</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Policy Engagement Success</h3>
                            <p className="text-gray-600">Of our policy recommendations adopted by governments</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;