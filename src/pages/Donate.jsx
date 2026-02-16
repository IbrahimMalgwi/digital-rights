import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { siteContent } from '../data/content';

const Donate = () => {
    const [selectedTier, setSelectedTier] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time'); // one-time, monthly, annual
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [showCustomInput, setShowCustomInput] = useState(false);

    // Enhanced donation tiers with more details
    const donationTiers = siteContent.donation?.tiers || [
        {
            name: "Supporter",
            amount: 25,
            description: "Help provide digital literacy training for one person",
            benefits: [
                "Monthly newsletter",
                "Impact updates",
                "Social media shoutout"
            ],
            impact: "📱 Digital skills for 1 person",
            icon: "🌱",
            color: "from-green-500 to-emerald-600"
        },
        {
            name: "Champion",
            amount: 100,
            description: "Fund mental health support for 5 people",
            benefits: [
                "All Supporter benefits",
                "Quarterly impact report",
                "Name on donor wall",
                "Invitation to virtual events"
            ],
            impact: "🧠 Mental health support for 5 people",
            icon: "🚀",
            color: "from-blue-500 to-cyan-600"
        },
        {
            name: "Visionary",
            amount: 500,
            description: "Support research that affects thousands",
            benefits: [
                "All Champion benefits",
                "Annual report recognition",
                "Exclusive research access",
                "Strategic partnership opportunities"
            ],
            impact: "📊 Policy research affecting thousands",
            icon: "⭐",
            color: "from-purple-500 to-pink-600"
        }
    ];

    // Impact stories
    const impactStories = [
        {
            name: "Sarah's Story",
            location: "Nairobi, Kenya",
            quote: "The digital literacy training I received opened up new job opportunities I never thought possible.",
            image: "👩🏾",
            impact: "Digital Skills Graduate"
        },
        {
            name: "Community Center",
            location: "Lagos, Nigeria",
            quote: "With 50 computers and trained facilitators, we're reaching hundreds of youth every month.",
            image: "🏫",
            impact: "Tech Hub Supported"
        }
    ];

    // Funding allocation data
    const allocationData = [
        { category: "Programs & Impact", percentage: 85, color: "bg-primary-600" },
        { category: "Administration", percentage: 10, color: "bg-secondary-400" },
        { category: "Fundraising", percentage: 5, color: "bg-accent-400" }
    ];

    const handleDonate = () => {
        const amount = showCustomInput ? customAmount : donationTiers[selectedTier].amount;
        // Handle donation logic here
        console.log('Donating:', { amount, donationType, paymentMethod });
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title="Support Our Work"
                subtitle="Your donation helps us protect digital rights and promote mental health across Africa"
                background="primary"
                size="large"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Impact Counter Strip */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-large p-8 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🌍</div>
                                <div className="text-2xl font-bold gradient-text">15</div>
                                <div className="text-sm text-secondary-600">Countries Reached</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">👥</div>
                                <div className="text-2xl font-bold gradient-text">10K+</div>
                                <div className="text-sm text-secondary-600">Lives Impacted</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🏫</div>
                                <div className="text-2xl font-bold gradient-text">50+</div>
                                <div className="text-sm text-secondary-600">Community Centers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">📚</div>
                                <div className="text-2xl font-bold gradient-text">25+</div>
                                <div className="text-sm text-secondary-600">Research Papers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Donation Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Donation Form - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                                    Make a <span className="gradient-text">Donation</span>
                                </h2>

                                {/* Donation Type Toggle */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {['one-time', 'monthly', 'annual'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setDonationType(type)}
                                            className={`
                                                px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize
                                                ${donationType === type
                                                ? 'bg-primary-600 text-white shadow-soft scale-105'
                                                : 'bg-white text-gray-600 border border-gray-300 hover:border-primary-400'
                                            }
                                            `}
                                        >
                                            {type.replace('-', ' ')}
                                            {type === 'monthly' && (
                                                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                                                    Save 10%
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Donation Tiers */}
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    {donationTiers.map((tier, index) => (
                                        <div
                                            key={index}
                                            className={`
                                                group relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2
                                                ${selectedTier === index && !showCustomInput
                                                ? 'border-primary-600 shadow-medium scale-105'
                                                : 'border-gray-200 hover:border-primary-400 hover:shadow-soft'
                                            }
                                            `}
                                            onClick={() => {
                                                setSelectedTier(index);
                                                setShowCustomInput(false);
                                            }}
                                        >
                                            {/* Popular Badge */}
                                            {index === 1 && (
                                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                        Most Popular
                                                    </span>
                                                </div>
                                            )}

                                            <div className="text-center">
                                                <div className="text-4xl mb-4">{tier.icon}</div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.name}</h3>
                                                <div className="text-3xl font-bold gradient-text mb-3">
                                                    ${tier.amount}
                                                </div>
                                                <p className="text-sm text-secondary-600 mb-4">
                                                    {tier.description}
                                                </p>
                                                <div className={`h-1 w-12 mx-auto bg-gradient-to-r ${tier.color} rounded-full transition-all duration-300 group-hover:w-16`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Custom Amount */}
                                <div className="mb-8">
                                    <button
                                        onClick={() => setShowCustomInput(!showCustomInput)}
                                        className="text-primary-600 font-semibold hover:text-primary-700 mb-3 inline-flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Enter custom amount
                                    </button>

                                    {showCustomInput && (
                                        <div className="animate-slide-down">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Custom Amount (USD)
                                            </label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                    $
                                                </span>
                                                <input
                                                    type="number"
                                                    value={customAmount}
                                                    onChange={(e) => setCustomAmount(e.target.value)}
                                                    className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                    placeholder="Enter amount"
                                                    min="1"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Payment Methods */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-medium text-gray-700 mb-4">Payment Method</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['card', 'paypal', 'bank'].map((method) => (
                                            <button
                                                key={method}
                                                onClick={() => setPaymentMethod(method)}
                                                className={`
                                                    flex items-center px-6 py-3 rounded-xl border-2 transition-all duration-300 capitalize
                                                    ${paymentMethod === method
                                                    ? 'border-primary-600 bg-primary-50'
                                                    : 'border-gray-200 hover:border-primary-400'
                                                }
                                                `}
                                            >
                                                {method === 'card' && (
                                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2"/>
                                                        <path d="M2 10h20" strokeWidth="2"/>
                                                    </svg>
                                                )}
                                                {method === 'paypal' && <span className="mr-2">🅿️</span>}
                                                {method === 'bank' && <span className="mr-2">🏦</span>}
                                                {method}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Donate Button */}
                                <button
                                    onClick={handleDonate}
                                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-5 px-6 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-large"
                                >
                                    {donationType === 'monthly' ? 'Donate Monthly' : 'Donate Now'} • $
                                    {showCustomInput
                                        ? (customAmount || '0')
                                        : donationTiers[selectedTier].amount
                                    }
                                </button>

                                {/* Trust Badges */}
                                <div className="flex items-center justify-center space-x-6 mt-6">
                                    <div className="flex items-center text-sm text-secondary-500">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Secure Payment
                                    </div>
                                    <div className="flex items-center text-sm text-secondary-500">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Tax Deductible
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact Sidebar */}
                        <div className="space-y-6">
                            {/* Your Impact Card */}
                            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <span className="w-1 h-6 bg-white rounded-full mr-3"></span>
                                    Your Impact
                                </h3>

                                <div className="space-y-4">
                                    {donationTiers.map((tier, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                                {tier.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-primary-100">
                                                    ${tier.amount}: {tier.impact}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <p className="text-sm text-primary-100">
                                        <span className="font-bold text-white">100%</span> of your donation goes directly to programs
                                    </p>
                                </div>
                            </div>

                            {/* Funding Allocation */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    How Your Donation Helps
                                </h3>
                                <div className="space-y-4">
                                    {allocationData.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">{item.category}</span>
                                                <span className="font-semibold text-gray-900">{item.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                                                    style={{ width: `${item.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Stories */}
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Real Impact Stories
                                </h3>
                                <div className="space-y-4">
                                    {impactStories.map((story, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-xl mr-3">
                                                {story.image}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-700 italic">"{story.quote}"</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {story.name}, {story.location}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Transparency Seal */}
                            <div className="bg-primary-50 rounded-3xl p-6 border border-primary-100">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-3">
                                        🔒
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Transparency Promise</h4>
                                        <p className="text-sm text-secondary-600">
                                            We publish annual impact reports showing exactly how donations are used.
                                        </p>
                                        <Link to="/impact" className="text-primary-600 text-sm font-semibold hover:text-primary-700 mt-2 inline-block">
                                            View Impact Reports →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways to Support */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            Beyond Donations
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Other Ways to{' '}
                            <span className="gradient-text">Support</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Not ready to donate? There are many other ways to get involved
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-3xl p-8 card-hover text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                                🤝
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
                            <p className="text-secondary-600 mb-6">
                                Share your skills and time to support our programs and initiatives
                            </p>
                            <Link to="/volunteer" className="text-primary-600 font-semibold hover:text-primary-700">
                                Learn More →
                            </Link>
                        </div>

                        <div className="group bg-white rounded-3xl p-8 card-hover text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                                🤲
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Partner With Us</h3>
                            <p className="text-secondary-600 mb-6">
                                Corporate partnerships and foundation support for larger impact
                            </p>
                            <Link to="/partners" className="text-primary-600 font-semibold hover:text-primary-700">
                                Become a Partner →
                            </Link>
                        </div>

                        <div className="group bg-white rounded-3xl p-8 card-hover text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                                📢
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Spread the Word</h3>
                            <p className="text-secondary-600 mb-6">
                                Share our mission with your network and amplify our impact
                            </p>
                            <button className="text-primary-600 font-semibold hover:text-primary-700">
                                Share →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Frequently Asked{' '}
                            <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Everything you need to know about donating
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Is my donation tax-deductible?",
                                a: "Yes, we are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law."
                            },
                            {
                                q: "Can I donate in my local currency?",
                                a: "Yes, our payment processor automatically converts your donation to USD at the current exchange rate."
                            },
                            {
                                q: "How much of my donation goes to programs?",
                                a: "85% of every dollar goes directly to our programs and impact initiatives."
                            },
                            {
                                q: "Can I set up a recurring donation?",
                                a: "Absolutely! Choose the 'monthly' option to set up automatic recurring donations."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-secondary-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;