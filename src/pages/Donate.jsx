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
            {/* Hero Section - Bold & Graphic */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
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

            {/* Main Donation Section - Account Details */}
            <section id="donate-form" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                            Donation Details
                        </h2>
                        <p className="text-gray-500 mb-10 text-center max-w-2xl mx-auto">
                            Please transfer your donation to any of the accounts below.
                            After transfer, kindly send a confirmation email to{' '}
                            <a href={`mailto:${siteContent.site?.email}`} className="text-amber-600 hover:text-amber-700 font-medium">
                                {siteContent.site?.email || 'info@drmhiafrica.org'}
                            </a>
                        </p>

                        {/* Account Cards Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            {/* Naira Account */}
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 hover:shadow-lg transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">🇳🇬</span>
                                    <span className="text-xs font-medium bg-amber-200 text-amber-800 px-3 py-1 rounded-full">
                                        {accounts.naira.type}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-900 text-base mb-3">{accounts.naira.accountName}</p>

                                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-white rounded-xl p-3 mb-3 border border-amber-200">
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
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">🇺🇸</span>
                                    <span className="text-xs font-medium bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full">
                                        {accounts.usd.type}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-900 text-base mb-3">{accounts.usd.accountName}</p>

                                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-white rounded-xl p-3 mb-3 border border-emerald-200">
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
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">🇪🇺</span>
                                    <span className="text-xs font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">
                                        {accounts.euro.type}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-900 text-base mb-3">{accounts.euro.accountName}</p>

                                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-white rounded-xl p-3 mb-3 border border-indigo-200">
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
                        <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-8 text-center">
                            <p className="text-white text-lg leading-relaxed font-medium">
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

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
                            <div className="text-4xl mb-3">🤝</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Volunteer</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Share your skills and time to support our programs
                            </p>
                            <Link to="/volunteer" className="text-sm text-amber-600 font-medium hover:text-amber-700">
                                Learn more →
                            </Link>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
                            <div className="text-4xl mb-3">🤲</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Partner With Us</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Corporate partnerships for larger impact
                            </p>
                            <Link to="/partners" className="text-sm text-amber-600 font-medium hover:text-amber-700">
                                Become a partner →
                            </Link>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
                            <div className="text-4xl mb-3">📢</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Spread the Word</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Share our mission with your network
                            </p>
                            <button className="text-sm text-amber-600 font-medium hover:text-amber-700">
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
                            <div key={index} className="bg-white rounded-xl p-5 hover:shadow-md transition-all">
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