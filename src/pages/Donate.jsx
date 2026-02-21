import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Donate = () => {
    const [copiedAccount, setCopiedAccount] = useState(null);

    // Get account information from siteContent
    const accounts = siteContent.donation?.accounts || {
        naira: {
            currency: "₦",
            accountName: "Digital and Mental Health Initiative",
            accountNumber: "1028622735",
            bankName: "United Bank of Africa (UBA)",
            type: "Naira Account"
        },
        usd: {
            currency: "$",
            accountName: "Digital and Mental Health Initiative",
            accountNumber: "3004920282",
            bankName: "United Bank of Africa (UBA)",
            type: "USD Account"
        },
        euro: {
            currency: "€",
            accountName: "Digital and Mental Health Initiative",
            accountNumber: "3004921698",
            bankName: "United Bank of Africa (UBA)",
            type: "Euro Account"
        }
    };

    // Copy to clipboard function
    const copyToClipboard = (text, accountType) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(accountType);
        setTimeout(() => setCopiedAccount(null), 2000);
    };

    return (
        <div>
            {/* Hero Section - Spacious & Centered */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 min-h-[90vh] flex items-center py-32 lg:py-40 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/20 to-emerald-100/20 rounded-full filter blur-3xl opacity-20"></div>

                {/* Additional subtle decorative elements */}
                <div className="absolute top-60 left-10 w-32 h-32 border-4 border-amber-200/30 rounded-full"></div>
                <div className="absolute bottom-60 right-10 w-40 h-40 border-4 border-emerald-200/30 rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumbs - Centered */}
                        <nav className="flex items-center justify-center space-x-2 text-sm mb-8 text-gray-500">
                            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 font-medium">Donate</span>
                        </nav>

                        {/* Badge - Centered */}
                        <div className="inline-flex items-center justify-center mb-12">
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-amber-100">
                                ✦ Make a Difference
                            </span>
                        </div>

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">Support</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Our Work
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Your donation helps us protect digital rights and promote mental health across Africa.
                        </p>

                        {/* CTA Button - Centered */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#donate-form"
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Donate now
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </a>
                        </div>

                        {/* Scroll indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                            <div className="flex flex-col items-center space-y-2 text-gray-400">
                                <span className="text-xs uppercase tracking-wider">Scroll</span>
                                <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                                    <div className="w-1 h-2 bg-gradient-to-b from-amber-500 to-emerald-500 rounded-full mt-2 animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fundraising Message Section */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-3xl p-12 md:p-16">
                        <span className="inline-block text-6xl mb-6 animate-pulse">💛</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Call for Fundraising
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                            We're raising funds to support mental health and digital well-being for young people—creating safe spaces, practical tools, and long-term support where it matters most. Every contribution, big or small, helps us reach more lives.
                        </p>
                        <div className="inline-block bg-white px-8 py-3 rounded-full text-amber-600 font-medium text-sm shadow-md">
                            ✨ Thank you for standing with us ✨
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Quick overview */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-gray-900">15</div>
                            <div className="text-sm text-gray-500">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">10K+</div>
                            <div className="text-sm text-gray-500">Lives Impacted</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">50+</div>
                            <div className="text-sm text-gray-500">Community Centers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">85%</div>
                            <div className="text-sm text-gray-500">Goes to Programs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Donation Section - Account Details */}
            <section id="donate-form" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Bank Transfer</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Donation Details
                        </h2>
                        <p className="text-gray-500">
                            Please transfer your donation to any of the accounts below.
                            After transfer, kindly send a confirmation email to{' '}
                            <a href={`mailto:${siteContent.site?.email}`} className="text-amber-600 hover:text-amber-700 font-medium">
                                {siteContent.site?.email || 'info@drmhiafrica.org'}
                            </a>
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Account Cards Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* Naira Account */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:scale-[1.02]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-2xl">
                                        ₦
                                    </div>
                                    <span className="text-xs font-medium bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                                        {accounts.naira.type}
                                    </span>
                                </div>

                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-900 text-base mb-3">{accounts.naira.accountName}</p>

                                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-amber-50 rounded-xl p-3 mb-3 border border-amber-200">
                                    <span className="font-mono font-bold text-gray-900 text-lg">{accounts.naira.accountNumber}</span>
                                    <button
                                        onClick={() => copyToClipboard(accounts.naira.accountNumber, 'naira')}
                                        className="text-amber-600 hover:text-amber-700 p-1"
                                        title="Copy account number"
                                    >
                                        {copiedAccount === 'naira' ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 mb-1">Bank</p>
                                <p className="font-medium text-gray-800">{accounts.naira.bankName}</p>
                            </div>

                            {/* USD Account */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:scale-[1.02]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl">
                                        $
                                    </div>
                                    <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                                        {accounts.usd.type}
                                    </span>
                                </div>

                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-900 text-base mb-3">{accounts.usd.accountName}</p>

                                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-emerald-50 rounded-xl p-3 mb-3 border border-emerald-200">
                                    <span className="font-mono font-bold text-gray-900 text-lg">{accounts.usd.accountNumber}</span>
                                    <button
                                        onClick={() => copyToClipboard(accounts.usd.accountNumber, 'usd')}
                                        className="text-emerald-600 hover:text-emerald-700 p-1"
                                        title="Copy account number"
                                    >
                                        {copiedAccount === 'usd' ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 mb-1">Bank</p>
                                <p className="font-medium text-gray-800">{accounts.usd.bankName}</p>
                            </div>

                            {/* Euro Account */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:scale-[1.02] md:col-span-2 lg:col-span-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl">
                                        €
                                    </div>
                                    <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                                        {accounts.euro.type}
                                    </span>
                                </div>

                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-900 text-base mb-3">{accounts.euro.accountName}</p>

                                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-indigo-50 rounded-xl p-3 mb-3 border border-indigo-200">
                                    <span className="font-mono font-bold text-gray-900 text-lg">{accounts.euro.accountNumber}</span>
                                    <button
                                        onClick={() => copyToClipboard(accounts.euro.accountNumber, 'euro')}
                                        className="text-indigo-600 hover:text-indigo-700 p-1"
                                        title="Copy account number"
                                    >
                                        {copiedAccount === 'euro' ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 mb-1">Bank</p>
                                <p className="font-medium text-gray-800">{accounts.euro.bankName}</p>
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-12 text-center shadow-xl">
                            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
                                Thank you for standing with us and investing in healthier minds and safer digital futures. ✨
                            </p>
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

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all hover:scale-105">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer</h3>
                            <p className="text-gray-500 mb-6">
                                Share your skills and time to support our programs
                            </p>
                            <Link to="/volunteer" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
                                Learn more
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all hover:scale-105">
                            <div className="text-5xl mb-4">🤲</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Partner With Us</h3>
                            <p className="text-gray-500 mb-6">
                                Corporate partnerships for larger impact
                            </p>
                            <Link to="/partners" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
                                Become a partner
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all hover:scale-105">
                            <div className="text-5xl mb-4">📢</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Spread the Word</h3>
                            <p className="text-gray-500 mb-6">
                                Share our mission with your network
                            </p>
                            <button className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
                                Share
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Enhanced */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "Is my donation tax-deductible?",
                                a: "Yes, we are a registered nonprofit organization. All donations are tax-deductible."
                            },
                            {
                                q: "How do I confirm my transfer?",
                                a: "After making a transfer, please send a confirmation email with your name, amount, and date to finance@drmhiafrica.org"
                            },
                            {
                                q: "How much goes to programs?",
                                a: "85% of every donation goes directly to our programs and impact initiatives."
                            },
                            {
                                q: "Can I donate from outside Nigeria?",
                                a: "Yes! We have USD and Euro accounts for international donations."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-500 text-sm">{faq.a}</p>
                            </div>
                        ))}
                        <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-6 text-white md:col-span-2">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Still have questions?</h3>
                                    <p className="text-white/80 text-sm">We're here to help with your donation.</p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;