import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const Donate = () => {
    const [selectedTier, setSelectedTier] = useState(0);
    const [customAmount, setCustomAmount] = useState('');

    return (
        <div>
            <PageHeader
                title="Support Our Work"
                subtitle="Your donation helps us protect digital rights and promote mental health across Africa"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Donation Tiers */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Impact</h2>

                            <div className="space-y-6 mb-8">
                                {siteContent.donation.tiers.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                                            selectedTier === index
                                                ? 'border-primary-600 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-400'
                                        }`}
                                        onClick={() => setSelectedTier(index)}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-800">{tier.name}</h3>
                                            <div className="text-2xl font-bold text-primary-600">${tier.amount}</div>
                                        </div>
                                        <p className="text-gray-600 mb-4">{tier.description}</p>
                                        <ul className="space-y-2">
                                            {tier.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Custom Amount */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Or enter custom amount
                                </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg">
                                Donate ${customAmount || siteContent.donation.tiers[selectedTier].amount}
                            </button>
                        </div>

                        {/* Impact Information */}
                        <div>
                            <div className="bg-gray-50 rounded-2xl p-8 sticky top-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Impact</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                                            💻
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Digital Literacy Training</h4>
                                            <p className="text-gray-600 text-sm">$25 provides digital skills training for one person</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                                            🧠
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Mental Health Support</h4>
                                            <p className="text-gray-600 text-sm">$100 funds counseling sessions for 5 people</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                                            📚
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Research & Advocacy</h4>
                                            <p className="text-gray-600 text-sm">$500 supports policy research affecting thousands</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-primary-100 rounded-lg">
                                    <p className="text-primary-800 text-sm">
                                        <strong>Transparency Promise:</strong> We regularly publish impact reports showing exactly how donations are used to create change.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;