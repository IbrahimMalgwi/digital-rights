import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import Hero from '../components/cards/Hero';

const ExternalArrow = () => <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5h5m0 0v5m0-5L10 14M19 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5" />
</svg>;

const Donate = () => {
    const onlineDonationOptions = siteContent.donation?.onlineOptions || [];

    return <div className="overflow-hidden">
        <Hero compact eyebrow="Give with purpose" title="Support our mission" subtitle="Your contribution expands access to digital safety education, advocacy, research, and mental health support." />

        <section className="page-section-white" aria-labelledby="donation-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="section-intro mb-12 animate-slide-up">
                    <span className="section-eyebrow">Donate online</span>
                    <h2 id="donation-heading" className="section-heading">Make a Donation</h2>
                    <p className="section-copy">Support our work by making a secure online donation. Choose your preferred donation method and currency.</p>
                </div>

                <div className="grid items-stretch gap-7 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
                    <section className="border border-[#e5e5e5] bg-[#f5f5f5] p-6 sm:p-8" aria-labelledby="flutterwave-heading">
                        <span className="section-eyebrow">Secure online payment</span>
                        <h3 id="flutterwave-heading" className="mt-3 font-display text-3xl font-extrabold uppercase tracking-[0.04em] text-[#333333]">Donate with Flutterwave</h3>
                        <p className="mt-3 text-[#666666]">Choose your preferred currency:</p>

                        <div className="mt-7 grid gap-4 md:grid-cols-3">
                            {onlineDonationOptions.map((option, index) => <article key={option.currency} className="card-hover flex h-full flex-col bg-white p-5 text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#222222] font-display text-2xl font-extrabold text-white" aria-hidden="true">{option.symbol}</div>
                                <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.15em] text-[#e84a3c]">{option.currency}</p>
                                <h4 className="mt-2 font-display text-xl font-extrabold text-secondary-900">{option.name}</h4>
                                <p className="mt-3 flex-1 text-sm text-secondary-500">{option.label}</p>
                                <a href={option.url} target="_blank" rel="noopener noreferrer" aria-label={`Donate in ${option.currency} through Flutterwave (opens in a new tab)`} className="btn-primary mt-6 w-full">
                                    Donate in {option.currency}<ExternalArrow />
                                </a>
                            </article>)}
                        </div>

                        <p className="mt-6 flex items-center gap-2 text-sm text-secondary-500">
                            <svg className="h-4 w-4 shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V7a4 4 0 118 0v4m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-4zm0 0h4" /></svg>
                            Secure donations are processed through Flutterwave.
                        </p>
                    </section>

                    <section className="flex h-full flex-col bg-[#222222] p-6 text-white sm:p-8" aria-labelledby="gofundme-heading">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e84a3c] text-2xl" aria-hidden="true">♥</div>
                        <span className="mt-7 font-display text-xs font-bold uppercase tracking-[0.15em] text-[#ff8b7f]">Quick Donate</span>
                        <h3 id="gofundme-heading" className="mt-3 font-display text-3xl font-extrabold uppercase tracking-[0.04em] text-white">Donate with GoFundMe</h3>
                        <p className="mt-5 flex-1 leading-7 text-white/75">Give by card in a few clicks through our GoFundMe campaign.</p>
                        <a href="https://gofund.me/93827c0c6" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full">
                            Donate on GoFundMe<ExternalArrow />
                        </a>
                    </section>
                </div>

                <div className="visual-panel mt-12 bg-gradient-to-br from-primary-600 to-accent-600 p-8 text-center animate-fade-in sm:p-12">
                    <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white md:text-2xl">Thank you for standing with us and investing in healthier minds and safer digital futures. ❤️</p>
                </div>
            </div>
        </section>

        <section className="page-section-soft">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-2xl text-center animate-slide-up">
                    <span className="mb-4 block font-medium tracking-wide text-secondary-400">Beyond Donations</span>
                    <h2 className="font-display text-4xl font-bold text-secondary-900 md:text-5xl">Other ways to support</h2>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                    <div className="icon-card p-8 animate-fade-in"><div className="mb-4 text-5xl">🙋</div><h3 className="mb-3 text-xl font-semibold text-secondary-900">Volunteer</h3><p className="mb-6 text-secondary-500">Share your skills and time to support our programs</p><Link to="/contact" className="font-bold text-primary-700 transition-colors hover:text-accent-700">Learn more →</Link></div>
                    <div className="icon-card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}><div className="mb-4 text-5xl">🤝</div><h3 className="mb-3 text-xl font-semibold text-secondary-900">Partner With Us</h3><p className="mb-6 text-secondary-500">Corporate partnerships for larger impact</p><Link to="/partners" className="font-bold text-primary-700 transition-colors hover:text-accent-700">Become a partner →</Link></div>
                    <div className="icon-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}><div className="mb-4 text-5xl">📢</div><h3 className="mb-3 text-xl font-semibold text-secondary-900">Spread the Word</h3><p className="mb-6 text-secondary-500">Share our mission with your network</p><Link to="/contact" className="font-bold text-primary-700 transition-colors hover:text-accent-700">Get in touch →</Link></div>
                </div>
            </div>
        </section>

        <section className="page-section-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-2xl text-center animate-slide-up">
                    <span className="mb-4 block font-medium tracking-wide text-secondary-400">FAQ</span>
                    <h2 className="font-display text-4xl font-bold text-secondary-900 md:text-5xl">Frequently asked questions</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        { q: 'Is my donation tax-deductible?', a: 'Yes, we are a registered nonprofit organization. All donations are tax-deductible.' },
                        { q: 'How can I donate securely?', a: 'Choose Flutterwave for NGN, USD, or EUR donations, or support our GoFundMe campaign.' },
                        { q: 'How much goes to programs?', a: '85% of every donation goes directly to our programs and impact initiatives.' },
                        { q: 'Can I donate from outside Nigeria?', a: 'Yes. Flutterwave supports USD and EUR donation options, and you can also donate through GoFundMe.' },
                    ].map((faq, index) => <div key={faq.q} className="card p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}><h3 className="mb-2 font-semibold text-secondary-900">{faq.q}</h3><p className="text-sm text-secondary-500">{faq.a}</p></div>)}
                    <div className="visual-panel bg-gradient-to-br from-primary-600 to-accent-600 p-6 text-white md:col-span-2">
                        <div className="flex flex-wrap items-center justify-between gap-4"><div><h3 className="mb-1 font-semibold text-white">Still have questions?</h3><p className="text-sm text-white/80">We're here to help with your donation.</p></div><Link to="/contact" className="btn-secondary px-6 py-3 text-sm">Contact us</Link></div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default Donate;
