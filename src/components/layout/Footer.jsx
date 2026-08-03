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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: 'Phone',
            value: site.phone || '+254 700 000 000',
            href: `tel:${(site.phone || '+254 700 000 000').replace(/[^\d+]/g, '')}`,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            label: 'Location',
            value: site.address || 'Nairobi, Kenya',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <footer className="relative overflow-hidden bg-secondary-50/70 border-t border-secondary-100">
            <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 via-accent-100 to-transparent rounded-full blur-3xl opacity-80" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-100 to-transparent rounded-full blur-3xl opacity-70" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid lg:grid-cols-[1.2fr_2fr] gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="card p-6 lg:p-8">
                        <Link to="/" className="inline-flex items-center space-x-3 group">
                            <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold shadow-medium group-hover:scale-110 transition-transform">
                                {site.name?.[0] || 'D'}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-secondary-900 group-hover:text-primary-600 transition-colors text-sm">
                                    {site.name || 'DRMHI Africa'}
                                </span>
                                <span className="text-xs text-secondary-500 font-medium">
                                    Digital Rights & Mental Health
                                </span>
                            </div>
                        </Link>

                        <p className="text-secondary-600 text-sm mt-5 leading-relaxed font-medium">
                            {site.tagline || 'Protecting digital rights and promoting mental health across Africa'}
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {socialLinks.map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white border border-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 hover:text-white hover:border-transparent hover:shadow-medium transition-all duration-300 hover:scale-105"
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    <span className="text-xs font-bold uppercase">{platform[0]}</span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link to="/donate" className="btn-primary px-5 py-3 text-sm">
                                Donate
                            </Link>
                            <Link to="/contact" className="btn-secondary px-5 py-3 text-sm shadow-none">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-8">
                        {/* Footer Sections */}
                        {footerSections.map((section) => (
                            <div key={section.title} className="card p-6">
                                <h3 className="font-display font-bold text-secondary-900 mb-4 text-sm uppercase tracking-wide">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className="text-secondary-600 hover:text-primary-600 text-sm transition-colors duration-200 font-medium"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Contact Info */}
                        <div className="card p-6">
                            <h3 className="font-display font-bold text-secondary-900 mb-4 text-sm uppercase tracking-wide">Contact</h3>
                            <ul className="space-y-4 text-sm">
                                {contactItems.map((item) => (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                                            {item.icon}
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs font-semibold text-secondary-400 uppercase tracking-wide">
                                                {item.label}
                                            </span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="block text-secondary-700 hover:text-primary-600 transition-colors font-medium break-words"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="block text-secondary-700 font-medium">{item.value}</span>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-10"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-secondary-500 font-medium text-center md:text-left">
                        © {currentYear} {site.fullName || 'DRMHI Africa'}. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-secondary-500 text-xs font-semibold">
                        <Link to="/about" className="hover:text-primary-600 transition-colors">
                            Mission
                        </Link>
                        <Link to="/projects" className="hover:text-primary-600 transition-colors">
                            Impact
                        </Link>
                        <p>
                            Built for safer digital futures
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
