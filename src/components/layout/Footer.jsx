import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Team', href: '/team' },
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
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-white">
                                {siteContent.site?.name?.[0] || 'D'}
                            </div>
                            <span className="ml-3 font-semibold text-white">
                                {siteContent.site?.name || 'DRMHI Africa'}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {siteContent.site?.tagline || 'Protecting digital rights and promoting mental health across Africa'}
                        </p>

                        {/* Social Links - Optional */}
                        <div className="flex space-x-3 mt-4">
                            {siteContent.site?.social && Object.entries(siteContent.site.social).slice(0, 3).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-amber-500 hover:to-emerald-600 hover:text-white transition-all"
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    <span className="text-xs font-medium uppercase">{platform[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 text-amber-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-400 hover:text-amber-400 transition-colors">
                                    {siteContent.site?.email || 'info@drmhiafrica.org'}
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 text-amber-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-400 hover:text-amber-400 transition-colors">
                                    {siteContent.site?.phone || '+254 700 000 000'}
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 text-amber-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400 hover:text-amber-400 transition-colors">
                                    {siteContent.site?.address || 'Nairobi, Kenya'}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-gray-400">
                            © {currentYear} {siteContent.site?.fullName || 'DRMHI Africa'}. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                to="/privacy"
                                className="text-gray-400 hover:text-amber-400 transition-colors"
                            >
                                Privacy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-gray-400 hover:text-amber-400 transition-colors"
                            >
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;