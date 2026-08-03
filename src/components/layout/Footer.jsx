import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const site = siteContent.site || {};
    const socialLinks = Object.entries(site.social || {});
    const contactItems = [
        {
            label: 'Email',
            value: site.email || 'info@drmhiafrica.org',
            href: `mailto:${site.email || 'info@drmhiafrica.org'}`,
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: 'Phone',
            value: site.phone || '+254 700 000 000',
            href: `tel:${(site.phone || '+254 700 000 000').replace(/[^\d+]/g, '')}`,
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            label: 'Location',
            value: site.address || 'Nairobi, Kenya',
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Team', href: '/team' },
                { name: 'Awards', href: '/awards' },
                { name: 'Contact', href: '/contact' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '/blog' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Donate', href: '/donate' },
                { name: 'Partners', href: '/partners' }
            ]
        }
    ];

    return (
        <footer className="border-t border-white/10 bg-[#222222] text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr] lg:gap-12">
                    <div className="border border-white/10 bg-white/5 p-6 lg:p-8">
                        <Link to="/" className="inline-flex items-center space-x-3 group">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e84a3c] font-bold text-white transition-transform group-hover:scale-110">
                                {site.name?.[0] || 'D'}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-sm font-bold text-white">
                                    {site.name || 'DRMHI Africa'}
                                </span>
                                <span className="text-xs font-medium text-white/70">
                                    Digital Rights & Mental Health
                                </span>
                            </div>
                        </Link>

                        <p className="mt-5 text-sm leading-relaxed text-white/75">
                            {site.tagline || 'Protecting digital rights and promoting mental health across Africa'}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {socialLinks.map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-bold uppercase text-white/80 transition-all hover:bg-[#e84a3c] hover:text-white"
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    {platform[0]}
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/donate" className="btn btn-primary">
                                Donate
                            </Link>
                            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#222222]">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">
                        {footerSections.map((section) => (
                            <div key={section.title} className="border border-white/10 bg-white/5 p-6">
                                <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-white">{section.title}</h3>
                                <ul className="space-y-3 text-sm text-white/70">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.href} className="transition-colors hover:text-[#e84a3c]">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="border border-white/10 bg-white/5 p-6">
                            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Contact</h3>
                            <ul className="space-y-4 text-sm text-white/70">
                                {contactItems.map((item) => (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#e84a3c]/15 text-[#e84a3c]">
                                            {item.icon}
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} className="mt-1 block break-words text-white/80 transition-colors hover:text-[#e84a3c]">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="mt-1 block text-white/80">{item.value}</span>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="my-10 h-px bg-white/10" />

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
                    <p>© {currentYear} {site.fullName || 'DRMHI Africa'}. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em]">
                        <Link to="/about" className="transition-colors hover:text-[#e84a3c]">Mission</Link>
                        <Link to="/projects" className="transition-colors hover:text-[#e84a3c]">Impact</Link>
                        <span>Built for safer digital futures</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
