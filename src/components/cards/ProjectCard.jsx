import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/assets.js';

const formatAmount = amount => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(amount);

const ProjectVisual = ({ project, isList }) => {
    const visualClass = `relative overflow-hidden bg-[#222222] ${isList ? 'h-56 md:h-full md:min-h-[280px]' : 'h-60'}`;

    if (project.image) return <div className={visualClass}>
        <img src={getAssetUrl(project.image)} alt={project.imageAlt || ''} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
        <ProjectBadges project={project} />
    </div>;

    return <div className={`${visualClass} flex items-center justify-center px-8 text-center`}>
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#e84a3c]/15" aria-hidden="true" />
        <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-white/20 text-[#ff8b7f]" aria-hidden="true">
                {project.visualType === 'privacy'
                    ? <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="m9 12 2 2 4-4" /></svg>
                    : <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" /></svg>}
            </div>
            <p className="mt-4 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white/75">{project.visualType === 'privacy' ? 'Confidential care' : 'Research & advocacy'}</p>
        </div>
        <ProjectBadges project={project} />
    </div>;
};

const ProjectBadges = ({ project }) => <>
    <span className="absolute left-4 top-4 bg-[#e84a3c] px-3 py-2 font-['Raleway'] text-[10px] font-bold uppercase tracking-[0.15em] text-white">{project.category}</span>
    <span className="absolute right-4 top-4 bg-[#222222]/90 px-3 py-2 font-['Raleway'] text-[10px] font-bold uppercase tracking-[0.15em] text-white">{project.status}</span>
</>;

const ProjectCTA = ({ project, isList }) => {
    const className = "inline-flex min-h-11 items-center justify-center bg-[#e84a3c] px-5 py-3 text-center font-['Raleway'] text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#c73428] focus:outline-none focus:ring-2 focus:ring-[#e84a3c] focus:ring-offset-2";
    if (project.primaryUrl) return <a href={project.primaryUrl} target="_blank" rel="noopener noreferrer" className={className}>{project.primaryCTA || 'View Project'}</a>;
    if (project.slug) return <Link to={`/projects/${project.slug}`} className={className}>{project.primaryCTA || 'Learn More'}</Link>;
    const projectUrl = project.website || project.externalUrl;
    if (projectUrl) return <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={className}>View Project</a>;
    return <Link to={isList ? '/contact' : '/donate'} className={className}>{isList ? 'View Project' : 'Donate'}</Link>;
};

const ProjectCard = ({ project, variant = 'grid' }) => {
    const funding = project.funding;
    const progress = funding?.goal ? Math.min(Math.round((funding.raised / funding.goal) * 100), 100) : 0;
    const isList = variant === 'list' || variant === 'horizontal';

    return <article className={`group h-full overflow-hidden border border-[#e5e5e5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isList ? 'md:grid md:grid-cols-[220px_1fr]' : 'flex flex-col'}`}>
        <ProjectVisual project={project} isList={isList} />
        <div className={`flex flex-1 flex-col ${isList ? 'p-6 md:p-8' : 'p-6'}`}>
            <h3 className="font-['Raleway'] text-xl font-extrabold uppercase leading-snug tracking-[0.04em] text-[#333333]">{project.title}</h3>

            {project.impactMetric && <div className="mt-5 border-l-4 border-[#e84a3c] pl-4">
                <strong className="block font-['Raleway'] text-3xl font-extrabold text-[#e84a3c]">{project.impactMetric}</strong>
                <span className="mt-1 block font-['Raleway'] text-xs font-bold uppercase leading-5 tracking-[0.1em] text-[#333333]">{project.impactLabel}</span>
            </div>}

            <p className="mt-4 flex-1 font-['Open_Sans'] text-sm leading-7 text-[#666666]">{project.description}</p>
            {project.confidentialityNote && <p className="mt-4 border border-[#e5e5e5] bg-[#f5f5f5] p-3 text-xs leading-5 text-[#666666]">{project.confidentialityNote}</p>}

            {!project.impactMetric && project.impact && <p className="mt-5 font-['Raleway'] text-sm font-bold text-[#e84a3c]">{project.impact}</p>}
            {funding && <div className="mt-6 border-t border-[#e5e5e5] pt-5">
                <div className="mb-2 flex items-center justify-between gap-3 font-['Open_Sans'] text-xs text-[#666666]"><span><strong className="text-[#333333]">{formatAmount(funding.raised)}</strong> raised</span><span>{formatAmount(funding.goal)} goal</span></div>
                <div className="h-2 overflow-hidden bg-[#e5e5e5]" role="progressbar" aria-label={`Funding progress for ${project.title}`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}><div className="h-full bg-[#e84a3c]" style={{ width: `${progress}%` }} /></div>
            </div>}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e5e5] pt-5">
                {project.location && <span className="font-['Open_Sans'] text-xs text-[#666666]">{project.location}</span>}
                <ProjectCTA project={project} isList={isList} />
            </div>
        </div>
    </article>;
};

export default ProjectCard;
