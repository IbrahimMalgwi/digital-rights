import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import Hero from '../components/cards/Hero';

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
        <div className="overflow-hidden">
            <Hero compact eyebrow="Give with purpose" title="Support our mission" subtitle="Your contribution expands access to digital safety education, advocacy, research, and mental health support." />

            {/* Main Donation Section - Account Details */}
            <section id="donate-form" className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Account Cards Grid - updated colors */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* Naira Account */}
                            <div className="card-hover p-6 animate-fade-in">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-soft">
                                        ₦
                                    </div>
                                    <span className="text-xs font-medium bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                                        {accounts.naira.type}
                                    </span>
                                </div>

                                <p className="text-xs text-secondary-500 mb-1">Account Name</p>
                                <p className="font-semibold text-secondary-900 text-base mb-3">{accounts.naira.accountName}</p>

                                <p className="text-xs text-secondary-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-primary-50 rounded-xl p-3 mb-3 border border-primary-200">
                                    <span className="font-mono font-bold text-secondary-900 text-lg">{accounts.naira.accountNumber}</span>
                                    <button
                                        onClick={() => copyToClipboard(accounts.naira.accountNumber, 'naira')}
                                        className="text-primary-600 hover:text-primary-700 p-1 transition-colors"
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

                                <p className="text-xs text-secondary-500 mb-1">Bank</p>
                                <p className="font-medium text-secondary-800">{accounts.naira.bankName}</p>
                            </div>

                            {/* USD Account */}
                            <div className="card-hover p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-soft">
                                        $
                                    </div>
                                    <span className="text-xs font-medium bg-accent-100 text-accent-800 px-3 py-1 rounded-full">
                                        {accounts.usd.type}
                                    </span>
                                </div>

                                <p className="text-xs text-secondary-500 mb-1">Account Name</p>
                                <p className="font-semibold text-secondary-900 text-base mb-3">{accounts.usd.accountName}</p>

                                <p className="text-xs text-secondary-500 mb-1">Account Number</p>
                                <div className="flex items-center justify-between bg-accent-50 rounded-xl p-3 mb-3 border border-accent-200">
                                    <span className="font-mono font-bold text-secondary-900 text-lg">{accounts.usd.accountNumber}</span>
                                    <button
                                        onClick={() => copyToClipboard(accounts.usd.accountNumber, 'usd')}
                                        className="text-accent-600 hover:text-accent-700 p-1 transition-colors"
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

                                <p className="text-xs text-secondary-500 mb-1">Bank</p>
                                <p className="font-medium text-secondary-800">{accounts.usd.bankName}</p>
                            </div>

                            {/* Euro Account */}
                            <div className="card-hover p-6 md:col-span-2 lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl flex items-center justify-center text-white text-2xl shadow-soft">
                                        €
                                    </div>
                                    <span className="text-xs font-medium bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full">
                                        {accounts.euro.type}
                                    </span>
                                </div>

                                <p className="text-xs text-secondary-500 mb-1">Account Name</p>
                                <p className="font-semibold text-secondary-900 text-base mb-3">{accounts.euro.accountName}</p>

                                <p className="text-xs text-secondary-500 mb-1">Account Number</p>
                                <div className="card p-3 mb-3 rounded-2xl flex items-center justify-between">
                                    <span className="font-mono font-bold text-secondary-900 text-lg">{accounts.euro.accountNumber}</span>
                                    <button
                                        onClick={() => copyToClipboard(accounts.euro.accountNumber, 'euro')}
                                        className="text-secondary-600 hover:text-secondary-700 p-1 transition-colors"
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

                                <p className="text-xs text-secondary-500 mb-1">Bank</p>
                                <p className="font-medium text-secondary-800">{accounts.euro.bankName}</p>
                            </div>
                        </div>

                        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                            <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Bank Transfer</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                                Donation Details
                            </h2>
                            <p className="text-secondary-500">
                                Please transfer your donation to any of the accounts below.
                                After transfer, kindly send a confirmation email to{' '}
                                <a href={`mailto:${siteContent.site?.email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                                    {siteContent.site?.email || 'info@drmhiafrica.org'}
                                </a>
                            </p>
                        </div>

                        {/* Thank You Message - updated gradient */}
                        <div className="visual-panel bg-gradient-to-br from-primary-600 to-accent-600 p-12 text-center animate-fade-in">
                            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
                                Thank you for standing with us and investing in healthier minds and safer digital futures. ❤️
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways to Support - Simple Cards */}
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Beyond Donations</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            Other ways to support
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="icon-card p-8 animate-fade-in">
                            <div className="text-5xl mb-4">🙋</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-3">Volunteer</h3>
                            <p className="text-secondary-500 mb-6">
                                Share your skills and time to support our programs
                            </p>
                            <Link to="/contact" className="inline-flex items-center text-primary-700 font-bold hover:text-accent-700 transition-colors group">
                                Learn more
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="icon-card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-3">Partner With Us</h3>
                            <p className="text-secondary-500 mb-6">
                                Corporate partnerships for larger impact
                            </p>
                            <Link to="/partners" className="inline-flex items-center text-primary-700 font-bold hover:text-accent-700 transition-colors group">
                                Become a partner
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="icon-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="text-5xl mb-4">📢</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-3">Spread the Word</h3>
                            <p className="text-secondary-500 mb-6">
                                Share our mission with your network
                            </p>
                            <button className="inline-flex items-center text-primary-700 font-bold hover:text-accent-700 transition-colors group">
                                Share
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Enhanced */}
            <section className="page-section-soft">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
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
                            <div key={index} className="card p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3 className="font-semibold text-secondary-900 mb-2">{faq.q}</h3>
                                <p className="text-secondary-500 text-sm">{faq.a}</p>
                            </div>
                        ))}
                        <div className="visual-panel bg-gradient-to-br from-primary-600 to-accent-600 p-6 text-white md:col-span-2">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Still have questions?</h3>
                                    <p className="text-white/80 text-sm">We're here to help with your donation.</p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="btn-secondary px-6 py-3 text-sm"
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

