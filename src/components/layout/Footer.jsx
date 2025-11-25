import React from 'react';
import { siteContent } from '../../data/content';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Quick Links',
            links: siteContent.navigation
        },
        {
            title: 'Programs',
            links: siteContent.programs.map(program => ({
                name: program.title,
                href: `/programs#${program.title.toLowerCase().replace(/\s+/g, '-')}`
            }))
        },
        {
            title: 'Connect',
            links: [
                { name: 'Contact Us', href: '/contact' },
                { name: 'Careers', href: '/careers' },
                { name: 'Volunteer', href: '/volunteer' },
                { name: 'Newsletter', href: '/newsletter' }
            ]
        }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                D
                            </div>
                            <span className="ml-3 text-xl font-bold">{siteContent.site.name}</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            {siteContent.site.tagline}
                        </p>
                        <div className="flex space-x-4">
                            {Object.entries(siteContent.site.social).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    <span className="font-semibold text-sm">{platform[0].toUpperCase()}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg mb-6 text-white">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {siteContent.site.fullName}. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms-of-service"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;