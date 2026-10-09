import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../components/cards/Hero';
import { siteContent } from '../data/content';

const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const EventDetails = () => {
    const { eventSlug } = useParams();
    const event = (siteContent.projects || []).flatMap(project =>
        (project.events || []).map(item => ({ ...item, projectId: project.slug || project.id, projectTitle: project.title }))
    ).find(item => slugify(item.topic) === eventSlug);

    if (!event) return <div className="overflow-hidden">
        <Hero compact eyebrow="Event not found" title="We couldn't find that event" subtitle="The event may have moved or the link may be incorrect." />
        <div className="page-section-white text-center"><Link to="/events" className="btn-primary">Browse all events</Link></div>
    </div>;

    return <div className="overflow-hidden">
        <Hero compact eyebrow={event.date} title={event.topic} subtitle={`A conversation from ${event.projectTitle}.`} />
        <section className="page-section-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Link to="/events" className="font-display text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-700">← All events</Link>
                <div className="mt-8 border border-[#e5e5e5] bg-white p-6 sm:p-10">
                    <p className="section-eyebrow">{event.date} · {event.projectTitle}</p>
                    <h2 className="mt-3 font-display text-3xl font-extrabold text-secondary-900">{event.topic}</h2>
                    {event.speakers?.length > 0 && <div className="mt-8">
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-900">Speakers</h3>
                        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-secondary-600">
                            {event.speakers.map(speaker => <li key={speaker}>{speaker}</li>)}
                        </ul>
                    </div>}
                    <p className="mt-8 border-t border-[#e5e5e5] pt-5 text-sm text-secondary-500">{event.recording ? 'A recording is available through the project.' : 'See the project for event updates.'}</p>
                    <Link to={`/projects/${event.projectId}`} className="btn-primary mt-5">Explore the project</Link>
                </div>
            </div>
        </section>
    </div>;
};

export default EventDetails;
