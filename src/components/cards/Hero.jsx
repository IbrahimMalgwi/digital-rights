import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';
import { getAssetUrl } from '../../utils/assets.js';

const Hero = ({ eyebrow, title, subtitle, image: imageOverride, compact = false }) => {
    const hero = siteContent.hero || {};
    const image = imageOverride || siteContent.gallery?.[0]?.image || siteContent.projects?.[0]?.image;

    return (
        <section className={`relative isolate flex items-center overflow-hidden bg-[#222222] pt-24 text-white ${compact ? 'min-h-[430px]' : 'min-h-[680px]'}`}>
            {image && <img src={getAssetUrl(image)} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/75 to-black/45" />
            <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${compact ? 'py-20' : 'py-24 lg:py-32'}`}>
                <div className="max-w-4xl">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#e84a3c]">{eyebrow || hero.eyebrow || 'Digital rights. Human wellbeing.'}</p>
                    <h1 className={`mt-5 font-display font-extrabold uppercase leading-[1.08] tracking-[0.05em] text-white ${compact ? 'text-4xl sm:text-5xl' : 'text-4xl sm:text-6xl lg:text-7xl'}`}>{title || hero.title}</h1>
                    <div className="mt-7 h-[3px] w-20 bg-[#e84a3c]" aria-hidden="true" />
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{subtitle || hero.subtitle}</p>
                    {!compact && hero.summary && <p className="mt-3 max-w-2xl text-sm font-semibold text-white/65">{hero.summary}</p>}
                    {!compact && <div className="mt-10 flex flex-wrap gap-4">
                        <Link to={hero.primaryButton?.link || '/projects'} className="bg-[#e84a3c] px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#c73428]">{hero.primaryButton?.text || 'Explore our work'}</Link>
                        <Link to={hero.secondaryButton?.link || '/about'} className="border-2 border-white px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#222222]">{hero.secondaryButton?.text || 'Learn more'}</Link>
                    </div>}
                </div>
            </div>
            {!compact && <div className="absolute bottom-0 right-0 hidden bg-[#e84a3c] px-10 py-7 text-white lg:block">
                <span className="block font-display text-2xl font-extrabold">20K+</span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.15em]">People reached</span>
            </div>}
        </section>
    );
};

export default Hero;
