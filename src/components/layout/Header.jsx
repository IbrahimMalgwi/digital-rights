import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/content';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Handle hash link clicks
    const handleHashLinkClick = (e, href) => {
        e.preventDefault();

        // Check if it's a hash link (contains #)
        if (href.includes('#')) {
            const [path, hash] = href.split('#');

            // If we're already on the target page
            if (location.pathname === path || (path === '' && location.pathname === '/')) {
                // Scroll to the element with the hash
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Navigate to the page first, then scroll after navigation
                window.location.href = href;
            }
        }
    };

    // Handle external link clicks
    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener noreferrer');
    };

    // Custom Link component that handles hash links and external links
    const HashLink = ({ to, children, className, onClick, external, ...props }) => {
        const handleClick = (e) => {
            if (external) {
                handleExternalLink(to);
            } else if (to.includes('#')) {
                e.preventDefault();
                handleHashLinkClick(e, to);
            }
            if (onClick) onClick(e);
        };

        // Use regular <a> tag for external links, Link for internal
        if (external) {
            return (
                <a
                    href={to}
                    className={className}
                    onClick={handleClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                >
                    {children}
                    <svg className="w-3 h-3 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            );
        }

        return (
            <Link
                to={to}
                className={className}
                onClick={handleClick}
                {...props}
            >
                {children}
            </Link>
        );
    };

    // Navigation items with icons - Projects now direct link, no dropdown
    const navigationItems = [
        { name: 'Home', href: '/', icon: '🏠' },
        { name: 'About', href: '/about', icon: '📖' },
        { name: 'Projects', href: '/projects', icon: '🚀' }, // Removed hasDropdown
        { name: 'Team', href: '/team', icon: '👥' },
        { name: 'Partners', href: '/partners', icon: '🤝' },
        { name: 'Blog', href: '/blog', icon: '✍️' },
        { name: 'Gallery', href: '/gallery', icon: '🖼️' },
        { name: 'Contact', href: '/contact', icon: '📧' }
    ];

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-white/80 backdrop-blur-sm py-5'
            }
            `}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo with enhanced design */}
                    <HashLink to="/" className="group flex items-center space-x-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold transform group-hover:scale-110 transition-transform duration-300 shadow-soft">
                                {siteContent.site?.name?.split(' ').map(word => word[0]).join('').slice(0, 2) || 'D'}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
                                {siteContent.site?.name || 'DRMHI Africa'}
                            </span>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">
                                Digital Rights & Mental Health
                            </span>
                        </div>
                    </HashLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigationItems.map((item) => (
                            <HashLink
                                key={item.name}
                                to={item.href}
                                className={`
                                    flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                    ${location.pathname === item.href
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                }
                                `}
                            >
                                <span className="mr-1.5">{item.icon}</span>
                                {item.name}
                            </HashLink>
                        ))}

                        {/* Enhanced Donate Button */}
                        <HashLink
                            to="/donate"
                            className="ml-4 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <div className="relative flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-soft">
                                <span className="mr-2">❤️</span>
                                Donate
                            </div>
                        </HashLink>
                    </div>

                    {/* Mobile menu button - Enhanced */}
                    <button
                        className="lg:hidden relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5">
                            <span className={`absolute left-0 w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-0' : '-top-1.5'}`}></span>
                            <span className={`absolute left-0 w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-0'}`}></span>
                            <span className={`absolute left-0 w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-0' : 'top-1.5'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => {
                        setIsMobileMenuOpen(false);
                    }}
                />
            </nav>

            {/* Progress Bar */}
            {scrolled && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                    <div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-600 transition-all duration-300"
                        style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
                    ></div>
                </div>
            )}
        </header>
    );
};

export default Header;