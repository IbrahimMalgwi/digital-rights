import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/content';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [nestedDropdown, setNestedDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setNestedDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdowns on route change
    useEffect(() => {
        setActiveDropdown(null);
        setNestedDropdown(null);
        setIsMobileMenuOpen(false);
    }, [location]);

    // Handle hash link clicks
    const handleHashLinkClick = (e, href) => {
        e.preventDefault();

        // Close all dropdowns
        closeAllDropdowns();

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
        } else {
            // Regular link - use React Router
            // We need to use window.location for external or force refresh if needed
            if (href.startsWith('http')) {
                window.location.href = href;
            } else {
                // For internal links, use React Router's navigate
                // But we'll use Link component for this, so we don't need to do anything here
            }
        }
    };

    // Custom Link component that handles hash links
    const HashLink = ({ to, children, className, onClick, ...props }) => {
        const handleClick = (e) => {
            if (to.includes('#')) {
                handleHashLinkClick(e, to);
            }
            if (onClick) onClick(e);
        };

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

    // Define dropdown items for Projects
    const projectItems = [
        {
            name: 'Overview',
            href: '/projects',
            icon: '📋',
            description: 'View all our projects and initiatives'
        },
        {
            name: 'WDFA',
            href: '/wdfa',
            icon: '👩🏾',
            description: 'Women Digital Futures Africa',
            subItems: [
                { name: 'About WDFA', href: '/wdfa', description: 'Mission and vision' },
                { name: 'Programs', href: '/wdfa#programs', description: 'Digital skills training' },
                { name: 'AI Literacy Program', href: '/wdfa#ai-program', description: '6-week AI course' },
                { name: 'Get Involved', href: '/wdfa#involved', description: 'Join as mentor or partner' }
            ]
        },
        {
            name: 'Data Workers Inquiry',
            href: '/data-workers-inquiry',
            icon: '🔬',
            description: 'Global research initiative',
            subItems: [
                { name: 'About the Inquiry', href: '/data-workers-inquiry', description: 'Participatory research' },
                { name: 'Research Methodology', href: '/data-workers-inquiry#methodology', description: 'How we work' },
                { name: 'Regional Inquiries', href: '/data-workers-inquiry#inquiries', description: 'Across 9 countries' },
                { name: 'Events & Webinars', href: '/data-workers-inquiry#events', description: 'Upcoming panels' },
                { name: 'Mental Health Intervention', href: '/data-workers-inquiry#mental-health', description: 'Worker wellbeing' }
            ]
        },
        // Add other featured projects
        ...(siteContent.projects || [])
            .filter(project => project.featured && project.id !== 7 && project.id !== 8)
            .slice(0, 2)
            .map(project => ({
                name: project.title,
                href: `/projects/${project.id}`,
                icon: '🌟',
                description: project.description?.substring(0, 60) + '...'
            }))
    ];

    // Navigation items with icons
    const navigationItems = [
        { name: 'Home', href: '/', icon: '🏠' },
        { name: 'About', href: '/about', icon: '📖' },
        { name: 'Projects', href: '/projects', icon: '🚀', hasDropdown: true },
        { name: 'Team', href: '/team', icon: '👥' },
        { name: 'Partners', href: '/partners', icon: '🤝' },
        { name: 'Blog', href: '/blog', icon: '✍️' },
        { name: 'Gallery', href: '/gallery', icon: '🖼️' },
        { name: 'Contact', href: '/contact', icon: '📧' }
    ];

    const toggleProjectsDropdown = () => {
        setActiveDropdown(activeDropdown === 'projects' ? null : 'projects');
        setNestedDropdown(null);
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null);
        setNestedDropdown(null);
    };

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
                    <HashLink to="/" className="group flex items-center space-x-3" onClick={closeAllDropdowns}>
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
                        {navigationItems.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div key={item.name} className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={toggleProjectsDropdown}
                                            className={`
                                                flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                                ${activeDropdown === 'projects'
                                                ? 'text-primary-600 bg-primary-50'
                                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                            }
                                                ${location.pathname.startsWith('/projects') ? 'text-primary-600' : ''}
                                            `}
                                        >
                                            <span className="mr-1.5">{item.icon}</span>
                                            <span>{item.name}</span>
                                            <svg
                                                className={`
                                                    w-4 h-4 ml-1.5 transition-all duration-300
                                                    ${activeDropdown === 'projects' ? 'rotate-180' : ''}
                                                `}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Enhanced Dropdown Menu */}
                                        {activeDropdown === 'projects' && (
                                            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-slide-down">
                                                <div className="py-2">
                                                    {projectItems.map((subItem) => (
                                                        <div key={subItem.name} className="relative">
                                                            {subItem.subItems ? (
                                                                // Item with nested dropdown - Enhanced
                                                                <div className="border-b border-gray-100 last:border-0">
                                                                    <div
                                                                        className="flex items-center justify-between px-4 py-3 hover:bg-primary-50 cursor-pointer transition-colors duration-200"
                                                                        onClick={() => setNestedDropdown(
                                                                            nestedDropdown === subItem.name ? null : subItem.name
                                                                        )}
                                                                    >
                                                                        <div className="flex items-center flex-1">
                                                                            <span className="text-xl mr-3">{subItem.icon}</span>
                                                                            <div>
                                                                                <span className="font-semibold text-gray-900 block">
                                                                                    {subItem.name}
                                                                                </span>
                                                                                <span className="text-xs text-gray-500">
                                                                                    {subItem.description}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <svg
                                                                            className={`
                                                                                w-5 h-5 text-gray-400 transition-transform duration-300
                                                                                ${nestedDropdown === subItem.name ? 'rotate-90' : ''}
                                                                            `}
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    </div>

                                                                    {/* Nested dropdown - Enhanced */}
                                                                    {nestedDropdown === subItem.name && (
                                                                        <div className="bg-gray-50 py-2 px-4 animate-fade-in">
                                                                            {subItem.subItems.map((nestedItem) => (
                                                                                <HashLink
                                                                                    key={nestedItem.name}
                                                                                    to={nestedItem.href}
                                                                                    className="flex items-center px-4 py-2 rounded-lg text-gray-600 hover:bg-white hover:text-primary-600 transition-all duration-200 group"
                                                                                    onClick={closeAllDropdowns}
                                                                                >
                                                                                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-3"></span>
                                                                                    <div className="flex-1">
                                                                                        <span className="text-sm font-medium block">
                                                                                            {nestedItem.name}
                                                                                        </span>
                                                                                        {nestedItem.description && (
                                                                                            <span className="text-xs text-gray-400">
                                                                                                {nestedItem.description}
                                                                                            </span>
                                                                                        )}
                                                                                    </div>
                                                                                </HashLink>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                // Regular dropdown item - Enhanced
                                                                <HashLink
                                                                    to={subItem.href}
                                                                    className="flex items-center px-4 py-3 hover:bg-primary-50 transition-colors duration-200"
                                                                    onClick={closeAllDropdowns}
                                                                >
                                                                    <span className="text-xl mr-3">{subItem.icon}</span>
                                                                    <div>
                                                                        <span className="font-semibold text-gray-900 block">
                                                                            {subItem.name}
                                                                        </span>
                                                                        {subItem.description && (
                                                                            <span className="text-xs text-gray-500">
                                                                                {subItem.description}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </HashLink>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Dropdown Footer */}
                                                <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                                                    <HashLink
                                                        to="/projects"
                                                        className="flex items-center justify-center text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                                                        onClick={closeAllDropdowns}
                                                    >
                                                        View All Projects
                                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </HashLink>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            // Regular navigation items
                            return (
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
                                    onClick={closeAllDropdowns}
                                >
                                    <span className="mr-1.5">{item.icon}</span>
                                    {item.name}
                                </HashLink>
                            );
                        })}

                        {/* Enhanced Donate Button */}
                        <HashLink
                            to="/donate"
                            className="ml-4 relative group"
                            onClick={closeAllDropdowns}
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
                        closeAllDropdowns();
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