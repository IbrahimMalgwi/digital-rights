import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/assets.js';

const formatAmount = amount => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(amount);

const ProjectCard = ({ project, variant = 'grid' }) => {
    const funding = project.funding;
    const progress = funding?.goal ? Math.min(Math.round((funding.raised / funding.goal) * 100), 100) : 0;
    const projectUrl = project.website || project.externalUrl;
    const isList = variant === 'list' || variant === 'horizontal';

    return (
        <article className={`group h-full overflow-hidden border border-[#e5e5e5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isList ? 'md:grid md:grid-cols-[220px_1fr]' : 'flex flex-col'}`}>
            <div className={`relative overflow-hidden bg-[#222222] ${isList ? 'h-56 md:h-full md:min-h-[280px]' : 'h-60'}`}>
                {project.image ? (
                    <img src={getAssetUrl(project.image)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                    <div className="flex h-full items-center justify-center text-5xl text-white" aria-hidden="true">●</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-4 top-4 bg-[#e84a3c] px-3 py-2 font-['Raleway'] text-[10px] font-bold uppercase tracking-[0.15em] text-white">{project.category}</span>
                <span className="absolute right-4 top-4 bg-[#222222]/90 px-3 py-2 font-['Raleway'] text-[10px] font-bold uppercase tracking-[0.15em] text-white">{project.status}</span>
            </div>

            <div className={`flex flex-1 flex-col ${isList ? 'p-6 md:p-8' : 'p-6'}`}>
                {isList && (
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f5] text-[#e84a3c]" aria-hidden="true">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" /></svg>
                    </div>
                )}
                <h3 className="font-['Raleway'] text-xl font-extrabold uppercase leading-snug tracking-[0.04em] text-[#333333]">{project.title}</h3>
                <p className="mt-3 flex-1 font-['Open_Sans'] text-sm leading-7 text-[#666666]">{project.description}</p>

                <div className="mt-6 border-t border-[#e5e5e5] pt-5">
                    <div className="mb-2 flex items-center justify-between gap-3 font-['Open_Sans'] text-xs text-[#666666]">
                        {funding ? <><span><strong className="text-[#333333]">{formatAmount(funding.raised)}</strong> raised</span><span>{formatAmount(funding.goal)} goal</span></> : <span>Funding details coming soon</span>}
                    </div>
                    <div className={`h-2 overflow-hidden bg-[#e5e5e5] ${isList ? 'max-w-xl' : ''}`} role="progressbar" aria-label={`Funding progress for ${project.title}`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}>
                        <div className="h-full bg-[#e84a3c]" style={{ width: `${progress}%` }} />
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <span className="font-['Open_Sans'] text-xs text-[#666666]">{project.location}</span>
                    {isList ? (
                        projectUrl ? <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="bg-[#222222] px-5 py-3 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-black">View project</a>
                            : <Link to="/contact" className="bg-[#222222] px-5 py-3 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-black">View project</Link>
                    ) : (
                        <Link to="/donate" className="bg-[#e84a3c] px-5 py-3 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#c73428]">Donate</Link>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
