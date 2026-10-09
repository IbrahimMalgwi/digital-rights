import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../components/cards/Hero';
import { siteContent } from '../data/content';
import { getAssetUrl } from '../utils/assets.js';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = (siteContent.projects || []).find(item =>
        String(item.id) === projectId || item.slug === projectId
    );

    if (!project) return <div className="overflow-hidden">
        <Hero compact eyebrow="Project not found" title="We couldn't find that project" subtitle="The project may have moved or the link may be incorrect." />
        <div className="page-section-white text-center"><Link to="/projects" className="btn-primary">Browse all projects</Link></div>
    </div>;

    const objectives = project.objectives || [];
    const resources = project.resources || [];

    return <div className="overflow-hidden">
        <Hero compact eyebrow={project.category} title={project.title} subtitle={project.description} image={project.image ? getAssetUrl(project.image) : undefined} />

        <section className="page-section-white">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Link to="/projects" className="font-display text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-700">← All projects</Link>
                <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)]">
                    <div>
                        <span className="section-eyebrow">{project.status}{project.location ? ` · ${project.location}` : ''}</span>
                        <h2 className="mt-3 font-display text-3xl font-extrabold text-secondary-900">About this project</h2>
                        <p className="mt-5 leading-8 text-secondary-600">{project.overview || project.about || project.description}</p>
                        {project.additionalContext && <p className="mt-5 leading-8 text-secondary-600">{project.additionalContext}</p>}
                        {project.methodology && <div className="mt-8 border-l-4 border-primary-600 bg-[#f5f5f5] p-5">
                            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-900">Our approach</h3>
                            <p className="mt-3 leading-7 text-secondary-600">{project.methodology}</p>
                        </div>}
                    </div>

                    <aside className="h-fit border border-[#e5e5e5] bg-[#f5f5f5] p-6">
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-900">Project at a glance</h3>
                        <dl className="mt-5 space-y-4">
                            {[
                                ['Category', project.category],
                                ['Status', project.status],
                                ['Location', project.location],
                                ['Duration', project.duration],
                                ['Impact', project.impactMetric || project.impact]
                            ].filter(([, value]) => value).map(([label, value]) => <div key={label}>
                                <dt className="text-xs font-bold uppercase tracking-wider text-secondary-400">{label}</dt>
                                <dd className="mt-1 text-sm text-secondary-700">{value}{label === 'Impact' && project.impactLabel ? ` ${project.impactLabel}` : ''}</dd>
                            </div>)}
                        </dl>
                        {project.primaryUrl && <a href={project.primaryUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">{project.primaryCTA || 'Get involved'}</a>}
                        {!project.primaryUrl && project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">Visit project website</a>}
                    </aside>
                </div>

                {objectives.length > 0 && <section className="mt-12" aria-labelledby="objectives-heading">
                    <h2 id="objectives-heading" className="font-display text-2xl font-bold text-secondary-900">What we do</h2>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {objectives.map(objective => <li key={objective} className="border border-[#e5e5e5] bg-white p-4 leading-6 text-secondary-600">{objective}</li>)}
                    </ul>
                </section>}

                {project.programs?.length > 0 && <section className="mt-12" aria-labelledby="programs-heading">
                    <h2 id="programs-heading" className="font-display text-2xl font-bold text-secondary-900">Our programs</h2>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        {project.programs.map(program => <article key={program.name} className="border border-[#e5e5e5] p-5">
                            <h3 className="font-display font-bold text-secondary-900">{program.name}</h3>
                            <p className="mt-2 leading-7 text-secondary-600">{program.description}</p>
                        </article>)}
                    </div>
                </section>}

                {project.inquiries?.length > 0 && <section className="mt-12" aria-labelledby="inquiries-heading">
                    <h2 id="inquiries-heading" className="font-display text-2xl font-bold text-secondary-900">Worker-led inquiries</h2>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        {project.inquiries.map(inquiry => <article key={inquiry.title} className="border border-[#e5e5e5] p-5">
                            <span className="section-eyebrow">{inquiry.region}</span>
                            <h3 className="mt-2 font-display font-bold text-secondary-900">{inquiry.title}</h3>
                            <p className="mt-2 leading-7 text-secondary-600">{inquiry.description}</p>
                        </article>)}
                    </div>
                </section>}

                {resources.length > 0 && <section className="mt-12" aria-labelledby="resources-heading">
                    <h2 id="resources-heading" className="font-display text-2xl font-bold text-secondary-900">Related resources</h2>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {resources.map((resource, index) => <a key={`${resource.url}-${index}`} href={resource.url} target="_blank" rel="noopener noreferrer" className="border border-[#e5e5e5] px-4 py-3 text-sm font-semibold text-primary-700 hover:border-primary-600">
                            {resource.title}{resource.type ? ` · ${resource.type}` : ''}
                        </a>)}
                    </div>
                </section>}

                {project.events?.length > 0 && <section className="mt-12" aria-labelledby="project-events-heading">
                    <h2 id="project-events-heading" className="font-display text-2xl font-bold text-secondary-900">Related events</h2>
                    <div className="mt-5 space-y-3">
                        {project.events.map(event => <div key={`${event.date}-${event.topic}`} className="flex flex-wrap items-center justify-between gap-3 border border-[#e5e5e5] p-4">
                            <div><p className="text-xs font-bold uppercase tracking-wider text-primary-700">{event.date}</p><p className="mt-1 font-semibold text-secondary-800">{event.topic}</p></div>
                            <Link to={`/events/${event.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-sm font-semibold text-primary-700">View event →</Link>
                        </div>)}
                    </div>
                </section>}
            </div>
        </section>
    </div>;
};

export default ProjectDetails;
