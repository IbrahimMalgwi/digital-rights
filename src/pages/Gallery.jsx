import React from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const Gallery = () => {
    return (
        <div>
            <PageHeader
                title="Gallery"
                subtitle="Visual stories from our projects and events across Africa"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold">
                            All
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                            Events
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                            Campaigns
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                            Workshops
                        </button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.gallery.map((item) => (
                            <div key={item.id} className="group cursor-pointer">
                                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-64 rounded-2xl mb-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;