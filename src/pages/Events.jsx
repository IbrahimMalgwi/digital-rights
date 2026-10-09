import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/cards/Hero';
import { siteContent } from '../data/content';

const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Events = () => {
    const events = (siteContent.projects || []).flatMap(project =>
        (project.events || []).map(event => ({
            ...event,
            projectId: project.slug || project.id,
            projectTitle: project.title,
            slug: slugify(event.topic)
        }))
    );

    return <div className="overflow-hidden">
        <Hero compact eyebrow="Join the conversation" title="Events and conversations" subtitle="Explore discussions and events connected to our work on digital rights, mental health, and the people behind AI." />

        <section className="page-section-white" aria-labelledby="events-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="section-intro mb-12">
                    <span className="section-eyebrow">Learn and connect</span>
                    <h2 id="events-heading" className="section-heading">Events</h2>
                    <p className="section-copy">Browse recorded conversations and other events from our projects.</p>
                </div>

                {events.length > 0 ? <div className="grid gap-6 md:grid-cols-2">
                    {events.map(event => <article key={`${event.slug}-${event.date}`} className="card flex h-full flex-col p-6 sm:p-8">
                        <p className="section-eyebrow">{event.date}</p>
                        <h3 className="mt-3 font-display text-2xl font-bold text-secondary-900">{event.topic}</h3>
                        <p className="mt-3 text-sm text-secondary-500">Part of {event.projectTitle}</p>
                        {event.speakers?.length > 0 && <p className="mt-5 flex-1 leading-7 text-secondary-600"><strong className="text-secondary-800">Speakers:</strong> {event.speakers.join(', ')}</p>}
                        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#e5e5e5] pt-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-secondary-500">{event.recording ? 'Recording available' : 'Event'}</span>
                            <Link to={`/events/${event.slug}`} className="font-display text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-700">Event details →</Link>
                        </div>
                    </article>)}
                </div> : <div className="card mx-auto max-w-2xl p-10 text-center">
                    <h3 className="font-display text-2xl font-bold text-secondary-900">No events to display</h3>
                    <p className="mt-3 text-secondary-600">Check back for updates about upcoming events and conversations.</p>
                </div>}
            </div>
        </section>
    </div>;
};

export default Events;
