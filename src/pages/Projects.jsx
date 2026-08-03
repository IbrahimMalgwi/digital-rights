import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/cards/ProjectCard';
import { siteContent } from '../data/content';
import { getAssetUrl } from '../utils/assets.js';

const PAGE_SIZE = 6;
const ALL_PROJECTS = siteContent.projects || [];
const statusFilters = ['All', 'Ongoing', 'Completed', 'Upcoming'];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStatus, setActiveStatus] = useState('All');
    const [viewMode, setViewMode] = useState('grid');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [searchQuery, setSearchQuery] = useState('');

    const featuredProjects = ALL_PROJECTS.filter(project => project.featured).slice(0, 3);
    const availableCategories = [...new Set(ALL_PROJECTS.map(project => project.category))];
    const preferredOrder = ['Advocacy', 'Mental Health', 'Education', 'Research'];
    const categoryFilters = ['All', ...preferredOrder.filter(category => availableCategories.includes(category)), ...availableCategories.filter(category => !preferredOrder.includes(category))];

    const filteredProjects = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return ALL_PROJECTS.filter(project => {
            const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
            const matchesStatus = activeStatus === 'All' || project.status === activeStatus;
            const searchText = [project.title, project.description, project.location].filter(Boolean).join(' ').toLowerCase();
            return matchesCategory && matchesStatus && (!query || searchText.includes(query));
        });
    }, [activeCategory, activeStatus, searchQuery]);

    const counts = {
        total: ALL_PROJECTS.length,
        ongoing: ALL_PROJECTS.filter(project => project.status === 'Ongoing').length,
        completed: ALL_PROJECTS.filter(project => project.status === 'Completed').length,
        countries: 9,
    };

    const updateFilter = (setter, value) => {
        setter(value);
        setVisibleCount(PAGE_SIZE);
    };

    return (
        <div className="bg-[#f5f5f5] font-['Open_Sans'] text-[#666666]">
            <section className="relative isolate flex min-h-[500px] items-center overflow-hidden pt-24 text-white">
                <img src={getAssetUrl(featuredProjects[0]?.image)} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-black/70" />
                <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8">
                    <p className="font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-[#e84a3c]">What we do</p>
                    <h1 className="mt-4 max-w-4xl font-['Raleway'] text-4xl font-extrabold uppercase leading-tight tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">Projects creating lasting change</h1>
                    <div className="mt-6 h-[3px] w-20 bg-[#e84a3c]" aria-hidden="true" />
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">We advance digital rights and mental wellbeing through community-led programs, research, advocacy, and practical support across Africa.</p>
                </div>
            </section>

            <section className="bg-[#e84a3c] text-white" aria-label="Project impact statistics">
                <div className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
                    {[['Total Projects', counts.total], ['Ongoing', counts.ongoing], ['Completed', counts.completed], ['Countries', counts.countries]].map(([label, value], index) => (
                        <div key={label} className={`px-4 py-8 text-center md:py-10 ${index % 2 ? 'border-l border-white/20' : ''} lg:border-l lg:first:border-l-0`}>
                            <strong className="block font-['Raleway'] text-3xl font-extrabold tracking-wide text-white md:text-4xl">{value}</strong>
                            <span className="mt-2 block font-['Raleway'] text-[11px] font-bold uppercase tracking-[0.15em] text-white/80">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {featuredProjects.length > 0 && (
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
                        <div className="text-center">
                            <p className="font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-[#e84a3c]">Featured projects</p>
                            <h2 className="mt-3 font-['Raleway'] text-3xl font-extrabold uppercase tracking-[0.05em] text-[#333333] md:text-4xl">In the spotlight</h2>
                            <div className="mx-auto mt-5 h-[3px] w-16 bg-[#e84a3c]" aria-hidden="true" />
                        </div>
                        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {featuredProjects.map(project => <ProjectCard key={project.id} project={project} variant="grid" />)}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-20" id="all-projects">
                <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
                    <div className="text-center">
                        <p className="font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-[#e84a3c]">Browse our work</p>
                        <h2 className="mt-3 font-['Raleway'] text-3xl font-extrabold uppercase tracking-[0.05em] text-[#333333] md:text-4xl">All projects</h2>
                        <div className="mx-auto mt-5 h-[3px] w-16 bg-[#e84a3c]" aria-hidden="true" />
                    </div>

                    <div className="mt-12 border border-[#e5e5e5] bg-white p-5 md:p-6">
                        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div className="relative">
                                <label htmlFor="project-search" className="sr-only">Search projects</label>
                                <svg aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999999]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                                <input id="project-search" type="search" value={searchQuery} onChange={event => updateFilter(setSearchQuery, event.target.value)} placeholder="Search projects..." className="w-full border border-[#e5e5e5] bg-[#f5f5f5] py-3.5 pl-12 pr-4 text-sm text-[#333333] outline-none focus:border-[#e84a3c] focus:ring-1 focus:ring-[#e84a3c]" />
                            </div>
                            <div className="flex justify-end" aria-label="Choose project view">
                                <button type="button" onClick={() => setViewMode('grid')} aria-label="Grid view" aria-pressed={viewMode === 'grid'} className={`h-12 w-12 border border-[#e5e5e5] text-lg ${viewMode === 'grid' ? 'bg-[#e84a3c] text-white' : 'bg-white text-[#666666]'}`}>▦</button>
                                <button type="button" onClick={() => setViewMode('list')} aria-label="List view" aria-pressed={viewMode === 'list'} className={`h-12 w-12 border-y border-r border-[#e5e5e5] text-lg ${viewMode === 'list' ? 'bg-[#e84a3c] text-white' : 'bg-white text-[#666666]'}`}>☰</button>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2" aria-label="Filter projects by category">
                            {categoryFilters.map(category => <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => updateFilter(setActiveCategory, category)} className={`px-4 py-3 font-['Raleway'] text-[11px] font-bold uppercase tracking-[0.15em] transition ${activeCategory === category ? 'bg-[#e84a3c] text-white' : 'border border-[#e5e5e5] bg-white text-[#666666] hover:border-[#e84a3c] hover:text-[#e84a3c]'}`}>{category}</button>)}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2" aria-label="Filter projects by status">
                            {statusFilters.map(status => <button key={status} type="button" aria-pressed={activeStatus === status} onClick={() => updateFilter(setActiveStatus, status)} className={`px-4 py-3 font-['Raleway'] text-[11px] font-bold uppercase tracking-[0.15em] transition ${activeStatus === status ? 'bg-[#e84a3c] text-white' : 'border border-[#e5e5e5] bg-white text-[#666666] hover:border-[#e84a3c] hover:text-[#e84a3c]'}`}>{status}</button>)}
                        </div>
                    </div>

                    <p className="my-7 text-sm" aria-live="polite">Showing <strong className="text-[#333333]">{Math.min(visibleCount, filteredProjects.length)}</strong> of <strong className="text-[#333333]">{filteredProjects.length}</strong> projects</p>

                    {filteredProjects.length ? (
                        <>
                            <div className={viewMode === 'grid' ? 'grid gap-7 md:grid-cols-2 lg:grid-cols-3' : 'mx-auto max-w-5xl space-y-6'}>
                                {filteredProjects.slice(0, visibleCount).map(project => <ProjectCard key={project.id} project={project} variant={viewMode} />)}
                            </div>
                            {visibleCount < filteredProjects.length && <div className="mt-12 text-center"><button type="button" onClick={() => setVisibleCount(count => count + PAGE_SIZE)} className="border-2 border-[#222222] px-8 py-4 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-[#222222] transition hover:bg-[#222222] hover:text-white">Load more</button></div>}
                        </>
                    ) : (
                        <div className="border border-[#e5e5e5] bg-white px-6 py-16 text-center">
                            <h3 className="font-['Raleway'] text-2xl font-extrabold uppercase tracking-wide text-[#333333]">No projects found</h3>
                            <p className="mt-3">Try changing your search or filters.</p>
                            <button type="button" onClick={() => { setActiveCategory('All'); setActiveStatus('All'); setSearchQuery(''); setVisibleCount(PAGE_SIZE); }} className="mt-6 bg-[#e84a3c] px-6 py-3 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#c73428]">Reset filters</button>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-[#222222] py-20 text-center text-white">
                <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
                    <p className="font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-[#e84a3c]">Make a difference</p>
                    <h2 className="mx-auto mt-4 max-w-3xl font-['Raleway'] text-3xl font-extrabold uppercase leading-tight tracking-[0.05em] text-white md:text-5xl">Help us create safer digital communities</h2>
                    <div className="mx-auto mt-5 h-[3px] w-16 bg-[#e84a3c]" aria-hidden="true" />
                    <p className="mx-auto mt-6 max-w-2xl text-white/70">Your contribution supports practical training, research, advocacy, and mental health services across Africa.</p>
                    <div className="mt-9 flex flex-wrap justify-center gap-4"><Link to="/donate" className="bg-[#e84a3c] px-8 py-4 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#c73428]">Donate now</Link><Link to="/contact" className="border-2 border-white px-8 py-4 font-['Raleway'] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#222222]">Partner with us</Link></div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
