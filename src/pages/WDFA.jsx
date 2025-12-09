import React from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const WDFA = () => {
    // Find the WDFA project
    const wdfaProject = siteContent.projects.find(project =>
        project.title.includes("Women Digital Futures Africa") ||
        project.title.includes("WDFA")
    );

    if (!wdfaProject) {
        return (
            <div>
                <PageHeader
                    title="Women Digital Futures Africa"
                    subtitle="Empowering African women in the digital space"
                />
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-gray-600">Project information coming soon...</p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            <PageHeader
                title="Women Digital Futures Africa"
                subtitle="Empowering African women with digital skills, AI literacy, and safe online practices"
            />

            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">About WDFA</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {wdfaProject.about || "Digital spaces are powerful, but they aren't always safe or inclusive. Many women—especially in underserved communities—face barriers of cost, language, confidence, and online harm. We believe every woman deserves the skills, safeguards, and support to participate fully in the digital space without losing privacy, dignity, or mental health."}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {wdfaProject.services || "We design practical training, mentorship, and advocacy that help women navigate everyday digital tasks, evaluate AI responsibly, and shape safer online spaces. Our work blends hands-on learning with community support and policy engagement—always focused on real needs, real safeguards, real outcomes."}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h3>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 mb-2">{wdfaProject.impact}</div>
                                        <div className="text-sm text-gray-600">Women Trained</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 mb-2">{wdfaProject.location}</div>
                                        <div className="text-sm text-gray-600">Location</div>
                                    </div>
                                </div>
                            </div>
                            {wdfaProject.website && (
                                <a
                                    href={wdfaProject.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                                >
                                    Visit WDFA Website
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our Programs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive programs designed to empower women across Africa
                        </p>
                        <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {wdfaProject.programs?.map((program, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-4xl mb-6">
                                    {index === 0 ? "🎓" : index === 1 ? "🤝" : "📢"}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{program.description}</p>
                            </div>
                        )) || (
                            <>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-6">🎓</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Trainings</h3>
                                    <p className="text-gray-600 leading-relaxed">Practical, foundational trainings that build AI literacy, digital confidence, and safer online habits using local examples and hands-on activities.</p>
                                </div>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-6">🤝</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Mentorship</h3>
                                    <p className="text-gray-600 leading-relaxed">Relational support program pairing women with trained mentors and Peer Pods for goal-setting, confidence-building, and healthy digital habits.</p>
                                </div>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-6">📢</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Advocacy</h3>
                                    <p className="text-gray-600 leading-relaxed">Promoting safer digital spaces free from technology-facilitated gender-based abuse through practical norms and policy engagement.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* AI Program Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            AI Literacy & Digital Empowerment Program
                        </h2>
                        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
                            <p className="text-gray-700 leading-relaxed">
                                {wdfaProject.aiProgram || "This six-week program gives women in Africa, particularly from underserved communities, a practical foundation in AI. It uses adult learning with a peer-supported, cohort-based approach that includes WhatsApp group discussions, short one-on-one clinics, local examples, and shared resources. The course is mobile-friendly and low-data, balancing simple theory with hands-on practice so participants can understand and apply basic AI skills by the end of the program."}
                            </p>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">6</div>
                                    <div className="text-sm text-gray-600">Weeks</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Mobile</div>
                                    <div className="text-sm text-gray-600">Friendly</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Peer</div>
                                    <div className="text-sm text-gray-600">Supported</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Hands-on</div>
                                    <div className="text-sm text-gray-600">Practice</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Our Objectives
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wdfaProject.objectives?.map((objective, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-bold mx-auto mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="font-semibold text-gray-800">{objective}</h3>
                            </div>
                        )) || (
                            <>
                                <div className="bg-white rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-bold mx-auto mb-4">1</div>
                                    <h3 className="font-semibold text-gray-800">AI literacy and digital empowerment</h3>
                                </div>
                                <div className="bg-white rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-bold mx-auto mb-4">2</div>
                                    <h3 className="font-semibold text-gray-800">Mentorship and peer support networks</h3>
                                </div>
                                <div className="bg-white rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-bold mx-auto mb-4">3</div>
                                    <h3 className="font-semibold text-gray-800">Advocacy for safer digital spaces</h3>
                                </div>
                                <div className="bg-white rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-bold mx-auto mb-4">4</div>
                                    <h3 className="font-semibold text-gray-800">Practical, hands-on training</h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            {wdfaProject.partners && wdfaProject.partners.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            Our Partners
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {wdfaProject.partners.map((partner, index) => (
                                <div key={index} className="bg-gray-50 px-6 py-3 rounded-lg">
                                    <span className="text-gray-700 font-medium">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Get Involved with WDFA
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Join us in creating safer, more inclusive digital spaces for women across Africa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Contact Us
                            </a>
                            <a
                                href="/donate"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors"
                            >
                                Support Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WDFA;