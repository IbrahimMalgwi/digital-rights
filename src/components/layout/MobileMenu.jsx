import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/content';

const MobileMenu = ({ isOpen, onClose }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [nestedDropdown, setNestedDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('menu');
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        onClose();
    }, [location.pathname, onClose]);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Handle external link click
    const handleExternalLink = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener noreferrer');
        handleLinkClick();
    };

    // Custom link component that handles both internal and external links
    const MenuLink = ({ to, children, className, icon, description, external, onClick, ...props }) => {
        const handleClick = (e) => {
            if (external) {
                handleExternalLink(e, to);
            } else {
                if (onClick) onClick(e);
                handleLinkClick();
            }
        };

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
                    {icon && <span className="text-lg mr-2">{icon}</span>}
                    <div className="flex-1">
                        <span className="block font-medium">{children}</span>
                        {description && <span className="text-xs text-secondary-400">{description}</span>}
                    </div>
                    <svg className="w-3 h-3 ml-2 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {icon && <span className="text-lg mr-2">{icon}</span>}
                <div className="flex-1">
                    <span className="block font-medium">{children}</span>
                    {description && <span className="text-xs text-secondary-400">{description}</span>}
                </div>
            </Link>
        );
    };

    // Enhanced project items with external links
    const projectItems = [
        {
            name: 'All Projects',
            href: '/projects',
            icon: '📁',
            description: 'View all our initiatives',
            external: false
        },
        {
            name: 'WDFA',
            href: 'https://wdfa.org',
            icon: '🌍',
            description: 'Women Digital Futures Africa',
            external: true,
            subItems: [
                { name: 'About WDFA', href: 'https://wdfa.org/about', icon: 'ℹ️', description: 'Mission and vision', external: true },
                { name: 'Programs', href: 'https://wdfa.org/programs', icon: '📚', description: 'Digital skills training', external: true },
                { name: 'AI Literacy Program', href: 'https://wdfa.org/ai-program', icon: '🤖', description: '6-week AI course', external: true },
                { name: 'Get Involved', href: 'https://wdfa.org/get-involved', icon: '🤝', description: 'Join as mentor or partner', external: true }
            ]
        },
        {
            name: 'Data Workers Inquiry',
            href: 'https://dataworkers.org',
            icon: '📊',
            description: 'Global research initiative',
            external: true,
            subItems: [
                { name: 'About the Inquiry', href: 'https://dataworkers.org/about', icon: 'ℹ️', description: 'Participatory research', external: true },
                { name: 'Research Methodology', href: 'https://dataworkers.org/methodology', icon: '🔬', description: 'How we work', external: true },
                { name: 'Regional Inquiries', href: 'https://dataworkers.org/regions', icon: '🌍', description: 'Across 9 countries', external: true },
                { name: 'Events & Webinars', href: 'https://dataworkers.org/events', icon: '📅', description: 'Upcoming panels', external: true },
                { name: 'Mental Health Intervention', href: 'https://dataworkers.org/mental-health', icon: '🧠', description: 'Worker wellbeing', external: true }
            ]
        },
        ...(siteContent.projects || [])
            .filter(project => project.featured)
            .slice(0, 2)
            .map(project => ({
                name: project.title,
                href: `/projects/${project.id}`,
                icon: '🌟',
                description: project.description?.substring(0, 50) + '...',
                external: false
            }))
    ];

    // Navigation items with icons
    const navigationItems = [
        { name: 'Home', href: '/', icon: '🏠', external: false },
        { name: 'About', href: '/about', icon: 'ℹ️', external: false },
        { name: 'Projects', href: '/projects', icon: '📁', hasDropdown: true, external: false },
        { name: 'Team', href: '/team', icon: '👥', external: false },
        { name: 'Awards', href: '/awards', icon: '🏆', external: false },
        { name: 'Partners', href: '/partners', icon: '🤝', external: false },
        { name: 'Blog', href: '/blog', icon: '✍️', external: false },
        { name: 'Gallery', href: '/gallery', icon: '🖼️', external: false },
        { name: 'Contact', href: '/contact', icon: '📧', external: false }
    ];

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
        setNestedDropdown(null);
    };

    const toggleNestedDropdown = (dropdown) => {
        setNestedDropdown(nestedDropdown === dropdown ? null : dropdown);
    };

    const handleLinkClick = () => {
        setActiveDropdown(null);
        setNestedDropdown(null);
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Mobile Menu Panel */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`
                    fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-secondary-100">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-medium">
                            {siteContent.site?.name?.split(' ').map(word => word[0]).join('').slice(0, 2) || 'D'}
                        </div>
                        <div>
                            <h2 className="font-display font-bold text-secondary-900">Menu</h2>
                            <p className="text-xs text-secondary-500">Navigate & Explore</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-secondary-100">
                    <button
                        onClick={() => setActiveTab('menu')}
                        className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                            activeTab === 'menu'
                                ? 'text-primary-600'
                                : 'text-secondary-500 hover:text-secondary-700'
                        }`}
                    >
                        Main Menu
                        {activeTab === 'menu' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('programs')}
                        className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                            activeTab === 'programs'
                                ? 'text-primary-600'
                                : 'text-secondary-500 hover:text-secondary-700'
                        }`}
                    >
                        Programs
                        {activeTab === 'programs' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                        )}
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-[calc(100%-180px)] p-6">
                    {activeTab === 'menu' ? (
                        <div className="space-y-2">
                            {navigationItems.map((item) => {
                                if (item.hasDropdown) {
                                    return (
                                        <div key={item.name} className="border-b border-secondary-100 last:border-0">
                                            <button
                                                onClick={() => toggleDropdown('projects')}
                                                className="w-full flex items-center justify-between py-4 px-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                                            >
                                                <div className="flex items-center">
                                                    <span className="text-xl mr-3">{item.icon}</span>
                                                    <span className="font-medium">{item.name}</span>
                                                </div>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-300 ${
                                                        activeDropdown === 'projects' ? 'rotate-180' : ''
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Projects dropdown */}
                                            <div
                                                className={`
                                                    transition-all duration-300 overflow-hidden
                                                    ${activeDropdown === 'projects' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                                                `}
                                            >
                                                <div className="ml-4 pl-4 border-l-2 border-primary-100 space-y-2 py-2">
                                                    {projectItems.map((subItem) => (
                                                        <div key={subItem.name}>
                                                            {subItem.subItems ? (
                                                                <>
                                                                    <button
                                                                        onClick={() => toggleNestedDropdown(subItem.name)}
                                                                        className="w-full flex items-center justify-between py-3 px-3 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                                                                    >
                                                                        <div className="flex items-center">
                                                                            <span className="text-lg mr-2">{subItem.icon}</span>
                                                                            <div className="text-left">
                                                                                <span className="text-sm font-medium block">
                                                                                    {subItem.name}
                                                                                </span>
                                                                                <span className="text-xs text-secondary-400">
                                                                                    {subItem.description}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <svg
                                                                            className={`w-4 h-4 transition-transform duration-300 ${
                                                                                nestedDropdown === subItem.name ? 'rotate-90' : ''
                                                                            }`}
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    </button>

                                                                    {/* Nested dropdown */}
                                                                    <div
                                                                        className={`
                                                                            transition-all duration-300 overflow-hidden
                                                                            ${nestedDropdown === subItem.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                                                        `}
                                                                    >
                                                                        <div className="ml-4 pl-4 border-l-2 border-primary-50 space-y-2 py-2">
                                                                            {subItem.subItems.map((nestedItem) => (
                                                                                <MenuLink
                                                                                    key={nestedItem.name}
                                                                                    to={nestedItem.href}
                                                                                    icon={nestedItem.icon}
                                                                                    description={nestedItem.description}
                                                                                    external={nestedItem.external}
                                                                                    className="flex items-center py-2 px-3 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                                                                                    onClick={handleLinkClick}
                                                                                >
                                                                                    {nestedItem.name}
                                                                                </MenuLink>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <MenuLink
                                                                    to={subItem.href}
                                                                    icon={subItem.icon}
                                                                    description={subItem.description}
                                                                    external={subItem.external}
                                                                    className="flex items-center py-3 px-3 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                                                                    onClick={handleLinkClick}
                                                                >
                                                                    {subItem.name}
                                                                </MenuLink>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <MenuLink
                                        key={item.name}
                                        to={item.href}
                                        icon={item.icon}
                                        external={item.external}
                                        className="flex items-center py-4 px-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 border-b border-secondary-100 last:border-0"
                                        onClick={handleLinkClick}
                                    >
                                        {item.name}
                                    </MenuLink>
                                );
                            })}
                        </div>
                    ) : (
                        // Programs Tab Content
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-4">
                                <h3 className="font-display font-bold text-secondary-900 mb-2">Featured Programs</h3>
                                <p className="text-xs text-secondary-600 mb-4">Discover our key initiatives</p>

                                <div className="space-y-3">
                                    {projectItems.slice(1, 3).map((program) => (
                                        <MenuLink
                                            key={program.name}
                                            to={program.href}
                                            icon={program.icon}
                                            description={program.description}
                                            external={program.external}
                                            className="flex items-center p-3 bg-white rounded-xl hover:shadow-medium transition-all duration-300 hover:border-primary-200 border border-transparent"
                                            onClick={handleLinkClick}
                                        >
                                            {program.name}
                                        </MenuLink>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-secondary-50 rounded-2xl p-4">
                                <h3 className="font-display font-bold text-secondary-900 mb-3">Quick Actions</h3>
                                <div className="space-y-2">
                                    <MenuLink
                                        to="/donate"
                                        className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-medium transition-all duration-300 hover:border-primary-200 border border-transparent"
                                        onClick={handleLinkClick}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">❤️</span>
                                            <div>
                                                <span className="font-semibold text-secondary-900">Donate Now</span>
                                                <p className="text-xs text-secondary-500">Support our work</p>
                                            </div>
                                        </div>
                                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </MenuLink>

                                    <MenuLink
                                        to="/contact"
                                        className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-medium transition-all duration-300 hover:border-primary-200 border border-transparent"
                                        onClick={handleLinkClick}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">🙋</span>
                                            <div>
                                                <span className="font-semibold text-secondary-900">Volunteer</span>
                                                <p className="text-xs text-secondary-500">Join our team</p>
                                            </div>
                                        </div>
                                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </MenuLink>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent border-t border-secondary-100">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-4">
                            {Object.entries(siteContent.site?.social || {}).slice(0, 4).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all duration-300"
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    <span className="text-xs font-bold uppercase">{platform[0]}</span>
                                </a>
                            ))}
                        </div>
                        <MenuLink
                            to="/contact"
                            className="text-xs text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                            onClick={handleLinkClick}
                        >
                            Contact Us
                        </MenuLink>
                    </div>

                    {/* Donate Button (Mobile) */}
                    <MenuLink
                        to="/donate"
                        className="block w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-[1.02] text-center shadow-medium"
                        onClick={handleLinkClick}
                    >
                        <span className="mr-2">❤️</span>
                        Support Our Mission
                    </MenuLink>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
