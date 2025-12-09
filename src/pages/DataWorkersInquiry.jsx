import React from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const DataWorkersInquiry = () => {
    // Find the Data Workers' Inquiry project
    const dwiProject = siteContent.projects.find(project =>
        project.title.includes("Data Workers' Inquiry") ||
        project.title.includes("Data Workers")
    );

    if (!dwiProject) {
        return (
            <div>
                <PageHeader
                    title="Data Workers' Inquiry"
                    subtitle="A global research initiative by and for data workers"
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
                title="Data Workers' Inquiry"
                subtitle="A global, radically participatory research initiative where data workers become community researchers"
            />

            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Project</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {dwiProject.about}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {dwiProject.tagline}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h3>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 mb-2">{dwiProject.impact}</div>
                                        <div className="text-sm text-gray-600">Worker Researchers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 mb-2">{dwiProject.location}</div>
                                        <div className="text-sm text-gray-600">Global Reach</div>
                                    </div>
                                </div>
                            </div>
                            {dwiProject.website && (
                                <a
                                    href={dwiProject.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                                >
                                    Visit Project Website
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                            Our Methodology
                        </h2>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {dwiProject.methodology}
                            </p>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Community</div>
                                    <div className="text-sm text-gray-600">Led Research</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Worker</div>
                                    <div className="text-sm text-gray-600">Empowerment</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Global</div>
                                    <div className="text-sm text-gray-600">Network</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">Tangible</div>
                                    <div className="text-sm text-gray-600">Change</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiries Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Regional Inquiries
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            16 data workers across 9 countries conducting research in their workplaces
                        </p>
                        <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {dwiProject.inquiries?.map((inquiry, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{inquiry.region}</h3>
                                </div>
                                <h4 className="text-lg font-semibold text-primary-600 mb-3">{inquiry.title}</h4>
                                <p className="text-gray-600">{inquiry.description}</p>
                            </div>
                        )) || (
                            <>
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">1</div>
                                        <h3 className="text-xl font-bold text-gray-800">Kenya</h3>
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary-600 mb-3">Data Workers in Kenya Organize!</h4>
                                    <p className="text-gray-600">Learn about grievances of data workers at Sama, Cloud Factory, and Remotasks, and how they organize for better conditions.</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">2</div>
                                        <h3 className="text-xl font-bold text-gray-800">Syria/Lebanon</h3>
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary-600 mb-3">Syrian Data Workers in their own Words</h4>
                                    <p className="text-gray-600">Challenges faced by refugee data workers in Lebanon and daily life of data workers in Syria.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Events & Discussions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Online panels where community researchers discuss their inquiries and findings
                        </p>
                        <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {dwiProject.events?.map((event, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 mb-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">{event.topic}</h3>
                                    <span className="text-primary-600 font-semibold">{event.date}</span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Speakers:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {event.speakers.map((speaker, idx) => (
                                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                {speaker}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {event.recording && (
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                                    >
                                        Watch Recording
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        )) || (
                            <div className="bg-white rounded-2xl p-8 mb-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">What impact does content moderation have on workers' mental health?</h3>
                                    <span className="text-primary-600 font-semibold">October 21, 2024</span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Speakers:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Kauna Malgwi</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Botlhokwa Ranta</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Fasica Gebrekidan</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Milagros Miceli</span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                                >
                                    Watch Recording
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Project Objectives
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dwiProject.objectives?.map((objective, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-bold mx-auto mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="font-semibold text-gray-800">{objective}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Join the Data Workers' Inquiry
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Be part of this global initiative documenting labor conditions and building transnational solidarity among data workers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={dwiProject.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Visit Project Website
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors"
                            >
                                Get Involved
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataWorkersInquiry;