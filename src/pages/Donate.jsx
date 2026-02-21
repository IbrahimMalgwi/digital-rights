import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Donate = () => {
    const [selectedTier, setSelectedTier] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');
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
            color: "from-amber-500 to-amber-600"
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
            color: "from-emerald-500 to-emerald-600"
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
            color: "from-indigo-500 to-indigo-600"
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
        { category: "Programs & Impact", percentage: 85, color: "bg-amber-600" },
        { category: "Administration", percentage: 10, color: "bg-emerald-600" },
        { category: "Fundraising", percentage: 5, color: "bg-indigo-600" }
    ];

    const handleDonate = () => {
        const amount = showCustomInput ? customAmount : donationTiers[selectedTier].amount;
        console.log('Donating:', { amount, donationType, paymentMethod });
    };

    return (
        <div>
            {/* Hero Section - Bold & Graphic (matching other pages) */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-sm mb-8">
                            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">→</span>
                            <span className="text-gray-900 font-medium">Donate</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Make a Difference
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Support{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Our Work
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Your donation helps us protect digital rights and promote mental health across Africa.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#donate-form"
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Donate now
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats - Bold Numbers (matching other pages) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                15
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Countries</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                10K+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Lives Impacted</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                50+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Community Centers</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                                25+
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Research Papers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Donation Section */}
            <section id="donate-form" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Donation Form - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    Make a donation
                                </h2>

                                {/* Donation Type Toggle */}
                                <div className="flex gap-3 mb-8">
                                    {['one-time', 'monthly', 'annual'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setDonationType(type)}
                                            className={`
                                                px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                                                ${donationType === type
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }
                                            `}
                                        >
                                            {type.replace('-', ' ')}
                                            {type === 'monthly' && (
                                                <span className="ml-2 px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                                                    -10%
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
                                                relative p-5 bg-gray-50 rounded-xl cursor-pointer transition-all hover:shadow-md
                                                ${selectedTier === index && !showCustomInput
                                                ? 'ring-2 ring-gray-900 bg-white'
                                                : 'border border-gray-200'
                                            }
                                            `}
                                            onClick={() => {
                                                setSelectedTier(index);
                                                setShowCustomInput(false);
                                            }}
                                        >
                                            {/* Popular Badge */}
                                            {index === 1 && (
                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                                                    <span className="bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs">
                                                        Popular
                                                    </span>
                                                </div>
                                            )}

                                            <div className="text-center">
                                                <div className="text-2xl mb-2">{tier.icon}</div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{tier.name}</h3>
                                                <div className="text-2xl font-bold text-gray-900 mb-2">
                                                    ${tier.amount}
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    {tier.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Custom Amount */}
                                <div className="mb-6">
                                    <button
                                        onClick={() => setShowCustomInput(!showCustomInput)}
                                        className="text-sm text-gray-600 hover:text-gray-900 mb-3 inline-flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Enter custom amount
                                    </button>

                                    {showCustomInput && (
                                        <div>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                                    $
                                                </span>
                                                <input
                                                    type="number"
                                                    value={customAmount}
                                                    onChange={(e) => setCustomAmount(e.target.value)}
                                                    className="flex-1 px-3 py-2 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                                    placeholder="Amount"
                                                    min="1"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Payment Methods */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Method</h3>
                                    <div className="flex gap-3">
                                        {['card', 'paypal', 'bank'].map((method) => (
                                            <button
                                                key={method}
                                                onClick={() => setPaymentMethod(method)}
                                                className={`
                                                    flex items-center px-4 py-2 rounded-lg border text-sm capitalize
                                                    ${paymentMethod === method
                                                    ? 'border-gray-900 bg-gray-900 text-white'
                                                    : 'border-gray-300 hover:border-gray-400'
                                                }
                                                `}
                                            >
                                                {method === 'card' && '💳'}
                                                {method === 'paypal' && '🅿️'}
                                                {method === 'bank' && '🏦'}
                                                <span className="ml-2">{method}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Donate Button */}
                                <button
                                    onClick={handleDonate}
                                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-all"
                                >
                                    {donationType === 'monthly' ? 'Donate Monthly' : 'Donate Now'} • $
                                    {showCustomInput
                                        ? (customAmount || '0')
                                        : donationTiers[selectedTier].amount
                                    }
                                </button>

                                {/* Trust Badges */}
                                <div className="flex items-center justify-center space-x-4 mt-4">
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg className="w-3 h-3 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Secure
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg className="w-3 h-3 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Tax Deductible
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact Sidebar */}
                        <div className="space-y-5">
                            {/* Your Impact Card */}
                            <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-semibold mb-4">Your Impact</h3>
                                <div className="space-y-3">
                                    {donationTiers.map((tier, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 text-sm">
                                                {tier.icon}
                                            </div>
                                            <p className="text-sm text-white/90">
                                                ${tier.amount}: {tier.impact}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                                    <p className="text-xs text-white/80">
                                        <span className="font-bold text-white">100%</span> goes to programs
                                    </p>
                                </div>
                            </div>

                            {/* Funding Allocation */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    How your donation helps
                                </h3>
                                <div className="space-y-3">
                                    {allocationData.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-gray-600">{item.category}</span>
                                                <span className="font-medium text-gray-900">{item.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div
                                                    className={`${item.color} h-1.5 rounded-full`}
                                                    style={{ width: `${item.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Stories */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Real impact stories
                                </h3>
                                <div className="space-y-3">
                                    {impactStories.map((story, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-lg mr-2">
                                                {story.image}
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600 italic">"{story.quote}"</p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    {story.name}, {story.location}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Transparency Seal */}
                            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                                <div className="flex">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mr-3 text-lg">
                                        🔒
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 text-sm mb-1">Transparency Promise</h4>
                                        <p className="text-xs text-gray-500">
                                            We publish annual impact reports showing exactly how donations are used.
                                        </p>
                                        <Link to="/impact" className="text-amber-600 text-xs font-medium hover:text-amber-700 mt-2 inline-block">
                                            View reports →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways to Support - Simple Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Beyond Donations</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Other ways to support
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-50 rounded-2xl text-center">
                            <div className="text-4xl mb-3">🤝</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Volunteer</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Share your skills and time to support our programs
                            </p>
                            <Link to="/volunteer" className="text-sm text-gray-900 font-medium hover:text-gray-700">
                                Learn more →
                            </Link>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl text-center">
                            <div className="text-4xl mb-3">🤲</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Partner With Us</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Corporate partnerships for larger impact
                            </p>
                            <Link to="/partners" className="text-sm text-gray-900 font-medium hover:text-gray-700">
                                Become a partner →
                            </Link>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl text-center">
                            <div className="text-4xl mb-3">📢</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Spread the Word</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Share our mission with your network
                            </p>
                            <button className="text-sm text-gray-900 font-medium hover:text-gray-700">
                                Share →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Simple */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                q: "Is my donation tax-deductible?",
                                a: "Yes, we are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible."
                            },
                            {
                                q: "Can I donate in my local currency?",
                                a: "Yes, our payment processor automatically converts your donation to USD."
                            },
                            {
                                q: "How much goes to programs?",
                                a: "85% of every dollar goes directly to our programs and impact initiatives."
                            },
                            {
                                q: "Can I set up recurring donations?",
                                a: "Absolutely! Choose the 'monthly' option to set up automatic recurring donations."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-5">
                                <h3 className="font-medium text-gray-900 mb-1 text-sm">{faq.q}</h3>
                                <p className="text-xs text-gray-500">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;