import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Split navigation into two columns
    const splitNavigation = () => {
        const midIndex = Math.ceil(siteContent.navigation.length / 2);
        return {
            firstColumn: siteContent.navigation.slice(0, midIndex),
            secondColumn: siteContent.navigation.slice(midIndex)
        };
    };

    const { firstColumn, secondColumn } = splitNavigation();

    // Social media icons mapping
    const SocialIcon = ({ platform }) => {
        const icons = {
            twitter: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
            ),
            facebook: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
            ),
            linkedin: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            instagram: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
            youtube: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        };

        return icons[platform] || <span className="font-semibold text-sm">{platform[0].toUpperCase()}</span>;
    };

    // External link handler component
    const FooterLink = ({ to, children, icon, external }) => {
        if (external) {
            return (
                <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                >
                    {icon && (
                        <span className="mr-2 text-lg group-hover:scale-110 transition-transform">
                            {icon}
                        </span>
                    )}
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 rounded-full group-hover:mr-2 transition-all duration-300"></span>
                    {children}
                    <svg className="w-3 h-3 ml-1 text-gray-500 group-hover:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            );
        }

        return (
            <Link
                to={to}
                className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
            >
                {icon && (
                    <span className="mr-2 text-lg group-hover:scale-110 transition-transform">
                        {icon}
                    </span>
                )}
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 rounded-full group-hover:mr-2 transition-all duration-300"></span>
                {children}
            </Link>
        );
    };

    // Enhanced programs with external links for WDFA and Data Workers Inquiry
    const programLinks = [
        ...siteContent.programs.map(program => ({
            name: program.title,
            href: `/programs#${program.title.toLowerCase().replace(/\s+/g, '-')}`,
            icon: '📋',
            external: false
        })),
        // Add WDFA as external link
        {
            name: 'WDFA (Women Digital Futures Africa)',
            href: 'https://wdfa.org', // Replace with actual URL
            icon: '👩🏾',
            external: true,
            description: 'Empowering women in digital spaces'
        },
        // Add Data Workers Inquiry as external link
        {
            name: 'Data Workers Inquiry',
            href: 'https://dataworkers.org', // Replace with actual URL
            icon: '🔬',
            external: true,
            description: 'Global research initiative'
        }
    ];

    // Footer sections data
    const footerSections = [
        {
            title: 'Quick Links',
            links: siteContent.navigation,
            layout: 'grid' // Special layout for quick links
        },
        {
            title: 'Programs',
            links: programLinks
        },
        {
            title: 'Connect',
            links: [
                { name: 'Contact Us', href: '/contact', icon: '📧', external: false },
                { name: 'Careers', href: '/careers', icon: '💼', external: false },
                { name: 'Volunteer', href: '/volunteer', icon: '🤝', external: false },
                { name: 'Newsletter', href: '/newsletter', icon: '📬', external: false }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Annual Reports', href: '/reports', icon: '📊', external: false },
                { name: 'Research Papers', href: '/research', icon: '📚', external: false },
                { name: 'Blog', href: '/blog', icon: '✍️', external: false },
                { name: 'Media Kit', href: '/media', icon: '📎', external: false }
            ]
        }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl"></div>
            </div>

            {/* Newsletter Section */}
            <div className="relative border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-2">
                                Stay <span className="gradient-text">Updated</span>
                            </h3>
                            <p className="text-gray-400">
                                Subscribe to our newsletter for the latest updates, research findings, and impact stories.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-soft whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Section - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-soft transform hover:scale-105 transition-transform">
                                {siteContent.site?.name?.split(' ').map(word => word[0]).join('').slice(0, 2) || 'D'}
                            </div>
                            <div className="ml-4">
                                <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {siteContent.site?.name || 'DRMHI Africa'}
                                </span>
                                <span className="block text-sm text-gray-400 mt-1">
                                    Digital Rights & Mental Health
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                            {siteContent.site?.tagline || 'Protecting digital rights and promoting mental health across Africa'}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm">{siteContent.site?.address || 'Nairobi, Kenya'}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">{siteContent.site?.email || 'info@drmhiafrica.org'}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm">{siteContent.site?.phone || '+254 700 000 000'}</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {Object.entries(siteContent.site?.social || {}).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative"
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    <div className="absolute inset-0 bg-primary-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                    <div className="relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300">
                                        <SocialIcon platform={platform} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-display font-semibold text-lg mb-6 text-white flex items-center">
                                <span className="w-1 h-5 bg-gradient-to-b from-primary-500 to-accent-600 rounded-full mr-2"></span>
                                {section.title}
                            </h3>

                            {section.layout === 'grid' ? (
                                // Quick Links with 2-column grid
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <ul className="space-y-3">
                                            {firstColumn.map((item, idx) => (
                                                <li key={idx}>
                                                    <FooterLink to={item.href} external={false}>
                                                        {item.name}
                                                    </FooterLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="space-y-3">
                                            {secondColumn.map((item, idx) => (
                                                <li key={idx}>
                                                    <FooterLink to={item.href} external={false}>
                                                        {item.name}
                                                    </FooterLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                // Regular list with icons
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <FooterLink
                                                to={link.href}
                                                icon={link.icon}
                                                external={link.external}
                                            >
                                                {link.name}
                                            </FooterLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} {siteContent.site?.fullName || 'Digital Rights & Mental Health Initiative Africa'}. All rights reserved.
                            <span className="mx-2 text-gray-600">|</span>
                            <span className="text-gray-500">Registered 501(c)(3) nonprofit</span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
                            <Link
                                to="/privacy-policy"
                                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms-of-service"
                                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                                Terms of Service
                            </Link>
                            <Link
                                to="/accessibility"
                                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                                Accessibility
                            </Link>
                            <Link
                                to="/sitemap"
                                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                            >
                                <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                                Sitemap
                            </Link>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-800/50">
                        <span className="text-xs text-gray-500 flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            Secure Donations
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Tax Deductible
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            85% to Programs
                        </span>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-110 shadow-soft group"
                aria-label="Back to top"
            >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;