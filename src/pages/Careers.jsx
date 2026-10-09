import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/cards/Hero';
import { siteContent } from '../data/content';

const Careers = () => {
    const positions = siteContent.careers?.positions || [];

    return <div className="overflow-hidden">
        <Hero compact eyebrow="Work with us" title="Careers and volunteering" subtitle={siteContent.careers?.intro || 'Join our team and help advance digital rights and mental wellbeing.'} />

        <section className="page-section-white" aria-labelledby="open-positions-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="section-intro mb-12">
                    <span className="section-eyebrow">Make an impact</span>
                    <h2 id="open-positions-heading" className="section-heading">Current opportunities</h2>
                    <p className="section-copy">Explore the roles below and apply directly to an opportunity that matches your experience.</p>
                </div>

                {positions.length > 0 ? <div className="mx-auto max-w-4xl space-y-5">
                    {positions.map(position => {
                        const details = position.details || {};
                        const metadata = details.meta || {};
                        const lists = [
                            ['Responsibilities', details.responsibilities],
                            ['Requirements', details.requirements],
                            ['Volunteer terms', details.volunteerTerms],
                            ['Application requirements', details.applicationRequirements]
                        ].filter(([, items]) => items?.length);

                        return <article key={position.id} className="border border-[#e5e5e5] bg-white p-6 sm:p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <span className="section-eyebrow">{position.type || 'Opportunity'}</span>
                                    <h3 className="mt-2 font-display text-2xl font-extrabold text-secondary-900">{position.title}</h3>
                                    <p className="mt-2 text-sm text-secondary-500">{position.department}{position.location ? ` · ${position.location}` : ''}</p>
                                </div>
                                {position.isOpen && <span className="bg-green-50 px-3 py-2 text-xs font-bold uppercase tracking-wider text-green-700">Open</span>}
                            </div>
                            <p className="mt-5 leading-7 text-secondary-600">{position.summary}</p>

                            {Object.keys(metadata).length > 0 && <dl className="mt-6 grid gap-3 border-y border-[#e5e5e5] py-5 sm:grid-cols-2">
                                {Object.entries(metadata).map(([label, value]) => <div key={label}>
                                    <dt className="text-xs font-bold uppercase tracking-wider text-secondary-400">{label}</dt>
                                    <dd className="mt-1 text-sm text-secondary-700">{value}</dd>
                                </div>)}
                            </dl>}

                            {details.jobDescription && <p className="mt-5 leading-7 text-secondary-600">{details.jobDescription}</p>}
                            {lists.length > 0 && <details className="mt-5 border-t border-[#e5e5e5] pt-5">
                                <summary className="cursor-pointer font-display text-sm font-bold uppercase tracking-wider text-primary-700">View role details</summary>
                                <div className="mt-5 space-y-6">
                                    {details.about?.length > 0 && <div>
                                        <h4 className="font-semibold text-secondary-900">About the role</h4>
                                        {details.about.map(paragraph => <p key={paragraph} className="mt-2 leading-7 text-secondary-600">{paragraph}</p>)}
                                    </div>}
                                    {lists.map(([heading, items]) => <div key={heading}>
                                        <h4 className="font-semibold text-secondary-900">{heading}</h4>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-secondary-600">
                                            {items.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>)}
                                    {details.deadlineNote && <p className="text-sm text-secondary-500">{details.deadlineNote}</p>}
                                </div>
                            </details>}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                <span className="text-xs text-secondary-400">{position.postedDate ? `Posted ${position.postedDate}` : ''}</span>
                                {position.isOpen && position.applyLink && <a href={position.applyLink} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">Apply now</a>}
                            </div>
                        </article>;
                    })}
                </div> : <div className="card mx-auto max-w-2xl p-10 text-center">
                    <h3 className="font-display text-2xl font-bold text-secondary-900">No open positions right now</h3>
                    <p className="mt-3 text-secondary-600">Please check back later, or contact us to learn about other ways to get involved.</p>
                    <Link to="/contact" className="btn-primary mt-6">Contact us</Link>
                </div>}
            </div>
        </section>
    </div>;
};

export default Careers;
